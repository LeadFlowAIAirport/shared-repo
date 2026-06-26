import { Phone, Video, Handshake, ArrowUpRight, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { book } from "@/lib/content";

/**
 * "Choose how you'd like to meet" — three booking options (phone / Zoom /
 * in-person). Content + the placeholder booking links live in `book.meeting`
 * in lib/content.ts (single place to update the real links later). Each card
 * has a subtle hover lift and a faint green border/aura, consistent with the
 * site's muted teal-green palette.
 */

const ICONS: Record<string, LucideIcon> = {
  phone: Phone,
  zoom: Video,
  "in-person": Handshake,
};

export default function MeetingOptions() {
  const { heading, intro, options } = book.meeting;

  return (
    <div>
      <Reveal className="max-w-2xl">
        <h2 className="text-[clamp(1.6rem,3vw,2.25rem)]">{heading}</h2>
        <p className="mt-3 text-lg text-slate">{intro}</p>
      </Reveal>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((opt, i) => {
          const Icon = ICONS[opt.id] ?? Phone;
          // Until real scheduler links are added, the placeholder hrefs (e.g.
          // "[ADD ... LINK]") route to the working request form instead.
          const placeholder = opt.href.startsWith("[");
          const href = placeholder ? "#request-meeting" : opt.href;
          return (
            <Reveal key={opt.id} delay={(i % 3) * 80} className="h-full">
              <li className="group flex h-full flex-col rounded-xl border border-line bg-paper p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-lg hover:shadow-brand-green/10">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-200 group-hover:bg-brand-green/10 group-hover:text-brand-green">
                  <Icon aria-hidden className="size-6" />
                </span>
                <h3 className="mt-4 text-xl leading-snug">{opt.title}</h3>
                <p className="mt-2 flex-1 text-slate">{opt.description}</p>
                <a
                  href={href}
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-on-accent transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {placeholder ? "Request this meeting" : opt.cta}
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            </Reveal>
          );
        })}
      </ul>

      {options.some((o) => o.href.startsWith("[")) && (
        <p className="mt-6 max-w-2xl text-sm font-medium text-slate">
          Online scheduling links are coming soon. For now, request a time with
          the form below and we’ll confirm by reply.
        </p>
      )}
    </div>
  );
}
