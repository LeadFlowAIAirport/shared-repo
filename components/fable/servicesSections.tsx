import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  GraduationCap,
  Headset,
  MapPin,
  Megaphone,
  Network,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Kicker, Shell, HEADING_SIZE } from "./sections";
import { PageHero, CtaBand } from "./pageBlocks";
import { servicesPage } from "@/lib/fablePages";

/* The Fable Services sections, shared by the live /services page and the
   /preview/fable-services route. Copy lives in lib/fablePages.ts
   (servicesPage). The flagship and module blocks keep the anchor ids from the
   old page (#ai-business-enablement, #ai-receptionist, #ads-booking-system,
   #local-visibility, #full-growth-system) — next.config.ts redirects and the
   AI Learning hub deep-link to them. */

const { hero, flagship, modules, fit, cta } = servicesPage;

const MODULE_ICONS: Record<string, LucideIcon> = {
  headset: Headset,
  megaphone: Megaphone,
  "map-pin": MapPin,
  network: Network,
};

/** Mono field label used inside detail cards ("WHO IT'S FOR", etc.). */
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="fbl-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
      {children}
    </h4>
  );
}

export function SvcHero() {
  return <PageHero {...hero} />;
}

/* 01 — The flagship engagement */
export function SvcFlagshipSection() {
  return (
    <Shell id={flagship.id} deep>
      <Kicker index="01" label={flagship.kicker} />
      <Reveal>
        <h2 className={`fbl-display mt-8 max-w-3xl text-ink ${HEADING_SIZE}`}>
          {flagship.heading}
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-10">
        <div className="fbl-card fbl-reg p-7 shadow-glow ring-1 ring-accent/25 sm:p-10">
          <span className="fbl-mono inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
            <GraduationCap className="size-3.5" aria-hidden />
            {flagship.tag}
          </span>
          <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-14">
            <div>
              <p className="text-lg leading-relaxed text-ink/90">{flagship.what}</p>
              <div className="mt-7 space-y-5">
                <div>
                  <FieldLabel>Who it&rsquo;s for</FieldLabel>
                  <p className="mt-2 text-[15px] text-slate">{flagship.whoFor}</p>
                </div>
                <div>
                  <FieldLabel>The problem it solves</FieldLabel>
                  <p className="mt-2 text-[15px] text-slate">{flagship.problem}</p>
                </div>
              </div>
            </div>
            <div className="border-white/8 lg:border-l lg:pl-14">
              <FieldLabel>How the engagement works</FieldLabel>
              <p className="mt-2 text-[15px] text-slate">{flagship.howAI}</p>
              <FieldLabel>
                <span className="mt-6 block">What you get</span>
              </FieldLabel>
              <ul className="mt-3 space-y-3">
                {flagship.gets.map((g) => (
                  <li key={g} className="flex gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                    <span className="text-[15px] text-ink/90">{g}</span>
                  </li>
                ))}
              </ul>
              <Link href={flagship.link.href} className="fbl-btn fbl-btn-ghost fbl-btn-sm mt-7">
                {flagship.link.label}
                <ArrowUpRight className="fbl-btn-icon size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </Shell>
  );
}

/* 02 — The four implementation modules, in depth */
export function SvcModulesSection() {
  return (
    <Shell id="modules">
      <Kicker index="02" label={modules.kicker} />
      <Reveal>
        <h2 className={`fbl-display mt-8 max-w-3xl text-ink ${HEADING_SIZE}`}>
          {modules.heading}
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-5 max-w-2xl text-slate">{modules.intro}</p>
      </Reveal>

      <div className="mt-10 space-y-6">
        {modules.items.map((m, i) => {
          const Icon = MODULE_ICONS[m.icon];
          return (
            <div key={m.id} id={m.id} className="scroll-mt-28">
              <Reveal delay={(i % 2) * 60}>
                <div className="fbl-card fbl-card-hover p-7 sm:p-9">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <h3 className="fbl-display text-2xl text-ink">{m.name}</h3>
                    </div>
                    <span className="fbl-mono text-xs text-slate/50">
                      M{i + 1} / IMPLEMENTATION MODULE
                    </span>
                  </div>

                  <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-14">
                    <div>
                      <p className="text-[17px] leading-relaxed text-ink/90">{m.what}</p>
                      <div className="mt-6 space-y-5">
                        <div>
                          <FieldLabel>Who it&rsquo;s for</FieldLabel>
                          <p className="mt-2 text-[15px] text-slate">{m.whoFor}</p>
                        </div>
                        <div>
                          <FieldLabel>The problem</FieldLabel>
                          <p className="mt-2 text-[15px] text-slate">{m.problem}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-white/8 lg:border-l lg:pl-14">
                      <FieldLabel>How AI helps</FieldLabel>
                      <p className="mt-2 text-[15px] text-slate">{m.howAI}</p>
                      <FieldLabel>
                        <span className="mt-6 block">What you get</span>
                      </FieldLabel>
                      <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                        {m.gets.map((g) => (
                          <li key={g} className="flex gap-2.5">
                            <Check
                              className="mt-0.5 size-4.5 shrink-0 text-accent"
                              aria-hidden
                            />
                            <span className="text-sm text-ink/85">{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </Shell>
  );
}

/* 03 — Problem → module fit map */
export function SvcFitSection() {
  return (
    <Shell id="fit" deep>
      <Kicker index="03" label={fit.kicker} />
      <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <h2 className={`fbl-display text-ink ${HEADING_SIZE}`}>{fit.heading}</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 text-slate">{fit.intro}</p>
            </Reveal>
          </div>
        </div>
        <ul className="lg:col-span-8">
          {fit.rows.map((row, i) => (
            <li key={row.problem} className={i > 0 ? "border-t border-white/7" : ""}>
              <Reveal delay={i * 50}>
                <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5">
                  <div className="flex min-w-0 items-baseline gap-5">
                    <span className="fbl-mono text-sm font-medium text-accent/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-bold text-ink">{row.problem}</h3>
                      <p className="mt-1 text-[15px] text-slate">{row.detail}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-10 sm:pl-0">
                    {row.modules.map((mod) => (
                      <a
                        key={mod.name}
                        href={mod.href}
                        className="fbl-mono rounded-full border border-accent/30 bg-accent/8 px-3 py-1.5 text-[10.5px] uppercase tracking-[0.12em] text-accent transition-colors hover:bg-accent/15"
                      >
                        {mod.name}
                      </a>
                    ))}
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

export function SvcCtaBand() {
  return <CtaBand {...cta} />;
}
