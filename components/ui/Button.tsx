import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "secondary-light";

// Micro-interaction: subtle lift on hover, quick press-down on click. Transform
// is disabled under reduced-motion (colour/shadow still respond, no movement).
const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 min-h-12 text-base font-semibold tracking-tight transition-[color,background-color,border-color,box-shadow,transform,filter] duration-200 ease-out-quint hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  // Primary CTA — blue→violet gradient fill with a brand glow.
  primary:
    "bg-grad-accent text-white shadow-glow hover:shadow-glow-strong hover:brightness-110",
  // Secondary — frosted glass outline, for dark surfaces.
  secondary: "glass text-ink hover:border-white/25 hover:bg-white/[0.08]",
  // Secondary on the deepest "ink" spotlight band.
  "secondary-light":
    "border border-white/25 text-white hover:bg-white/10 hover:border-white/40",
};

type Props = {
  href: string;
  variant?: Variant;
  fullWidth?: boolean;
} & Omit<ComponentProps<typeof Link>, "href">;

export default function Button({
  href,
  variant = "primary",
  fullWidth,
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
