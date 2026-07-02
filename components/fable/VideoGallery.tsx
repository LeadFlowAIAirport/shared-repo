import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import type { VideoItem } from "@/lib/content";

/**
 * Fable-styled video-walkthrough gallery — the redesigned equivalent of
 * components/sections/VideoWalkthroughs.tsx. Same behavior: each card links to
 * its /demo/<slug> page (or `item.href` when set, e.g. the flagship → the AI
 * Learning hub), and the Watch / Coming-soon state flips automatically when a
 * category's `video` is set in lib/content.ts (`home.videos.items`). The demo
 * pages themselves are untouched.
 */

function StatusChip({ hasVideo, className = "" }: { hasVideo: boolean; className?: string }) {
  return hasVideo ? (
    <span
      className={`fbl-mono inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-on-accent ${className}`}
    >
      <PlayCircle aria-hidden className="size-3.5" />
      Watch
    </span>
  ) : (
    <span
      className={`fbl-mono inline-flex items-center rounded-full border border-white/15 bg-surface-deep/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-slate backdrop-blur-sm ${className}`}
    >
      Coming soon
    </span>
  );
}

/** The 16:9 green/black media frame where a walkthrough embeds later. */
function Frame({ hasVideo, large = false }: { hasVideo: boolean; large?: boolean }) {
  return (
    <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-surface-deep">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent)_20%,transparent),transparent_72%)]"
      />
      <div aria-hidden className="fbl-grid-dots absolute inset-0 opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`flex items-center justify-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/30 backdrop-blur-sm transition-colors duration-200 group-hover:bg-accent/25 ${
            large ? "size-20" : "size-14"
          }`}
        >
          <PlayCircle aria-hidden className={large ? "size-10" : "size-7"} />
        </span>
      </div>
      <StatusChip hasVideo={hasVideo} className="absolute left-3.5 top-3.5" />
    </div>
  );
}

export default function VideoGallery({ items }: { items: VideoItem[] }) {
  const [featured, ...rest] = items;
  const featuredHasVideo = !!(featured.video?.embedUrl || featured.video?.videoSrc);

  return (
    <div>
      {/* Featured flagship walkthrough — larger, accent-ringed */}
      <Reveal>
        <Link
          href={featured.href ?? `/demo/${featured.slug}`}
          className="fbl-card group grid overflow-hidden shadow-glow ring-1 ring-accent/25 transition-[transform,box-shadow] duration-200 ease-out-quint hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:hover:translate-y-0 md:grid-cols-2"
        >
          <div className="md:border-b-0 md:border-r md:border-white/10">
            <Frame hasVideo={featuredHasVideo} large />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
            <span className="fbl-mono inline-flex items-center gap-2 self-start rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
              Flagship walkthrough
            </span>
            <h3 className="fbl-display mt-4 text-2xl text-ink sm:text-3xl">{featured.title}</h3>
            <p className="mt-3 text-[15px] text-slate">{featured.blurb}</p>
            <span className="fbl-mono mt-5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-accent">
              {featuredHasVideo ? "Watch the walkthrough" : "Video coming soon"}
              <ArrowUpRight
                aria-hidden
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              />
            </span>
          </div>
        </Link>
      </Reveal>

      {/* The four implementation-module walkthroughs */}
      <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((item, i) => {
          const hasVideo = !!(item.video?.embedUrl || item.video?.videoSrc);
          return (
            <Reveal key={item.slug} delay={(i % 4) * 70} className="h-full">
              <li className="h-full">
                <Link
                  href={`/demo/${item.slug}`}
                  className="fbl-card fbl-card-hover group flex h-full flex-col overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Frame hasVideo={hasVideo} />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-slate">{item.blurb}</p>
                    <span className="fbl-mono mt-4 inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.14em] text-accent">
                      {hasVideo ? "Watch the walkthrough" : "Video coming soon"}
                      <ArrowUpRight
                        aria-hidden
                        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                      />
                    </span>
                  </div>
                </Link>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
