import { GraduationCap, Search, Wrench, Users, LineChart } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import type { Step } from "@/lib/content";

type Props = {
  heading: string;
  intro: string;
  steps: Step[];
  bg?: "paper" | "mist";
};

// Fixed icon per stage (owned here, like the rest of the section components, so
// the content stays pure data). Order matches the Learn/Audit/Build/Train/Improve
// steps in lib/content.ts.
const STAGE_ICONS = [GraduationCap, Search, Wrench, Users, LineChart];

/**
 * The Atlas Leads AI implementation process as a clean horizontal (desktop) /
 * stacked (mobile) progress flow: numbered green-ringed nodes joined by a soft
 * green connector, each stage fading in on scroll. Motion is carried entirely by
 * <Reveal>, which is disabled under prefers-reduced-motion (content stays
 * visible), so the section is reduced-motion-safe by construction.
 */
export default function AiProcess({ heading, intro, steps, bg = "paper" }: Props) {
  return (
    <Section bg={bg}>
      <Reveal className="max-w-2xl">
        <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)]">{heading}</h2>
      </Reveal>
      <Reveal delay={80} className="max-w-2xl">
        <p className="mt-4 text-lg text-slate">{intro}</p>
      </Reveal>

      <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, i) => {
          const Icon = STAGE_ICONS[i] ?? GraduationCap;
          const last = i === steps.length - 1;
          return (
            <Reveal key={step.title} delay={i * 90}>
              <li className="relative">
                {/* Node + connector to the next stage (desktop row only). */}
                <div className="relative flex items-center">
                  {!last && (
                    <span
                      aria-hidden
                      className="absolute left-[1.5rem] top-1/2 hidden h-px w-[calc(100%+1.5rem)] -translate-y-1/2 bg-gradient-to-r from-accent/45 to-accent/10 lg:block"
                    />
                  )}
                  <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-accent/45 bg-accent/10 text-accent">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <span className="ml-3 font-display text-sm font-bold uppercase tracking-wide text-accent lg:hidden">
                    Step {i + 1}
                  </span>
                </div>

                <h3 className="mt-4 flex items-baseline gap-2 text-lg font-semibold text-ink">
                  <span className="font-display tabular-nums text-slate">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {step.body}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
