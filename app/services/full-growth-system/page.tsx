import type { Metadata } from "next";
import ServiceDetailView from "@/components/sections/ServiceDetailView";
import { serviceDetails } from "@/lib/content";

const detail = serviceDetails["full-growth-system"];

export const metadata: Metadata = {
  title: detail.title,
  description: detail.intro,
};

export default function FullGrowthSystemPage() {
  return <ServiceDetailView detail={detail} />;
}
