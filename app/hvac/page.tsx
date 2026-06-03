import type { Metadata } from "next";
import TradePageView from "@/components/sections/TradePageView";
import { hvac } from "@/lib/content";

export const metadata: Metadata = {
  title: "For HVAC Companies",
  description:
    "A lead and appointment system set up for HVAC companies — missed-call text-back, fast response, follow-up, and local visibility to help more leads become booked jobs.",
};

export default function HvacPage() {
  return <TradePageView content={hvac} />;
}
