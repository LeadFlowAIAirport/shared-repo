import { Wrench, Zap, Wind, Bug, ArrowRight, type LucideIcon } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import type { home } from "@/lib/content";

// Order matches home.split.cards: plumbing, electrical, HVAC, pest control.
const icons: LucideIcon[] = [Wrench, Zap, Wind, Bug];

export default function Split({ content }: { content: typeof home.split }) {
  return (
    <Section bg="mist" id="industries">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">{content.heading}</h2>
        {content.intro && (
          <p className="mt-4 text-lg text-slate">{content.intro}</p>
        )}
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {content.cards.map((card, i) => {
          const Icon = icons[i] ?? Wrench;
          return (
            <Reveal key={card.title} delay={i * 90}>
              <Card className="flex h-full flex-col">
                {/* TODO: replace with the specialist's photo for this trade. */}
                <div className="flex items-center gap-4">
                  <span className="flex size-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon aria-hidden className="size-7" />
                  </span>
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                </div>
                <p className="mt-5 flex-1 text-slate">{card.body}</p>
                <Link
                  href={card.cta.href}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-accent hover:gap-3 motion-reduce:hover:gap-2"
                >
                  {card.cta.label}
                  <ArrowRight aria-hidden className="size-5 transition-all" />
                </Link>
              </Card>
            </Reveal>
          );
        })}
      </div>

      {content.closing && (
        <Reveal>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-medium">
            {content.closing}
          </p>
        </Reveal>
      )}
    </Section>
  );
}
