# Blind AI testers

How to have AI agents play Case 1 without knowing the answers, then review it. Read this as the organiser. Testers never see this file.

## What they are for

AI testers are cheap, fast and patient. Use them to find:

- **Giveaways.** Menus, labels, flags, mail or guide text that tell a player something before a record proves it. The event dropdown that listed "was attacked and turned" on every record is the kind of thing they should catch.
- **Dead ends.** Records that can't be found, links that won't prove, findings that can't be filed.
- **Contradictions.** Dates, ages and names that disagree between records.
- **Confusing interface.** Buttons whose purpose isn't clear, feedback that misleads.

They are not a substitute for people. An AI reads every word, never gets bored, and searches more systematically than a person. Don't tune difficulty or timing on AI results. Trust their giveaways, bugs and contradictions; treat their fun and difficulty ratings as weak signals.

## Keeping them blind

The game's page source contains every answer, and the repo contains the walkthrough. A tester that can read either is useless. Three layers keep them out:

1. **The harness.** `scripts/blind/play.js` keeps a browser open and shows the tester only what a person would see: the visible text, with every button, field and menu numbered, plus screenshots. It never prints source or stored data. `tests/blind.js` checks that.
2. **An empty working folder.** Each tester runs in its own new folder containing only `play.js`. The repo is not inside it.
3. **Restricted tools.** Run the tester with Claude Code in restricted mode. File tools only work inside its folder, and the only command it may run is `node play.js`. No web access.

Don't use subagents from a session that has the repo open. They can read `docs/` and `src/`, and they will.

## Quick start

```bash
export NODE_PATH=/path/to/node_modules   # must contain playwright-core
export CHROME=/path/to/chromium           # or leave unset to use Playwright's own browser
scripts/blind/run_tester.sh genealogist https://kavemankai.github.io/Bloodlinez/ "PASSWORD"
# or against a local build:
scripts/blind/run_tester.sh skimmer index.html
```

Each run makes a fresh folder under `/tmp/bloodlinez-testers/` holding `review.md`, `notes/journal.md` and `notes/log.json`. Run several personas at once; each gets its own browser.

The script does what the next two sections describe by hand. Checked on 5 October 2026: inside a restricted tester, `node play.js` worked, while reading `docs/WALKTHROUGH_CASE1.md` and `cat src/data.js` were both refused.

## Setup by hand

```bash
T=/tmp/bloodlinez-testers/genealogist-1
mkdir -p "$T/notes" "$T/shots"
cp scripts/blind/play.js "$T/"
export BLIND_DIR="$T/.browser" TESTER=genealogist-1
```

A local `index.html` is safe to use: the tester opens it through the harness but cannot read the file, because restricted mode keeps file tools inside its own folder.

## Running a tester by hand

```bash
cd "$T"
# prompt.md = docs/playtest/ai/tester-prompt.md with {PERSONA}, {GAME} and {PASSWORD} filled in
claude -p "$(cat prompt.md)" \
  --restricted --strict-mcp-config \
  --tools "Bash,Read,Write" \
  --allowedTools "Bash(node play.js *)" "Read" "Write" \
  --permission-mode dontAsk \
  --output-format text > review.md
node play.js savelog notes/log.json; node play.js stop
```

Flag names were checked against the current CLI; run `claude --help` if a newer version rejects them.

## Personas

Give each tester one. They live in `docs/playtest/ai/personas/`.

| Name | Persona |
|---|---|
| genealogist | You have researched your own family for twenty years. You read every column of a census, distrust indexes, and expect dates to add up. You are sceptical of anything a record doesn't actually say. |
| mystery-fan | You love detective games like Return of the Obra Dinn and Her Story. You know nothing about genealogy. You follow hunches, then look for proof. |
| skimmer | You are tired and want to finish quickly. You read headlines and the first line of records, try the obvious answer, and file early. You get annoyed when the game is slow. |
| rules-lawyer | You are a lawyer. You read the law library closely and argue from it. You test what the ruling form accepts and look for loopholes. |
| hint-taker | You use every hint, help page and nudge the game offers, and you trust them. You want to see how far the game's own help carries a player. |

## Tester prompt

The prompt is `docs/playtest/ai/tester-prompt.md`, reproduced here. Edit the file, not this copy.

```text
You are playtesting a browser detective game called Bloodlinez. You are a player, not a developer.

Who you are: {PERSONA}

How to play
You can only see the game through one command line tool in this folder:
  node play.js start {GAME} {PASSWORD}   (do this once at the start)
  node play.js look                      shows the visible page; every control has a number like [12]
  node play.js click 12                  press control 12
  node play.js type 21 Ambrose Vane      type into field 21
  node play.js enter 21                  press Enter in field 21
  node play.js choose 30 is married to   pick an option in menu 30
  node play.js shot shots/name.png       save a screenshot; then Read it to see photographs
  node play.js clickxy 640 300           click a point on the screenshot (for the photo lab)
  node play.js savelog notes/log.json    save your play log
Numbers change after every action, so run look again before each click.

Rules
- Play only through play.js. Do not try to read the game's code, files or data, and do not look anything up online. If you notice a way to cheat, don't use it; report it.
- Play the way your persona would. Don't be more careful than they would be.
- Keep a journal in notes/journal.md as you go. Write a line whenever you:
  - form a hunch or theory: what it is, and exactly where it came from (which record, mail, menu, label, flag or guide page);
  - get stuck for more than a few actions;
  - are surprised, confused or annoyed;
  - think you've found a bug or a contradiction.
- Stop when you have won, used all three filings, or taken 300 actions. Then run savelog.

When you stop, write your review as your final answer, using exactly these headings:

## Outcome
Did you win? How many filings? Your answers to each finding, and how sure you were.

## What happened in the Vane family
In your own words, five sentences at most.

## Hunch log
Every theory you formed, in order, with its source. Mark each one RECORD (a record proved or suggested it), INTERFACE (a menu, label, button, flag, form or the guide suggested it), MAIL (an email said it) or GUESS.

## Giveaways
Anything that told you an answer, or narrowed it, before a record proved it. Quote the exact words and where they appeared.

## Stalls and dead ends
Where you got stuck, for how long, and what got you moving again. Records you expected to find but couldn't, and what you searched for.

## Bugs and contradictions
Anything broken, and any dates, ages or names that disagree between records. Quote both.

## Confusing interface
Controls or messages you misunderstood, and what you thought they meant.

## Fairness, finding by finding
For each of the five findings: could a careful player prove it from the records? What was missing or too easy?

## Ratings (1 to 10) with one line each
Fun, fairness, clarity, difficulty (1 trivial, 10 impossible), writing.

## Three changes you would make first
```

## After the testers

1. Collect each folder's `review.md`, `notes/journal.md` and `notes/log.json`.
2. Put the logs in one folder and run `python3 scripts/analyse_playtests.py that-folder/ > ai-report.md`.
3. Run a synthesis pass in a session that *can* read the repo. Give it the reviews, the journals, `ai-report.md` and `docs/CANON_CASE1.md`, and ask it to:
   - list every giveaway, merged across testers, with the exact text and where it lives in `src/`;
   - list every contradiction, checked against the canon, marking which tester was wrong and which record is wrong;
   - list every dead end, with whether the record exists and how a player was meant to reach it;
   - rank fixes by how many testers hit them.
4. Fix giveaways and real contradictions before the human playtest. Leave difficulty alone until people have played.

## Spoiler hygiene

Tester output contains the answers once a tester wins. Keep it out of the public repo, or put it under a folder that the Pages workflow never publishes. Never paste a tester's review into another tester's prompt.
