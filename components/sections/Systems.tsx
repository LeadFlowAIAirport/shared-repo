import { Target, Headset, MapPin, Check, type LucideIcon } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import type { SystemCard } from "@/lib/content";

// Fixed order matches the systems copy.
const icons: Record<string, LucideIcon> = {
  "lead-generation": Target,
  "ai-receptionist": Headset,
  "local-visibility": MapPin,
};

type Props = {
  heading: string;
  intro?: string;
  systems: SystemCard[];
  bg?: "paper" | "mist";
};

export default function Systems({ heading, intro, systems, bg = "paper" }: Props) {
  return (
    <Section bg={bg}>
      <Reveal className="max-w-2xl">
        <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)]">{heading}</h2>
        {intro && <p className="mt-4 text-lg text-slate">{intro}</p>}
      </Reveal>

      <div className="mt-12 border-t border-line">
        {systems.map((sys, i) => {
          const Icon = icons[sys.id] ?? Target;
          return (
            <Reveal key={sys.id} delay={(i % 3) * 80}>
              <article className="grid gap-6 border-b border-line py-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-12">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-2xl font-extrabold tabular-nums text-line">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon aria-hidden className="size-6" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl">{sys.name}</h3>
                  <p className="mt-2 text-lg font-semibold text-accent">
                    {sys.tagline}
                  </p>
                  <p className="mt-3 max-w-xl text-slate">{sys.body}</p>
                </div>

                <ul className="space-y-3 md:pt-1">
                  {sys.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <Check
                        aria-hidden
                        className="mt-0.5 size-5 shrink-0 text-accent"
                      />
                      <span className="text-ink/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
