import { Phone, Video, Handshake, ArrowUpRight, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { book } from "@/lib/content";

/**
 * Fable-styled "choose how you'd like to meet" cards. BEHAVIOR is a faithful
 * copy of components/sections/MeetingOptions.tsx — same data source
 * (`book.meeting` in lib/content.ts), same placeholder-link fallback to the
 * request form — only the visual classes changed to the Fable design system.
 */

const ICONS: Record<string, LucideIcon> = {
  phone: Phone,
  zoom: Video,
  "in-person": Handshake,
};

export default function MeetingChoices() {
  const { options } = book.meeting;

  return (
    <div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((opt, i) => {
          const Icon = ICONS[opt.id] ?? Phone;
          // Until real scheduler links are added, the placeholder hrefs (e.g.
          // "[ADD ... LINK]") route to the working request form instead.
          const placeholder = opt.href.startsWith("[");
          const href = placeholder ? "#request-meeting" : opt.href;
          // Lead with one recommended option (the quick phone call) to reduce
          // choice friction; the other methods stay available.
          const recommended = i === 0;
          return (
            <Reveal key={opt.id} delay={(i % 3) * 80} className="h-full">
              <li
                className={`fbl-card fbl-card-hover flex h-full flex-col p-6 ${
                  recommended ? "shadow-glow ring-1 ring-accent/25" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  {recommended && (
                    <span className="fbl-mono rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                      Recommended
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{opt.title}</h3>
                <p className="mt-2 flex-1 text-[15px] text-slate">{opt.description}</p>
                <a
                  href={href}
                  className={`fbl-btn fbl-btn-sm mt-6 ${
                    recommended ? "fbl-btn-primary" : "fbl-btn-ghost"
                  }`}
                >
                  {placeholder ? "Request this meeting" : opt.cta}
                  <ArrowUpRight aria-hidden className="fbl-btn-icon size-4" />
                </a>
              </li>
            </Reveal>
          );
        })}
      </ul>

      {options.some((o) => o.href.startsWith("[")) && (
        <Reveal delay={200} variant="fade">
          <p className="fbl-mono mt-6 max-w-2xl text-xs text-slate/70">
            Online scheduling links are coming soon. For now, request a time with
            the form below and we&rsquo;ll confirm by reply.
          </p>
        </Reveal>
      )}
    </div>
  );
}
