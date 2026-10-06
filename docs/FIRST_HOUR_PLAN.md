# First-hour implementation

Status: implemented and locally verified on 6 October 2026. Based on reviewed commit 5b89d6e.

## Goal

A new player can understand the assignment, establish a relationship, notice an identity discrepancy, follow older records and submit a useful preliminary report. An hour is a pacing hypothesis to test with people, not a timer or a promised measured duration.

## Scope and sequence

1. Trust: order-independent evidence evaluation; consistent ending; saves with validation, versioning and recovery; test scripts fail correctly.
2. Opening: a short actionable briefing and investigation leads based on actual discoveries. Keep the whole archive available.
3. Workspace: two opened sources side by side, a persistent notebook, compact matter metadata and optional graduated hints.
4. Milestone: a preliminary identity concern supported by documents, followed by a specific partner reply. It does not determine the heir, identify the suspect, consume a final filing or exhaust the case.
5. Final arguments: discovered-person claim controls, separated from solution sentences; procedural preflight; normal investigation mode with revisions and an optional three-filing challenge.
6. Proof fairness: tentative relationships do not poison otherwise supported findings. Accept connected identity comparisons only when their documentary chain is continuous; do not merge real heirs with later users of their names.
7. Accessibility: keyboard photo marking with a movable inspection cursor, focus preservation and instructions; keyboard-friendly desk and notebook.
8. Verification: retain meaningful existing regressions, update intentionally changed policy tests, add new behavioural tests, run the full suite and inspect desktop/narrow UI screenshots.

## Acceptance criteria

- All permutations of an attached evidence set receive the same result.
- The fresh ruling UI does not reveal the identity chain, earlier fire or real Cornelius's fate.
- First-hour guidance advances from discoveries without blocking independent exploration.
- A preliminary report cannot pass with irrelevant documents; acceptance creates one response and survives reload.
- A complete case remains solvable. Correct answers still require sufficient documentary and tree proof.
- Tentative links remain in the notebook/tree without invalidating unrelated proof.
- A continuous certified comparison chain is accepted; a chain with different unconnected faces under one name is not.
- Legacy/invalid saves recover safely with a notice; save failure is visible; export/import has a version and validation; importing/resetting requires confirmation.
- Required lab work is possible with keyboard only.
- Automated failures and unavailable blind-test dependencies return nonzero.

## Out of scope for this change

New cases, new generated art, a different game engine, unrestricted natural-language grading, paid distribution and live publication. Independent blind AI reviews still require the configured isolated runner; automated tests are not substitutes for those reviews or human pacing tests.

## Human validation still needed

Observe five fresh players without coaching. Record first meaningful action, first supported link, first spontaneous identity suspicion, preliminary submission, stalls and requests for help. Ask what they inferred and what evidence convinced them. Revise the opening before producing Case 2.

## Verification

All eleven automated suites (227 passing assertions) pass locally in headless Chromium. The opening test uses visible controls from a fresh save to an accepted preliminary report. The complete-case test uses proof fixtures, then submits through the actual new selectors and evidence controls. Additional checks cover all 24 evidence permutations, connected and disconnected identity chains, both filing policies, import/export, partial findings, legacy and malformed saves, storage failure, keyboard certification and narrow-screen layout. Desktop and 390px screenshots were inspected.

`blind.js` verifies the restricted viewing harness. The five independent persona reviews were not run: the required Claude Code CLI is unavailable. No human pacing, enjoyment, retention or willingness-to-pay result is claimed. The first-hour timing remains a hypothesis.

Implementation choices and the next production gates are in `UPGRADE_PATH.md`.
