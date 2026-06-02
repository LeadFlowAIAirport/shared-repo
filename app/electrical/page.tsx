import type { Metadata } from "next";
import TradePageView from "@/components/sections/TradePageView";
import { electrical } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Electrical Companies",
  description:
    "A lead and appointment system set up for electrical companies — missed-call text-back, fast response, follow-up, and local visibility to help more leads become booked jobs.",
};

export default function ElectricalPage() {
  return <TradePageView content={electrical} />;
}
