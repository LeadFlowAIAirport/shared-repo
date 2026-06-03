import Hero from "@/components/sections/Hero";
import CallDemo from "@/components/sections/CallDemo";
import Prose from "@/components/sections/Prose";
import Systems from "@/components/sections/Systems";
import Steps from "@/components/sections/Steps";
import Checklist from "@/components/sections/Checklist";
import Split from "@/components/sections/Split";
import CTABand from "@/components/sections/CTABand";
import FAQ from "@/components/sections/FAQ";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { home } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero content={home.hero} media={<CallDemo />} />
      <Prose content={home.problem} bg="mist" />
      <Prose content={home.solution} bg="paper" />
      <Systems
        heading={home.systemsHeading}
        intro={home.systemsIntro}
        systems={home.systems}
        bg="mist"
      />
      <Steps heading={home.howHeading} steps={home.how} bg="paper" />

      {/* Who it's for */}
      <Section bg="mist">
        <Reveal className="max-w-2xl">
          <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)]">
            {home.whoHeading}
          </h2>
          <p className="mt-4 text-lg text-slate">{home.whoIntro}</p>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          {home.whoTrades.industries.map((trade) => (
            <Reveal key={trade}>
              <span className="inline-flex items-center rounded-md bg-accent px-4 py-2 font-semibold text-white">
                {trade}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Checklist heading={home.whyHeading} items={home.why} bg="paper" columns />
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
