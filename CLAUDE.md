# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Marketing site for **LeadFlow**, an AI lead-gen / appointment-setting agency targeting local
plumbing and electrical companies. Static, content-driven, private (preview-only — not deployed).
Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4. See `README.md` for the
page list, getting-started steps, and the asset placeholders that still need real values.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build — every page prerenders static (catches type/lint errors)
npm run lint     # ESLint (eslint-config-next)
```

There is no test suite. `npm run build` is the closest thing to a verification gate.

## Architecture

**Copy lives in data, not JSX.** Every user-facing string is a typed export in `lib/content.ts`
(`site`, `home`, `plumbing`, `electrical`, `results`, `book`). To change wording, edit that file —
do not hard-code text in components. Components receive content as props and are purely
presentational.

**`/plumbing` and `/electrical` are the same page with different data.** Both route files
(`app/{plumbing,electrical}/page.tsx`) are thin wrappers that pass a `TradePage`-shaped content
object into the shared `components/sections/TradePageView.tsx`. The two content objects (`plumbing`,
`electrical` in `lib/content.ts`) must keep the same shape — `TradePage` (defined ~line 212 of
`content.ts`) is the contract. To add a section to both trade pages, edit `TradePageView` once and
add the corresponding field to the `TradePage` type + both objects.

**Three component layers** (`components/`):
- `ui/` — primitives: `Section`, `Button`, `Card`, `Accordion`, `Reveal`.
- `sections/` — composed page sections (`Hero`, `Steps`, `Services`, `FAQ`, `CTABand`, etc.).
- `layout/` — `Header` (sticky, mobile menu) and `Footer`, rendered once in `app/layout.tsx`.

**`Section` owns layout + background.** Wrap section content in `<Section bg="paper|mist|ink">` for
the full-bleed background, max-width container (`max-w-(--container-site)`), and vertical rhythm.
Pages visually alternate `paper` / `mist` bands; `ink` is the dark band. Don't reinvent container
widths or section padding — use `Section` and its `compact` prop.

**All CTAs funnel to `/book`.** `Button` (`ui/Button.tsx`) variants: `primary` (accent fill),
`secondary` (outline on light), `secondary-light` (outline on dark/ink). Conversion buttons are
`primary`.

**Scroll-in animation:** wrap elements in `<Reveal>` for a fade/slide-in. It's reduced-motion safe —
the CSS in `app/globals.css` force-shows content under `prefers-reduced-motion`, so never gate
visibility on JS.

## Styling — Tailwind v4 design tokens

There is **no `tailwind.config.js`**. Theme tokens are defined with `@theme` in `app/globals.css`
and exposed as semantic utility classes. Use the token classes, not raw hex or arbitrary values:

| Token | Class | Use |
| --- | --- | --- |
| `--color-ink` | `bg-ink` / `text-ink` | near-black text, dark bands |
| `--color-paper` | `bg-paper` | white surfaces |
| `--color-mist` | `bg-mist` | light section backgrounds |
| `--color-slate` | `text-slate` | secondary text |
| `--color-line` | `border-line` | hairline borders |
| `--color-accent` / `-hover` | `bg-accent` | electric blue — CTAs/links/highlights **only** |

Accent blue is reserved for things that should draw the eye (CTAs, links). Adding new design
tokens means adding them to `@theme` in `globals.css`, not a config file.

## Next.js 16 caveat

Per `AGENTS.md` above: this is Next 16, which has breaking changes vs. older versions. When writing
framework code (routing, metadata, `next/*` APIs), check `node_modules/next/dist/docs/` rather than
relying on training-data conventions.
