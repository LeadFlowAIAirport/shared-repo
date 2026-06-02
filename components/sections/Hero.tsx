import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import type { Hero as HeroContent } from "@/lib/content";

type Props = {
  content: HeroContent;
  /** Optional visual; when present the hero becomes a left-aligned two-column layout. */
  media?: ReactNode;
};

export default function Hero({ content, media }: Props) {
  if (media) {
    return (
      <section className="bg-paper">
        <div className="mx-auto grid w-full max-w-(--container-site) items-center gap-12 px-5 pt-14 pb-20 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:pt-20 md:pb-28 lg:gap-16">
          <div>
            <Reveal>
              <h1 className="text-[clamp(2.4rem,6vw,4rem)] leading-[1.02] tracking-tight">
                {content.headline}
              </h1>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-xl text-lg text-slate md:text-xl">
                {content.subheadline}
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={content.primaryCta.href}
                  className="w-full sm:w-auto"
                >
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
              <p className="mt-7 max-w-md text-sm font-medium text-slate">
                {content.trustLine}
              </p>
            </Reveal>
          </div>

          <Reveal delay={140}>{media}</Reveal>
        </div>
      </section>
    );
  }

  // Centered hero (trade pages, no media).
  return (
    <section className="bg-paper">
      <div className="mx-auto w-full max-w-(--container-site) px-5 pt-16 pb-20 sm:px-6 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h1 className="text-[clamp(2.4rem,5.5vw,3.75rem)] leading-[1.04] tracking-tight">
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
