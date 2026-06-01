import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import type { FaqItem } from "@/lib/content";

type Props = {
  heading: string;
  items: FaqItem[];
  bg?: "paper" | "mist";
};

export default function FAQ({ heading, items, bg = "paper" }: Props) {
  return (
    <Section bg={bg}>
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            {heading}
          </h2>
        </Reveal>
        <Reveal className="mt-10">
          <Accordion items={items} />
        </Reveal>
      </div>
    </Section>
  );
}
