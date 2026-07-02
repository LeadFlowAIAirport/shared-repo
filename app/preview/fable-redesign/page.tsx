import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import "./preview.css";
import PreviewChrome from "./PreviewChrome";
import {
  ApproachSection,
  FaqSection,
  FinalCtaSection,
  HeroSection,
  ModulesSection,
  PreviewFooter,
  ProblemSection,
  ProcessSection,
  TrustSection,
} from "./sections";

/* /preview/fable-redesign — isolated design preview of the Atlas Leads site.
   Renders as a full-screen overlay (z-70) above the global header/footer so the
   preview carries its own chrome without touching app/layout.tsx or any
   production route. See README.md in this folder. */

// Preview-only type trio: expanded Archivo for display, Instrument Serif for
// italic accent words, IBM Plex Mono for the cartographic labels. Scoped to
// this route via CSS variables — the live site keeps its own fonts.
const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--fbl-font-display",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--fbl-font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--fbl-font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fable Redesign Preview",
  description: "Internal design preview of the Atlas Leads website redesign.",
  robots: { index: false, follow: false },
};

/** Fixed decorative background — dot-grid graticule, green glows, grain. */
function PreviewAtmosphere() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.2_0.015_158)_0%,var(--color-paper)_45%,var(--color-surface-deep)_100%)]" />
      <div className="fbl-grid-dots fbl-mask-top absolute inset-x-0 top-0 h-[44rem] opacity-60" />
      <div className="absolute -right-[16%] top-[6%] size-[44rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent)_38%,transparent),transparent_72%)] opacity-45 blur-3xl" />
      <div className="absolute -left-[14%] top-[38%] size-[38rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-violet)_34%,transparent),transparent_72%)] opacity-35 blur-3xl" />
      <div className="grain absolute inset-0 opacity-[0.05] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_55%,oklch(0.1_0.014_158)_100%)]" />
    </div>
  );
}

export default function FableRedesignPreview() {
  return (
    <div
      id="top"
      className={`fable-preview ${display.variable} ${serif.variable} ${mono.variable} fixed inset-0 z-[70] overflow-y-auto overscroll-contain bg-paper text-ink`}
    >
      <PreviewAtmosphere />
      <PreviewChrome />
      <main>
        <HeroSection />
        <ProblemSection />
        <ApproachSection />
        <ModulesSection />
        <ProcessSection />
        <TrustSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <PreviewFooter />
    </div>
  );
}
