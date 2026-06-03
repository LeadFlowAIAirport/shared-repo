import Link from "next/link";
import { Zap } from "lucide-react";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto grid w-full max-w-(--container-site) gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
            <Zap aria-hidden className="size-6 text-accent" />
            {site.brand}
          </div>
          <p className="mt-4 text-slate">{site.footer.pitch}</p>
          <p className="mt-4 text-sm font-medium text-ink/70">
            {site.footer.note}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate">
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={site.bookHref} className="font-semibold text-accent">
                {site.headerCta.label}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-2 text-slate">
            {/* TODO: swap in the two real partner names. */}
            {site.footer.partners.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
            <li>
              <a href={`mailto:${site.footer.contact}`} className="hover:text-accent">
                {site.footer.contact}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-(--container-site) flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-slate sm:flex-row sm:px-6">
          <p>
            © {site.brand}. Built for plumbing, electrical, HVAC &amp; pest
            control companies.
          </p>
          <ul className="flex gap-6">
            {site.footer.legal.map((label) => (
              <li key={label}>
                {/* TODO: link to real privacy/terms pages. */}
                <Link href="#" className="hover:text-accent">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
