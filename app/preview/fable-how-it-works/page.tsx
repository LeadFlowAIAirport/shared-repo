import type { Metadata } from "next";
import "../../fable.css";
import { fableFontVars } from "@/components/fable/fonts";
import {
  HiwAfterSection,
  HiwAuditSection,
  HiwCtaBand,
  HiwHero,
  HiwLookForSection,
  HiwProcessSection,
  HiwVideosSection,
} from "@/components/fable/howItWorksSections";
import PreviewBanner from "../PreviewBanner";

/* /preview/fable-how-it-works — design preview of the How It Works page.
   Renders the same shared sections as the live /how-it-works (promoted in
   Phase 2 step 1), plus the preview ribbon. Kept for reviewing future changes
   in isolation. */

export const metadata: Metadata = {
  title: "Fable How It Works Preview",
  description: "Internal design preview of the Atlas Leads how-it-works page redesign.",
  robots: { index: false, follow: false },
};

export default function FableHowItWorksPreview() {
  return (
    <div className={`fable relative ${fableFontVars}`}>
      <PreviewBanner label="Fable How It Works" liveHref="/how-it-works" />
      <div
        aria-hidden
        className="fbl-grid-dots fbl-mask-top pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-50"
      />

      <div className="relative z-10">
        <HiwHero />
        <HiwProcessSection />
        <HiwAuditSection />
        <HiwLookForSection />
        <HiwAfterSection />
        <HiwVideosSection />
        <HiwCtaBand />
      </div>
    </div>
  );
}
