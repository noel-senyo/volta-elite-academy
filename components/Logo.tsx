"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

const sources = {
  monogram: {
    src: "/brand/logo-monogram.svg",
    width: 128,
    height: 128,
    alt: "Volta Elite Academy monogram",
    className: "h-12 w-12",
  },
  crest: {
    src: "/brand/logo-crest.svg",
    width: 320,
    height: 400,
    alt: "Volta Elite Academy crest",
    className: "h-36 w-auto",
  },
  horizontal: {
    src: "/brand/logo-horizontal.svg",
    width: 640,
    height: 120,
    alt: "Volta Elite Academy wordmark",
    className: "h-14 w-auto",
  },
} as const;

export function Logo({
  variant = "monogram",
  className,
  priority = false,
}: {
  variant?: keyof typeof sources;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const item = sources[variant];

  if (failed) {
    return (
      <span
        role="img"
        aria-label="Volta Elite Academy monogram"
        className={cn(
          "inline-flex items-center justify-center rounded-full bg-primary font-serif font-semibold tracking-wide text-white ring-2 ring-gold",
          variant === "crest" ? "h-28 w-28 text-2xl" : "h-12 w-12 text-xs",
          className,
        )}
      >
        VEA
      </span>
    );
  }

  return (
    <Image
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      priority={priority}
      unoptimized
      className={cn(item.className, "object-contain", className)}
      onError={() => setFailed(true)}
    />
  );
}
