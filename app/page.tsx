import Link from "next/link";
import {
  GraduationCap,
  Headset,
  Megaphone,
  MapPin,
  Network,
  ArrowRight,
  ArrowUpRight,
  Check,
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
import Pill from "@/components/ui/Pill";
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
  const flagship = servicesPage.offers[0];
  const supporting = servicesPage.offers.slice(1);
  const FlagshipIcon = OFFER_ICONS[flagship.id] ?? GraduationCap;
  // Home previews only three flagship deliverables (education → audit →
  // implementation); the full "what you get" list lives on /services.
  const flagshipPreview = [flagship.gets[0], flagship.gets[1], flagship.gets[3]];

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

      {/* Flagship offer + the systems we implement inside it → detail on /services */}
      <Section bg="paper">
        <Reveal className="max-w-2xl">
          <Pill>Our flagship offer</Pill>
          <h2 className="mt-5 text-[clamp(1.9rem,3.5vw,2.75rem)]">
            {flagship.name}
          </h2>
          <p className="mt-4 text-lg text-slate">{flagship.what}</p>
        </Reveal>

        {/* Elevated flagship card — set apart with an accent ring + glow */}
        <Reveal delay={80} className="mt-8">
          <div className="glass rounded-3xl p-6 shadow-glow ring-1 ring-accent/30 sm:p-9">
            <div className="grid gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12">
              <div>
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <FlagshipIcon aria-hidden className="size-6" />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-ink">
                  Inside the engagement
                </h3>
                <p className="mt-2 text-slate">{flagship.howAI}</p>
                <Button href={`/services#${flagship.id}`} className="mt-6">
                  Explore the flagship offer
                  <ArrowUpRight aria-hidden className="size-5" />
                </Button>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 md:pt-1">
                {flagshipPreview.map((g) => (
                  <li key={g} className="flex gap-2.5">
                    <Check
                      aria-hidden
                      className="mt-0.5 size-5 shrink-0 text-accent"
                    />
                    <span className="text-sm text-ink/85">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Supporting systems — modules inside the flagship strategy */}
        <Reveal className="mt-14 max-w-2xl">
          <h3 className="text-xl font-bold text-ink sm:text-2xl">
            Implementation modules inside your AI strategy
          </h3>
          <p className="mt-3 text-slate">
            Receptionist, ads + booking, local visibility, and the full growth
            system aren’t standalone products — they’re modules we switch on
            inside your engagement, based on what the audit shows will move the
            needle.
          </p>
        </Reveal>

        {/* Compact module strip — names link to the full detail on /services.
            The full descriptions live there; Home only previews. */}
        <Reveal delay={80} className="mt-7 flex flex-wrap gap-2.5">
          {supporting.map((offer) => {
            const Icon = OFFER_ICONS[offer.id] ?? GraduationCap;
            return (
              <Link
                key={offer.id}
                href={`/services#${offer.id}`}
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-mist/40 px-4 py-2 text-sm font-medium text-ink transition-[transform,border-color,background-color] duration-200 ease-out-quint hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:hover:translate-y-0"
              >
                <Icon aria-hidden className="size-4 text-accent" />
                {offer.name}
                <ArrowUpRight
                  aria-hidden
                  className="size-4 text-slate/60 transition-colors group-hover:text-accent"
                />
              </Link>
            );
          })}
        </Reveal>

        <Reveal className="mt-10">
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
            See How It Works
            <ArrowUpRight aria-hidden className="size-5" />
          </Button>
        </Reveal>
      </Section>

      {/* Brief trust / honesty */}
      <Checklist heading={home.whyHeading} items={home.why} bg="paper" columns />

      {/* Strong final CTA → Book a Free AI Business Audit */}
      <CTABand
        heading={home.cta.heading}
        body={home.cta.body}
        primaryCta={home.cta.primaryCta}
        secondaryCta={home.cta.secondaryCta}
      />
    </>
  );
}
