import { CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import type { LedBullet } from "@/lib/content";

type Props = {
  heading: string;
  items: LedBullet[];
  closing?: string;
  bg?: "paper" | "mist";
  /** Two-column layout (used for "Why Choose Us"). */
  columns?: boolean;
};

export default function Checklist({
  heading,
  items,
  closing,
  bg = "paper",
  columns,
}: Props) {
  return (
    <Section bg={bg}>
      <Reveal>
        <h2 className="text-3xl font-bold sm:text-4xl">{heading}</h2>
      </Reveal>

      <ul
        className={`mt-10 grid gap-x-10 gap-y-6 ${columns ? "md:grid-cols-2" : ""}`}
      >
        {items.map((item, i) => (
          <Reveal key={item.lead} delay={(i % 2) * 70}>
            <li className="flex gap-4">
              <CheckCircle2
                aria-hidden
                className="mt-0.5 size-6 shrink-0 text-accent"
              />
              <p className="text-lg">
                <span className="font-bold">{item.lead}</span>
                <span className="text-slate">{item.rest}</span>
              </p>
            </li>
          </Reveal>
        ))}
      </ul>

      {closing && (
        <Reveal>
          <p className="mt-8 max-w-3xl text-lg font-medium">{closing}</p>
        </Reveal>
      )}
    </Section>
  );
}
