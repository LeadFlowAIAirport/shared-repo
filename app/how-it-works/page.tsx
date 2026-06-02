import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Systems from "@/components/sections/Systems";
import Checklist from "@/components/sections/Checklist";
import Prose from "@/components/sections/Prose";
import CTABand from "@/components/sections/CTABand";
import { howItWorks, home } from "@/lib/content";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A plain-language look at the three systems we set up — lead generation, an AI receptionist, and local visibility — and how a lead moves from first contact to a booked appointment.",
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
            <Reveal key={step.title}>
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

      {/* The three systems, deeper */}
      <Systems
        heading={howItWorks.systemsHeading}
        systems={home.systems}
        bg="paper"
      />

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
