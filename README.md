# Gaurav Saxena — personal research website

A lightweight, responsive, no-build static website designed for free hosting on GitHub Pages.

## Publish on GitHub Pages

### Option A — create a dedicated user site
1. Create a public repository named `gaurav-saxena.github.io`.
2. Upload the contents of this folder (`index.html`, `styles.css`, `script.js`, and `assets/`).
3. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. GitHub will publish the site at `https://gaurav-quantum.github.io/`.

### Option B — use any repository
Upload the files to a repository and select the relevant branch/folder under **Settings → Pages**. The URL will normally be `https://gaurav-saxena.github.io/<repository-name>/`.

## Before publishing
- Replace the CV link `assets/Gaurav_Saxena_CV.pdf` with your current CV PDF, or remove that button.
- Add a professional headshot later if you want one. The current design deliberately works without a photo.
- Review the publication list and any paper-specific descriptions before going live.
- Update the email address if you want a different public contact address.

## Design notes
The site uses pure HTML/CSS/JS. There is no framework, build step, database, or paid service. Fonts are loaded from Google Fonts; the site will still function if that request is unavailable.
