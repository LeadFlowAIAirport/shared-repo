import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import "../../fable.css";
import Reveal from "@/components/ui/Reveal";
import { Kicker, Shell, HEADING_SIZE } from "@/components/fable/sections";
import { PageHero, CtaBand } from "@/components/fable/pageBlocks";
import { fableFontVars } from "@/components/fable/fonts";
import PreviewBanner from "../PreviewBanner";
import { howItWorksPreview } from "@/lib/fablePages";

/* /preview/fable-how-it-works — Phase 2 design preview of the How It Works
   page. Production /how-it-works is untouched; this route is review-only. */

export const metadata: Metadata = {
  title: "Fable How It Works Preview",
  description: "Internal design preview of the Atlas Leads how-it-works page redesign.",
  robots: { index: false, follow: false },
};

export default function FableHowItWorksPreview() {
  const { hero, process, audit, lookFor, after, cta } = howItWorksPreview;

  return (
    <div className={`fable relative ${fableFontVars}`}>
      <PreviewBanner label="Fable How It Works" liveHref="/how-it-works" />
      <div
        aria-hidden
        className="fbl-grid-dots fbl-mask-top pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-50"
      />

      <div className="relative z-10">
        <PageHero {...hero} />

        {/* 01 — The four-step process, expanded from the homepage */}
        <Shell id="process" deep>
          <Kicker index="01" label={process.kicker} />
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h2 className={`fbl-display text-ink ${HEADING_SIZE}`}>{process.heading}</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="max-w-sm text-slate">{process.intro}</p>
            </Reveal>
          </div>

          <div className="fbl-rail mt-10 hidden lg:block" aria-hidden />

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:mt-8 lg:grid-cols-4">
            {process.steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 90}>
                <div className="fbl-card fbl-card-hover flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="fbl-mono text-3xl font-semibold text-accent/70">{s.num}</span>
                    {s.tag && (
                      <span className="fbl-mono rounded-full bg-signal-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] text-slate">{s.body}</p>
                  <p className="fbl-mono mt-5 border-t border-white/7 pt-4 text-[11px] leading-relaxed text-accent/80">
                    {s.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Shell>

        {/* 02 — What happens during the audit */}
        <Shell id="audit">
          <Kicker index="02" label={audit.kicker} />
          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <h2 className={`fbl-display text-ink ${HEADING_SIZE}`}>{audit.heading}</h2>
                </Reveal>
                <Reveal delay={80}>
                  <p className="mt-5 text-slate">{audit.intro}</p>
                </Reveal>
                <Reveal delay={140}>
                  <div className="fbl-card fbl-reg mt-8 p-6">
                    <h3 className="fbl-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                      {audit.facts.heading}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {audit.facts.items.map((f) => (
                        <li key={f} className="flex gap-3">
                          <Check className="mt-0.5 size-4.5 shrink-0 text-accent" aria-hidden />
                          <span className="text-[15px] text-ink/90">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="space-y-4 lg:col-span-7">
              {audit.steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 70}>
                  <div className="fbl-card fbl-card-hover flex items-start gap-5 p-6">
                    <span className="fbl-mono pt-0.5 text-sm font-medium text-accent/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-ink">{s.title}</h3>
                      <p className="mt-1.5 text-[15px] text-slate">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Shell>

        {/* 03 — The gaps we check for */}
        <Shell id="look-for" deep>
          <Kicker index="03" label={lookFor.kicker} />
          <Reveal>
            <h2 className={`fbl-display mt-8 max-w-3xl text-ink ${HEADING_SIZE}`}>
              {lookFor.heading}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 max-w-2xl text-slate">{lookFor.intro}</p>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lookFor.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 70} className="h-full">
                <li className="fbl-card fbl-card-hover h-full p-6">
                  <span className="fbl-mono text-sm font-medium text-accent/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-bold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-[15px] text-slate">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </Shell>

        {/* 04 — After the audit */}
        <Shell id="after">
          <Kicker index="04" label={after.kicker} />
          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <h2 className={`fbl-display text-ink ${HEADING_SIZE}`}>{after.heading}</h2>
              </Reveal>
              {after.body.map((para, i) => (
                <Reveal key={para} delay={80 + i * 60}>
                  <p className="mt-5 text-slate">{para}</p>
                </Reveal>
              ))}
              <Reveal delay={220}>
                <div className="mt-7 flex flex-wrap gap-2">
                  {after.outcomes.map((o) => (
                    <Link
                      key={o.name}
                      href={o.href}
                      className="fbl-mono rounded-full border border-accent/30 bg-accent/8 px-3 py-1.5 text-[10.5px] uppercase tracking-[0.12em] text-accent transition-colors hover:bg-accent/15"
                    >
                      {o.name}
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={120} variant="scale">
                <div className="fbl-card fbl-reg p-8 sm:p-10">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <ShieldCheck className="size-5" aria-hidden />
                  </span>
                  <h3 className="fbl-display mt-5 text-2xl text-ink">
                    The honest fine print
                  </h3>
                  <p className="mt-4 text-slate">{after.honesty}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </Shell>

        <CtaBand {...cta} />
      </div>
    </div>
  );
}
