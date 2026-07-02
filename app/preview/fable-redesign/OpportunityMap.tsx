import { hero } from "./content";

/* The hero "opportunity map" — a stylized system diagram of the lead capture +
   follow-up flow. Pure SVG + CSS animation (motion-gated in preview.css), no
   client JS. Illustrative only: it shows what the system does, not results. */

type MapNodeData = {
  label: string;
  sub: string;
  emphasis?: boolean;
};

const SOURCES: MapNodeData[] = [
  { label: "MISSED CALL", sub: "while you're on a job" },
  { label: "WEB FORM", sub: "from your website" },
  { label: "AFTER-HOURS TEXT", sub: "9:42 PM" },
];

const OUTCOMES: MapNodeData[] = [
  { label: "INSTANT REPLY", sub: "answered in seconds" },
  { label: "LEAD QUALIFIED", sub: "details captured" },
  { label: "APPOINTMENT BOOKED", sub: "on your calendar", emphasis: true },
];

const NODE_W = 168;
const NODE_H = 56;
const ROW_Y = [66, 222, 378];
const HUB = { x: 320, y: 250 };

// Curves from each source's right edge into the hub, and hub out to outcomes.
const IN_PATHS = [
  `M192,${ROW_Y[0] + 28} C246,${ROW_Y[0] + 28} 250,${HUB.y} 276,${HUB.y}`,
  `M192,${ROW_Y[1] + 28} C224,${ROW_Y[1] + 28} 250,${HUB.y} 276,${HUB.y}`,
  `M192,${ROW_Y[2] + 28} C246,${ROW_Y[2] + 28} 250,${HUB.y} 276,${HUB.y}`,
];
const OUT_PATHS = [
  `M364,${HUB.y} C390,${HUB.y} 382,${ROW_Y[0] + 28} 428,${ROW_Y[0] + 28}`,
  `M364,${HUB.y} C390,${HUB.y} 396,${ROW_Y[1] + 28} 428,${ROW_Y[1] + 28}`,
  `M364,${HUB.y} C390,${HUB.y} 382,${ROW_Y[2] + 28} 428,${ROW_Y[2] + 28}`,
];

/* Compact mobile variant — one short label per node, no sub-labels or icons,
   sized so text renders ~10px+ at a 375px-wide phone. */
const MOBILE_SOURCES = ["MISSED CALL", "WEB FORM", "AFTER-HOURS"];
const MOBILE_OUTCOMES = [
  { label: "FAST REPLY", emphasis: false },
  { label: "QUALIFIED", emphasis: false },
  { label: "BOOKED", emphasis: true },
];
const MOBILE_ROW_Y = [24, 143, 262];
const MOBILE_IN_PATHS = [
  "M122,46 C148,46 148,165 158,165",
  "M122,165 C134,165 146,165 158,165",
  "M122,284 C148,284 148,165 158,165",
];
const MOBILE_OUT_PATHS = [
  "M222,165 C232,165 232,46 258,46",
  "M222,165 C234,165 246,165 258,165",
  "M222,165 C232,165 232,284 258,284",
];

function MapNode({ x, y, node, outcome }: { x: number; y: number; node: MapNodeData; outcome?: boolean }) {
  const cx = x + 26;
  const cy = y + 28;
  return (
    <g>
      {node.emphasis && (
        <rect
          x={x - 4}
          y={y - 4}
          width={NODE_W + 8}
          height={NODE_H + 8}
          rx={17}
          fill="none"
          style={{ stroke: "color-mix(in oklab, var(--color-accent) 22%, transparent)" }}
        />
      )}
      <rect
        x={x}
        y={y}
        width={NODE_W}
        height={NODE_H}
        rx={14}
        fill="rgba(255,255,255,0.04)"
        style={{
          stroke: node.emphasis
            ? "color-mix(in oklab, var(--color-accent) 55%, transparent)"
            : "rgba(255,255,255,0.13)",
        }}
      />
      <circle cx={cx} cy={cy} r={11.5} fill="none" style={{ stroke: "color-mix(in oklab, var(--color-accent) 40%, transparent)" }} />
      {outcome ? (
        <path
          d={`M${cx - 5},${cy} l3.5,3.5 l6.5,-7`}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <circle cx={cx} cy={cy} r={3.5} fill="var(--color-accent)" />
      )}
      <text
        x={x + 46}
        y={y + 25}
        className="fbl-mono"
        fontSize={10}
        letterSpacing={0.4}
        fill="var(--color-ink)"
        opacity={0.92}
      >
        {node.label}
      </text>
      <text x={x + 46} y={y + 41} className="fbl-mono" fontSize={9.5} fill="var(--color-slate)" opacity={0.85}>
        {node.sub}
      </text>
    </g>
  );
}

/** Topographic contour lines — the cartographic garnish used across the preview. */
export function Topo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 480" fill="none" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="1">
        <path d="M300,180 C340,178 374,206 374,240 C374,276 338,301 300,302 C260,303 226,275 226,240 C226,206 262,182 300,180 Z" />
        <path d="M300,140 C365,136 422,184 426,240 C430,299 366,343 300,345 C232,347 174,301 174,240 C174,181 236,144 300,140 Z" />
        <path d="M300,96 C392,90 472,158 478,240 C484,326 394,389 300,391 C205,393 122,331 118,240 C114,153 210,102 300,96 Z" />
        <path d="M300,52 C418,44 522,133 530,240 C538,352 420,435 300,437 C179,439 66,356 62,240 C58,128 184,60 300,52 Z" />
        <path d="M38,430 C120,388 184,446 264,414 C346,381 424,442 562,398" />
      </g>
    </svg>
  );
}

export default function OpportunityMap() {
  return (
    <div className="fbl-card fbl-reg w-full max-w-[34rem] p-4 sm:p-5">
      {/* Panel header */}
      <div className="flex items-center justify-between gap-3 px-1 pb-3">
        <p className="fbl-mono text-[10px] uppercase tracking-[0.18em] text-slate/80">
          System view — lead capture + follow-up
        </p>
        <span className="fbl-mono rounded-full border border-white/12 px-2.5 py-0.5 text-[9.5px] uppercase tracking-[0.14em] text-slate/60">
          Simulated
        </span>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/7 bg-surface-deep/60">
        <Topo className="pointer-events-none absolute inset-0 h-full w-full text-accent opacity-[0.06]" />
        <div className="fbl-grid-dots pointer-events-none absolute inset-0 opacity-30" aria-hidden />

        {/* Compact mobile diagram — same concept, fewer words, larger labels
            relative to the viewBox so text stays readable at 375px wide. */}
        <svg
          viewBox="0 0 380 330"
          className="relative block h-auto w-full sm:hidden"
          role="img"
          aria-label="Diagram: a missed call, a web form, and an after-hours text flow into the Atlas AI hub, which replies fast, qualifies the lead, and books the appointment."
        >
          {[...MOBILE_IN_PATHS, ...MOBILE_OUT_PATHS].map((d, i) => (
            <g key={d}>
              <path d={d} fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth={1.4} />
              <path
                d={d}
                fill="none"
                className="fbl-map-path"
                stroke="var(--color-accent)"
                strokeWidth={1.4}
                opacity={0.75}
                style={{ animationDelay: `${(i % 3) * 0.45}s` }}
              />
            </g>
          ))}

          <circle className="fbl-hub-ring" cx={190} cy={165} r={34} fill="none" stroke="var(--color-accent)" strokeWidth={1} />
          <circle
            cx={190}
            cy={165}
            r={32}
            fill="var(--color-surface-deep)"
            style={{ stroke: "color-mix(in oklab, var(--color-accent) 50%, transparent)" }}
            strokeWidth={1.5}
          />
          <g transform="translate(174.8, 149.8) scale(0.95)">
            <path
              d="M5 27 L16 5 L27 27"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth={3.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M10.3 16.5 H21.7" fill="none" stroke="var(--color-accent)" strokeWidth={3.4} strokeLinecap="round" />
          </g>
          <text
            x={190}
            y={218}
            textAnchor="middle"
            className="fbl-mono"
            fontSize={10.5}
            letterSpacing={2.5}
            fill="var(--color-accent)"
          >
            ATLAS AI
          </text>

          {MOBILE_SOURCES.map((label, i) => (
            <g key={label}>
              <rect x={10} y={MOBILE_ROW_Y[i]} width={112} height={44} rx={12} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.13)" />
              <text
                x={66}
                y={MOBILE_ROW_Y[i] + 27}
                textAnchor="middle"
                className="fbl-mono"
                fontSize={11.5}
                letterSpacing={0.3}
                fill="var(--color-ink)"
                opacity={0.92}
              >
                {label}
              </text>
            </g>
          ))}
          {MOBILE_OUTCOMES.map((o, i) => (
            <g key={o.label}>
              <rect
                x={258}
                y={MOBILE_ROW_Y[i]}
                width={112}
                height={44}
                rx={12}
                fill="rgba(255,255,255,0.04)"
                style={{
                  stroke: o.emphasis
                    ? "color-mix(in oklab, var(--color-accent) 55%, transparent)"
                    : "rgba(255,255,255,0.13)",
                }}
              />
              <text
                x={314}
                y={MOBILE_ROW_Y[i] + 27}
                textAnchor="middle"
                className="fbl-mono"
                fontSize={11.5}
                letterSpacing={0.3}
                fill={o.emphasis ? "var(--color-accent)" : "var(--color-ink)"}
                opacity={o.emphasis ? 1 : 0.92}
              >
                {o.label}
              </text>
            </g>
          ))}
        </svg>

        {/* Full diagram — tablet and up */}
        <svg
          viewBox="0 0 620 500"
          className="relative hidden h-auto w-full sm:block"
          role="img"
          aria-label="Diagram: a missed call, a web form, and an after-hours text flow into the Atlas AI hub, which replies instantly, qualifies the lead, and books the appointment."
        >
          <defs>
            <filter id="fblHubBlur" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
          </defs>

          {/* Connectors — faint base line + animated accent dash on top */}
          {[...IN_PATHS, ...OUT_PATHS].map((d, i) => (
            <g key={d}>
              <path d={d} fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth={1.5} />
              <path
                d={d}
                fill="none"
                className="fbl-map-path"
                stroke="var(--color-accent)"
                strokeWidth={1.5}
                opacity={0.75}
                style={{ animationDelay: `${(i % 3) * 0.45}s` }}
              />
            </g>
          ))}

          {/* Hub */}
          <circle cx={HUB.x} cy={HUB.y} r={54} fill="var(--color-accent)" opacity={0.14} filter="url(#fblHubBlur)" />
          <circle className="fbl-hub-ring" cx={HUB.x} cy={HUB.y} r={46} fill="none" stroke="var(--color-accent)" strokeWidth={1} />
          <circle
            className="fbl-hub-ring"
            cx={HUB.x}
            cy={HUB.y}
            r={46}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={1}
            style={{ animationDelay: "1.4s" }}
          />
          <circle
            cx={HUB.x}
            cy={HUB.y}
            r={44}
            fill="var(--color-surface-deep)"
            style={{ stroke: "color-mix(in oklab, var(--color-accent) 50%, transparent)" }}
            strokeWidth={1.5}
          />
          {/* Apex mark (brand) centered in the hub */}
          <g transform={`translate(${HUB.x - 19.5}, ${HUB.y - 19.5}) scale(1.22)`}>
            <path
              d="M5 27 L16 5 L27 27"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth={3.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M10.3 16.5 H21.7" fill="none" stroke="var(--color-accent)" strokeWidth={3.4} strokeLinecap="round" />
          </g>
          <text
            x={HUB.x}
            y={HUB.y + 68}
            textAnchor="middle"
            className="fbl-mono"
            fontSize={11}
            letterSpacing={3}
            fill="var(--color-accent)"
          >
            ATLAS AI
          </text>
          <text
            x={HUB.x}
            y={HUB.y + 84}
            textAnchor="middle"
            className="fbl-mono"
            fontSize={9.5}
            fill="var(--color-slate)"
            opacity={0.9}
          >
            qualifies · routes · books
          </text>

          {/* Nodes */}
          {SOURCES.map((n, i) => (
            <MapNode key={n.label} x={24} y={ROW_Y[i]} node={n} />
          ))}
          {OUTCOMES.map((n, i) => (
            <MapNode key={n.label} x={428} y={ROW_Y[i]} node={n} outcome />
          ))}
        </svg>
      </div>

      <p className="fbl-mono px-1 pt-3 text-[10px] leading-relaxed text-slate/70">{hero.mapCaption}</p>
    </div>
  );
}
