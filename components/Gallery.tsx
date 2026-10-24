"use client";

import { useCallback, useState } from "react";
import type { GalleryImage } from "@/lib/types";
import { cn } from "@/lib/cn";
import { Lightbox } from "./Lightbox";
import { SiteImage } from "./SiteImage";

export function Gallery({
  images,
  columns = 3,
}: {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const onIndex = useCallback((next: number) => setIndex(next), []);

  const columnClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <ul className={cn("grid grid-cols-1 gap-4", columnClass)}>
        {images.map((image, imageIndex) => (
          <li key={image.id}>
            <button
              type="button"
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl text-left shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure"
              onClick={() => setIndex(imageIndex)}
            >
              <SiteImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent p-4 text-sm font-medium text-white opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                {image.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox
        images={images}
        index={index}
        onClose={() => setIndex(null)}
        onIndex={onIndex}
      />
    </>
  );
}
