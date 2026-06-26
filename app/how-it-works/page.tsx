import type { Metadata } from "next";
import { Check } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SystemDemos from "@/components/sections/SystemDemos";
import Checklist from "@/components/sections/Checklist";
import Prose from "@/components/sections/Prose";
import CTABand from "@/components/sections/CTABand";
import { howItWorks, home } from "@/lib/content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A plain-language look at what Atlas Leads sets up — done-for-you growth systems plus done-with-you AI Business Enablement — and how a lead moves from first contact to a booked appointment.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Header */}
      <Section bg="paper">
        <Reveal className="max-w-3xl">
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.04] tracking-tight">
            {howItWorks.hero.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate md:text-xl">
            {howItWorks.hero.body}
          </p>
        </Reveal>
      </Section>

      {/* Lead flow timeline */}
      <Section bg="mist">
        <Reveal className="max-w-2xl">
          <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)]">
            {howItWorks.flowHeading}
          </h2>
          <p className="mt-4 text-lg text-slate">{howItWorks.flowIntro}</p>
        </Reveal>

        <ol className="mt-12 space-y-px overflow-hidden rounded-lg border border-line bg-line">
          {howItWorks.flow.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <li className="flex items-start gap-5 bg-paper p-6 md:p-7">
                <span className="font-display text-2xl font-extrabold tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl">{step.title}</h3>
                  <p className="mt-2 text-slate">{step.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* The Atlas Leads offer — two blocks (replaces the old 3-system section) */}
      <Section bg="paper">
        <Reveal className="max-w-2xl">
          <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)]">
            {home.services.heading}
          </h2>
          <p className="mt-4 text-lg text-slate">{home.services.intro}</p>
        </Reveal>

        {/* Block 1 — done-for-you growth systems */}
        <Reveal className="mt-12">
          <h3 className="text-xl font-bold sm:text-2xl">
            {home.services.doneForYou.heading}
          </h3>
        </Reveal>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {home.services.doneForYou.cards.map((card, i) => (
            <Reveal key={card.id} delay={(i % 2) * 80} className="h-full">
              <li className="flex h-full gap-3 rounded-xl border border-line bg-paper p-5">
                <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
                <div>
                  <h4 className="font-semibold">{card.name}</h4>
                  <p className="mt-1 text-sm text-slate">{card.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* Block 2 — AI Business Enablement (done-with-you, kept visually distinct) */}
        <Reveal className="mt-8">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.04] p-6 md:p-7">
            <h3 className="text-xl font-bold sm:text-2xl">
              {home.services.enablement.heading}
            </h3>
            <p className="mt-2 max-w-3xl text-slate">
              {home.services.enablement.description}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Clickable example-workflow demos (all live) */}
      <SystemDemos bg="mist" />

      {/* What working with us looks like */}
      <Checklist
        heading={howItWorks.expectHeading}
        items={howItWorks.expect}
        bg="mist"
        columns
      />

      {/* Honest word */}
      <Prose
        content={{
          heading: howItWorks.honesty.heading,
          intro: howItWorks.honesty.body,
        }}
        bg="paper"
      />

      <CTABand
        heading={howItWorks.cta.heading}
        body={howItWorks.cta.body}
        primaryCta={howItWorks.cta.primaryCta}
        secondaryCta={howItWorks.cta.secondaryCta}
      />
    </>
  );
}
