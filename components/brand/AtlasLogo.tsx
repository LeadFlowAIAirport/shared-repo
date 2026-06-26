import type { CSSProperties } from "react";

/**
 * Atlas Leads logo — "Apex" direction.
 *
 * The Apex mark is recreated cleanly as inline SVG from the brand guide (a
 * stroked "A": two legs rising to a peak, plus a crossbar set just above center
 * so the lower counter reads as a forward-pointing arrow). No dependency on the
 * Claude Design `dc-import` runtime.
 *
 * Variants: horizontal (icon + wordmark), stacked (icon over wordmark, optional
 * "Lead Generation" descriptor), icon (mark only). Tones cover the brand's
 * required treatments: full color, reversed-for-dark, one-color white/black.
 * The wordmark is Space Grotesk per the guide; "Leads" carries the green accent.
 *
 * Accessibility: when the wordmark text is visible it is the accessible name, so
 * the mark is `aria-hidden`. The icon-only variant has no visible text, so the
 * mark itself is labelled `role="img" aria-label="Atlas Leads"`.
 */

type Variant = "horizontal" | "stacked" | "icon";
type Tone = "onDark" | "brand" | "white" | "black";

type ToneColors = { leg: string; bar: string; atlas: string; leads: string };

const TONES: Record<Tone, ToneColors> = {
  // Reversed for the site's dark surfaces: white legs + green bar; white "Atlas",
  // green "Leads". Greens use the site token so the logo matches every accent.
  onDark: {
    leg: "#FFFFFF",
    bar: "var(--color-accent)",
    atlas: "#FFFFFF",
    leads: "var(--color-accent)",
  },
  // Full color on light surfaces (brand guide).
  brand: { leg: "#0C5A3A", bar: "#2EDB82", atlas: "#0B130E", leads: "#0C5A3A" },
  // One-color treatments.
  white: { leg: "#FFFFFF", bar: "#FFFFFF", atlas: "#FFFFFF", leads: "#FFFFFF" },
  black: { leg: "#0B130E", bar: "#0B130E", atlas: "#0B130E", leads: "#0B130E" },
};

const BRAND_FONT =
  'var(--font-space-grotesk), "Space Grotesk", ui-sans-serif, system-ui, sans-serif';

/** The Apex mark on a 0 0 32 32 unit grid. Stroke is set via style so CSS vars
 *  (e.g. the green bar) resolve; presentation attributes wouldn't. */
function ApexMark({
  leg,
  bar,
  size,
  decorative = true,
}: {
  leg: string;
  bar: string;
  size: number;
  decorative?: boolean;
}) {
  const stroke = Math.max(3.2, 32 * 0.125); // ~one unit on the grid
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      shapeRendering="geometricPrecision"
      aria-hidden={decorative || undefined}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "Atlas Leads"}
      focusable="false"
      style={{ display: "block" }}
    >
      {/* Legs → peak */}
      <path
        d="M5 27 L16 5 L27 27"
        style={{
          stroke: leg,
          strokeWidth: stroke,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
      {/* Crossbar (sits just above optical center) */}
      <path
        d="M10.3 16.5 H21.7"
        style={{ stroke: bar, strokeWidth: stroke, strokeLinecap: "round" }}
      />
    </svg>
  );
}

type Props = {
  variant?: Variant;
  tone?: Tone;
  /** Mark height in px; the wordmark scales from it. */
  size?: number;
  /** Stacked variant only: show the "Lead Generation" descriptor. */
  tagline?: boolean;
  className?: string;
};

export default function AtlasLogo({
  variant = "horizontal",
  tone = "onDark",
  size = 28,
  tagline = false,
  className = "",
}: Props) {
  const c = TONES[tone];
  const textPx = Math.round(size * 0.6);

  const wordStyle: CSSProperties = {
    fontFamily: BRAND_FONT,
    fontWeight: 700,
    letterSpacing: "-0.025em",
    fontSize: textPx,
    lineHeight: 1,
    color: c.atlas,
    whiteSpace: "nowrap",
  };

  const wordmark = (
    <span style={wordStyle}>
      Atlas<span style={{ color: c.leads }}> Leads</span>
    </span>
  );

  if (variant === "icon") {
    return (
      <span className={className} style={{ display: "inline-flex" }}>
        <ApexMark leg={c.leg} bar={c.bar} size={size} decorative={false} />
      </span>
    );
  }

  if (variant === "stacked") {
    return (
      <span className={`inline-flex flex-col items-center ${className}`}>
        <ApexMark leg={c.leg} bar={c.bar} size={size} />
        <span className="mt-2 flex flex-col items-center">
          {wordmark}
          {tagline && (
            <span
              style={{
                fontFamily: BRAND_FONT,
                fontWeight: 500,
                fontSize: Math.max(9, Math.round(textPx * 0.4)),
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "var(--color-slate)",
                marginTop: 6,
              }}
            >
              Lead Generation
            </span>
          )}
        </span>
      </span>
    );
  }

  // horizontal (default)
  return (
    <span
      className={`inline-flex items-center ${className}`}
      style={{ gap: Math.round(size * 0.36) }}
    >
      <ApexMark leg={c.leg} bar={c.bar} size={size} />
      {wordmark}
    </span>
  );
}
