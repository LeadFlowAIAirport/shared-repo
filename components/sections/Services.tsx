import {
  Headset,
  Megaphone,
  MapPin,
  Network,
  GraduationCap,
  Check,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import Pill from "@/components/ui/Pill";
import Button from "@/components/ui/Button";
import type { home } from "@/lib/content";

// Icons are owned here (keyed by card id) so the content stays pure data.
const cardIcons: Record<string, LucideIcon> = {
  "ai-receptionist-only": Headset,
  "ads-booking": Megaphone,
  "local-visibility": MapPin,
  "full-growth": Network,
};

/**
 * Homepage services section. Two distinct blocks rather than one flat list:
 *  1. Done-for-you growth systems (a 2×2 grid of package cards)
 *  2. AI Business Enablement & Training (a single, visually-distinct card with
 *     an accent ring to signal it's a different kind of offer)
 * One shared CTA sits under the whole section.
 */
export default function Services({
  content,
  bg = "mist",
}: {
  content: typeof home.services;
  bg?: "paper" | "mist";
}) {
  return (
    <Section bg={bg}>
      {/* Section header */}
      <Reveal className="mx-auto max-w-2xl text-center">
        {content.eyebrow && (
          <div className="flex justify-center">
            <Pill>{content.eyebrow}</Pill>
          </div>
        )}
        <h2 className="mt-5 text-[clamp(1.9rem,3.5vw,2.75rem)]">
          {content.heading}
        </h2>
        <p className="mt-4 text-lg text-slate">{content.intro}</p>
      </Reveal>

      {/* Block 1 — Done-for-you growth systems */}
      <div className="mt-14">
        <Reveal className="max-w-3xl">
          <h3 className="text-2xl font-bold sm:text-3xl">
            {content.doneForYou.heading}
          </h3>
          <p className="mt-3 text-slate">{content.doneForYou.description}</p>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {content.doneForYou.cards.map((card, i) => {
            const Icon = cardIcons[card.id] ?? Headset;
            return (
              <Reveal key={card.id} delay={(i % 2) * 80}>
                <Card className="flex h-full flex-col">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <h4 className="mt-5 text-xl font-bold">{card.name}</h4>
                  <p className="mt-2 text-slate">{card.body}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Block 2 — AI Business Enablement & Training (distinct treatment) */}
      <div className="mt-14">
        <Reveal className="max-w-3xl">
          <h3 className="text-2xl font-bold sm:text-3xl">
            {content.enablement.heading}
          </h3>
          <p className="mt-3 text-slate">{content.enablement.description}</p>
        </Reveal>

        <Reveal className="mt-8">
          <Card className="ring-1 ring-accent/20">
            <div className="grid gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
              <div>
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <GraduationCap aria-hidden className="size-6" />
                </span>
                <h4 className="mt-5 text-xl font-bold">
                  {content.enablement.card.name}
                </h4>
                <p className="mt-2 text-slate">{content.enablement.card.body}</p>
              </div>
              <ul className="space-y-3 md:pt-1">
                {content.enablement.card.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <Check
                      aria-hidden
                      className="mt-0.5 size-5 shrink-0 text-accent"
                    />
                    <span className="text-ink/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>
      </div>

      {/* One CTA for the whole section */}
      <Reveal className="mt-12 flex justify-center">
        <Button href={content.cta.href}>
          {content.cta.label}
          <ArrowUpRight aria-hidden className="size-5" />
        </Button>
      </Reveal>
    </Section>
  );
}
