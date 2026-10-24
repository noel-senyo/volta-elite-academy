"use client";

import type { Stat } from "@/lib/types";
import { AnimatedCounter } from "./AnimatedCounter";
import { Container } from "./Container";

export function StatsStrip({ stats }: { stats: Stat[] }) {
  return (
    <section className="bg-primary text-white" aria-label="School at a glance">
      <Container className="grid grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-5 lg:py-16">
        {stats.map((stat) => (
          <div key={stat.id} className="text-center lg:text-left">
            {stat.value === null ? (
              <p className="font-serif text-4xl text-gold sm:text-5xl">{stat.text}</p>
            ) : (
              <AnimatedCounter
                value={stat.value}
                from={stat.from ?? 0}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="font-serif text-4xl text-gold sm:text-5xl"
              />
            )}
            <p className="mt-2 text-sm font-medium text-white/85">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
