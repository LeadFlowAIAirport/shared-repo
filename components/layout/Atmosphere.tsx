/**
 * Atmosphere — fixed, decorative background for the light theme. A soft
 * vertical wash (pale blue into white) with two faint brand-blue glows in the
 * upper corners for depth. Purely presentational: aria-hidden,
 * non-interactive, and pinned behind all content (-z-10).
 *
 * The glows are held still (no drift) so the background never competes with
 * the content.
 */
export default function Atmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base vertical wash — pale blue at the top, settling into white. */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f0f6fc_0%,#ffffff_46%,#f6fafd_100%)]" />

      {/* Bright-blue glow, upper-left. */}
      <div className="absolute -left-[12%] -top-[10%] size-[46rem] rounded-full bg-[radial-gradient(closest-side,rgba(8,118,209,0.1),transparent_72%)] blur-3xl" />

      {/* Deep-blue glow, right side. */}
      <div className="absolute -right-[14%] top-[18%] size-[42rem] rounded-full bg-[radial-gradient(closest-side,rgba(7,83,164,0.07),transparent_72%)] blur-3xl" />
    </div>
  );
}
