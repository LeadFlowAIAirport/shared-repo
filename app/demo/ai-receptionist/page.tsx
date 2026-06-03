import type { Metadata } from "next";
import AiReceptionistDemo from "./AiReceptionistDemo";

/**
 * HIDDEN DEMO — System 2: AI Phone Receptionist / Appointment Setter (Video 2 of 3)
 *
 * Sibling of the System 1 demo (/demo/ad-funnel) — same structure, components,
 * and conventions. Reachable only by direct URL (/demo/ai-receptionist); not
 * linked from nav, footer, or any menu, and excluded from indexing via `robots`
 * below.
 *
 * This is a FICTIONAL, clickable walkthrough for screen recording (Supademo) —
 * not a real product, client dashboard, or record of results. The PRIMARY flow
 * is an AI phone-call receptionist (answers the call, collects details,
 * qualifies urgency, books on the call); SMS appears as a SUPPORTING follow-up
 * channel. It shows how the system is *designed* to work — it does not claim to
 * replace staff or run without oversight. All data is illustrative.
 */

export const metadata: Metadata = {
  title: "System 2 Demo: AI Phone Receptionist / Appointment Setter",
  description:
    "An example workflow showing how an AI phone receptionist is designed to answer the call, collect job details, qualify urgency, and move customers toward booking — with SMS follow-up as a supporting channel. Fictional demo data used for example purposes.",
  // Hidden page: reachable by direct URL only, kept out of search indexes.
  robots: { index: false, follow: false },
};

export default function AiReceptionistDemoPage() {
  return <AiReceptionistDemo />;
}
