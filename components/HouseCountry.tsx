import { houseProfiles } from "@/data/life";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SiteImage } from "./SiteImage";

export function HouseCountry() {
  return (
    <section id="houses" className="scroll-mt-28 bg-white py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The Volta"
            title="Four houses, named for this country"
            description="Afadja, Adaklu, Volta and Kalakpa are the highland peak, the mountain above Ho, the river, and the forest. Students live and compete in those names."
          />
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {houseProfiles.map((house) => (
            <li key={house.id}>
              <article className="group relative flex min-h-[28rem] flex-col justify-end overflow-hidden rounded-3xl shadow-card">
                {house.image && house.imageAlt ? (
                  <SiteImage
                    src={house.image}
                    alt={house.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-primary" aria-hidden="true">
                    <svg viewBox="0 0 400 600" className="h-full w-full opacity-40" preserveAspectRatio="xMidYMid slice">
                      <path d="M0 420 C80 380 140 460 220 410 C300 360 340 420 400 390 L400 600 L0 600 Z" fill="#1E6FD9" />
                      <path d="M0 470 C90 430 160 510 250 460 C320 420 360 470 400 440 L400 600 L0 600 Z" fill="#2BB3C0" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/25 to-transparent" />
                <div className="relative z-10 p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {house.name} House
                  </p>
                  <h3 className="mt-2 font-serif text-3xl leading-tight">{house.place}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">{house.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
