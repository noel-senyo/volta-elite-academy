import type { NewsItem } from "@/lib/types";

export const news: NewsItem[] = [
  {
    id: "admissions-2026",
    date: "2026-10-22",
    dateLabel: "22 October 2026",
    title: "2026/2027 admissions now open",
    summary:
      "Applications for the 2026/2027 year are open, including January 2027 entry where places remain. Enquire online, book a tour of the Ho campus, and arrange the entrance assessment.",
    image: "/images/news-4.jpg",
    imageAlt:
      "A modern school courtyard where families arrive for admissions tours",
  },
  {
    id: "open-day",
    date: "2026-10-18",
    dateLabel: "18 October 2026",
    title: "Open Day: campus tours for prospective parents",
    summary:
      "Prospective families are invited to tour the campus, meet teachers and see classrooms, the laboratory and the boarding houses. The next Open Day is Saturday, 21 November 2026. Please book through the admissions office.",
    image: "/images/news-1.jpg",
    imageAlt:
      "Students in school uniform talking in the courtyard during an Open Day",
  },
  {
    id: "stem-fair",
    date: "2026-10-12",
    dateLabel: "12 October 2026",
    title: "STEM Fair: students showcase robotics and science projects",
    summary:
      "Students from Upper Primary to Grade 12 will present robotics builds, coding projects and science investigations on Friday, 27 November 2026. Families and guests are welcome.",
    image: "/images/news-2.jpg",
    imageAlt:
      "Students presenting robotics and science projects at the Volta Elite Academy STEM Fair",
  },
  {
    id: "swimming-gala",
    date: "2026-10-10",
    dateLabel: "10 October 2026",
    title: "Swimming Gala: inter-house competition results",
    summary:
      "Afadja, Adaklu, Volta and Kalakpa houses met in the pool on 10 October 2026. Every swimmer raced, the house captains led with good spirit, and the full results are on the house boards.",
    image: "/images/pool-swim.jpg",
    imageAlt: "A boy swimming in a clear pool during a session",
  },
];

export function latestNews(count?: number): NewsItem[] {
  const sorted = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
  return typeof count === "number" ? sorted.slice(0, count) : sorted;
}
