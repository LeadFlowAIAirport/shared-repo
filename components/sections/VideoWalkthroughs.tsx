import Link from "next/link";
import { PlayCircle, ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import type { VideoItem } from "@/lib/content";

type Props = {
  heading: string;
  intro: string;
  note?: string;
  items: VideoItem[];
  bg?: "paper" | "mist";
};

/**
 * Video walkthroughs section: a grid of clean, video-ready cards. Each card is a
 * 16:9 placeholder (green/black, play motif) linking to its /demo/<slug> page.
 * When a category's `video` is set in content, the card flips from "Coming soon"
 * to "Watch" automatically. Motion is carried by <Reveal> (reduced-motion-safe)
 * plus a subtle hover lift that is disabled under prefers-reduced-motion.
 */
export default function VideoWalkthroughs({
  heading,
  intro,
  note,
  items,
  bg = "paper",
}: Props) {
  return (
    <Section bg={bg}>
      <Reveal className="max-w-2xl">
        <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)]">{heading}</h2>
      </Reveal>
      <Reveal delay={80} className="max-w-2xl">
        <p className="mt-4 text-lg text-slate">{intro}</p>
      </Reveal>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const hasVideo = !!(item.video?.embedUrl || item.video?.videoSrc);
          return (
            <Reveal key={item.slug} delay={(i % 3) * 80} className="h-full">
              <li className="h-full">
                <Link
                  href={`/demo/${item.slug}`}
                  className="group glass flex h-full flex-col overflow-hidden rounded-2xl transition-[transform,border-color,box-shadow] duration-200 ease-out-quint hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:hover:translate-y-0"
                >
                  {/* 16:9 frame where the recorded walkthrough will embed. */}
                  <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-surface-deep">
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent)_18%,transparent),transparent_72%)]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-50 [background-image:radial-gradient(var(--color-line)_1px,transparent_1px)] [background-size:16px_16px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/30 backdrop-blur-sm transition-colors duration-200 group-hover:bg-accent/25">
                        <PlayCircle aria-hidden className="size-7" />
                      </span>
                    </div>
                    {hasVideo ? (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-on-accent">
                        <PlayCircle aria-hidden className="size-3.5" />
                        Watch
                      </span>
                    ) : (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-paper/70 px-2.5 py-1 text-xs font-semibold text-slate backdrop-blur-sm">
                        Coming soon
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate">{item.blurb}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
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

      {note && <p className="mt-8 text-sm font-medium text-slate">{note}</p>}
    </Section>
  );
}
