# Fable Redesign — Design Preview

Design-preview overlay for the Atlas Leads homepage redesign. As of Phase 1 the
redesign has been **promoted to the live homepage (`/`)**, so the preview and the
homepage now share the same components, copy, and styles — this route stays as a
full-screen, chrome-carrying reference and for reviewing future changes in
isolation.

- **View it:** `npm run dev` → http://localhost:3000/preview/fable-redesign
- **Route:** renders as a full-screen overlay (`z-[70]`) with its own ribbon +
  header (`PreviewChrome`) and footer (`PreviewFooter`), above the global chrome.
- **SEO:** `robots: noindex, nofollow`.

## Files (this folder)

| File | Purpose |
| --- | --- |
| `page.tsx` | Route: fonts (Archivo · Instrument Serif · IBM Plex Mono), metadata, overlay assembly |
| `PreviewChrome.tsx` | Preview ribbon + sticky header + mobile menu (client) |
| `README.md` | This file |

## Shared modules (used by BOTH `/` and this preview)

| File | Purpose |
| --- | --- |
| `lib/homeContent.ts` | All redesign copy (typed, data-driven like `lib/content.ts`) |
| `components/fable/sections.tsx` | Hero, Problem, Approach, Modules, Process, Trust, FAQ, Final CTA, + `PreviewFooter` |
| `components/fable/OpportunityMap.tsx` | Animated "lead flow" map panel + `Topo` contours |
| `app/fable.css` | Design-system styles — every selector under `.fable`, keyframes prefixed `fbl-` |

Reused read-only: `components/brand/AtlasLogo`, `components/ui/Reveal`, and the
design tokens in `app/globals.css`.

## Content sources

Copy follows the canonical business direction (2026-06-29) from the synced
Agency Brain vault: AI Business Education + Implementation is the umbrella
offer; AI Receptionist, Ads + Booking, Local Visibility, and Full Growth System
are implementation modules under it. Honesty rules from `lib/content.ts` apply:
no testimonials, no invented stats, no guarantees.
