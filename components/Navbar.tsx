"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, school } from "@/data/school";
import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { Logo } from "./Logo";

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = openPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50" style={{ viewTransitionName: "site-header" }}>
      <div className="h-1 bg-gradient-to-r from-primary via-azure to-aqua" />
      <div
        className={cn(
          "relative border-b transition duration-300",
          scrolled
            ? "border-transparent bg-white shadow-md"
            : "border-sky/60 bg-white/90 backdrop-blur",
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Logo variant="monogram" priority />
            <span className="min-w-0">
              <span className="block font-serif text-sm leading-tight text-primary sm:text-xl">
                <span className="sm:hidden">
                  Volta Elite
                  <br />
                  Academy
                </span>
                <span className="hidden sm:inline">{school.name}</span>
              </span>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-azure sm:block">
                {school.motto}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition",
                  isActive(link.href)
                    ? "text-azure underline decoration-gold decoration-2 underline-offset-8"
                    : "text-primary hover:text-azure",
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/admissions">Apply Now</Button>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky text-primary lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {open ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="absolute inset-x-0 top-full max-h-[calc(100vh-5.25rem)] overflow-y-auto border-b border-sky/70 bg-white px-4 py-4 shadow-lg lg:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpenPath(null)}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-base font-semibold",
                      isActive(link.href)
                        ? "bg-offwhite text-azure"
                        : "text-primary hover:bg-offwhite",
                    )}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href="/admissions" className="mt-4 w-full" onClick={() => setOpenPath(null)}>
              Apply Now
            </Button>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
