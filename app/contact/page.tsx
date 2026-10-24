import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { school } from "@/data/school";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Contact",
  "Contact Volta Elite Academy in Ho by phone, email or message. The campus is open Monday to Friday, 7:30am to 4:30pm.",
  "/contact",
);

const details = [
  { label: "Address", value: school.address, href: undefined },
  { label: "Phone", value: school.phone, href: school.phoneHref },
  { label: "Email", value: school.email, href: school.emailHref },
  { label: "Hours", value: school.hours, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We are easy to reach"
        description="Call, write, or send a message. The admissions office is open on weekdays, and tours are arranged by appointment."
        image="/images/library.jpg"
        imageAlt="The library and reading lounge at Volta Elite Academy, a quiet place for families to begin a visit"
      />

      <section className="bg-offwhite py-16 md:py-24">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((item) => (
              <li key={item.label} className="rounded-3xl border border-sky/70 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azure">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="mt-3 block font-semibold text-primary hover:text-azure">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 font-semibold leading-relaxed text-primary">{item.value}</p>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="relative flex min-h-80 flex-col justify-between overflow-hidden rounded-3xl bg-primary p-8 text-white">
                <svg viewBox="0 0 600 360" className="pointer-events-none absolute inset-0 h-full w-full opacity-30" aria-hidden="true">
                  <path d="M0 220 C120 180 180 250 300 210 C420 170 480 230 600 190" fill="none" stroke="#8EC5FF" strokeWidth="8" />
                  <path d="M0 250 C140 210 200 280 320 240 C440 200 500 260 600 220" fill="none" stroke="#2BB3C0" strokeWidth="6" />
                  <path d="M0 280 C150 240 220 310 340 270 C460 230 510 290 600 250" fill="none" stroke="#D4A94A" strokeWidth="3" />
                </svg>
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky">Campus map</p>
                  <h2 className="mt-3 font-serif text-4xl">Ho, Volta Region</h2>
                  <p className="mt-4 max-w-md leading-relaxed text-white/90">
                    The campus is in Ho, beneath Mount Adaklu. The Volta, and the Adomi Bridge at Atimpoku, lie to the east. Directions are sent when your tour is confirmed.
                  </p>
                  <a
                    href="https://www.openstreetmap.org/?mlat=6.611&mlon=0.471#map=14/6.611/0.471"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white"
                  >
                    Open Ho on the map
                  </a>
                </div>
                <div className="relative mt-8 flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold text-primary" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z" />
                    </svg>
                  </span>
                  <p className="font-semibold">{school.address}</p>
                </div>
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Write to us"
                title="Send a message"
                description="Ask about a tour, a grade, transport or boarding. We reply during school hours."
              />
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
