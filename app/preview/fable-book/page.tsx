import type { Metadata } from "next";
import "../../fable.css";
import { fableFontVars } from "@/components/fable/fonts";
import {
  BookExpectSection,
  BookHero,
  BookIncludesSection,
  BookMeetSection,
  BookRequestSection,
} from "@/components/fable/bookSections";
import PreviewBanner from "../PreviewBanner";

/* /preview/fable-book — design preview of the Book page. Renders the same
   shared sections as the live /book (promoted in Phase 2 step 3), plus the
   preview ribbon. Kept for reviewing future changes in isolation. */

export const metadata: Metadata = {
  title: "Fable Book Preview",
  description: "Internal design preview of the Atlas Leads booking page redesign.",
  robots: { index: false, follow: false },
};

export default function FableBookPreview() {
  return (
    <div className={`fable relative ${fableFontVars}`}>
      <PreviewBanner label="Fable Book" liveHref="/book" />
      <div
        aria-hidden
        className="fbl-grid-dots fbl-mask-top pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-50"
      />

      <div className="relative z-10">
        <BookHero />
        <BookIncludesSection />
        <BookExpectSection />
        <BookMeetSection />
        <BookRequestSection />
      </div>
    </div>
  );
}
