"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import AtlasLogo from "@/components/brand/AtlasLogo";
import { site } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Tighten/deepen the floating pill once the user scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  // Animated underline that wipes in from the left on hover (and stays for the
  // active page). Pure transform on a ::after pseudo — no layout shift.
  const navUnderline =
    "relative after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-grad-accent after:transition-transform after:duration-200 after:ease-out-quint hover:after:scale-x-100 motion-reduce:after:transition-none";

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex h-14 w-full max-w-(--container-site) items-center justify-between gap-4 rounded-full px-3 pl-5 transition-all duration-300 ${
          scrolled
            ? "glass-strong shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]"
            : "glass"
        }`}
      >
        <Link
          href="/"
          className="flex items-center"
          aria-label={`${site.brand} home`}
        >
          <AtlasLogo variant="horizontal" tone="onDark" size={28} />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary"
        >
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-ink ${navUnderline} ${
                  active
                    ? "text-ink after:scale-x-100"
                    : "text-slate"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href={site.headerCta.href} className="h-10 min-h-10 px-5 text-sm">
            {site.headerCta.label}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="-mr-1 inline-flex size-11 items-center justify-center rounded-full text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="animate-menu-in mx-auto mt-2 w-full max-w-(--container-site) overflow-hidden rounded-3xl border border-white/12 bg-[color-mix(in_oklab,var(--color-paper)_92%,transparent)] shadow-[0_22px_55px_-12px_rgba(0,0,0,0.75)] backdrop-blur-xl md:hidden">
          <nav
            className="flex flex-col gap-1 p-3"
            aria-label="Mobile"
          >
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-lg font-medium text-slate transition-colors duration-200 hover:bg-white/5 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Button
              href={site.headerCta.href}
              fullWidth
              className="mt-2"
              onClick={closeMenu}
            >
              {site.headerCta.label}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
