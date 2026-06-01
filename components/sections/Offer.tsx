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
      <Reveal className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold sm:text-4xl">{heading}</h2>
        <p className="mt-5 text-lg text-slate">{intro}</p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item.lead}
              className="flex items-start gap-3 rounded-xl border border-line bg-paper p-5"
            >
              <Check aria-hidden className="mt-1 size-5 shrink-0 text-accent" />
              <p>
                <span className="font-bold">{item.lead}</span>
                <span className="text-slate">{item.rest}</span>
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-lg font-medium">{closing}</p>
      </Reveal>
    </Section>
  );
}
