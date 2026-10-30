# BharatYaksha Technologies – Company Website

The official website for **BharatYaksha Technologies**, an Indian technology company that builds intelligent systems connecting hardware, software and artificial intelligence.

> Intelligent systems. Built in Bharat.
> Guarding India's smart future.

---

## Features

- **Full-bleed photo hero:** a golden rice field at sunrise, supplied by the company, which ties the site to agriculture. It is toned to the brand navy with a flat tint so the headline stays readable. The photo drifts very slowly (a gentle zoom), the headline rises word by word, and the navbar and buttons switch to light colours while they sit over the photo. Two image sizes are provided so phones download the smaller one.
- **Real-photo section backgrounds:** one photograph per focus area sits behind its section, softened by a warm wash so the text stays readable: a wheat harvest behind About (agriculture), silk cocoons behind Core values (sericulture), a greenhouse interior behind Solutions (smart automation) and code on a monitor behind Contact (software development). On desktop the photo stays fixed while the page scrolls over it; phones get smaller versions
- **Scrolling marquee:** the focus areas as plain dark text separated by small dots, on a soft silver-grey band (the same colour a card turns on hover); the strip pauses on hover
- **About section** where the name cards flip: hovering (or tapping, on a phone) *Bharat* or *Yaksha* turns the card over to reveal its meaning, and a *Together* card with a pulsing "=" badge shows the result
- **Mission and vision cards** in white and soft silver-grey, each with a large faint icon that floats gently and turns on hover
- **Animated solution cards** (two large cards above three): on hover or keyboard focus a soft silver wash rises from the bottom, the icon tile inverts to white and rotates, a large faint watermark icon turns, and the card lifts. Cards also tilt a few degrees toward the cursor (mouse only)
- **Core values as five animated cards** that use the same colour-wipe hover as the solution cards, with a line along the bottom edge that draws in
- **Cards are 35% transparent:** every card surface (About, Solutions, Values, Contact form); the contact info cards are fully transparent has a 65% opaque fill, so the page background shows through slightly; text and icons stay fully solid
- **Call-to-action banner** and a **contact form** with validation, beside compact contact cards that slide and fill their icon with green on hover
- **Footer** with brand block, "Made in Bharat" badge, company and focus-area links, contact details with icons, a large faint BharatYaksha wordmark and a back-to-top button
- **Responsive layout** for desktop, tablet and mobile, with a slide-down mobile menu and no sideways scrolling on phones
- **Navigation aids:** a scroll progress bar and a nav link that highlights the section in view
- **Motion design** using Framer Motion and CSS: scroll reveals, drawing section dividers, hover effects, and respect for `prefers-reduced-motion`
- **Light theme** built on the logo palette (navy, steel silver and warm cream), with flat colours and no gradients

## Tech stack

| Layer      | Technology                              |
| ---------- | --------------------------------------- |
| UI library | React 18                                |
| Build tool | Vite 5                                  |
| Animation  | Framer Motion 11                        |
| Styling    | Plain CSS with design tokens (no framework) |
| Display font | Fraunces (Google Fonts), serif for headings |
| Body font  | Plus Jakarta Sans (Google Fonts)        |

## Project structure

```
Website/
├── index.html                  # HTML entry point and font links
├── vite.config.js              # Vite + React configuration
├── package.json
├── public/
│   └── images/
│       ├── logo.png            # Master copy of the company logo
│       ├── hero-bg-1920.jpg    # Hero background photo (desktop)
│       ├── bg-agri / bg-auto / bg-seri / bg-soft -1920.jpg and -1280.jpg  # Section background photos
│       ├── hero-bg-1280.jpg    # Hero background photo (phones and tablets)
│       ├── logo-full.png       # Full logo: monogram + wordmark
│       ├── logo-mark.png       # Square monogram (navbar, footer)
│       ├── favicon.png         # Circular browser tab icon (512px)
│       └── favicon-32.png      # Circular browser tab icon (32px)
└── src/
    ├── main.jsx                # React bootstrap
    ├── App.jsx                 # Page composition and section order
    ├── data/
    │   └── content.js          # All text, solutions, values and contact details
    ├── components/
    │   ├── ScrollProgress.jsx  # Saffron reading-progress bar at the top
    │   ├── Navbar.jsx          # Fixed header, active-section highlight and mobile menu
    │   ├── Hero.jsx            # Landing section
    │   ├── Marquee.jsx         # Scrolling focus-area bar
    │   ├── About.jsx           # Name meaning, mission and vision
    │   ├── Solutions.jsx       # Five solution cards
    │   ├── Values.jsx          # Core values
    │   ├── Contact.jsx         # Contact details and enquiry form
    │   ├── Footer.jsx          # Brand footer with links, contact details and wordmark
    │   ├── SectionHeading.jsx  # Reusable animated section heading
    │   ├── Logo.jsx            # Logo component (mark / full)
    │   └── Icons.jsx           # Inline SVG icon set
    └── styles/
        └── global.css          # Design tokens, layout, animations, responsive rules
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (installed with Node.js)

### Install and run locally

```bash
cd "C:\BharatYaksha Tech\Website"
npm install
npm run dev
```

Open the address shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

The optimised site is written to `dist/`. To preview that build locally:

```bash
npm run preview
```

## Updating the content

Most text lives in one file, **`src/data/content.js`**:

- `CONTACT_EMAIL`, `CONTACT_PHONE`, `CONTACT_PHONE_HREF`, `LOCATION`: company contact details
- `NAV_LINKS`: menu items
- `PILLARS`: focus-area labels used in the hero and marquee
- `SOLUTIONS`: the five solution cards (title, description, icon)
- `VALUES`: the five core values
- `INTEREST_OPTIONS`: options in the contact form dropdown

The hero headline is set in `HEADLINE` at the top of `src/components/Hero.jsx`. The rest of the hero and the About text are in `Hero.jsx` and `About.jsx`.

### Before going live

- Contact email and phone are set in `src/data/content.js` (`CONTACT_EMAIL`, `CONTACT_PHONE`, `CONTACT_PHONE_HREF`). The location ("Karnataka, India") is still a placeholder, so replace it with your address.
- The contact form opens the visitor's mail app with their message pre-filled. It does not store or send submissions on a server. To receive submissions automatically, connect the form to a form service or your own backend.

## Design system

Colours and fonts are defined as tokens at the top of `src/styles/global.css`. Colours are flat (no gradients).

| Token          | Value     | Use                                  |
| -------------- | --------- | ------------------------------------ |
| `--navy-900`   | `#0b2340` | Primary text, buttons, CTA banner, footer |
| `--navy-600`   | `#2d5787` | Accent text and highlights (e.g. italic "Built in Bharat.") |
| `--steel-500`  | `#5f7d9c` | Secondary text and labels            |
| `--cream`      | `#f7f4ee` | Page background                      |
| `--cream-deep` | `#efe9df` | Alternate section background         |
| `--saffron`    | `#e8831a` | Small accents: dividers, buttons on the hero, progress bar |

Typography:

- **Fraunces** (serif) for headings, with an italic accent for "Built in Bharat."
- **Plus Jakarta Sans** for body text, navigation and buttons.

## Animations

| Animation | Where | How it works |
| --------- | ----- | ------------ |
| Word-by-word headline reveal | Hero title | Each word rises from behind its own mask on page load |
| Slow photo drift | Hero background | The background photo zooms gently in and out over about half a minute |
| Scrolling marquee | Below the hero | The focus areas scroll continuously, pausing on hover |
| Drawing dividers | Section headings | A saffron rule draws in as the section appears |
| Scroll progress bar | Top of the page | A thin saffron bar fills as the visitor scrolls |
| Scroll reveals | Cards, lists, forms | Elements fade and rise as they enter the viewport |
| Wipe cards | Solution and value cards | A soft silver wash rises from the bottom of the card on hover, with the icon and watermark changing to match |
| Flip cards | Bharat and Yaksha cards | The card turns over in 3D on hover, tap, or Enter / Space |
| Tilting cards | Solution cards | Each card tilts a few degrees toward the cursor (mouse only) |
| Hover effects | Nav, buttons, mission, vision and contact cards | Cards lift or slide, icons tilt, and underlines and edges draw in |

All animations are turned off for visitors who prefer reduced motion (the CSS rule covers the stylesheet animations, and the headline checks the same setting in JavaScript).

## Deployment

The site is a static build, so it can be hosted on any static host, such as Netlify, Vercel, GitHub Pages, or an Nginx or Apache server.

1. Run `npm run build`.
2. Upload the contents of the `dist/` folder to the host.

For GitHub Pages or a sub-folder deployment, set `base` in `vite.config.js` to the path the site is served from.

## Accessibility and performance

- Semantic landmarks (`header`, `main`, `nav`, `footer`) and a skip link
- Visible keyboard focus styles
- Animations are disabled for users who prefer reduced motion
- Images are decoded asynchronously, and fonts load from Google Fonts with `display=swap`

## Brand

BharatYaksha Technologies – *Guarding India's smart future.*

- **Meaning of the name:** *Bharat* means India, and *Yaksha* is a guardian of treasures and nature, known for wisdom. Together, *BharatYaksha* means "India's guardian of technology."
- **Logo:** the navy and silver BY monogram with the BharatYaksha Technologies wordmark, stored in `public/images/`. Keep `logo.png` as the master file. `logo-mark.png` is the square monogram used in the navbar and footer (it keeps the logo's paper-coloured background, so its tile is the same colour). `favicon.png` and `favicon-32.png` are the circular icons shown in the browser tab.

## Image credits

- **Hero background photo:** a rice field at sunrise, supplied by BharatYaksha Technologies. Make sure the company has the right to use it on the website (for example, that it was taken by you or licensed for commercial use).
- **Section background photos:** wheat harvest ("Indiana Wheat Harvest", USDA NRCS, public domain), greenhouse interior ("Akram and Amna in Gawani Village Greenhouse", CC0; the two people's faces are blurred) and code on a monitor ("Code on computer monitor", Unsplash, CC0), all from Wikimedia Commons. Silk cocoons: "The Cocoons" by Abhilasha Bora, licensed **CC BY 4.0**, which requires credit, so it is credited in the site footer (https://commons.wikimedia.org/wiki/File:The_Cocoons.jpg). Keep that footer credit if you keep the photo.
- To use a different hero photo, replace the two files in `public/images/` (`hero-bg-1920.jpg`, about 1900px wide, and `hero-bg-1280.jpg`, about 1280px wide). Photos of your own products, farms or team are the best choice.

## License

© BharatYaksha Technologies. All rights reserved. This repository is proprietary. Add a licence file here if the code will be shared publicly.
