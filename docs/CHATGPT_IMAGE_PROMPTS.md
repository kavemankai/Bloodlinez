# ChatGPT image prompts for the Vane line

Paste-ready prompts for every image in `ASSETS_VANE.md`. Each prompt stands alone. Do them in the order below.

## Setup

1. Start one chat per image. Long chats drift.
2. For every photo of the vampire (section 1), attach `docs/reference/vane_sheet.png` first and say "use the face in the close-up on the right as the reference". Do not attach it for Thomas, avatars or documents.
3. ChatGPT mixes up left and right on the subject's face. Every vampire prompt below describes the marks as they appear in the picture. Check each result: scar through the eyebrow on the right of the picture, mole low on the cheek on the left. If they're mirrored, flip the image in any editor. If the scar sits above the brow instead of through it, ask for "the scar must cut through the eyebrow hair, splitting it".
4. ChatGPT only offers square, 3:2 landscape and 2:3 portrait. The game wants 4:5 portrait (600×750) and a 1200×750 wedding photo. Ask for 2:3, then crop to 4:5 with the face centred. Ask for 3:2 for the wedding and crop to 1200×750.
5. Ask for no text unless a prompt says otherwise. Image models garble lettering. Documents stay as HTML in the game, so only textures are needed.
6. Save with the file names in each heading.

## 1. The vampire (needs the reference sheet)

Shared block. It is repeated inside each prompt, so you don't paste it separately:

> Same man as the attached reference. Looks about 32. Very pale skin, narrow face, angular jaw, high cheekbones, straight nose, thin lips, dark heavy-lidded eyes, dark hair. Two permanent marks, described as they appear in the picture: a pale raised scar about 2.5 cm long cutting diagonally through the eyebrow on the RIGHT side of the picture, splitting the eyebrow hair, with two tiny stitch marks across it; and one small dark round mole on the LEFT side of the picture, low on the cheek level with the corner of the mouth. The eyebrow on the left of the picture and the cheek on the right of the picture are clear. Both marks must be sharp enough to see when the image is shrunk to 150 px wide. Face looks straight at the camera, centred, filling about 45% of the frame width.

### `photo1875.jpg` — studio portrait at 18, 1875

> Attach vane_sheet.png. A genuine-looking 1875 studio cabinet portrait of the man in the reference as an 18-year-old, head and shoulders, sepia albumen print on a card mount. Same facial structure as the reference but visibly a youth: softer jaw, fuller cheeks, slightly thinner neck, a faint attempt at a moustache is not needed. Daylight from a window on the left, painted pale backdrop, soft focus toward the edges, fine paper grain. Plain wool jacket, small white collar, hair neatly parted. Looks straight at the lens. He has one small dark round mole on the LEFT side of the picture, low on the cheek level with the corner of the mouth. He has NO scar: both eyebrows are clear and unmarked. No text, no border. Portrait 2:3.

### `photo1889.jpg` — studio portrait, 1889

> Attach vane_sheet.png. A genuine-looking 1889 studio cabinet portrait of the man in the reference, head and shoulders, sepia albumen print on a card mount, slightly cropped to the print. Painted dark studio backdrop, lit by a single warm lamp from the left, soft focus toward the edges, fine paper grain, small scratches. High stiff white collar, black cravat, dark frock coat, oiled hair with a side parting. Face centred, looking straight at the lens, neutral expression. Same man as the reference. Looks about 32. Very pale skin, narrow face, angular jaw, high cheekbones, straight nose, thin lips, dark heavy-lidded eyes. Two permanent marks, described as they appear in the picture: a pale raised scar about 2.5 cm long cutting diagonally through the eyebrow on the RIGHT side of the picture, splitting the eyebrow hair, with two tiny stitch marks across it; and one small dark round mole on the LEFT side of the picture, low on the cheek level with the corner of the mouth. The eyebrow on the left of the picture and the cheek on the right are clear. Both marks clearly visible. No text, no border, no modern elements. Portrait 2:3.

### `photo1912.jpg` — wedding portrait, 1912 (two men)

> Attach vane_sheet.png. A 1912 evening studio portrait of two men standing side by side, half-length, taken after a wedding reception. Gelatin silver print, warm grey-brown tone, slightly low contrast, hard flash shadows on a plain wall behind them. On the LEFT of the picture: the groom, a heavier-built man of about 28 with a moustache, broad nose, flat combed hair, wearing morning dress with a white buttonhole flower. On the RIGHT of the picture: the man in the reference, wearing a black frock coat and high collar, looking about 32, clearly no older than the groom. Both look at the camera. The man on the right has two permanent marks, described as they appear in the picture: a pale raised scar cutting through the eyebrow on the RIGHT side of his face as seen in the picture, and a small dark mole low on his cheek on the LEFT side of his face as seen in the picture. Both marks sharp and visible. The groom has no scar and no mole. No bride, no other people, no text. Landscape 3:2.

### `photo1962_news.jpg` — newspaper halftone, 1962

> Attach vane_sheet.png. A 1962 newspaper photograph of the man in the reference at a society ball, head and shoulders, in a black dinner suit and bow tie, hair slicked back. Printed as a coarse newspaper halftone dot screen on yellowed newsprint, black and white, slightly overexposed press-flash look, a little blurred ink spread. The face is large and centred, looking at the camera. Because halftone loses detail, make the scar through the eyebrow and the mole slightly bolder than normal. Marks, as they appear in the picture: pale scar cutting through the eyebrow on the RIGHT side of the picture; small dark mole low on the cheek on the LEFT side of the picture. No caption, no headline, no text. Portrait 2:3.

### `licence1972.jpg` — driver licence photo, 1972

> Attach vane_sheet.png. A 1972 driver licence photo of the man in the reference, head and shoulders, shot in a licence office. Faded colour print with an orange-magenta shift, flat frontal flash, pale blue-grey wall behind him, slightly soft. Hair long over the ears with sideburns, wide-collared shirt with wide lapels. Neutral expression, looking at the camera. He still looks about 32. Marks, as they appear in the picture: pale scar cutting through the eyebrow on the RIGHT side of the picture; small dark mole low on the cheek on the LEFT side of the picture. Both clearly visible despite the fading. No card, no text, just the photograph. Portrait 2:3.

### `licence2019.jpg` — driver licence photo, 2019

> Attach vane_sheet.png. A modern driver licence photo of the man in the reference, head and shoulders, plain light grey backdrop, harsh direct front flash, sharp digital capture, no smile, short neat dark hair, dark crew-neck top. Looks about 32. Marks, as they appear in the picture: pale scar cutting through the eyebrow on the RIGHT side of the picture; small dark mole low on the cheek on the LEFT side of the picture. Both very clear. No card, no text. Portrait 2:3.

## 2. Thomas Holloway (the red herring, no reference sheet)

### `thomas_1950.jpg`

> A 1950 black and white club-annual photograph of a man of about 30, head and shoulders: Thomas Holloway, rowing club secretary. Round wire glasses, wavy brushed-back hair, friendly guarded expression, wearing a club blazer with a collar and tie. Warm grey tones, slight film grain, soft focus at the edges. He has one small dark mole low on his cheek on the LEFT side of the picture, level with the corner of the mouth. No scar anywhere on his face. Clear eyebrows. He does not resemble any pale or gaunt person; he looks ordinary and healthy. No text. Portrait 2:3.

## 3. Avatars (256×256, ask for square)

Crop to a face-centred square. Keep them plain so they read at small size.

### `av_eliza.jpg`

> A Victorian sepia studio portrait, about 1891, of a woman of about 30: Eliza, a shipping clerk's wife. Hair parted in the middle and pinned up, plain high-necked dark dress with a small brooch, calm direct gaze. Soft focus, paper grain. Head and shoulders, face centred. No text. Square.

### `av_harriet.jpg`

> A sepia studio portrait, about 1912, of a woman of about 24: Harriet, a bride. Hair in a soft pompadour with a lace veil pushed back, high lace collar, slight tension in the expression, a faint resemblance around the eyes to a pale narrow-faced man. Gelatin silver print, gentle contrast. Head and shoulders, face centred. No text. Square.

### `av_margaret.jpg`

> A recent colour photograph of a woman in her seventies: Margaret, tired and kind, short grey hair, cardigan, daylight from a window, lived-in face with natural wrinkles, no retouching. Head and shoulders, face centred, plain home background slightly out of focus. No text. Square.

### `av_daphne.jpg`

> A recent colour photograph of a woman of about 59: Daphne, guarded expression, shoulder-length hair dyed dark brown with grey at the roots, blazer over a plain top, office or kitchen background out of focus, ordinary overhead lighting, no retouching. Head and shoulders, face centred. No text. Square.

`av_arthur.jpg` is a crop of the left face in `photo1912.jpg`. Julian, Cornelius and Ambrose avatars are crops of their case photos. Desmond has no photo.

## 4. Paper textures

None of these may contain readable text or the game's own content. Ask for "illegible, blurred marks only where writing would be".

### `paper_census.jpg`

> A flat top-down scan of an empty 1891 census householder's schedule: pre-printed ruled grid and column headings as unreadable printer's marks, yellowed paper, folded creases, foxing, a little brown ink smudging. Fills the whole frame, no table edge, no hands. No readable text. Landscape 3:2.

### `paper_register.jpg`

> A flat top-down scan of a blank civil registration form from the 1930s: pre-printed boxes and rules in faded black ink, aged cream paper, one faint folio stamp, no readable words. Fills the frame, no table edge. Portrait 2:3.

### `paper_hospital.jpg`

> A flat top-down scan of a Victorian hospital casualty register page: columns ruled in red and black, blank entries with only faint blurred handwriting strokes, aged paper, a binding gutter on the left. No readable text. Portrait 2:3.

### `paper_newsprint.jpg`

> A flat top-down scan of yellow-grey newsprint with no readable words or pictures, only faint column rules and an uneven ink bleed, slightly brittle with a torn edge on one side. Fills the frame. Portrait 2:3.

### `paper_deed.jpg`

> A flat top-down scan of heavy cream legal paper with a red wax seal and a green silk ribbon at the bottom, blank page, light age, no readable text. Portrait 2:3.

### `paper_diary.jpg`

> A flat scan of a cheap lined notebook page from 1888, binding shadow down the left side, brown foxing spots, blank lines with only faint illegible brown handwriting strokes, no readable words. Portrait 2:3.

### `paper_letter.jpg`

> Three separate images, one per request, each a flat scan of blank letter paper. (1) heavy cream stock with an embossed monogram in the corner and no ink. (2) lined notepaper with a torn top edge. (3) white law-firm letterhead paper with a plain blue rule across the top and no words. Portrait 2:3.

### `paper_invoice.jpg`

> A flat scan of a carbon-copy invoice form in faded blue, with ruled boxes and a blank header band, no readable text. Portrait 2:3.

### `paper_harbour.jpg`

> A flat scan of a maritime authority incident report form with ruled boxes, one red date stamp that is blurred and unreadable, light coffee stain, no readable text. Portrait 2:3.

## 5. Licence cards and stamps

Ask for a plain white background, then remove it in an editor to get transparency.

### `licence_card_1972.png`

> A blank 1970s driver licence card, flat top-down, rounded corners, pale green and cream printed security pattern, an empty rectangular photo slot on the left, empty ruled lines on the right, no words and no numbers. Plain white background. Landscape 3:2.

### `licence_card_2019.png`

> A blank modern plastic driver licence card, flat top-down, rounded corners, blue-grey gradient with a fine guilloche pattern, an empty photo slot on the left, empty lines on the right, no words and no numbers. Plain white background. Landscape 3:2.

### `stamp_registrar.png`

> A round red-ink rubber stamp impression on a plain white background, a double ring border with a simple star at the centre, uneven ink and a slight smudge. No letters, no numbers. Square.

### `stamp_nil.png`

> A red-ink rectangular rubber stamp impression on a plain white background, a thick border with heavy blocky capital letters spelling NIL RETURN, uneven ink, slightly rotated. Square.

## 6. Site branding

### `bloodlines_logo.svg` (ask for a flat vector-style logo, then trace)

> A flat logo mark for a genealogy website: a single leaf shape whose lower half is a blood drop, in deep green and dark red on a white background. No words. Simple enough to read at 24 px. Square.

### `ap_crest.svg`

> A flat law-firm crest: a plain shield with the letters A and P joined in a serif monogram, navy and gold on white. Simple enough to read at 24 px. Square.

### `bl_hero_home.jpg`

> A wide photograph of an archive room with wooden card-index drawers and old photo albums on shelves, warm low light, shallow depth of field, calm and slightly dusty. No people, no readable text. Landscape 3:2.

### `dna_banner.jpg`

> A wide abstract image of a DNA double helix in pale red lines on a very dark red background, soft glow, no text. Landscape 3:2.

### `collection_*.jpg` (one prompt, six images)

> Six separate images, one per request, each a close photograph on a dark wooden desk, soft window light, shallow depth of field, no readable text: (1) a stack of census books; (2) a box of birth certificates tied with string; (3) a black-bordered death notice card; (4) a pile of old photographs; (5) a folded newspaper; (6) a ledger open to a blank page. Square.

## 7. Payoff images

### `cellar_coffins.jpg`

> A dim handheld phone photograph taken by torchlight in a brick cellar: four wooden coffins on the floor, three of them with small brass name plates, the fourth older and darker. Underexposed, slightly blurred, harsh torch glare on the wood, wet brick walls. The plates must be too small to read. No people. Landscape 3:2.

### `ashgrove_plate.jpg`

> A close-up photograph of a tarnished brass coffin name plate engraved in copperplate script with the single word ASHGROVE, with a date line below it that is worn and illegible. Raking light, dark oak behind it, shallow depth of field. Landscape 3:2.

## After generating

Look at each vampire image next to the reference. Reject any where the face is not the same man, or either mark is missing or on the wrong side. Then fill in the coordinate table in `ASSETS_VANE.md` section 5.
