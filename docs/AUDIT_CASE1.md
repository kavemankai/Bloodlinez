# Case 1 difficulty audit

## Verdict

Too easy. A player who reads the five questions and clicks through the tree can win in the first filing without searching, without opening the photo lab and without understanding why the answers are right.

I read all of `src/data.js` and `src/app.js` and ran a script against the evidence tables. I did not play it in a browser. Time estimates below are my guesses.

## Why it's easy

**1. Every finding can be proved from the tree and the law library.** The script checked which accepted evidence sits on the people's "Sources" tabs:

| Finding | Needs | Reachable with no search |
|---|---|---|
| F1 Julian is Ambrose | 3 | photo1889, photo1912, licence1972, licence2019, birth1934, dnaJulian |
| F2 Death was staged | 2 | death2025, death1934 |
| F3 Desmond never existed | 2 | death1994, rolls, birth1993 |
| F4 Daphne's claim | 2 | dnaDaphne, birth1966 |
| F5 Who inherits | lawA4 + 1 | birth1888, dnaMargaret (plus lawA4 from the library) |

So search, the nil-return certificate, the hospital register, the diary, the harbour report and the funeral invoice are all optional. The best clues in the case (the unbelievable boat knots, the empty coffin with an inside latch, "we have done this before for the Vane family, in 1934") never have to be found.

**2. The judge counts items, not reasoning.** `judge()` checks the answer, then whether the finding has enough attached records from a fixed list. It doesn't check what the records show, whether they're independent, or whether they cover the dates the law requires.

- F1 passes with `photo1962`, `licence1972` and `licence2019`. Art. 2 says three documents "across more than one century". Those three span 57 years.
- F1 never needs the photo lab. Raw photos count. `dnaJulian` (no matches) counts as a document of identity.
- F2 passes with the official death registration and the newspaper report that say he drowned. Those are the records the finding is supposed to disprove.
- F3 accepts `birth1993`, which names Desmond as Julian's father. That is the lie the finding exposes.
- F4 passes with the DNA report plus Daphne's birth certificate. It never needs Art. 3 or the date of the attack, so the real argument (Daphne was born 78 years after the turning) is untested.
- F5 passes with Art. 4 and Harriet's birth certificate. Nothing checks that the player found the 14 Feb 1888 attack, which is the whole reason Margaret inherits.

**3. Adding junk is free.** Extra records on a finding are ignored. The only penalty is `hintOfficial`. So the dominant strategy is to pin everything and attach it to all five findings. After that only the five answers matter.

**4. The answers are close to guessable.** Option counts are 4, 3, 3, 3 and 6. Failed findings show a nudge. With 3 filings and per-finding feedback, a player who ignores the evidence still clears the 3-option findings by elimination. F1 is given away by Julian's own letter ("we could have been the same man"). F5 is given away by the opening mail ("if any party turns out not to be strictly human, [the Accord] decides the matter").

**5. Sources state their own conclusions.**
- `dnaDaphne` ends: "Daphne and Margaret are related through the Marsh family, not through Ambrose or Cornelius Vane." The player doesn't have to read the match sides.
- `hintOfficial` explains in plain text that the tree was made the day after the death.
- The search page shows a callout for "desmond" with a button for the nil-return certificate.
- `nilDesmond` is a ready-made answer for F3.
- Nudges tell the player the next step, not just that they're wrong.

**6. Authored cleverness the code never uses.**
- The README and DESIGN notes say matching signature flourishes prove identity. `sig()` is decoration. There is no signature comparison.
- The Thomas Holloway red herring only matters if the player opens the lab and compares him with a vampire photo. Nothing else touches `photo1950`.
- The "Pryor Legal: we trust that settles the matter" email is the only live decoy.

## Is anything too hard?

No. I found nothing that blocks a win.

- Hospital and wharf records are signposted by IT's search-tips mail ("hospital", "Marguerite") and by Margaret's mail, which appears as soon as the player opens the register or the 1888 article.
- The law library is one page and all five articles are short.
- A failed filing tells the player which findings failed. Three filings and the nudges are generous.

The one real hurdle is F5's six options, where `margaretSA` and `margaretA4` differ only in the legal basis. Even that is easy once you've read Art. 4.

I'd guess 5 to 10 minutes for a speed-clicker and 25 to 40 for a reader who opens everything. The reader will not have been challenged at any point.

## Fixes, in order of value

1. **Make the judge enforce the law it quotes.** F1: require a positive lab report plus at least two other documents, and require the set to span more than 100 years. Raw photos no longer count on their own (Art. 2.2). Drop `dnaJulian` from the F1 list or demote it. About 20 lines in `judge()` and `supports()`.
2. **Require evidence groups, not a count.** Each finding lists groups, and the player needs one record from every group.
   - F2: one of (`marine2025`, `funeral2025`) and one of (`death1934`, `news1934`, `trust1934`). The official 2025 death records stop counting.
   - F3: one record that shows an absence (`nilDesmond` or `rolls`) and one that shows a lie (`death1994`'s registrar note or `news1994`). Remove `birth1993`.
   - F4: the attack date (`hospital1888`, `news1888` or `diary1888`) and `birth1966` and `lawA3`. `dnaDaphne` alone no longer settles it.
   - F5: `lawA4` plus the attack date plus `birth1888`. Without the attack date the conception argument is incomplete.
3. **Cap attachments at four per finding.** One line in the UI and the judge. Kills "attach everything".
4. **Penalise irrelevant attachments.** If a finding has more than one record that is not in its list, reject the evidence half. Don't say which. Wrong evidence then costs something.
5. **Strip the conclusions from the sources.** Cut the last sentence of `dnaDaphne`, `dnaMargaret` and `hintOfficial`. Show the match sides in the DNA table and let the player read them. Remove the Desmond callout, so the player has to think to ask for a nil return. IT's tips mail already says one exists.
6. **Slow the nudges.** First failed filing: show which findings failed and nothing else. Second filing: add the nudge text. This keeps three filings meaningful.
7. **Add decoys.**
   - A second, wrong Desmond: a Desmond Vane born 1958 in Calder, in the search results, who is plainly someone else. Players must check the dates.
   - A second scarred man: a photo of someone else with a scar, so "one scar" alone is not enough and the mole on the other cheek matters.
   - A forged or misdated record that is tempting for F2 (for example a 1934 coroner's note that supports drowning).
8. **Use the signatures.** Add a signature comparison to the lab or the evidence view. `A. Vane` on the 1891 census and 1934 birth, and `C. Vane` on the 1972 licence, the 1993 birth and the 2024 will, are meant to match and nothing uses them.

With fixes 1 to 4 in place I'd expect a careful player to need two filings and a skimmer to fail. Both are guesses until someone plays it.

## Content errors found while reading

- **Diary vs hospital register.** The register says Ambrose self-discharged on the evening of 14 Feb 1888. The diary entry is dated 16 Feb and says "A. home at last". Change the diary to the 14th or 15th.
- **Pregnancy dates.** The diary says Eliza is "four months gone" in mid-February. Harriet was born 4 June, so she would be about five months along. Change "four months" to "five".
- **Registered before found.** The harbour report logs the incident at 5:51 am on 3 March and says the boat was "found on her own mooring at 6 am". Either move the report to after 6 am or say the harbourmaster found her at 5:30.
- **Weekdays are right.** I checked all dated newspapers (16 Feb 1888, 17 Mar 1962, 3 Feb 1934, 3 Nov 1994, 4 Mar 2025). Each matches its weekday. Keep that standard.

## What works

- The three-site design and the way a wrong lead (the `VaneFamily_Official` hint, built the day after the death) looks like a real record.
- The two-marks-versus-one rule is a good puzzle and the Thomas decoy is the right idea. It just needs to be mandatory.
- The law is short and specific. Each article answers one finding.
- The 3-filing limit with locked-in findings is the right structure. The checks behind it are too loose to give it teeth.
