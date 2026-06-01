import type { ReactNode } from "react";

type Bg = "paper" | "mist" | "ink";

const bgClass: Record<Bg, string> = {
  paper: "bg-paper text-ink",
  mist: "bg-mist text-ink",
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
      className={`${bgClass[bg]} ${compact ? "py-14 md:py-16" : "py-20 md:py-28"}`}
    >
      <div
        className={`mx-auto w-full max-w-(--container-site) px-5 sm:px-6 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
