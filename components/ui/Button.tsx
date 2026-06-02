import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "secondary-light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 min-h-12 text-base font-semibold tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  // Primary CTA — brand fill. Used everywhere conversions matter.
  primary: "bg-accent text-white hover:bg-accent-hover",
  // Secondary — sturdy outline on light backgrounds.
  secondary:
    "border-2 border-ink/15 text-ink hover:border-ink/35 hover:bg-mist",
  // Secondary — outline/ghost on dark (ink) bands.
  "secondary-light": "border-2 border-white/25 text-white hover:bg-white/10",
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
