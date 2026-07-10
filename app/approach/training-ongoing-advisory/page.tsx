import type { Metadata } from "next";
import "../../fable.css";
import { fableFontVars } from "@/components/fable/fonts";
import { ApproachDetailView } from "@/components/fable/approachDetail";
import { approachDetails } from "@/lib/approachDetails";

// Detail page for the homepage "Our Approach" card → Training + ongoing advisory.
const data = approachDetails["training-ongoing-advisory"];

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
};

export default function TrainingOngoingAdvisoryPage() {
  return (
    <div className={`fable relative ${fableFontVars}`}>
      <div
        aria-hidden
        className="fbl-grid-dots fbl-mask-top pointer-events-none absolute inset-x-0 top-0 h-[40rem] opacity-50"
      />
      <div className="relative z-10">
        <ApproachDetailView data={data} />
      </div>
    </div>
  );
}
