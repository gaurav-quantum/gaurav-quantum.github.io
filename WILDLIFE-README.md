# Add the wildlife gallery to your website

This update is based on repository commit `063ad56` and changes only the wildlife section of Personal Corner. It preserves the gardening, recipes, philosophy, and other sections.

## Upload

1. Extract `wildlife-gallery-update.zip` on your computer.
2. In the root of `gaurav-quantum/gaurav-quantum.github.io`, choose **Add file → Upload files**.
3. Upload `personal-corner.html`, `wildlife-data.js`, `wildlife-gallery.js`, `wildlife-gallery.css`, and the `assets` folder from this package. Keep the folder structure, so photographs end up inside `assets/wildlife/`. Existing unrelated assets remain in place.
4. Commit the changes to the branch used by GitHub Pages. Once the Pages deployment finishes, open `https://gaurav-quantum.github.io/personal-corner.html#wildlife` and refresh.

This package has not been pushed or published to your GitHub repository. Do not upload the ZIP itself as a website file. If you have edited Personal Corner after commit `063ad56`, merge its wildlife-section changes instead of replacing newer content.

## Write a creative caption

Open `wildlife-data.js` on GitHub and click the pencil icon. Find a photo by its original filename, identification, or description. Change only its empty `caption` value, for example:

```js
"caption": "The afternoon belongs to nobody. Just a lion and the light."
```

Commit the file. After deployment, your words appear directly underneath that photograph and in its enlarged view. Keep `"caption": ""` to omit the creative caption. The short animal identification remains visible.

Keep the quotation marks and commas. Use `\n` inside a caption for a line break. If your caption includes double quotation marks, write them as `\"`. Apostrophes work as usual. Captions are plain text, not HTML. Anyone browsing your website can read published captions; visitors cannot edit them.

## Collections

| Button | Photos | Identification |
| --- | ---: | --- |
| Squirrels | 7 | Grey, black and red-brown squirrels, plus a chipmunk |
| Bugs | 8 | Dragonflies, moths, a long-legged fly and a red-and-black bug |
| Animals | 4 | Three lion photographs and a domestic cat |
| Birds | 0 | Ready for future photographs |
| Fishes | 1 | Orange pond fish |

These are broad visual identifications, not confirmed species names. The chipmunk is grouped with squirrels. Animals contains the other mammals in this batch.

## Add another photograph

1. Upload it into the matching `assets/wildlife/` category folder.
2. Copy an entry in `wildlife-data.js`, give it a unique `id`, and update `src`, `category`, `title`, `alt`, and optional `caption`.
3. Use one of these category values: `squirrels`, `bugs`, `animals`, `birds`, `fishes`.
4. Describe what is visible in `alt` for visitors using screen readers. Use `caption` for your creative words.

The gallery counts update automatically. New bird photos replace the Birds empty state. Entries display in the order listed in the data file. Original filenames and photo compositions are preserved; images are lazy-loaded and displayed without cropping. Click a photo to enlarge it, then use Close or Escape to return.
