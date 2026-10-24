"use client";

import { activities, activityCategories } from "@/data/activities";
import type { Activity } from "@/lib/types";
import { SiteImage } from "./SiteImage";
import { Tabs } from "./Tabs";

function ActivityGrid({ items }: { items: Activity[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((activity) => (
        <li key={activity.id}>
          <article className="group h-full overflow-hidden rounded-3xl border border-sky/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card">
            <div className="relative h-40 overflow-hidden">
              {activity.image && activity.imageAlt ? (
                <SiteImage
                  src={activity.image}
                  alt={activity.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-end bg-gradient-to-br from-primary via-azure to-aqua p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                    {activity.category}
                  </p>
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-serif text-2xl text-primary">{activity.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/80">{activity.description}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export function ActivityBrowser() {
  const tabs = [
    { id: "all-activities", label: "All", content: <ActivityGrid items={activities} /> },
    ...activityCategories.map((category) => ({
      id: category.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      label: category,
      content: (
        <ActivityGrid items={activities.filter((activity) => activity.category === category)} />
      ),
    })),
  ];

  return <Tabs label="Extracurricular activities" tabs={tabs} />;
}
