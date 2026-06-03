"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { PhoneMissed, Check, CalendarCheck } from "lucide-react";

/**
 * Illustrative mock of missed-call text-back → booking. This is an EXAMPLE of
 * how the system responds, not a record of any real customer or result — it is
 * labeled as such to stay within the honesty rules.
 *
 * Motion: when motion is allowed, the thread plays out one message at a time
 * (with a brief "typing" beat before each reply), auto-scrolls to the newest
 * message, lands on the "Appointment booked" confirmation, then loops. Under
 * `prefers-reduced-motion` the full conversation is shown statically with no
 * loop. The full transcript is always exposed to assistive tech via `sr-only`,
 * so screen-reader content never depends on animation state.
 */

type Step =
  | { kind: "event" }
  | { kind: "bubble"; side: "in" | "out"; text: string }
  | { kind: "confirm" };

const STEPS: Step[] = [
  { kind: "event" },
  {
    kind: "bubble",
    side: "out",
    text: "Sorry we missed you! This is [Business]. What can we help with?",
  },
  {
    kind: "bubble",
    side: "in",
    text: "Water heater’s leaking. Can someone come out?",
  },
  {
    kind: "bubble",
    side: "out",
    text: "Yes — we can do tomorrow morning. Want the 9:00 AM slot?",
  },
  { kind: "bubble", side: "in", text: "Yes please." },
  { kind: "confirm" },
];

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";

// Run the start/reset before paint on the client (no flash of the full thread),
// while falling back to a plain effect during SSR to avoid the hydration warning.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function CallDemo() {
  // SSR / pre-hydration / no-JS render the complete conversation.
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(STEPS.length);
  const [typing, setTyping] = useState<null | "in" | "out">(null);
  const [fading, setFading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ctrl = { cancelled: false, timers: [] as ReturnType<typeof setTimeout>[] };

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => ctrl.timers.push(setTimeout(resolve, ms)));

    const stop = () => {
      ctrl.cancelled = true;
      ctrl.timers.forEach(clearTimeout);
      ctrl.timers = [];
    };

    const showStatic = () => {
      setReduced(true);
      setFading(false);
      setTyping(null);
      setVisible(STEPS.length);
    };

    async function run() {
      while (!ctrl.cancelled) {
        setFading(false);
        setTyping(null);
        setVisible(0);
        await sleep(650);

        for (let i = 0; i < STEPS.length && !ctrl.cancelled; i++) {
          const step = STEPS[i];

          if (step.kind === "bubble") {
            setTyping(step.side);
            await sleep(step.side === "out" ? 1000 : 800);
            if (ctrl.cancelled) return;
            setTyping(null);
            await sleep(140);
          } else if (step.kind === "confirm") {
            await sleep(550);
          }
          if (ctrl.cancelled) return;

          setVisible(i + 1);

          const readMs =
            step.kind === "confirm"
              ? 3800
              : step.kind === "bubble"
                ? Math.min(2300, 950 + step.text.length * 26)
                : 1100;
          await sleep(readMs);
        }

        if (ctrl.cancelled) return;
        setFading(true); // gentle crossfade before looping back
        await sleep(650);
      }
    }

    if (mq.matches) {
      showStatic();
    } else {
      setReduced(false);
      run();
    }

    const onChange = (e: MediaQueryListEvent) => {
      stop();
      if (e.matches) {
        showStatic();
      } else {
        ctrl.cancelled = false;
        setReduced(false);
        run();
      }
    };
    mq.addEventListener?.("change", onChange);

    return () => {
      stop();
      mq.removeEventListener?.("change", onChange);
    };
  }, []);

  // Keep the latest message in view as the thread grows (scrolls the card only).
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || reduced) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [visible, typing, reduced]);

  const shown = reduced ? STEPS : STEPS.slice(0, visible);

  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Soft amber glow behind the panel — the "signal" color, used sparingly. */}
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-3xl bg-signal-soft/60 blur-2xl"
      />

      {/* Full transcript for assistive tech — independent of animation state. */}
      <p className="sr-only">
        Example of an after-hours missed-call text-back. Missed call at 7:42 PM
        while you were on a job. The business automatically texts: “Sorry we
        missed you! This is [Business]. What can we help with?” The customer
        replies: “Water heater’s leaking. Can someone come out?” The business
        answers: “Yes — we can do tomorrow morning. Want the 9:00 AM slot?” The
        customer says: “Yes please.” Appointment booked for tomorrow at 9:00 AM.
      </p>

      <figure
        aria-hidden="true"
        className="overflow-hidden rounded-xl border border-line bg-paper shadow-xl shadow-ink/10"
      >
        <figcaption className="flex items-center justify-between border-b border-line bg-mist px-4 py-3">
          <span className="text-sm font-semibold">After-hours lead</span>
          <span className="rounded-full bg-ink px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Example
          </span>
        </figcaption>

        <div
          ref={scrollRef}
          className={`space-y-3 p-4 transition-opacity duration-500 ${
            fading ? "opacity-0" : "opacity-100"
          } ${
            reduced
              ? ""
              : "h-[22rem] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          }`}
        >
          {shown.map((step, i) => (
            <StepView key={i} step={step} animate={!reduced} />
          ))}
          {typing && <TypingRow side={typing} />}
        </div>
      </figure>
    </div>
  );
}

function StepView({ step, animate }: { step: Step; animate: boolean }) {
  if (step.kind === "event") {
    return (
      <Appear
        animate={animate}
        className="flex items-center gap-3 rounded-lg bg-signal-soft px-3 py-2.5"
      >
        <PhoneMissed aria-hidden className="size-5 shrink-0 text-ink" />
        <div className="text-sm">
          <p className="font-semibold text-ink">Missed call · 7:42 PM</p>
          <p className="text-ink/70">You were on a job</p>
        </div>
      </Appear>
    );
  }

  if (step.kind === "confirm") {
    return (
      <Appear
        animate={animate}
        className="flex items-center gap-3 rounded-lg border border-accent/30 bg-accent/5 px-3 py-2.5"
      >
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-white">
          <CalendarCheck aria-hidden className="size-4" />
        </span>
        <div className="text-sm">
          <p className="font-semibold text-ink">Appointment booked</p>
          <p className="text-slate">Tomorrow · 9:00 AM</p>
        </div>
        <ScaleIn animate={animate} delay={260} className="ml-auto">
          <Check aria-hidden className="size-5 text-accent" />
        </ScaleIn>
      </Appear>
    );
  }

  const out = step.side === "out";
  return (
    <Appear
      animate={animate}
      className={`flex ${out ? "justify-end" : "justify-start"}`}
    >
      <p
        className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-sm leading-snug ${
          out
            ? "rounded-br-sm bg-accent text-white"
            : "rounded-bl-sm bg-mist text-ink"
        }`}
      >
        {step.text}
      </p>
    </Appear>
  );
}

function TypingRow({ side }: { side: "in" | "out" }) {
  const out = side === "out";
  return (
    <Appear
      animate
      className={`flex ${out ? "justify-end" : "justify-start"}`}
    >
      <span
        className={`inline-flex items-center gap-1 rounded-2xl px-3.5 py-2.5 ${
          out ? "rounded-br-sm bg-accent" : "rounded-bl-sm bg-mist"
        }`}
        aria-hidden
      >
        {[0, 1, 2].map((d) => (
          <span
            key={d}
            className={`size-1.5 rounded-full motion-safe:animate-pulse ${
              out ? "bg-white/70" : "bg-ink/40"
            }`}
            style={{ animationDelay: `${d * 180}ms` }}
          />
        ))}
      </span>
    </Appear>
  );
}

/** Fade + slight rise on mount. No-op (instant, no transition) when `animate` is false. */
function Appear({
  children,
  className = "",
  animate,
}: {
  children: ReactNode;
  className?: string;
  animate: boolean;
}) {
  const [on, setOn] = useState(!animate);

  useEffect(() => {
    if (!animate) return;
    const id = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  if (!animate) return <div className={className}>{children}</div>;

  return (
    <div
      className={`transition-all duration-500 ${EASE} ${
        on ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/** Subtle scale-in (used for the confirmation checkmark). Instant when not animating. */
function ScaleIn({
  children,
  className = "",
  animate,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  animate: boolean;
  delay?: number;
}) {
  const [on, setOn] = useState(!animate);

  useEffect(() => {
    if (!animate) return;
    const id = setTimeout(() => requestAnimationFrame(() => setOn(true)), delay);
    return () => clearTimeout(id);
  }, [animate, delay]);

  if (!animate) return <span className={className}>{children}</span>;

  return (
    <span
      className={`inline-flex transition-transform duration-300 ${EASE} ${
        on ? "scale-100" : "scale-0"
      } ${className}`}
    >
      {children}
    </span>
  );
}
