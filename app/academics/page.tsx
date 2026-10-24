import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { CTABanner } from "@/components/CTABanner";
import { PageHero } from "@/components/PageHero";
import { ProgrammeBrowser } from "@/components/ProgrammeBrowser";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteImage } from "@/components/SiteImage";
import { WaveDivider } from "@/components/WaveDivider";
import { facilities } from "@/data/facilities";
import { departments, stemPoints } from "@/data/programmes";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Academics",
  "Programmes from Crèche to Grade 12 at Volta Elite Academy, including BECE and WASSCE pathways, STEM, and classes of about twenty.",
  "/academics",
);

const learningIds = ["classrooms", "science-lab", "computer-lab"];

export default function AcademicsPage() {
  const learningSpaces = facilities.filter((facility) => learningIds.includes(facility.id));

  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="A curriculum with a clear spine"
        description="From play in the early years to WASSCE in Grade 12, students are taught in small classes by qualified, mentored teachers."
        image="/images/classroom-lesson.jpg"
        imageAlt="A student in a white shirt writing at her desk, with classmates working behind her"
      />

      <section className="bg-offwhite py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we teach"
              title="Small classes, serious subjects"
              description="A typical class has about twenty students. Teachers are qualified for their subjects and mentored through the year, so the standard in one classroom is the standard in the next."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["About 20", "Students in a typical class, so questions are heard."],
                ["Grade 9", "The BECE is prepared for steadily, not in a final rush."],
                ["Grade 12", "WASSCE tracks in Science, Business, General Arts and Visual Arts."],
              ].map(([title, text]) => (
                <Card key={title} className="p-6">
                  <p className="font-serif text-3xl text-primary">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/80">{text}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="programmes" className="scroll-mt-28 bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Levels"
              title="Programmes from Crèche to Grade 12"
              description="Open a level to see what students learn. We use Grade 1, Grade 2 and so on throughout the school."
            />
          </Reveal>
          <div className="mt-10">
            <ProgrammeBrowser />
          </div>
        </Container>
      </section>

      <section id="stem" className="scroll-mt-28 bg-offwhite py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Signature programme"
              title="STEM that students can hold in their hands"
              description="Robotics, coding, engineering challenges and the annual science fair sit beside the examined sciences, not instead of them."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {stemPoints.map((point) => (
              <Card key={point.id} className="group grid overflow-hidden p-0 sm:grid-cols-2">
                <div className="relative min-h-48">
                  <SiteImage
                    src={point.image}
                    alt={point.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-primary">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{point.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Where the work happens"
              title="Smart classrooms and modern labs"
              description="Lessons move between explanation and practice. The science laboratory, computer lab and smart-board classrooms are in daily use."
            />
          </Reveal>
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {learningSpaces.map((facility) => (
              <li key={facility.id}>
                <Card className="group h-full overflow-hidden p-0">
                  <div className="relative h-52">
                    {facility.image && facility.imageAlt ? (
                      <SiteImage
                        src={facility.image}
                        alt={facility.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-primary">{facility.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/80">{facility.description}</p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-offwhite py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Departments"
              title="The subjects, and the people who teach them"
              description="Seven departments carry the curriculum. Teachers plan together and are mentored, so a student meets the same standard from one room to the next."
            />
          </Reveal>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {departments.map((department) => (
              <li key={department.id}>
                <Card className="h-full p-6">
                  <h3 className="font-serif text-2xl text-primary">{department.name}</h3>
                  <p className="mt-2 leading-relaxed text-charcoal/80">{department.description}</p>
                </Card>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/admissions">Apply Now</Button>
          </div>
        </Container>
      </section>

      <WaveDivider fromClass="bg-offwhite" toClass="text-primary" />
      <CTABanner
        title="Find the right place for your child"
        description="Tell us the grade you have in mind. We will explain the programme, the assessment and the next date you can visit."
        primaryHref="/admissions"
        primaryLabel="Apply Now"
        secondaryHref="/admissions#enquiry"
        secondaryLabel="Book a Tour"
      />
    </>
  );
}
