import Link from "next/link";
import type { Programme } from "@/lib/types";
import { Card } from "./Card";
import { SiteImage } from "./SiteImage";

export function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <article className="h-full">
      <Card className="group flex h-full flex-col overflow-hidden p-0">
        <div className="relative h-48 overflow-hidden">
          {programme.image && programme.imageAlt ? (
            <SiteImage
              src={programme.image}
              alt={programme.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-end bg-gradient-to-br from-primary via-azure to-aqua p-5">
              <p className="font-serif text-3xl text-white">{programme.grades}</p>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azure">
            {programme.grades}
          </p>
          <h3 className="mt-2 font-serif text-2xl text-primary">{programme.name}</h3>
          <p className="mt-3 flex-1 leading-relaxed text-charcoal/80">{programme.summary}</p>
          <Link
            href={`/academics#${programme.id}`}
            className="mt-5 text-sm font-semibold text-azure hover:text-primary"
          >
            Explore this programme
          </Link>
        </div>
      </Card>
    </article>
  );
}
