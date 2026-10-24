"use client";

import { useEffect, useRef } from "react";
import type { GalleryImage } from "@/lib/types";
import { SiteImage } from "./SiteImage";

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onIndex: (index: number) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const image = index !== null ? images[index] : undefined;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        onIndex((index + 1) % images.length);
      } else if (event.key === "ArrowLeft") {
        onIndex((index - 1 + images.length) % images.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, index, onIndex]);

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={image ? image.alt : "Enlarged photograph"}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {image && index !== null ? (
        <div
          className="flex h-full items-center justify-center p-4 sm:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <figure className="relative w-full max-w-5xl">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-primary">
              <SiteImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-white">
              <span>
                {image.caption}
                <span className="ml-2 text-white/70">
                  {index + 1} / {images.length}
                </span>
              </span>
              <span className="sr-only">Use escape to close, and the arrow keys to move between photographs.</span>
            </figcaption>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary"
                onClick={() => onIndex((index - 1 + images.length) % images.length)}
              >
                Previous
              </button>
              <button
                type="button"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary"
                onClick={() => onIndex((index + 1) % images.length)}
              >
                Next
              </button>
              <button
                ref={closeRef}
                type="button"
                className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-primary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </figure>
        </div>
      ) : null}
    </dialog>
  );
}
