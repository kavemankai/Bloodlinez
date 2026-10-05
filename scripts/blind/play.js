#!/usr/bin/env node
/* Blind play harness for AI testers.
   Keeps one browser open in the background and shows the tester only what a person would see:
   the visible text of the page, with every button, link, field and menu numbered, plus screenshots.
   It never prints page source, scripts or stored data.

   node play.js start <url-or-file> [password]   open the game (recording the playtest log)
   node play.js look                             visible text, with [n] before everything you can use
   node play.js click <n>                        press button or link n
   node play.js type <n> <text...>               type into field n (replaces what is there)
   node play.js choose <n> <option text...>      pick an option in menu n (exact or partial text)
   node play.js enter <n>                        press Enter in field n
   node play.js shot [file.png]                  save a screenshot (to look at photos)
   node play.js clickxy <x> <y>                  click a point on the last screenshot (photo lab marks)
   node play.js savelog [file.json]              save the playtest log to a file for the organiser
   node play.js stop                             close the browser

   Needs playwright-core (NODE_PATH) and Chromium (CHROME env var, or Playwright's default).
*/
const fs = require('fs'), path = require('path'), http = require('http'), {spawn} = require('child_process');
const DIR = process.env.BLIND_DIR || path.join(require('os').tmpdir(), 'bloodlinez-blind');
const PORT_FILE = path.join(DIR, 'port');
const [cmd, ...args] = process.argv.slice(2);

function send(c, a) {
  return new Promise((res, rej) => {
    let port; try { port = +fs.readFileSync(PORT_FILE, 'utf8'); } catch (e) { return rej(new Error('Not started. Run: node play.js start <url> [password]')); }
    const body = JSON.stringify({cmd: c, args: a});
    const req = http.request({host: '127.0.0.1', port, method: 'POST', path: '/', headers: {'content-type': 'application/json'}}, r => {
      let out = ''; r.on('data', d => out += d); r.on('end', () => res(out));
    });
    req.on('error', () => rej(new Error('The browser is not running. Run start again.'))); req.end(body);
  });
}

async function serve(url, password) {
  const {chromium} = require('playwright-core');
  const b = await chromium.launch({executablePath: process.env.CHROME || undefined, args: ['--no-sandbox']});
  const ctx = await b.newContext({viewport: {width: 1280, height: 900}, acceptDownloads: true});
  const p = await ctx.newPage();
  const target = /^https?:|^file:/.test(url) ? url : 'file://' + path.resolve(url);
  await p.goto(target + (target.includes('?') ? '&' : '?') + 'playtest=1');
  if (await p.locator('#pw').count()) {
    if (!password) throw new Error('This build asks for a password.');
    await p.fill('#pw', password); await p.click('#go'); await p.waitForTimeout(1500);
  }
  await p.waitForTimeout(400);
  // number everything usable, read the visible text, then remove the numbers again
  const look = () => p.evaluate(() => {
    document.querySelectorAll('[data-bn]').forEach(e => e.removeAttribute('data-bn'));
    const vis = e => { const r = e.getBoundingClientRect(); const s = getComputedStyle(e); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
    const imgs = [];
    document.querySelectorAll('img[alt], svg[role=img][aria-label]').forEach(e => {
      if (!vis(e)) return; const alt = e.getAttribute('alt') || e.getAttribute('aria-label'); if (!alt) return;
      const m = document.createElement('span'); m.style.cssText = 'all:initial;font:inherit'; m.textContent = ` [picture: ${alt}] `; e.before(m); imgs.push(m);
    });
    const els = [...document.querySelectorAll('button, a[href], input, select, textarea, [data-a]')].filter(e => vis(e) && !e.closest('[data-bn]') && !e.disabled);
    const marks = [], hidden = [];
    els.forEach((e, i) => {
      const n = i + 1; e.setAttribute('data-bn', n);
      const m = document.createElement('span'); m.className = '__bn'; m.style.cssText = 'all:initial;font:inherit';
      if (e.tagName === 'SELECT') m.textContent = ` [${n}: menu, now "${e.selectedOptions[0] ? e.selectedOptions[0].textContent.trim() : ''}"; options: ${[...e.options].map(o => o.textContent.trim()).filter(Boolean).join(' | ')}] `;
      else if (e.tagName === 'INPUT' || e.tagName === 'TEXTAREA') m.textContent = ` [${n}: text field${e.placeholder ? ' "' + e.placeholder + '"' : ''}${e.value ? ', contains "' + e.value + '"' : ''}] `;
      else {
        const label = (e.innerText || '').replace(/\s+/g, ' ').trim() || e.getAttribute('aria-label') || e.getAttribute('title') || '';
        m.textContent = ` [${n}] ${label} `; m.style.display = getComputedStyle(e).display.startsWith('inline') ? 'inline' : 'block';
      }
      if (e.tagName === 'SELECT' || e.tagName === 'INPUT' || e.tagName === 'TEXTAREA') { e.after(m); e.__h = e.style.display; e.style.display = 'none'; hidden.push(e); }
      else { e.before(m); e.__h = e.style.display; e.style.display = 'none'; hidden.push(e); }
      marks.push(m);
    });
    const modal = document.getElementById('modal');
    const root = modal && !modal.hidden ? modal : document.body;
    const text = (root === modal ? '[A window is open on top of the page. Close it to get back.]\n' : '') + root.innerText;
    marks.concat(imgs).forEach(m => m.remove()); hidden.forEach(e => { e.style.display = e.__h || ''; });
    return text.replace(/\n{3,}/g, '\n\n').trim();
  });
  const el = n => p.locator(`[data-bn="${n}"]`).first();
  const srv = http.createServer(async (req, res) => {
    let body = ''; req.on('data', d => body += d);
    req.on('end', async () => {
      let out = '';
      try {
        const {cmd, args} = JSON.parse(body || '{}');
        if (cmd === 'look') out = await look();
        else if (cmd === 'click') { await el(args[0]).click(); await p.waitForTimeout(300); out = 'Clicked ' + args[0] + '. Run look to see the page.'; }
        else if (cmd === 'type') { await el(args[0]).fill(args.slice(1).join(' ')); out = 'Typed.'; }
        else if (cmd === 'enter') { await el(args[0]).press('Enter'); await p.waitForTimeout(300); out = 'Pressed Enter. Run look to see the page.'; }
        else if (cmd === 'choose') {
          const want = args.slice(1).join(' ').toLowerCase(), s = el(args[0]);
          const opts = await s.evaluate(e => [...e.options].map(o => ({v: o.value, t: o.textContent.trim()})));
          const o = opts.find(o => o.t.toLowerCase() === want) || opts.find(o => o.t.toLowerCase().includes(want));
          if (!o) out = 'No option like that. Options: ' + opts.map(o => o.t).join(' | ');
          else { await s.selectOption(o.v); await p.waitForTimeout(200); out = 'Chose "' + o.t + '".'; }
        }
        else if (cmd === 'shot') { const f = path.resolve(args[0] || path.join(DIR, 'screen.png')); await p.screenshot({path: f}); out = 'Saved ' + f + ' (1280 x 900; clickxy uses these pixel positions).'; }
        else if (cmd === 'clickxy') { await p.mouse.click(+args[0], +args[1]); await p.waitForTimeout(300); out = 'Clicked at ' + args[0] + ',' + args[1] + '.'; }
        else if (cmd === 'savelog') {
          const f = path.resolve(args[0] || path.join(DIR, 'playtest-log.json'));
          const st = await p.evaluate(() => { try { return JSON.parse(localStorage.getItem('bloodlines-v3') || '{}'); } catch (e) { return {}; } });
          const ev = st.plog || [];
          const t0 = ev.length ? ev[0].t : Date.now(), t1 = ev.length ? ev[ev.length - 1].t : t0;
          fs.writeFileSync(f, JSON.stringify({game: 'Bloodlinez', case: 1, tester: process.env.TESTER || 'ai', exported: new Date().toISOString(),
            summary: {events: ev.length, minutes: Math.round((t1 - t0) / 600) / 100, won: !!st.won, failed: !!st.failed, filings: st.attempts || 0},
            tree: {people: (st.tree || {}).people ? st.tree.people.length : 0, links: ((st.tree || {}).links || []).map(l => ({a: l.a, t: l.t, b: l.b, recs: l.recs}))}, events: ev}, null, 1));
          out = 'Saved the log to ' + f;
        }
        else if (cmd === 'stop') { out = 'Stopped.'; res.end(out); await b.close(); try { fs.unlinkSync(PORT_FILE); } catch (e) {} process.exit(0); }
        else out = 'Unknown command.';
      } catch (e) { out = 'That did not work: ' + e.message.split('\n')[0]; }
      res.end(out);
    });
  });
  srv.listen(0, '127.0.0.1', () => { fs.writeFileSync(PORT_FILE, String(srv.address().port)); });
}

(async () => {
  try {
    if (cmd === '__serve') return serve(args[0], args[1]);
    if (cmd === 'start') {
      if (!args[0]) throw new Error('Usage: node play.js start <url-or-file> [password]');
      fs.mkdirSync(DIR, {recursive: true}); try { await send('stop', []); } catch (e) {} try { fs.unlinkSync(PORT_FILE); } catch (e) {}
      const logf = fs.openSync(path.join(DIR, 'browser.log'), 'w');
      spawn(process.execPath, [__filename, '__serve', args[0], args[1] || ''], {detached: true, stdio: ['ignore', logf, logf], env: process.env}).unref();
      for (let i = 0; i < 100 && !fs.existsSync(PORT_FILE); i++) await new Promise(r => setTimeout(r, 200));
      if (!fs.existsSync(PORT_FILE)) throw new Error('The browser did not start. See ' + path.join(DIR, 'browser.log'));
      console.log('Game open. Run: node play.js look'); return;
    }
    if (!cmd || cmd === 'help') { console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0]); return; }
    console.log(await send(cmd, args));
  } catch (e) { console.error(e.message); process.exit(1); }
})();
