import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Small leading dot in the accent color (default true). */
  dot?: boolean;
  className?: string;
};

/**
 * Small glass eyebrow/badge used above section headings. A frosted pill with a
 * faint accent dot — the recurring label motif of the dark UI.
 */
export default function Pill({ children, dot = true, className = "" }: Props) {
  return (
    <span
      className={`glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate ${className}`}
    >
      {dot && (
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full rounded-full bg-accent opacity-70 motion-safe:animate-ping" />
          <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
        </span>
      )}
      {children}
    </span>
  );
}
