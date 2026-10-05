# Design notes

## Premise

An inheritance lawyer works probate cases for supernatural families. The interface is a set of websites: a genealogy site modelled on the big consumer ones, the firm's webmail, and the firm's intranet. All play happens through reading records, comparing them and filing rulings.

The supernatural material has to create legal problems, not just flavour. Each creature type brings its own rule system that collides with ordinary succession law:

- **Vampires:** identity across names and centuries, staged deaths, no children after turning.
- **Werewolves:** pack law against probate. Bitten and born relatives have different standing.
- **Fae changelings:** the legal heir was swapped at birth, so DNA contradicts the paperwork.
- **Demons:** estates carry liabilities as well as assets, such as firstborn clauses that land on a particular descendant.
- **Aliens:** impossible DNA (clone-level matches, unassigned regions).
- **Ghosts:** the deceased contests their own will.

## Core loop

1. Read the brief and the claimants' letters.
2. Explore the tree, search records, check DNA and read the law.
3. Save evidence to the matter.
4. Answer each finding and attach the evidence that proves it.
5. File. The partners accept or reject each finding separately, with a nudge, without saying whether the answer or the evidence was wrong.

Three filings per case. Accepted findings lock in. The grade depends on filings used and on whether you relied on a planted hint.

## Depth of the archive

The Vane line runs back fifteen generations, to Hugh atte Vane (born about 1410). The oldest record is a 1436 manor court roll for a messuage in Hollow Lane. Before the parish registers start in 1538, the records are court rolls and wills. After that they are baptisms, marriages and tax returns, then the censuses from 1841 and civil registration from 1850. There are 70 records in all and most are there so the archive feels older than the case needs.

The Vanes are mortal and ordinary: boatmen, then coopers, then a shipwright. Ambrose was an ordinary clerk until 14 February 1888. Keep it that way, because the Case 1 answer depends on it.

The 1875 photo of Ambrose at 18 has the mole and no scar. It shows he aged normally until the attack and that the scar is acquired.

Ages are consistent across all documents. Ambrose was born 9 February 1857, so he was 31 at the 1888 hospital admission, 34 at the 1891 census and 76 at his 1934 death. Keep to that when adding records.

## Adding people to the tree

The tree lays itself out from the data, so there are no coordinates or hand-drawn lines to maintain. To add a person:

1. Add an entry to `PEOPLE` in `src/app.js` (name, life, initials, facts, records). A `tag` of `'Disputed'` draws the dashed card.
2. Add their relations to `REL`: `Father`, `Mother`, `Child`, `Spouse`, or `Claimed father` for a dashed claimed link. Listing one side is enough.
3. Add `SEX`, and an avatar in `AVATARS` if there is an image.

The layout works out generations, puts couples side by side, centres parents over children, places a spouse's parents above the spouse, and draws every connector. `GHOSTS` holds placeholder people who are not in `PEOPLE`, such as the unnamed mother of Cornelius. `tests/layout.js` checks for overlaps and bad placements.

## The oldest one (spoilers, not solved in Case 1)

R. Ashgrove is older than the oldest record in the tree. He is the "tall foreign gentleman" who attacked Ambrose in 1888, and the senior partner who has run the Vane family's legal affairs ever since. Case 1 never says so. The player can find the trail, but no finding depends on it.

The trail, in order of age:

- 1436: Roland Asgrove, clerk, stands pledge for Hugh atte Vane in the Ashby court roll.
- 1509: Roland Askgrove, scrivener, writes John atte Vane's will.
- 1577: Roland Ashgrove, notary, writes Thomas Vane's will.
- 1620: an oil portrait of Roland Ashgrove, Recorder of Ashby, "aged 33". The painting is in the Guildhall.
- 1740: R. Ashgrove, gentleman, of Ashgrove House, leases a Hollow Lane tenement to William Vane. The record cross-refers to Ashgrove estate (1740), file 0001, which is restricted to partners.
- 1886, 1912, 1921, 1934: R. Ashgrove witnesses the Vane marriage, the Holloway wedding, completes Ambrose's census and attests the trust.

The name drifts in spelling (Asgrove, Askgrove, Ashgrove). Each index entry carries a note normalising it, so a search for "Ashgrove" finds all nine.

The handwriting examiner matches Ashgrove's signature on the 1921 census to his signature on the 1740 lease. That is a positive result but it does not count as identity evidence in Finding 1, because the hand is not the Vanes' hand.

The Vane line is his tenants. What binds them to him is the 1740 estate file, which later cases open.

## Case 1 rules worth keeping across cases

- DNA amount alone is rarely decisive. Which side of the tree the shared matches sit on often is.
- A single heritable mark (a mole) can't identify someone. Two permanent marks, one of them acquired (a scar), can.
- Member-tree hints can be authored by the suspect. Check the tree's owner and creation date.
- The decisive rule is often in the law library, not in the records.

## The player's own arc

The firm registers a DNA kit in the player's name on day one. Each case adds a strange match or an odd ethnicity result to the player's own tree. The firm's oldest open file, "Ashgrove estate (1740), file 0001", is restricted to partners. R. Ashgrove appears as a witness in 1912 and as a solicitor in 1934, and he is still senior partner today.

The planned twist is that the player isn't the heir to that estate, they're one of its assets. The chain of descent the player builds case by case proves which descendant is owed under an old firstborn clause. The final case puts the player on the asset sheet, and they use every tool the game has taught them to argue their way off it.

Pacing target: one meaningful update to the player's own tree per case.

## Case 1 solution (spoilers)

1. Julian, Cornelius and Ambrose are one man. Proved by a certified photo comparison (same scar and mole, 1889 to 2019) plus two more documents spanning the century: a signature comparison, the 1934 birth registered by a dead father, the 1934 deed or the 1888 hospital register.
2. The 2025 death was staged. The boat was found moored with neat knots, a coffin with an inside latch went to the cellar, and the 1934 death followed the same pattern.
3. Desmond never existed. There is no birth record (nil-return certificate), he never appears on an electoral roll, and the neighbours never saw a son.
4. Daphne can't be his daughter. Accord Art. 3 says the turned don't beget children, and her shared matches with Margaret are all on the Marsh side.
5. Under Accord Art. 4 the estate is forfeit and passes to issue of the blood. Harriet was conceived before the February 1888 turning (hospital record, Eliza's diary), so Margaret inherits.
