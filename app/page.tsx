import Hero from "@/components/sections/Hero";
import CallDemo from "@/components/sections/CallDemo";
import Prose from "@/components/sections/Prose";
import FlowDiagram from "@/components/sections/FlowDiagram";
import Systems from "@/components/sections/Systems";
import Steps from "@/components/sections/Steps";
import Checklist from "@/components/sections/Checklist";
import Split from "@/components/sections/Split";
import CTABand from "@/components/sections/CTABand";
import FAQ from "@/components/sections/FAQ";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Pill from "@/components/ui/Pill";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { home } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Cinematic hero with the animated lead-capture demo */}
      <Hero
        content={home.hero}
        media={<CallDemo />}
        secondaryCtaGlow
        primaryCtaPulse
      />

      {/* The problem: missed calls, slow follow-up, wasted ad spend */}
      <Prose content={home.problem} bg="mist" />

      {/* The system: one connected AI lead-flow engine */}
      <FlowDiagram content={home.flowDiagram} bg="paper" />

      {/* The three core systems */}
      <Systems
        heading={home.systemsHeading}
        intro={home.systemsIntro}
        systems={home.systems}
        bg="mist"
      />

      {/* What you can expect (trust) */}
      <Checklist heading={home.whyHeading} items={home.why} bg="paper" columns />

      {/* Demo previews → live clickable walkthroughs on /how-it-works */}
      <Section bg="paper">
        <Reveal className="glass mx-auto max-w-3xl rounded-3xl p-8 text-center md:p-12">
          <div className="flex justify-center">
            <Pill>{home.demoTeaser.eyebrow}</Pill>
          </div>
          <h2 className="mt-5 text-[clamp(1.8rem,3.5vw,2.5rem)]">
            {home.demoTeaser.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate">
            {home.demoTeaser.body}
          </p>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            {["Ad Funnel", "AI Receptionist", "Local Visibility"].map((name) => (
              <li
                key={name}
                className="glass-strong rounded-full px-4 py-2 text-sm font-medium"
              >
                {name}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <Button href={home.demoTeaser.cta.href}>
              {home.demoTeaser.cta.label}
              <ArrowUpRight aria-hidden className="size-5" />
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Industry pages */}
      <Split content={home.split} />

      {/* Simple process */}
      <Steps heading={home.howHeading} steps={home.how} bg="paper" />

      {/* Final CTA */}
      <CTABand
        heading={home.cta.heading}
        body={home.cta.body}
        primaryCta={home.cta.primaryCta}
        secondaryCta={home.cta.secondaryCta}
      />

      <FAQ heading={home.faqHeading} items={home.faq} bg="paper" />
    </>
  );
}
