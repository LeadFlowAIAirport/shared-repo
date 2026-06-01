import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import type { CTA } from "@/lib/content";

type Props = {
  heading: string;
  body?: string;
  /** Rendered as emphasized lead-in lines (closing pitch). */
  bodyLines?: string[];
  emphasis?: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
};

/** Dark accent band — one of these appears every ~1.5 screens of scroll. */
export default function CTABand({
  heading,
  body,
  bodyLines,
  emphasis,
  primaryCta,
  secondaryCta,
}: Props) {
  return (
    <Section bg="ink">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">{heading}</h2>

        {body && <p className="mt-5 text-lg text-white/70">{body}</p>}

        {bodyLines?.map((line, i) => (
          <p key={i} className="mt-5 text-lg text-white/70">
            {line}
          </p>
        ))}

        {emphasis && (
          <p className="mt-5 text-lg font-semibold text-white">{emphasis}</p>
        )}

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={primaryCta.href} className="w-full sm:w-auto">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button
              href={secondaryCta.href}
              variant="secondary-light"
              className="w-full sm:w-auto"
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
