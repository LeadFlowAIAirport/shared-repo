"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  GraduationCap,
  MessageSquare,
  Cpu,
  Check,
  CalendarCheck,
  RefreshCw,
  BellRing,
  Sparkles,
} from "lucide-react";

/**
 * Hero animation: the Atlas Leads story in three short acts. It shows that we
 * TEACH the owner about AI, the AI then SERVES a customer, and the systems hand
 * the WIN back to the team — the "learn → implement → benefit" message.
 *
 * This is an illustrative EXAMPLE, not a record of any real customer or result
 * (honesty rules), and is labelled as such.
 *
 * Motion: when motion is allowed, each scene plays one row at a time (with a
 * short "typing" beat before a chat reply), auto-scrolls to the newest row,
 * holds, crossfades, then advances to the next scene and loops. Under
 * `prefers-reduced-motion` (and during SSR / before hydration) a static
 * three-step storyboard is shown instead. The full transcript is always exposed
 * to assistive tech via `sr-only`, so screen-reader content never depends on
 * animation state. Green is consistently the AI / Atlas side; neutral bubbles
 * are the human (owner or customer).
 */

type Row =
  | { kind: "bubble"; side: "in" | "out"; text: string }
  | { kind: "plan"; title: string; items: string[] }
  | { kind: "status"; icon: "check" | "sync" | "bell"; text: string }
  | { kind: "confirm"; icon: "calendar" | "sparkles"; title: string; sub: string };

type Scene = {
  id: string;
  label: string;
  caption: string;
  Icon: typeof GraduationCap;
  /** One-line summary for the reduced-motion storyboard. */
  summary: string;
  rows: Row[];
};

const SCENES: Scene[] = [
  {
    id: "learn",
    label: "Learn AI",
    caption: "You + Atlas Leads",
    Icon: GraduationCap,
    summary:
      "We map your business and show your team exactly where AI can save time.",
    rows: [
      {
        kind: "bubble",
        side: "in",
        text: "We keep hearing about AI, but we don't know how to actually use it.",
      },
      {
        kind: "bubble",
        side: "out",
        text: "We'll map your business, find the repetitive work, and show your team where AI saves time.",
      },
      {
        kind: "plan",
        title: "Your AI learning plan",
        items: ["Map your workflows", "Spot repetitive tasks", "Train the team"],
      },
    ],
  },
  {
    id: "work",
    label: "AI at work",
    caption: "Customer + your AI assistant",
    Icon: MessageSquare,
    summary:
      "Your AI assistant answers, qualifies the lead, and books the appointment.",
    rows: [
      { kind: "bubble", side: "in", text: "Can I get an appointment this week?" },
      { kind: "bubble", side: "out", text: "Yes. What service do you need?" },
      { kind: "bubble", side: "in", text: "I need an estimate." },
      {
        kind: "bubble",
        side: "out",
        text: "Got it. Here are two times that work for you.",
      },
      {
        kind: "confirm",
        icon: "calendar",
        title: "Appointment booked",
        sub: "Thu · 9:00 AM · Estimate",
      },
    ],
  },
  {
    id: "team",
    label: "Team wins",
    caption: "Your systems, running for you",
    Icon: Cpu,
    summary:
      "Lead booked, CRM updated, follow-up scheduled, without anyone lifting a finger.",
    rows: [
      { kind: "status", icon: "check", text: "New qualified lead booked" },
      { kind: "status", icon: "sync", text: "Customer details synced to CRM" },
      { kind: "status", icon: "bell", text: "Follow-up reminder scheduled" },
      {
        kind: "bubble",
        side: "in",
        text: "So AI handled all that, and we didn't miss the lead?",
      },
      {
        kind: "confirm",
        icon: "sparkles",
        title: "AI systems running in the background",
        sub: "Your team stays focused on the work",
      },
    ],
  },
];

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function AiJourneyDemo() {
  // "static" = SSR / pre-hydration / reduced-motion storyboard.
  // "play"   = animated single-scene player.
  const [mode, setMode] = useState<"static" | "play">("static");
  const [sceneIndex, setSceneIndex] = useState(0);
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState<null | "in" | "out">(null);
  const [fading, setFading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ctrl = {
      cancelled: false,
      timers: [] as ReturnType<typeof setTimeout>[],
    };

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => ctrl.timers.push(setTimeout(resolve, ms)));

    const stop = () => {
      ctrl.cancelled = true;
      ctrl.timers.forEach(clearTimeout);
      ctrl.timers = [];
    };

    async function run() {
      setMode("play");
      while (!ctrl.cancelled) {
        for (let s = 0; s < SCENES.length && !ctrl.cancelled; s++) {
          const scene = SCENES[s];
          setFading(false);
          setSceneIndex(s);
          setTyping(null);
          setVisible(0);
          await sleep(s === 0 ? 600 : 480);

          for (let i = 0; i < scene.rows.length && !ctrl.cancelled; i++) {
            const row = scene.rows[i];
            if (row.kind === "bubble") {
              setTyping(row.side);
              await sleep(row.side === "out" ? 950 : 750);
              if (ctrl.cancelled) return;
              setTyping(null);
              await sleep(120);
            } else {
              await sleep(460);
            }
            if (ctrl.cancelled) return;
            setVisible(i + 1);

            const readMs =
              row.kind === "bubble"
                ? Math.min(2200, 900 + row.text.length * 24)
                : row.kind === "confirm"
                  ? 1900
                  : 1500;
            await sleep(readMs);
          }

          if (ctrl.cancelled) return;
          setFading(true); // crossfade out before the next scene
          await sleep(620);
        }
      }
    }

    if (mq.matches) {
      setMode("static");
    } else {
      run();
    }

    const onChange = (e: MediaQueryListEvent) => {
      stop();
      if (e.matches) {
        setMode("static");
      } else {
        ctrl.cancelled = false;
        run();
      }
    };
    mq.addEventListener?.("change", onChange);

    return () => {
      stop();
      mq.removeEventListener?.("change", onChange);
    };
  }, []);

  // Keep the newest row in view as the scene grows (scrolls the card only).
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || mode !== "play") return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [visible, typing, sceneIndex, mode]);

  const scene = SCENES[sceneIndex];
  const shownRows = scene.rows.slice(0, visible);

  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Soft glow behind the panel. */}
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-3xl bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent)_30%,transparent),transparent_75%)] blur-2xl"
      />

      {/* Full transcript for assistive tech — independent of animation state. */}
      <p className="sr-only">
        An illustration of how Atlas Leads works, in three steps. Step one, Learn
        AI: the business owner says, “We keep hearing about AI, but we don’t know
        how to actually use it.” Atlas Leads replies, “We’ll map your business,
        find the repetitive work, and show your team where AI saves time.” Step
        two, AI at work: a customer asks, “Can I get an appointment this week?”
        The AI assistant answers, qualifies the request, and books an estimate
        for Thursday at 9:00 AM. Step three, Team wins: the systems log a new
        qualified lead booked, sync the customer details to the CRM, and schedule
        a follow-up reminder, all automatically, so the team never misses the
        lead.
      </p>

      <figure
        aria-hidden="true"
        className="glass-strong overflow-hidden rounded-2xl shadow-glow"
      >
        {/* Scene header: which act, who's talking, and a 3-step progress dot row. */}
        <figcaption className="border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <scene.Icon aria-hidden className="size-4" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-ink">
                  {scene.label}
                </span>
                <span className="text-[0.7rem] text-slate">{scene.caption}</span>
              </span>
            </span>
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-slate">
              Example
            </span>
          </div>
          {mode === "play" && (
            <div className="mt-3 flex items-center gap-1.5">
              {SCENES.map((s, i) => (
                <span
                  key={s.id}
                  className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                    i === sceneIndex
                      ? "bg-accent"
                      : i < sceneIndex
                        ? "bg-accent/40"
                        : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          )}
        </figcaption>

        {mode === "static" ? (
          <Storyboard />
        ) : (
          <div
            ref={scrollRef}
            className={`h-[24rem] space-y-3 overflow-y-auto p-4 transition-opacity duration-500 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              fading ? "opacity-0" : "opacity-100"
            }`}
          >
            {shownRows.map((row, i) => (
              <RowView key={`${scene.id}-${i}`} row={row} animate />
            ))}
            {typing && <TypingRow side={typing} />}
          </div>
        )}
      </figure>
    </div>
  );
}

/* ------------------------------ Row renderers ----------------------------- */

const statusIcons = { check: Check, sync: RefreshCw, bell: BellRing } as const;
const confirmIcons = { calendar: CalendarCheck, sparkles: Sparkles } as const;

function RowView({ row, animate }: { row: Row; animate: boolean }) {
  if (row.kind === "plan") {
    return (
      <Appear
        animate={animate}
        className="rounded-xl border border-accent/25 bg-accent/[0.06] p-3.5"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
          {row.title}
        </p>
        <ul className="mt-2.5 space-y-2">
          {row.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-ink">
              <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent">
                <Check aria-hidden className="size-3" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Appear>
    );
  }

  if (row.kind === "status") {
    const Icon = statusIcons[row.icon];
    return (
      <Appear
        animate={animate}
        className="flex items-center gap-3 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2.5"
      >
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent">
          <Icon aria-hidden className="size-4" />
        </span>
        <p className="text-sm font-medium text-ink">{row.text}</p>
        <Check aria-hidden className="ml-auto size-4 text-accent" />
      </Appear>
    );
  }

  if (row.kind === "confirm") {
    const Icon = confirmIcons[row.icon];
    return (
      <Appear
        animate={animate}
        className="flex items-center gap-3 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2.5"
      >
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent">
          <Icon aria-hidden className="size-4" />
        </span>
        <div className="text-sm">
          <p className="font-semibold text-ink">{row.title}</p>
          <p className="text-slate">{row.sub}</p>
        </div>
      </Appear>
    );
  }

  // bubble
  const out = row.side === "out";
  return (
    <Appear
      animate={animate}
      className={`flex ${out ? "justify-end" : "justify-start"}`}
    >
      <p
        className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-sm leading-snug ${
          out
            ? "rounded-br-sm bg-grad-accent text-on-accent"
            : "rounded-bl-sm border border-white/10 bg-white/[0.07] text-ink"
        }`}
      >
        {row.text}
      </p>
    </Appear>
  );
}

function TypingRow({ side }: { side: "in" | "out" }) {
  const out = side === "out";
  return (
    <Appear animate className={`flex ${out ? "justify-end" : "justify-start"}`}>
      <span
        className={`inline-flex items-center gap-1 rounded-2xl px-3.5 py-2.5 ${
          out
            ? "rounded-br-sm bg-grad-accent"
            : "rounded-bl-sm border border-white/10 bg-white/[0.07]"
        }`}
        aria-hidden
      >
        {[0, 1, 2].map((d) => (
          <span
            key={d}
            className={`size-1.5 rounded-full motion-safe:animate-pulse ${
              out ? "bg-on-accent/50" : "bg-ink/50"
            }`}
            style={{ animationDelay: `${d * 180}ms` }}
          />
        ))}
      </span>
    </Appear>
  );
}

/** Reduced-motion / SSR fallback: a static three-step storyboard. */
function Storyboard() {
  return (
    <ol className="space-y-3 p-4">
      {SCENES.map((s, i) => (
        <li
          key={s.id}
          className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3.5"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
            <s.Icon aria-hidden className="size-5" />
          </span>
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-ink">
              <span className="text-accent">{i + 1}.</span>
              {s.label}
            </p>
            <p className="mt-1 text-sm text-slate">{s.summary}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Fade + slight rise on mount. Instant (no transition) when `animate` is false. */
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
