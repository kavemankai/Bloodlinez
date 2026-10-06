# Tests

Browser checks that drive the built game in headless Chromium.

```
npm ci
npx playwright-core install chromium
python3 -m pip install cryptography
npm test # all eleven suites, with failures propagated
python3 build.py
CHROME=/path/to/chromium node tests/e2e.js      # evidence rules, lab logic, decoys, handwriting
CHROME=/path/to/chromium node tests/assets.js   # every asset loads, real lab clicks, screenshots
CHROME=/path/to/chromium node tests/tree.js     # the player builds the tree: start state, link checks, discovery, search-only reachability
CHROME=/path/to/chromium node tests/guide.js    # field guide, welcome mail, self-ticking training list, no spoilers in the guide
CHROME=/path/to/chromium node tests/layout.js   # family-tree auto layout: no overlaps, couples, generations, adding people
```

`CHROME` is optional if Playwright has a browser installed. `assets.js` writes screenshots to `tests/shots/` (git-ignored). The Google Fonts request fails in a sandbox with no network; that is expected.

`tree.js` also covers unproven links, date flags, loops, link removal and `treeOk` for each finding.

`records.js` checks the hardened reveal path: the 1979 licence index typo, the unnamed father in the 1912 wedding photo, the 1911 census age, and the trust deed date. Each should need two records joined, never one record read.

`playtest.js` checks that turning flags ask a question until Article 3 is cited and never state the conclusion, and that the playtest log is off by default, records a session, exports a JSON file, and survives a reload and a replay.

`analyse.js` plays two simulated testers, exports their logs, runs `scripts/analyse_playtests.py` on them and checks the report (stalls, the licence search, joint proof, wrong links, empty searches, the planted hint, unopened records). The logs and report land in `tests/shots/playtests/`.

`gate.js` encrypts the page the way the Pages workflow does and checks that nothing is written without a password, the file holds no game text, a wrong password is refused, the right one opens the game with images, `?playtest=1` still works, and a reload opens straight in.

`blind.js` checks the blind harness for AI testers (`scripts/blind/play.js`): it shows numbered controls and visible text, never source or stored data, and saves screenshots and the playtest log.

`first-hour.js` drives the visible opening to an accepted preliminary report, then covers neutral claims, evidence permutations, connected identity proof, filing modes, full-case completion through the claim controls, recovery from old/malformed saves, visible storage failure, keyboard photo certification and narrow layouts. Its correctness fixtures are white-box tests, not independent blind playthroughs.

The five isolated persona reviews require the Claude Code CLI. The runner exits nonzero when that dependency is unavailable or output is incomplete. Passing `blind.js` verifies the harness only; it does not mean those five reviews happened.
