# Animated copy — what changed

This is a **parallel copy** of the LeadFlow site (`leadflow-site/`) used to demo the
site with more motion. The original is untouched. No new dependencies — motion is pure
CSS + the existing IntersectionObserver `Reveal` pattern. Everything respects
`prefers-reduced-motion` (a static fallback is guaranteed).

Run it on a separate port so it sits beside the original:

```bash
npm install
npm run dev -- -p 3001   # http://localhost:3001
```

## Motion foundation — `app/globals.css`
- Easing tokens in `@theme`: `--ease-out-quart/quint/expo` (also `ease-*` utilities). No bounce/elastic.
- `Reveal` variants: `.reveal-scale` (scale-up entrance) and `.reveal-fade` (opacity-only).
- `.cta-pulse` — soft "breathing" glow on a `::after` pseudo (no layout shift), `@keyframes cta-breathe`.
- `@keyframes menu-in` + `.animate-menu-in` for the mobile menu entrance.
- Reduced-motion: keeps revealed content visible **and** a blanket rule neutralizing every
  other transition/animation.

## Components
- `components/ui/Reveal.tsx` — added a `variant` prop (`rise` | `scale` | `fade`).
- `components/ui/Button.tsx` — hover lift + active press-down + shadow on the primary CTA
  (transform disabled under reduced-motion). Applies to every CTA site-wide at once.
- `components/sections/Hero.tsx` — scale-in entrance for the hero media; optional
  `primaryCtaPulse` prop (the breathing glow).
- `components/layout/Header.tsx` — animated underline that wipes in on nav-link hover (and
  stays for the active page), smoother sticky transition, animated mobile-menu entrance.
- `components/sections/Offer.tsx` — the offer list now reveals in a stagger with a card hover
  lift (was fully static).
- `components/layout/Footer.tsx` — gentle fade-in.
- `app/page.tsx` — passes `primaryCtaPulse`; "who it's for" trade chips cascade in.
- `app/how-it-works/page.tsx` — the lead-flow timeline steps reveal in sequence.

## Not animated
The hidden `/demo/*` pages are left exactly as-is (they already have their own bespoke
motion). They still build and serve.
