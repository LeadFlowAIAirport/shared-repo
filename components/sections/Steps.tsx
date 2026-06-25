import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import type { Step } from "@/lib/content";

type Props = {
  heading: string;
  steps: Step[];
  bg?: "paper" | "mist";
};

export default function Steps({ heading, steps, bg = "mist" }: Props) {
  return (
    <Section bg={bg}>
      <Reveal className="max-w-2xl">
        <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)]">{heading}</h2>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 90} className="h-full">
            <div className="glass flex h-full flex-col rounded-2xl p-7 md:p-8">
              <span className="text-grad font-display text-4xl font-extrabold tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl">{step.title}</h3>
              <p className="mt-3 text-slate">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
