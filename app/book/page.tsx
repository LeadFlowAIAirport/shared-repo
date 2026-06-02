import type { Metadata } from "next";
import { CalendarClock, Check } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { book } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a free call. We'll walk through how leads come into your business today and how the systems would work for you — no pressure and no promises about specific results.",
};

export default function BookPage() {
  return (
    <Section bg="paper">
      <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-start lg:gap-16">
        {/* Left: pitch + what to expect */}
        <Reveal>
          <h1 className="text-[clamp(2.2rem,5vw,3.25rem)] leading-[1.04] tracking-tight">
            {book.heading}
          </h1>
          <p className="mt-6 text-lg text-slate">{book.body}</p>

          <h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-slate">
            What to expect on the call
          </h2>
          <ul className="mt-4 space-y-3">
            {book.expect.map((item) => (
              <li key={item} className="flex gap-3">
                <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-ink/80">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm font-medium text-slate">{book.trustLine}</p>
        </Reveal>

        {/* Right: booking placeholder */}
        <Reveal delay={120}>
          {/* TODO: Replace this placeholder with the real Calendly embed.
              Example:
              <div className="calendly-inline-widget" data-url={book.calendlyUrl}
                   style={{ minWidth: 320, height: 700 }} />
              plus <Script src="https://assets.calendly.com/assets/external/widget.js" />. */}
          <div className="flex min-h-[440px] flex-col items-center justify-center rounded-xl border border-dashed border-line bg-mist px-6 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent">
              <CalendarClock aria-hidden className="size-7" />
            </span>
            <p className="mt-4 text-xl font-semibold">Booking calendar</p>
            <p className="mt-2 max-w-md text-slate">
              Embed your scheduler here so visitors can book a call directly on
              the page.
            </p>
            <a
              href={book.calendlyUrl}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Open booking link
            </a>
            <p className="mt-3 text-xs text-slate">
              Placeholder — set <code>calendlyUrl</code> in{" "}
              <code>lib/content.ts</code>.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
