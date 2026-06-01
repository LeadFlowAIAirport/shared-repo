import Hero from "@/components/sections/Hero";
import Prose from "@/components/sections/Prose";
import Steps from "@/components/sections/Steps";
import Services from "@/components/sections/Services";
import Checklist from "@/components/sections/Checklist";
import Split from "@/components/sections/Split";
import CTABand from "@/components/sections/CTABand";
import FAQ from "@/components/sections/FAQ";
import { home } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero content={home.hero} />
      <Prose content={home.problem} bg="mist" />
      <Prose content={home.solution} bg="paper" />
      <Steps heading={home.stepsHeading} steps={home.steps} bg="mist" />
      <Services
        heading={home.servicesHeading}
        services={home.services}
        bg="paper"
      />
      <Checklist heading={home.whyHeading} items={home.why} bg="mist" columns />
      <Split content={home.split} />
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
