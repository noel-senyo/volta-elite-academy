import { dayMoments } from "@/data/life";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function DayStrip() {
  return (
    <section className="bg-offwhite py-16 md:py-24" aria-labelledby="school-day-heading">
      <Container>
        <SectionHeading
          id="school-day-heading"
          eyebrow="A weekday"
          title="How the day moves"
          description="The same shape from Grade 1 to Grade 12. Younger children finish earlier. Boarders stay on after four."
        />
        <ol className="mt-10 flex gap-4 overflow-x-auto pb-2">
          {dayMoments.map((moment) => (
            <li
              key={moment.time}
              className="min-w-[15.5rem] flex-1 rounded-3xl border border-sky/70 bg-white p-5 shadow-sm"
            >
              <p className="font-serif text-3xl text-azure">{moment.time}</p>
              <h3 className="mt-2 font-serif text-xl text-primary">{moment.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/80">{moment.detail}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
