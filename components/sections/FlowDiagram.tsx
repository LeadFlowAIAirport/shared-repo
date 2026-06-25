import {
  Megaphone,
  Globe,
  PhoneCall,
  ClipboardList,
  Sparkles,
  CalendarCheck,
  BellRing,
  ChevronRight,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Pill from "@/components/ui/Pill";
import type { home } from "@/lib/content";

// Icons are owned here (content stays pure data), keyed by the ids in content.
const inputIcons: Record<string, LucideIcon> = {
  ads: Megaphone,
  website: Globe,
  calls: PhoneCall,
  forms: ClipboardList,
};
const stageIcons: Record<string, LucideIcon> = {
  ai: Sparkles,
  booking: CalendarCheck,
  notify: BellRing,
};

/** A connector rail between stages — vertical on mobile, horizontal on desktop.
 *  Brighter rail + an arrowhead so the direction reads even in a static frame. */
function Connector() {
  return (
    <div
      aria-hidden
      className="relative mx-auto h-8 w-0.5 shrink-0 bg-gradient-to-b from-white/45 to-white/15 md:h-0.5 md:w-auto md:flex-1 md:bg-gradient-to-r md:from-white/20 md:via-white/50 md:to-white/20"
    >
      {/* Flowing highlight (desktop only — reads as data moving left to right). */}
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--color-accent)_90%,transparent),transparent)] bg-[length:45%_100%] bg-no-repeat motion-safe:md:block motion-safe:animate-flow-line" />
      {/* Directional arrowhead — down on mobile, right on desktop. */}
      <ChevronDown
        aria-hidden
        className="absolute bottom-0 left-1/2 size-4 -translate-x-1/2 translate-y-1/2 text-accent md:hidden"
      />
      <ChevronRight
        aria-hidden
        className="absolute right-0 top-1/2 hidden size-4 -translate-y-1/2 translate-x-1/2 text-accent md:block"
      />
    </div>
  );
}

type Props = {
  content: typeof home.flowDiagram;
  bg?: "paper" | "mist";
};

export default function FlowDiagram({ content, bg = "paper" }: Props) {
  return (
    <Section bg={bg}>
      <Reveal className="max-w-2xl">
        <Pill>{content.eyebrow}</Pill>
        <h2 className="mt-5 text-[clamp(1.9rem,3.5vw,2.75rem)]">
          {content.heading}
        </h2>
        <p className="mt-4 text-lg text-slate">{content.intro}</p>
      </Reveal>

      <Reveal delay={120} className="mt-12">
        <div className="glass rounded-3xl p-5 sm:p-8 md:p-10">
          <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center md:gap-3">
            {/* Inputs cluster — the channels every opportunity arrives through. */}
            <div className="glass-strong rounded-2xl p-3 md:w-48">
              <p className="px-1 pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate">
                Opportunities in
              </p>
              <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
                {content.inputs.map((input) => {
                  const Icon = inputIcons[input.id] ?? Globe;
                  return (
                    <li
                      key={input.id}
                      className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] px-3 py-2.5"
                    >
                      <Icon aria-hidden className="size-4 shrink-0 text-accent" />
                      <span className="text-sm font-medium">{input.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <Connector />

            {/* AI hub — the glowing core that catches and works every lead. */}
            <div className="relative flex flex-col items-center rounded-2xl border border-accent/40 bg-accent/10 p-5 text-center shadow-glow md:w-48">
              <span className="relative flex size-14 items-center justify-center">
                <span className="absolute inline-flex size-14 rounded-full bg-accent/30 motion-safe:animate-hub-pulse" />
                <span className="bg-grad-accent relative flex size-14 items-center justify-center rounded-full shadow-glow">
                  <Sparkles aria-hidden className="size-6 text-white" />
                </span>
              </span>
              <p className="mt-4 font-display text-lg font-bold">
                {content.stages[0].label}
              </p>
              <p className="mt-1.5 text-sm text-slate">
                {content.stages[0].desc}
              </p>
            </div>

            <Connector />

            {/* Booking → Owner Notification. */}
            {content.stages.slice(1).map((stage, i) => {
              const Icon = stageIcons[stage.id] ?? CalendarCheck;
              return (
                <div key={stage.id} className="contents">
                  <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center md:w-48">
                    <span className="flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-accent">
                      <Icon aria-hidden className="size-6" />
                    </span>
                    <p className="mt-4 font-display text-lg font-bold">
                      {stage.label}
                    </p>
                    <p className="mt-1.5 text-sm text-slate">{stage.desc}</p>
                  </div>
                  {i === 0 && <Connector />}
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-6 text-sm font-medium text-slate">{content.note}</p>
      </Reveal>
    </Section>
  );
}
