import type { Metadata } from "next";
import VideoPlaceholder from "@/components/sections/VideoPlaceholder";
import { home } from "@/lib/content";

// Video walkthrough page (placeholder until the recorded walkthrough is embedded).
const item = home.videos.items.find((v) => v.slug === "ai-receptionist")!;

export const metadata: Metadata = {
  title: `${item.title} · Video Walkthrough`,
  description: item.blurb,
  robots: { index: false, follow: false },
};

export default function AiReceptionistVideoPage() {
  return <VideoPlaceholder item={item} />;
}
