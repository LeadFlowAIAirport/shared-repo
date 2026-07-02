import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Headset,
  MapPin,
  Megaphone,
  Network,
  PlayCircle,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import "../../fable.css";
import Reveal from "@/components/ui/Reveal";
import { Kicker, Shell, HEADING_SIZE } from "@/components/fable/sections";
import { PageHero, CtaBand } from "@/components/fable/pageBlocks";
import { fableFontVars } from "@/components/fable/fonts";
import PreviewBanner from "../PreviewBanner";
import { aiLearningPreview } from "@/lib/fablePages";
import { aiImplementation, type LessonVideo } from "@/lib/content";

/* /preview/fable-ai-learning — design preview of the AI Learning page
   (/ai-implementation). Production is untouched; this route is review-only.
   The lesson video library, implementation modules, and FAQ render from the
   SAME data as the live page (lib/content.ts `aiImplementation`), so recorded
   videos still swap in from one place and module cards keep their
   /services#<id> deep links. */

export const metadata: Metadata = {
  title: "Fable AI Learning Preview",
  description: "Internal design preview of the Atlas Leads AI Learning page redesign.",
  robots: { index: false, follow: false },
};

const { hero, problem, teach, path, library, modules, honesty, faqKicker, cta } =
  aiLearningPreview;

const MODULE_ICONS: Record<string, LucideIcon> = {
  "ai-receptionist": Headset,
  "ads-booking-system": Megaphone,
  "local-visibility": MapPin,
  "full-growth-system": Network,
};

/** "Coming soon" / "Watch" chip — same state logic as the live learning hub:
 *  flips automatically when a lesson's `video.status` is set to "available". */
function LessonChip({ video, className = "" }: { video: LessonVideo; className?: string }) {
  const available = video.status === "available";
  return available ? (
    <span
      className={`fbl-mono inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-on-accent ${className}`}
    >
      <PlayCircle aria-hidden className="size-3.5" />
      Watch{video.duration ? ` · ${video.duration}` : ""}
    </span>
  ) : (
    <span
      className={`fbl-mono inline-flex items-center rounded-full border border-white/15 bg-surface-deep/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-slate backdrop-blur-sm ${className}`}
    >
      Coming soon
    </span>
  );
}

/** 16:9 media frame where a lesson video embeds once recorded. */
function LessonFrame({ large = false }: { large?: boolean }) {
  return (
    <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-surface-deep">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent)_20%,transparent),transparent_72%)]"
      />
      <div aria-hidden className="fbl-grid-dots absolute inset-0 opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`flex items-center justify-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/30 backdrop-blur-sm ${
            large ? "size-20" : "size-14"
          }`}
        >
          <PlayCircle aria-hidden className={large ? "size-10" : "size-7"} />
        </span>
      </div>
    </div>
  );
}

export default function FableAiLearningPreview() {
  const { featured, lessonsIntro, lessonsNote, lessons, modules: moduleItems, faq } =
    aiImplementation;

  return (
    <div className={`fable relative ${fableFontVars}`}>
      <PreviewBanner label="Fable AI Learning" liveHref="/ai-implementation" />
      <div
        aria-hidden
        className="fbl-grid-dots fbl-mask-top pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-50"
      />

      <div className="relative z-10">
        <PageHero {...hero} />

        {/* 01 — Why AI feels confusing */}
        <Shell id="problem" deep>
          <Kicker index="01" label={problem.kicker} />
          <Reveal>
            <h2 className={`fbl-display mt-8 max-w-3xl text-ink ${HEADING_SIZE}`}>
              {problem.heading}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 max-w-3xl text-slate">{problem.intro}</p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {problem.states.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className="h-full">
                <div className="fbl-card fbl-card-hover flex h-full flex-col p-6">
                  <span className="fbl-mono text-sm font-medium text-accent/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] text-slate">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Shell>

        {/* 02 — What Atlas teaches */}
        <Shell id="teach">
          <Kicker index="02" label={teach.kicker} />
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <h2 className={`fbl-display max-w-2xl text-ink ${HEADING_SIZE}`}>
                {teach.heading}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="max-w-sm text-slate">{teach.intro}</p>
            </Reveal>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teach.items.map((item, i) => (
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

        {/* 03 — Education → audit → implementation */}
        <Shell id="path" deep>
          <Kicker index="03" label={path.kicker} />
          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <h2 className={`fbl-display text-ink ${HEADING_SIZE}`}>{path.heading}</h2>
                </Reveal>
                <Reveal delay={80}>
                  <p className="mt-5 text-slate">{path.intro}</p>
                </Reveal>
              </div>
            </div>
            <div className="space-y-4 lg:col-span-8">
              {path.steps.map((s, i) => (
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

        {/* 04 — Mini lesson library (video slots shared with the live page) */}
        <Shell id="lessons">
          <Kicker index="04" label={library.kicker} />
          <Reveal>
            <h2 className={`fbl-display mt-8 max-w-3xl text-ink ${HEADING_SIZE}`}>
              {library.heading}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 max-w-2xl text-slate">{lessonsIntro}</p>
          </Reveal>

          {/* Featured overview — large accent-ringed card */}
          <Reveal delay={120} className="mt-10">
            <div className="fbl-card grid overflow-hidden shadow-glow ring-1 ring-accent/25 md:grid-cols-2">
              <div className="relative md:border-b-0 md:border-r md:border-white/10">
                <LessonFrame large />
                <LessonChip video={featured.video} className="absolute left-3.5 top-3.5" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
                <span className="fbl-mono inline-flex items-center gap-2 self-start rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                  {featured.eyebrow}
                </span>
                <h3 className="fbl-display mt-4 text-2xl text-ink sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-[15px] text-slate">{featured.blurb}</p>
              </div>
            </div>
          </Reveal>

          {/* The mini lessons */}
          <ul className="mt-5 grid gap-5 md:grid-cols-3">
            {lessons.map((lesson, i) => (
              <Reveal key={lesson.number} delay={(i % 3) * 70} className="h-full">
                <li className="fbl-card fbl-card-hover flex h-full flex-col overflow-hidden">
                  <div className="relative">
                    <LessonFrame />
                    <LessonChip video={lesson.video} className="absolute left-3.5 top-3.5" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="fbl-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                      Lesson {String(lesson.number).padStart(2, "0")} · {lesson.category}
                    </p>
                    <h3 className="mt-2.5 font-bold text-ink">{lesson.title}</h3>
                    <p className="mt-2 text-sm text-slate">{lesson.description}</p>
                    <ul className="mt-4 space-y-2 border-t border-white/7 pt-4">
                      {lesson.takeaways.map((t) => (
                        <li key={t} className="flex gap-2.5">
                          <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                          <span className="text-[13px] text-ink/85">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120} variant="fade">
            <p className="fbl-mono mt-8 text-xs text-slate/70">{lessonsNote}</p>
          </Reveal>

          {/* Topics the lessons and audits cover */}
          <Reveal delay={140}>
            <div className="mt-12 border-t border-white/7 pt-8">
              <h3 className="fbl-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                {library.topicsLabel}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {library.topics.map((t) => (
                  <span
                    key={t}
                    className="fbl-mono rounded-full border border-white/12 bg-white/4 px-3 py-1.5 text-[10.5px] uppercase tracking-[0.12em] text-ink/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Shell>

        {/* 05 — Where the learning leads (modules, shared data + /services links) */}
        <Shell id="modules" deep>
          <Kicker index="05" label={modules.kicker} />
          <Reveal>
            <h2 className={`fbl-display mt-8 max-w-3xl text-ink ${HEADING_SIZE}`}>
              {modules.heading}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 max-w-2xl text-slate">{modules.intro}</p>
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {moduleItems.map((mod, i) => {
              const Icon = MODULE_ICONS[mod.id] ?? Network;
              return (
                <Reveal key={mod.id} delay={(i % 4) * 70} className="h-full">
                  <li className="h-full">
                    <Link
                      href={`/services#${mod.id}`}
                      className="fbl-card fbl-card-hover group flex h-full flex-col p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <span className="flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
                        <Icon aria-hidden className="size-5" />
                      </span>
                      <h3 className="mt-4 font-bold text-ink">{mod.name}</h3>
                      <p className="mt-2 flex-1 text-sm text-slate">{mod.blurb}</p>
                      <span className="fbl-mono mt-4 inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.14em] text-accent">
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
          <Reveal delay={160}>
            <Link
              href={modules.servicesLink.href}
              className="fbl-btn fbl-btn-ghost fbl-btn-sm mt-8"
            >
              {modules.servicesLink.label}
              <ArrowUpRight className="fbl-btn-icon size-4" aria-hidden />
            </Link>
          </Reveal>
        </Shell>

        {/* 06 — What this is not */}
        <Shell id="honesty">
          <Kicker index="06" label={honesty.kicker} />
          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <h2 className={`fbl-display text-ink ${HEADING_SIZE}`}>{honesty.heading}</h2>
                </Reveal>
                <Reveal delay={120}>
                  <div className="fbl-card fbl-reg mt-8 p-6">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-accent/12 text-accent">
                      <ShieldCheck className="size-5" aria-hidden />
                    </span>
                    <h3 className="fbl-mono mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                      {honesty.isHeading}
                    </h3>
                    <p className="mt-3 text-[15px] text-slate">{honesty.isBody}</p>
                  </div>
                </Reveal>
              </div>
            </div>
            <ul className="lg:col-span-7">
              {honesty.nots.map((n, i) => (
                <li key={n.title} className={i > 0 ? "border-t border-white/7" : ""}>
                  <Reveal delay={i * 60}>
                    <div className="flex items-start gap-5 py-5">
                      <span className="fbl-mono pt-0.5 text-sm font-medium text-accent/60" aria-hidden>
                        ✕
                      </span>
                      <div>
                        <h3 className="font-bold text-ink">{n.title}</h3>
                        <p className="mt-1.5 text-[15px] text-slate">{n.body}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Shell>

        {/* 07 — FAQ (data shared with the live page) */}
        <Shell id="faq" deep>
          <Kicker index="07" label={faqKicker} />
          <Reveal>
            <h2 className={`fbl-display mt-8 max-w-3xl text-ink ${HEADING_SIZE}`}>
              Answers before you book.
            </h2>
          </Reveal>
          <div className="mt-10 max-w-3xl">
            {faq.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <details className={`fbl-faq group ${i > 0 ? "border-t border-white/7" : ""}`}>
                  <summary className="flex cursor-pointer list-none items-baseline gap-5 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                    <span className="fbl-mono text-sm font-medium text-accent/60" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-base font-bold text-ink sm:text-lg">
                      {item.q}
                    </span>
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
        </Shell>

        {/* 08 — Final CTA */}
        <CtaBand {...cta} />
      </div>
    </div>
  );
}
