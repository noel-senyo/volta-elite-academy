import type { DayMoment, HouseProfile, SchoolDayRow, TourStop } from "@/lib/types";

export const houseProfiles: HouseProfile[] = [
  {
    id: "volta",
    name: "Volta",
    place: "The Adomi Bridge",
    description:
      "Volta House is named for the river. At Atimpoku the Adomi Bridge carries the road across it in one steel arch, the landmark the whole region knows.",
    image: "/images/adomi-bridge.jpg",
    imageAlt:
      "Aerial view of the Adomi Bridge, a steel arch crossing the Volta at Atimpoku",
  },
  {
    id: "adaklu",
    name: "Adaklu",
    place: "Mount Adaklu",
    description:
      "Adaklu House is named for the mountain south of Ho. The rock face stands over the town, and the house asks students to look up and finish what they start.",
    image: "/images/mount-adaklu.jpg",
    imageAlt:
      "Mount Adaklu, a steep green peak with a rocky summit, rising behind a metal roof near Ho",
  },
  {
    id: "afadja",
    name: "Afadja",
    place: "The highland country",
    description:
      "Afadja House is named for Mount Afadja, Ghana’s highest peak, in the forested hills north of Ho. A bell still gathers children in country like this.",
    image: "/images/volta-highlands.jpg",
    imageAlt:
      "A wooden gathering shelter and painted log seats in the Volta highlands, with forested hills behind",
  },
  {
    id: "kalakpa",
    name: "Kalakpa",
    place: "Kalakpa Reserve",
    description:
      "Kalakpa House is named for the Kalakpa Resource Reserve, the forest east of Ho. Students in the house are asked to look after the places and people they use.",
  },
];

export const dayMoments: DayMoment[] = [
  {
    time: "7:15",
    title: "Gates open",
    detail: "Day students arrive. Boarders are already at breakfast.",
  },
  {
    time: "7:40",
    title: "Assembly",
    detail: "A short gathering: notices, a reading, and the houses standing together.",
  },
  {
    time: "8:00",
    title: "Lessons",
    detail: "Classes of about twenty. The morning carries the main academic work.",
  },
  {
    time: "12:30",
    title: "Lunch",
    detail: "Everyone eats. Boarders and day students share the same meal.",
  },
  {
    time: "2:40",
    title: "Games and clubs",
    detail: "Field, pool, studio, or a society. This is part of the day, not an extra.",
  },
  {
    time: "4:00",
    title: "Home, or house",
    detail: "Day students leave. From Grade 4, boarders return to house for prep and supper.",
  },
];

export const tourStops: TourStop[] = [
  {
    title: "You are met at reception",
    detail: "A member of the admissions team meets you at the gate and walks with you. Tours are by appointment, on weekdays.",
  },
  {
    title: "The class your child would join",
    detail: "You see the room, the size of the group, and how a lesson actually sounds. Early years visits include time to watch the children at play.",
  },
  {
    title: "Laboratory and STEM studio",
    detail: "We stop in the science laboratory and, when a class is in, the robotics studio.",
  },
  {
    title: "Grounds, and a house if you ask",
    detail: "The field is part of every tour. Families considering boarding from Grade 4 also see a house and meet a house parent when one is free.",
  },
  {
    title: "A conversation before you leave",
    detail: "Most visits take about ninety minutes. You leave with the next step in writing: assessment, documents, or a second conversation. The year’s fee schedule is given then, not as a figure on this page.",
  },
];

export const schoolDay: SchoolDayRow[] = [
  { time: "7:15–7:40", activity: "Arrival" },
  { time: "7:40–8:00", activity: "Assembly" },
  { time: "8:00–10:20", activity: "Lessons" },
  { time: "10:20–10:40", activity: "Break" },
  { time: "10:40–12:30", activity: "Lessons" },
  { time: "12:30–1:15", activity: "Lunch" },
  { time: "1:15–2:40", activity: "Lessons" },
  { time: "2:40–4:00", activity: "Games, clubs, or societies" },
];
