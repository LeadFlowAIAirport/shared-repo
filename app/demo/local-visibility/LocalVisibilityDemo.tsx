"use client";

/**
 * System 3 — Local Visibility System: interactive, clickable walkthrough.
 *
 * Scoped to THREE focus areas only: (1) Google Business Profile management,
 * (2) automated review capture, (3) local search opportunities. Six scenes:
 * Visibility Scan → Google Business Profile Management → Automated Review
 * Capture → Local Search Opportunities → Summary → Free Audit CTA. NO competitor
 * comparison, NO service-page audit, NO "what to fix" action plan — the profile
 * step is framed as the system KEEPING things maintained, not as a list of the
 * owner's shortcomings.
 *
 * Card/tag/Note language matches the System 1 and System 2 demos. The in-mock
 * CTAs advance the demo; the closing agency CTA links to the real /book page.
 *
 * Everything here is FICTIONAL example data. No real clients, results, ranking
 * claims, or guarantees — the Google Business Profile is a light, unbranded
 * mockup, and no quoted customer reviews are shown (only the outgoing review
 * request and summarized signals). Motion is reduced-motion safe.
 */

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ScanSearch,
  Building2,
  Star,
  Search,
  Sparkles,
  CheckCircle2,
  Check,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  MapPin,
  Phone,
  Globe,
  Wrench,
  MessageSquareText,
  Info,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";

const DISCLAIMER =
  "Fictional demo data used for example purposes. This walkthrough shows an example workflow and does not represent real client results.";
const MEETING_NOTE =
  "Zoom recommended. Phone calls available. In-person meetings available by request for qualified local businesses.";
const AUDIT_BODY =
  "Book a free lead-generation audit and we'll review your current local visibility, Google profile, review capture, and local search presence to identify where opportunities may be slipping through.";

// Shown on the final scene — loops back to the start of the 3-part series.
const NEXT_DEMO = {
  eyebrow: "Restart the series",
  title: "System 1: Ad Funnel Lead Generation",
  href: "/demo/ad-funnel",
};

type SceneKey =
  | "scan"
  | "profile"
  | "reviews"
  | "search"
  | "summary"
  | "audit";

const SCENES: { n: number; key: SceneKey; label: string; icon: LucideIcon }[] = [
  { n: 1, key: "scan", label: "Visibility Scan", icon: ScanSearch },
  { n: 2, key: "profile", label: "Google Business Profile Management", icon: Building2 },
  { n: 3, key: "reviews", label: "Automated Review Capture", icon: Star },
  { n: 4, key: "search", label: "Local Search Opportunities", icon: Search },
  { n: 5, key: "summary", label: "Summary", icon: CheckCircle2 },
  { n: 6, key: "audit", label: "Free Audit CTA", icon: Sparkles },
];

// Mirrors Button's primary variant, but as a real <button> so in-mock CTAs can
// advance the walkthrough instead of navigating.
const ctaBtn =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 min-h-12 text-base font-semibold tracking-tight transition-[color,background-color,box-shadow,transform] duration-200 ease-out-quint bg-accent text-white shadow-sm hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function LocalVisibilityDemo() {
  const [active, setActive] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);

  const scene = SCENES[active];
  const isFirst = active === 0;
  const isLast = active === SCENES.length - 1;

  function go(to: number, scroll = true) {
    const next = Math.max(0, Math.min(SCENES.length - 1, to));
    setActive(next);
    if (scroll) scrollToStage();
  }

  function scrollToStage() {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    stageRef.current?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <>
      {/* ----------------------------- HERO ----------------------------- */}
      <Section bg="paper">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate">
            <ScanSearch aria-hidden className="size-3.5 text-accent" />
            System 3 of 3 · Lead-Generation System Demo
          </span>

          <h1 className="mt-6 text-[clamp(1.9rem,5vw,3.5rem)] leading-[1.04] tracking-tight">
            System 3 Demo: Local Visibility System
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate">
            See how a local service business can strengthen its Google Business
            Profile, capture more reviews automatically, and reach more local
            search opportunities.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4">
            <button type="button" onClick={() => go(0)} className={ctaBtn}>
              Start Demo
              <ArrowRight aria-hidden className="size-5" />
            </button>
            <p className="mx-auto flex max-w-xl items-start gap-2 text-sm font-medium text-slate">
              <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
              {DISCLAIMER}
            </p>
          </div>
        </div>
      </Section>

      {/* ---------------------------- STAGE ----------------------------- */}
      <Section bg="mist">
        <div ref={stageRef} className="scroll-mt-24">
          {/* Scene navigation — clickable, numbered, easy to record. */}
          <nav aria-label="Demo steps" className="mb-10">
            <ol className="flex flex-wrap justify-center gap-2">
              {SCENES.map((s, i) => {
                const current = i === active;
                const done = i < active;
                const Icon = s.icon;
                return (
                  <li key={s.key}>
                    <button
                      type="button"
                      onClick={() => go(i, false)}
                      aria-current={current ? "step" : undefined}
                      className={`group inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition-all duration-200 ease-out-quint active:scale-[0.97] motion-reduce:transform-none ${
                        current
                          ? "border-accent bg-accent text-white shadow-sm shadow-accent/20"
                          : done
                            ? "border-accent/30 bg-accent/5 text-accent hover:border-accent/50"
                            : "border-line bg-paper text-slate hover:border-ink/20 hover:text-ink"
                      }`}
                    >
                      <span
                        className={`flex size-5 shrink-0 items-center justify-center rounded-full text-xs ${
                          current
                            ? "bg-white/20"
                            : done
                              ? "bg-accent/10"
                              : "bg-mist"
                        }`}
                      >
                        {done ? <Check aria-hidden className="size-3.5" /> : s.n}
                      </span>
                      <Icon aria-hidden className="size-4 max-sm:hidden" />
                      <span className="max-sm:hidden">{s.label}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>

          {/* Active scene title + flow position. */}
          <div className="mb-6 flex items-center justify-center gap-3 text-center">
            <span className="flex size-9 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
              {scene.n}
            </span>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate">
                Step {scene.n} of {SCENES.length}
              </p>
              <p className="font-display text-lg font-bold leading-tight text-ink">
                {scene.label}
              </p>
            </div>
          </div>

          {/* The stage panel. `key` remounts it on every change so it fades in. */}
          <StepFade key={active}>
            <SceneView sceneKey={scene.key} onNext={() => go(active + 1)} />
          </StepFade>

          {/* End of the walkthrough — jump to the next demo in the series. */}
          {isLast && (
            <div className="mx-auto mt-8 max-w-2xl">
              <Link
                href={NEXT_DEMO.href}
                className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-paper p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 motion-reduce:hover:translate-y-0"
              >
                <span className="min-w-0 text-left">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate">
                    {NEXT_DEMO.eyebrow}
                  </span>
                  <span className="mt-0.5 block font-display text-lg font-bold text-ink">
                    {NEXT_DEMO.title}
                  </span>
                </span>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-colors group-hover:bg-accent-hover">
                  <ArrowRight
                    aria-hidden
                    className="size-5 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </div>
          )}

          {/* Back / Next controls — sticky to the viewport bottom so they stay
              in reach on tall scenes without scrolling. */}
          <div className="sticky bottom-4 z-30 mx-auto mt-10 flex max-w-2xl items-center justify-between gap-4 rounded-xl border border-line bg-paper/90 px-3 py-2.5 shadow-lg shadow-ink/10 backdrop-blur">
            <button
              type="button"
              onClick={() => go(active - 1)}
              disabled={isFirst}
              className="inline-flex items-center gap-2 rounded-md px-4 min-h-11 text-sm font-semibold text-slate transition-[color,transform] duration-200 ease-out-quint hover:text-ink active:scale-95 motion-reduce:transform-none disabled:pointer-events-none disabled:opacity-40"
            >
              <ArrowLeft aria-hidden className="size-4" />
              Back
            </button>

            {active > 0 && (
              <button
                type="button"
                onClick={() => go(0)}
                className="inline-flex items-center gap-2 rounded-md px-4 min-h-11 text-sm font-semibold text-slate transition-[color,transform] duration-200 ease-out-quint hover:text-ink active:scale-95 motion-reduce:transform-none"
              >
                <RotateCcw aria-hidden className="size-4" />
                Restart
              </button>
            )}

            <button
              type="button"
              onClick={() => go(active + 1)}
              disabled={isLast}
              className="inline-flex items-center gap-2 rounded-md border-2 border-ink/15 px-5 min-h-11 text-sm font-semibold text-ink transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out-quint hover:border-ink/35 hover:bg-paper hover:-translate-y-0.5 hover:shadow-md hover:shadow-ink/5 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none disabled:pointer-events-none disabled:opacity-40"
            >
              Next
              <ArrowRight aria-hidden className="size-4" />
            </button>
          </div>
        </div>
      </Section>

      {/* Bottom disclaimer — always present regardless of active scene. */}
      <Section bg="paper" compact>
        <p className="mx-auto flex max-w-2xl items-start justify-center gap-2 text-center text-sm font-medium text-slate">
          <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
          {DISCLAIMER}
        </p>
      </Section>
    </>
  );
}

/* ============================ Scene router ============================ */

function SceneView({
  sceneKey,
  onNext,
}: {
  sceneKey: SceneKey;
  onNext: () => void;
}) {
  switch (sceneKey) {
    case "scan":
      return <ScanScene onNext={onNext} />;
    case "profile":
      return <ProfileScene onNext={onNext} />;
    case "reviews":
      return <ReviewsScene onNext={onNext} />;
    case "search":
      return <SearchScene onNext={onNext} />;
    case "summary":
      return <SummaryScene onNext={onNext} />;
    case "audit":
      return <AuditScene />;
  }
}

/* ============================== Scene 1 ============================== */

function ScanScene({ onNext }: { onNext: () => void }) {
  const rows: { label: string; value: string }[] = [
    { label: "Business", value: "Valley Pro Plumbing" },
    { label: "Industry", value: "Plumbing" },
    { label: "Location", value: "Hagerstown, MD" },
    { label: "Primary Service", value: "Water heater repair and replacement" },
    { label: "Service Area", value: "Hagerstown and nearby areas" },
    { label: "Goal", value: "Be easier to find when local customers search for service help" },
  ];

  return (
    <Stage>
      <div className="mx-auto w-full max-w-2xl rounded-xl border border-line bg-paper p-6 shadow-lg shadow-ink/5 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <ScanSearch aria-hidden className="size-5" />
          </span>
          <div>
            <h3 className="font-display text-lg font-bold text-ink">
              Local Visibility Scan Started
            </h3>
            <p className="flex items-center gap-1.5 text-sm text-slate">
              <span className="size-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
              Reviewing online presence
            </p>
          </div>
        </div>

        <dl className="divide-y divide-line overflow-hidden rounded-lg border border-line">
          {rows.map((r) => (
            <Row key={r.label} label={r.label} value={r.value} />
          ))}
        </dl>

        <button type="button" onClick={onNext} className={`${ctaBtn} mt-7 w-full`}>
          Manage Google Profile
          <ArrowRight aria-hidden className="size-5" />
        </button>
      </div>

      <Note>
        The system starts by reviewing how the business appears online when local
        customers search for service help.
      </Note>
    </Stage>
  );
}

/* ============================== Scene 2 ============================== */

function ProfileScene({ onNext }: { onNext: () => void }) {
  // Framed as what the system KEEPS maintained — positive status, not gaps.
  const managed: { label: string; status: string }[] = [
    { label: "Business name", status: "Maintained" },
    { label: "Primary category", status: "Plumber" },
    { label: "Service categories", status: "Maintained" },
    { label: "Service area", status: "Up to date" },
    { label: "Business description", status: "Maintained" },
    { label: "Photos", status: "Updated" },
    { label: "Call button", status: "In place" },
    { label: "Website link", status: "In place" },
    { label: "Appointment / quote link", status: "In place" },
    { label: "Recent posts / updates", status: "Active" },
  ];

  return (
    <Stage>
      <div className="mx-auto grid w-full max-w-3xl gap-6 md:grid-cols-2 md:items-start">
        {/* Light, unbranded Google Business Profile-style mockup */}
        <div className="overflow-hidden rounded-xl border border-line bg-paper shadow-lg shadow-ink/5">
          <div className="flex items-center justify-between gap-3 border-b border-line bg-mist px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate">
            <span className="flex items-center gap-1.5">
              <Building2 aria-hidden className="size-3.5 text-accent" />
              Business profile
            </span>
            <span className="text-slate/70">Example mockup</span>
          </div>
          <div className="p-5">
            <h3 className="font-display text-xl font-bold text-ink">
              Valley Pro Plumbing
            </h3>
            <p className="mt-0.5 text-sm text-slate">Plumber</p>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <span className="font-semibold text-ink">4.6</span>
              <Stars rating={4.6} />
              <span className="text-slate">(38)</span>
            </div>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate">
                <MapPin aria-hidden className="size-4 shrink-0 text-slate" />
                Hagerstown, MD · and nearby areas
              </div>
              <div className="flex items-center gap-2 text-slate">
                <Phone aria-hidden className="size-4 shrink-0 text-slate" />
                Call button
              </div>
              <div className="flex items-center gap-2 text-slate">
                <Globe aria-hidden className="size-4 shrink-0 text-slate" />
                valleyproplumbing.com
              </div>
            </dl>
            <div className="mt-4 flex gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-mist/60 px-3 py-1.5 text-xs font-semibold text-slate">
                <Phone aria-hidden className="size-3.5" />
                Call
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-mist/60 px-3 py-1.5 text-xs font-semibold text-slate">
                <Globe aria-hidden className="size-3.5" />
                Website
              </span>
            </div>
          </div>
        </div>

        {/* Management status — what the system keeps complete and current */}
        <div className="rounded-xl border border-line bg-paper p-5 shadow-lg shadow-ink/5 sm:p-6">
          <h3 className="font-display text-lg font-bold text-ink">
            Profile details maintained
          </h3>
          <p className="mt-1 text-sm text-slate">
            Kept complete, accurate, and current by the system.
          </p>
          <ul className="mt-4 divide-y divide-line overflow-hidden rounded-lg border border-line">
            {managed.map((m) => (
              <li
                key={m.label}
                className="flex items-center justify-between gap-3 px-3.5 py-2.5 text-sm"
              >
                <span className="flex items-center gap-2 text-ink">
                  <Check aria-hidden className="size-4 shrink-0 text-accent" />
                  {m.label}
                </span>
                <span className="shrink-0 rounded-full border border-accent/25 bg-accent/5 px-2.5 py-0.5 text-xs font-semibold text-accent">
                  {m.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto w-full max-w-md">
        <button type="button" onClick={onNext} className={`${ctaBtn} w-full`}>
          Set Up Review Capture
          <ArrowRight aria-hidden className="size-5" />
        </button>
      </div>

      <Note>
        The system helps keep the Google Business Profile complete, accurate, and
        up to date so local customers can clearly see what the business does, where
        it serves, and how to take the next step.
      </Note>
    </Stage>
  );
}

/* ============================== Scene 3 ============================== */

function ReviewsScene({ onNext }: { onNext: () => void }) {
  const flow: { label: string; icon: LucideIcon }[] = [
    { label: "Job completed", icon: Wrench },
    { label: "Review request sent", icon: MessageSquareText },
    { label: "One-tap review link", icon: Star },
    { label: "New reviews on profile", icon: CheckCircle2 },
  ];
  const signals: { label: string; value: string }[] = [
    { label: "Average Rating", value: "4.6" },
    { label: "Review Count", value: "38" },
    { label: "Recent Review Activity", value: "Increasing with automated requests" },
  ];
  const topics = ["Response time", "Professionalism", "Water heater work"];

  return (
    <Stage>
      <div className="mx-auto w-full max-w-3xl rounded-xl border border-line bg-paper p-6 shadow-lg shadow-ink/5 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Star aria-hidden className="size-5" />
          </span>
          <h3 className="font-display text-lg font-bold text-ink">
            Automated Review Capture
          </h3>
        </div>

        {/* Automated flow */}
        <ol className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
          {flow.map((f, i) => {
            const Icon = f.icon;
            return (
              <li key={f.label} className="flex items-center gap-3 sm:flex-1 sm:flex-col sm:text-center">
                <div className="flex w-full items-center gap-3 rounded-lg border border-line bg-mist/40 p-3 sm:flex-col sm:gap-2">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <span className="text-sm font-semibold text-ink">{f.label}</span>
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight
                    aria-hidden
                    className="size-4 shrink-0 rotate-90 text-slate/50 sm:rotate-0"
                  />
                )}
              </li>
            );
          })}
        </ol>

        {/* Example outgoing review request (NOT a testimonial) */}
        <div className="mt-6">
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-slate">
            Example review request
          </p>
          <div className="flex items-start gap-3 rounded-xl border border-line bg-mist/30 p-4">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              VP
            </span>
            <div className="min-w-0">
              <p className="flex items-center gap-1.5 text-xs text-slate">
                <MessageSquareText aria-hidden className="size-3" />
                Valley Pro Plumbing · automated message
              </p>
              <p className="mt-1.5 rounded-2xl rounded-tl-sm border border-line bg-paper px-3.5 py-2.5 text-sm leading-snug text-ink">
                Hi Sarah, thanks for choosing Valley Pro Plumbing! If you have a
                moment, we&rsquo;d appreciate a quick review of your water heater
                service: [review link]
              </p>
            </div>
          </div>
        </div>

        {/* Summarized signals (no quoted reviews) */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-lg border border-line bg-mist/40 px-5 py-4">
            <span className="font-display text-4xl font-extrabold tabular-nums text-ink">
              4.6
            </span>
            <div>
              <Stars rating={4.6} />
              <p className="mt-1 text-xs font-medium text-slate">
                Average rating · 38 reviews
              </p>
            </div>
          </div>
          <dl className="divide-y divide-line overflow-hidden rounded-lg border border-line">
            {signals.map((s) => (
              <Row key={s.label} label={s.label} value={s.value} />
            ))}
          </dl>
        </div>

        <div className="mt-5">
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-slate">
            Common review topics
          </p>
          <ul className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 text-sm font-semibold text-accent"
              >
                <Check aria-hidden className="size-3.5" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <button type="button" onClick={onNext} className={`${ctaBtn} mt-7 w-full`}>
          View Local Search Opportunities
          <ArrowRight aria-hidden className="size-5" />
        </button>
      </div>

      <Note>
        After a completed job, the system can automatically invite customers to
        leave a review, helping the business build more recent, service-specific
        reviews over time.
      </Note>
    </Stage>
  );
}

/* ============================== Scene 4 ============================== */

function SearchScene({ onNext }: { onNext: () => void }) {
  const searches: { q: string; tags: string[] }[] = [
    { q: "plumber near me", tags: ["High Intent", "Local"] },
    { q: "emergency plumber Hagerstown", tags: ["High Intent", "Local"] },
    { q: "water heater repair Hagerstown", tags: ["Service-Specific", "Local"] },
    { q: "water heater replacement near me", tags: ["Service-Specific", "Booking Opportunity"] },
    { q: "plumbing company Hagerstown", tags: ["Local", "Booking Opportunity"] },
    { q: "same-day plumbing service", tags: ["High Intent", "Booking Opportunity"] },
  ];

  return (
    <Stage>
      <div className="mx-auto w-full max-w-3xl rounded-xl border border-line bg-paper p-6 shadow-lg shadow-ink/5 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Search aria-hidden className="size-5" />
          </span>
          <h3 className="font-display text-lg font-bold text-ink">
            Local Search Opportunities
          </h3>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {searches.map((s) => (
            <li
              key={s.q}
              className="rounded-lg border border-line bg-mist/40 p-4"
            >
              <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Search aria-hidden className="size-4 shrink-0 text-slate" />
                &ldquo;{s.q}&rdquo;
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <li
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/5 px-2.5 py-1 text-xs font-semibold text-accent"
                  >
                    <Check aria-hidden className="size-3" />
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <button type="button" onClick={onNext} className={`${ctaBtn} mt-7 w-full`}>
          See Summary
          <ArrowRight aria-hidden className="size-5" />
        </button>
      </div>

      <Note>
        The system reviews the types of searches local customers may use when they
        need service, helping the business connect high-intent local searches to
        clear contact and booking paths.
      </Note>
    </Stage>
  );
}

/* ============================== Scene 5 ============================== */

function SummaryScene({ onNext }: { onNext: () => void }) {
  const bullets = [
    "Maintained the Google Business Profile",
    "Set up automated review capture",
    "Surfaced local search opportunities",
    "Connected local visibility to the lead capture system",
  ];

  return (
    <Stage>
      <div className="mx-auto w-full max-w-2xl rounded-xl border border-line bg-paper p-6 shadow-lg shadow-ink/5 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <CheckCircle2 aria-hidden className="size-5" />
          </span>
          <h3 className="font-display text-lg font-bold text-ink">
            Local Visibility Review Complete
          </h3>
        </div>

        <ul className="grid gap-2.5 sm:grid-cols-2">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 rounded-lg border border-line bg-mist/40 px-3.5 py-2.5 text-sm font-medium text-ink"
            >
              <Check aria-hidden className="size-4 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>

        <button type="button" onClick={onNext} className={`${ctaBtn} mt-7 w-full`}>
          Book a Free Lead-Generation Audit
          <ArrowRight aria-hidden className="size-5" />
        </button>
      </div>

      <Note>
        The local visibility system is designed to help service businesses become
        easier to find, easier to trust, and easier to contact when nearby
        customers need help.
      </Note>
    </Stage>
  );
}

/* ============================== Scene 6 ============================== */

function AuditScene() {
  return (
    <Stage>
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-line bg-paper p-8 text-center shadow-xl shadow-ink/10 sm:p-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-mist px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate">
          <Sparkles aria-hidden className="size-3.5 text-accent" />
          Free Lead-Generation Audit
        </span>
        <h3 className="mt-5 font-display text-[clamp(1.6rem,4vw,2.5rem)] font-extrabold leading-[1.08] tracking-tight text-ink">
          Want to See Where Your Business May Be Losing Local Visibility?
        </h3>
        <p className="mx-auto mt-5 max-w-xl text-base text-slate">{AUDIT_BODY}</p>
        <Link href="/book" className={`${ctaBtn} mt-8`}>
          Book My Free Audit
          <ArrowRight aria-hidden className="size-5" />
        </Link>
        <p className="mx-auto mt-5 max-w-md text-sm text-slate">{MEETING_NOTE}</p>
        <p className="mx-auto mt-8 flex max-w-xl items-start justify-center gap-2 border-t border-line pt-6 text-sm font-medium text-slate">
          <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
          {DISCLAIMER}
        </p>
      </div>
    </Stage>
  );
}

/* ============================ Shared bits ============================ */

/** Wraps a scene's mock + its explanatory note. */
function Stage({ children }: { children: ReactNode }) {
  return <div className="space-y-6">{children}</div>;
}

/** "What's happening" callout shown beneath each mock. */
function Note({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex max-w-2xl items-start gap-3 rounded-lg border-l-2 border-accent bg-paper px-4 py-3.5 text-left shadow-sm shadow-ink/5">
      <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate">
          What&rsquo;s happening
        </p>
        <p className="mt-0.5 text-sm leading-relaxed text-ink">{children}</p>
      </div>
    </div>
  );
}

/** Labeled summary row. */
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3">
      <dt className="text-sm text-slate">{label}</dt>
      <dd className="text-right text-sm font-semibold text-ink">{value}</dd>
    </div>
  );
}

/** Star row for a fictional summarized rating (no quoted reviews). */
function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.round(rating);
        return (
          <Star
            key={i}
            className={`size-4 ${
              filled ? "fill-signal text-signal" : "fill-line text-line"
            }`}
          />
        );
      })}
    </span>
  );
}

/**
 * Fades/rises the active scene on mount. The parent gives this a `key` per
 * scene, so a scene change remounts it fresh at opacity-0, then a single rAF
 * flips it on. Under prefers-reduced-motion the transition is removed (Tailwind
 * `motion-reduce:` variants), so the scene appears instantly.
 */
function StepFade({ children }: { children: ReactNode }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        on ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
