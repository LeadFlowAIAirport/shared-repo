import Link from "next/link";
import {
  GraduationCap,
  Headset,
  Megaphone,
  MapPin,
  Network,
  ArrowRight,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import Hero from "@/components/sections/Hero";
import AiJourneyDemo from "@/components/sections/AiJourneyDemo";
import Prose from "@/components/sections/Prose";
import Checklist from "@/components/sections/Checklist";
import CTABand from "@/components/sections/CTABand";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { home, servicesPage } from "@/lib/content";

// Icons for the compact services preview (full versions live on /services).
const OFFER_ICONS: Record<string, LucideIcon> = {
  "ai-business-enablement": GraduationCap,
  "ai-receptionist": Headset,
  "ads-booking-system": Megaphone,
  "local-visibility": MapPin,
  "full-growth-system": Network,
};

/**
 * Home is a scannable overview that guides visitors deeper, not a catalog. The
 * full service explanations live on /services, the full process and videos on
 * /how-it-works, and the booking detail on /book. Home only previews them.
 */
export default function HomePage() {
  return (
    <>
      {/* Hero with the three-act AI education + implementation animation */}
      <Hero
        content={home.hero}
        media={<AiJourneyDemo />}
        secondaryCtaGlow
        primaryCtaPulse
      />

      {/* The problem we solve, briefly */}
      <Prose content={home.problem} bg="mist" />

      {/* Services preview → full detail on /services */}
      <Section bg="paper">
        <Reveal className="max-w-2xl">
          <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)]">
            {servicesPage.hero.heading}
          </h2>
          <p className="mt-4 text-lg text-slate">
            Five ways Atlas Leads helps, from teaching your team to running the
            whole system. Explore each one on the services page.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicesPage.offers.map((offer, i) => {
            const Icon = OFFER_ICONS[offer.id] ?? GraduationCap;
            return (
              <Reveal key={offer.id} delay={(i % 3) * 80} className="h-full">
                <li className="h-full">
                  <Link
                    href={`/services#${offer.id}`}
                    className="group glass flex h-full flex-col rounded-2xl p-5 transition-[transform,border-color] duration-200 ease-out-quint hover:-translate-y-0.5 hover:border-accent/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:hover:translate-y-0"
                  >
                    <span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <h3 className="mt-4 font-semibold text-ink">{offer.name}</h3>
                    <p className="mt-1.5 text-sm text-slate">{offer.what}</p>
                  </Link>
                </li>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-8">
          <Button href="/services" variant="secondary">
            View all services
            <ArrowUpRight aria-hidden className="size-5" />
          </Button>
        </Reveal>
      </Section>

      {/* Process preview → full 5-step walkthrough on /how-it-works */}
      <Section bg="mist">
        <Reveal className="max-w-2xl">
          <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)]">
            {home.aiProcess.heading}
          </h2>
          <p className="mt-4 text-lg text-slate">{home.aiProcess.intro}</p>
        </Reveal>

        <Reveal
          delay={80}
          className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3"
        >
          {home.aiProcess.steps.map((step, i) => (
            <div key={step.title} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                <span className="text-xs tabular-nums text-accent/70">
                  {i + 1}
                </span>
                {step.title}
              </span>
              {i < home.aiProcess.steps.length - 1 && (
                <ArrowRight
                  aria-hidden
                  className="size-4 shrink-0 text-slate/50"
                />
              )}
            </div>
          ))}
        </Reveal>

        <Reveal delay={120} className="mt-8">
          <Button href="/how-it-works" variant="secondary">
            See how it works
            <ArrowUpRight aria-hidden className="size-5" />
          </Button>
        </Reveal>
      </Section>

      {/* Brief trust / honesty */}
      <Checklist heading={home.whyHeading} items={home.why} bg="paper" columns />

      {/* Strong final CTA → Book a Free AI Audit */}
      <CTABand
        heading={home.cta.heading}
        body={home.cta.body}
        primaryCta={home.cta.primaryCta}
        secondaryCta={home.cta.secondaryCta}
      />
    </>
  );
}
