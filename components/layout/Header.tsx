"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import { site } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle border/blur once the user scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  // Faint green radial aura placed behind a nav link's text (via ::before, kept
  // under the text with -z-10 in an isolated stacking context). Used only on the
  // "How It Works" link so it reads as gently highlighted, not dramatic.
  const howAura =
    "relative isolate before:pointer-events-none before:absolute before:-inset-x-3 before:-inset-y-2 before:-z-10 before:rounded-full before:bg-[radial-gradient(closest-side,rgba(47,125,104,0.18),rgba(47,125,104,0.07)_55%,transparent)] before:content-['']";

  // Animated underline that wipes in from the left on hover (and stays for the
  // active page). Pure transform on a ::after pseudo — no layout shift.
  const navUnderline =
    "relative after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-green after:transition-transform after:duration-200 after:ease-out-quint hover:after:scale-x-100 motion-reduce:after:transition-none";

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur transition-[box-shadow,border-color,background-color] duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/95 shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-(--container-site) items-center justify-between px-5 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight"
          aria-label={`${site.brand} home`}
        >
          <Zap aria-hidden className="size-6 text-accent" />
          {site.brand}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const isHow = item.href === "/how-it-works";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition-colors duration-200 hover:text-brand-green ${navUnderline} ${
                  active
                    ? "text-accent after:scale-x-100 after:bg-accent"
                    : "text-ink"
                } ${isHow ? howAura : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href={site.headerCta.href} className="px-5">
            {site.headerCta.label}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="animate-menu-in border-t border-line bg-paper md:hidden">
          <nav
            className="mx-auto flex w-full max-w-(--container-site) flex-col gap-1 px-5 py-4"
            aria-label="Mobile"
          >
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`rounded-lg px-3 py-3 text-lg font-medium transition-colors duration-200 hover:bg-mist hover:text-brand-green ${
                  item.href === "/how-it-works" ? howAura : ""
                }`}
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
