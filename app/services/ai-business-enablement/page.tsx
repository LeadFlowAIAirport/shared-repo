import type { Metadata } from "next";
import ServiceDetailView from "@/components/sections/ServiceDetailView";
import { serviceDetails } from "@/lib/content";

const detail = serviceDetails["ai-business-enablement"];

export const metadata: Metadata = {
  title: detail.title,
  description: detail.intro,
};

export default function AiBusinessEnablementPage() {
  return <ServiceDetailView detail={detail} />;
}
