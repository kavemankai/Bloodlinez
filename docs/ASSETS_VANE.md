# Vane line: historical image list

This replaces the photo section of `ASSETS.md` for Case 1. It lists every picture the Vane bloodline needs, who is in it, what has to be legible, and what the photo lab needs from it.

Dates and ages come from `src/data.js`. Where I've added a detail the code doesn't state, it's marked (proposed).

## Eras and media

Every picture and document has to look like it was made by the process that existed on its date. A 1789 portrait is not a sepia photograph, and a 1751 register is not a printed form. Use this table to pick the medium before you write a prompt.

| Years | Medium | What it looks like | Used here |
|---|---|---|---|
| 1500–1700 | Oil portrait on panel | A gentleman's formal portrait. Dark ground, glazed flesh tones, a white ruff or lace collar, an inscription with the sitter's age on the back. Darkened varnish and fine cracks. | Roland Ashgrove, 1620 |
| 1750–1830 | Silhouette | Black profile, cut from paper or painted on cream card or glass, fine hair detail picked out, oval frame. No colour, no shading, no eyes visible. | Samuel Vane, about 1790 |
| 1800–1840 | Oil portrait by a travelling painter | Provincial and slightly naive. Stiff pose, flat features, dark brown ground, cracked varnish, a prop that names the trade. Gilt frame. | Thomas Vane, about 1818 |
| 1839–1860 | Daguerreotype | A polished silver plate in a hinged case, brass mat and velvet. Mirror-like sheen that flips between positive and negative with the angle. Left and right reversed. Hand-tinted pink cheeks. Small. | Josiah Vane, about 1851 |
| 1860–1880 | Carte de visite | An albumen print about 6×10 cm pasted on a card, full or three-quarter length, standing beside a column or a painted garden backdrop. Brown tone, fine crackle. Studio name printed on the back. | Hannah Vane, William and Ann Marsh, about 1866 |
| 1866–1900 | Cabinet card | An albumen print about 11×17 cm on a thick mount, studio name in gilt on the mount. Painted backdrops, head clamp, long exposure so the sitter is still and slightly soft. Warm brown with yellowed highlights. | Ambrose 1875 and 1889, Eliza about 1891 |
| 1890–1930 | Gelatin silver print | Cooler grey-brown, sharper than albumen. Magnesium or electric flash gives hard shadows on the wall. Often a postcard-back print or a loose print with a white border. | 1912 wedding, Harriet, Frank Tully 1921 |
| 1930–1960 | Black-and-white print and newspaper halftone | Crisp grey prints from club or studio. In newspapers, a visible dot screen on newsprint. | Thomas Holloway 1950, the 1962 clipping |
| 1960–1990 | Colour print | Dye fade: orange and magenta shift, soft focus, flat on-camera flash, rounded print corners. | Cornelius's 1972 licence |
| 1995 on | Digital | Sharp, neutral colour, harsh flash or phone light. | Julian's 2019 licence, Margaret, Daphne |

Documents follow the same rule. Handwriting, paper and printing change with the date:

| Years | Writing and printing |
|---|---|
| 1350–1580 | Court rolls, wills and notarial documents written in secretary hand with abbreviations, in iron-gall ink on sewn parchment membranes or on paper. Court rolls were in Latin and the game shows a translation. |
| 1538–1789 | Parish registers in ink, a curate's hand, no printed columns until the 1750s. |
| 1751–1789 | Round hand in iron-gall ink, brown with a halo where it has bled. Long s. Hand-ruled lines on laid paper with faint chain lines. No printed columns. |
| 1754–1840 | Printed parish register pages with ruled columns, entries in ink. People who couldn't write signed with an X. |
| 1841 on | Printed census schedules, filled in ink. Ages in 1841 are rounded down to the nearest five. |
| 1837 on | Printed civil registration forms with a copperplate heading and wide margins, entries in a steel nib. |
| 1880s | Steel-nib copperplate handwriting. Newspapers are dense letterpress, six to eight narrow columns, wood-engraved adverts, no photographs. |
| 1930s | Typewritten deeds on heavy paper, fountain-pen signatures. Newspapers use bold headline types and halftone photographs. |
| 1960s–90s | Typed or ballpoint forms. Newsprint with coarse halftone, cleaner in the 1990s. |
| 2000s on | Laser-printed pages, scanned or web captures. |

Studio backdrops in the 1860–1900 photos were painted: a dim landscape, a curtain and column, or a plain graded cloud. That counts as the painted element and it should look like it.

## 1. The vampire's face (make this first)

One man appears in photos across 145 years: Ambrose Vane (1875 as a youth, then 1889 and 1912), Cornelius Vane (1962, 1972) and Julian Vane (2019). The photo lab only works if the viewer can pick out the same person each time, so make a reference sheet before anything else and generate every shot from it.

Fixed on every photo of him:

- **Scar:** through his left eyebrow, running diagonally across the brow. Roughly 2.5 cm. Paler than the surrounding skin. Two short stitch marks cross it. In a front-facing shot it sits on the right side of the frame.
- **Mole:** on his right cheek, low, near the corner of the mouth. In a front-facing shot it sits on the left side of the frame.
- **Apparent age:** 30 to 33 in every photo, whatever the caption says. The licences give him a stated age of 38 (1972) and 26 (2019). He should look about the same in both, and the 1972 and 2019 photos should look slightly wrong against the stated age.
- **Build (proposed):** lean, narrow jaw, straight nose, dark hair, heavy-lidded eyes, very pale skin. In the period photos the pallor reads as a lighter face against a darker backdrop.
- **Expression:** neutral to slightly amused. He never smiles with teeth.

**Reference sheet:** `docs/reference/vane_sheet.png` (full body left, chest-up close-up right). It shows the scar and mole on the correct sides. Use the close-up as the face reference for every other photo.

How it was made, so you can repeat or extend it:

- The model was `gpt_image_2_5` at 16:9, medium quality, one image. The first two attempts (low quality) put the mole on the wrong cheek and the scar above the brow instead of through it, so I discarded them.
- The model mixes up the subject's left and right. Describing the marks "as they appear in the picture" worked better, and the result still came out mirrored. I flipped each panel horizontally afterwards. Check the side on every new image and flip if needed.
- The clothes are neutral modern dark wool. The sheet fixes the face only. Period clothes and styling come in each photo's own prompt.
- The mole is small. In low-quality output it nearly disappears, so use medium quality or better for any photo where the lab needs to find it.

Both marks must survive the worst photo in the set. The 1962 newspaper halftone and the 1972 faded licence will lose small detail, so draw the scar a little bolder in those two.

Compose each face so the marks land close to where the placeholder art puts them. In the 120×150 placeholder cell the scar is at (74, 49) and the mole at (46.5, 74). On a 600×750 photo with the face centred, that is about (370, 245) and (232, 370). Keep within 40 px of that if you can. If you can't, record the real positions (section 5).

## 2. Case photos

Each of these is a record in the game. All need the vampire's marks unless noted. The Medium column says which process to imitate (see the table above).

| File | Date | Medium and format | Who and where | Look |
|---|---|---|---|---|
| `photo1875.jpg` | 1875 | Cabinet card, albumen print | Ambrose at 18, before he was turned. Halloran & Sons, Ashby. Pencilled on the back: "Ambrose, 18, for Mother. Taken at noon." | Window daylight from a skylight, painted pale backdrop, head clamp stiffness. Same face as the reference but visibly younger (softer jaw, fuller cheeks). Has the mole and no scar. The only photo where he looks his real age. |
| `photo1889.jpg` | 1889 | Cabinet card, albumen print | Ambrose alone, "aged 32". Halloran & Sons. Pencilled on the back: "taken by lamplight at the sitter's request." | Dark painted backdrop, warm lamp from the left, long exposure so slightly soft. High stiff collar, black cravat, frock coat, oiled side parting. |
| `photo1912.jpg` | 1912 | Gelatin silver print, landscape 1200×750 | Two men, half-length. Left: Arthur Holloway, groom (heavier, moustache, broad nose, flat hair). Right: Ambrose, "the bride's father", looking about 33. St Columba's, evening after the reception. | Cooler grey-brown than the albumen cards. Interior flash gives hard shadows on a plain wall. Morning dress and frock coat. The older-looking groom is plainly no younger than his supposed father-in-law. |
| `photo1962.jpg` | 17 Mar 1962 | Newspaper halftone on newsprint | Cornelius, "28", host at his ball. Dinner suit, bow tie. | Coarse dot screen (about 85 lpi), black and white, press-flash overexposure. Face large and centred. |
| `licence1972.jpg` | 1972 | Colour print, licence office | Cornelius, "38". | Orange-magenta dye shift, flat frontal flash, pale blue-grey wall, soft. Hair over the ears, sideburns, wide collar. |
| `licence2019.jpg` | 2019 | Digital | Julian, "26". | Grey backdrop, harsh front flash, no smile, short hair. Sharp, so the scar is easy to see. |
| `portrait1620.jpg` | 1620 | Oil on panel, Ashby Guildhall | Roland Ashgrove, Recorder of Ashby, "aetat. 33". The ancient vampire. Not on the lab. | Formal three-quarter portrait, dark brown ground, black doublet, white falling collar, long dark hair, a composed face with a faint patient look. Looks about 33 and has no scar or mole. Darkened varnish, fine cracks, gilt slip frame. |
| `photo1921.jpg` | 1921 | Gelatin silver print | Frank Tully, secretary of the Wharf Workers' Union. Not the vampire. | Committee portrait, white border, slight curl. Heavy-set, moustache, scar through the eyebrow from a winch accident, no mole. The scarred decoy. |
| `photo1950.jpg` | 1950 | Black-and-white club print | Thomas Holloway, 30, club secretary. Not the vampire. | Glasses, wavy hair, blazer. Mole in the same cheek position as the vampire's, no scar. The mole-only decoy. |

Notes:

- The wedding photo is the only one with two faces. The code treats the vampire as the right-hand face and offsets his mark positions by 120 px in the placeholder. A real image needs its own coordinates.
- The wedding photo's caption says "bride's father". The bride isn't in the frame. Keep it that way. Harriet gets her own avatar.
- Thomas's mole sits where the vampire's does, so a click test on both photos finds the same mark.
- Photos before 1889 and after 1934 cover two different jobs. The 1875 photo shows the scar is acquired. The 1889 to 2019 set carries the identity argument.

## 3. Portraits and avatars (256×256)

Everyone on the tree from Samuel Vane down gets a portrait in the medium of their era. The ten Vanes before him (1410 to 1720) get initials only; nobody painted a boatman or a cooper. The pre-photographic ones are objects, not photographs, and should look like an old painting or cutting, not a sepia filter. Crop each to a face-centred square; for the silhouette, daguerreotype and oil portrait keep the oval or frame edge visible in the crop so the medium reads.

| File | Person | Date and age | Medium | Notes |
|---|---|---|---|---|
| `av_samuel.jpg` | Samuel Vane, cooper | about 1790, age 39 | Silhouette | Black cut-paper profile facing left on cream card, oval gilt frame. Queue (tied-back hair) and plain coat. No face detail beyond the profile. |
| `av_thomasv.jpg` | Thomas Vane, cooper | about 1818, age 29 | Oil portrait | Provincial and slightly naive. Stiff three-quarter pose, flat features, dark brown ground, blue coat, a small cooper's adze or mallet in view. Cracked varnish, gilt frame. Painted before his wedding to Mary Cutler. |
| `av_josiah.jpg` | Josiah Vane, shipwright | about 1851, age 27 | Daguerreotype | Newly married. Small hinged case, brass mat, polished silver sheen with dark vignette. Dark frock coat, short side whiskers. Faint hand-tinted pink in the cheeks. |
| `av_hannah.jpg` | Hannah Vane (née Crewe) | about 1866, age 38 | Carte de visite | Standing beside a draped table or column against a painted backdrop. Crinoline skirt, lace cap. Brown albumen tone. |
| `av_william.jpg` | William Marsh, chandler | about 1866, age 36 | Carte de visite | Matching card to Ann's. Standing, hand on a chair back, dark suit, watch chain. |
| `av_ann.jpg` | Ann Marsh (née Teale) | about 1866, age 34 | Carte de visite | Seated, patterned dress, hair parted and looped over the ears. |
| `av_eliza.jpg` | Eliza Vane (née Marsh) | about 1891, age 30 | Cabinet card | Hair up, plain high-necked dress with a small brooch. |
| `av_harriet.jpg` | Harriet Vane, 24 | about 1912 | Gelatin silver studio print | Wedding hairstyle, lace collar. A slight likeness around the eyes to Ambrose. |
| `av_arthur.jpg` | Arthur Holloway | 1912 | Crop of `photo1912.jpg` | The left face. |
| `av_margaret.jpg` | Margaret Holloway, 70s | recent | Digital | Ordinary, tired, kind. Daylight. |
| `av_daphne.jpg` | Daphne Marsh-Pike, about 59 | recent | Digital | Guarded expression, office or kitchen background. |

Desmond Vane has no portrait, on purpose. Julian, Cornelius and Ambrose avatars are crops of their case photos.

None of the ancestors carry the vampire's marks. The scar was acquired in 1888 and the mole is the only mark that runs in the family.

## 4. Documents, frames and props

Documents stay as live HTML text. These are the textures and props behind them. Reuse one texture across records of the same era.

### Paper by era

| File | Used by | Period look |
|---|---|---|
| `paper_parchment.jpg` | `court1436`, `will1509`, `will1577`, `deed1740` | Aged parchment or heavy paper, written in secretary hand with abbreviations, iron-gall ink gone brown, a sewn edge on the court roll. Wax seal on the 1740 lease. |
| `paper_parish_1751.jpg` | `burial1544`, `bapt1550`, `marr1612`, `bapt1620`, `tax1674`, `marr1682`, `bapt1688`, `bapt1720`, `bapt1751`, `bapt1789` | Hand-ruled laid paper with chain lines and a faint watermark, iron-gall ink gone brown with halos. Round hand, long s. Foxing, one stitched edge. No printed columns. |
| `paper_parish_form.jpg` | `marr1818`, `burial1889` | Printed register page with ruled columns, entries in ink. For the marriage page the bride's mark is an X. Mid-brown aged paper. |
| `paper_census_1841.jpg` | `census1841` | Thin printed schedule, folded, enumerator's pencil ticks in the margin. |
| `paper_census.jpg` | `census1861`, `census1881`, `census1891`, `census1911`, `census1921` | Printed schedule filled in ink. The 1911 and 1921 sheets are larger, landscape, and signed by the head of household. |
| `paper_civil_1850.jpg` | `marr1850`, `birth1857`, `birth1861`, `marr1886`, `birth1888` | Printed registration form with a copperplate heading and wide margins, entries in steel nib, red folio stamp. Yellowed. |
| `paper_hospital.jpg` | `hospital1888` | Bound casualty register, columns ruled in red and black, house-surgeon handwriting, binding gutter on the left. |
| `paper_diary.jpg` | `diary1888` | Cheap lined notebook page, binding shadow, foxing, brown ink. Eliza's hand. |
| `paper_news_victorian.jpg` | `news1888`, `news1889` | Dense letterpress, seven narrow columns, wood-engraved adverts, no photographs. Grey-brown, brittle, one torn edge. |
| `paper_news_1930s.jpg` | `news1934` | Six columns, bold headline type, space for halftone photographs. Yellowed newsprint. |
| `paper_news_postwar.jpg` | `photo1962`, `news1994` | Grey newsprint with a coarse dot screen. The 1994 sample is cleaner photo-offset. 2025 is a clean web page and needs no texture. |
| `paper_deed_1934.jpg` | `trust1934` | Typewritten on heavy cream paper, ribbon and red paper seal, aged. |
| `paper_register.jpg` | `birth1934`, `death1934`, `inquest1934`, `birth1958d`, `birth1966`, `death1994`, `birth1993`, `death2025` | Printed registry form. 1930s yellowed with a stamped folio number, later ones cream and typed. |
| `paper_will_modern.jpg` | `will2024` | Plain white laser-printed pages with a witness block. |
| `paper_letter.jpg` | `letterJulian`, `letterMargaret`, `letterDaphne` | Three looks: Julian's heavy cream stock with a monogram, Margaret's lined notepaper, Daphne's law-firm letterhead (Pryor Legal). |
| `paper_invoice.jpg` | `funeral2025` | Funeral director invoice, blue carbon-copy form, Mortlake & Daughters header. |
| `paper_harbour.jpg` | `marine2025` | Harbour Authority incident form with a stamped reference. |

### Mounts and frames

These make the medium readable in the interface. Each has an empty centre where the portrait goes.

| File | Holds | Look |
|---|---|---|
| `frame_silhouette.png` | `av_samuel` | Oval gilt frame, cream card, convex glass glare. |
| `frame_oil.png` | `av_thomasv` | Heavy gilt frame, dark brown painted edge. |
| `case_daguerreotype.png` | `av_josiah` | Hinged leather case, brass mat, velvet lining. |
| `mount_carte.png` | `av_hannah`, `av_william`, `av_ann` | Thin card, rounded corners, a printed studio mark on the lower edge. |
| `mount_cabinet.png` | `photo1875`, `photo1889`, `av_eliza` | Thick card, gilt border, studio name blank in the lower margin. Use a darker mount for 1889 than for 1875. |
| `licence_card_1972.png`, `licence_card_2019.png` | `licence1972`, `licence2019` | Blank card templates with a photo slot. No text. |
| `stamp_registrar.png` | registry records | Transparent round "District of Ashby" seal. |
| `stamp_nil.png` | `nilDesmond` | Rectangular "NIL RETURN" stamp, red. |

## 5. Photo lab coordinates

Fill this in once the photos exist. The click test in `app.js` takes one point per mark and counts a hit within 8 units. For a 600×750 photo the hit radius should become about 40 px.

| Photo | Scar (x, y) | Mole (x, y) |
|---|---|---|
| `photo1875.jpg` | none | |
| `photo1889.jpg` | | |
| `photo1921.jpg` (Tully) | | none |
| `photo1912.jpg` (right face) | | |
| `photo1962.jpg` | | |
| `licence1972.jpg` | | |
| `licence2019.jpg` | | |
| `photo1950.jpg` (Thomas) | none | |

Checks before accepting a photo:

1. Shrink it to 150 px wide. Can you still see both marks on the vampire?
2. Flip it. If the scar is now on the wrong side, it was drawn on the wrong brow.
3. Put all the vampire photos next to each other. Would a stranger say it's the same man?

## 6. Site branding (nice to have)

- `bloodlines_logo.svg`: the leaf-and-drop mark on a green header.
- `ap_crest.svg`: Ashgrove & Pell firm crest. Keep the A and P legible at 24 px.
- `bl_hero_home.jpg`: archive drawers or a row of albums, warm light.
- `dna_banner.jpg`: DNA helix on dark red.
- About six `collection_*.jpg` thumbnails, one each for census, birth, death, photos, newspapers, rolls.

## 7. Payoff images (later)

- `cellar_coffins.jpg`: Margaret's torch-lit phone photo of four coffins. Three brass plates read AMBROSE, CORNELIUS, JULIAN. The fourth is older and darker, its plate reads ASHGROVE. Underexposed, handheld, slightly blurred.
- `ashgrove_portrait_1740.jpg` (not in the game yet): an oil portrait of an Ashgrove ancestor from 1740, in the style of a gentleman's portrait of the period. Dark gown, white neckcloth, powdered wig, a document in his hand. The face resembles the present R. Ashgrove. It is the hook for the 1740 file.
- `ashgrove_plate.jpg`: close-up of the ASHGROVE plate. Tarnished brass, engraved copperplate, a date that is not yet legible (the 1740 file is the later hook).

## Specs

- Case photos 600×750 (4:5). The wedding photo 1200×750. Avatars 256×256. Frames and mounts 600×750 with a transparent centre.
- JPEG, about 150 KB each. Paper textures 1000 px wide, about 80 KB.
- Name files as in the tables above. The game keys images by record id.
- Any photo of a real person from an archive carries a rights and consent problem, even if the sitter is long dead and the caption is fictional. Generate or shoot the faces. Archive material is fine for paper, newsprint and backdrops.
