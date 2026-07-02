# Fable Redesign — Design Preview

Isolated design-preview of the Atlas Leads website redesign. **Nothing in this
folder is imported by production pages**, and no production file was modified.

- **View it:** `npm run dev` → http://localhost:3000/preview/fable-redesign
- **Route:** renders as a full-screen overlay (`z-[70]`) above the global
  header/footer, so the preview shows its own chrome without touching
  `app/layout.tsx`.
- **SEO:** `robots: noindex, nofollow`.

## Files

| File | Purpose |
| --- | --- |
| `page.tsx` | Route: fonts (Archivo · Instrument Serif · IBM Plex Mono), metadata, section assembly |
| `content.ts` | All preview copy (same data-driven pattern as `lib/content.ts`) |
| `sections.tsx` | Hero, Problem, Approach, Modules, Process, Trust, FAQ, Final CTA, Footer |
| `PreviewChrome.tsx` | Preview ribbon + sticky header + mobile menu (client) |
| `OpportunityMap.tsx` | Animated "lead flow" map panel in the hero |
| `preview.css` | Preview-scoped styles — every selector under `.fable-preview`, keyframes prefixed `fbl-` |

Reused from production (read-only imports): `components/brand/AtlasLogo`,
`components/ui/Reveal`, and the design tokens in `app/globals.css`.

## Content sources

Copy follows the canonical business direction (2026-06-29) from the synced
Agency Brain vault: AI Business Education + Implementation is the umbrella
offer; AI Receptionist, Ads + Booking, Local Visibility, and Full Growth System
are implementation modules under it. Honesty rules from `lib/content.ts` apply:
no testimonials, no invented stats, no guarantees.

If approved, the intended path to production is: merge this copy into
`lib/content.ts`, promote the section components into `components/`, and apply
the visual language to the live routes.
