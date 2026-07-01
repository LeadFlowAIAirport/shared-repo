import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Search,
  Compass,
  Hammer,
  FlaskConical,
  Rocket,
  TrendingUp,
  Headset,
  Megaphone,
  MapPin,
  Network,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import Hero from "@/components/sections/Hero";
import AiImplementationLearningHub from "@/components/sections/AiImplementationLearningHub";
import FAQ from "@/components/sections/FAQ";
import CTABand from "@/components/sections/CTABand";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Pill from "@/components/ui/Pill";
import { aiImplementation } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Business Education + Implementation",
  description:
    "The Atlas Leads learning hub for local business owners. Plain-English mini lessons on where AI fits, plus the implementation roadmap and systems — AI receptionist, ads + booking, local visibility, and a full growth system — that save time and book more appointments.",
};

// Icons owned here (fixed order / keyed by id) so the content stays pure data.
// Roadmap order: Learn, Audit, Opportunity Map, Build, Test, Launch, Improve.
const ROADMAP_ICONS: LucideIcon[] = [
  BookOpen,
  Search,
  Compass,
  Hammer,
  FlaskConical,
  Rocket,
  TrendingUp,
];

const MODULE_ICONS: Record<string, LucideIcon> = {
  "ai-receptionist": Headset,
  "ads-booking-system": Megaphone,
  "local-visibility": MapPin,
  "full-growth-system": Network,
};

export default function AiImplementationPage() {
  const {
    hero,
    featured,
    lessonsHeading,
    lessonsIntro,
    lessonsNote,
    lessons,
    roadmapHeading,
    roadmapIntro,
    roadmap,
    modulesHeading,
    modulesIntro,
    modules,
    faqHeading,
    faq,
    finalCta,
  } = aiImplementation;

  return (
    <>
      {/* 1 — Hero: title, subtitle, "Book a Free AI Audit" + "View Mini Lessons" */}
      <Hero content={hero} secondaryCtaGlow />

      {/* 2 & 3 — Featured overview video + mini lesson library (#lessons) */}
      <AiImplementationLearningHub
        featured={featured}
        lessonsHeading={lessonsHeading}
        lessonsIntro={lessonsIntro}
        lessonsNote={lessonsNote}
        lessons={lessons}
      />

      {/* 4 — Implementation roadmap: Learn → Audit → … → Improve */}
      <Section bg="mist">
        <div className="mx-auto max-w-3xl">
          <Reveal className="flex">
            <Pill>Implementation roadmap</Pill>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 text-[clamp(1.9rem,3.5vw,2.75rem)]">
              {roadmapHeading}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-lg text-slate">{roadmapIntro}</p>
          </Reveal>

          <ol className="mt-14">
            {roadmap.map((step, i) => {
              const Icon = ROADMAP_ICONS[i] ?? Compass;
              const last = i === roadmap.length - 1;
              return (
                <Reveal key={step.title} delay={i * 70}>
                  <li className="relative flex gap-5 sm:gap-6">
                    {/* Icon node + vertical connector to the next stage */}
                    <div className="flex flex-col items-center">
                      <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-accent/45 bg-accent/10 text-accent">
                        <Icon aria-hidden className="size-5" />
                      </span>
                      {!last && (
                        <span
                          aria-hidden
                          className="mt-1 w-px flex-1 bg-gradient-to-b from-accent/40 to-accent/5"
                        />
                      )}
                    </div>
                    <div className={last ? "pt-1.5" : "pb-10 pt-1.5"}>
                      <h3 className="flex items-baseline gap-2.5 text-lg font-semibold text-ink">
                        <span className="font-display tabular-nums text-slate">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {step.title}
                      </h3>
                      <p className="mt-2 text-slate">{step.body}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Section>

      {/* 5 — Implementation modules inside the broader engagement */}
      <Section bg="paper">
        <Reveal className="max-w-2xl">
          <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)]">
            {modulesHeading}
          </h2>
        </Reveal>
        <Reveal delay={80} className="max-w-2xl">
          <p className="mt-4 text-lg text-slate">{modulesIntro}</p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {modules.map((mod, i) => {
            const Icon = MODULE_ICONS[mod.id] ?? Network;
            return (
              <Reveal key={mod.id} delay={(i % 2) * 80} className="h-full">
                <li className="h-full">
                  <Link
                    href={`/services#${mod.id}`}
                    className="group glass flex h-full flex-col rounded-2xl p-6 transition-[transform,border-color,box-shadow] duration-200 ease-out-quint hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:hover:translate-y-0 md:p-8"
                  >
                    <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <Icon aria-hidden className="size-6" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-ink">
                      {mod.name}
                    </h3>
                    <p className="mt-2 flex-1 text-slate">{mod.blurb}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Explore this module
                      <ArrowUpRight
                        aria-hidden
                        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                      />
                    </span>
                  </Link>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      {/* 6 — FAQ */}
      <FAQ heading={faqHeading} items={faq} bg="mist" />

      {/* 7 — Final CTA: "Book a Free AI Audit" */}
      <CTABand
        heading={finalCta.heading}
        body={finalCta.body}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
      />
    </>
  );
}
