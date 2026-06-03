"use client";

/**
 * System 2 — AI Phone Receptionist / Appointment Setter: interactive walkthrough.
 *
 * The PRIMARY channel is a phone call: an incoming/missed call is answered by
 * the AI receptionist, which talks with the caller (live transcript + call
 * timer), qualifies the job, and books on the call. SMS is a SECONDARY/
 * supporting channel shown as a confirmation follow-up after the call.
 *
 * Eight scenes: Incoming Call → AI Answers → Qualification → Lead Summary →
 * Booking on the Call → SMS Confirmation Follow-Up → Appointment Request →
 * Free Audit CTA (which also recaps the call). Card scenes reuse the System 1
 * card/tag/Note language. The closing scene links to the real /book page.
 *
 * Everything here is FICTIONAL example data — no real clients, results, or
 * guarantees, and the AI is shown as supporting (not replacing) the office
 * team. Motion is reduced-motion safe.
 */

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  PhoneIncoming,
  PhoneCall,
  ListChecks,
  ShieldCheck,
  CalendarClock,
  CalendarCheck,
  MessageSquareText,
  CheckCircle2,
  Sparkles,
  Check,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  MapPin,
  Clock,
  Droplets,
  User,
  Info,
  Mic,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";

const DISCLAIMER =
  "Fictional demo data used for example purposes. This walkthrough shows an example workflow and does not represent real client results.";
const MEETING_NOTE =
  "Zoom recommended. Phone calls available. In-person meetings available by request for qualified local businesses.";
const AUDIT_BODY =
  "Book a free lead-generation audit and we'll review your current call handling, missed-call process, lead intake, and booking flow to identify where opportunities may be slipping through.";

// Shown on the final scene — jumps to the next demo in the 3-part series.
const NEXT_DEMO = {
  eyebrow: "Next demo",
  title: "System 3: Local Visibility",
  href: "/demo/local-visibility",
};

type SceneKey =
  | "incoming"
  | "answer"
  | "qualify"
  | "summary"
  | "booking"
  | "sms"
  | "request"
  | "audit";

const SCENES: { n: number; key: SceneKey; label: string; icon: LucideIcon }[] = [
  { n: 1, key: "incoming", label: "Incoming Call", icon: PhoneIncoming },
  { n: 2, key: "answer", label: "AI Answers the Call", icon: PhoneCall },
  { n: 3, key: "qualify", label: "Qualification on the Call", icon: ListChecks },
  { n: 4, key: "summary", label: "Lead Summary", icon: ShieldCheck },
  { n: 5, key: "booking", label: "Booking on the Call", icon: CalendarClock },
  { n: 6, key: "sms", label: "SMS Confirmation Follow-Up", icon: MessageSquareText },
  { n: 7, key: "request", label: "Appointment Request Ready", icon: CalendarCheck },
  { n: 8, key: "audit", label: "Free Audit CTA", icon: Sparkles },
];

// Mirrors Button's primary variant, but as a real <button> so in-mock CTAs can
// advance the walkthrough instead of navigating.
const ctaBtn =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 min-h-12 text-base font-semibold tracking-tight transition-[color,background-color,box-shadow,transform] duration-200 ease-out-quint bg-accent text-white shadow-sm hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

// Spoken call transcript, tagged by the step at which each line appears. Call
// scenes render every line with step <= the current step, so the transcript
// grows as the call continues.
type Line = { step: 2 | 3 | 5; from: "ai" | "cust"; text: string };
const CALL_LINES: Line[] = [
  {
    step: 2,
    from: "ai",
    text: "Thanks for calling Valley Pro Plumbing, this is the front desk assistant. I can help get some details and find you a time. What's going on today?",
  },
  { step: 2, from: "cust", text: "My water heater is leaking from the bottom." },
  {
    step: 3,
    from: "ai",
    text: "Got it. Is the water still leaking right now, or has it been shut off?",
  },
  {
    step: 3,
    from: "cust",
    text: "We shut the water off, but we need someone out as soon as possible.",
  },
  {
    step: 3,
    from: "ai",
    text: "Understood — a leaking water heater with same-day urgency, so I'll flag this as high priority. And the service address is in the Hagerstown area?",
  },
  { step: 3, from: "cust", text: "Yes, Hagerstown, MD." },
  {
    step: 5,
    from: "ai",
    text: "The next step is a service estimate. I have tomorrow at 9:30 AM or 1:00 PM open — which works better for you?",
  },
  { step: 5, from: "cust", text: "9:30 AM works." },
  {
    step: 5,
    from: "ai",
    text: "Perfect. I'll mark tomorrow at 9:30 AM as your requested time, and I'll text you a confirmation right now so you have the details.",
  },
];

// Believable call-timer start (seconds) for each in-call step; it ticks up
// while the scene is open.
const CALL_START: Record<2 | 3 | 5, number> = { 2: 4, 3: 22, 5: 58 };

export default function AiReceptionistDemo() {
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
            <PhoneCall aria-hidden className="size-3.5 text-accent" />
            System 2 of 3 · Lead-Generation System Demo
          </span>

          <h1 className="mt-6 text-[clamp(1.9rem,5vw,3.5rem)] leading-[1.04] tracking-tight">
            System 2 Demo: AI Phone Receptionist / Appointment Setter
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate">
            See how an AI phone receptionist can answer the call, collect job
            details, qualify urgency, and move customers toward booking — with
            SMS follow-up to keep things on track.
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
    case "incoming":
      return <IncomingScene onNext={onNext} />;
    case "answer":
      return (
        <CallScene
          upTo={2}
          onNext={onNext}
          nextLabel="Continue Call"
          note="The AI receptionist answers in a natural voice, confirms the reason for the call, and starts gathering the details the business needs."
        />
      );
    case "qualify":
      return (
        <CallScene
          upTo={3}
          onNext={onNext}
          nextLabel="Confirm Lead Details"
          note="On the call, the AI asks basic qualifying questions to understand urgency, location, and service type."
        />
      );
    case "summary":
      return <SummaryScene onNext={onNext} />;
    case "booking":
      return (
        <CallScene
          upTo={5}
          onNext={onNext}
          nextLabel="Send SMS Confirmation"
          note="The AI receptionist helps move the qualified caller toward a real appointment before the call ends, instead of leaving them as a missed call."
        />
      );
    case "sms":
      return <SmsScene onNext={onNext} />;
    case "request":
      return <RequestScene onNext={onNext} />;
    case "audit":
      return <AuditScene />;
  }
}

/* ============================== Scene 1 ============================== */

function IncomingScene({ onNext }: { onNext: () => void }) {
  const rows = [
    { label: "Customer", value: "Sarah Miller", icon: User },
    { label: "Reason", value: "Water heater leaking", icon: Droplets },
    { label: "Urgency", value: "Same-day / urgent", icon: Clock, signal: true },
    { label: "Source", value: "Missed call" },
    { label: "Location", value: "Hagerstown, MD", icon: MapPin },
  ];

  return (
    <Stage>
      <div className="mx-auto grid w-full max-w-3xl gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-stretch">
        {/* Incoming-call phone screen */}
        <div className="flex flex-col items-center justify-center rounded-[1.75rem] border border-line bg-ink px-6 py-10 text-center text-white shadow-xl shadow-ink/20">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/60">
            Incoming call
          </span>
          <span className="mt-6 flex size-20 items-center justify-center rounded-full bg-white/10 text-2xl font-bold">
            SM
          </span>
          <p className="mt-4 text-xl font-bold">Sarah Miller</p>
          <p className="mt-1 text-sm text-white/60">mobile · Hagerstown, MD</p>

          <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-signal-soft px-3 py-1 text-xs font-semibold text-ink">
            <span className="size-1.5 rounded-full bg-signal" />
            Office line unanswered · after hours
          </span>

          <span className="mt-7 inline-flex animate-pulse items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white motion-reduce:animate-none">
            <PhoneIncoming aria-hidden className="size-4" />
            Ringing…
          </span>
        </div>

        {/* Context card */}
        <div className="flex flex-col rounded-xl border border-line bg-paper p-6 shadow-lg shadow-ink/5 sm:p-7">
          <h3 className="font-display text-lg font-bold text-ink">Call context</h3>
          <dl className="mt-4 divide-y divide-line overflow-hidden rounded-lg border border-line">
            {rows.map((r) => (
              <div
                key={r.label}
                className="flex items-center justify-between gap-4 px-4 py-3"
              >
                <dt className="flex items-center gap-2 text-sm text-slate">
                  {r.icon && (
                    <r.icon aria-hidden className="size-4 text-slate" />
                  )}
                  {r.label}
                </dt>
                <dd className="text-right text-sm font-semibold">
                  {r.signal ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-signal-soft px-2.5 py-1 text-ink">
                      <span className="size-1.5 rounded-full bg-signal" />
                      {r.value}
                    </span>
                  ) : (
                    <span className="text-ink">{r.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <button
            type="button"
            onClick={onNext}
            className={`${ctaBtn} mt-6 w-full`}
          >
            Answer with AI Receptionist
            <ArrowRight aria-hidden className="size-5" />
          </button>
        </div>
      </div>

      <Note>
        When a call would otherwise go unanswered, the AI phone receptionist can
        pick up right away instead of letting the lead go to voicemail.
      </Note>
    </Stage>
  );
}

/* =================== Scenes 2, 3, 5 — live call view =================== */

function CallScene({
  upTo,
  note,
  onNext,
  nextLabel,
}: {
  upTo: 2 | 3 | 5;
  note: string;
  onNext: () => void;
  nextLabel: string;
}) {
  return (
    <Stage>
      <CallView
        lines={CALL_LINES.filter((l) => l.step <= upTo)}
        startSeconds={CALL_START[upTo]}
      />
      <Note>{note}</Note>
      <div className="mx-auto w-full max-w-md">
        <button type="button" onClick={onNext} className={`${ctaBtn} w-full`}>
          {nextLabel}
          <ArrowRight aria-hidden className="size-5" />
        </button>
      </div>
    </Stage>
  );
}

/* ============================== Scene 4 ============================== */

function SummaryScene({ onNext }: { onNext: () => void }) {
  const rows: { label: string; value: string; signal?: boolean }[] = [
    { label: "Customer", value: "Sarah Miller" },
    { label: "Service", value: "Water heater repair or replacement" },
    { label: "Issue", value: "Leaking from bottom" },
    { label: "Urgency", value: "High", signal: true },
    { label: "Location", value: "Hagerstown, MD" },
    { label: "Water Shut Off", value: "Yes" },
    { label: "Captured Via", value: "Phone call" },
    { label: "Recommended Next Step", value: "Schedule service estimate" },
  ];
  const tags = [
    { label: "High Priority", signal: true },
    { label: "Local" },
    { label: "Service-Specific" },
    { label: "Ready for Appointment" },
  ];

  return (
    <Stage>
      <div className="mx-auto w-full max-w-2xl rounded-xl border border-line bg-paper p-6 shadow-lg shadow-ink/5 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <ShieldCheck aria-hidden className="size-5" />
          </span>
          <h3 className="font-display text-lg font-bold text-ink">
            Lead Summary Created
          </h3>
        </div>

        <dl className="divide-y divide-line overflow-hidden rounded-lg border border-line">
          {rows.map((r) => (
            <Row key={r.label} label={r.label} value={r.value} signal={r.signal} />
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

        <button type="button" onClick={onNext} className={`${ctaBtn} mt-7 w-full`}>
          Offer Appointment Times
          <ArrowRight aria-hidden className="size-5" />
        </button>
      </div>

      <Note>
        The call turns a basic inquiry into a cleaner lead summary the business
        can act on.
      </Note>
    </Stage>
  );
}

/* ===================== Scene 6 — SMS follow-up ====================== */

function SmsScene({ onNext }: { onNext: () => void }) {
  const sms: { from: "ai" | "cust"; text: string }[] = [
    {
      from: "ai",
      text: "Hi Sarah, this is Valley Pro Plumbing confirming your requested service estimate for tomorrow at 9:30 AM (water heater, Hagerstown). Reply YES to confirm or call us with any changes.",
    },
    { from: "cust", text: "Yes, that works. Thank you!" },
  ];

  return (
    <Stage>
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-line bg-paper shadow-xl shadow-ink/10">
        <div className="flex items-center gap-3 border-b border-line bg-mist px-4 py-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
            VP
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">
              Valley Pro Plumbing
            </p>
            <p className="flex items-center gap-1 text-xs text-slate">
              <MessageSquareText aria-hidden className="size-3" />
              Text message · after the call
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-mist/30 p-4">
          {sms.map((m, i) => {
            const ai = m.from === "ai";
            return (
              <div key={i} className={`flex ${ai ? "justify-start" : "justify-end"}`}>
                <p
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug ${
                    ai
                      ? "rounded-bl-sm border border-line bg-paper text-ink"
                      : "rounded-br-sm bg-accent text-white"
                  }`}
                >
                  {m.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <Note>
        SMS supports the call by sending a written recap and appointment details,
        so nothing gets lost after hanging up.
      </Note>

      <div className="mx-auto w-full max-w-md">
        <button type="button" onClick={onNext} className={`${ctaBtn} w-full`}>
          Show Appointment Status
          <ArrowRight aria-hidden className="size-5" />
        </button>
      </div>
    </Stage>
  );
}

/* ============================== Scene 7 ============================== */

function RequestScene({ onNext }: { onNext: () => void }) {
  return (
    <Stage>
      <div className="mx-auto w-full max-w-xl rounded-xl border border-accent/25 bg-accent/[0.04] p-6 shadow-lg shadow-ink/5 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-white">
            <CalendarCheck aria-hidden className="size-5" />
          </span>
          <h3 className="font-display text-lg font-bold text-ink">
            Appointment Request Ready
          </h3>
        </div>

        <dl className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-paper">
          <Row label="Customer" value="Sarah Miller" />
          <Row label="Service" value="Water heater estimate" />
          <Row label="Requested Time" value="Tomorrow at 9:30 AM" />
          <Row label="Urgency" value="High" signal />
          <Row label="Captured Via" value="Phone call + SMS confirmation" />
          <div className="flex items-center justify-between gap-4 px-4 py-3">
            <dt className="text-sm text-slate">Status</dt>
            <dd>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                <span className="size-1.5 rounded-full bg-accent" />
                Ready for confirmation
              </span>
            </dd>
          </div>
        </dl>

        <button type="button" onClick={onNext} className={`${ctaBtn} mt-7 w-full`}>
          View Final Summary
          <ArrowRight aria-hidden className="size-5" />
        </button>
      </div>

      <Note>
        The system is designed to help qualified callers reach the appointment
        stage faster while keeping the business informed.
      </Note>
    </Stage>
  );
}

/* ============================== Scene 8 ============================== */

function AuditScene() {
  const recap = [
    "Answered the call",
    "Confirmed service need",
    "Checked urgency",
    "Collected location",
    "Created lead summary",
    "Offered appointment times on the call",
    "Sent SMS confirmation",
    "Moved caller toward booking",
  ];

  return (
    <Stage>
      {/* Call recap */}
      <div className="mx-auto w-full max-w-2xl rounded-xl border border-line bg-paper p-6 shadow-lg shadow-ink/5 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <CheckCircle2 aria-hidden className="size-5" />
          </span>
          <h3 className="font-display text-lg font-bold text-ink">
            AI Phone Receptionist Call Complete
          </h3>
        </div>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {recap.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 rounded-lg border border-line bg-mist/40 px-3.5 py-2.5 text-sm font-medium text-ink"
            >
              <Check aria-hidden className="size-4 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Note>
        The AI phone receptionist supports the business by answering calls
        quickly, organizing lead details, and helping serious callers reach the
        next step — with SMS backing it up.
      </Note>

      {/* Free audit CTA */}
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-line bg-paper p-8 text-center shadow-xl shadow-ink/10 sm:p-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-mist px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate">
          <Sparkles aria-hidden className="size-3.5 text-accent" />
          Free Lead-Generation Audit
        </span>
        <h3 className="mt-5 font-display text-[clamp(1.6rem,4vw,2.5rem)] font-extrabold leading-[1.08] tracking-tight text-ink">
          Want to See Where Your Business May Be Losing Leads?
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

/** Labeled summary row; `signal` renders the value as an amber urgency chip. */
function Row({
  label,
  value,
  signal,
}: {
  label: string;
  value: string;
  signal?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3">
      <dt className="text-sm text-slate">{label}</dt>
      <dd className="text-right text-sm font-semibold">
        {signal ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-signal-soft px-2.5 py-1 text-ink">
            <span className="size-1.5 rounded-full bg-signal" />
            {value}
          </span>
        ) : (
          <span className="text-ink">{value}</span>
        )}
      </dd>
    </div>
  );
}

/**
 * In-call view: connected-call header with a live (ticking) timer and a spoken-
 * conversation transcript. The transcript is the primary surface for the call
 * scenes; lines are speaker-labeled rather than chat bubbles to read as a call.
 */
function CallView({
  lines,
  startSeconds,
}: {
  lines: Line[];
  startSeconds: number;
}) {
  const [secs, setSecs] = useState(startSeconds);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ top: el.scrollHeight, behavior: reduce ? "auto" : "smooth" });
  }, [lines.length]);

  const mm = Math.floor(secs / 60);
  const ss = String(secs % 60).padStart(2, "0");

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-[1.75rem] border border-line bg-paper shadow-xl shadow-ink/10">
      {/* Connected-call header (dark, phone-like) */}
      <div className="bg-ink px-5 py-4 text-white">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
            SM
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">Sarah Miller</p>
            <p className="flex items-center gap-1.5 text-xs text-white/60">
              <span className="size-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
              Connected · {mm}:{ss}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold">
            <PhoneCall aria-hidden className="size-3.5" />
            AI Receptionist
          </span>
        </div>
      </div>

      {/* Live transcript */}
      <div className="flex items-center gap-2 border-b border-line bg-mist px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate">
        <Mic aria-hidden className="size-3.5 text-accent" />
        Live transcript
      </div>
      <div
        ref={scrollRef}
        className="flex h-[22rem] flex-col gap-4 overflow-y-auto p-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {lines.map((l, i) => {
          const ai = l.from === "ai";
          return (
            <div key={i}>
              <p
                className={`mb-1 text-xs font-semibold uppercase tracking-wide ${
                  ai ? "text-accent" : "text-slate"
                }`}
              >
                {ai ? "AI Receptionist" : "Sarah Miller"}
              </p>
              <p
                className={`rounded-lg px-3.5 py-2.5 text-sm leading-snug ${
                  ai
                    ? "bg-accent/5 text-ink"
                    : "border border-line bg-mist/50 text-ink"
                }`}
              >
                {l.text}
              </p>
            </div>
          );
        })}
      </div>
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
      className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        on ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
