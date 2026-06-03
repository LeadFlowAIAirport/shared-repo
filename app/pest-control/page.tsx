import type { Metadata } from "next";
import TradePageView from "@/components/sections/TradePageView";
import { pestControl } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Pest Control Companies",
  description:
    "A lead and appointment system set up for pest control companies — missed-call text-back, fast response, follow-up, and local visibility to help more leads become booked jobs.",
};

export default function PestControlPage() {
  return <TradePageView content={pestControl} />;
}
