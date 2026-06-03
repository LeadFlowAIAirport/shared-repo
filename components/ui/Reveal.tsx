"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "rise" | "scale" | "fade";

const variantClass: Record<Variant, string> = {
  rise: "", // base .reveal (translateY)
  scale: "reveal-scale", // slight scale-up entrance — used for the hero media
  fade: "reveal-fade", // opacity-only — for quiet supporting content
};

type Props = {
  children: ReactNode;
  /** Stagger delay in ms for sequenced items. */
  delay?: number;
  /** Entrance style; all settle to their natural position when in view. */
  variant?: Variant;
  className?: string;
};

/**
 * Gentle fade/slide-in when the element scrolls into view.
 * CSS (.reveal / .is-visible in globals.css) fully disables motion under
 * prefers-reduced-motion, so content stays visible regardless.
 */
export default function Reveal({
  children,
  delay = 0,
  variant = "rise",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Under prefers-reduced-motion the CSS (globals.css) forces the element
    // visible regardless of `is-visible`, so no JS branch is needed here.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass[variant]} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
