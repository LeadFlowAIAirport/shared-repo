import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Topo } from "./OpportunityMap";
import { Kicker } from "./sections";

/* Shared page-level blocks for the Fable sub-pages (Services, How It Works,
   Book). The homepage keeps its own bespoke hero/CTA in sections.tsx; these are
   the parametrized equivalents so every sub-page reads from its own content
   module without duplicating layout code. */

export type PageCta = { label: string; href: string };

/** Sub-page hero — eyebrow pill, display headline with one optional
 *  serif-italic accent word, intro, optional CTAs and mono trust line. */
export function PageHero({
  eyebrow,
  headlinePre,
  headlineAccent,
  headlinePost,
  intro,
  primaryCta,
  secondaryCta,
  microline,
  center = false,
}: {
  eyebrow: string;
  headlinePre: string;
  headlineAccent?: string;
  headlinePost?: string;
  intro: string;
  primaryCta?: PageCta;
  secondaryCta?: PageCta;
  microline?: string[];
  center?: boolean;
}) {
  const align = center ? "items-center text-center" : "";
  const measure = center ? "mx-auto" : "";
  return (
    <section className="relative overflow-hidden">
      <Topo className="pointer-events-none absolute -right-44 -top-36 h-[42rem] w-[42rem] text-accent opacity-[0.06]" />
      <div
        className={`relative mx-auto flex w-full max-w-(--container-site) flex-col px-5 pb-14 pt-14 sm:px-8 lg:pb-20 lg:pt-20 ${align}`}
      >
        <Reveal>
          <p className="fbl-mono inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/8 px-4 py-2 text-[10.5px] font-medium uppercase tracking-[0.18em] text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={70}>
          <h1
            className={`fbl-display mt-6 max-w-4xl text-[clamp(2.4rem,5.4vw,4rem)] text-ink ${measure}`}
          >
            {headlinePre}
            {headlineAccent && (
              <em className="fbl-serif-accent text-accent">{headlineAccent}</em>
            )}
            {headlinePost}
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className={`mt-6 max-w-2xl text-lg leading-relaxed text-slate ${measure}`}>
            {intro}
          </p>
        </Reveal>
        {(primaryCta || secondaryCta) && (
          <Reveal delay={210}>
            <div
              className={`mt-9 flex flex-wrap items-center gap-4 ${center ? "justify-center" : ""}`}
            >
              {primaryCta && (
                <Link href={primaryCta.href} className="fbl-btn fbl-btn-primary cta-pulse">
                  {primaryCta.label}
                  <ArrowUpRight className="fbl-btn-icon size-5" aria-hidden />
                </Link>
              )}
              {secondaryCta &&
                (secondaryCta.href.startsWith("#") ? (
                  <a href={secondaryCta.href} className="fbl-btn fbl-btn-ghost">
                    {secondaryCta.label}
                  </a>
                ) : (
                  <Link href={secondaryCta.href} className="fbl-btn fbl-btn-ghost">
                    {secondaryCta.label}
                  </Link>
                ))}
            </div>
          </Reveal>
        )}
        {microline && (
          <Reveal delay={260} variant="fade">
            <p className="fbl-mono mt-8 text-[11px] uppercase tracking-[0.16em] text-slate/80">
              {microline.join("  ·  ")}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/** Deep final CTA band — the sub-page version of the homepage FinalCtaSection. */
export function CtaBand({
  index,
  kicker,
  headingPre,
  headingAccent,
  headingPost,
  body,
  primaryCta,
  microline,
}: {
  index: string;
  kicker: string;
  headingPre: string;
  headingAccent?: string;
  headingPost?: string;
  body: string;
  primaryCta: PageCta;
  microline?: string[];
}) {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-surface-deep">
      <Topo className="pointer-events-none absolute left-1/2 top-1/2 h-[48rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 text-accent opacity-[0.05]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[50rem] -translate-x-1/2 bg-[radial-gradient(55%_50%_at_50%_0%,color-mix(in_oklab,var(--color-accent)_22%,transparent),transparent_70%)]"
      />
      <div className="relative mx-auto w-full max-w-(--container-site) px-5 py-20 text-center sm:px-8 md:py-28">
        <Reveal>
          <Kicker index={index} label={kicker} center />
        </Reveal>
        <Reveal delay={70}>
          <h2 className="fbl-display mx-auto mt-7 max-w-3xl text-[clamp(2.1rem,4.6vw,3.4rem)] text-ink">
            {headingPre}
            {headingAccent && (
              <em className="fbl-serif-accent text-accent">{headingAccent}</em>
            )}
            {headingPost}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate">{body}</p>
        </Reveal>
        <Reveal delay={210}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href={primaryCta.href} className="fbl-btn fbl-btn-primary fbl-btn-lg cta-pulse">
              {primaryCta.label}
              <ArrowUpRight className="fbl-btn-icon size-5" aria-hidden />
            </Link>
          </div>
        </Reveal>
        {microline && (
          <Reveal delay={280} variant="fade">
            <p className="fbl-mono mt-9 text-[11px] uppercase tracking-[0.18em] text-slate/80">
              {microline.join("  ·  ")}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
