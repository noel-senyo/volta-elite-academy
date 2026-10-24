"use client";

import { programmes } from "@/data/programmes";
import { SiteImage } from "./SiteImage";
import { Tabs } from "./Tabs";

export function ProgrammeBrowser() {
  return (
    <Tabs
      label="Programmes by level"
      syncHash
      tabs={programmes.map((programme) => ({
        id: programme.id,
        label: programme.name,
        content: (
          <div className="grid items-center gap-8 rounded-3xl border border-sky/70 bg-white p-6 shadow-sm lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azure">
                {programme.grades}
              </p>
              <h3 className="mt-2 font-serif text-3xl text-primary">{programme.name}</h3>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/85">{programme.summary}</p>
              <ul className="mt-5 space-y-3">
                {programme.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-charcoal/85">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-aqua" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-72 overflow-hidden rounded-3xl">
              {programme.image && programme.imageAlt ? (
                <SiteImage
                  src={programme.image}
                  alt={programme.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full min-h-72 items-end bg-gradient-to-br from-primary via-azure to-aqua p-6">
                  <p className="font-serif text-4xl text-white">{programme.name}</p>
                </div>
              )}
            </div>
          </div>
        ),
      }))}
    />
  );
}
