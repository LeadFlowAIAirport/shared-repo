/**
 * Atmosphere — fixed, decorative background for the dark theme. Layered radial
 * glow orbs (electric blue + violet, with a faint warm "signal" amber), a soft
 * top light-beam, and a fine grain/vignette for depth. Purely presentational:
 * aria-hidden, non-interactive, and pinned behind all content (-z-10).
 *
 * Orbs drift slowly when motion is allowed; under prefers-reduced-motion the
 * blanket rule in globals.css freezes them (they stay visible, just still).
 */
export default function Atmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base vertical wash — slightly lifts the top, deepens the bottom. */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.2_0.03_265)_0%,var(--color-paper)_42%,var(--color-surface-deep)_100%)]" />

      {/* Electric-blue glow, upper-left. */}
      <div className="animate-float-slow absolute -left-[12%] -top-[10%] size-[46rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent)_55%,transparent),transparent_72%)] opacity-60 blur-3xl" />

      {/* Violet glow, right side. */}
      <div className="animate-float-slower absolute -right-[14%] top-[18%] size-[42rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-violet)_50%,transparent),transparent_72%)] opacity-55 blur-3xl" />

      {/* Faint amber "signal" ember, low and subtle — the opportunity color. */}
      <div className="absolute bottom-[-8%] left-[30%] size-[34rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-signal)_28%,transparent),transparent_70%)] opacity-30 blur-3xl" />

      {/* Soft beam from the top center. */}
      <div className="absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--color-accent)_22%,transparent),transparent_70%)]" />

      {/* Fine grain for texture (SVG noise, very low opacity). */}
      <div className="grain absolute inset-0 opacity-[0.05] mix-blend-soft-light" />

      {/* Vignette to settle the edges. */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_55%,oklch(0.1_0.02_265)_100%)]" />
    </div>
  );
}
