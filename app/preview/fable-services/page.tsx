import type { Metadata } from "next";
import "../../fable.css";
import { fableFontVars } from "@/components/fable/fonts";
import {
  SvcCtaBand,
  SvcFitSection,
  SvcFlagshipSection,
  SvcHero,
  SvcModulesSection,
} from "@/components/fable/servicesSections";
import PreviewBanner from "../PreviewBanner";

/* /preview/fable-services — design preview of the Services page. Renders the
   same shared sections as the live /services (promoted in Phase 2 step 2),
   plus the preview ribbon. Kept for reviewing future changes in isolation. */

export const metadata: Metadata = {
  title: "Fable Services Preview",
  description: "Internal design preview of the Atlas Leads services page redesign.",
  robots: { index: false, follow: false },
};

export default function FableServicesPreview() {
  return (
    <div className={`fable relative ${fableFontVars}`}>
      <PreviewBanner label="Fable Services" liveHref="/services" />
      <div
        aria-hidden
        className="fbl-grid-dots fbl-mask-top pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-50"
      />

      <div className="relative z-10">
        <SvcHero />
        <SvcFlagshipSection />
        <SvcModulesSection />
        <SvcFitSection />
        <SvcCtaBand />
      </div>
    </div>
  );
}
