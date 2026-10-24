import { ActivityBrowser } from "@/components/ActivityBrowser";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { CTABanner } from "@/components/CTABanner";
import { FounderMessage } from "@/components/FounderMessage";
import { Logo } from "@/components/Logo";
import { NewsCard } from "@/components/NewsCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteImage } from "@/components/SiteImage";
import { WaveDivider } from "@/components/WaveDivider";
import { facilities } from "@/data/facilities";
import { latestNews } from "@/data/news";
import { mission, story, values, vision } from "@/data/school";
import { HouseCountry } from "@/components/HouseCountry";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "About",
  "The story, values, founder’s welcome, facilities and news of Volta Elite Academy, a private school in Ho since January 2010.",
  "/about",
);

export default function AboutPage() {
  const articles = latestNews();

  return (
    <>
      <PageHero
        eyebrow="About the school"
        title="Sixteen years in Ho, and still becoming"
        description="Volta Elite Academy was founded in January 2010 for families who wanted a rigorous, caring school in the Volta Region. This is who we are, and what we hold to."
        image="/images/campus-aerial.jpg"
        imageAlt="Aerial view of a school campus with classroom blocks set in green grounds"
      />

      <HouseCountry />

      <section className="bg-offwhite py-16 md:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <Reveal>
            <div className="flex flex-col items-start">
              <Logo variant="crest" />
              <p className="mt-4 font-serif text-2xl text-primary">Excellence. Character. Leadership.</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <SectionHeading eyebrow="Our story" title="Founded in Ho, January 2010" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal/85">
              {story.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card hover={false} tone="dark" className="h-full p-8">
              <h2 className="font-serif text-3xl">Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/90">{vision}</p>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card hover={false} className="h-full p-8">
              <h2 className="font-serif text-3xl text-primary">Mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/85">{mission}</p>
            </Card>
          </Reveal>
        </Container>
      </section>

      <section className="bg-offwhite py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we stand for"
              title="Five values, practised daily"
              description="The motto names three. Two more keep us honest about how a school in this region ought to live."
            />
          </Reveal>
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <li key={value.id}>
                <Card className="h-full p-6">
                  <h3 className="font-serif text-2xl text-primary">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-charcoal/80">{value.description}</p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="founder" className="scroll-mt-28 bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <FounderMessage variant="full" />
          </Reveal>
        </Container>
      </section>

      <section id="facilities" className="scroll-mt-28 bg-offwhite py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Facilities"
              title="Rooms built for the work"
              description="Laboratories, studios, houses and fields. The campus is secure, staffed and meant to be used."
            />
          </Reveal>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <li key={facility.id}>
                <Card className="group flex h-full flex-col overflow-hidden p-0">
                  <div className="relative h-44 overflow-hidden">
                    {facility.image && facility.imageAlt ? (
                      <SiteImage
                        src={facility.image}
                        alt={facility.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-end bg-gradient-to-br from-primary via-azure to-aqua p-4">
                        <p className="font-serif text-2xl text-white">{facility.name}</p>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-2xl text-primary">{facility.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/80">{facility.description}</p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="activities" className="scroll-mt-28 bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Beyond the timetable"
              title="Extracurricular activities"
              description="Sport, the arts, media and the clubs where students practise leadership. Filter by category, or browse them all."
            />
          </Reveal>
          <div className="mt-10">
            <ActivityBrowser />
          </div>
        </Container>
      </section>

      <section id="news" className="scroll-mt-28 bg-offwhite py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Announcements"
              title="News from the Academy"
              description="What is happening on campus this term, and how families can take part."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {articles.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <WaveDivider fromClass="bg-offwhite" toClass="text-primary" />
      <CTABanner
        title="The next step is a conversation"
        description="Read the admissions process, or book a tour and walk the campus with us."
        primaryHref="/admissions"
        primaryLabel="Apply Now"
        secondaryHref="/contact"
        secondaryLabel="Contact the school"
      />
    </>
  );
}
