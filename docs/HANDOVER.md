# Handover

Read this first if you are picking up Bloodlinez: a new session, a new developer, or the owner coming back after a break. It says what exists, how to run and change it, what is unfinished, and what will bite you.

## State on 5 October 2026

- **Case 1 (the Vane estate) is complete and playable.** It has 89 records, 29 people from 1410 to 2025, five findings, the player-built tree, date flags, the photo lab, the handwriting examiner, nil returns, DNA pages and a law library.
- **The canon was rewritten today.** Ambrose Vane lives four lives, with three staged deaths (1934 fire, 1976 car crash, 2025 at sea) and an adopted or step heir each time. `docs/CANON_CASE1.md` is the source of truth.
- **No human has played the current build.** The playtest kit is ready. Running it is the next step (see Open work).
- **All ten test suites pass** on `main`.

## Where things are

| Path | What |
|---|---|
| `src/template.html` | Page shell and all CSS |
| `src/data.js` | Content: photos, people, records, the law, hints, findings and evidence rules (`FIND`, `BEARS`, `NEED`), mail |
| `src/app.js` | Engine: index entries (`IDX`), relations, tree layout, claims and proof, events, flags, findings checks, all three websites, the playtest log |
| `build.py` | Joins the three into `index.html`. `--artifact` writes `dist/artifact.html` without images |
| `index.html` | The built game, committed |
| `assets/` | Images. Faces are `.jpg`, everything else `.webp` |
| `docs/CANON_CASE1.md` | The truth of the case: every life, date and death |
| `docs/WALKTHROUGH_CASE1.md` | Answers, minimum evidence, the route, traps |
| `docs/DESIGN.md`, `docs/GAME_GUIDE.md` | Design notes; the player's guide (no spoilers) |
| `docs/ASSETS_VANE.md`, `docs/CHATGPT_IMAGE_PROMPTS.md` | Art list and prompts, including art still needed |
| `docs/AUDIT_CASE1.md` | The first difficulty audit (historical) |
| `docs/playtest/` | Human playtest kit (`TESTER_BRIEF.md`, `FACILITATOR.md`) and blind AI testers (`AI_TESTERS.md`, `ai/`) |
| `scripts/analyse_playtests.py` | Turns playtest logs into a report |
| `scripts/encrypt_page.py` | Password-protects the page for GitHub Pages |
| `scripts/blind/` | Harness and runner for blind AI testers |
| `.github/workflows/pages.yml` | Publishes the encrypted game to GitHub Pages on push to `main` |
| `tests/` | Ten Playwright suites; see `tests/README.md` |

## Build, run, test

```bash
python3 build.py                      # writes index.html; open it in a browser
python3 build.py --artifact           # writes dist/artifact.html (no images)

# tests need playwright-core and Chromium
export NODE_PATH=/path/to/node_modules CHROME=/path/to/chromium
for t in e2e assets layout tree guide records playtest analyse gate blind; do node tests/$t.js | tail -1; done
```

In the cloud session the paths were `NODE_PATH=/tmp/claude-0/pw/node_modules` and `CHROME=/opt/pw-browsers/chromium-1194/chrome-linux/chrome`. Those last only as long as the container.

Useful in the browser console: `revealAllTree()` builds the complete correct tree; `localStorage.clear()` and a reload start fresh.

## Publishing

- **The claude.ai artifact** (private, no images): https://claude.ai/artifact/EfQPYQm8EUYzPXzonvxVHM. Build with `--artifact`, then set its title: `sed -i 's|<title>Bloodlines: The Vane Estate</title>|<title>Bloodlinez</title>|' dist/artifact.html`. Publish `dist/artifact.html` to that URL. It declares the `downloads` capability so the playtest log can be saved.
- **GitHub Pages** (public, password-protected, with images). This needs two one-time settings:
  - Settings › Pages › Source: GitHub Actions
  - a repository secret `PLAYTEST_PASSWORD`

  Until both exist, the workflow fails on every push to `main`. Whether the owner has set them is unknown at the time of writing.
- **The game design document** (a Claude Doc): https://claude.ai/code/artifact/bebca596-d656-48ae-b9d5-868a14fd0737. It predates the canon rewrite and describes the old Case 1 in its case list and audit.

## How the game works, briefly

- **Findings.** Each needs the right answer, the right kinds of evidence (`NEED` groups in `src/data.js`, at most four items, at most one irrelevant), and a tree that shows it (`treeChecks` in `src/app.js`).
- **The tree.** The player adds any link. A link is proven when the attached records match a `CLAIMS` proof set, and some sets need two records together. Link types:
  - parent
  - adopted or raised as a stepchild
  - married
  - claimed parent
  - also lived under the name of
  - same person

  The last two are proven only by certified lab or handwriting reports, using `PHOTO_OWNER` and `SIGN_OWNER`.
- **Events.** A record offers only the statements it makes (`EVENT_DEFS`). If a statement names the person, it's proven or unproven like a link. If it doesn't (the inquests), the player's choice is a "reading" with no verdict until filing.
- **Flags.** `computeFlags` checks ages, deaths, overlaps and loops. Flags about the attack are questions until Accord Art. 3 is cited.
- **Feedback.** The first failed filing names failed findings only; nudges and missing tree items come from the second.
- **Playtest log.** `plog()` records every action when switched on (`?playtest=1` or the button on the matter overview).

## Adding or changing a record

Do every step, or a test will catch you:

1. Add the record to `REC` in `src/data.js` (`kind`, `year`, `title`, search keywords `k`, `render`). If the kind is new, add it to `COLL` in `src/app.js`.
2. Add the index line in `IDX`, its paper style in `PAPER`, and the signature in `SIGNED` if it is signed (the hand letter matters to the handwriting tool).
3. If it shows a photo, add it to `PH`, and to `IMGS` with the real mark positions if there's an image file.
4. If it names people, add them to `EXTRA_IN` or make it a proof in `CLAIMS`. If it states an event, add it to `EVENT_DEFS` in plain words, never a conclusion.
5. If it counts as evidence, add it to `BEARS` and, if needed, a `NEED` group.
6. Check it against `docs/CANON_CASE1.md`, add a check in `tests/records.js`, rebuild and run every suite.

## Conventions

- **Writing.** Plain, short and concrete. No em-dash habits, no stock AI phrasing, no recaps; this matters to the owner. Records should read like period documents.
- **Spoilers.** No menu, label, flag, guide page or mail may state a conclusion before a record proves it. This has gone wrong twice: the ruling form's checklist, and the event dropdown. `tests/tree.js` and `tests/guide.js` check for it. Keep it that way.
- **Git.** Work on the feature branch, commit with the session's co-author and session trailers, open a draft PR, and push to `main` only when the owner says so (they usually do).

## Open work, in order

1. **Run the playtests.** Start with blind AI testers (`docs/playtest/AI_TESTERS.md`) to catch giveaways and dead ends cheaply, fix those, then 5 to 8 people (`docs/playtest/FACILITATOR.md`). Turn on GitHub Pages first.
2. **Art.** The real Desmond (1925) and the real Julian (2019) are drawn placeholders. Clara, Irene and Helen have no portraits. See the end of `docs/ASSETS_VANE.md`.
3. **The design document** needs its Case 1 sections updated to the new canon.
4. **After the playtest:** free-form claims instead of answer lists, the DNA-sides tool, the lab feature picker, a case-data format, then Case 2. The roadmap is in the design document.

## Things that will bite you

- **The repo is public.** It holds the walkthrough and all answers. The Pages password keeps out casual visitors, not readers of the repo. Making the repo private needs a paid GitHub plan to keep Pages.
- **The default branch on GitHub is `ccr-33b7fef7-wisgwr`, not `main`.** Change it in Settings › General if that's not intended.
- **The `Bl00d` password is weak.** It's fine for a playtest gate; change the secret for anything more.
- **Page source contains every answer.** Never let an AI tester read files; use the blind harness.
- **`index.html` is committed.** Rebuild before committing source changes, or the published game and the source disagree.
- **Higgsfield image credits were nearly used up** when the art was made. New art may need ChatGPT and the prompts in `docs/CHATGPT_IMAGE_PROMPTS.md`.
