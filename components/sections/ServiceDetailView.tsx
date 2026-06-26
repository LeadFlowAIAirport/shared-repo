import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import type { ServiceDetail } from "@/lib/content";

/**
 * Minimal service-detail page. Intentionally light for now — title, a short
 * placeholder intro (reused from the homepage service copy), a "more details
 * coming soon" note, and the standard booking CTA. Full copy comes later.
 */
export default function ServiceDetailView({
  detail,
}: {
  detail: ServiceDetail;
}) {
  return (
    <Section bg="paper">
      <Reveal className="max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate transition-colors hover:text-ink"
        >
          <ArrowLeft aria-hidden className="size-4" />
          Back to home
        </Link>

        <h1 className="mt-6 text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.04] tracking-tight">
          {detail.title}
        </h1>
        <p className="mt-6 text-lg text-slate md:text-xl">{detail.intro}</p>
        <p className="mt-6 font-medium text-ink/70">More details coming soon.</p>

        <div className="mt-8">
          <Button href="/book">
            Book a Free AI Growth Audit
            <ArrowUpRight aria-hidden className="size-5" />
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
