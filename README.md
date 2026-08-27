# Kent Daniel De Moreta — Portfolio

A clean, professional portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Motion** (the motion.dev library, formerly Framer Motion), and **GSAP** (with ScrollTrigger). The centerpiece is an animated architecture diagram in the hero that maps your real stack (interface → service → data → infra) instead of a generic icon grid.

## Run it locally

You'll need [Node.js 18+](https://nodejs.org/) installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

## Deploy it (free)

The fastest path:

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and import the repo.
3. Leave all settings as default and click **Deploy**. Vercel auto-detects Next.js.
4. You'll get a live URL (e.g. `kent-portfolio.vercel.app`) in about a minute. Every push to `main` redeploys automatically.

Netlify works the same way if you prefer it.

## What to customize before you publish

- **`public/resume-placeholder.pdf`** — replace with your real resume PDF (keep the same filename, or update the link in `components/Hero.js`).
- **`components/Contact.js`** — swap the `#` placeholders for your real LinkedIn and GitHub URLs.
- **Profile photo** — there isn't one yet by design (you said you'd add it later). If you want to add one, drop an image in `public/` and add an `<Image>` next to the headline in `components/Hero.js` (use `next/image` for automatic optimization).
- **Project links** — the three project cards in `components/Projects.js` link to `#`. Point them to live demos or GitHub repos once you have them.
- **Copy** — the bio in `components/About.js` and headline in `components/Hero.js` are written from your CV. Adjust the voice/wording to sound like you.

## Project structure

```
app/
  layout.js       → fonts (Space Grotesk, Inter, JetBrains Mono) + global metadata
  page.js         → assembles all sections
  globals.css     → design tokens, focus states, reduced-motion handling
components/
  Nav.js          → sticky header with in-page links
  Hero.js         → headline + CTA + animated diagram
  StackDiagram.js → the signature animated architecture diagram
  About.js        → bio pulled from your CV
  Experience.js   → Make Technology internship
  Projects.js     → your 3 CV projects as cards
  Skills.js       → grouped skill tags (languages, frameworks, DBs, tools, AI tools)
  Contact.js      → email / phone / LinkedIn / GitHub links
  Footer.js
```

## Motion & GSAP: what's used where

- **Motion (motion.dev)** handles simple declarative entrances — fades and slide-ins on load or on scroll (`whileInView`). Used across `About.js`, `Experience.js`, `Contact.js`, and the supporting text in `Hero.js`.
- **GSAP** handles the effects that need pointer tracking or scroll scrubbing, which Motion doesn't target as precisely:
  - `components/ScrollProgress.js` — a thin bar scrubbed to overall scroll position (`ScrollTrigger`, `scrub`).
  - `components/Hero.js` — the headline splits into words and reveals with a staggered masked slide-up on load (`gsap.timeline`-style stagger).
  - `components/MagneticButton.js` — the "View my projects" button eases toward the cursor within its bounds (`gsap.quickTo`).
  - `components/useTilt.js` — a reusable hook giving the project cards a subtle 3D pointer-tilt; applied in `components/Projects.js`.
  - `components/Skills.js` — the skill tags reveal in batches as you scroll to them (`ScrollTrigger.batch`).

All GSAP effects check `prefers-reduced-motion` and skip themselves for users who have that set, and the tilt effect additionally skips on touch devices (no fine pointer). GSAP contexts (`gsap.context`) are used throughout so effects clean up properly if a component unmounts.

## Design notes

- **Palette**: cool paper white background, near-black ink text, teal accent, amber for role labels — deliberately avoids the "cream + serif + terracotta" and "dark + neon" templates that AI-generated sites tend toward.
- **Type**: Space Grotesk for headings (technical, geometric), Inter for body copy (readable), JetBrains Mono for tags and labels (reinforces the developer identity).
- **Motion**: the hero diagram draws itself in on load; everything else fades in on scroll, once, so re-scrolling doesn't feel busy. `prefers-reduced-motion` is respected globally.

## Notes on the code

This was hand-written rather than scaffolded via `create-next-app` (no network access in the environment that built it), so run `npm install` before anything else — the `node_modules` folder isn't included. If you hit a dependency resolution issue, running `npm install` again or deleting `package-lock.json` (there isn't one yet, so this shouldn't come up) usually resolves it.
