import { Accordion } from "@/components/Accordion";
import { Container } from "@/components/Container";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { admissionSteps, requirements } from "@/data/school";
import { schoolDay, tourStops } from "@/data/life";
import { faqs } from "@/data/faqs";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Admissions",
  "Admission requirements, application steps, fees guidance and campus tours at Volta Elite Academy in Ho, Volta Region.",
  "/admissions",
);

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="A clear path to a place at the Academy"
        description="Enquire, visit, and, from Grade 2, sit a short assessment. We reply within 48 hours and we will tell you plainly what happens next."
        image="/images/graduation-hall.jpg"
        imageAlt="Graduates in cap and gown seated in rows at a ceremony"
      />

      <section className="bg-offwhite py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What to prepare"
              title="Admission requirements"
              description="Bring these when you apply. If something is still on its way, start the enquiry anyway and tell us."
            />
          </Reveal>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {requirements.map((item, index) => (
              <li key={item.id} className="rounded-3xl border border-sky/70 bg-white p-6 shadow-sm">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-lg text-gold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/80">{item.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The process"
              title="Five steps from enquiry to enrolment"
              description="Most families move through the steps in this order. We will say if a later step needs to wait for a document."
            />
          </Reveal>
          <ol className="relative mt-12 grid gap-6 md:grid-cols-5">
            <div className="pointer-events-none absolute left-8 right-8 top-8 hidden h-px bg-sky md:block" aria-hidden="true" />
            {admissionSteps.map((step) => (
              <li key={step.step} className="relative rounded-3xl border border-sky/70 bg-white p-5 shadow-sm">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-serif text-xl text-gold">
                  {step.step}
                </span>
                <h3 className="mt-4 font-serif text-xl text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/80">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-offwhite py-16 md:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Your visit"
              title="What a tour includes"
              description="About ninety minutes on a weekday. Book it from the form below, or call the admissions office."
            />
            <ol className="mt-8 space-y-5">
              {tourStops.map((stop, index) => (
                <li key={stop.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-gold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-primary">{stop.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal/80">{stop.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={80}>
            <SectionHeading
              eyebrow="An example"
              title="A Grade 5 weekday"
              description="This is the shape of a day, not the published timetable. You receive the timetable for your child’s grade at enrolment. Day students leave at 4:00."
            />
            <div className="mt-8 overflow-x-auto rounded-3xl border border-sky/70 bg-white shadow-sm">
            <table className="w-full text-left">
              <caption className="sr-only">Example weekday for Grade 5</caption>
              <thead className="bg-primary text-white">
                <tr>
                  <th scope="col" className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em]">
                    Time
                  </th>
                  <th scope="col" className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em]">
                    What happens
                  </th>
                </tr>
              </thead>
              <tbody>
                {schoolDay.map((row) => (
                  <tr key={row.time} className="border-t border-sky/60">
                    <th scope="row" className="whitespace-nowrap px-5 py-3 font-serif text-lg text-primary">
                      {row.time}
                    </th>
                    <td className="px-5 py-3 text-charcoal/85">{row.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <Reveal>
            <SectionHeading
              eyebrow="Questions"
              title="Before you apply"
              description="Age, deadlines, boarding, transport, fees, meals, uniform, scholarships and how to book a tour."
            />
          </Reveal>
          <Accordion items={faqs} />
        </Container>
      </section>

      <section id="enquiry" className="scroll-mt-28 bg-offwhite py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <Reveal>
            <SectionHeading
              eyebrow="Book a tour"
              title="Tell us about your child"
              description="This form stays on your device. Use it to request a tour, ask about a grade, or begin an application. We will contact you within 48 hours."
            />
          </Reveal>
          <EnquiryForm />
        </Container>
      </section>
    </>
  );
}
