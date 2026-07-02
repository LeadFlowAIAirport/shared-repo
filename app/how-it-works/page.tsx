import type { Metadata } from "next";
import "../fable.css";
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

/**
 * How It Works — the Fable redesign (Phase 2 step 1). Sections are shared with
 * /preview/fable-how-it-works via components/fable/howItWorksSections; copy
 * lives in lib/fablePages.ts. The FAQ that used to live here stays on the
 * homepage (its Fable home), and the video walkthroughs are preserved below in
 * Fable styling — their data and the /demo pages are unchanged.
 */

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A plain-language look at how Atlas Leads works: a free AI Business Audit, an opportunity map ranked by value, an implementation plan, then launch and adoption — education first, practical systems second.",
};

export default function HowItWorksPage() {
  return (
    <div className={`fable relative ${fableFontVars}`}>
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
