# Hammer & Anvil Ventures — Website

Next.js (App Router) site for [hammerandanvil.co.za](https://www.hammerandanvil.co.za/), generated as a static ditto.site clone of the source marketing site and blog.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Routes

- `/` — Home
- `/our-services` — Our Services
- `/about-us` — About Us
- `/blog` — Blog (paginated, plus `/[year]/[month]/[day]/[slug]` post pages)
- `/contact-us` — Contact Us
- `/coming-soon`, `/sample-page`

## Structure

- `src/app/` — App Router routes, layout, and per-route generated `components/`, `ditto.css`, and section markup.
- `src/app/ditto/` — generated runtime helpers for captured interactions/motion.
- `src/components/` — shared components (header, footer, blog pagination, contact form).
- `src/lib/` — shared utilities (`site.ts` nav/site config, `blog.ts` post loading, `utils.ts`).
- `content/blog/` — Markdown source for blog posts (loaded via `gray-matter` / `react-markdown`).
- `public/assets/cloned/` — materialized source assets.

See `ARCHITECTURE.md` for details on how the clone was generated, and `AGENTS.md` for which files are safe to edit vs. generated plumbing to leave alone.

## Contact Form

`src/app/api/contact/route.ts` currently logs submissions only — it still needs to be wired up to a real delivery mechanism (e.g. an email provider or the client's existing ClickUp form) before going live.

## Stack

Next.js 15, React 19, Tailwind CSS 4, TypeScript.
