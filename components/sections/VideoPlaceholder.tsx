import Link from "next/link";
import { ArrowLeft, ArrowUpRight, PlayCircle } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import type { VideoItem } from "@/lib/content";

type Props = {
  /** The category's video item from `home.videos.items`. When `item.video` is
   *  null the honest "coming soon" placeholder shows; set `item.video` to embed
   *  a real walkthrough (see VideoSource in lib/content.ts). */
  item: VideoItem;
};

/**
 * Video-ready page body for a /demo/<slug> route. The same 16:9 green/black
 * frame renders one of three states, driven entirely by `item.video`:
 *   - `embedUrl` set  → responsive hosted embed (YouTube / Vimeo / Loom / ...)
 *   - `videoSrc` set  → a <video> from /public (controls, no autoplay)
 *   - null            → the honest "Video walkthrough coming soon" placeholder
 * Nothing autoplays with sound; the frame stays accessible and mobile-responsive.
 */
export default function VideoPlaceholder({ item }: Props) {
  const { title, blurb, video } = item;
  const label = `${title} video walkthrough`;

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

        {/* 16:9 frame: embed, local file, or honest placeholder. */}
        <div className="relative mt-9 aspect-video overflow-hidden rounded-2xl glass-strong shadow-glow">
          {video?.embedUrl ? (
            <iframe
              src={video.embedUrl}
              title={label}
              loading="lazy"
              allow="encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="absolute inset-0 size-full border-0 bg-surface-deep"
            />
          ) : video?.videoSrc ? (
            <video
              controls
              preload="metadata"
              playsInline
              poster={video.posterSrc}
              aria-label={label}
              className="absolute inset-0 size-full bg-surface-deep object-contain"
            >
              <source src={video.videoSrc} />
              Your browser can’t play this video.{" "}
              <a href={video.videoSrc} className="text-accent underline">
                Download it instead.
              </a>
            </video>
          ) : (
            <ComingSoon />
          )}
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

/** The honest placeholder shown until a category's `video` is set. */
function ComingSoon() {
  return (
    <>
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
    </>
  );
}
