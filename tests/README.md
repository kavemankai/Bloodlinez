# Tests

Browser checks that drive the built game in headless Chromium.

```
npm i playwright-core
python3 build.py
CHROME=/path/to/chromium node tests/e2e.js      # evidence rules, lab logic, decoys, handwriting
CHROME=/path/to/chromium node tests/assets.js   # every asset loads, real lab clicks, screenshots
```

`CHROME` is optional if Playwright has a browser installed. `assets.js` writes screenshots to `tests/shots/` (git-ignored). The Google Fonts request fails in a sandbox with no network; that is expected.
