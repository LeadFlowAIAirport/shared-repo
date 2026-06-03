import type { Metadata } from "next";
import AdFunnelDemo from "./AdFunnelDemo";

/**
 * HIDDEN DEMO — System 1: Ad Funnel Lead Generation (Video 1 of 3)
 *
 * Reachable only by direct URL (/demo/ad-funnel). Not linked from nav, footer,
 * or any menu, and excluded from indexing via `robots` below. This is a
 * FICTIONAL, clickable walkthrough for screen recording (Supademo) — not a real
 * product, client dashboard, or record of results. All data is illustrative.
 *
 * ---------------------------------------------------------------------------
 * VOICEOVER SCRIPT (for recording — not rendered on the page)
 * ---------------------------------------------------------------------------
 *
 * Most local service businesses do not lose opportunities because they are bad
 * at their work. They lose opportunities because the lead path is weak. A
 * customer clicks an ad, lands on a generic page, fills out a basic form, and
 * then waits too long for a response.
 *
 * System 1 is our ad funnel lead-generation system. It is designed to turn ad
 * traffic into cleaner, more qualified lead opportunities.
 *
 * In this example, we are using a fictional plumbing company called Valley Pro
 * Plumbing.
 *
 * The process starts with a focused Facebook ad. Instead of sending the
 * customer to a general homepage, the ad sends them to a service-specific
 * landing page.
 *
 * From there, the customer fills out a short form that collects the details the
 * business actually needs: service type, urgency, location, contact
 * information, and preferred timing.
 *
 * Once the form is submitted, the system organizes the lead by urgency, service
 * need, location, and source. This gives the business a clearer picture of the
 * opportunity before they call back.
 *
 * Then, the qualified lead is moved toward the next step: booking an estimate
 * or appointment.
 *
 * This demo is not showing fake results or real client data. It is an example
 * of how the system is designed to work for a local service business.
 *
 * If you want to see where your business may be losing leads, book a free
 * lead-generation audit. We'll review your current website, ad flow, form
 * process, and booking path, then show where opportunities may be slipping
 * through.
 * ---------------------------------------------------------------------------
 */

export const metadata: Metadata = {
  title: "System 1 Demo: Ad Funnel Lead Generation",
  description:
    "An example workflow showing how a focused ad funnel and lead capture flow is designed to turn ad traffic into qualified lead opportunities for a local service business. Fictional demo data used for example purposes.",
  // Hidden page: reachable by direct URL only, kept out of search indexes.
  robots: { index: false, follow: false },
};

export default function AdFunnelDemoPage() {
  return <AdFunnelDemo />;
}
