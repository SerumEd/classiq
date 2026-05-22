# classIQ — Company Website

Marketing website for **classiq.in** — a structured school communication and student management platform, built in India for Indian schools.

## Stack

A pure static site. No build step, no framework, no server.

- HTML, CSS and a small amount of vanilla JS
- IntersectionObserver-driven scroll animations
- Google Fonts loaded from CDN

Open `index.html` directly in a browser, or host the folder anywhere that serves static files.

## Pages

The marketing site is a **single-page experience**. All nav tabs are in-page anchors.

| File | Purpose |
| --- | --- |
| `index.html` | The entire site — hero, problem, solution, features, designed-for, onboarding, pricing, roadmap, about |
| `contact.html` | Demo request form (front-end only — wire to your CRM) |

Sections inside `index.html` (linked from the nav):

| Anchor | Content |
| --- | --- |
| `#features` | All 8 live modules with UI mocks |
| `#designed` | Admin / teacher / parent / student personas with animated scenes |
| `#onboarding` | Animated 4-step onboarding walkthrough |
| `#pricing` | Plans + FAQ |
| `#roadmap` | What's coming next — fees, exams, staff attendance, payroll, bus tracking |
| `#about` | Team pedigree, principles, origin |

## Shared resources

```
styles.css            # Global design tokens, layout, components
styles-bento.css      # Phone frames + reusable mock surfaces
sections.css          # Per-section custom styles (features, persona scenes, onboarding, roadmap, about)
animations.js         # IntersectionObserver scroll-reveal
assets/               # Logo + UI screenshots
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
