import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import VideoWalkthroughs from "@/components/sections/VideoWalkthroughs";
import AiProcess from "@/components/sections/AiProcess";
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

      {/* Video walkthroughs — surfaced near the top so visitors see them first */}
      <VideoWalkthroughs
        heading={home.videos.heading}
        intro={home.videos.intro}
        note={home.videos.note}
        items={home.videos.items}
        bg="mist"
      />

      {/* How we put AI to work: Learn, Audit, Build, Train, Improve */}
      <AiProcess
        heading={home.aiProcess.heading}
        intro={home.aiProcess.intro}
        steps={home.aiProcess.steps}
        bg="paper"
      />

      {/* Lead pipeline timeline */}
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
