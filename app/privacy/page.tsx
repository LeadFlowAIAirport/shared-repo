import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { privacy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Atlas Leads LLC collects, uses, shares, and protects your information — in plain English.",
};

export default function PrivacyPage() {
  return (
    <Section bg="paper">
      <Reveal className="mx-auto max-w-3xl">
        <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.04] tracking-tight">
          {privacy.title}
        </h1>
        <p className="mt-4 text-sm font-medium text-slate">
          Last updated: {privacy.lastUpdated}
        </p>

        {privacy.intro.map((p, i) => (
          <p key={i} className="mt-6 text-lg text-slate">
            {p}
          </p>
        ))}

        <div className="mt-14 space-y-10">
          {privacy.sections.map((s) => (
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
            </div>
          ))}

          {/* Contact block — email rendered as a mailto link */}
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              {privacy.contact.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              {privacy.contact.intro}
            </p>
            <p className="mt-4 font-medium text-ink">{privacy.contact.legalName}</p>
            <p className="mt-1 text-slate">
              Email:{" "}
              <a
                href={`mailto:${privacy.contact.email}`}
                className="font-medium text-accent transition-colors hover:text-brand-green"
              >
                {privacy.contact.email}
              </a>
            </p>
            <p className="mt-1 text-slate">Website: {privacy.contact.website}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
