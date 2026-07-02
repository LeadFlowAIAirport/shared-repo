import type { Metadata } from "next";
import "../fable.css";
import { fableFontVars } from "@/components/fable/fonts";
import {
  BookExpectSection,
  BookHero,
  BookIncludesSection,
  BookMeetSection,
  BookRequestSection,
} from "@/components/fable/bookSections";

/**
 * Book — the Fable redesign (Phase 2 step 3). Sections are shared with
 * /preview/fable-book via components/fable/bookSections; copy lives in
 * lib/fablePages.ts. This is the conversion page: the request form
 * (components/fable/BookForm.tsx) and meeting options keep the exact
 * production behavior — same field names, required flags (Business Website
 * URL optional), and mailto submission from `book.meeting` in lib/content.ts.
 */

export const metadata: Metadata = {
  title: "Book a Free AI Business Audit",
  description:
    "Choose how you'd like to meet — phone call, Zoom, or in-person by request — and we'll walk through how leads reach your business and how the systems would work for you. No promises about specific results.",
};

export default function BookPage() {
  return (
    <div className={`fable relative ${fableFontVars}`}>
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
