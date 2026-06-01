import { Wrench, Zap, ArrowRight, type LucideIcon } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import type { home } from "@/lib/content";

const icons: LucideIcon[] = [Wrench, Zap]; // plumbing, electrical

export default function Split({ content }: { content: typeof home.split }) {
  return (
    <Section bg="mist">
      <Reveal>
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          {content.heading}
        </h2>
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
    </Section>
  );
}
