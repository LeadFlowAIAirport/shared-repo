# Design

Visual system for the LeadFlow marketing site. Register: **brand**. Direction: **grounded
fintech for trades** — the structured credibility of modern fintech (Mercury / Ramp), built
sturdy and plainspoken for a busy trades owner. Tokens live in `app/globals.css` (`@theme`).

## Theme

Light, high-contrast, daylight-readable (the audience reads on a phone in the field). Committed
color strategy: a deep petrol-teal brand color carries CTAs, links, and key marks on a pure-white
surface; near-black ink dominates structurally (the trade-tool black-and-signal stance); a warm
amber "signal" appears only at urgency moments. Sturdy, honest, nothing decorative that doesn't
earn its place.

## Color (OKLCH)

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Surface | `--color-paper` | `oklch(1 0 0)` | Page background, primary surface |
| Band | `--color-mist` | `oklch(0.972 0.005 215)` | Alternating section backgrounds |
| Ink | `--color-ink` | `oklch(0.205 0.02 220)` | Body text, dark bands (≥12:1 on white) |
| Muted | `--color-slate` | `oklch(0.475 0.018 220)` | Secondary text (~5:1 on white) |
| Line | `--color-line` | `oklch(0.905 0.006 220)` | Hairline borders |
| Brand | `--color-accent` | `oklch(0.45 0.085 205)` | CTAs, links, marks (white text on fill) |
| Brand hover | `--color-accent-hover` | `oklch(0.39 0.085 205)` | Hover state |
| Signal | `--color-signal` | `oklch(0.8 0.135 75)` | Amber urgency highlight (dark text on it) |
| Signal wash | `--color-signal-soft` | `oklch(0.93 0.06 80)` | Tinted amber highlight background |

Rules: white text on the brand fill; dark (ink) text on amber. Amber is rationed — it marks the
"missed call / fast response" idea, not general decoration. No gradients-on-text, no glassmorphism.

## Typography

- **Display** (`--font-display`): **Bricolage Grotesque** (600/700/800). Sturdy, characterful
  grotesque for all headings; tight tracking (-0.025em), weight 800 at hero scale.
- **Body** (`--font-sans`): **Public Sans** (400/500/600/700). Plainspoken, utilitarian humanist
  sans — designed for public-service legibility, on-theme for "dependable".
- Contrast axis is characterful-display vs neutral-utilitarian-body (not two similar sans).
- Body 17px (18px ≥ 768px), line-height 1.65, measure capped ~68ch. Heading line-height 1.05,
  `text-wrap: balance`; prose `text-wrap: pretty`. Fluid `clamp()` heading scale, ≥1.25 ratio.

## Layout

- Centered max-width container `--container-site: 1200px`, responsive gutters.
- `Section` owns full-bleed background + vertical rhythm; alternate `paper` / `mist`, with `ink`
  as the dark band. Fluid `clamp()` spacing; vary rhythm (don't uniformly pad every band).
- Mercury/Ramp structure: strong left-aligned hero, clear sections, varied treatments. Avoid
  identical icon-card grids. The 3-part system uses real numbered steps (it IS an ordered set).
- Mobile-first; tap targets ≥ 44px.

## Components

Three layers in `components/`: `ui/` primitives (`Section`, `Button`, `Card`, `Accordion`,
`Reveal`), `sections/` composed bands, `layout/` (`Header`, `Footer`). Buttons: `primary` (brand
fill, white text), `secondary` (outline on light), `secondary-light` (outline on dark/ink). All
conversion CTAs use `primary` and funnel to `/book`.

## Imagery

Structural/typographic brand (like Mercury), not photo-led. Custom SVG/diagram visuals of the
systems (lead flow, missed-call → text-back, AI receptionist) carry most of the visual weight; a
few **verified** grounded trade photos add human warmth. **No fabricated dashboards, metrics, or
data** — every visual stays clearly illustrative (honesty rule).

## Motion

Purposeful and restrained, reduced-motion-safe. One confident page-load reveal; section reveals
via `.reveal` (ease-out-expo) that enhance already-visible content. A subtle "missed call →
instant text-back" micro-demo shows the core value. Every animation has a
`prefers-reduced-motion: reduce` fallback; visibility is never gated on JS.
