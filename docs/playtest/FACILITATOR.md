# Running a Bloodlinez playtest

For the person running the test. Contains no answers, but don't send it to testers: the questions are better cold.

## Goal

Find out whether Case 1 works for people who didn't make it: whether they finish, where they stall, and whether the hardened records and the tree mechanics read the way they're meant to. Target: 5 to 8 testers, at least two who don't know genealogy and at least two who do.

## Setup

1. Make sure the game is live on GitHub Pages (Settings › Pages › Source: GitHub Actions; it publishes on every push to `main`). The page is password-protected with the `PLAYTEST_PASSWORD` repository secret. Send testers the Pages address with `?playtest=1` on the end, and the password in a separate message.
   The repo itself is public and includes the walkthrough. Don't link testers to GitHub.
2. Send `TESTER_BRIEF.md` with the link.
3. If you can watch (in person or by screen share), stay quiet. Write down the time and what they said whenever they stall, laugh, swear or ask a question. Answer only "what would you try?".

## First-hour observation

Use investigation mode for the first cohort. Record time to the first meaningful search, supported relationship, spontaneous identity suspicion and accepted preliminary concern. Write down the player's explanation of the discrepancy before supplying any hint. Also record the build, requested hint levels, stalls longer than five minutes, accidental filings and whether the player wanted to continue.

The timing target is a hypothesis: by 10 minutes understand the job and establish one link; by 30 minutes notice a defensible discrepancy; by 60 minutes produce a supported preliminary concern. Do not coach someone to hit it. Start with five fresh players. A proposed iteration gate is four of five understanding the task and reaching the preliminary report without facilitator rescue, with no unrecoverable progress loss. Small cohorts expose problems; they do not establish market demand.

## After play: questions

Ask these in order, the same day. Write down their words, not your summary.

1. In two sentences, what happened in the Vane family?
2. Where did you get stuck longest? What got you moving again?
3. What did you think the coloured flags on the tree meant? Did one ever change your mind?
4. Did you ever add a link that turned out wrong? How did you find out?
5. Some links showed as "Partly proven". What did you think that meant, and what did you do about it?
6. Was there a record you were sure existed but couldn't find? What did you search for?
7. When you filed and a finding came back "Not accepted", what did you think was wrong?
8. Was there a moment you enjoyed most? A moment you nearly quit?
9. On a scale of 1 to 10, how likely would you be to play a second case? Why that number?

## After all testers

1. Put every log file in one folder, for example `playtests/2026-10/`.
2. Run `python3 scripts/analyse_playtests.py playtests/2026-10/ > playtests/2026-10/report.md`.
3. Read the report next to your notes and the answers. The numbers say where people stalled; the notes say why.

Don't commit tester logs or notes to a public repo without their permission.
