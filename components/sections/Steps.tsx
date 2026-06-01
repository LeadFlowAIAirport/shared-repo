import { Search, Settings, CalendarCheck, type LucideIcon } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import type { Step } from "@/lib/content";

// Fixed order matches the copy: audit → install → booked jobs.
const icons: LucideIcon[] = [Search, Settings, CalendarCheck];

type Props = {
  heading: string;
  steps: Step[];
  bg?: "paper" | "mist";
};

export default function Steps({ heading, steps, bg = "mist" }: Props) {
  return (
    <Section bg={bg}>
      <Reveal>
        <h2 className="text-center text-3xl font-bold sm:text-4xl">{heading}</h2>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => {
          const Icon = icons[i] ?? Search;
          return (
            <Reveal key={step.title} delay={i * 90}>
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wide text-slate">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-slate">{step.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
