import Link from "next/link";
import Image from "next/image";
import {
  Megaphone,
  Headset,
  ScanSearch,
  PlayCircle,
  ArrowUpRight,
  Clock,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * "See the systems in action" — preview tiles linking to the clickable system
 * demos. All three systems (Ad Funnel, AI Phone Receptionist, Local Visibility)
 * are live. The demos use fictional example data.
 */

type Demo = {
  n: number;
  name: string;
  blurb: string;
  icon: LucideIcon;
  /** Screenshot thumbnail in /public/demos (4:3); falls back to the icon graphic. */
  image?: string;
} & ({ status: "live"; href: string } | { status: "soon"; href?: never });

const DEMOS: Demo[] = [
  {
    n: 1,
    name: "Ad Funnel Lead Generation",
    blurb: "From a Facebook ad to a focused page, a short form, and a qualified, ready-to-book lead.",
    icon: Megaphone,
    image: "/demos/ad-funnel-demo.png",
    status: "live",
    href: "/demo/ad-funnel",
  },
  {
    n: 2,
    name: "AI Phone Receptionist / Appointment Setter",
    blurb: "How an incoming call can be answered, qualified, and moved toward a booking — with SMS follow-up to back it up.",
    icon: Headset,
    image: "/demos/ai-receptionist-demo.png",
    status: "live",
    href: "/demo/ai-receptionist",
  },
  {
    n: 3,
    name: "Local Visibility System",
    blurb: "How the system keeps the Google Business Profile maintained, captures reviews automatically, and surfaces local search opportunities.",
    icon: ScanSearch,
    image: "/demos/local-visibility-demo.png",
    status: "live",
    href: "/demo/local-visibility",
  },
];

export default function SystemDemos({
  bg = "mist",
}: {
  bg?: "paper" | "mist";
}) {
  return (
    <Section bg={bg}>
      <Reveal className="max-w-2xl">
        <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)]">
          See the systems in action
        </h2>
        <p className="mt-4 text-lg text-slate">
          Short, clickable walkthroughs of how each system is designed to work.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {DEMOS.map((demo, i) => (
          <Reveal key={demo.n} delay={(i % 3) * 80} className="h-full">
            <DemoTile demo={demo} />
          </Reveal>
        ))}
      </ul>

      <p className="mt-8 text-sm font-medium text-slate">
        Example walkthroughs — fictional demo data used for example purposes.
      </p>
    </Section>
  );
}

function DemoTile({ demo }: { demo: Demo }) {
  const Icon = demo.icon;
  const num = String(demo.n).padStart(2, "0");

  // Shared preview "thumbnail" — the demo screenshot (4:3), or a structural
  // on-brand graphic as a fallback when no image is set.
  const preview = (
    <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-mist">
      {demo.image ? (
        <Image
          src={demo.image}
          alt={`${demo.name} demo preview`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover object-top"
        />
      ) : (
        <>
          {/* faint dotted-grid texture */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-60 [background-image:radial-gradient(var(--color-line)_1px,transparent_1px)] [background-size:16px_16px]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`flex size-16 items-center justify-center rounded-2xl ${
                demo.status === "live"
                  ? "bg-accent/10 text-accent"
                  : "bg-ink/5 text-slate"
              }`}
            >
              <Icon aria-hidden className="size-8" />
            </span>
          </div>
        </>
      )}
      {/* status badge */}
      <span
        className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
          demo.status === "live"
            ? "bg-accent text-white"
            : "border border-line bg-paper text-slate"
        }`}
      >
        {demo.status === "live" ? (
          <>
            <PlayCircle aria-hidden className="size-3.5" />
            Live demo
          </>
        ) : (
          <>
            <Clock aria-hidden className="size-3.5" />
            Coming soon
          </>
        )}
      </span>
      <span className="absolute right-4 top-4 inline-flex size-7 items-center justify-center rounded-full bg-paper/80 font-display text-sm font-extrabold tabular-nums text-ink shadow-sm shadow-ink/5 backdrop-blur-sm">
        {num}
      </span>
    </div>
  );

  const body = (
    <div className="flex flex-1 flex-col p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate">
        System {demo.n}
      </p>
      <h3 className="mt-1.5 text-xl leading-snug">{demo.name}</h3>
      <p className="mt-2 text-slate">{demo.blurb}</p>
      <span
        className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${
          demo.status === "live" ? "text-accent" : "text-slate/60"
        }`}
      >
        {demo.status === "live" ? (
          <>
            Watch the demo
            <ArrowUpRight
              aria-hidden
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </>
        ) : (
          "Demo coming soon"
        )}
      </span>
    </div>
  );

  const shell =
    "group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper";

  if (demo.status === "live") {
    return (
      <Link
        href={demo.href}
        className={`${shell} transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-lg hover:shadow-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
      >
        {preview}
        {body}
      </Link>
    );
  }

  return (
    <div className={`${shell} opacity-80`} aria-disabled="true">
      {preview}
      {body}
    </div>
  );
}
