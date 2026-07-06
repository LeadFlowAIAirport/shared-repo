import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  GraduationCap,
  Headset,
  Mail,
  Map as MapIcon,
  MapPin,
  Megaphone,
  Network,
  Search,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import AtlasLogo from "@/components/brand/AtlasLogo";
import OpportunityMap, { Topo } from "./OpportunityMap";
import {
  approach,
  faq,
  finalCta,
  footer,
  hero,
  mission,
  modules,
  problem,
  process as processContent,
  trust,
} from "@/lib/homeContent";

/* ------------------------------- Primitives ------------------------------- */

/** Cartographic section label — "01 / THE PROBLEM" with a fading rule. */
export function Kicker({ index, label, center = false }: { index: string; label: string; center?: boolean }) {
  return (
    <div className={`flex items-center gap-4 ${center ? "justify-center" : ""}`}>
      {center && (
        <span aria-hidden className="h-px w-10 bg-gradient-to-r from-transparent to-accent/50 sm:w-16" />
      )}
      <span className="fbl-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
        {index} / {label}
      </span>
      <span
        aria-hidden
        className={`h-px bg-gradient-to-r from-accent/50 to-transparent ${center ? "w-10 sm:w-16" : "w-16 sm:w-24"}`}
      />
    </div>
  );
}

export function Shell({
  id,
  deep = false,
  children,
}: {
  id: string;
  deep?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 ${deep ? "border-y border-white/5 bg-surface-deep" : ""}`}
    >
      <div className="relative mx-auto w-full max-w-(--container-site) px-5 py-20 sm:px-8 md:py-28">
        {children}
      </div>
    </section>
  );
}

export const HEADING_SIZE = "text-[clamp(1.9rem,3.6vw,2.9rem)]";

/* ---------------------------------- Hero ---------------------------------- */

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Topo
        className="pointer-events-none absolute -right-40 -top-32 h-[46rem] w-[46rem] text-accent opacity-[0.07]"
      />
      <div className="relative mx-auto grid w-full max-w-(--container-site) items-center gap-14 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[minmax(0,53fr)_minmax(0,47fr)] lg:pb-24 lg:pt-20">
        <div>
          <Reveal>
            <p className="fbl-mono inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/8 px-4 py-2 text-[10.5px] font-medium uppercase tracking-[0.18em] text-accent">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              {hero.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={70}>
            <h1 className="fbl-display mt-6 text-[clamp(2.7rem,6.2vw,4.8rem)] text-ink">
              {hero.headlinePre}
              <em className="fbl-serif-accent text-accent">{hero.headlineAccent}</em>
              {hero.headlinePost}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">{hero.subheadline}</p>
          </Reveal>
          <Reveal delay={210}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href={hero.primaryCta.href} className="fbl-btn fbl-btn-primary cta-pulse">
                {hero.primaryCta.label}
                <ArrowUpRight className="fbl-btn-icon size-5" aria-hidden />
              </Link>
              <Link href={hero.secondaryCta.href} className="fbl-btn fbl-btn-ghost">
                {hero.secondaryCta.label}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={280} variant="fade">
            <p className="fbl-mono mt-8 text-[11px] uppercase tracking-[0.16em] text-slate/80">
              {hero.trustLine.join("  ·  ")}
            </p>
          </Reveal>
        </div>
        <Reveal delay={200} variant="scale" className="lg:justify-self-end">
          <OpportunityMap />
        </Reveal>
      </div>

      {/* Module strip — breadth at a glance, links into the modules section */}
      <div className="relative border-y border-white/6 bg-white/2">
        <div className="mx-auto flex w-full max-w-(--container-site) flex-wrap items-center justify-center gap-x-7 gap-y-2 px-5 py-4 sm:px-8">
          <span className="fbl-mono text-[10px] uppercase tracking-[0.2em] text-slate/60">
            We implement
          </span>
          {hero.moduleStrip.map((m) => (
            <a
              key={m}
              href="#modules"
              className="fbl-mono text-[11px] uppercase tracking-[0.15em] text-slate transition-colors hover:text-accent"
            >
              {m}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Problem --------------------------------- */

export function ProblemSection() {
  return (
    <Shell id="problem" deep>
      <Kicker index="01" label={problem.kicker} />
      <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className={`fbl-display text-ink ${HEADING_SIZE}`}>{problem.heading}</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 text-slate">{problem.intro}</p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 border-l-2 border-accent pl-5 font-medium text-ink">
              {problem.closing}
            </p>
          </Reveal>
        </div>
        <ul className="lg:col-span-7">
          {problem.pains.map((p, i) => (
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
    </Shell>
  );
}

/* -------------------------------- Approach -------------------------------- */

const APPROACH_ICONS: Record<string, LucideIcon> = {
  book: BookOpen,
  search: Search,
  map: MapIcon,
  wrench: Wrench,
  users: Users,
};

export function ApproachSection() {
  return (
    <Shell id="approach">
      <Kicker index="02" label={approach.kicker} />
      <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <h2 className={`fbl-display text-ink ${HEADING_SIZE}`}>{approach.heading}</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 text-slate">{approach.intro}</p>
            </Reveal>
            <Reveal delay={140}>
              <p className="fbl-mono mt-7 inline-flex rounded-full border border-line bg-white/3 px-4 py-2 text-[10.5px] uppercase tracking-[0.15em] text-slate">
                {approach.note}
              </p>
            </Reveal>
          </div>
        </div>
        <div className="space-y-4 lg:col-span-7">
          {approach.steps.map((s, i) => {
            const Icon = APPROACH_ICONS[s.icon];
            return (
              <Reveal key={s.title} delay={i * 70}>
                <div className="fbl-card fbl-card-hover flex items-start gap-5 p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-bold text-ink">{s.title}</h3>
                      <span className="fbl-mono text-xs text-slate/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[15px] text-slate">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}

/* -------------------------------- Modules --------------------------------- */

const MODULE_ICONS: Record<string, LucideIcon> = {
  headset: Headset,
  megaphone: Megaphone,
  "map-pin": MapPin,
  network: Network,
};

export function ModulesSection() {
  return (
    <Shell id="modules" deep>
      <Kicker index="03" label={modules.kicker} />
      <Reveal>
        <h2 className={`fbl-display mt-8 max-w-3xl text-ink ${HEADING_SIZE}`}>
          {modules.heading}
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-5 max-w-2xl text-slate">{modules.intro}</p>
      </Reveal>

      {/* Featured: the education front door */}
      <Reveal delay={120} className="mt-10">
        <div className="fbl-card fbl-reg p-7 shadow-glow ring-1 ring-accent/25 sm:p-10">
          <div className="grid gap-9 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-center">
            <div>
              <span className="fbl-mono inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                <GraduationCap className="size-3.5" aria-hidden />
                {modules.featured.tag}
              </span>
              <h3 className="fbl-display mt-5 text-2xl text-ink sm:text-3xl">
                {modules.featured.name}
              </h3>
              <p className="mt-4 text-slate">{modules.featured.blurb}</p>
              <Link
                href={modules.featured.href}
                className="fbl-btn fbl-btn-ghost fbl-btn-sm mt-7"
              >
                {modules.featured.linkLabel}
                <ArrowUpRight className="fbl-btn-icon size-4" aria-hidden />
              </Link>
            </div>
            <ul className="space-y-3.5 border-white/8 md:border-l md:pl-9">
              {modules.featured.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                  <span className="text-[15px] text-ink/90">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* The four implementation modules */}
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {modules.items.map((m, i) => {
          const Icon = MODULE_ICONS[m.icon];
          return (
            <Reveal key={m.id} delay={i * 70}>
              <div className="fbl-card fbl-card-hover h-full p-7">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="fbl-mono text-xs text-slate/50">M{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{m.name}</h3>
                <p className="mt-2 text-[15px] text-slate">{m.blurb}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={100}>
        <p className="fbl-mono mt-8 text-xs text-slate/70">
          {modules.footnote}{" "}
          <Link href="/services" className="text-accent underline-offset-4 hover:underline">
            View services →
          </Link>
        </p>
      </Reveal>
    </Shell>
  );
}

/* -------------------------------- Process --------------------------------- */

export function ProcessSection() {
  return (
    <Shell id="process">
      <Kicker index="04" label={processContent.kicker} />
      <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <h2 className={`fbl-display text-ink ${HEADING_SIZE}`}>{processContent.heading}</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-sm text-slate">{processContent.intro}</p>
        </Reveal>
      </div>

      <div className="fbl-rail mt-10 hidden lg:block" aria-hidden />

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:mt-8 lg:grid-cols-4">
        {processContent.steps.map((s, i) => (
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
              <p className="mt-2 text-[15px] text-slate">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={140}>
        <p className="mt-9 max-w-2xl border-l-2 border-accent/60 pl-5 text-[15px] text-slate">
          {processContent.closing}
        </p>
      </Reveal>
    </Shell>
  );
}

/* -------------------------------- Mission --------------------------------- */
/* Brand north-star band — an un-numbered, centered statement that opens the
   identity zone (it sits just before "How We Work"). Quieter than the hero and
   final CTA: no serif accent, no glow. It borrows the same faint Topo motif so
   it still reads as a peer brand moment, and it reinforces that Atlas *Leads*
   means leading local businesses into an AI-enabled future. */

export function MissionSection() {
  return (
    <section id="mission" className="relative scroll-mt-24 overflow-hidden border-t border-white/5">
      <Topo className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 text-accent opacity-[0.05]" />
      <div className="relative mx-auto w-full max-w-(--container-site) px-5 py-20 text-center sm:px-8 md:py-28">
        <Reveal>
          <div className="flex items-center justify-center gap-4">
            <span aria-hidden className="h-px w-10 bg-gradient-to-r from-transparent to-accent/50 sm:w-16" />
            <span className="fbl-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
              {mission.label}
            </span>
            <span aria-hidden className="h-px w-10 bg-gradient-to-r from-accent/50 to-transparent sm:w-16" />
          </div>
        </Reveal>
        <Reveal delay={90}>
          <p className="mx-auto mt-8 max-w-3xl text-balance text-[clamp(1.35rem,2.4vw,1.95rem)] font-medium leading-[1.4] tracking-[-0.01em] text-ink">
            {mission.statement}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Trust ---------------------------------- */

export function TrustSection() {
  return (
    <Shell id="trust" deep>
      <Kicker index="05" label={trust.kicker} />
      <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <h2 className={`fbl-display text-ink ${HEADING_SIZE}`}>{trust.heading}</h2>
          </Reveal>
          <ul className="mt-8">
            {trust.principles.map((p, i) => (
              <li key={p.title} className={i > 0 ? "border-t border-white/7" : ""}>
                <Reveal delay={i * 60}>
                  <div className="flex gap-4 py-4.5">
                    <Check className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                    <div>
                      <h3 className="font-bold text-ink">{p.title}</h3>
                      <p className="mt-1 text-[15px] text-slate">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <Reveal delay={120} variant="scale">
            <div className="fbl-card fbl-reg p-8 sm:p-10">
              <span className="fbl-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                No fake proof
              </span>
              <h3 className="fbl-display mt-4 text-2xl text-ink">{trust.honesty.heading}</h3>
              {trust.honesty.body.map((para) => (
                <p key={para} className="mt-4 text-slate">
                  {para}
                </p>
              ))}
              <p className="fbl-mono mt-8 text-sm text-accent">— {trust.honesty.signature}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </Shell>
  );
}

/* ---------------------------------- FAQ ------------------------------------ */
/* Native <details>/<summary> accordion — accessible with zero client JS. The
   "+" indicator rotates to "×" via the group-open variant. */

export function FaqSection() {
  return (
    <Shell id="faq">
      <Kicker index="06" label={faq.kicker} />
      <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <h2 className={`fbl-display text-ink ${HEADING_SIZE}`}>{faq.heading}</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 text-slate">{faq.intro}</p>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-8">
          {faq.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 50}>
              <details className={`fbl-faq group ${i > 0 ? "border-t border-white/7" : ""}`}>
                <summary className="flex cursor-pointer list-none items-baseline gap-5 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  <span className="fbl-mono text-sm font-medium text-accent/60" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-base font-bold text-ink sm:text-lg">{item.q}</span>
                  <span
                    aria-hidden
                    className="fbl-mono select-none text-xl leading-none text-accent transition-transform duration-200 ease-out-quint group-open:rotate-45 motion-reduce:transition-none"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pl-10 text-[15px] text-slate">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </Shell>
  );
}

/* -------------------------------- Final CTA -------------------------------- */

export function FinalCtaSection() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-white/5 bg-surface-deep">
      <Topo className="pointer-events-none absolute left-1/2 top-1/2 h-[52rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 text-accent opacity-[0.05]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[54rem] -translate-x-1/2 bg-[radial-gradient(55%_50%_at_50%_0%,color-mix(in_oklab,var(--color-accent)_25%,transparent),transparent_70%)]"
      />
      <div className="relative mx-auto w-full max-w-(--container-site) px-5 py-24 text-center sm:px-8 md:py-32">
        <Reveal>
          <Kicker index="07" label={finalCta.kicker} center />
        </Reveal>
        <Reveal delay={70}>
          <h2 className="fbl-display mx-auto mt-7 max-w-3xl text-[clamp(2.4rem,5.4vw,4.1rem)] text-ink">
            {finalCta.headingPre}
            <em className="fbl-serif-accent text-accent">{finalCta.headingAccent}</em>
            {finalCta.headingPost}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate">{finalCta.body}</p>
        </Reveal>
        <Reveal delay={210}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href={finalCta.primaryCta.href} className="fbl-btn fbl-btn-primary fbl-btn-lg cta-pulse">
              {finalCta.primaryCta.label}
              <ArrowUpRight className="fbl-btn-icon size-5" aria-hidden />
            </Link>
            <a href={`mailto:${finalCta.email}`} className="fbl-btn fbl-btn-ghost">
              <Mail className="size-4.5" aria-hidden />
              {finalCta.email}
            </a>
          </div>
        </Reveal>
        <Reveal delay={280} variant="fade">
          <p className="fbl-mono mt-9 text-[11px] uppercase tracking-[0.18em] text-slate/80">
            {finalCta.microline.join("  ·  ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Footer ---------------------------------- */
/* PreviewFooter is used only by the /preview/fable-redesign route. The live
   homepage renders the shared global Footer (components/layout/Footer.tsx). */

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={heading}>
      <h3 className="fbl-mono text-[10px] font-medium uppercase tracking-[0.2em] text-slate/60">
        {heading}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            {l.href.startsWith("#") ? (
              <a href={l.href} className="text-sm text-slate transition-colors hover:text-ink">
                {l.label}
              </a>
            ) : (
              <Link href={l.href} className="text-sm text-slate transition-colors hover:text-ink">
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function PreviewFooter() {
  return (
    <footer className="relative border-t border-white/8 bg-surface-deep">
      <div className="mx-auto w-full max-w-(--container-site) px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,5fr)_repeat(3,minmax(0,2.3fr))]">
          <div>
            <AtlasLogo variant="horizontal" tone="onDark" size={26} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate">{footer.pitch}</p>
            <ul className="mt-5 space-y-1.5">
              {footer.contacts.map((c) => (
                <li key={c.email} className="fbl-mono text-xs">
                  <span className="text-slate/50">{c.label} </span>
                  <a href={`mailto:${c.email}`} className="text-slate transition-colors hover:text-accent">
                    {c.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <FooterCol heading="Preview" links={footer.explore} />
          <FooterCol heading="Live site" links={footer.liveSite} />
          <FooterCol heading="Legal" links={footer.legal} />
        </div>
        <div className="mt-11 flex flex-wrap items-center justify-between gap-3 border-t border-white/7 pt-6">
          <p className="text-xs text-slate/80">{footer.legalLine}</p>
          <p className="fbl-mono text-[10px] uppercase tracking-[0.16em] text-slate/50">
            {footer.previewNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
