# Northstar Jobs — Front-End Demo

A responsive, accessible job-portal interface built with plain HTML, CSS, and JavaScript.

## Pages

- `index.html` — hero, open-role cards, and calls to action
- `about.html` — project goals and implementation choices
- `contact.html` — accessible contact-form demonstration
- `script.js` — current year, role query-string prefill, and local form feedback

## Run locally

No installation or build is required. Open `index.html` directly, or serve the folder:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Important demo behavior

The contact form validates in the browser, then displays a local success message. It does not make a network request and does not send or store personal information.

## Deploy

This is a static site and can be deployed to GitHub Pages, Netlify, Cloudflare Pages, or another static host. For GitHub Pages, use repository **Settings → Pages**, choose **Deploy from a branch**, and select `main` with the root folder.

