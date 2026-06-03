import { Check } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import type { LedBullet } from "@/lib/content";

type Props = {
  heading: string;
  intro: string;
  items: LedBullet[];
  closing: string;
  bg?: "paper" | "mist";
};

/** Trade-page "Your Done-For-You Growth System" offer list. */
export default function Offer({
  heading,
  intro,
  items,
  closing,
  bg = "paper",
}: Props) {
  return (
    <Section bg={bg}>
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">{heading}</h2>
          <p className="mt-5 text-lg text-slate">{intro}</p>
        </Reveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.lead} delay={(i % 2) * 70}>
              <li className="flex h-full items-start gap-3 rounded-xl border border-line bg-paper p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 motion-reduce:hover:translate-y-0">
                <Check aria-hidden className="mt-1 size-5 shrink-0 text-accent" />
                <p>
                  <span className="font-bold">{item.lead}</span>
                  <span className="text-slate">{item.rest}</span>
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-8 text-lg font-medium">{closing}</p>
        </Reveal>
      </div>
    </Section>
  );
}
