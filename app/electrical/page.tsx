import type { Metadata } from "next";
import TradePageView from "@/components/sections/TradePageView";
import { electrical } from "@/lib/content";

export const metadata: Metadata = {
  title: "Electrical Growth System",
  description:
    "A done-for-you lead and appointment system built for electrical companies — recover missed calls, respond instantly, and book more panel upgrades, rewires, EV installs, and service calls.",
};

export default function ElectricalPage() {
  return <TradePageView content={electrical} />;
}
