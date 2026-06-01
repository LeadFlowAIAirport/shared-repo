import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Offer from "@/components/sections/Offer";
import Steps from "@/components/sections/Steps";
import Prose from "@/components/sections/Prose";
import Checklist from "@/components/sections/Checklist";
import CTABand from "@/components/sections/CTABand";
import FAQ from "@/components/sections/FAQ";
import type { TradePage } from "@/lib/content";

/** Shared composition for /plumbing and /electrical — same structure, different copy. */
export default function TradePageView({ content }: { content: TradePage }) {
  return (
    <>
      <Hero content={content.hero} />
      <PainPoints
        heading={content.painHeading}
        pains={content.pains}
        closing={content.painClosing}
        bg="mist"
      />
      <Offer
        heading={content.offerHeading}
        intro={content.offerIntro}
        items={content.offer}
        closing={content.offerClosing}
        bg="paper"
      />
      <Steps heading={content.stepsHeading} steps={content.steps} bg="mist" />
      <Prose
        content={content.whyLose}
        closingOverride={content.whyLoseClosing}
        bg="paper"
      />
      <Checklist
        heading={content.helpsHeading}
        items={content.helps}
        closing={content.helpsClosing}
        bg="mist"
      />
      <CTABand
        heading={content.midCta.heading}
        body={content.midCta.body}
        primaryCta={content.midCta.primaryCta}
        secondaryCta={content.midCta.secondaryCta}
      />
      <FAQ heading={content.faqHeading} items={content.faq} bg="paper" />
      <CTABand
        heading={content.closing.heading}
        bodyLines={content.closing.body}
        emphasis={content.closing.emphasis}
        primaryCta={content.closing.cta}
      />
    </>
  );
}
