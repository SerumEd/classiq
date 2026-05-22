# classIQ — Company Website

Marketing website for [classiq.in](https://classiq.in) — a structured school communication and student management platform built for Indian schools.

## Stack

This is a **pure static site**. No build step, no framework, no server.

- HTML, CSS and a small amount of vanilla JS
- React + Babel loaded from CDN (only used for the in-page tweaks panel)
- Google Fonts loaded from CDN

You can open `index.html` directly in a browser, or host the folder anywhere that serves static files.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, problem, solution, 12-feature bento, role tabs, onboarding, roadmap, pricing teaser, CTA |
| `features.html` | All 12 features, with detail and UI mocks |
| `pricing.html` | Plans, comparison table, FAQ |
| `about.html` | Story, principles, team |
| `contact.html` | Demo request form (front-end only — wire to your CRM) |

## Hosting on GitHub Pages

1. Create a new GitHub repository (e.g. `classiq-website`) and push the contents of this folder to the `main` branch.
   ```bash
   git init
   git add .
   git commit -m "Initial classIQ website"
   git branch -M main
   git remote add origin https://github.com/YOUR-ORG/classiq-website.git
   git push -u origin main
   ```
2. In your repo settings → **Pages**, set the source to **Deploy from a branch** → **main** → `/ (root)`.
3. Save. GitHub Pages will publish to `https://YOUR-ORG.github.io/classiq-website/` within a minute.

### Custom domain (classiq.in)

To serve it from `classiq.in`:

1. Create a file called `CNAME` in the repo root with the single line:
   ```
   classiq.in
   ```
2. At your DNS provider, add these records pointing your apex `classiq.in` to GitHub Pages:
   ```
   A   @   185.199.108.153
   A   @   185.199.109.153
   A   @   185.199.110.153
   A   @   185.199.111.153
   ```
   And optionally a `www` CNAME → `YOUR-ORG.github.io`.
3. In repo settings → Pages → Custom domain, enter `classiq.in` and tick **Enforce HTTPS**.

## File structure

```
.
├── index.html              # Home
├── features.html
├── pricing.html
├── about.html
├── contact.html
├── styles.css              # Core design tokens & layout
├── styles-bento.css        # Bento grid + scroll/hover animations
├── animations.js           # IntersectionObserver scroll-reveal
├── tweaks-panel.jsx        # In-page tweak panel shell (preview only)
├── tweaks-app.jsx          # Theme/font/layout toggles (preview only)
├── assets/
│   ├── logo.png            # Cropped logo used on every page
│   └── logo-original.png   # Untouched original artwork
└── README.md
```

## Customising

### Branding

The logo file used across the site is `assets/logo.png`. Replace it with any updated version (keep a similar aspect ratio).

### Colors and fonts

All design tokens live as CSS custom properties at the top of `styles.css`:

```css
:root {
  --teal-700: #146570;   /* primary brand */
  --coral:    #e8765b;   /* warm accent  */
  --amber:    #f2a03d;   /* warm accent 2 */
  --cream:    #ffffff;   /* page bg      */
  --ink:      #0b2a30;   /* text         */
  /* …etc */
}
```

Change them in one place to reskin the entire site.

### Pricing

Plans live in `index.html` (teaser) and `pricing.html` (full). Search for `₹240` / `₹180` / `Custom` to update.

### Contact form

`contact.html` shows a success message client-side only. To actually receive submissions, replace the `submit` handler in the inline `<script>` with a POST to your backend, [Formspree](https://formspree.io), [Getform](https://getform.io), or similar.

### Tweaks panel

The tweaks panel (theme / font / layout toggles) is a **preview-only** affordance — it never appears on the live website because it waits for a host message that's only sent by the local design environment. You can safely leave the files in the repo, or delete `tweaks-app.jsx`, `tweaks-panel.jsx` and the corresponding `<script>` tags in `index.html` if you want a leaner ship.

## License

© 2026 classIQ Technologies Pvt Ltd. All rights reserved.
