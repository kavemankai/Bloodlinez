#!/usr/bin/env bash
# Run one blind AI tester. Usage:
#   scripts/blind/run_tester.sh <persona> <game-url-or-index.html> [password] [out-dir]
# persona is a file name in docs/playtest/ai/personas (genealogist, mystery-fan, skimmer, rules-lawyer, hint-taker).
# Needs: claude (Claude Code CLI), node, NODE_PATH pointing at a node_modules with playwright-core, and CHROME if Playwright has no browser.
set -euo pipefail
command -v claude >/dev/null || { echo "Blocked: Claude Code is required for isolated blind testers." >&2; exit 127; }
REPO="$(cd "$(dirname "$0")/../.." && pwd)"
PERSONA="${1:?persona}"; GAME="${2:?game url or path}"; PASSWORD="${3:-}"
OUT="${4:-/tmp/bloodlinez-testers/$PERSONA-$(date +%Y%m%d-%H%M%S)}"
[[ -f "$REPO/docs/playtest/ai/personas/$PERSONA.txt" ]] || { echo "No persona $PERSONA"; exit 1; }
[[ "$GAME" =~ ^https?: ]] || GAME="$(cd "$(dirname "$GAME")" && pwd)/$(basename "$GAME")"
mkdir -p "$OUT/notes" "$OUT/shots"
cp "$REPO/scripts/blind/play.js" "$OUT/"
export BLIND_DIR="$OUT/.browser" TESTER="$PERSONA"
python3 - "$REPO/docs/playtest/ai/tester-prompt.md" "$REPO/docs/playtest/ai/personas/$PERSONA.txt" "$GAME" "$PASSWORD" > "$OUT/prompt.md" <<'PY'
import sys
t=open(sys.argv[1]).read(); p=open(sys.argv[2]).read().strip()
print(t.replace('{PERSONA}',p).replace('{GAME}',sys.argv[3]).replace('{PASSWORD}',sys.argv[4]))
PY
cd "$OUT"
trap 'node play.js stop >/dev/null 2>&1 || true' EXIT
echo "Tester $PERSONA running in $OUT"
claude -p "$(cat prompt.md)" \
  --restricted --strict-mcp-config \
  --tools "Bash,Read,Write" \
  --allowedTools "Bash(node play.js *)" "Read" "Write" \
  --permission-mode dontAsk \
  --output-format text > review.md || { status=$?; node play.js stop >/dev/null 2>&1 || true; echo "Tester failed; no completed review." >&2; exit "$status"; }
node play.js savelog notes/log.json >/dev/null
node play.js stop >/dev/null 2>&1 || true
test -s review.md && test -s notes/journal.md && test -s notes/log.json || { echo "Incomplete tester output" >&2; exit 1; }
python3 -c 'import json; d=json.load(open("notes/log.json")); assert isinstance(d.get("events"), list) and len(d["events"]) > 0, "Empty play log"'
echo "Done: $OUT/review.md, $OUT/notes/journal.md, $OUT/notes/log.json"
