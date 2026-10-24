import type { Activity, ActivityCategory } from "@/lib/types";

export const activityCategories: ActivityCategory[] = [
  "Sports",
  "Arts",
  "Media and Tech",
  "Clubs and Leadership",
];

export const activities: Activity[] = [
  {
    id: "swimming",
    name: "Swimming",
    category: "Sports",
    description:
      "Lessons in the school pool, from water confidence in the early years to stroke work and the inter-house gala.",
    image: "/images/pool-swim.jpg",
    imageAlt: "A boy swimming toward the camera in a bright pool",
  },
  {
    id: "karate",
    name: "Karate",
    category: "Sports",
    description:
      "Graded sessions in the dojo. Students learn technique, and they also learn how to be still, respectful and persistent.",
    image: "/images/karate.jpg",
    imageAlt: "A karate class training in the school dojo",
  },
  {
    id: "football",
    name: "Football",
    category: "Sports",
    description:
      "Training and matches on the campus field, with teams across the year groups and a place for students who are new to the game.",
    image: "/images/football.jpg",
    imageAlt: "Students contesting a football match on the green campus field",
  },
  {
    id: "basketball",
    name: "Basketball",
    category: "Sports",
    description:
      "Court sessions that build fitness, teamwork and a clean, skilled game. House competitions run through the term.",
  },
  {
    id: "music",
    name: "Music",
    category: "Arts",
    description:
      "Instrumental lessons and classroom music, with opportunities to perform at assembly, Open Day and the end-of-term concert.",
    image: "/images/music.jpg",
    imageAlt: "Students in a music lesson with instruments at Volta Elite Academy",
  },
  {
    id: "dance",
    name: "Dance",
    category: "Arts",
    description:
      "Technique and performance work that draws on Ghanaian and contemporary dance, shown at school productions.",
    image: "/images/dance.jpg",
    imageAlt: "Students in costume during a dance performance rehearsal",
  },
  {
    id: "band",
    name: "School band",
    category: "Arts",
    description:
      "A rehearsal band for students who already play and those ready to learn a part. The band leads ceremony and celebration.",
  },
  {
    id: "drama",
    name: "Drama",
    category: "Arts",
    description:
      "Scene work, voice and a yearly production. Drama is also how many students find the confidence to speak in public.",
  },
  {
    id: "choir",
    name: "Choir",
    category: "Arts",
    description:
      "Two rehearsals a week and a repertoire that includes hymns, Ghanaian choral music and lighter concert pieces.",
  },
  {
    id: "media",
    name: "Content creation and media",
    category: "Media and Tech",
    description:
      "Students plan, film and edit short pieces in the media studio, learning how to tell a true story with care.",
    image: "/images/content-creation.jpg",
    imageAlt:
      "Students working together on laptops during a media and technology session",
  },
  {
    id: "coding",
    name: "Coding club",
    category: "Media and Tech",
    description:
      "An after-school club for students who want more time at the keyboard, from first programs to longer projects.",
    image: "/images/computer-lab.jpg",
    imageAlt: "Students gathered at computers during a coding session",
  },
  {
    id: "debate",
    name: "Debate club",
    category: "Clubs and Leadership",
    description:
      "Motions, research and the discipline of answering the point you were actually asked. Teams speak in school and at friendly fixtures.",
  },
  {
    id: "chess",
    name: "Chess",
    category: "Clubs and Leadership",
    description:
      "A quiet, competitive club. Beginners are taught the board properly, and experienced players train for inter-school matches.",
  },
  {
    id: "cadets",
    name: "Cadets",
    category: "Clubs and Leadership",
    description:
      "Drill, service and outdoor challenges for older students who want responsibility, fitness and a clear code of conduct.",
  },
];
