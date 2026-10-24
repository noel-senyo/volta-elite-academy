"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "@/data/school";
import { Button } from "./Button";
import { SiteImage } from "./SiteImage";

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused || hovered) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [hovered, paused]);

  const slide = heroSlides[index];

  return (
    <section
      className="relative flex min-h-[calc(100vh-5.25rem)] items-center overflow-hidden bg-primary text-white"
      aria-roledescription="carousel"
      aria-label="Life at Volta Elite Academy"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {heroSlides.map((item, slideIndex) => (
        <div
          key={item.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            slideIndex === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={slideIndex !== index}
        >
          <SiteImage
            src={item.src}
            alt={item.alt}
            fill
            priority={slideIndex === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/20 to-transparent lg:bg-gradient-to-r lg:from-primary/70 lg:via-primary/25 lg:to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div
          className="max-w-xl lg:max-w-2xl"
          style={{ textShadow: "0 2px 16px rgba(10, 42, 107, 0.55)" }}
        >
          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.24em] text-sky">
            Volta Region · Est. January 2010
          </p>
          <p className="animate-rise mt-4 font-serif text-4xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Volta Elite
            <span className="mt-1 block">Academy</span>
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold">
            Excellence. Character. Leadership.
          </p>
          <h1 className="animate-rise-delay mt-6 font-serif text-2xl leading-snug text-white sm:text-3xl">
            Where Volta&apos;s Brightest Minds Become Tomorrow&apos;s Leaders
          </h1>
          <p className="animate-rise-delay mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            A co-educational day and boarding school in Ho, from Crèche to
            Grade 12. Small classes, a serious STEM programme, and a community
            that forms character as carefully as it forms the mind.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/admissions" variant="gold">
              Apply Now
            </Button>
            <Button href="/admissions#enquiry" variant="ghost">
              Book a Tour
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {heroSlides.map((item, slideIndex) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Show slide ${slideIndex + 1}: ${item.caption}`}
                aria-current={slideIndex === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition ${
                  slideIndex === index ? "w-8 bg-gold" : "w-2.5 bg-white/70 hover:bg-white"
                }`}
                onClick={() => setIndex(slideIndex)}
              />
            ))}
            <button
              type="button"
              aria-pressed={paused}
              className="ml-2 rounded-full border border-white/50 px-3 py-1 text-xs font-semibold text-white hover:bg-white/10"
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? "Play" : "Pause"}
            </button>
            <p className="w-full text-sm text-sky sm:ml-3 sm:w-auto">{slide?.caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
