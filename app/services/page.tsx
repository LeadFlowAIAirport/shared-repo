import type { Metadata } from "next";
import "../fable.css";
import { fableFontVars } from "@/components/fable/fonts";
import {
  SvcCtaBand,
  SvcFitSection,
  SvcFlagshipSection,
  SvcHero,
  SvcModulesSection,
  SvcSystemsSection,
} from "@/components/fable/servicesSections";

/**
 * Services — the Fable redesign (Phase 2 step 2). Sections are shared with
 * /preview/fable-services via components/fable/servicesSections; copy lives in
 * lib/fablePages.ts. The old page's five offer anchors are preserved
 * (#ai-business-enablement + the four module ids) — next.config.ts redirects
 * and the AI Learning hub deep-link to them.
 */

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI Business Education + Implementation for local businesses — a strategic AI partnership, plus the implementation modules we switch on inside it: AI receptionist, ads + booking, local visibility, and a full growth system.",
};

export default function ServicesPage() {
  return (
    <div className={`fable relative ${fableFontVars}`}>
      <div
        aria-hidden
        className="fbl-grid-dots fbl-mask-top pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-50"
      />

      <div className="relative z-10">
        <SvcHero />
        <SvcFlagshipSection />
        <SvcModulesSection />
        <SvcFitSection />
        <SvcSystemsSection />
        <SvcCtaBand />
      </div>
    </div>
  );
}
