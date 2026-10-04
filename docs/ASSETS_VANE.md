# Vane line: historical image list

This replaces the photo section of `ASSETS.md` for Case 1. It lists every picture the Vane bloodline needs, who is in it, what has to be legible, and what the photo lab needs from it.

Dates and ages come from `src/data.js`. Where I've added a detail the code doesn't state, it's marked (proposed).

## 1. The vampire's face (make this first)

One man appears in six photos across 130 years: Ambrose Vane (1889, 1912), Cornelius Vane (1962, 1972) and Julian Vane (2019). The photo lab only works if the viewer can pick out the same person each time, so make a reference sheet before anything else and generate every shot from it.

Fixed on every photo of him:

- **Scar:** through his left eyebrow, running diagonally across the brow. Roughly 2.5 cm. Paler than the surrounding skin. Two short stitch marks cross it. In a front-facing shot it sits on the right side of the frame.
- **Mole:** on his right cheek, low, near the corner of the mouth. In a front-facing shot it sits on the left side of the frame.
- **Apparent age:** 30 to 33 in every photo, whatever the caption says. The licences give him a stated age of 38 (1972) and 26 (2019). He should look about the same in both, and the 1972 and 2019 photos should look slightly wrong against the stated age.
- **Build (proposed):** lean, narrow jaw, straight nose, dark hair, heavy-lidded eyes, very pale skin. In the period photos the pallor reads as a lighter face against a darker backdrop.
- **Expression:** neutral to slightly amused. He never smiles with teeth.

Both marks must survive the worst photo in the set. The 1962 newspaper halftone and the 1972 faded licence will lose small detail, so draw the scar a little bolder in those two.

Compose each face so the marks land close to where the placeholder art puts them. In the 120×150 placeholder cell the scar is at (74, 49) and the mole at (46.5, 74). On a 600×750 photo with the face centred, that is about (370, 245) and (232, 370). Keep within 40 px of that if you can. If you can't, record the real positions (section 5).

## 2. Case photos

Each of these is a record in the game. All need the vampire's marks unless noted.

| File | Record | Date | Who and where | Look |
|---|---|---|---|---|
| `photo1889.jpg` | Studio portrait, Ambrose Vane | 1889 | Ambrose alone, aged "32". Halloran & Sons, Ashby. Pencilled on the back: "taken by lamplight at the sitter's request." | Cabinet card from a studio. Albumen print, sepia, painted backdrop, posing stand. High stiff collar, dark frock coat, side parting, oiled hair. Warm lamp from the left. Soft focus at the edges. |
| `photo1912.jpg` | Wedding portrait, Holloway–Vane | 1912 | Two men, half-length. Left: Arthur Holloway, groom (heavier build, moustache, broad nose, flat hair). Right: Ambrose, "the bride's father", still looking about 33. St Columba's, taken in the evening after the reception. | Landscape, 1200×750. Gelatin silver print, sepia-grey, a little contrast loss. Morning dress for the groom, frock coat for Ambrose. Interior flash or electric studio light, hard shadows on the wall. The point of the image: the older-looking groom is plainly the same age as, or older than, the man who is supposed to be his father-in-law. |
| `photo1962.jpg` | Newspaper: "Lights burn till dawn at Vane House" | 17 March 1962 | Cornelius, 28 by the caption, host at his ball. Dinner suit, bow tie. | Newspaper halftone, black and white, coarse dot screen (about 85 lpi). A flash-lit event shot, slightly overexposed. Crop of a bigger group photo is fine, but his face must be centred and large. Print on newsprint paper texture. |
| `licence1972.jpg` | Driver licence, Cornelius Vane | 1972 | Cornelius, 38 by the card. Booth headshot. | Faded Kodak-style colour print, orange-magenta shift. Flat frontal flash, pale blue-grey backdrop. Hair over the ears, wide shirt collar, wide lapels. Slightly soft. |
| `licence2019.jpg` | Driver licence, Julian Vane | 2019 | Julian, 26 by the card. | Digital licence photo. Grey backdrop, harsh front flash, no smile, short hair. Dark crew-neck or collared shirt. Sharp, so the scar is easy to see. |
| `photo1950.jpg` | Thomas Holloway, Ashby Rowing Club | 1950 | Thomas, 30, club secretary. Not the vampire. | Black and white club-annual photo. Glasses, wavy hair, blazer or rowing club jacket. Has a mole in the same cheek position as the vampire's and no scar. He's the red herring: a lab comparison of Thomas against any of the vampire photos should find one matching mark and fail. |

Notes:

- The wedding photo is the only one with two faces. The code treats the vampire as the right-hand face and offsets his mark positions by 120 px in the placeholder. A real image needs its own coordinates.
- The caption of the wedding photo says "bride's father". The bride isn't in the frame. Keep it that way. Harriet gets her own avatar.
- Thomas's mole sits where the vampire's does. That is deliberate, so a click test on both photos finds the same mark.

## 3. Avatars (256×256, from the Vane line)

| File | Person | Notes |
|---|---|---|
| `av_eliza.jpg` | Eliza Vane (née Marsh), about 30 | Victorian sepia portrait, hair up, plain high-necked dress. Born 1861, so shot about 1891. |
| `av_harriet.jpg` | Harriet Vane, about 24 | Sepia, around 1912. Wedding hairstyle. She shouldn't resemble Ambrose strongly, but a slight likeness around the eyes helps. |
| `av_arthur.jpg` | Arthur Holloway | A crop of the left face in `photo1912.jpg`. |
| `av_margaret.jpg` | Margaret Holloway, 70s | Recent colour photo. Ordinary, tired, kind. Shot in daylight. |
| `av_daphne.jpg` | Daphne Marsh-Pike, about 59 | Recent colour photo. Guarded expression, office or kitchen background. |

Desmond Vane has no photo, on purpose. Julian, Cornelius and Ambrose avatars are crops of their case photos.

## 4. Document scans

Documents stay as live HTML text. These are the textures and props behind them. One texture per kind, reused across records.

| File | Used by | Look |
|---|---|---|
| `paper_census.jpg` | `census1891` | Printed census schedule, ruled grid, brown ink handwriting font on top. |
| `paper_register.jpg` | `birth1888`, `birth1934`, `death1934`, `death1994`, `birth1993`, `birth1966`, `death2025` | Pre-printed registry form. 1888 and 1934 yellowed with a stamped folio number. 1960s onward cream, typed. |
| `paper_hospital.jpg` | `hospital1888` | Casualty register page, columns, house-surgeon handwriting. |
| `paper_newsprint.jpg` | `news1888`, `news1934`, `news1994`, `news2025`, `photo1962` | Newsprint, grey-yellow. The 1888 and 1934 clippings are brittle and torn at one edge. 1994 and 2025 are clean. |
| `paper_deed.jpg` | `trust1934`, `will2024` | Heavy cream legal paper, red wax or paper seal, solicitor's ribbon. The 1934 deed is aged. The 2024 will is modern. |
| `paper_diary.jpg` | `diary1888` | Cheap lined notebook page, binding shadow, foxing. Handwriting is Eliza's. A scan of a phone photo is fine. |
| `paper_letter.jpg` | `letterJulian`, `letterMargaret`, `letterDaphne` | Three different looks: Julian's heavy cream stock with a monogram, Margaret's lined notepaper, Daphne's law-firm letterhead (Pryor Legal). |
| `paper_invoice.jpg` | `funeral2025` | Funeral director invoice, carbon-copy blue form, Mortlake & Daughters header. |
| `paper_harbour.jpg` | `marine2025` | Harbour Authority incident form with a stamped reference. |
| `licence_card_1972.png`, `licence_card_2019.png` | `licence1972`, `licence2019` | Blank card templates with a photo slot. No text. |
| `stamp_registrar.png` | registry records | Transparent round "District of Ashby" seal. |
| `stamp_nil.png` | `nilDesmond` | Rectangular "NIL RETURN" stamp, red. |

## 5. Photo lab coordinates

Fill this in once the six photos exist. The click test in `app.js` takes one point per mark and counts a hit within 8 units. For a 600×750 photo the hit radius should become about 40 px.

| Photo | Scar (x, y) | Mole (x, y) |
|---|---|---|
| `photo1889.jpg` | | |
| `photo1912.jpg` (right face) | | |
| `photo1962.jpg` | | |
| `licence1972.jpg` | | |
| `licence2019.jpg` | | |
| `photo1950.jpg` (Thomas) | none | |

Checks before accepting a photo:

1. Shrink it to 150 px wide. Can you still see both marks on the vampire?
2. Flip it. If the scar is now on the wrong side, it was drawn on the wrong brow.
3. Put all six next to each other. Would a stranger say it's the same man?

## 6. Site branding (nice to have)

- `bloodlines_logo.svg`: the leaf-and-drop mark on a green header.
- `ap_crest.svg`: Ashgrove & Pell firm crest. Keep the A and P legible at 24 px.
- `bl_hero_home.jpg`: archive drawers or a row of albums, warm light.
- `dna_banner.jpg`: DNA helix on dark red.
- About six `collection_*.jpg` thumbnails, one each for census, birth, death, photos, newspapers, rolls.

## 7. Payoff images (later)

- `cellar_coffins.jpg`: Margaret's torch-lit phone photo of four coffins. Three brass plates read AMBROSE, CORNELIUS, JULIAN. The fourth is older and darker, its plate reads ASHGROVE. Underexposed, handheld, slightly blurred.
- `ashgrove_plate.jpg`: close-up of the ASHGROVE plate. Tarnished brass, engraved copperplate, a date that is not yet legible (the 1740 file is the later hook).

## Specs

- Case photos 600×750 (4:5). The wedding photo 1200×750. Avatars 256×256.
- JPEG, about 150 KB each. Paper textures 1000 px wide, about 80 KB.
- Name files as in the tables above. The game keys images by record id.
- Any photo of a real person from an archive carries a rights and consent problem, even if the sitter is long dead and the caption is fictional. Generate or shoot the faces. Archive material is fine for paper, newsprint and backdrops.
