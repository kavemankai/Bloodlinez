# Bloodlinez

A detective game about inheritance law for families that aren't entirely human. You play a night-shift associate at Ashgrove & Pell, a probate firm, working estates where the deceased might be a vampire, the heir a changeling and the will a demon contract. Every clue lives in websites that look real: a commercial genealogy site, the firm's webmail and its intranet.

Case 1, *The Vane Estate*, is fully playable.

## Play

New to the game? Read `docs/GAME_GUIDE.md`, or just start: the game has a welcome email, a training list in the matter overview and a field guide in the bookmarks bar. If you get stuck, `docs/WALKTHROUGH_CASE1.md` has the full solution (spoilers).

Open `index.html` in a browser. There's nothing to install and no server is needed. Keep the `assets/` folder next to it, since the pictures load from there. Progress saves in the browser's local storage.

## Case 1 in brief

Cornelius Vane, 91, went overboard off Ashby Point. His will leaves everything to his grandson Julian. His great-niece Margaret objects, and a third woman, Daphne, says she's his daughter. You get five findings to prove and three filings to get them past the partners.

The tools:

- **Bloodlines** (genealogy site): a family tree you build yourself from four names, reaching back to 1410, with records from a 1436 court roll through wills, parish registers, censuses and civil records, record pages with an image viewer and index, search with collection filters, DNA matches for four kits, and member-tree hints. Some hints are planted by the people you're investigating.
- **A&P Mail**: case briefings, claimant letters, attachments, and emails that react to what you find.
- **A&P Intranet**: the matter page (parties, assets, evidence register, activity log), a photo lab that certifies identity by matching scars and moles, a handwriting examiner that compares signatures, the ruling form, and a law library holding the Succession Act and the Nocturnal Accord 1888.

Each finding needs the right answer plus the evidence that actually proves it, with at most four items attached. A right answer with thin evidence, or with irrelevant records attached, is rejected the same way as a wrong one. Nudges appear from the second filing.

## Repo layout

```
index.html        built game, open this
assets/           art: photos, portraits, paper, frames, stamps (loaded by relative path)
tests/            browser checks (see tests/README.md)
build.py          rebuilds index.html from src/
src/template.html CSS and page markup (browser chrome, three site designs)
src/data.js       case content: people, records, law, findings, mail, portrait art
src/app.js        routing, rendering for each site, photo lab, ruling logic, events
docs/DESIGN.md    premise, structure and the player's own arc
docs/ASSETS.md    image assets still needed
```

Edit files in `src/`, then run:

```
python3 build.py              # writes index.html
python3 build.py --artifact   # writes dist/artifact.html for claude.ai artifacts
```

## Playtesting

- **Where testers play.** `.github/workflows/pages.yml` publishes the game (index.html and images only, no docs) to GitHub Pages on every push to `main`. One-time setup: Settings › Pages › Source: **GitHub Actions**. Send testers the Pages address with `?playtest=1` on the end.
- **What to send them.** `docs/playtest/TESTER_BRIEF.md`. Run the session with `docs/playtest/FACILITATOR.md`, which has the post-play questions.
- **The log.** Testers press **Save log file** under Matter 2025-0417 › Overview. The JSON file holds a summary plus every search, record opened, link, flag and filing with a timestamp.
- **The report.** Put the files in one folder and run `python3 scripts/analyse_playtests.py that-folder/ > report.md`. It covers time to each finding, stalls with what came before and after, records nobody opened, wrong links, joint proofs, how the 1972 licence was found, empty searches, flags and tool use.

## Status

Prototype. The Case 1 art is in and wired: period photos with real scar and mole positions in the photo lab, portraits, era paper behind documents, stamps, mounts and branding. `build.py --artifact` writes a single file with no images, so use the normal build for the full game. The next priority is a second case built on a different creature's legal rules.
