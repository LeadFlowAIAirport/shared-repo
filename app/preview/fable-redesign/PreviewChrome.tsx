"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import AtlasLogo from "@/components/brand/AtlasLogo";
import { nav } from "./content";

/* Preview ribbon + sticky header + mobile menu for the fable-redesign preview.
   The ribbon makes it unmistakable that this is a design preview, and links
   back to the unchanged live site. */

export default function PreviewChrome() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const navUnderline =
    "relative after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 after:ease-out-quint hover:after:scale-x-100 motion-reduce:after:transition-none";

  return (
    <>
      {/* Preview ribbon */}
      <div className="fbl-ribbon relative z-40">
        <div className="mx-auto flex h-9 w-full max-w-(--container-site) items-center justify-between gap-4 px-5 sm:px-8">
          <p className="fbl-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
            Design preview · Fable redesign
          </p>
          <Link
            href="/"
            className="fbl-mono text-[10px] uppercase tracking-[0.18em] text-slate transition-colors hover:text-ink"
          >
            View live site →
          </Link>
        </div>
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-40 border-b border-white/8 bg-[color-mix(in_oklab,var(--color-paper)_86%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-(--container-site) items-center justify-between gap-6 px-5 sm:px-8">
          <a href="#top" aria-label="Atlas Leads — back to top" className="flex items-center">
            <AtlasLogo variant="horizontal" tone="onDark" size={27} />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Preview sections">
            {nav.links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`fbl-mono text-[12px] font-medium uppercase tracking-[0.15em] text-slate transition-colors hover:text-ink ${navUnderline}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href={nav.cta.href} className="fbl-btn fbl-btn-primary fbl-btn-sm">
              {nav.cta.label}
              <ArrowUpRight className="fbl-btn-icon size-4" aria-hidden />
            </Link>
          </div>

          <button
            type="button"
            className="-mr-1 inline-flex size-11 items-center justify-center rounded-full text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[color-mix(in_oklab,var(--color-surface-deep)_94%,transparent)] backdrop-blur-2xl lg:hidden">
          <div className="flex h-16 items-center justify-between px-5">
            <AtlasLogo variant="horizontal" tone="onDark" size={27} />
            <button
              type="button"
              className="-mr-1 inline-flex size-11 items-center justify-center rounded-full text-ink"
              aria-label="Close menu"
              onClick={close}
            >
              <X className="size-6" aria-hidden />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-7" aria-label="Preview sections">
            {nav.links.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="fbl-display animate-menu-in flex items-baseline gap-4 py-3 text-3xl text-ink"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="fbl-mono text-sm font-normal text-accent/70">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="px-7 pb-10">
            <Link href={nav.cta.href} onClick={close} className="fbl-btn fbl-btn-primary w-full">
              {nav.cta.label}
              <ArrowUpRight className="fbl-btn-icon size-5" aria-hidden />
            </Link>
            <Link
              href="/"
              className="fbl-mono mt-5 block text-center text-[10.5px] uppercase tracking-[0.18em] text-slate"
            >
              View live site →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
