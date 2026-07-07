import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Topo } from "./OpportunityMap";
import { Shell, HEADING_SIZE } from "./sections";
import type { ApproachDetail } from "@/lib/approachDetails";

/* Presentational view for the "Our Approach" detail pages
   (app/approach/<slug>). One shared layout, fed by lib/approachDetails.ts, so
   every card's detail page matches the homepage Fable design system. Reuses the
   same primitives as the homepage sections (Topo, Shell, Reveal, fbl-*). */

// The homepage "Our Approach" section lives at #approach; the back link returns
// there in the same tab.
const BACK = { href: "/#approach", label: "Back to Our Approach" };

export function ApproachDetailView({ data }: { data: ApproachDetail }) {
  const { hero, body, cta } = data;
  return (
    <>
      {/* Hero — back link, eyebrow, headline with one serif-accent word, intro */}
      <section className="relative overflow-hidden">
        <Topo className="pointer-events-none absolute -right-44 -top-36 h-[42rem] w-[42rem] text-accent opacity-[0.06]" />
        <div className="relative mx-auto flex w-full max-w-(--container-site) flex-col px-5 pb-14 pt-12 sm:px-8 lg:pb-20 lg:pt-16">
          <Reveal>
            <Link
              href={BACK.href}
              className="fbl-mono inline-flex w-fit items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <ArrowLeft className="size-3.5" aria-hidden />
              {BACK.label}
            </Link>
          </Reveal>
          <Reveal delay={60}>
            <p className="fbl-mono mt-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-accent/25 bg-accent/8 px-4 py-2 text-[10.5px] font-medium uppercase tracking-[0.18em] text-accent">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              {hero.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="fbl-display mt-6 max-w-4xl text-[clamp(2.4rem,5.4vw,4rem)] text-ink">
              {hero.headlinePre}
              {hero.headlineAccent && (
                <em className="fbl-serif-accent text-accent">{hero.headlineAccent}</em>
              )}
              {hero.headlinePost}
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">{hero.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Body — sticky heading/intro on the left, numbered points on the right */}
      <Shell id="detail">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="fbl-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
                    {body.kicker}
                  </span>
                  <span
                    aria-hidden
                    className="h-px w-16 bg-gradient-to-r from-accent/50 to-transparent sm:w-24"
                  />
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className={`fbl-display mt-6 text-ink ${HEADING_SIZE}`}>{body.heading}</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-slate">{body.intro}</p>
              </Reveal>
            </div>
          </div>
          <ul className="lg:col-span-7">
            {body.points.map((p, i) => (
              <li key={p.title} className={i > 0 ? "border-t border-white/7" : ""}>
                <Reveal delay={i * 60}>
                  <div className="grid grid-cols-[auto_1fr] gap-5 py-5">
                    <span className="fbl-mono pt-1 text-sm font-medium text-accent/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-ink sm:text-lg">{p.title}</h3>
                      <p className="mt-1 text-[15px] text-slate">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        {body.note && (
          <Reveal delay={120}>
            <p className="mt-10 max-w-3xl border-l-2 border-accent pl-5 text-[15px] font-medium text-ink">
              {body.note}
            </p>
          </Reveal>
        )}
      </Shell>

      {/* Closing band — forward CTA to /book plus a second way back */}
      <section className="relative overflow-hidden border-t border-white/5 bg-surface-deep">
        <Topo className="pointer-events-none absolute left-1/2 top-1/2 h-[48rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 text-accent opacity-[0.05]" />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[50rem] -translate-x-1/2 bg-[radial-gradient(55%_50%_at_50%_0%,color-mix(in_oklab,var(--color-accent)_22%,transparent),transparent_70%)]"
        />
        <div className="relative mx-auto w-full max-w-(--container-site) px-5 py-20 text-center sm:px-8 md:py-28">
          <Reveal>
            <h2 className="fbl-display mx-auto max-w-3xl text-[clamp(2.1rem,4.6vw,3.4rem)] text-ink">
              {cta.headingPre}
              {cta.headingAccent && (
                <em className="fbl-serif-accent text-accent">{cta.headingAccent}</em>
              )}
              {cta.headingPost}
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate">{cta.body}</p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={cta.primaryCta.href}
                className="fbl-btn fbl-btn-primary fbl-btn-lg cta-pulse"
              >
                {cta.primaryCta.label}
                <ArrowUpRight className="fbl-btn-icon size-5" aria-hidden />
              </Link>
              <Link href={BACK.href} className="fbl-btn fbl-btn-ghost">
                <ArrowLeft className="size-4.5" aria-hidden />
                {BACK.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
