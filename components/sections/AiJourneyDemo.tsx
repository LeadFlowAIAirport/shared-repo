"use client";

import {
  useEffect,
  useLayoutEffect,
  useState,
  type CSSProperties,
} from "react";
import {
  TrendingUp,
  ArrowUpRight,
  Users,
  User,
  ListChecks,
  RefreshCw,
  Sparkles,
  Wrench,
  Headset,
  CalendarCheck,
  Database,
  Star,
  Zap,
  Check,
  type LucideIcon,
} from "lucide-react";

/**
 * Hero animation: what Atlas Leads does, in three short scenes that auto-rotate.
 *   1. Leads growth   — a mini dashboard trending up (more leads / booked calls).
 *   2. One workspace  — owner, team, and the Atlas Leads AI hub connected in one place.
 *   3. Systems install — practical AI systems being connected one by one.
 *
 * These are illustrative EXAMPLES, not real customer data or results (honesty
 * rules), and the card is labelled as such.
 *
 * Motion: when motion is allowed, each scene mounts fresh (its CSS animations
 * replay), holds, crossfades, then advances and loops. Under
 * `prefers-reduced-motion` (and during SSR / before hydration) a static
 * three-step storyboard is shown instead — the animated scenes never render
 * there, so nothing depends on motion. The full description is always exposed to
 * assistive tech via `sr-only`. Green is consistently the Atlas / AI side.
 */

type SceneMeta = {
  id: string;
  /** Header title + who's involved. */
  label: string;
  caption: string;
  Icon: LucideIcon;
  /** One-line summary for the reduced-motion storyboard. */
  summary: string;
  /** How long the scene holds before crossfading (ms). */
  durationMs: number;
};

const SCENES: SceneMeta[] = [
  {
    id: "leads",
    label: "Leads growth",
    caption: "More leads & booked calls",
    Icon: TrendingUp,
    summary:
      "A dashboard shows leads, booked calls, and qualified opportunities trending up as your systems go to work.",
    durationMs: 5200,
  },
  {
    id: "workspace",
    label: "One workspace",
    caption: "Owner, team & AI in sync",
    Icon: Users,
    summary:
      "Your business, team, and Atlas Leads AI systems organized in one clear place — tasks and follow-up included.",
    durationMs: 5200,
  },
  {
    id: "install",
    label: "AI systems installed",
    caption: "Built for your business",
    Icon: Wrench,
    summary:
      "We install and connect practical systems — receptionist, follow-up, booking, CRM, reviews, and automation.",
    durationMs: 5800,
  },
];

const CROSSFADE_MS = 560;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function AiJourneyDemo() {
  // "static" = SSR / pre-hydration / reduced-motion storyboard.
  // "play"   = animated auto-rotating player.
  const [mode, setMode] = useState<"static" | "play">("static");
  const [sceneIndex, setSceneIndex] = useState(0);
  // Bumped on every scene entry so the scene subtree remounts and its CSS
  // animations replay each cycle.
  const [tick, setTick] = useState(0);
  const [fading, setFading] = useState(false);

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

    let step = 0;

    async function run() {
      setMode("play");
      while (!ctrl.cancelled) {
        for (let s = 0; s < SCENES.length && !ctrl.cancelled; s++) {
          setFading(false);
          setSceneIndex(s);
          setTick(++step);
          await sleep(SCENES[s].durationMs);
          if (ctrl.cancelled) return;
          setFading(true); // crossfade out before the next scene
          await sleep(CROSSFADE_MS);
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

  const scene = SCENES[sceneIndex];

  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Soft glow behind the panel. */}
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-3xl bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent)_30%,transparent),transparent_75%)] blur-2xl"
      />

      {/* Full description for assistive tech — independent of animation state. */}
      <p className="sr-only">
        An illustration of what Atlas Leads does, in three parts. One, leads
        growth: a dashboard shows leads, booked calls, and qualified
        opportunities trending upward as the systems go to work. Two, one
        workspace: the owner, the team, and the Atlas Leads AI systems are
        connected in a single workspace, with tasks and follow-up organized in
        one place. Three, AI systems installed: Atlas Leads installs and connects
        practical business systems, including an AI receptionist, follow-up,
        booking, CRM, reviews, and automation.
      </p>

      <figure
        aria-hidden="true"
        className="glass-strong overflow-hidden rounded-2xl shadow-glow"
      >
        {/* Scene header: which scene, a one-line caption, and a 3-step dot row. */}
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
                <span className="text-[0.72rem] text-slate">
                  {scene.caption}
                </span>
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

        <div className="relative h-[24rem]">
          {mode === "static" ? (
            <Storyboard />
          ) : (
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                fading ? "opacity-0" : "opacity-100"
              }`}
            >
              <SceneBody key={tick} index={sceneIndex} />
            </div>
          )}
        </div>
      </figure>
    </div>
  );
}

/* --------------------------------- Scenes --------------------------------- */

function SceneBody({ index }: { index: number }) {
  if (index === 0) return <LeadsScene />;
  if (index === 1) return <WorkspaceScene />;
  return <InstallScene />;
}

/** Delay helper for staggered CSS animations. */
const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

/* --- Scene 1: Leads growth ------------------------------------------------ */

// Upward line for the chart (viewBox 0 0 300 170). Shared by the path and the
// glowing dots that travel along it.
const LEAD_LINE = "M10,150 L58,140 L104,126 L150,102 L198,84 L246,54 L292,28";
const LEAD_POINTS: [number, number][] = [
  [10, 150],
  [58, 140],
  [104, 126],
  [150, 102],
  [198, 84],
  [246, 54],
  [292, 28],
];

const LEAD_STATS = [
  { label: "Leads", pct: 88 },
  { label: "Booked Calls", pct: 58 },
  { label: "Qualified", pct: 40 },
];

function LeadsScene() {
  return (
    <div className="flex h-full flex-col p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">
            Qualified opportunities
          </p>
          <p className="text-[0.78rem] text-slate">Leads to booked calls</p>
        </div>
        <span
          className="al-rise inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent"
          style={delay(1.3)}
        >
          <TrendingUp aria-hidden className="size-3.5" />
          Trending up
        </span>
      </div>

      <div className="mt-2 flex flex-1 items-center">
        <svg
          viewBox="0 0 300 170"
          className="w-full"
          fill="none"
          role="presentation"
        >
          <defs>
            <linearGradient id="al-lead-area" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="var(--color-accent)"
                stopOpacity="0.35"
              />
              <stop
                offset="100%"
                stopColor="var(--color-accent)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {/* Faint baseline gridlines. */}
          {[46, 92, 138].map((y) => (
            <line
              key={y}
              x1="10"
              y1={y}
              x2="292"
              y2={y}
              stroke="var(--color-line)"
              strokeWidth="1"
              strokeDasharray="2 6"
              opacity="0.6"
            />
          ))}

          {/* Area under the line, fading in after the line draws. */}
          <path
            className="al-rise"
            style={delay(0.5)}
            d={`${LEAD_LINE} L292,162 L10,162 Z`}
            fill="url(#al-lead-area)"
          />

          {/* The upward line, drawing in left-to-right. The dash length lives on
              the element (attributes), and al-draw animates the offset to 0. */}
          <path
            id="al-lead-line"
            className="al-draw"
            d={LEAD_LINE}
            stroke="var(--color-accent)"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={460}
            strokeDashoffset={460}
          />

          {/* Data points fading in as the line reaches them (opacity/translate
              only — CSS scale on SVG would pivot around the wrong origin). */}
          {LEAD_POINTS.map(([x, y], i) => {
            const last = i === LEAD_POINTS.length - 1;
            const pointStyle: CSSProperties = last
              ? {
                  ...delay(1.4),
                  filter: "drop-shadow(0 0 5px var(--color-accent))",
                }
              : delay(0.3 + i * 0.18);
            return (
              <circle
                key={i}
                className="al-rise"
                style={pointStyle}
                cx={x}
                cy={y}
                r={last ? 5 : 3}
                fill="var(--color-accent)"
              />
            );
          })}

          {/* Glowing dots traveling along the line (SMIL — self-contained, only
              renders in play mode so it never fights reduced-motion). */}
          {[0, 1.2].map((begin, i) => (
            <circle
              key={i}
              r="3.2"
              fill="var(--color-brand-green)"
              style={{ filter: "drop-shadow(0 0 4px var(--color-accent))" }}
            >
              <animateMotion
                dur="2.4s"
                begin={`${begin}s`}
                repeatCount="indefinite"
                rotate="0"
                path={LEAD_LINE}
              />
            </circle>
          ))}
        </svg>
      </div>

      <div className="mt-3 space-y-2">
        {LEAD_STATS.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-2.5">
            <span className="w-24 shrink-0 text-xs font-medium text-slate">
              {stat.label}
            </span>
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <span
                className="al-fill block h-full rounded-full bg-grad-accent"
                style={{ width: `${stat.pct}%`, ...delay(1.5 + i * 0.18) }}
              />
            </span>
            <ArrowUpRight aria-hidden className="size-3.5 shrink-0 text-accent" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* --- Scene 2: One workspace ----------------------------------------------- */

type SatNode = {
  label: string;
  Icon: LucideIcon;
  x: number; // % left
  y: number; // % top
  d: number; // entrance delay (s)
};

const WORKSPACE_NODES: SatNode[] = [
  { label: "Owner", Icon: User, x: 18, y: 22, d: 0.35 },
  { label: "Team", Icon: Users, x: 82, y: 22, d: 0.5 },
  { label: "Tasks", Icon: ListChecks, x: 18, y: 80, d: 0.65 },
  { label: "Follow-up", Icon: RefreshCw, x: 82, y: 80, d: 0.8 },
];

function WorkspaceScene() {
  return (
    <div className="relative h-full p-5">
      {/* Connectors from the hub to each node — flowing dashes. */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
      >
        {WORKSPACE_NODES.map((n) => (
          <line
            key={n.label}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            strokeDasharray="3 4"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            className="al-dash"
            opacity="0.55"
          />
        ))}
      </svg>

      {/* Central Atlas Leads hub with a pulsing halo. */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden
          className="animate-hub-pulse absolute left-1/2 top-1/2 -z-10 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25"
        />
        <div
          className="al-pop glass-strong flex items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-glow ring-1 ring-accent/40"
          style={delay(0.1)}
        >
          <span className="flex size-7 items-center justify-center rounded-lg bg-grad-accent text-on-accent">
            <Sparkles aria-hidden className="size-4" />
          </span>
          <span className="whitespace-nowrap text-sm font-semibold text-ink">
            Atlas Leads
          </span>
        </div>
      </div>

      {/* Satellite nodes: owner, team, tasks, follow-up. */}
      {WORKSPACE_NODES.map((n) => (
        <div
          key={n.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div
            className="al-pop flex flex-col items-center gap-1"
            style={delay(n.d)}
          >
            <span className="glass flex size-10 items-center justify-center rounded-xl text-accent">
              <n.Icon aria-hidden className="size-5" />
            </span>
            <span className="whitespace-nowrap text-xs font-medium text-ink">
              {n.label}
            </span>
          </div>
        </div>
      ))}

      {/* Two small messages appearing along the connectors. */}
      <div
        className="al-pop absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: "34%", top: "37%", ...delay(1.1) }}
      >
        <span className="glass inline-flex items-center whitespace-nowrap rounded-xl rounded-bl-sm px-2.5 py-1 text-xs text-ink">
          New task
        </span>
      </div>
      <div
        className="al-pop absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: "66%", top: "63%", ...delay(1.5) }}
      >
        <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-xl rounded-br-sm bg-grad-accent px-2.5 py-1 text-xs font-medium text-on-accent">
          <Check aria-hidden className="size-3" />
          Follow-up sent
        </span>
      </div>
    </div>
  );
}

/* --- Scene 3: AI systems installed ---------------------------------------- */

const INSTALL_ROWS: { label: string; Icon: LucideIcon }[] = [
  { label: "AI Receptionist", Icon: Headset },
  { label: "Follow-up", Icon: RefreshCw },
  { label: "Booking", Icon: CalendarCheck },
  { label: "CRM", Icon: Database },
  { label: "Reviews", Icon: Star },
  { label: "Automation", Icon: Zap },
];

const INSTALL_STEP = 0.5; // seconds between each system connecting

function InstallScene() {
  return (
    <div className="flex h-full flex-col p-5">
      <div className="flex items-center gap-2">
        <span className="al-glow flex size-7 items-center justify-center rounded-lg bg-accent/15 text-accent">
          <Wrench aria-hidden className="size-4" />
        </span>
        <p className="text-sm font-semibold text-ink">
          Installing your AI systems
        </p>
      </div>

      <ul className="mt-4 space-y-2.5">
        {INSTALL_ROWS.map((row, i) => (
          <li
            key={row.label}
            className="al-rise flex items-center gap-3"
            style={delay(i * INSTALL_STEP)}
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent/12 text-accent">
              <row.Icon aria-hidden className="size-4" />
            </span>
            <span className="flex-1 truncate text-sm font-medium text-ink">
              {row.label}
            </span>
            <span className="h-1.5 w-16 shrink-0 overflow-hidden rounded-full bg-white/10">
              <span
                className="al-fill block h-full w-full rounded-full bg-grad-accent"
                style={delay(i * INSTALL_STEP + 0.2)}
              />
            </span>
          </li>
        ))}
      </ul>

      <div
        className="al-pop mt-auto flex items-center gap-2.5 rounded-xl border border-accent/30 bg-accent/10 px-3 py-2.5"
        style={delay(INSTALL_ROWS.length * INSTALL_STEP + 0.5)}
      >
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent">
          <Check aria-hidden className="size-3.5" />
        </span>
        <p className="text-sm font-medium text-ink">All systems connected</p>
      </div>
    </div>
  );
}

/* ------------------------- Reduced-motion fallback ------------------------ */

/** Static three-step storyboard (SSR + prefers-reduced-motion). */
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
