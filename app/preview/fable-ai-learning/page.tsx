import type { Metadata } from "next";
import "../../fable.css";
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
import PreviewBanner from "../PreviewBanner";

/* /preview/fable-ai-learning — design preview of the AI Learning page.
   Renders the same shared sections as the live /ai-implementation (promoted
   in Phase 3), plus the preview ribbon. Kept for reviewing future changes in
   isolation. */

export const metadata: Metadata = {
  title: "Fable AI Learning Preview",
  description: "Internal design preview of the Atlas Leads AI Learning page redesign.",
  robots: { index: false, follow: false },
};

export default function FableAiLearningPreview() {
  return (
    <div className={`fable relative ${fableFontVars}`}>
      <PreviewBanner label="Fable AI Learning" liveHref="/ai-implementation" />
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
