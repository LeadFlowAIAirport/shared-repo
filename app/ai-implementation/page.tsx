import type { Metadata } from "next";
import "../fable.css";
import { fableFontVars } from "@/components/fable/fonts";
import {
  AilCtaBand,
  AilFaqSection,
  AilHero,
  AilHonestySection,
  AilLibrarySection,
  AilModulesSection,
  AilPathSection,
  AilProblemSection,
  AilTeachSection,
} from "@/components/fable/aiLearningSections";

/**
 * AI Learning (/ai-implementation) — the Fable redesign (Phase 3). Sections
 * are shared with /preview/fable-ai-learning via
 * components/fable/aiLearningSections; copy lives in lib/fablePages.ts. The
 * lesson video library, implementation modules, and FAQ keep their data in
 * lib/content.ts (`aiImplementation`), so recorded videos still go live by
 * editing one place and module cards keep their /services#<id> deep links.
 */

export const metadata: Metadata = {
  title: "Atlas AI Academy / Atlas Implementations",
  description:
    "The Atlas Leads AI academy for local business owners. Plain-English mini lessons on where AI fits, plus the implementation roadmap and systems — Atlas Receptionist, Atlas Lead Engine, Atlas Local Trust, and Atlas Command Center — that save time and improve daily operations.",
};

export default function AiImplementationPage() {
  return (
    <div className={`fable relative ${fableFontVars}`}>
      <div
        aria-hidden
        className="fbl-grid-dots fbl-mask-top pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-50"
      />

      <div className="relative z-10">
        <AilHero />
        <AilProblemSection />
        <AilTeachSection />
        <AilPathSection />
        <AilLibrarySection />
        <AilModulesSection />
        <AilHonestySection />
        <AilFaqSection />
        <AilCtaBand />
      </div>
    </div>
  );
}
