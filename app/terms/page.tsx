import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { terms } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms and conditions for using atlasaileads.com and working with Atlas Leads LLC — in plain English.",
};

export default function TermsPage() {
  return (
    <Section bg="paper">
      <Reveal className="mx-auto max-w-3xl">
        <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.04] tracking-tight">
          {terms.title}
        </h1>
        <p className="mt-4 text-sm font-medium text-slate">
          Last updated: {terms.lastUpdated}
        </p>

        {terms.intro.map((p, i) => (
          <p key={i} className="mt-6 text-lg text-slate">
            {p}
          </p>
        ))}

        <div className="mt-14 space-y-10">
          {terms.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-semibold sm:text-2xl">{s.heading}</h2>
              {s.body?.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed text-slate">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-4 space-y-2.5">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-slate">
                      <span
                        aria-hidden
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.link && (
                <p className="mt-4">
                  <Link
                    href={s.link.href}
                    className="font-medium text-accent transition-colors hover:text-brand-green"
                  >
                    {s.link.label}
                  </Link>
                </p>
              )}
            </div>
          ))}

          {/* Contact block — email rendered as a mailto link */}
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              {terms.contact.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              {terms.contact.intro}
            </p>
            <p className="mt-4 font-medium text-ink">{terms.contact.legalName}</p>
            <p className="mt-1 text-slate">
              Email:{" "}
              <a
                href={`mailto:${terms.contact.email}`}
                className="font-medium text-accent transition-colors hover:text-brand-green"
              >
                {terms.contact.email}
              </a>
            </p>
            <p className="mt-1 text-slate">Website: {terms.contact.website}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
