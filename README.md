# classIQ — Company Website

Marketing website for **classiq.in** — a structured school communication and student management platform, built in India for Indian schools.

## Stack

A pure static site. No build step, no framework, no server.

- HTML, CSS and a small amount of vanilla JS
- IntersectionObserver-driven scroll animations
- Google Fonts loaded from CDN

Open `index.html` directly in a browser, or host the folder anywhere that serves static files.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, problem carousel, solution, 12-feature bento, pricing teaser, CTA |
| `features.html` | All 12 features with UI mocks |
| `who.html` | "Designed for" — admin / teacher / parent / student personas, each with animated scenes |
| `onboarding.html` | 4-step animated walkthrough from CSV import to running the year |
| `pricing.html` | Plans + FAQ |
| `roadmap.html` | What's coming next — fees, exams, staff attendance, payroll, bus tracking |
| `about.html` | Team pedigree, principles, origin |
| `contact.html` | Demo request form (front-end only — wire to your CRM) |

## Shared resources

```
styles.css                 # Global design tokens, layout, components
styles-bento.css           # Bento grid + phone frames
animations.js              # IntersectionObserver scroll-reveal
assets/                    # Logo + UI screenshots
```

## Hosting on GitHub Pages

1. Push this folder to a GitHub repo.
2. In **Settings → Pages**, set source to `main` branch, root `/`.
3. Your site will be live at `https://<user>.github.io/<repo>/`.

For a custom domain (e.g. `classiq.in`), add a `CNAME` file with the domain and set DNS A/ALIAS records to GitHub Pages IPs.

## Local development

No build step. Just open the file or run any static server:

```bash
python3 -m http.server 8000
# or
npx serve .
```

Then visit http://localhost:8000.

## License

© 2026 classIQ Technologies Pvt Ltd. All rights reserved.
