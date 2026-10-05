#!/usr/bin/env python3
"""Summarise Bloodlinez playtest logs.

Usage: python3 scripts/analyse_playtests.py FOLDER_OR_FILES... > report.md

Reads the JSON files saved by the game's Playtest log and writes a Markdown report:
per-tester totals, time to each accepted finding, stalls, records nobody opened,
wrong links, joint proofs, how the 1979 licence was found, flags and filings.
Standard library only.
"""
import json, os, re, sys
from collections import Counter, defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STALL_MIN = 5  # a gap longer than this many minutes counts as a stall
FINDINGS = ['F1', 'F2', 'F3', 'F4', 'F5']


def record_titles():
    """Record ids and titles, read from src/data.js so the report uses names, not ids."""
    try:
        src = open(os.path.join(ROOT, 'src', 'data.js'), encoding='utf8').read()
    except OSError:
        return {}
    out = {}
    for m in re.finditer(r"^\s*(\w+):\{kind:'(\w+)',year:(\d+),title:(['\"])(.*?)\4", src, re.M):
        out[m.group(1)] = {'kind': m.group(2), 'year': int(m.group(3)), 'title': m.group(5).replace("\\'", "'"),
                           'hidden': 'hidden:true' in src[m.end():m.end() + 300].split('render:')[0]}
    return out


def load(paths):
    files = []
    for p in paths:
        if os.path.isdir(p):
            files += [os.path.join(p, f) for f in sorted(os.listdir(p)) if f.endswith('.json')]
        else:
            files.append(p)
    logs = []
    for f in files:
        try:
            d = json.load(open(f, encoding='utf8'))
        except (OSError, ValueError) as e:
            print(f'<!-- skipped {f}: {e} -->')
            continue
        if not isinstance(d, dict) or not isinstance(d.get('events'), list):
            print(f'<!-- skipped {f}: not a playtest log -->')
            continue
        d['_name'] = os.path.splitext(os.path.basename(f))[0].replace('bloodlinez-playtest-', '')
        logs.append(d)
    return logs


def mins(ms):
    return round(ms / 60000, 1)


def opened(e):
    """The record id an event opens, if any."""
    if e.get('type') == 'view' and str(e.get('route', '')).startswith('record/'):
        return e['route'].split('/', 1)[1]
    if e.get('type') == 'preview' and e.get('id'):
        return e['id']
    return None


def describe(e, T):
    t = e.get('type')
    if t == 'view':
        r = str(e.get('route', ''))
        if r.startswith('record/'):
            rid = r.split('/', 1)[1]
            return f"reading {T.get(rid, {}).get('title', rid)}"
        return f"on {e.get('site', '?')}:{r}"
    if t == 'preview':
        return f"reading {T.get(e.get('id'), {}).get('title', e.get('id'))}"
    if t == 'search':
        return f"searched \"{(e.get('name', '') + ' ' + e.get('kw', '')).strip()}\" ({e.get('results', '?')} results)"
    if t == 'link':
        return f"linked {e.get('a')} {e.get('rel')} {e.get('b')} ({'partly proven' if e.get('partial') else e.get('status') or 'refused'})"
    if t == 'filing':
        return f"filed (attempt {e.get('attempt')}, {e.get('accepted')} accepted)"
    return t


def analyse(log, T):
    ev = sorted((e for e in log['events'] if isinstance(e.get('t'), (int, float))), key=lambda e: e['t'])
    t0 = ev[0]['t'] if ev else 0
    r = {'name': log['_name'], 'events': len(ev), 'minutes': mins(ev[-1]['t'] - t0) if ev else 0}
    r['searches'] = [e for e in ev if e.get('type') == 'search']
    r['empty_searches'] = [e for e in r['searches'] if e.get('results') == 0]
    r['opened'] = []
    for e in ev:
        rid = opened(e)
        if rid and rid not in r['opened']:
            r['opened'].append(rid)
    links = [e for e in ev if e.get('type') == 'link']
    r['links'] = links
    r['wrong'] = [e for e in links if e.get('ok') and e.get('status') == 'unproven' and not e.get('partial')]
    r['refused'] = [e for e in links if not e.get('ok')]
    # joint proof: a link first logged as partial, later logged as proven
    partial = {(e['a'], e.get('rel'), e['b']) for e in links if e.get('partial')}
    r['partial'] = sorted(partial)
    r['joint_done'] = sorted({(e['a'], e.get('rel'), e['b']) for e in links if e.get('status') == 'proven' and (e['a'], e.get('rel'), e['b']) in partial})
    final = {(l['a'], l['t'], l['b']): l.get('status') for l in (log.get('tree') or {}).get('links', [])}
    r['final_unproven'] = [k for k, s in final.items() if s != 'proven']
    r['flags'] = [e for e in ev if e.get('type') == 'flag']
    r['labs'] = [e for e in ev if e.get('type') == 'lab']
    r['hands'] = [e for e in ev if e.get('type') == 'hand']
    r['nils'] = [e for e in ev if e.get('type') == 'nil']
    r['guide'] = sum(1 for e in ev if e.get('type') == 'guide')
    r['hint'] = any(e.get('type') == 'pin' and e.get('id') == 'hintOfficial' for e in ev)
    r['replays'] = sum(1 for e in ev if e.get('type') == 'replay')
    filings = [e for e in ev if e.get('type') == 'filing']
    r['filings'] = filings
    r['first_accept'] = {}
    for f in filings:
        for k, v in (f.get('results') or {}).items():
            if v is True and k not in r['first_accept']:
                r['first_accept'][k] = mins(f['t'] - t0)
    s = log.get('summary') or {}
    r['won'], r['failed'] = s.get('won'), s.get('failed')
    # stalls: long gaps, with what the player was doing just before
    r['stalls'] = []
    for a, b in zip(ev, ev[1:]):
        gap = b['t'] - a['t']
        if gap > STALL_MIN * 60000:
            r['stalls'].append({'at': mins(a['t'] - t0), 'gap': mins(gap), 'before': describe(a, T), 'after': describe(b, T)})
    # how the 1979 licence was found: the last search before it was first opened
    r['licence'] = None
    for i, e in enumerate(ev):
        if opened(e) == 'licence1979':
            prior = [x for x in ev[:i] if x.get('type') == 'search']
            r['licence'] = {'at': mins(e['t'] - t0),
                            'via': (prior[-1].get('name', '') + ' ' + prior[-1].get('kw', '')).strip() if prior else '(not from a search)'}
            break
    return r


def table(rows, head):
    out = ['| ' + ' | '.join(head) + ' |', '|' + '---|' * len(head)]
    out += ['| ' + ' | '.join(str(c) for c in row) + ' |' for row in rows]
    return '\n'.join(out)


def report(logs):
    T = record_titles()
    R = [analyse(l, T) for l in logs]
    n = len(R)
    out = [f'# Bloodlinez playtest report', '', f'{n} log{"s" if n != 1 else ""}. Stall = no activity for more than {STALL_MIN} minutes.', '']
    if not R:
        out.append('No logs found.')
        return '\n'.join(out)

    out += ['## Testers', '', table([[r['name'], r['minutes'], len(r['filings']),
        ', '.join(str(f.get('accepted')) for f in r['filings']) or '-',
        'won' if r['won'] else 'failed' if r['failed'] else 'unfinished',
        len(r['searches']), len(r['opened']), len(r['links']), len(r['stalls']), 'yes' if r['hint'] else 'no']
        for r in R], ['Tester', 'Minutes', 'Filings', 'Accepted per filing', 'Result', 'Searches', 'Records opened', 'Links tried', 'Stalls', 'Used planted hint']), '']

    out += ['## Minutes to each accepted finding', '', table([[r['name']] + [r['first_accept'].get(f, '-') for f in FINDINGS] for r in R], ['Tester'] + FINDINGS), '']
    rej = Counter(k for r in R for f in r['filings'] for k, v in (f.get('results') or {}).items() if v is False)
    if rej:
        out += ['Rejections across all filings: ' + ', '.join(f'{k} {c}' for k, c in sorted(rej.items())) + '.', '']

    out += ['## Stalls', '']
    stalls = [(r['name'], s) for r in R for s in r['stalls']]
    out += [table([[nm, s['at'], s['gap'], s['before'], s['after']] for nm, s in stalls], ['Tester', 'At minute', 'Gap (min)', 'Doing before', 'Did next'])] if stalls else ['None.']
    out += ['']

    out += ['## The 1979 licence (index typo)', '']
    found = [r for r in R if r['licence']]
    out += [f'{len(found)} of {n} opened it.', '']
    if found:
        out += [table([[r['name'], r['licence']['at'], r['licence']['via']] for r in found], ['Tester', 'At minute', 'Last search before'])]
    out += ['']

    out += ['## Joint proof', '']
    out += [table([[r['name'], len(r['partial']), len(r['joint_done']), '; '.join(f'{a} {t} {b}' for a, t, b in r['partial'] if (a, t, b) not in r['joint_done']) or '-'] for r in R],
                  ['Tester', 'Links left partly proven at some point', 'Completed later', 'Never completed']), '']

    out += ['## Wrong links (added, not shown by the record)', '']
    wrong = Counter(f"{e['a']} {e.get('rel')} {e['b']}" for r in R for e in r['wrong'])
    out += [table([[k, c] for k, c in wrong.most_common()], ['Link', 'Testers × times'])] if wrong else ['None.']
    out += ['']
    left = Counter(f'{a} {t} {b}' for r in R for a, t, b in r['final_unproven'])
    if left:
        out += ['Still unproven in the final trees: ' + '; '.join(f'{k} ({c})' for k, c in left.most_common()) + '.', '']

    out += ['## Records', '']
    opened_by = Counter(rid for r in R for rid in r['opened'])
    never = [rid for rid, m in sorted(T.items(), key=lambda x: x[1]['year']) if rid not in opened_by and not m['hidden']]
    out += [f'Opened by every tester: {", ".join(T.get(k, {}).get("title", k) for k, c in opened_by.items() if c == n) or "none"}.', '']
    out += [f'Never opened by anyone ({len(never)}): ' + (', '.join(f"{T[k]['title']} ({T[k]['year']})" for k in never) or 'none') + '.', '']

    out += ['## Searches that found nothing', '']
    empty = Counter((e.get('name', '') + ' ' + e.get('kw', '')).strip().lower() for r in R for e in r['empty_searches'])
    out += [table([[q or '(blank)', c] for q, c in empty.most_common(30)], ['Query', 'Times'])] if empty else ['None.']
    out += ['']

    out += ['## Flags shown', '']
    sev = Counter(e.get('sev') for r in R for e in r['flags'])
    out += [', '.join(f'{k}: {c}' for k, c in sev.most_common()) or 'None.', '']
    texts = Counter(e.get('text') for r in R for e in r['flags'])
    if texts:
        out += [table([[t, c] for t, c in texts.most_common(15)], ['Flag', 'Testers who saw it']), '']

    out += ['## Tools', '', table([[r['name'], len(r['labs']), sum(1 for e in r['labs'] if e.get('ok')), sum(e.get('misses') or 0 for e in r['labs']),
        len(r['hands']), sum(1 for e in r['hands'] if e.get('ok')), len(r['nils']), r['guide'], r['replays']] for r in R],
        ['Tester', 'Lab runs', 'Positive', 'Missed clicks', 'Handwriting runs', 'Positive', 'Nil returns', 'Field guide opens', 'Replays']), '']
    return '\n'.join(out)


if __name__ == '__main__':
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    print(report(load(sys.argv[1:])))
