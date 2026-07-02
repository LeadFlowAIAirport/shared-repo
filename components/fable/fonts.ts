import { Archivo, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";

/* The Fable type trio, shared by the Phase 2 preview routes. Same config as the
   homepage's loaders in app/page.tsx (Next dedupes identical font requests), so
   previews and the live homepage render with the same faces. Exposed as CSS
   variables that app/fable.css maps to the fbl-* utility classes. */

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

/** Class string that puts all three font variables on a wrapper element. */
export const fableFontVars = `${display.variable} ${serif.variable} ${mono.variable}`;
