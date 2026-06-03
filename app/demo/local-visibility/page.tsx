import type { Metadata } from "next";
import LocalVisibilityDemo from "./LocalVisibilityDemo";

/**
 * HIDDEN DEMO — System 3: Local Visibility System (Video 3 of 3)
 *
 * Sibling of the System 1 (/demo/ad-funnel) and System 2 (/demo/ai-receptionist)
 * demos — same structure, components, and conventions. Reachable only by direct
 * URL (/demo/local-visibility); not linked from nav, footer, or any menu, and
 * excluded from indexing via `robots` below.
 *
 * This is a FICTIONAL, clickable walkthrough for screen recording (Supademo) —
 * not a real product, client dashboard, or record of results. It is scoped to
 * THREE focus areas: Google Business Profile management, automated review
 * capture, and local search opportunities (no competitor comparison, service-
 * page audit, or "what to fix" action plan). It does NOT make ranking claims or
 * guarantees. All data is illustrative.
 */

export const metadata: Metadata = {
  title: "System 3 Demo: Local Visibility System",
  description:
    "An example workflow showing how the local visibility system is designed to keep a business's Google Business Profile maintained, capture reviews automatically, and surface local search opportunities. Fictional demo data used for example purposes.",
  // Hidden page: reachable by direct URL only, kept out of search indexes.
  robots: { index: false, follow: false },
};

export default function LocalVisibilityDemoPage() {
  return <LocalVisibilityDemo />;
}
