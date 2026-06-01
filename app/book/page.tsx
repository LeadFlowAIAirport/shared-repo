import type { Metadata } from "next";
import { CalendarClock } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { book } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Free Growth Call",
  description:
    "Book a free growth call. We'll walk through where you're losing leads today and show you exactly how the system would help you book more work.",
};

export default function BookPage() {
  return (
    <Section bg="paper">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {book.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate md:text-xl">
            {book.body}
          </p>
          <p className="mt-4 text-sm font-medium text-slate">{book.trustLine}</p>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        {/* TODO: Replace this placeholder with the real Calendly embed.
            Example:
            <div
              className="calendly-inline-widget"
              data-url={book.calendlyUrl}
              style={{ minWidth: 320, height: 700 }}
            />
            plus <Script src="https://assets.calendly.com/assets/external/widget.js" />
            (next/script). For now we show a labeled placeholder. */}
        <div className="mx-auto flex min-h-[480px] max-w-3xl flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-mist px-6 text-center">
          <CalendarClock aria-hidden className="size-14 text-accent" />
          <p className="mt-4 text-xl font-semibold">
            Booking calendar placeholder
          </p>
          <p className="mt-2 max-w-md text-slate">
            Embed your Calendly (or other scheduler) here so visitors can book a
            free growth call directly on the page.
          </p>
          <a
            href={book.calendlyUrl}
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Open booking link
          </a>
          <p className="mt-3 text-xs text-slate">
            Replace <code>calendlyUrl</code> in <code>lib/content.ts</code> with
            your real link.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
