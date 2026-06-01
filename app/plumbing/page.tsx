import type { Metadata } from "next";
import TradePageView from "@/components/sections/TradePageView";
import { plumbing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Plumbing Growth System",
  description:
    "A done-for-you lead and appointment system built for plumbing companies — recover missed calls, respond in seconds, and book more emergency, service, and big-ticket jobs.",
};

export default function PlumbingPage() {
  return <TradePageView content={plumbing} />;
}
