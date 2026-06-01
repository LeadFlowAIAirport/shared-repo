# LeadFlow

Marketing website for **LeadFlow** — an AI lead-generation & appointment-setting
agency serving local **plumbing** and **electrical** companies. The site explains
the done-for-you growth system (missed-call recovery, AI receptionist, instant lead
response, automated follow-up, appointment setting, local visibility) and funnels
every call-to-action to a single booking page.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (design tokens via `@theme` in `app/globals.css`)
- [lucide-react](https://lucide.dev) icons
- [Inter](https://rsms.me/inter/) font via `next/font`

## Getting started

```bash
npm install      # first time only (installs dependencies)
npm run dev      # start the dev server
```

Then open **http://localhost:3000** in your browser. Pages hot-reload as you edit.

### Other commands

```bash
npm run build    # production build (all pages prerender as static)
npm run start    # serve the production build
npm run lint     # ESLint
```

## Pages

| Route         | Purpose                                                        |
| ------------- | -------------------------------------------------------------- |
| `/`           | Home — overview, problem/solution, services, FAQ               |
| `/plumbing`   | Plumbing growth system (industry-specific copy)                |
| `/electrical` | Electrical growth system (industry-specific copy)              |
| `/results`    | Demo placeholder, illustrative metrics, testimonials           |
| `/book`       | Booking page — every CTA points here (Calendly placeholder)    |

## Project structure

```
app/                 # routes (one folder per page) + root layout & global CSS
components/
  layout/            # Header (sticky, mobile menu) and Footer
  sections/          # page sections: Hero, Steps, Services, FAQ, CTABand, etc.
  ui/                # primitives: Button, Section, Card, Accordion, Reveal
lib/content.ts       # ALL site copy as typed data — edit text here
```

All copy lives in `lib/content.ts`, so wording changes don't require touching
components. Plumbing and electrical pages share one `TradePageView` component fed by
different content objects.

## Placeholders to replace with real assets

These are clearly marked with `TODO` comments in the code:

- **Booking link** — `book.calendlyUrl` in `lib/content.ts` (and the embed snippet
  commented in `app/book/page.tsx`)
- **Partner names & contact email** — `site.footer` in `lib/content.ts`
- **Team/specialist photos** — Split section cards (`components/sections/Split.tsx`)
- **Testimonials & demo video** — `app/results/page.tsx`
- **Favicon / logo** — currently a text wordmark + default favicon

## Notes

- **Private repository** — not deployed or hosted anywhere. Running locally is
  preview-only.
- No environment variables or secrets are required to run the site.
