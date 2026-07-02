"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import { ChevronDown, CheckCircle2, Send } from "lucide-react";
import { book, site } from "@/lib/content";

/**
 * Fable-styled request-a-meeting form. The BEHAVIOR is a faithful copy of
 * components/sections/ContactForm.tsx — same data source (`book.meeting.form`
 * in lib/content.ts), same field names (incl. the optional Business Website
 * URL), same required flags, same mailto submission — only the visual classes
 * changed to match the Fable design system. If ContactForm's behavior changes,
 * mirror it here (and vice versa) until one replaces the other at promotion.
 */

const labelCls = "block text-sm font-semibold text-ink";
const fieldCls =
  "mt-1.5 min-h-11 w-full rounded-xl border border-white/10 bg-white/4 px-3.5 py-2.5 text-base text-ink transition-colors placeholder:text-slate/50 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/25";

export default function BookForm() {
  const { form } = book.meeting;
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const lines = [
      `Name: ${get("name")}`,
      `Business Name: ${get("business")}`,
      `Business Website URL: ${get("website")}`,
      `Industry: ${get("industry")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Preferred Meeting Type: ${get("meetingType")}`,
      "",
      "What they need help with:",
      get("message"),
    ];

    const subject = `Meeting request — ${get("business") || get("name")}`;
    const mailto = `mailto:${site.footer.contact}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    // Open the visitor's email client with everything pre-filled.
    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="fbl-card flex flex-col items-center justify-center px-6 py-12 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent/12 text-accent">
          <CheckCircle2 aria-hidden className="size-7" />
        </span>
        <p className="mt-4 text-xl font-bold text-ink">
          Thanks — your request is ready to send
        </p>
        <p className="mt-2 max-w-md text-slate">
          Your email app should have opened with the details filled in. If it
          didn&rsquo;t, you can reach us directly at{" "}
          <a
            href={`mailto:${site.footer.contact}`}
            className="font-semibold text-accent hover:text-accent-hover"
          >
            {site.footer.contact}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
        >
          Edit the form
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="fbl-card fbl-reg p-6 sm:p-9"
      noValidate={false}
    >
      <h3 className="fbl-display text-2xl text-ink">{form.heading}</h3>
      <p className="mt-2 text-slate">{form.note}</p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fbf-name" className={labelCls}>
            Name <Req />
          </label>
          <input id="fbf-name" name="name" type="text" required autoComplete="name" className={fieldCls} />
        </div>

        <div>
          <label htmlFor="fbf-business" className={labelCls}>
            Business Name <Req />
          </label>
          <input id="fbf-business" name="business" type="text" required autoComplete="organization" className={fieldCls} />
        </div>

        {/* Optional — lets us review the visitor's current site before the audit.
            No `required`/`<Req/>`, so the missing asterisk signals it's optional. */}
        <div>
          <label htmlFor="fbf-website" className={labelCls}>
            Business Website URL
          </label>
          <input
            id="fbf-website"
            name="website"
            type="url"
            inputMode="url"
            autoComplete="url"
            placeholder="https://yourbusiness.com"
            className={fieldCls}
          />
        </div>

        <div>
          <label htmlFor="fbf-industry" className={labelCls}>
            Industry <Req />
          </label>
          <Select id="fbf-industry" name="industry" placeholder="Select your industry" options={form.industries} />
        </div>

        <div>
          <label htmlFor="fbf-phone" className={labelCls}>
            Phone Number <Req />
          </label>
          <input id="fbf-phone" name="phone" type="tel" required autoComplete="tel" className={fieldCls} />
        </div>

        <div>
          <label htmlFor="fbf-email" className={labelCls}>
            Email <Req />
          </label>
          <input id="fbf-email" name="email" type="email" required autoComplete="email" className={fieldCls} />
        </div>

        <div>
          <label htmlFor="fbf-meetingType" className={labelCls}>
            Preferred Meeting Type <Req />
          </label>
          <Select
            id="fbf-meetingType"
            name="meetingType"
            placeholder="Select a meeting type"
            options={form.meetingTypes}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="fbf-message" className={labelCls}>
            Message / What do you need help with? <Req />
          </label>
          <textarea
            id="fbf-message"
            name="message"
            required
            rows={4}
            className={`${fieldCls} min-h-28 resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="fbl-btn fbl-btn-primary mt-8 w-full sm:w-auto"
      >
        <Send aria-hidden className="size-4" />
        {form.submitLabel}
      </button>
    </form>
  );
}

function Req() {
  return (
    <span aria-hidden className="text-accent">
      *
    </span>
  );
}

// Native <option> popups are painted by the OS/browser, so Tailwind classes on
// them are unreliable. Same fix as the production ContactForm: opaque themed
// option backgrounds inline + `color-scheme: dark` on the <select> so the
// native popup renders dark on every platform.
const optionStyle: CSSProperties = {
  backgroundColor: "var(--color-mist)",
  color: "var(--color-ink)",
};
const optionPlaceholderStyle: CSSProperties = {
  backgroundColor: "var(--color-mist)",
  color: "var(--color-slate)",
};

/** Native select styled to match inputs, with a chevron and required empty default. */
function Select({
  id,
  name,
  placeholder,
  options,
}: {
  id: string;
  name: string;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        required
        defaultValue=""
        className={`${fieldCls} appearance-none pr-10 [color-scheme:dark] [&:invalid]:text-slate/60`}
      >
        <option value="" disabled style={optionPlaceholderStyle}>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} style={optionStyle}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate"
      />
    </div>
  );
}
