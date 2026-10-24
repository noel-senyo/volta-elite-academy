import type { NewsItem } from "@/lib/types";
import { Card } from "./Card";
import { SiteImage } from "./SiteImage";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="h-full">
      <Card className="group flex h-full flex-col overflow-hidden p-0">
        <div className="relative aspect-[16/10] overflow-hidden">
          <SiteImage
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <time dateTime={item.date} className="text-xs font-semibold uppercase tracking-[0.16em] text-azure">
            {item.dateLabel}
          </time>
          <h3 className="mt-2 font-serif text-2xl leading-snug text-primary">{item.title}</h3>
          <p className="mt-3 leading-relaxed text-charcoal/80">{item.summary}</p>
        </div>
      </Card>
    </article>
  );
}
