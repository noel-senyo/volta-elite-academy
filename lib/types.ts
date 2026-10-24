export type NavLink = {
  href: string;
  label: string;
};

export type Stat = {
  id: string;
  value: number | null;
  from?: number;
  prefix?: string;
  suffix?: string;
  text?: string;
  label: string;
};

export type Value = {
  id: string;
  title: string;
  description: string;
};

export type Programme = {
  id: string;
  name: string;
  grades: string;
  summary: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
};

export type Department = {
  id: string;
  name: string;
  description: string;
};

export type Facility = {
  id: string;
  name: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export type ActivityCategory =
  | "Sports"
  | "Arts"
  | "Media and Tech"
  | "Clubs and Leadership";

export type Activity = {
  id: string;
  name: string;
  category: ActivityCategory;
  description: string;
  image?: string;
  imageAlt?: string;
};

export type NewsItem = {
  id: string;
  date: string;
  dateLabel: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export type AdmissionStep = {
  step: number;
  title: string;
  description: string;
};

export type Requirement = {
  id: string;
  title: string;
  detail: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

export type HeroSlide = {
  src: string;
  alt: string;
  caption: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
};

export type HouseProfile = {
  id: string;
  name: string;
  place: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export type DayMoment = {
  time: string;
  title: string;
  detail: string;
};

export type TourStop = {
  title: string;
  detail: string;
};

export type SchoolDayRow = {
  time: string;
  activity: string;
};
