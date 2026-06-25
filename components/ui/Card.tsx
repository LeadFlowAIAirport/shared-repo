import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Frosted-glass card — the default surface of the dark UI. Hairline white
 * border, subtle blur, and a soft lift + accent-tinted glow on hover.
 */
export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`glass rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-glow motion-reduce:hover:translate-y-0 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
