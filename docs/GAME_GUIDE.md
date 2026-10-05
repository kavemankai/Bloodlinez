# Bloodlinez: player's guide

This guide has no spoilers for Case 1. It explains how the game works and how to think about it. The solution is in `WALKTHROUGH_CASE1.md`; read that only if you are stuck or finished.

## What the game is

You are a night-shift associate at Ashgrove & Pell, a probate firm. Your clients' estates sometimes involve people who are not entirely human: a vampire who has to be proved to be himself, a will that is really a demon contract. The firm handles them with ordinary paperwork and a book of old law.

Everything happens on three websites inside the game: a genealogy site, the firm's webmail and the firm's intranet. You read records, work out who is who, and report to the partners.

Case 1 is **The Vane Estate**. Cornelius Vane, 91, went overboard from his yacht in March. His will leaves everything to his grandson Julian. His great-niece Margaret objects. A third woman, Daphne, says she is his daughter.

## Opening the game

Open `index.html` in a browser. Keep the `assets/` folder next to it, since the pictures load from there. There is nothing to install and no server is needed.

Your progress saves in the browser as you play. Close the page and come back later and it picks up where you left. When a case ends there is a button to replay it. To wipe your progress by hand, clear the site's data in your browser.

## The goal

The partners want **five findings**, each an answer plus the evidence that proves it. You have **three filings**.

- A finding is accepted only if the answer is right **and** the evidence is the right kind.
- A right answer on thin evidence is rejected, the same as a wrong answer.
- Findings that are accepted lock in. You only have to fix the ones that failed.
- After your first filing you see which findings failed. From your second you also get a nudge on each.
- Three filings used without all five accepted, and the file goes to someone else.

Your grade depends on how many filings it took: **A** for one, **B** for two, **C** for three. A minus sign after the letter means you relied on a hint from someone else's tree.

## Your first night

You do not need to read anything else before you start. The game teaches itself:

1. The first email in the inbox is the brief. Read it.
2. The second is a short welcome from the firm.
3. In the matter overview there is a **Training** list. It has eight steps and ticks itself off as you play.
4. A **Field guide** button sits on the right of the bookmarks bar at all times. It explains every tool.

The eight steps are: read the brief, search for a name, open a record, add a link to the tree, save a record to the matter, certify a photo comparison, cite a provision from the law library, and file a ruling.

## The three screens

The tabs along the top are three different websites. You can move between them freely.

**Bloodlines** is a commercial genealogy site.
- *Home*: recently viewed records and shortcuts.
- *Trees*: your family tree. It starts with four names and no links.
- *Search*: names, places and keywords, filtered by collection.
- *DNA*: the DNA kits for the people in the matter, with their closest matches.
- *Hints*: suggestions from record collections and from other members' trees.

**A&P Mail** is the firm's webmail. The brief, the claimants' letters and replies to your work arrive here. New mail appears as you find things, so check it now and then.

**Matter 2025-0417** is the firm's intranet.
- *Overview*: the parties, the estate's assets, your training list and an activity log.
- *Evidence*: everything you have saved.
- *Photo lab* and *Handwriting*: the two examiners.
- *Ruling*: where you answer the findings and file.
- *Notes*: a scratchpad that saves as you type.
- *Law library*: the Succession Act and the Nocturnal Accord of 1888.

## Building the tree

Your tree is your own work. It begins with only the four people named in the brief, with no lines between them.

1. Search for a name and open a record.
2. Read it. On the record page, the **Build your tree** panel lists the people the record names.
3. Choose two people and say how they are related: *is the parent of*, *adopted or raised as a stepchild*, *is married to*, *is claimed to be the parent of*, *also lived under the name of* or *is the same person as*.
4. Press **Add to tree**.

You can put any link on the tree, including one you only suspect. If the record you are reading shows it, the line is solid. If not, the line is dashed and marked **unproven**. Remove a link from the Tree check panel whenever you like. A person you add appears on the tree, and the record often names someone new to search for. That is how the tree grows backwards through the generations.

The tree checks dates for you and raises flags: a parent too young or already dead at the birth, a spouse who overlaps another marriage, one person alive as two at once, a person who becomes their own ancestor, and how long after a turning a child was born. Turning flags ask a question ("Does that matter?") until you have cited the article they rest on, and even then they only point at it; the conclusion is yours to draw. A flag never blocks a link. It marks something that does not add up, and the badge on the person's card shows the worst one.

Some links need two records together. A birth that names the mother only by her married name proves nothing on its own; her marriage record completes it. Open each record and add the same link from both. Until then the link stays dashed and your links list says **Partly proven**.

Families take people in. Use **adopted or raised as a stepchild** when a record shows a child taken into a household by adoption or by marriage.

A name on paper is not always one person. If a man went on under another person's name, add **also lived under the name of**. If two entries are one man throughout, add **is the same person as**. Either is proven only after you have certified a photo or handwriting comparison between them. Compare pictures from before a change as well as after. Some records state a fact about a person, such as an attack or a death with no body found. The **This record says that someone** box on that record lets you put it in the tree, against the person you choose. A record only ever offers what it says itself. If it names the person, a wrong choice is marked unproven. If it doesn't name anyone (an inquest on unidentified remains, say), your choice is recorded as your reading and nobody tells you whether you're right until you file.

Your findings depend on the tree. The partners check that it shows what each finding claims, and unproven links among the people involved will fail it. The ruling form shows only a summary of your tree; what is missing is named in the nudges from your second filing.

Events are recorded from the record page: *was attacked and turned*, *has no birth record*, *died with no body seen*, *shares DNA with Margaret through Marsh relatives*. The event form is on every record that names people, and it accepts only what that record states.

Things to know:
- Some people share a name. Compare the dates before deciding which person a record means.
- A person's profile fills in as you open records about them. Family details do not appear on a profile; they appear as links in the tree.
- A **claimed** link, shown dashed, is a statement a record makes without proving it.
- The tree arranges itself. You never need to move anything.

## Searching

Search covers names, places and keywords. Try the places, boats and objects mentioned in letters and reports, not just surnames. Narrow results with the collection filters. Most records are not attached to anyone's tree, so they only turn up if you search for them.

If a record should exist and does not, type the name into the search box and press **Request nil return**. The certificate says a search found nothing and can be saved as evidence. The firm only certifies searches for people in the matter.

## Reading a record

Records are the whole game, so read them closely:

- Who gave the information? Registers name an informant.
- Who signed, and when?
- Do the ages, places and dates agree with the other records?
- Read the notes at the bottom. Registrars, enumerators and clerks often wrote down what they noticed.

Use the zoom buttons on a record to see fine detail. Papers look like the period they come from, from medieval court rolls to modern letters, and the writing style changes with the date.

## Saving evidence

**Save to matter** puts a record in your evidence register. Save what you rely on and nothing else. On the Ruling tab you attach saved records to each finding.

- You can attach **four records at most** to a finding.
- Attaching records that have nothing to do with a finding counts against you.
- A finding needs more than one kind of record. One record rarely carries a finding alone.

## DNA

Each kit shows its closest matches and how much DNA each shares, in centimorgans (cM). More means closer. Read who the matches are as well as how much they share, because different relationships can share the same amount.

## The photo lab

Choose two photographs you have already opened on Bloodlines. Click each permanent mark you can see on the face, such as a scar or a mole, in both photos. Press **Certify comparison**.

- A result is positive only when **two or more** marks match on both photos.
- One mark is not enough. A mole can run in a family.
- A positive result counts as one identifying document in a ruling.
- Click on the mark itself. A click well away from it counts as a miss.

## The handwriting examiner

Choose two signed documents you have opened. The examiner certifies whether the same hand wrote both. A positive result counts as one identifying document, but only when the hand is the one you are trying to identify.

## The law library

The firm's rule is that if any party turns out not to be strictly human, the Nocturnal Accord decides the matter and the Succession Act does not. Read every article. When you rely on one, save it to the matter like a record.

## Hints

A hint marked with a red drop comes from a public member tree. Anyone can make one, including the people you are investigating. Check who owns the tree and when it was made. Accepting a hint can put an unproven link in your tree. Save the record behind a hint, not the hint itself. Using a hint costs you a mark on your grade.

## Mail

New mail arrives as you progress. Some of it is a nudge, some is information, some is from the people involved. The Partners folder is locked. Leave it alone.

## Ways to think

- Dates have to fit. People are not parents before they are born.
- Ask who benefits from a record and who wrote it.
- A record that should exist and does not is a clue.
- Two matching facts are stronger than one. One might be chance or family.
- If a person is hard to find in the records, ask why.
- A neat story is not evidence. Records are.

## Playtest log

If you are playtesting, open **Matter 2025-0417 › Overview** and press **Start recording** in the Playtest log box, or open the game with `?playtest=1` at the end of the address. The log records your searches, the records you open, your links, the flags you see and your filings, with times. It stays on your device. When you finish, press **Save log file** and send the file to the designer.

## If you are stuck

1. Reread the brief and the three claimants' letters. Every name, place and object in them is something to search.
2. Look at what you have not yet searched, not at what you already have.
3. Open the Field guide to see how the tools work.
4. Open `WALKTHROUGH_CASE1.md` as a last resort.

## Glossary

- **Matter**: a case file at the firm. This one is 2025-0417.
- **Finding**: one question you must answer, with evidence.
- **Filing**: one submission of all your findings. You get three.
- **Informant**: the person who gave a registrar the details.
- **Enumerator**: the person who collected census forms.
- **Nil return**: a certificate that a search found no record.
- **Centimorgan (cM)**: the unit of shared DNA.
- **Probate**: settling a dead person's estate.
- **Intestate**: dying without a valid will.
- **The Accord**: the Nocturnal Accord 1888, which governs estates where a party is not strictly human.
