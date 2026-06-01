import { Check } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import type { ProseBlock } from "@/lib/content";

type Props = {
  content: ProseBlock;
  /** Extra closing line rendered after the block (used by trade pages). */
  closingOverride?: string;
  bg?: "paper" | "mist";
  /** Render bullets with accent check icons instead of plain markers. */
  checks?: boolean;
};

export default function Prose({
  content,
  closingOverride,
  bg = "paper",
  checks,
}: Props) {
  const closing = closingOverride ?? content.closing;

  return (
    <Section bg={bg}>
      <Reveal className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold sm:text-4xl">{content.heading}</h2>

        {content.intro?.map((p, i) => (
          <p key={i} className="mt-5 text-lg text-slate">
            {p}
          </p>
        ))}

        {content.bullets && (
          <ul className="mt-6 space-y-3">
            {content.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-lg">
                {checks ? (
                  <Check
                    aria-hidden
                    className="mt-1 size-5 shrink-0 text-accent"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="mt-2.5 size-2 shrink-0 rounded-full bg-accent"
                  />
                )}
                <span className="text-slate">{b}</span>
              </li>
            ))}
          </ul>
        )}

        {closing && (
          <p className="mt-6 text-lg font-medium text-ink">{closing}</p>
        )}
      </Reveal>
    </Section>
  );
}
