import { Check, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Kicker, Shell, HEADING_SIZE } from "./sections";
import { PageHero } from "./pageBlocks";
import BookForm from "./BookForm";
import MeetingChoices from "./MeetingChoices";
import { bookPage } from "@/lib/fablePages";
import { book } from "@/lib/content";

/* The Fable Book sections, shared by the live /book page and the
   /preview/fable-book route. Copy lives in lib/fablePages.ts (bookPage);
   the meeting options, form fields, and contact addresses stay in
   lib/content.ts (`book`) so the conversion path keeps one data source.
   The form itself is components/fable/BookForm.tsx — a behavior-identical
   restyle of the old ContactForm (same field names, required flags, and
   mailto submission). */

const { hero, includes, expect, meet, form, contacts } = bookPage;

export function BookHero() {
  return <PageHero {...hero} center />;
}

/* 01 — What the audit includes */
export function BookIncludesSection() {
  return (
    <Shell id="includes" deep>
      <Kicker index="01" label={includes.kicker} />
      <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className={`fbl-display text-ink ${HEADING_SIZE}`}>{includes.heading}</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 text-slate">{includes.intro}</p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 border-l-2 border-accent pl-5 font-medium text-ink">
              {includes.reassurance}
            </p>
          </Reveal>
        </div>
        <ul className="lg:col-span-7">
          {includes.items.map((item, i) => (
            <li key={item} className={i > 0 ? "border-t border-white/7" : ""}>
              <Reveal delay={i * 60}>
                <div className="flex items-start gap-4 py-5">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                  <span className="text-base font-medium text-ink/90 sm:text-lg">{item}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}

/* 02 — What to expect on the call */
export function BookExpectSection() {
  return (
    <Shell id="expect">
      <Kicker index="02" label={expect.kicker} />
      <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <h2 className={`fbl-display text-ink ${HEADING_SIZE}`}>{expect.heading}</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 text-slate">{expect.whoFor}</p>
            </Reveal>
            <Reveal delay={140}>
              <div className="fbl-card fbl-reg mt-8 flex items-start gap-4 p-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                  <ShieldCheck className="size-5" aria-hidden />
                </span>
                <p className="text-[15px] text-slate">{expect.honesty}</p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="space-y-4 lg:col-span-7">
          {expect.items.map((item, i) => (
            <Reveal key={item} delay={i * 70}>
              <div className="fbl-card fbl-card-hover flex items-start gap-5 p-6">
                <span className="fbl-mono pt-0.5 text-sm font-medium text-accent/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] text-ink/90">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Shell>
  );
}

/* 03 — Choose how to meet */
export function BookMeetSection() {
  return (
    <Shell id="meet" deep>
      <Kicker index="03" label={meet.kicker} />
      <Reveal>
        <h2 className={`fbl-display mt-8 max-w-3xl text-ink ${HEADING_SIZE}`}>
          {meet.heading}
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-5 max-w-2xl text-slate">{meet.intro}</p>
      </Reveal>
      <div className="mt-10">
        <MeetingChoices />
      </div>
    </Shell>
  );
}

/* 04 — Request a meeting (form preserved) + direct contacts */
export function BookRequestSection() {
  return (
    <Shell id="request-meeting">
      <Kicker index="04" label={form.kicker} />
      <Reveal>
        <h2 className={`fbl-display mt-8 max-w-3xl text-ink ${HEADING_SIZE}`}>
          {form.heading}
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-5 max-w-2xl text-slate">{form.intro}</p>
      </Reveal>

      <div className="mx-auto mt-10 max-w-3xl">
        <Reveal delay={120}>
          <BookForm />
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-12 border-t border-white/7 pt-10">
            <h3 className="fbl-display text-xl text-ink">{contacts.heading}</h3>
            <p className="mt-2 text-slate">{contacts.intro}</p>
            <ul className="mt-6 space-y-4">
              <li>
                <p className="fbl-mono text-[10px] font-medium uppercase tracking-[0.2em] text-slate/60">
                  {book.contacts.general.label}
                </p>
                <a
                  href={`mailto:${book.contacts.general.email}`}
                  className="mt-1 inline-block font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  {book.contacts.general.email}
                </a>
              </li>
              {book.contacts.founders.map((person) => (
                <li key={person.email}>
                  <p className="text-sm font-semibold text-ink">
                    {person.name}{" "}
                    <span className="font-normal text-slate">· {person.role}</span>
                  </p>
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-1 inline-block font-semibold text-accent transition-colors hover:text-accent-hover"
                  >
                    {person.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}
