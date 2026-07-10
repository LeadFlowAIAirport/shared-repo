import { Archivo, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import "./fable.css";
import {
  ApproachSection,
  FaqSection,
  FinalCtaSection,
  HeroSection,
  MissionSection,
  ModulesSection,
  MonthlyOpsSection,
  ProblemSection,
  ProcessSection,
  TrustSection,
  WhyStaySection,
} from "@/components/fable/sections";

/**
 * Homepage — the Fable redesign (dark cartographic "AI, mapped to how your
 * business actually runs" direction). Sections live in components/fable and
 * their copy in lib/homeContent. The page renders inside the shared global
 * layout, so it keeps the site Header, Footer, and Atmosphere; it only supplies
 * the page body and its own font system.
 *
 * Fonts are loaded here (not in the root layout) so they ship with the homepage
 * only — other routes are byte-for-byte unaffected. They're exposed as CSS
 * variables on the `.fable` wrapper, which app/fable.css maps to the fbl-*
 * utility classes the sections use.
 */

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

export default function HomePage() {
  return (
    <div className={`fable relative ${display.variable} ${serif.variable} ${mono.variable}`}>
      {/* Cartographic top graticule — layers over the global Atmosphere, masked
          out below the hero. Content sits above it via the z-10 wrapper. */}
      <div
        aria-hidden
        className="fbl-grid-dots fbl-mask-top pointer-events-none absolute inset-x-0 top-0 h-[44rem] opacity-50"
      />

      <div className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <ApproachSection />
        <ModulesSection />
        <MonthlyOpsSection />
        <ProcessSection />
        <WhyStaySection />
        <MissionSection />
        <TrustSection />
        <FaqSection />
        <FinalCtaSection />
      </div>
    </div>
  );
}
