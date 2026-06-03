"use client";

/**
 * System 1 — Ad Funnel Lead Generation: interactive, clickable walkthrough.
 *
 * Seven scenes (Ad → Landing → Form → Qualification → Booking → Captured →
 * Free Audit CTA). The in-mock CTAs ("Request Service", "Check Availability",
 * etc.) advance the demo; the agency CTAs ("Book a Free Lead-Generation Audit",
 * "Book My Free Audit") link to the real /book page.
 *
 * Everything here is FICTIONAL example data. No real clients, results, or
 * guarantees. Motion is reduced-motion safe (transitions collapse under
 * prefers-reduced-motion; content is never gated on JS state).
 */

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  Megaphone,
  MousePointerClick,
  ClipboardList,
  ShieldCheck,
  CalendarCheck,
  CheckCircle2,
  Sparkles,
  Globe,
  Check,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Droplets,
  MapPin,
  Clock,
  Phone,
  Mail,
  User,
  Wrench,
  Info,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";

const DISCLAIMER = "Fictional demo data used for example purposes.";
const MEETING_NOTE =
  "Zoom recommended. Phone calls available. In-person meetings available by request for qualified local businesses.";

// Shown on the final scene — jumps to the next demo in the 3-part series.
const NEXT_DEMO = {
  eyebrow: "Next demo",
  title: "System 2: AI Receptionist",
  href: "/demo/ai-receptionist",
};

type SceneKey =
  | "ad"
  | "landing"
  | "form"
  | "qualify"
  | "booking"
  | "captured"
  | "audit";

const SCENES: { n: number; key: SceneKey; label: string; icon: LucideIcon }[] = [
  { n: 1, key: "ad", label: "Ad", icon: Megaphone },
  { n: 2, key: "landing", label: "Landing Page", icon: MousePointerClick },
  { n: 3, key: "form", label: "Lead Form", icon: ClipboardList },
  { n: 4, key: "qualify", label: "Qualification", icon: ShieldCheck },
  { n: 5, key: "booking", label: "Booking CTA", icon: CalendarCheck },
  { n: 6, key: "captured", label: "Lead Captured", icon: CheckCircle2 },
  { n: 7, key: "audit", label: "Free Audit CTA", icon: Sparkles },
];

// Mirrors Button's primary variant, but as a real <button> so in-mock CTAs can
// advance the walkthrough instead of navigating.
const ctaBtn =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 min-h-12 text-base font-semibold tracking-tight transition-[color,background-color,box-shadow,transform] duration-200 ease-out-quint bg-accent text-white shadow-sm hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function AdFunnelDemo() {
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
            <Sparkles aria-hidden className="size-3.5 text-accent" />
            System 1 of 3 · Lead-Generation System Demo
          </span>

          <h1 className="mt-6 text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.03] tracking-tight">
            System 1 Demo: Ad Funnel Lead Generation
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate">
            See how a local service business can turn ad traffic into qualified
            lead opportunities using a focused landing page and lead capture
            flow.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4">
            <button type="button" onClick={() => go(0)} className={ctaBtn}>
              Start Demo
              <ArrowRight aria-hidden className="size-5" />
            </button>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-slate">
              <Info aria-hidden className="size-4 shrink-0 text-accent" />
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
                        {done ? (
                          <Check aria-hidden className="size-3.5" />
                        ) : (
                          s.n
                        )}
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
        <p className="flex items-center justify-center gap-2 text-center text-sm font-medium text-slate">
          <Info aria-hidden className="size-4 shrink-0 text-accent" />
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
    case "ad":
      return <AdScene onNext={onNext} />;
    case "landing":
      return <LandingScene onNext={onNext} />;
    case "form":
      return <FormScene onNext={onNext} />;
    case "qualify":
      return <QualifyScene onNext={onNext} />;
    case "booking":
      return <BookingScene onNext={onNext} />;
    case "captured":
      return <CapturedScene />;
    case "audit":
      return <AuditScene />;
  }
}

/* ============================== Scene 1 ============================== */

function AdScene({ onNext }: { onNext: () => void }) {
  return (
    <Stage>
      {/* Mock Facebook/Meta ad card */}
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-line bg-paper shadow-xl shadow-ink/10">
        <div className="flex items-center gap-3 px-4 pt-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
            VP
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">
              Valley Pro Plumbing
            </p>
            <p className="flex items-center gap-1 text-xs text-slate">
              Sponsored
              <span aria-hidden>·</span>
              <Globe aria-hidden className="size-3" />
            </p>
          </div>
        </div>

        <p className="px-4 py-3 text-sm leading-relaxed text-ink">
          Request a service estimate from Valley Pro Plumbing. Tell us what is
          going on, choose your urgency level, and get routed to the next step.
        </p>

        {/* Image placeholder */}
        <div className="relative flex h-44 items-center justify-center border-y border-line bg-mist">
          <div className="flex flex-col items-center gap-2 text-slate">
            <span className="flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Droplets aria-hidden className="size-7" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wide">
              Emergency water heater service
            </span>
          </div>
        </div>

        {/* Link/headline bar with CTA */}
        <div className="flex items-center justify-between gap-3 bg-mist/60 px-4 py-3">
          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate">
              valleyproplumbing.com
            </p>
            <p className="truncate text-sm font-bold text-ink">
              Water Heater Leaking? Get Fast Local Help.
            </p>
          </div>
          <button
            type="button"
            onClick={onNext}
            className="shrink-0 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-[color,background-color,box-shadow,transform] duration-200 ease-out-quint hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/25 active:translate-y-0 active:scale-[0.97] motion-reduce:transform-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Request Service
          </button>
        </div>
      </div>

      <Note>
        The ad is designed to send high-intent local homeowners to a focused
        service page instead of a generic homepage.
      </Note>
    </Stage>
  );
}

/* ============================== Scene 2 ============================== */

function LandingScene({ onNext }: { onNext: () => void }) {
  const bullets = [
    "Local service request flow",
    "Fast response-focused form",
    "Clear job details collected upfront",
    "Designed to reduce missed opportunities",
  ];

  return (
    <Stage>
      <BrowserFrame url="valleyproplumbing.com/water-heater-help">
        <div className="px-6 py-10 sm:px-10">
          <div className="mx-auto max-w-xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-signal-soft px-3 py-1 text-xs font-semibold text-ink">
              <Clock aria-hidden className="size-3.5" />
              Same-day requests welcome
            </span>
            <h3 className="mt-5 font-display text-[clamp(1.6rem,3.5vw,2.25rem)] font-extrabold leading-[1.08] tracking-tight text-ink">
              Emergency Water Heater Help in Hagerstown
            </h3>
            <p className="mt-4 text-base text-slate">
              Tell us what is happening and we&rsquo;ll help route your request
              to the right next step.
            </p>
            <button
              type="button"
              onClick={onNext}
              className={`${ctaBtn} mt-7`}
            >
              Check Availability
              <ArrowRight aria-hidden className="size-5" />
            </button>
          </div>

          <ul className="mx-auto mt-9 grid max-w-xl gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 rounded-lg border border-line bg-paper px-4 py-3 text-left text-sm font-medium text-ink"
              >
                <Check aria-hidden className="size-4 shrink-0 text-accent" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </BrowserFrame>

      <Note>
        Instead of sending ad traffic to a cluttered homepage, the funnel sends
        visitors to a focused page built around one service and one action.
      </Note>
    </Stage>
  );
}

/* ============================== Scene 3 ============================== */

function FormScene({ onNext }: { onNext: () => void }) {
  const [filled, setFilled] = useState(false);
  const fill = () => setFilled(true);

  return (
    <Stage>
      <div className="mx-auto w-full max-w-xl rounded-xl border border-line bg-paper p-6 shadow-lg shadow-ink/5 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <ClipboardList aria-hidden className="size-5" />
          </span>
          <div>
            <h3 className="font-display text-lg font-bold text-ink">
              Service Request
            </h3>
            <p className="text-sm text-slate">Valley Pro Plumbing</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field icon={User} label="Name" value="Sarah Miller" filled={filled} onFill={fill} />
          <Field icon={Phone} label="Phone" value="(555) 019-4821" filled={filled} onFill={fill} />
          <Field
            icon={Mail}
            label="Email"
            value="sarah.miller@example.com"
            className="sm:col-span-2"
            filled={filled}
            onFill={fill}
          />
          <Field
            icon={Wrench}
            label="Service Needed"
            value="Water heater repair or replacement"
            className="sm:col-span-2"
            filled={filled}
            onFill={fill}
          />
          <Field
            label="What is happening?"
            value="Water heater leaking from bottom"
            className="sm:col-span-2"
            filled={filled}
            onFill={fill}
          />
          <Field icon={Clock} label="Urgency" value="Same-day / urgent" filled={filled} onFill={fill} />
          <Field label="Preferred Time" value="Tomorrow morning" filled={filled} onFill={fill} />
          <Field
            icon={MapPin}
            label="Address / Service Area"
            value="Hagerstown, MD"
            className="sm:col-span-2"
            filled={filled}
            onFill={fill}
          />
        </div>

        <button
          type="button"
          onClick={onNext}
          className={`${ctaBtn} mt-7 w-full`}
        >
          Submit Service Request
        </button>
      </div>

      <Note>
        The form collects the information a business needs before calling back,
        instead of only capturing a name and phone number.
      </Note>
    </Stage>
  );
}

/* ============================== Scene 4 ============================== */

function QualifyScene({ onNext }: { onNext: () => void }) {
  const rows: { label: string; value: string; signal?: boolean }[] = [
    { label: "Customer", value: "Sarah Miller" },
    { label: "Service", value: "Water heater replacement" },
    { label: "Urgency", value: "High", signal: true },
    { label: "Location", value: "Hagerstown, MD" },
    { label: "Lead Source", value: "Facebook Ad" },
    { label: "Recommended Next Step", value: "Book service estimate" },
  ];
  const tags: { label: string; signal?: boolean }[] = [
    { label: "High Intent" },
    { label: "Urgent", signal: true },
    { label: "Local" },
    { label: "Service-Specific" },
    { label: "Ready for Next Step" },
  ];

  return (
    <Stage>
      <div className="mx-auto w-full max-w-2xl rounded-xl border border-line bg-paper p-6 shadow-lg shadow-ink/5 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <ShieldCheck aria-hidden className="size-5" />
          </span>
          <h3 className="font-display text-lg font-bold text-ink">
            Lead Qualification Summary
          </h3>
        </div>

        <dl className="divide-y divide-line overflow-hidden rounded-lg border border-line">
          {rows.map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between gap-4 px-4 py-3"
            >
              <dt className="text-sm text-slate">{r.label}</dt>
              <dd
                className={`text-right text-sm font-semibold ${
                  r.signal ? "" : "text-ink"
                }`}
              >
                {r.signal ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-signal-soft px-2.5 py-1 text-ink">
                    <span className="size-1.5 rounded-full bg-signal" />
                    {r.value}
                  </span>
                ) : (
                  r.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate">
            Lead tags
          </p>
          <ul className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t.label}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold ${
                  t.signal
                    ? "bg-signal-soft text-ink"
                    : "border border-accent/25 bg-accent/5 text-accent"
                }`}
              >
                {t.signal ? (
                  <span className="size-1.5 rounded-full bg-signal" />
                ) : (
                  <Check aria-hidden className="size-3.5" />
                )}
                {t.label}
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={onNext}
          className={`${ctaBtn} mt-7 w-full`}
        >
          Continue to Booking
          <ArrowRight aria-hidden className="size-5" />
        </button>
      </div>

      <Note>
        The system organizes the lead so the business knows what the customer
        needs, how urgent it is, and where the lead came from.
      </Note>
    </Stage>
  );
}

/* ============================== Scene 5 ============================== */

function BookingScene({ onNext }: { onNext: () => void }) {
  return (
    <Stage>
      <div className="mx-auto w-full max-w-md">
        {/* Booking card */}
        <div className="rounded-xl border border-line bg-paper p-6 shadow-lg shadow-ink/5 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <CalendarCheck aria-hidden className="size-5" />
            </span>
            <h3 className="font-display text-lg font-bold text-ink">
              Next Step: Schedule the Estimate
            </h3>
          </div>

          <dl className="space-y-3">
            <BookingRow label="Appointment Type" value="Service Estimate" />
            <BookingRow label="Suggested Time" value="Tomorrow at 9:30 AM" />
            <div className="flex items-center justify-between gap-4">
              <dt className="text-sm text-slate">Status</dt>
              <dd>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Ready to Book
                </span>
              </dd>
            </div>
          </dl>

          <button
            type="button"
            onClick={onNext}
            className={`${ctaBtn} mt-7 w-full`}
          >
            Book Appointment
          </button>
        </div>
      </div>

      <Note>
        The funnel is designed to move qualified prospects toward a real
        appointment instead of leaving them as cold form submissions.
      </Note>
    </Stage>
  );
}

/* ============================== Scene 6 ============================== */

function CapturedScene() {
  const rows = [
    { label: "Customer", value: "Sarah Miller" },
    { label: "Service", value: "Emergency water heater replacement" },
    { label: "Urgency", value: "High" },
    { label: "Source", value: "Facebook Ad" },
    { label: "Status", value: "Qualified Lead", highlight: true },
    { label: "Next Step", value: "Appointment request" },
  ];

  return (
    <Stage>
      <div className="mx-auto w-full max-w-xl rounded-xl border border-accent/25 bg-accent/[0.04] p-6 text-center shadow-lg shadow-ink/5 sm:p-8">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent text-white">
          <CheckCircle2 aria-hidden className="size-8" />
        </span>
        <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-ink">
          Lead Captured
        </h3>

        <dl className="mt-6 divide-y divide-line overflow-hidden rounded-lg border border-line bg-paper text-left">
          {rows.map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between gap-4 px-4 py-3"
            >
              <dt className="text-sm text-slate">{r.label}</dt>
              <dd
                className={`text-right text-sm font-semibold ${
                  r.highlight ? "text-accent" : "text-ink"
                }`}
              >
                {r.highlight ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1">
                    <Check aria-hidden className="size-3.5" />
                    {r.value}
                  </span>
                ) : (
                  r.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <Note>
        At this point, the business has a cleaner lead, better job details, and
        a clearer next step.
      </Note>
    </Stage>
  );
}

/* ============================== Scene 7 ============================== */

function AuditScene() {
  return (
    <Stage>
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-line bg-paper p-8 text-center shadow-xl shadow-ink/10 sm:p-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-mist px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate">
          <Sparkles aria-hidden className="size-3.5 text-accent" />
          Free Lead-Generation Audit
        </span>
        <h3 className="mt-5 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-[1.06] tracking-tight text-ink">
          See Where Your Business May Be Losing Leads
        </h3>
        <p className="mx-auto mt-5 max-w-xl text-base text-slate">
          Book a free lead-generation audit and we&rsquo;ll review your current
          website, ad flow, form process, and booking path to identify where
          opportunities may be slipping through.
        </p>
        <Link href="/book" className={`${ctaBtn} mt-8`}>
          Book My Free Audit
          <ArrowRight aria-hidden className="size-5" />
        </Link>
        <p className="mx-auto mt-5 max-w-md text-sm text-slate">
          {MEETING_NOTE}
        </p>
        <p className="mt-8 flex items-center justify-center gap-2 border-t border-line pt-6 text-sm font-medium text-slate">
          <Info aria-hidden className="size-4 shrink-0 text-accent" />
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

/**
 * Form field that starts BLANK. Fill state is owned by FormScene, so a click on
 * ANY field fills the whole form at once. Resets to blank each time Step 3 is
 * re-entered (the scene remounts via its `key`).
 */
function Field({
  label,
  value,
  icon: Icon,
  className = "",
  filled,
  onFill,
}: {
  label: string;
  value: string;
  icon?: LucideIcon;
  className?: string;
  filled: boolean;
  onFill: () => void;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate">
        {label}
      </label>
      <button
        type="button"
        onClick={onFill}
        aria-label={filled ? `${label}: ${value}` : "Fill in the form"}
        className={`flex min-h-11 w-full items-center gap-2.5 rounded-md border border-line bg-mist/50 px-3 py-2.5 text-left transition-colors ${
          filled ? "" : "cursor-pointer hover:border-accent/60 hover:bg-accent/[0.03]"
        }`}
      >
        {Icon && (
          <Icon
            aria-hidden
            className={`size-4 shrink-0 ${filled ? "text-slate" : "text-slate/40"}`}
          />
        )}
        {filled ? (
          <span className="text-sm font-medium text-ink">{value}</span>
        ) : (
          <span aria-hidden className="select-none text-sm text-transparent">
            &nbsp;
          </span>
        )}
      </button>
    </div>
  );
}

function BookingRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-sm text-slate">{label}</dt>
      <dd className="text-right text-sm font-semibold text-ink">{value}</dd>
    </div>
  );
}

/** Mock browser window chrome around landing-page content. */
function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-line bg-paper shadow-xl shadow-ink/10">
      <div className="flex items-center gap-3 border-b border-line bg-mist px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
          <span className="size-2.5 rounded-full bg-ink/15" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md bg-paper px-3 py-1.5 text-xs text-slate">
          <Globe aria-hidden className="size-3.5 shrink-0" />
          <span className="truncate">{url}</span>
        </div>
      </div>
      {children}
    </div>
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
      className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        on ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
