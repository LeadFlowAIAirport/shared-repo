import type { Metadata } from "next";
import { Check } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import MeetingOptions from "@/components/sections/MeetingOptions";
import ContactForm from "@/components/sections/ContactForm";
import { book } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Free AI Growth Audit",
  description:
    "Choose how you'd like to meet — phone call, Zoom, or in-person by request — and we'll walk through how leads reach your business and how the systems would work for you. No promises about specific results.",
};

export default function BookPage() {
  return (
    <>
      {/* Pitch + what to expect */}
      <Section bg="paper">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              {book.eyebrow}
            </p>
            <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.25rem)] leading-[1.04] tracking-tight">
              {book.heading}
            </h1>
            <p className="mt-6 text-lg text-slate">{book.body}</p>
          </Reveal>

          <Reveal delay={80}>
            {/* Hairline seam between the hero pitch and the elevated card */}
            <hr className="mt-10 border-line" />
            <div className="mt-10 rounded-xl border border-line bg-paper p-6 shadow-sm sm:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate">
                What to expect on the call
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {book.expect.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
                    <span className="text-ink/80">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-slate">{book.trustLine}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Three ways to meet */}
      <Section bg="mist">
        <MeetingOptions />
      </Section>

      {/* Request-a-meeting contact form */}
      <Section bg="paper">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
