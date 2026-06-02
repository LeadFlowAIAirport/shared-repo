import { PhoneMissed, Check, CalendarCheck } from "lucide-react";

/**
 * Illustrative mock of missed-call text-back → booking. This is an EXAMPLE of
 * how the system responds, not a record of any real customer or result — it is
 * labeled as such to stay within the honesty rules.
 */
export default function CallDemo() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Soft amber glow behind the panel — the "signal" color, used sparingly. */}
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-3xl bg-signal-soft/60 blur-2xl"
      />
      <figure className="overflow-hidden rounded-xl border border-line bg-paper shadow-xl shadow-ink/10">
        <figcaption className="flex items-center justify-between border-b border-line bg-mist px-4 py-3">
          <span className="text-sm font-semibold">After-hours lead</span>
          <span className="rounded-full bg-ink px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Example
          </span>
        </figcaption>

        <div className="space-y-3 p-4">
          {/* Missed call event */}
          <div className="flex items-center gap-3 rounded-lg bg-signal-soft px-3 py-2.5">
            <PhoneMissed aria-hidden className="size-5 shrink-0 text-ink" />
            <div className="text-sm">
              <p className="font-semibold text-ink">Missed call · 7:42 PM</p>
              <p className="text-ink/70">You were on a job</p>
            </div>
          </div>

          {/* Auto text-back from the business */}
          <Bubble side="out">
            Sorry we missed you! This is [Business]. What can we help with?
          </Bubble>

          {/* Customer reply */}
          <Bubble side="in">Water heater’s leaking. Can someone come out?</Bubble>

          {/* Business books it */}
          <Bubble side="out">
            We can do tomorrow morning. Want the 9:00 AM slot?
          </Bubble>
          <Bubble side="in">Yes please.</Bubble>

          {/* Booked confirmation */}
          <div className="flex items-center gap-3 rounded-lg border border-accent/30 bg-accent/5 px-3 py-2.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-white">
              <CalendarCheck aria-hidden className="size-4" />
            </span>
            <div className="text-sm">
              <p className="font-semibold text-ink">Appointment booked</p>
              <p className="text-slate">Tomorrow · 9:00 AM</p>
            </div>
            <Check aria-hidden className="ml-auto size-5 text-accent" />
          </div>
        </div>
      </figure>
    </div>
  );
}

function Bubble({ side, children }: { side: "in" | "out"; children: string }) {
  const out = side === "out";
  return (
    <div className={`flex ${out ? "justify-end" : "justify-start"}`}>
      <p
        className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-sm leading-snug ${
          out
            ? "rounded-br-sm bg-accent text-white"
            : "rounded-bl-sm bg-mist text-ink"
        }`}
      >
        {children}
      </p>
    </div>
  );
}
