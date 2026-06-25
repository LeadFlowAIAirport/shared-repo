import type { ReactNode } from "react";

type Bg = "paper" | "mist" | "ink";

// Dark-native bands:
//  paper = transparent (the fixed Atmosphere glow shows through)
//  mist  = faint frosted panel for gentle alternation
//  ink   = deep "spotlight" band with an accent glow (CTA moments)
const bgClass: Record<Bg, string> = {
  paper: "text-ink",
  mist: "border-y border-white/5 bg-white/[0.025] text-ink",
  ink: "bg-ink text-white",
};

type Props = {
  children: ReactNode;
  bg?: Bg;
  id?: string;
  className?: string;
  /** Tighter vertical padding for compact bands. */
  compact?: boolean;
};

/** Full-bleed background with a centered, max-width content container. */
export default function Section({
  children,
  bg = "paper",
  id,
  className = "",
  compact,
}: Props) {
  return (
    <section
      id={id}
      className={`relative ${bgClass[bg]} ${
        compact ? "py-14 md:py-16" : "py-20 md:py-28"
      }`}
    >
      {/* Spotlight glow for the dark CTA band. */}
      {bg === "ink" && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-1/2 top-0 h-[28rem] w-[48rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent)_38%,transparent),transparent_70%)] blur-2xl" />
        </div>
      )}
      <div
        className={`relative mx-auto w-full max-w-(--container-site) px-5 sm:px-6 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
