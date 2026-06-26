import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Pill from "@/components/ui/Pill";
import type { Hero as HeroContent } from "@/lib/content";

type Props = {
  content: HeroContent;
  /** Optional visual; when present the hero becomes a left-aligned two-column layout. */
  media?: ReactNode;
  /** Adds a faint glow behind the secondary ("See How It Works") button. */
  secondaryCtaGlow?: boolean;
  /** Adds a slow breathing glow behind the primary CTA (homepage only). */
  primaryCtaPulse?: boolean;
};

// Soft glow behind the secondary CTA — a halo only, leaves size/position intact.
const secondaryGlow = "shadow-[0_0_28px_rgba(34,197,94,0.28)]";

export default function Hero({
  content,
  media,
  secondaryCtaGlow,
  primaryCtaPulse,
}: Props) {
  const glow = secondaryCtaGlow ? secondaryGlow : "";
  const pulse = primaryCtaPulse ? "cta-pulse" : "";

  if (media) {
    return (
      <section className="relative">
        <div className="mx-auto grid w-full max-w-(--container-site) items-center gap-12 px-5 pt-16 pb-20 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:pt-24 md:pb-28 lg:gap-16">
          <div>
            {content.eyebrow && (
              <Reveal>
                <Pill>{content.eyebrow}</Pill>
              </Reveal>
            )}
            <Reveal delay={60}>
              <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.02] tracking-tight">
                {content.headline}
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-lg text-slate md:text-xl">
                {content.subheadline}
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={content.primaryCta.href}
                  className={`w-full sm:w-auto ${pulse}`}
                >
                  {content.primaryCta.label}
                </Button>
                <Button
                  href={content.secondaryCta.href}
                  variant="secondary"
                  className={`w-full sm:w-auto ${glow}`}
                >
                  {content.secondaryCta.label}
                </Button>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 max-w-md text-sm font-medium text-slate">
                {content.trustLine}
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} variant="scale">
            <div className="relative">
              {/* Glow pooled behind the media. */}
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent)_30%,transparent),transparent_75%)] blur-2xl"
              />
              {media}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  // Centered hero (trade pages, no media).
  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-(--container-site) px-5 pt-20 pb-20 sm:px-6 md:pt-28 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          {content.eyebrow && (
            <Reveal className="flex justify-center">
              <Pill>{content.eyebrow}</Pill>
            </Reveal>
          )}
          <Reveal delay={60}>
            <h1 className="mt-6 text-[clamp(2.4rem,5.5vw,3.85rem)] leading-[1.04] tracking-tight">
              {content.headline}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate md:text-xl">
              {content.subheadline}
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={content.primaryCta.href}
                className={`w-full sm:w-auto ${pulse}`}
              >
                {content.primaryCta.label}
              </Button>
              <Button
                href={content.secondaryCta.href}
                variant="secondary"
                className={`w-full sm:w-auto ${glow}`}
              >
                {content.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-sm font-medium text-slate">
              {content.trustLine}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
