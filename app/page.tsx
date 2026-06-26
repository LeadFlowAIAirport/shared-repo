import Hero from "@/components/sections/Hero";
import AiJourneyDemo from "@/components/sections/AiJourneyDemo";
import Prose from "@/components/sections/Prose";
import FlowDiagram from "@/components/sections/FlowDiagram";
import Services from "@/components/sections/Services";
import AiProcess from "@/components/sections/AiProcess";
import VideoWalkthroughs from "@/components/sections/VideoWalkthroughs";
import Checklist from "@/components/sections/Checklist";
import CTABand from "@/components/sections/CTABand";
import FAQ from "@/components/sections/FAQ";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { home } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Cinematic hero with the three-act AI education + implementation demo */}
      <Hero
        content={home.hero}
        media={<AiJourneyDemo />}
        secondaryCtaGlow
        primaryCtaPulse
      />

      {/* The problem: missed calls, slow follow-up, wasted ad spend */}
      <Prose content={home.problem} bg="mist" />

      {/* The system: one connected AI lead capture and follow-up engine */}
      <FlowDiagram content={home.flowDiagram} bg="paper" />

      {/* What we offer: done-for-you systems + AI enablement/training */}
      <Services content={home.services} bg="mist" />

      {/* What you can expect (trust) */}
      <Checklist heading={home.whyHeading} items={home.why} bg="paper" columns />

      {/* Video walkthroughs (replaces the old interactive demo teaser) */}
      <VideoWalkthroughs
        heading={home.videos.heading}
        intro={home.videos.intro}
        note={home.videos.note}
        items={home.videos.items}
        bg="paper"
      />

      {/* Broad positioning — fits any local business, no trade gating */}
      <Section bg="mist">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {home.localFit.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate">
            {home.localFit.body}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={home.localFit.cta.href}>
              {home.localFit.cta.label}
              <ArrowUpRight aria-hidden className="size-5" />
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* How we work: the 5-step AI education + implementation process */}
      <AiProcess
        heading={home.aiProcess.heading}
        intro={home.aiProcess.intro}
        steps={home.aiProcess.steps}
        bg="paper"
      />

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
