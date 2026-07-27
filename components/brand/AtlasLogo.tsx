import type { CSSProperties } from "react";

/**
 * Atlas Leads logo — the "A" summit mark.
 *
 * The mark is the isolated "A" symbol from the AtlasLeads brand artwork
 * (navy legs, bright-blue inner peak, blue swoosh), served as a transparent
 * PNG at /brand/atlas-mark.png. On the site's light surfaces the bare mark
 * renders directly; inside navy bands the `.atlas-chip` wrapper gains a small
 * white rounded plate (the favicon treatment) so the navy artwork stays
 * visible — both handled in CSS, see "Navy bands" in globals.css.
 *
 * Variants: horizontal (mark + wordmark), stacked (mark over wordmark,
 * optional "Lead Generation" descriptor), icon (mark only). The wordmark
 * stays website text (Space Grotesk); "Leads" carries the blue accent. The
 * raster mark keeps its own brand colors in every tone — tones only change
 * the wordmark and chip treatment.
 *
 * Accessibility: when the wordmark text is visible it is the accessible name,
 * so the mark is decorative (empty alt). The icon-only variant labels the
 * mark itself.
 */

type Variant = "horizontal" | "stacked" | "icon";
type Tone = "onDark" | "brand" | "white" | "black";

type ToneColors = { atlas: string; leads: string; chip: boolean };

const TONES: Record<Tone, ToneColors> = {
  // Surface-adaptive default: navy "Atlas" + brand-blue "Leads" with a bare
  // mark on light surfaces; inside navy bands --logo-word-color and the
  // .atlas-chip rules flip to white text with the white mark plate.
  onDark: {
    atlas: "var(--logo-word-color, #031D38)",
    leads: "var(--color-accent)",
    chip: true,
  },
  // Full color on light surfaces — the exact logo brand blues.
  brand: { atlas: "#031D38", leads: "#0876D1", chip: false },
  // One-color wordmark treatments (the raster mark keeps its artwork colors).
  white: { atlas: "#FFFFFF", leads: "#FFFFFF", chip: true },
  black: { atlas: "#031D38", leads: "#031D38", chip: false },
};

const BRAND_FONT =
  'var(--font-space-grotesk), "Space Grotesk", ui-sans-serif, system-ui, sans-serif';

/** Intrinsic size of /brand/atlas-mark.png — keeps the rendered aspect true. */
const MARK_W = 745;
const MARK_H = 645;

/** The "A" mark; `size` is the mark height in px. `chip` wraps it on a white
 *  rounded plate so the navy artwork stays visible on dark surfaces. */
function AtlasMark({
  size,
  chip,
  decorative = true,
}: {
  size: number;
  chip: boolean;
  decorative?: boolean;
}) {
  const w = Math.round(size * (MARK_W / MARK_H));
  const img = (
    // Static 745px transparent PNG — plain <img> keeps it off the image
    // optimizer; sizes are explicit so nothing stretches.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/atlas-mark.png"
      alt={decorative ? "" : "Atlas Leads"}
      width={MARK_W}
      height={MARK_H}
      style={{ width: w, height: size, display: "block" }}
    />
  );
  if (!chip) return img;
  const pad = Math.round(size * 0.16);
  // Plate styling lives on .atlas-chip (globals.css) so the light theme can
  // drop the plate on light surfaces; sizes pass through as CSS vars.
  return (
    <span
      className="atlas-chip"
      style={
        {
          "--chip-pad": `${pad}px`,
          "--chip-r": `${Math.round((size + pad * 2) * 0.24)}px`,
        } as CSSProperties
      }
    >
      {img}
    </span>
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
        <AtlasMark size={size} chip={c.chip} decorative={false} />
      </span>
    );
  }

  if (variant === "stacked") {
    return (
      <span className={`inline-flex flex-col items-center ${className}`}>
        <AtlasMark size={size} chip={c.chip} />
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
      <AtlasMark size={size} chip={c.chip} />
      {wordmark}
    </span>
  );
}
