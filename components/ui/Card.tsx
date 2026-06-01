import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-2xl border border-line bg-paper p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/5 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
