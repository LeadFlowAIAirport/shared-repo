import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import type { Hero as HeroContent } from "@/lib/content";

export default function Hero({ content }: { content: HeroContent }) {
  return (
    <section className="bg-paper">
      <div className="mx-auto w-full max-w-(--container-site) px-5 pt-16 pb-20 sm:px-6 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              {content.headline}
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate md:text-xl">
              {content.subheadline}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={content.primaryCta.href} className="w-full sm:w-auto">
                {content.primaryCta.label}
              </Button>
              <Button
                href={content.secondaryCta.href}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {content.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 text-sm font-medium text-slate">
              {content.trustLine}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
