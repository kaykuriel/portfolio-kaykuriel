# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev    # Dev server → http://localhost:3000
npm run build  # Production build
npm run start  # Serve production build
npm run lint   # ESLint
```

## Stack

- **Next.js 14** (App Router, no `src/` dir)
- **TypeScript** (strict mode)
- **Tailwind CSS** — custom font var `--font-sans` (Inter via `next/font/google`)
- No external UI library — all components hand-written

## Structure

```
app/
  layout.tsx      # Root layout, Inter font, metadata
  page.tsx        # Home — assembles Nav + Hero + Projects + Footer
  globals.css     # Global styles, utility classes (.grid-bg, .radial-glow, .gradient-text, .tag, .project-card)
components/
  AnimateIn.tsx   # "use client" — Intersection Observer fade-in-up wrapper, accepts delay + from direction
  Nav.tsx         # "use client" — sticky nav with scroll-aware blur backdrop
  Hero.tsx        # Full-viewport hero: animated badge, name, role chips, bio, CTAs
  Projects.tsx    # Project grid with GitHub OG image fallback — all project data at top of file
  Footer.tsx      # Contact section with email, WhatsApp, LinkedIn, GitHub + copyright bar
```

## Editing projects

All project data is in `components/Projects.tsx` in the `projects` array at the top. Each entry:

```ts
{
  title: string
  description: string
  tags: string[]
  lang: string       // "TypeScript" | "JavaScript" | "CSS" | "HTML" — drives lang dot color
  github: string     // full URL to GitHub repo or GitHub Pages site
  ghRepo: string     // repo name only (e.g. "to-do-list") — used for GitHub OG image fallback
  live?: string      // deploy URL, omit if none
  image?: string     // "/projects/filename.png" — drop file in public/projects/ first
}
```

If `image` is omitted, the card automatically falls back to `https://opengraph.githubassets.com/1/kaykuriel/<ghRepo>`.

## Adding project screenshots

1. Take a screenshot of the project
2. Save to `public/projects/<repo-name>.png`
3. Set `image: "/projects/<repo-name>.png"` on the project entry in `Projects.tsx`

## Design conventions

- Background: `#000` / `#070707` cards, text: `#ededed`, muted: `#444`–`#666`
- Hover effects: border opacity increase + `::after` radial gradient via `.project-card` CSS class
- Gradient headings: `.gradient-text` utility class
- Tags: `.tag` utility class
- Animations: wrap any element in `<AnimateIn delay={ms}>` for scroll-triggered fade-in

## Contacts (in Footer.tsx)

- Email: urielkaykcontato@gmail.com
- WhatsApp: +55 11 94990-3367
- LinkedIn: linkedin.com/in/kayk-uriel-a56450354
- GitHub: github.com/kaykuriel
