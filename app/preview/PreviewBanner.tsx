import Link from "next/link";

/** Slim ribbon marking a Phase 2 design-preview route. Must render inside a
 *  `.fable` wrapper (uses the fbl-* classes). Not a route — app/preview has no
 *  page.tsx, so this file is just a shared component for the preview pages. */
export default function PreviewBanner({
  label,
  liveHref,
}: {
  label: string;
  liveHref: string;
}) {
  return (
    <div className="fbl-ribbon relative z-20">
      <div className="mx-auto flex h-9 w-full max-w-(--container-site) items-center justify-between gap-4 px-5 sm:px-8">
        <p className="fbl-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
          Design preview · {label}
        </p>
        <Link
          href={liveHref}
          className="fbl-mono text-[10px] uppercase tracking-[0.18em] text-slate transition-colors hover:text-ink"
        >
          View live page →
        </Link>
      </div>
    </div>
  );
}
