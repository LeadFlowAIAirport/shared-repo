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
import Pill from "@/components/ui/Pill";
import CTABand from "@/components/sections/CTABand";
import { servicesPage, type ServiceOffer } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI Business Education + Implementation for local businesses — a strategic AI partnership, plus the implementation modules we switch on inside it: AI receptionist, ads + booking, local visibility, and a full growth system.",
};

// Icons owned here (keyed by offer id) so the content stays pure data.
const OFFER_ICONS: Record<string, LucideIcon> = {
  "ai-business-enablement": GraduationCap,
  "ai-receptionist": Headset,
  "ads-booking-system": Megaphone,
  "local-visibility": MapPin,
  "full-growth-system": Network,
};

// Shared two-column detail used by both the flagship band and each supporting
// system: identity + CTA on the left, who/problem/how/what-you-get on the right.
function OfferDetail({
  offer,
  eyebrow,
  showCta = true,
}: {
  offer: ServiceOffer;
  eyebrow?: string;
  showCta?: boolean;
}) {
  const Icon = OFFER_ICONS[offer.id] ?? GraduationCap;
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-16">
      {/* Identity + CTA */}
      <Reveal>
        <span className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <Icon aria-hidden className="size-6" />
        </span>
        {eyebrow && (
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate/70">
            {eyebrow}
          </p>
        )}
        <h2
          className={`${
            eyebrow ? "mt-2" : "mt-5"
          } text-[clamp(1.7rem,3vw,2.4rem)] leading-tight`}
        >
          {offer.name}
        </h2>
        <p className="mt-4 text-lg text-slate">{offer.what}</p>
        {showCta && (
          <Button href={servicesPage.cta.primaryCta.href} className="mt-7">
            {servicesPage.cta.primaryCta.label}
          </Button>
        )}
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
  );
}

export default function ServicesPage() {
  const { hero, offers, cta } = servicesPage;
  const [flagship, ...supporting] = offers;

  return (
    <>
      {/* Hero — positions Atlas Leads around the flagship education + implementation offer */}
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

      {/* Flagship offer — elevated in a glowing, accent-ringed card */}
      <Section bg="mist">
        <div id={flagship.id} className="scroll-mt-24">
          <Reveal className="flex">
            <Pill>Flagship offer</Pill>
          </Reveal>
          <div className="mt-6 glass rounded-3xl p-6 shadow-glow ring-1 ring-accent/30 sm:p-8 md:p-10">
            <OfferDetail offer={flagship} />
          </div>
        </div>
      </Section>

      {/* Supporting systems — modules inside the flagship strategy */}
      <Section bg="paper">
        <Reveal className="max-w-2xl">
          <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] leading-tight">
            Implementation modules inside your AI strategy
          </h2>
          <p className="mt-4 text-lg text-slate">
            Each one is a module we switch on inside the AI Business Education +
            Implementation engagement — chosen from what your audit shows will
            help most, not a separate product you have to figure out on your own.
          </p>
        </Reveal>
      </Section>

      {/* One band per supporting module, alternating mist / paper for rhythm */}
      {supporting.map((offer, i) => (
        <Section key={offer.id} bg={i % 2 === 0 ? "mist" : "paper"}>
          <div id={offer.id} className="scroll-mt-24">
            <OfferDetail offer={offer} eyebrow="Implementation module" showCta={false} />
          </div>
        </Section>
      ))}

      <CTABand
        heading={cta.heading}
        body={cta.body}
        primaryCta={cta.primaryCta}
        secondaryCta={cta.secondaryCta}
      />
    </>
  );
}
