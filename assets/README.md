# Bloodlinez art assets

Generated artwork based on the repository's art briefs and Vane reference sheet: 60 original exports, four portrait crops, and two SVG traces of the generated logos. Open `gallery.html` to browse all 66 files. `manifest.json` records dimensions, sizes, prompts, and derivations.

Portraits are 600 × 750; the wedding image is 1200 × 750. Avatars are 256 × 256, collection thumbnails 512 × 512, and paper textures 1000 pixels wide. JPEG exports are compressed for use in the game. Logo PNGs are accompanied by traced SVG versions.

The art is wired into the game. Photo-lab mark positions are in `src/data.js` (`IMGS`) and in `docs/ASSETS_VANE.md`. The frames, mounts, cards, stamps, crest and logo were masked to transparent WebP; `props.json` holds the size and photo-window position of each. Document text is rendered by the game over the paper textures.

Desmond has no portrait, as specified in the brief. Arthur, Ambrose, Cornelius, and Julian avatars are cropped from their corresponding evidence photographs.
