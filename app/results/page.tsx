import type { Metadata } from "next";
import { PlayCircle, Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import CTABand from "@/components/sections/CTABand";
import { results } from "@/lib/content";

export const metadata: Metadata = {
  title: "Results & Live Demo",
  description:
    "See how the system recovers missed calls and answers leads in seconds — then book a free call to see what it would look like for your business.",
};

export default function ResultsPage() {
  return (
    <>
      {/* Demo */}
      <Section bg="paper">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {results.hero.heading}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate md:text-xl">
              {results.hero.body}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          {/* TODO: replace with a real screen recording / GIF of the
              missed-call text-back and AI receptionist in action. */}
          <div className="mx-auto flex aspect-video max-w-4xl flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-mist text-center">
            <PlayCircle aria-hidden className="size-14 text-accent" />
            <p className="mt-4 font-semibold">Demo video placeholder</p>
            <p className="mt-1 text-sm text-slate">
              Drop in a screen recording of the text-back + AI receptionist.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Metrics — illustrative, honest framing */}
      <Section bg="mist">
        <Reveal>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            {results.metricsHeading}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {results.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80}>
              <Card className="h-full text-center">
                <p className="text-4xl font-extrabold text-accent">{m.stat}</p>
                <p className="mt-3 text-slate">{m.label}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section bg="paper">
        <Reveal>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            {results.testimonialsHeading}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* TODO: replace these placeholders with real testimonials
              (name, company, city) once available. */}
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 80}>
              <Card className="h-full">
                <Quote aria-hidden className="size-8 text-accent/40" />
                <p className="mt-4 text-slate">{results.testimonialsNote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="size-10 rounded-full bg-mist" aria-hidden />
                  <div>
                    <p className="font-semibold">Client Name</p>
                    <p className="text-sm text-slate">Company · City</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        heading={results.cta.heading}
        body={results.cta.body}
        primaryCta={results.cta.primaryCta}
      />
    </>
  );
}
