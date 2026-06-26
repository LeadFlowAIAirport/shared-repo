import type { Metadata } from "next";
import {
  GraduationCap,
  Headset,
  Megaphone,
  MapPin,
  Network,
  Check,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CTABand from "@/components/sections/CTABand";
import { servicesPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Atlas Leads is not just an ad agency. We teach local businesses how AI works, then build AI systems for education, the AI receptionist, ads and booking, local visibility, and a full growth system.",
};

// Icons owned here (keyed by offer id) so the content stays pure data.
const OFFER_ICONS: Record<string, LucideIcon> = {
  "ai-business-enablement": GraduationCap,
  "ai-receptionist": Headset,
  "ads-booking-system": Megaphone,
  "local-visibility": MapPin,
  "full-growth-system": Network,
};

export default function ServicesPage() {
  const { hero, offers, cta } = servicesPage;

  return (
    <>
      {/* Hero — positions Atlas Leads as teach + implement, not just ads */}
      <Section bg="paper">
        <Reveal className="max-w-3xl">
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.04] tracking-tight">
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate md:text-xl">
            {hero.intro}
          </p>
        </Reveal>
      </Section>

      {/* One band per service, alternating paper / mist for rhythm */}
      {offers.map((offer, i) => {
        const Icon = OFFER_ICONS[offer.id] ?? GraduationCap;
        return (
          <Section key={offer.id} bg={i % 2 === 0 ? "mist" : "paper"}>
            <div
              id={offer.id}
              className="grid scroll-mt-24 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-16"
            >
              {/* Identity + CTA */}
              <Reveal>
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon aria-hidden className="size-6" />
                </span>
                <h2 className="mt-5 text-[clamp(1.7rem,3vw,2.4rem)] leading-tight">
                  {offer.name}
                </h2>
                <p className="mt-4 text-lg text-slate">{offer.what}</p>
                <Button href={cta.primaryCta.href} className="mt-7">
                  {cta.primaryCta.label}
                </Button>
              </Reveal>

              {/* What it solves / how AI helps / what you get */}
              <Reveal delay={80} className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-accent">
                    Who it’s for
                  </h3>
                  <p className="mt-2 text-slate">{offer.whoFor}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-accent">
                    The problem
                  </h3>
                  <p className="mt-2 text-slate">{offer.problem}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-accent">
                    How AI helps
                  </h3>
                  <p className="mt-2 text-slate">{offer.howAI}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-accent">
                    What you get
                  </h3>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {offer.gets.map((g) => (
                      <li key={g} className="flex gap-2.5 text-ink/85">
                        <Check
                          aria-hidden
                          className="mt-0.5 size-5 shrink-0 text-accent"
                        />
                        <span className="text-sm">{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </Section>
        );
      })}

      <CTABand
        heading={cta.heading}
        body={cta.body}
        primaryCta={cta.primaryCta}
        secondaryCta={cta.secondaryCta}
      />
    </>
  );
}
