"use client";

import { useState, type FormEvent } from "react";
import { ChevronDown, CheckCircle2, Send } from "lucide-react";
import { book, site } from "@/lib/content";

/**
 * Request-a-meeting contact form. Fields live in `book.meeting.form`. With no
 * backend wired up, submitting composes a pre-filled email (mailto) to the
 * site contact address — swap the `onSubmit` handler for a real form endpoint
 * or email service later. "Preferred Meeting Type" is required.
 */

const labelCls = "block text-sm font-semibold text-ink";
const fieldCls =
  "mt-1.5 min-h-11 w-full rounded-md border border-line bg-paper px-3.5 py-2.5 text-base text-ink shadow-sm transition-colors placeholder:text-slate/50 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/25";

export default function ContactForm() {
  const { form } = book.meeting;
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const lines = [
      `Name: ${get("name")}`,
      `Business Name: ${get("business")}`,
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
      <div className="flex flex-col items-center justify-center rounded-xl border border-line bg-mist px-6 py-12 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
          <CheckCircle2 aria-hidden className="size-7" />
        </span>
        <p className="mt-4 text-xl font-semibold">Thanks — your request is ready to send</p>
        <p className="mt-2 max-w-md text-slate">
          Your email app should have opened with the details filled in. If it
          didn&rsquo;t, you can reach us directly at{" "}
          <a
            href={`mailto:${site.footer.contact}`}
            className="font-semibold text-accent hover:text-brand-green"
          >
            {site.footer.contact}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-accent transition-colors hover:text-brand-green"
        >
          Edit the form
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-line bg-paper p-6 shadow-sm sm:p-8"
      noValidate={false}
    >
      <h3 className="text-xl leading-snug">{form.heading}</h3>
      <p className="mt-2 text-slate">{form.note}</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelCls}>
            Name <Req />
          </label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" className={fieldCls} />
        </div>

        <div>
          <label htmlFor="cf-business" className={labelCls}>
            Business Name <Req />
          </label>
          <input id="cf-business" name="business" type="text" required autoComplete="organization" className={fieldCls} />
        </div>

        <div>
          <label htmlFor="cf-industry" className={labelCls}>
            Industry <Req />
          </label>
          <Select id="cf-industry" name="industry" placeholder="Select your industry" options={form.industries} />
        </div>

        <div>
          <label htmlFor="cf-phone" className={labelCls}>
            Phone Number <Req />
          </label>
          <input id="cf-phone" name="phone" type="tel" required autoComplete="tel" className={fieldCls} />
        </div>

        <div>
          <label htmlFor="cf-email" className={labelCls}>
            Email <Req />
          </label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className={fieldCls} />
        </div>

        <div>
          <label htmlFor="cf-meetingType" className={labelCls}>
            Preferred Meeting Type <Req />
          </label>
          <Select
            id="cf-meetingType"
            name="meetingType"
            placeholder="Select a meeting type"
            options={form.meetingTypes}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className={labelCls}>
            Message / What do you need help with? <Req />
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={4}
            className={`${fieldCls} min-h-28 resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
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
        className={`${fieldCls} appearance-none pr-10 [&:invalid]:text-slate/60`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
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
