import { PlayCircle } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import VideoLessonCard from "@/components/sections/VideoLessonCard";
import type { aiImplementation } from "@/lib/content";

type Props = {
  featured: typeof aiImplementation.featured;
  lessonsHeading: string;
  lessonsIntro: string;
  lessonsNote: string;
  lessons: typeof aiImplementation.lessons;
};

/**
 * The learning-hub centerpiece: a large featured overview placeholder followed
 * by the mini-lesson library grid. Both video slots stay honest ("coming soon")
 * until a source is set in `lib/content.ts`, then flip to a real embed with no
 * markup change. The lessons band carries the `#lessons` anchor the hero links
 * to (with scroll offset for the sticky header). Reduced-motion-safe via
 * <Reveal>.
 */
export default function AiImplementationLearningHub({
  featured,
  lessonsHeading,
  lessonsIntro,
  lessonsNote,
  lessons,
}: Props) {
  const featuredLive =
    featured.video.status === "available" && !!featured.video.videoUrl;

  return (
    <>
      {/* Featured overview video */}
      <Section bg="mist">
        <Reveal>
          <div className="group glass-strong grid overflow-hidden rounded-3xl shadow-glow ring-1 ring-accent/25 md:grid-cols-2">
            {/* Large 16:9 slot */}
            <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-surface-deep md:border-b-0 md:border-r">
              {featuredLive ? (
                featured.video.videoType === "file" ? (
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    aria-label={`${featured.title} video`}
                    className="absolute inset-0 size-full bg-surface-deep object-contain"
                  >
                    <source src={featured.video.videoUrl!} />
                  </video>
                ) : (
                  <iframe
                    src={featured.video.videoUrl!}
                    title={`${featured.title} video`}
                    loading="lazy"
                    allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 size-full border-0 bg-surface-deep"
                  />
                )
              ) : (
                <>
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent)_22%,transparent),transparent_72%)]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-50 [background-image:radial-gradient(var(--color-line)_1px,transparent_1px)] [background-size:18px_18px]"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
                    <span className="flex size-20 items-center justify-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/30 backdrop-blur-sm transition-colors duration-200 group-hover:bg-accent/25">
                      <PlayCircle aria-hidden className="size-10" />
                    </span>
                    <p className="text-base font-semibold text-ink">
                      {featured.placeholder}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Text side */}
            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                {featured.eyebrow}
              </span>
              <h2 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-slate">{featured.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                <PlayCircle aria-hidden className="size-4" />
                {featuredLive ? "Watch the overview" : "Video coming soon"}
              </span>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Mini lesson library — target of the hero's "View Mini Lessons" anchor */}
      <Section bg="paper">
        <div id="lessons" className="scroll-mt-24">
          <Reveal className="max-w-2xl">
            <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)]">
              {lessonsHeading}
            </h2>
          </Reveal>
          <Reveal delay={80} className="max-w-2xl">
            <p className="mt-4 text-lg text-slate">{lessonsIntro}</p>
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson, i) => (
              <Reveal key={lesson.number} delay={(i % 3) * 80} className="h-full">
                <VideoLessonCard lesson={lesson} />
              </Reveal>
            ))}
          </ul>

          {lessonsNote && (
            <p className="mt-8 text-sm font-medium text-slate">{lessonsNote}</p>
          )}
        </div>
      </Section>
    </>
  );
}
