# Tests

Browser checks that drive the built game in headless Chromium.

```
npm i playwright-core
python3 build.py
CHROME=/path/to/chromium node tests/e2e.js      # evidence rules, lab logic, decoys, handwriting
CHROME=/path/to/chromium node tests/assets.js   # every asset loads, real lab clicks, screenshots
CHROME=/path/to/chromium node tests/tree.js     # the player builds the tree: start state, link checks, discovery, search-only reachability
CHROME=/path/to/chromium node tests/guide.js    # field guide, welcome mail, self-ticking training list, no spoilers in the guide
CHROME=/path/to/chromium node tests/layout.js   # family-tree auto layout: no overlaps, couples, generations, adding people
```

`CHROME` is optional if Playwright has a browser installed. `assets.js` writes screenshots to `tests/shots/` (git-ignored). The Google Fonts request fails in a sandbox with no network; that is expected.

`tree.js` also covers unproven links, date flags, loops, link removal and `treeOk` for each finding.

`records.js` checks the hardened reveal path: the 1972 licence index typo, the unnamed father in the 1912 wedding photo, the 1911 census age, and the trust deed date. Each should need two records joined, never one record read.

`playtest.js` checks that turning flags ask a question until Article 3 is cited and never state the conclusion, and that the playtest log is off by default, records a session, exports a JSON file, and survives a reload and a replay.
