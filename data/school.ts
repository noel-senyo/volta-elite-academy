import type {
  AdmissionStep,
  GalleryImage,
  HeroSlide,
  NavLink,
  Requirement,
  SocialLink,
  Stat,
  Value,
} from "@/lib/types";

export const school = {
  name: "Volta Elite Academy",
  motto: "Excellence. Character. Leadership.",
  location: "Ho, Volta Region, Ghana",
  address: "Volta Elite Academy, Ho, Volta Region, Ghana",
  founded: "January 2010",
  phone: "055 952 2123",
  phoneHref: "tel:+233559522123",
  email: "admissions@voltaacademy.edu.gh",
  emailHref: "mailto:admissions@voltaacademy.edu.gh",
  hours: "Monday to Friday, 7:30am to 4:30pm",
  description:
    "A co-educational day and boarding school in Ho, educating children from Crèche to Grade 12 since January 2010.",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export const founder = {
  name: "Noel S. J. Dese",
  role: "Founder and Head of School",
  heading: "A Message from Our Founder and Head of School",
  portrait: "/images/gallery-1.jpg",
  portraitAlt:
    "Students in school uniform talking together in a planted courtyard",
  excerpt:
    "I founded Volta Elite Academy in January 2010 because the children of Ho, and of the wider Volta Region, deserved a school equal to their promise. Sixteen years later, that promise still guides every classroom, laboratory and boarding house on this campus.",
  message:
    "I founded Volta Elite Academy in January 2010 because the children of Ho, and of the wider Volta Region, deserved a school equal to their promise. Too many bright pupils were leaving the highlands and the lake country for an education that should have been available at home. We began with a clear promise: small classes, serious teaching, and a community that forms character as carefully as it forms the mind. Sixteen years later, that promise still guides every classroom, laboratory and boarding house on this campus. I want our students to be confident without arrogance, capable in the sciences and the arts, and ready for responsibility anywhere in the world. I also want them to remember the river and the people who raised them. If you are looking for a school that will know your child by name, I would be glad to welcome you to Ho.",
};

export const vision =
  "A school in the Volta Region where young people grow confident, capable and globally minded, and still know the river, the highlands and the community that raised them.";

export const mission =
  "To give every child, from Crèche to Grade 12, a rigorous and caring education in small classes, with excellent teaching, a living STEM programme, and daily practice in character and leadership.";

export const story = [
  "Volta Elite Academy opened in Ho in January 2010. The founding idea was straightforward: families in the Volta Region should not have to send a child away to find a school that is both demanding and kind. We began as a close community and have spent sixteen years building the campus, the staff and the habits that make that promise real.",
  "Today the Academy is co-educational and offers day and boarding places from Crèche to Grade 12. Younger children learn through play, language and number. Older students prepare for the BECE at Grade 9 and the WASSCE at Grade 12, and they do that work in classes of about twenty, with teachers who are qualified and properly mentored.",
  "The Volta River, the lake and the highlands are not a backdrop we mention and forget. They are why the school is here. Our students come from Ho and from further across Ghana and the diaspora. We want them to leave us articulate, skilled and steady, ready for university and for responsibility, and proud of the place they started.",
];

export const values: Value[] = [
  {
    id: "excellence",
    title: "Excellence",
    description:
      "We set a high standard in teaching, effort and care, and we help every learner rise to it. Excellence here is a habit, not a performance.",
  },
  {
    id: "character",
    title: "Character",
    description:
      "Courtesy, honesty and self-discipline are taught as deliberately as any subject. We expect students to be the same person in the corridor as they are in assembly.",
  },
  {
    id: "leadership",
    title: "Leadership",
    description:
      "Students practise responsibility in class, in the four houses and in the daily life of the school. Leadership begins with reliability.",
  },
  {
    id: "curiosity",
    title: "Curiosity",
    description:
      "Questions are welcome. Science, languages and the arts are ways of looking carefully at the world, from a robotics bench to a line of poetry.",
  },
  {
    id: "service",
    title: "Service",
    description:
      "We belong to Ho and the Volta Region. Students are asked to use their gifts for other people, on campus and in the communities around us.",
  },
];

export const stats: Stat[] = [
  { id: "founded", value: 2010, from: 2000, label: "Founded in Ho" },
  { id: "class-size", value: 20, label: "Students per class" },
  { id: "grades", value: 12, label: "Crèche to Grade 12" },
  { id: "stem", value: null, text: "STEM", label: "Signature programme" },
  { id: "clubs", value: 15, suffix: "+", label: "Clubs and activities" },
];

export const heroSlides: HeroSlide[] = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Three students in school uniform talking together in a planted school courtyard",
    caption: "Students on campus",
  },
  {
    src: "/images/classroom-lesson.jpg",
    alt: "A student in a white shirt writing at her desk, with classmates working behind her",
    caption: "In the classroom",
  },
  {
    src: "/images/pool-lesson.jpg",
    alt: "A swimmer at the edge of the pool, with a lesson going on behind her",
    caption: "Swimming",
  },
  {
    src: "/images/science-lab.jpg",
    alt: "A teacher and students in safety glasses during a practical in a modern science laboratory",
    caption: "The science laboratory",
  },
  {
    src: "/images/hero-slide-3.jpg",
    alt: "Two boys in school sports kit playing football on the school field",
    caption: "Afternoon on the field",
  },
  {
    src: "/images/graduation.jpg",
    alt: "A young graduate in cap and gown seated at a ceremony",
    caption: "Where the years lead",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-1",
    src: "/images/gallery-1.jpg",
    alt: "Three students in school uniform talking in a planted courtyard",
    caption: "Between lessons",
  },
  {
    id: "gallery-2",
    src: "/images/classroom-lesson.jpg",
    alt: "A student in a white shirt writing at her desk during a lesson",
    caption: "A lesson",
  },
  {
    id: "gallery-3",
    src: "/images/gallery-3.jpg",
    alt: "Students building and wiring robots at a studio table",
    caption: "Robotics studio",
  },
  {
    id: "gallery-4",
    src: "/images/gallery-4.jpg",
    alt: "Students in safety glasses watching a chemistry demonstration",
    caption: "Science practical",
  },
  {
    id: "gallery-5",
    src: "/images/gallery-5.jpg",
    alt: "Students reading and using computers in a library lined with books",
    caption: "Library afternoon",
  },
  {
    id: "gallery-6",
    src: "/images/pool-swim.jpg",
    alt: "A boy swimming toward the camera in a bright pool",
    caption: "In the pool",
  },
  {
    id: "gallery-7",
    src: "/images/gallery-7.jpg",
    alt: "Two boys in school sports kit contesting a football",
    caption: "Football on the field",
  },
  {
    id: "gallery-8",
    src: "/images/gallery-8.jpg",
    alt: "Two children practising together at a piano",
    caption: "Music practice",
  },
  {
    id: "gallery-9",
    src: "/images/graduation-portrait.jpg",
    alt: "A graduate in a mortarboard, seated among other students at a ceremony",
    caption: "Graduation",
  },
  {
    id: "gallery-10",
    src: "/images/classroom-senior.jpg",
    alt: "Students in hijab seated together in a sunlit classroom",
    caption: "Senior students",
  },
  {
    id: "gallery-11",
    src: "/images/early-play.jpg",
    alt: "Three young children playing together in a ball pool",
    caption: "Play in the early years",
  },
  {
    id: "gallery-12",
    src: "/images/gallery-12.jpg",
    alt: "Lake Volta at dusk, with a wide gold reflection across the water. Photograph by Erasmus Kojo Assan Eshun, CC BY-SA 3.0",
    caption: "Lake Volta",
  },
];

export const houses = ["Afadja", "Adaklu", "Volta", "Kalakpa"] as const;

export const gradeOptions = [
  "Crèche",
  "Nursery",
  "Kindergarten",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
] as const;

export const startTerms = [
  "January 2027",
  "September 2027",
  "January 2028",
] as const;

export const requirements: Requirement[] = [
  {
    id: "form",
    title: "Completed application form",
    detail: "Submit the enquiry form on this page, or collect a paper form from the admissions office.",
  },
  {
    id: "birth",
    title: "Copy of the birth certificate",
    detail: "A clear copy is required for every applicant, from Crèche to Grade 12.",
  },
  {
    id: "report",
    title: "Previous school report",
    detail: "Required for Grade 1 and above. The most recent full report is enough to begin.",
  },
  {
    id: "photos",
    title: "Four passport-size photographs",
    detail: "Recent colour photographs of the child, with the name written lightly on the back.",
  },
  {
    id: "health",
    title: "Immunisation record",
    detail: "Please bring the child's current immunisation record to the parent interview.",
  },
  {
    id: "assessment",
    title: "Entrance assessment and parent interview",
    detail: "Required for Grade 2 and above. Earlier years are admitted through a family meeting and a short observation.",
  },
];

export const admissionSteps: AdmissionStep[] = [
  {
    step: 1,
    title: "Submit enquiry",
    description:
      "Tell us about your child using the form on this page, or call the admissions office. We reply within 48 hours.",
  },
  {
    step: 2,
    title: "Book a campus tour",
    description:
      "Walk the classrooms, laboratories and grounds in Ho, and meet people who will teach and care for your child.",
  },
  {
    step: 3,
    title: "Sit the entrance assessment",
    description:
      "From Grade 2, applicants sit a short assessment and the family attends an interview. Younger children are observed at play.",
  },
  {
    step: 4,
    title: "Receive admission decision",
    description:
      "We write with the outcome and, when we offer a place, the year group, the house if relevant, and the fee schedule.",
  },
  {
    step: 5,
    title: "Pay fees and enrol",
    description:
      "Accept the place, complete the enrolment papers, order uniform and, for boarders, confirm the house arrangement.",
  },
];

export const socialLinks: SocialLink[] = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com" },
  { id: "x", label: "X", href: "https://x.com" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com" },
];
