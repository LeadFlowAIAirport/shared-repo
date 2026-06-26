import type { Metadata } from "next";
import VideoPlaceholder from "@/components/sections/VideoPlaceholder";
import { home } from "@/lib/content";

// Video walkthrough page (placeholder until the recorded walkthrough is embedded).
// Copy is sourced from the shared videos data so the card and page stay in sync.
const item = home.videos.items.find((v) => v.slug === "ad-funnel")!;

export const metadata: Metadata = {
  title: `${item.title} · Video Walkthrough`,
  description: item.blurb,
  // Placeholder page: keep out of search indexes until the video is live.
  robots: { index: false, follow: false },
};

export default function AdsBookingVideoPage() {
  return <VideoPlaceholder title={item.title} blurb={item.blurb} />;
}
