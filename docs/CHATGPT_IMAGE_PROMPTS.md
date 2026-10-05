# ChatGPT image prompts for the Vane line

Paste-ready prompts for every image in `ASSETS_VANE.md`. Each prompt stands alone. Do them in the order below.

## Setup

1. Start one chat per image. Long chats drift.
2. For every photo of the vampire (section 1), attach `docs/reference/vane_sheet.png` first and say "use the face in the close-up on the right as the reference". Do not attach it for Thomas, avatars or documents.
3. ChatGPT mixes up left and right on the subject's face. Every vampire prompt below describes the marks as they appear in the picture. Check each result: scar through the eyebrow on the right of the picture, mole low on the cheek on the left. If they're mirrored, flip the image in any editor. If the scar sits above the brow instead of through it, ask for "the scar must cut through the eyebrow hair, splitting it".
4. ChatGPT only offers square, 3:2 landscape and 2:3 portrait. The game wants 4:5 portrait (600×750) and a 1200×750 wedding photo. Ask for 2:3, then crop to 4:5 with the face centred. Ask for 3:2 for the wedding and crop to 1200×750.
5. Pre-photographic portraits (silhouette, oil painting) and the daguerreotype should look like the object, not a photo with a filter. If ChatGPT gives a sepia photo of a man in old clothes, say "this must look like a real silhouette / oil painting / daguerreotype" and regenerate.
6. Ask for no text unless a prompt says otherwise. Image models garble lettering. Documents stay as HTML in the game, so only textures are needed.
7. Save with the file names in each heading.

## 1. The vampire (needs the reference sheet)

Shared block. It is repeated inside each prompt, so you don't paste it separately:

> Same man as the attached reference. Looks about 32. Very pale skin, narrow face, angular jaw, high cheekbones, straight nose, thin lips, dark heavy-lidded eyes, dark hair. Two permanent marks, described as they appear in the picture: a pale raised scar about 2.5 cm long cutting diagonally through the eyebrow on the RIGHT side of the picture, splitting the eyebrow hair, with two tiny stitch marks across it; and one small dark round mole on the LEFT side of the picture, low on the cheek level with the corner of the mouth. The eyebrow on the left of the picture and the cheek on the right of the picture are clear. Both marks must be sharp enough to see when the image is shrunk to 150 px wide. Face looks straight at the camera, centred, filling about 45% of the frame width.

### `photo1875.jpg` — studio portrait at 18, 1875

> Attach vane_sheet.png. A genuine-looking 1875 studio cabinet portrait of the man in the reference as an 18-year-old, head and shoulders, sepia albumen print on a card mount. Same facial structure as the reference but visibly a youth: softer jaw, fuller cheeks, slightly thinner neck, a faint attempt at a moustache is not needed. Daylight from a window on the left, painted pale backdrop, soft focus toward the edges, fine paper grain. Plain wool jacket, small white collar, hair neatly parted. Looks straight at the lens. He has one small dark round mole on the LEFT side of the picture, low on the cheek level with the corner of the mouth. He has NO scar: both eyebrows are clear and unmarked. No text, no border. Portrait 2:3.

### `photo1889.jpg` — studio portrait, 1889

> Attach vane_sheet.png. A genuine-looking 1889 studio cabinet portrait of the man in the reference, head and shoulders, sepia albumen print on a card mount, slightly cropped to the print. Painted dark studio backdrop, lit by a single warm lamp from the left, soft focus toward the edges, fine paper grain, small scratches. High stiff white collar, black cravat, dark frock coat, oiled hair with a side parting. Face centred, looking straight at the lens, neutral expression. Same man as the reference. Looks about 32. Very pale skin, narrow face, angular jaw, high cheekbones, straight nose, thin lips, dark heavy-lidded eyes. Two permanent marks, described as they appear in the picture: a pale raised scar about 2.5 cm long cutting diagonally through the eyebrow on the RIGHT side of the picture, splitting the eyebrow hair, with two tiny stitch marks across it; and one small dark round mole on the LEFT side of the picture, low on the cheek level with the corner of the mouth. The eyebrow on the left of the picture and the cheek on the right are clear. Both marks clearly visible. No text, no border, no modern elements. Portrait 2:3.

### `photo1912.jpg` — wedding portrait, 1912 (two men)

> Attach vane_sheet.png. A 1912 evening studio portrait of two men standing side by side, half-length, taken after a wedding reception. Gelatin silver print, warm grey-brown tone, slightly low contrast, hard flash shadows on a plain wall behind them. On the LEFT of the picture: the groom, a heavier-built man of about 28 with a moustache, broad nose, flat combed hair, wearing morning dress with a white buttonhole flower. On the RIGHT of the picture: the man in the reference, wearing a black frock coat and high collar, looking about 32, clearly no older than the groom. Both look at the camera. The man on the right has two permanent marks, described as they appear in the picture: a pale raised scar cutting through the eyebrow on the RIGHT side of his face as seen in the picture, and a small dark mole low on his cheek on the LEFT side of his face as seen in the picture. Both marks sharp and visible. The groom has no scar and no mole. No bride, no other people, no text. Landscape 3:2.

### `photo1962.jpg` — newspaper halftone, 1962

> Attach vane_sheet.png. A 1962 newspaper photograph of the man in the reference at a society ball, head and shoulders, in a black dinner suit and bow tie, hair slicked back. Printed as a coarse newspaper halftone dot screen on yellowed newsprint, black and white, slightly overexposed press-flash look, a little blurred ink spread. The face is large and centred, looking at the camera. Because halftone loses detail, make the scar through the eyebrow and the mole slightly bolder than normal. Marks, as they appear in the picture: pale scar cutting through the eyebrow on the RIGHT side of the picture; small dark mole low on the cheek on the LEFT side of the picture. No caption, no headline, no text. Portrait 2:3.

### `licence1972.jpg` — driver licence photo, 1972

> Attach vane_sheet.png. A 1972 driver licence photo of the man in the reference, head and shoulders, shot in a licence office. Faded colour print with an orange-magenta shift, flat frontal flash, pale blue-grey wall behind him, slightly soft. Hair long over the ears with sideburns, wide-collared shirt with wide lapels. Neutral expression, looking at the camera. He still looks about 32. Marks, as they appear in the picture: pale scar cutting through the eyebrow on the RIGHT side of the picture; small dark mole low on the cheek on the LEFT side of the picture. Both clearly visible despite the fading. No card, no text, just the photograph. Portrait 2:3.

### `licence2019.jpg` — driver licence photo, 2019

> Attach vane_sheet.png. A modern driver licence photo of the man in the reference, head and shoulders, plain light grey backdrop, harsh direct front flash, sharp digital capture, no smile, short neat dark hair, dark crew-neck top. Looks about 32. Marks, as they appear in the picture: pale scar cutting through the eyebrow on the RIGHT side of the picture; small dark mole low on the cheek on the LEFT side of the picture. Both very clear. No card, no text. Portrait 2:3.

## 2. The decoys and the Ashgrove portrait (no reference sheet)

### `portrait1620.jpg` — Roland Ashgrove, 1620

> A genuine 1620 English oil portrait on panel of a man who looks about 33, a town recorder, three-quarter length against a dark brown ground. Black doublet, white falling collar, long dark hair to the shoulders, a composed and patient face with a faint closed-mouth smile, one hand resting on a rolled document. Warm glazed flesh tones, visible craquelure, darkened varnish, a gilt slip frame. No scar and no mole. No text. Portrait 2:3.

### `photo1950.jpg` — Thomas Holloway, 1950

> A 1950 black and white club-annual photograph of a man of about 30, head and shoulders: Thomas Holloway, rowing club secretary. Round wire glasses, wavy brushed-back hair, friendly guarded expression, wearing a club blazer with a collar and tie. Warm grey tones, slight film grain, soft focus at the edges. He has one small dark mole low on his cheek on the LEFT side of the picture, level with the corner of the mouth. No scar anywhere on his face. Clear eyebrows. He does not resemble any pale or gaunt person; he looks ordinary and healthy. No text. Portrait 2:3.

### `photo1921.jpg` — Frank Tully, wharf union, 1921

> A 1921 gelatin silver print, grey-brown with a white border and a slight curl, of a heavy-set man of about 40 in a committee portrait, head and shoulders: Frank Tully, secretary of a wharf workers' union. Thick moustache, flat cap off, rough wool jacket with a collar and tie, direct stare, hard interior flash with a shadow on the wall behind him. A pale raised scar cuts through the eyebrow on the RIGHT side of the picture, splitting the hair of the brow. No mole anywhere on his face. He does not look pale or gaunt; he looks weathered. No text. Portrait 2:3.

## 3. Portraits and avatars (square, crop to a face-centred 256×256)

Pre-photographic portraits are made objects, so ask for the object, not a filtered photo. State the medium first in every prompt.

### `av_samuel.jpg` — silhouette, about 1790

> A genuine 1790s silhouette portrait: a man's head and shoulders in profile facing left, cut from black paper and mounted on cream card, fine detail of a tied-back queue of hair and a plain coat collar picked out in the cut edge. Pure black on cream, no shading, no facial features inside the profile. Oval gilt frame with slightly convex glass glare. Age spots and foxing on the card. No text. Square.

### `av_thomasv.jpg` — provincial oil portrait, about 1818

> An early 19th-century provincial oil portrait by a travelling painter, of a man of about 29, a cooper, head and shoulders in a stiff three-quarter pose. Slightly naive and flat: simplified features, hard outlines, uneven proportions, dark brown ground, a plain blue coat and white neckcloth, a small wooden mallet held at the edge of the frame. Visible brushwork, cracked darkened varnish, small paint losses, in a heavy gilt frame. Looks like a painting, not a photograph. No text. Square.

### `av_josiah.jpg` — daguerreotype, about 1851

> A genuine 1851 daguerreotype portrait of a man of about 27, a shipwright, head and shoulders, newly married. Shown as a small hinged leather case opened flat with a brass mat and velvet lining. Polished silver plate with its mirror-like sheen, dark vignetting at the edges, a slight tarnish ring, very sharp central detail. Dark frock coat and short side whiskers, the faintest hand-tinted pink in the cheeks, a stiff held-still expression. No text. Square.

### `av_hannah.jpg` — carte de visite, about 1866

> A genuine 1860s carte de visite, a brown albumen print on a thin card with rounded corners, of a woman of about 38 standing beside a draped table against a painted studio backdrop. Crinoline skirt, fitted bodice, lace cap, hands folded. Brown tone, yellowed highlights, fine crackle, a printed studio mark along the lower edge that is too small to read. Three-quarter length, face centred and clear. No text. Square.

### `av_william.jpg` — carte de visite, about 1866

> A genuine 1860s carte de visite, a brown albumen print on a thin card with rounded corners, of a man of about 36 standing with one hand on a chair back against a painted studio backdrop of a column and curtain. Dark wool suit, waistcoat with a watch chain, whiskers, a steady look. Three-quarter length, face centred. Brown tone, fine crackle, studio mark too small to read. No text. Square.

### `av_ann.jpg` — carte de visite, about 1866

> A genuine 1860s carte de visite, a brown albumen print on a thin card with rounded corners, of a seated woman of about 34, a chandler's wife. Patterned day dress, hair parted in the middle and looped over the ears, hands in her lap, painted garden backdrop. Brown tone, fine crackle, studio mark too small to read. Three-quarter length, face centred. No text. Square.

### `av_eliza.jpg` — cabinet card, about 1891

> A genuine 1890s cabinet card, a warm brown albumen print on a thick mount with a gilt border and a blank studio-name panel, of a woman of about 30: Eliza, a shipping clerk's wife. Hair parted in the middle and pinned up, plain high-necked dark dress with a small brooch, calm direct gaze. Soft focus at the edges, painted studio backdrop. Head and shoulders, face centred. No text. Square.

### `av_harriet.jpg` — studio print, about 1912

> A genuine 1912 gelatin silver studio portrait, cool grey-brown, of a woman of about 24: Harriet, a bride. Hair in a soft pompadour with a lace veil pushed back, high lace collar, slight tension in the expression, a faint resemblance around the eyes to a pale narrow-faced man. Hard studio light, gentle contrast, white border. Head and shoulders, face centred. No text. Square.

### `av_margaret.jpg` — recent photo

> A recent digital colour photograph of a woman in her seventies: Margaret, tired and kind, short grey hair, cardigan, daylight from a window, lived-in face with natural wrinkles, no retouching. Head and shoulders, face centred, plain home background slightly out of focus. No text. Square.

### `av_daphne.jpg` — recent photo

> A recent digital colour photograph of a woman of about 59: Daphne, guarded expression, shoulder-length hair dyed dark brown with grey at the roots, blazer over a plain top, office or kitchen background out of focus, ordinary overhead lighting, no retouching. Head and shoulders, face centred. No text. Square.

`av_arthur.jpg` is a crop of the left face in `photo1912.jpg`. Julian, Cornelius and Ambrose avatars are crops of their case photos. Desmond has no portrait.

## 4. Paper by era

None of these may contain readable text or the game's own content. Ask for "illegible, blurred marks only where writing would be". Do each as a flat top-down scan with no table edge or hands.

### `paper_parchment.jpg`

> A flat top-down scan of an aged parchment sheet from the 1400s to 1700s, creamy brown and slightly translucent, a sewn edge on the left, a few lines of illegible secretary-hand writing in brown iron-gall ink with abbreviation marks, a small red wax seal at the lower edge. No readable words. Portrait 2:3.

### `paper_parish_1751.jpg`

> A flat top-down scan of a blank 1750s parish baptism register page: hand-ruled laid paper with visible chain lines and a faint watermark, brown iron-gall ink gone pale with halos around the strokes, faint illegible round-hand writing in a few lines and no printed columns, foxing and one stitched edge. No readable words. Portrait 2:3.

### `paper_parish_form.jpg`

> A flat top-down scan of a blank early 19th-century printed parish marriage register page: printed ruled columns with illegible headings, a few handwritten entries as unreadable brown ink strokes, one entry ending in a clear X mark, aged mid-brown paper. No readable words. Portrait 2:3.

### `paper_census_1841.jpg`

> A flat top-down scan of a thin 1841 printed census householder's schedule: small printed type as unreadable marks, a few faint ink entries, enumerator's pencil ticks in the margin, folded creases, thin yellowed paper. No readable words. Portrait 2:3.

### `paper_census.jpg`

> A flat top-down scan of an empty printed census householder's schedule from about 1900: pre-printed grid and column headings as unreadable marks, ink entries as illegible strokes, folded, a little brown ink smudging. Landscape 3:2.

### `paper_civil_1850.jpg`

> A flat top-down scan of a blank Victorian civil registration form: a copperplate-style printed heading as unreadable marks, wide margins, ruled boxes, a few steel-nib entries as illegible strokes, a red folio stamp, yellowed paper. No readable words. Portrait 2:3.

### `paper_hospital.jpg`

> A flat top-down scan of a Victorian hospital casualty register page: columns ruled in red and black, blank entries with only faint blurred steel-nib handwriting strokes, aged paper, a binding gutter on the left. No readable text. Portrait 2:3.

### `paper_diary.jpg`

> A flat scan of a cheap lined notebook page from 1888, binding shadow down the left side, brown foxing spots, blank lines with only faint illegible brown handwriting strokes, no readable words. Portrait 2:3.

### `paper_news_victorian.jpg`

> A flat top-down scan of a Victorian newspaper page with no readable words: seven narrow columns of dense letterpress as grey texture, a few wood-engraved advert boxes, no photographs, grey-brown brittle paper with a torn edge. Portrait 2:3.

### `paper_news_1930s.jpg`

> A flat top-down scan of a 1930s newspaper page with no readable words: six columns of grey texture, blocks for bold headlines, a rectangular blank area for a halftone photograph, yellowed newsprint. Portrait 2:3.

### `paper_news_postwar.jpg`

> A flat top-down scan of a mid-century newspaper page with no readable words: columns of grey texture, a coarse halftone dot pattern in a blank photo area, grey newsprint with uneven ink. Portrait 2:3.

### `paper_deed_1934.jpg`

> A flat top-down scan of a blank 1934 typewritten legal deed: heavy cream paper, faint typewriter lines as unreadable marks, a red paper seal and a pink silk ribbon at the bottom, light age. No readable words. Portrait 2:3.

### `paper_register.jpg`

> A flat top-down scan of a blank civil registration form from the 1930s: pre-printed boxes and rules in faded black ink, aged cream paper, one faint folio stamp, no readable words. Portrait 2:3.

### `paper_will_modern.jpg`

> A flat top-down scan of a plain white laser-printed legal document with no readable words: lines of grey texture, a signature block at the bottom with two blank witness lines. Portrait 2:3.

### `paper_letter.jpg`

> Three separate images, one per request, each a flat scan of blank letter paper. (1) heavy cream stock with an embossed monogram in the corner and no ink. (2) lined notepaper with a torn top edge. (3) white law-firm letterhead paper with a plain blue rule across the top and no words. Portrait 2:3.

### `paper_invoice.jpg`

> A flat scan of a carbon-copy invoice form in faded blue, with ruled boxes and a blank header band, no readable text. Portrait 2:3.

### `paper_harbour.jpg`

> A flat scan of a maritime authority incident report form with ruled boxes, one red date stamp that is blurred and unreadable, light coffee stain, no readable text. Portrait 2:3.

## 5. Mounts, frames, cards and stamps

Ask for a plain white background and an empty centre, then remove the background and the centre in an editor.

### `frame_silhouette.png`

> A single empty oval gilt picture frame with convex glass glare and cream card behind it, flat front view, nothing inside the oval. Plain white background. Portrait 2:3.

### `frame_oil.png`

> A single empty heavy rectangular gilt picture frame with a dark brown painted inner edge and aged gilding, flat front view, empty dark centre. Plain white background. Portrait 2:3.

### `case_daguerreotype.png`

> A hinged 1850s daguerreotype case opened flat, black pressed leather on the left, red velvet lining, a gilt brass mat with an empty oval opening, flat front view. Plain white background. Portrait 2:3.

### `mount_carte.png`

> A blank Victorian carte de visite card, thin cream card with rounded corners and a thin printed border, an empty rectangle where the photograph goes and a small illegible studio mark along the lower edge, flat front view. Plain white background. Portrait 2:3.

### `mount_cabinet.png`

> A blank Victorian cabinet card mount, thick cream card with a gilt border and an empty rectangle where the photograph goes, an empty panel along the lower edge for the studio name, flat front view. Plain white background. Portrait 2:3.

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

### `ashgrove_portrait_1740.jpg` (later, not in the game yet)

> A genuine 1740 English oil portrait of a gentleman of about 45 in a dark gown with a white neckcloth and a powdered wig, a rolled document in one hand, three-quarter length, dark ground, warm glazed skin tones, visible craquelure and darkened varnish, gilt frame. He has a long, composed face and a faint patient smile. No text. Portrait 2:3.

### `cellar_coffins.jpg`

> A dim handheld phone photograph taken by torchlight in a brick cellar: four wooden coffins on the floor, three of them with small brass name plates, the fourth older and darker. Underexposed, slightly blurred, harsh torch glare on the wood, wet brick walls. The plates must be too small to read. No people. Landscape 3:2.

### `ashgrove_plate.jpg`

> A close-up photograph of a tarnished brass coffin name plate engraved in copperplate script with the single word ASHGROVE, with a date line below it that is worn and illegible. Raking light, dark oak behind it, shallow depth of field. Landscape 3:2.

## After generating

Look at each vampire image next to the reference. Reject any where the face is not the same man, or either mark is missing or on the wrong side. Then fill in the coordinate table in `ASSETS_VANE.md` section 5.
