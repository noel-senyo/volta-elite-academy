import Link from "next/link";
import { navLinks, school, socialLinks } from "@/data/school";
import { Logo } from "./Logo";

function SocialIcon({ id }: { id: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    "aria-hidden": true as const,
    fill: "currentColor",
  };

  if (id === "facebook") {
    return (
      <svg {...common}>
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
      </svg>
    );
  }
  if (id === "instagram") {
    return (
      <svg {...common}>
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.2 6.6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
      </svg>
    );
  }
  if (id === "youtube") {
    return (
      <svg {...common}>
        <path d="M23 12.2s0-3.2-.4-4.6a3 3 0 0 0-2.1-2.1C18.9 5 12 5 12 5s-6.9 0-8.5.5a3 3 0 0 0-2.1 2.1C1 9 1 12.2 1 12.2s0 3.2.4 4.6a3 3 0 0 0 2.1 2.1C5.1 19.4 12 19.4 12 19.4s6.9 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.2 3.3z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M14.7 10.3 22.4 2h-1.8l-6.7 7.2L8.7 2H2l8.1 11.1L2 22h1.8l7.1-7.6L15.3 22H22l-7.3-11.7zm-2.5 2.7-.8-1.1L4.5 3.3h2.8l5.3 7.1.8 1.1 6.9 9.2h-2.8l-5.3-7.7z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-white" style={{ viewTransitionName: "site-footer" }}>
      <div className="h-1 bg-gradient-to-r from-aqua via-sky to-gold" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo variant="crest" />
          <p className="mt-4 font-serif text-2xl">{school.name}</p>
          <p className="mt-1 text-sm font-semibold tracking-wide text-gold">
            {school.motto}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/85">
            {school.description}
          </p>
        </div>

        <div>
          <h2 className="font-serif text-xl text-white">Quick links</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/85 transition hover:text-sky"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/admissions#enquiry"
                className="text-sm text-white/85 transition hover:text-sky"
              >
                Book a Tour
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl text-white">Visit and contact</h2>
          <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-white/85">
            <p>{school.address}</p>
            <p>
              <a className="hover:text-sky" href={school.phoneHref}>
                {school.phone}
              </a>
            </p>
            <p>
              <a className="hover:text-sky" href={school.emailHref}>
                {school.email}
              </a>
            </p>
            <p>{school.hours}</p>
          </address>
        </div>

        <div>
          <h2 className="font-serif text-xl text-white">Follow the Academy</h2>
          <ul className="mt-4 flex gap-3">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-gold hover:text-gold"
                >
                  <SocialIcon id={link.id} />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-white/80">
            Day and boarding · Crèche to Grade 12 · Ho, Volta Region
          </p>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-4 py-5 text-sm text-white/75 sm:px-6 lg:px-8">
          (c) 2026 Volta Elite Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
