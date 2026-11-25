<div align="center">

# Estate Orbit

**Curated luxury real estate, residences and developments.**

A premium real estate website for Estate Orbit, built with React, Vite and Tailwind CSS. Sample listings cover homes and developments across Gujarat and Mumbai.

[![License: MIT](https://img.shields.io/badge/License-MIT-8B6A3F?style=for-the-badge)](LICENSE)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter&logoColor=white)

</div>

---

## Table of contents

- [Overview](#overview)
- [Pages](#pages)
- [Contact](#contact)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Customisation](#customisation)
- [Images and video](#images-and-video)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Notes](#notes)
- [License](#license)

---

## Overview

Estate Orbit is a six-page real estate site: Home, Properties, Property Details, Projects, About and Contact. Visitors can filter listings, open a property, and send a validated enquiry. The design uses a warm ivory and sand palette with a bronze accent, serif headlines (Cormorant Garamond) and a clean sans body (Manrope).

The sample content is set in Gujarat and Mumbai and is meant to be replaced with real listings.

## Pages

| Route | What it shows |
| --- | --- |
| `/` | Hero with video background, property search, featured homes, a featured development, why Estate Orbit, locations, a short practice story, and a closing call to action |
| `/properties` | Full listing grid with filters for location, type, bedrooms, price and sort order |
| `/properties/:id` | Property detail with gallery, facts and an enquiry form |
| `/projects` | Developments with status, location, starting price, available units and possession date |
| `/about` | Brand story, mission, values, practice stats and the team |
| `/contact` | Office details and the enquiry form |
| Any unknown path | A 404 page with a link back home |

## Contact

These details appear on the Contact page and in the footer.

| | |
| --- | --- |
| Office | Level 6, Orbit House, C.G. Road, Ahmedabad, Gujarat 380009 |
| Phone | +91 79 2648 9031 |
| Email | hello@estateorbit.com |
| Hours | Mon – Sat, 9:30 AM – 6:30 PM |

The enquiry form checks name, email and phone on the client. It does not send mail yet. Wire `handleSubmit` in `src/components/ContactForm.jsx` to your email service or backend when you are ready.

## Features

- **Brand:** Estate Orbit, shown in the navbar, footer, page title and about copy
- **Functional filtering:** location, property type, bedrooms, price and sort, driven by numeric `priceValue` and `areaValue` fields
- **Validated enquiry forms** on the Contact and Property Details pages
- **Cinematic video backgrounds** with poster fallbacks, lazy loading and pause-when-off-screen
- **Glassmorphism** search panel and buttons layered over video
- **Mouse-tracking 3D tilt** on property card images and the featured project
- **Resilient images:** every photo swaps to an inline SVG placeholder if it fails to load
- **Design tokens** for colour, type and motion in `tailwind.config.js`
- **Accessible:** visible keyboard focus and reduced-motion support
- **GitHub Pages ready:** SPA deep-link refresh handled via `public/404.html`

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 18 (JavaScript / JSX) |
| Build | Vite 5 |
| Styling | Tailwind CSS 3, PostCSS |
| Routing | React Router v6 |
| Icons | Lucide React |
| Fonts | Cormorant Garamond and Manrope (Google Fonts) |
| Deployment | gh-pages |

## Getting started

Requires **Node.js 18+** and npm.

```bash
git clone https://github.com/aiviainnovations-arch/Modern-Real-Estate.git
cd Modern-Real-Estate

npm install
npm run dev      # http://localhost:5173
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch |

## Project structure

```text
src/
├── components/   Navbar, Footer, Hero, PropertyCard, PropertySearch,
│                 PropertyFilters, FeaturedProject, LocationSection,
│                 WhyChooseUs, AboutSection, CTASection, ContactForm,
│                 SectionHeading, ScrollToTop, Tilt3D, VideoBackground
├── pages/        Home, Properties, PropertyDetails, Projects, About,
│                 Contact, NotFound
├── data/         properties.js, projects.js, videos.js — sample content
├── utils/        imagePlaceholder.js — inline SVG fallback for images
├── App.jsx       Route definitions
├── main.jsx      Entry point (BrowserRouter, base URL)
└── index.css     Tailwind directives and shared utility classes
public/
└── 404.html      SPA redirect for GitHub Pages deep links
```

## Customisation

**Brand.** The wordmark is `Estate` plus a bronze `Orbit` in `src/components/Navbar.jsx` and `src/components/Footer.jsx`. The document title and meta description live in `index.html`.

**Office details.** Update the address, phone, email and hours together in `src/pages/Contact.jsx` and `src/components/Footer.jsx`.

**Listings and projects.** Edit `src/data/properties.js` and `src/data/projects.js`. Each property carries `priceValue` and `areaValue` (plain numbers) alongside the display strings `price` and `area`. Filters and sort use the numeric values.

**Colours and type.** Change the `colors` and `fontFamily` blocks in `tailwind.config.js`. The palette is ivory `#FAF6EE`, sand `#F0E7D8`, charcoal `#1E2126` and bronze `#8B6A3F`.

## Images and video

Photos load from Unsplash by URL, so there are no local image files to manage. Three background clips (hero, featured project, closing CTA) come from Mixkit's free stock library. `src/data/videos.js` lists each clip and its source page.

For production, download each clip from its `sourcePage` link, self-host it (for example `public/videos/hero.mp4`) and update the reference. That keeps the site independent of a third party's servers and follows Mixkit's free license.

`VideoBackground` always renders a poster underneath, only mounts the `<video>` near the viewport, pauses it when scrolled away, and stays on the poster for visitors with `prefers-reduced-motion` set.

## Deploying to GitHub Pages

1. **Set the base path** in `vite.config.js` to match the repository name:

   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/Modern-Real-Estate/',
   })
   ```

   For a user site (`<username>.github.io`) or a custom domain, use `base: '/'`.

2. **Update `public/404.html`.** `pathSegmentsToKeep` must equal the number of path segments in `base` (1 for `/Modern-Real-Estate/`, 0 for `/`). Together with the script in `index.html`, this lets a hard refresh on a deep link such as `/properties/2` work on GitHub Pages.

3. **Deploy:**

   ```bash
   npm install
   npm run deploy
   ```

4. **Enable Pages:** Settings → Pages → Deploy from branch → `gh-pages` → `/ (root)`.

The site will be live at `https://<username>.github.io/Modern-Real-Estate/`.

**Other static hosts (Netlify, Vercel):** run `npm run build` and point the host at `dist/`. You can usually set `base: '/'` and skip the `404.html` workaround.

## Notes

- Listings, prices, contact details and company information are sample content for demonstration.
- Reduced-motion preferences are respected (see `src/index.css`) and interactive elements have a visible keyboard focus state.

## License

Released under the [MIT License](LICENSE). Third-party assets, including Unsplash photos and Mixkit video clips, remain under their own licenses.

---

<div align="center">

Estate Orbit — curated real estate.

</div>
