import { AlertTriangle } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

type Props = {
  heading: string;
  pains: string[];
  closing: string;
  bg?: "paper" | "mist";
};

export default function PainPoints({
  heading,
  pains,
  closing,
  bg = "mist",
}: Props) {
  return (
    <Section bg={bg}>
      <Reveal>
        <h2 className="text-3xl font-bold sm:text-4xl">{heading}</h2>
      </Reveal>

      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {pains.map((pain, i) => (
          <Reveal key={i} delay={(i % 2) * 70}>
            <li className="flex h-full items-start gap-3 rounded-lg border border-line bg-paper p-5">
              <AlertTriangle
                aria-hidden
                className="mt-0.5 size-5 shrink-0 text-ink/45"
              />
              <span className="text-ink/80">{pain}</span>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <p className="mt-8 max-w-3xl text-lg font-medium">{closing}</p>
      </Reveal>
    </Section>
  );
}
