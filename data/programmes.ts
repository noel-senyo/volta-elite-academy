import type { Department, Programme } from "@/lib/types";

export const programmes: Programme[] = [
  {
    id: "creche-nursery",
    name: "Crèche and Nursery",
    grades: "Crèche and Nursery",
    summary:
      "A calm, language-rich start for the youngest children, where play is the work and every child is known by name.",
    highlights: [
      "Play-based learning in small, carefully staffed groups",
      "Early literacy through songs, stories and conversation",
      "Early numeracy with objects, pattern and play",
      "Secure routines that help children settle and belong",
    ],
    image: "/images/creche.jpg",
    imageAlt:
      "Young children in neat play clothes learning through play in the Crèche at Volta Elite Academy",
  },
  {
    id: "kindergarten",
    name: "Kindergarten",
    grades: "Kindergarten",
    summary:
      "The year groups that prepare children for Grade 1: phonics, early mathematics, and the confidence to speak, share and try.",
    highlights: [
      "School readiness, including listening, turn-taking and independence",
      "Daily phonics and a love of books",
      "Early mathematics through practical activity",
      "Creative play in art, music and movement",
    ],
    image: "/images/early-play.jpg",
    imageAlt: "Three young children playing together in a colourful ball pool",
  },
  {
    id: "lower-primary",
    name: "Lower Primary",
    grades: "Grade 1 to Grade 3",
    summary:
      "A strong foundation in the subjects that everything else rests on, taught in classes of about twenty.",
    highlights: [
      "English, Mathematics and Science taught every day",
      "ICT introduced through guided, hands-on tasks",
      "French from Grade 1, spoken and written",
      "Creative Arts as a weekly part of the timetable",
    ],
    image: "/images/classroom-smartboard.jpg",
    imageAlt:
      "Lower primary students learning in a modern classroom with a smart board and interactive display",
  },
  {
    id: "upper-primary",
    name: "Upper Primary",
    grades: "Grade 4 to Grade 6",
    summary:
      "Deeper subject work, longer projects and the first real STEM challenges, with public speaking built into the week.",
    highlights: [
      "Subject teaching that asks students to explain their thinking",
      "Projects that connect English, Science and the humanities",
      "Public speaking in class and in assembly",
      "An introduction to robotics and STEM challenges",
    ],
    image: "/images/stem-kits.jpg",
    imageAlt:
      "Upper primary students using science kits during a practical STEM lesson",
  },
  {
    id: "junior-years",
    name: "Junior Years",
    grades: "Grade 7 to Grade 9",
    summary:
      "A broad curriculum that leads to the BECE at the end of Grade 9, with leadership and a first look at future pathways.",
    highlights: [
      "BECE preparation taught steadily from Grade 7, not crammed in the final term",
      "Leadership roles in houses, clubs and class",
      "Career conversations and visits that widen the view",
      "Laboratory science, ICT and a full creative arts programme",
    ],
    image: "/images/science-lab.jpg",
    imageAlt:
      "Junior Years students working in the modern science laboratory at Volta Elite Academy",
  },
  {
    id: "senior-years",
    name: "Senior Years",
    grades: "Grade 10 to Grade 12",
    summary:
      "WASSCE preparation at Grade 12, with four tracks and the independence expected of young adults.",
    highlights: [
      "Tracks: General Science, Business, General Arts and Visual Arts",
      "WASSCE preparation with regular, honest feedback",
      "Advanced STEM for science students, including robotics and the science fair",
      "University guidance that starts in Grade 10",
    ],
    image: "/images/classroom-senior.jpg",
    imageAlt: "Students in hijab seated together during a senior lesson",
  },
];

export const departments: Department[] = [
  {
    id: "sciences",
    name: "Sciences",
    description:
      "Biology, chemistry and physics in a modern laboratory, from first investigations in primary to WASSCE practical work.",
  },
  {
    id: "mathematics",
    name: "Mathematics",
    description:
      "Number, algebra, geometry and statistics taught for understanding, with support for students who need more time and stretch for those who move quickly.",
  },
  {
    id: "languages",
    name: "Languages",
    description:
      "English and literature at the centre, French across the school, and an enrichment strand in Ewe so students keep a language of this region.",
  },
  {
    id: "humanities",
    name: "Humanities",
    description:
      "History, geography, social studies, religious and moral education, and, in the Senior Years, government and economics.",
  },
  {
    id: "ict",
    name: "ICT and Robotics",
    description:
      "Computing, coding and robotics in a studio built for making things, not only for watching a demonstration.",
  },
  {
    id: "arts",
    name: "Creative Arts",
    description:
      "Visual art, music, dance and drama, with the Visual Arts track available at WASSCE and performances through the year.",
  },
  {
    id: "pe",
    name: "Physical Education",
    description:
      "Games, swimming, athletics and health education on the fields, courts and in the pool, for every year group.",
  },
];

export const stemPoints = [
  {
    id: "robotics",
    title: "Robotics",
    description:
      "Students design, build and programme robots, then test them against a real brief. The work starts as a club and a challenge in Upper Primary and deepens through the Senior Years.",
    image: "/images/stem-robotics.jpg",
    imageAlt:
      "Children building and programming robots in the STEM studio at Volta Elite Academy",
  },
  {
    id: "coding",
    title: "Coding",
    description:
      "Coding is taught on laptops in the computer lab and the STEM studio, from visual languages to text-based programming as students grow.",
    image: "/images/stem-coding.jpg",
    imageAlt: "Students coding together on laptops in a computing lesson",
  },
  {
    id: "challenges",
    title: "Engineering challenges",
    description:
      "Short, practical problems: a bridge, a water filter, a machine that sorts. Students plan, fail, adjust and explain what they learned.",
    image: "/images/stem-kits.jpg",
    imageAlt: "Children using science kits to test an engineering idea",
  },
  {
    id: "fair",
    title: "Science fair",
    description:
      "Each year students present investigations to families and guests. The next STEM Fair is on Friday, 27 November 2026.",
    image: "/images/science-lab.jpg",
    imageAlt:
      "Students presenting practical science work in the school laboratory",
  },
];
