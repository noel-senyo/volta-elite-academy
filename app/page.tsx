import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { Container } from "@/components/Container";
import { FounderMessage } from "@/components/FounderMessage";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { NewsCard } from "@/components/NewsCard";
import { ProgrammeCard } from "@/components/ProgrammeCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteImage } from "@/components/SiteImage";
import { StatsStrip } from "@/components/StatsStrip";
import { WaveDivider } from "@/components/WaveDivider";
import { Button } from "@/components/Button";
import { programmes, stemPoints } from "@/data/programmes";
import { galleryImages, school, stats } from "@/data/school";
import { DayStrip } from "@/components/DayStrip";
import { HouseCountry } from "@/components/HouseCountry";
import { latestNews } from "@/data/news";

export const metadata: Metadata = {
  title: {
    absolute: "Volta Elite Academy | Excellence. Character. Leadership.",
  },
  description:
    "Volta Elite Academy in Ho, Ghana offers a premium co-educational education from Crèche to Grade 12, with day and boarding, STEM, and small classes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Volta Elite Academy | Excellence. Character. Leadership.",
    description:
      "A premium day and boarding school in Ho, Volta Region, from Crèche to Grade 12.",
    url: "/",
    siteName: "Volta Elite Academy",
    locale: "en_GH",
    type: "website",
  },
};

export default function HomePage() {
  const previewNews = latestNews(3);

  return (
    <>
      <Hero />
      <WaveDivider fromClass="bg-primary" toClass="text-offwhite" />

      <section className="bg-offwhite py-16 md:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <Reveal>
            <SectionHeading
              eyebrow="The Academy"
              title="A school that knows your child"
              description="Opened in Ho in January 2010, for families who wanted a demanding, kind education without sending a child away."
            />
            <p className="mt-6 text-lg leading-relaxed text-charcoal/85">
              Classes stay near twenty, from Crèche to Grade 12, day and boarding. The longer story of how {school.name} was built is on the About page.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/academics">Explore Programmes</Button>
              <Button href="/about" variant="secondary">
                About the school
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card sm:aspect-[4/3]">
              <SiteImage
                src="/images/gallery-1.jpg"
                alt="Three students in school uniform talking together in a planted school courtyard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <WaveDivider fromClass="bg-offwhite" toClass="text-primary" />
      <StatsStrip stats={stats} />
      <WaveDivider fromClass="bg-primary" toClass="text-white" />
      <HouseCountry />
      <DayStrip />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <FounderMessage variant="preview" />
          </Reveal>
        </Container>
      </section>

      <section className="bg-offwhite py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Programmes"
              title="From first steps to Grade 12"
              description="Six stages, one standard. Choose a level to see how we teach, then read the full academic programme."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programmes.map((programme, index) => (
              <Reveal key={programme.id} delay={index * 60}>
                <ProgrammeCard programme={programme} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/academics">Explore Programmes</Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Signature STEM"
              title="Make it, test it, explain it"
              description="Robotics, coding, engineering challenges and a science fair. Students learn by building, not by watching someone else build."
            />
            <ul className="mt-6 space-y-4">
              {stemPoints.map((point) => (
                <li key={point.id}>
                  <h3 className="font-serif text-2xl text-primary">{point.title}</h3>
                  <p className="mt-1 leading-relaxed text-charcoal/80">{point.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/academics#stem">See the STEM programme</Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4">
              {stemPoints.slice(0, 4).map((point) => (
                <div key={point.id} className="relative aspect-square overflow-hidden rounded-3xl">
                  <SiteImage
                    src={point.image}
                    alt={point.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-offwhite py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Campus life"
              title="Facilities and the life around them"
              description="Classrooms, laboratories, the pool, the studio and the field. Select a photograph to look more closely."
            />
          </Reveal>
          <div className="mt-10">
            <Gallery images={galleryImages} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="News"
                title="Latest from the campus"
                description="Open days, the STEM Fair, the swimming gala and the admissions round now underway."
              />
              <Button href="/about#news" variant="secondary">
                All announcements
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {previewNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <WaveDivider fromClass="bg-white" toClass="text-primary" />
      <CTABanner
        title="Come and see the school for yourself"
        description="Admissions for 2026/2027 are open, including January 2027 entry where places remain. Tour the Ho campus, meet the staff, and talk with us about the right class for your child."
        primaryHref="/admissions"
        primaryLabel="Apply Now"
        secondaryHref="/admissions#enquiry"
        secondaryLabel="Book a Tour"
      />
    </>
  );
}
