import Link from "next/link";
import { ArrowLeft, ArrowUpRight, PlayCircle } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

type Props = {
  /** Category title, e.g. "AI Receptionist". */
  title: string;
  /** One-line description of what the walkthrough covers. */
  blurb: string;
};

/**
 * A clean, video-ready page body for a /demo/<slug> route: a 16:9 placeholder
 * frame where the recorded walkthrough will embed once it's ready, with a short
 * explanation and the standard booking CTA. Green/black brand, subtle motion via
 * <Reveal> (reduced-motion-safe). No interactive widget, no fake data.
 */
export default function VideoPlaceholder({ title, blurb }: Props) {
  return (
    <Section bg="paper">
      <Reveal className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate transition-colors hover:text-ink"
        >
          <ArrowLeft aria-hidden className="size-4" />
          Back to home
        </Link>

        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
          Video walkthrough
        </p>
        <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.04] tracking-tight">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate md:text-xl">{blurb}</p>

        {/* 16:9 frame where the recorded walkthrough will embed. */}
        <div className="relative mt-9 aspect-video overflow-hidden rounded-2xl glass-strong shadow-glow">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent)_18%,transparent),transparent_72%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-40 [background-image:radial-gradient(var(--color-line)_1px,transparent_1px)] [background-size:18px_18px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/30">
              <PlayCircle aria-hidden className="size-9" />
            </span>
            <p className="text-base font-semibold text-ink">
              Video walkthrough coming soon
            </p>
            <p className="max-w-md text-sm text-slate">
              Watch how Atlas Leads teaches, builds, and trains your team on AI
              systems. AI education, implementation, and automation explained
              clearly.
            </p>
          </div>
        </div>

        <div className="mt-9">
          <Button href="/book">
            Book a Free AI Growth Audit
            <ArrowUpRight aria-hidden className="size-5" />
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
