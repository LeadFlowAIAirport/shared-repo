import { PlayCircle, Check, Clock } from "lucide-react";
import type { Lesson } from "@/lib/content";

type Props = {
  lesson: Lesson;
};

/**
 * A single mini-lesson card for the AI learning hub. The 16:9 slot renders one
 * of two states, driven entirely by `lesson.video`:
 *   - status "coming-soon"  → the honest green/black "Video coming soon" holder
 *   - status "available"    → a real embed (`videoType` youtube/vimeo/loom) or a
 *                             /public <video> file
 * Swapping a lesson from placeholder to live is a pure content change in
 * `lib/content.ts` — no markup here needs to change. Motion (hover lift) is
 * disabled under prefers-reduced-motion.
 */
export default function VideoLessonCard({ lesson }: Props) {
  const { number, category, title, description, takeaways, video } = lesson;
  const isLive = video.status === "available" && !!video.videoUrl;
  const num = String(number).padStart(2, "0");
  const label = `Lesson ${num}: ${title} video`;

  return (
    <li className="group glass flex h-full flex-col overflow-hidden rounded-2xl transition-[transform,border-color,box-shadow] duration-200 ease-out-quint hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-glow motion-reduce:hover:translate-y-0">
      {/* 16:9 video slot — real embed once live, honest placeholder until then. */}
      <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-surface-deep">
        {isLive ? (
          video.videoType === "file" ? (
            <video
              controls
              preload="metadata"
              playsInline
              aria-label={label}
              className="absolute inset-0 size-full bg-surface-deep object-contain"
            >
              <source src={video.videoUrl!} />
            </video>
          ) : (
            <iframe
              src={video.videoUrl!}
              title={label}
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
          </>
        )}

        {/* Lesson number — always visible, top-left. */}
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-paper/70 px-2.5 py-1 font-display text-xs font-bold tabular-nums text-ink backdrop-blur-sm">
          Lesson {num}
        </span>

        {/* Status / duration — top-right. */}
        {isLive ? (
          video.duration && (
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-paper/70 px-2.5 py-1 text-xs font-semibold text-slate backdrop-blur-sm">
              <Clock aria-hidden className="size-3.5" />
              {video.duration}
            </span>
          )
        ) : (
          <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-paper/70 px-2.5 py-1 text-xs font-semibold text-slate backdrop-blur-sm">
            Coming soon
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {category}
        </span>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-ink">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate">{description}</p>

        <ul className="mt-4 space-y-2">
          {takeaways.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-ink/85">
              <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Footer label — flips to a "Watch" affordance once the video is live. */}
        <span className="mt-5 inline-flex items-center gap-1.5 border-t border-white/10 pt-4 text-sm font-semibold text-accent">
          <PlayCircle aria-hidden className="size-4" />
          {isLive ? "Watch the lesson" : "Video coming soon"}
        </span>
      </div>
    </li>
  );
}
