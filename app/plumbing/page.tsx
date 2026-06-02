import type { Metadata } from "next";
import TradePageView from "@/components/sections/TradePageView";
import { plumbing } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Plumbing Companies",
  description:
    "A lead and appointment system set up for plumbing companies — missed-call text-back, fast response, follow-up, and local visibility to help more leads become booked jobs.",
};

export default function PlumbingPage() {
  return <TradePageView content={plumbing} />;
}
