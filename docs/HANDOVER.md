# Handover

Read this first if you are picking up Bloodlinez: a new session, a new developer, or the owner coming back after a break. It says what exists, how to run and change it, what is unfinished, and what will bite you.

## State on 6 October 2026

- **Case 1 (the Vane estate) is complete and playable.** It has 89 records, 29 people from 1410 to 2025, five findings, the player-built tree, date flags, the photo lab, the handwriting examiner, nil returns, DNA pages and a law library.
- **Current canon:** Ambrose Vane lives four lives, with three staged deaths (1934 fire, 1976 car crash, 2025 at sea) and an adopted or step heir each time. `docs/CANON_CASE1.md` is the source of truth.
- **No human playtest of this build has been recorded in this work.** The playtest kit is ready. Running it is the next step (see Open work).
- **First-hour redesign:** optional leads, case desk, notebook, preliminary report, neutral claim controls, revision mode, save migration and keyboard inspection. See `FIRST_HOUR_PLAN.md` for scope and current validation.

## Latest delivery and verification

- Work branch: `feat/first-hour-investigation`.
- Review: [draft PR #8](https://github.com/kavemankai/Bloodlinez/pull/8), targeting `main`. Verified open and unmerged on 6 October 2026. This work has not merged or deployed the upgrade.
- Verified implementation commit: `ce74920fcf72a213cb00ca34dd6021b56acec970` (the handover update follows this commit).
- Local verification: **11 automated suites, 235 passing assertions** after the review follow-up (count-only revision feedback, source-based opening). The visible opening reaches an accepted preliminary report; the full-case submission test uses prepared proof fixtures and the actual claim controls. Desktop and 390px screenshots were inspected.
- GitHub verification: [Verify game run 37410070661](https://github.com/kavemankai/Bloodlinez/actions/runs/37410070661) **passed** for that implementation commit. It installs dependencies, checks the generated build and runs the complete suite.
- `tests/blind.js` tests the restricted viewing harness only. **The five independent persona reviews were not run:** the required Claude Code CLI was unavailable. Do not describe the automated suite as five blind playthroughs.
- First-hour duration, human enjoyment and willingness to pay remain unverified. The hour is a pacing target, not a measured result.

Read [FIRST_HOUR_PLAN.md](FIRST_HOUR_PLAN.md) for the completed scope and acceptance criteria, and [UPGRADE_PATH.md](UPGRADE_PATH.md) for production stages and proposed decision gates.

## What changed in the first-hour upgrade

1. A shorter briefing points the player at sources (the claimant and the objection to him) without naming steps or record types. Lead cards are titled by source. Specific steps live only in the opt-in hints. The whole archive stays open.
2. The case desk compares two opened sources. A persistent notebook holds private theories. Matter metadata is collapsed to leave room for the work.
3. A supported preliminary identity concern produces one partner reply and pauses distribution. It does not identify the culprit, decide inheritance or consume a final filing.
4. Final findings use discovered people and saved provisions instead of sentences revealing the solution. Paperwork checks catch missing fields/attachments without grading correctness. Investigation mode allows unlimited revisions but reports only how many findings were accepted, never which; all five must pass in one filing, and the end card shows the filing count. Optional challenge mode allows three filings, marks each finding and locks accepted ones. Research hints are requested explicitly.
5. Evidence assignment is order-independent. Continuous certified document chains can establish identity; a shared name alone cannot connect different unlinked faces. Tentative tree links no longer invalidate supported proof.
6. Saves have schema validation, migration, recovery backups, export/import and visible failure notices. Photo inspection now works with arrow keys, Shift for fine movements, Enter/Space to mark and Home to centre.
7. Every suite returns failure properly; `tests/run.js` aggregates assertions, crashes and timeouts. Pages publication now depends on the verification workflow.

## Where things are

| Path | What |
|---|---|
| `src/template.html` | Page shell and all CSS |
| `src/data.js` | Content: photos, people, records, the law, hints, findings and evidence rules (`FIND`, `BEARS`, `NEED`), mail |
| `src/app.js` | Engine: index entries (`IDX`), relations, tree layout, claims and proof, events, flags, findings checks, all three websites, the playtest log |
| `src/experience.js` | First-hour flow, fair arguments, progress recovery and keyboard lab |
| `build.py` | Joins the four into `index.html`. `--artifact` writes `dist/artifact.html` without images |
| `index.html` | The built game, committed |
| `assets/` | Images. Faces are `.jpg`, everything else `.webp` |
| `docs/CANON_CASE1.md` | The truth of the case: every life, date and death |
| `docs/WALKTHROUGH_CASE1.md` | Answers, minimum evidence, the route, traps |
| `docs/DESIGN.md`, `docs/GAME_GUIDE.md` | Design notes; the player's guide (no spoilers) |
| `docs/ASSETS_VANE.md`, `docs/CHATGPT_IMAGE_PROMPTS.md` | Art list and prompts, including art still needed |
| `docs/AUDIT_CASE1.md` | The first difficulty audit (historical) |
| `docs/FIRST_HOUR_PLAN.md`, `docs/UPGRADE_PATH.md` | Implemented scope, validation limits and staged production path |
| `docs/playtest/` | Human playtest kit (`TESTER_BRIEF.md`, `FACILITATOR.md`) and blind AI testers (`AI_TESTERS.md`, `ai/`) |
| `scripts/analyse_playtests.py` | Turns playtest logs into a report |
| `scripts/encrypt_page.py` | Password-protects the page for GitHub Pages |
| `scripts/blind/` | Harness and runner for blind AI testers |
| `.github/workflows/tests.yml` | Build consistency and all eleven suites; reusable verification job |
| `.github/workflows/pages.yml` | Publishes the encrypted game on push to `main`, after verification |
| `tests/` | Eleven Playwright suites; see `tests/README.md` |

## Build, run, test

Use Node 22 and Python 3.12 to match CI. From the repository root:

```bash
npm ci
npx playwright-core install --with-deps chromium
python3 -m pip install cryptography
python3 build.py
npm test
```

Open `index.html` with `assets/` beside it; no application server is required. `python3 build.py --artifact` creates the alternate artifact wrapper. If Chromium is already installed, set `CHROME=/absolute/path/to/chromium` instead of downloading it. `NODE_PATH` is only needed when using a separately installed Playwright package. Do not depend on previous sessions' temporary browser paths.

After source edits, rebuild `index.html` before committing. `git diff --exit-code -- index.html` checks build consistency only after the intended generated changes have been committed/staged. Screenshots and temporary test output live under ignored `tests/shots/`; they are not durable repository evidence. The GitHub run linked above is the durable verification record for the implementation commit.

Developer-only console helper: `revealAllTree()` builds the complete correct tree. Never use it for a claimed blind playthrough. Export progress at the case desk before resetting; clearing browser storage deletes progress and recovery backups.

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
- **Feedback.** Investigation mode gives a count of accepted findings, so answers can't be found by cycling one finding at a time and watching it turn green. A player can still change one answer and watch the count; that is slow and shows in the filing count. Challenge mode names failed findings. Research hints require an explicit request.
- **Playtest log.** `plog()` records every action when switched on (`?playtest=1` or the button on the matter overview).

## Save format and implementation cautions

- Build identifier: `first-hour-1`; save schema: `4`. Keep the local storage key `bloodlines-v3` so old investigations migrate. The original recovery copy is stored at `bloodlines-recovery-backup`.
- `normaliseProgress()` checks record IDs, report references, routes, tree content and fields; it maps `licence1972` to `licence1979`. Failed reads preserve the original data where storage permits. Import validates before replacement and backs up the replaced investigation.
- Filing policy becomes fixed after the first final filing. Legacy saves with prior filings retain challenge behavior. Preliminary reports never consume a final filing.
- `src/experience.js` loads after `src/app.js`; only then does the template call `restoreProgress()` and `render()`. Do not restore saves earlier: report reconstruction and route validation require the complete data and helpers.
- Evidence-panel state saves on the player's summary click. Do not save from every native `toggle` event: rendering an open panel can emit one and overwrite recovery state or clear its notice.
- Preserve the distinction between a paper identity and the actual compared document. `identityPath()` deliberately does not bridge disconnected photo/signature chains merely because the owner name matches.
- Keyboard photo marking improves access but is not a complete screen-reader or nonvisual equivalent. That still needs design and external accessibility testing.

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

1. **Review PR #8 before merging.** The upgrade is on its feature branch. Confirm current checks and obtain the owner's instruction before merging or publishing. A successful test run is not a deployment.
2. **Run independent playtests.** Use `docs/playtest/AI_TESTERS.md` and its isolated runner when Claude Code is available. The runner exits nonzero if dependencies or required outputs are missing. Observe five fresh human players with `docs/playtest/FACILITATOR.md`; record understanding of the job, first supported link, spontaneous suspicion, preliminary report, stalls and help requests. Supply a playable approved build without sending testers the solution-bearing repo.
3. **Finish the decisive art.** The real Desmond (1925) and real Julian (2019) are drawn placeholders; Clara, Irene and Helen lack portraits. Prioritize the identity photographs and verify photo-lab mark positions after replacement. See `docs/ASSETS_VANE.md`.
4. **Iterate the opening from observations.** Check that claim controls express players' reasoning and that rejection feedback helps without giving away the solution. Do not assume the one-hour target has been met because the scripted path passes.
5. **Follow `docs/UPGRADE_PATH.md`.** Validate a focused demo, then separate case data from engine logic before producing a second case with a different reasoning problem. The older external design document is historical and may disagree with the current canon.

## Repository workflow for the next session

Start with `git status`, fetch remote refs and inspect PR #8 before editing. Preserve any newer work. Terminal `git push` lacked credentials in the implementation session; the connected GitHub app successfully uploaded the identical tested tree, created the feature branch and opened the draft PR. Use an authorized GitHub connection if terminal authentication is still unavailable. Do not put access tokens in repository files.

## Things that will bite you

- **The repo is public.** It holds the walkthrough and all answers. The Pages password keeps out casual visitors, not readers of the repo. Check current repository and hosting settings before changing visibility.
- **The default branch was `ccr-33b7fef7-wisgwr` at the implementation checkout.** PR #8 targets `main`. Verify the current branch settings; do not assume opening the repo selects the upgrade.
- **The playtest gate is not protection for the mystery source.** Confirm deployment configuration rather than relying on historic password notes.
- **Page source contains every answer.** Never let an AI tester read files; use the blind harness.
- **`index.html` is committed.** Rebuild before committing source changes, or the published game and the source disagree.
- **Art planning:** `docs/CHATGPT_IMAGE_PROMPTS.md` contains existing prompts. Current provider credits and asset provenance must be checked before commissioning replacements.
