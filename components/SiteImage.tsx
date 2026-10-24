"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

type Shared = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

type FillProps = Shared & {
  fill: true;
  sizes: string;
  width?: never;
  height?: never;
};

type FixedProps = Shared & {
  fill?: false;
  width: number;
  height: number;
  sizes?: string;
};

type SiteImageProps = FillProps | FixedProps;

function Fallback({
  alt,
  className,
  fill,
}: {
  alt: string;
  className?: string;
  fill?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "overflow-hidden bg-gradient-to-br from-primary via-azure to-aqua",
        fill ? "absolute inset-0 h-full w-full" : "h-full w-full",
        className,
      )}
    >
      <svg
        viewBox="0 0 400 240"
        className="absolute inset-0 h-full w-full opacity-30"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M0 150 C80 120 140 190 220 150 C300 110 340 140 400 120 L400 240 L0 240 Z"
          fill="white"
        />
        <path
          d="M0 180 C90 150 150 210 240 180 C320 150 360 180 400 160 L400 240 L0 240 Z"
          fill="#8EC5FF"
        />
      </svg>
    </div>
  );
}

export function SiteImage(props: SiteImageProps) {
  const [failed, setFailed] = useState(false);
  const { src, alt, className, priority } = props;

  if (failed) {
    return <Fallback alt={alt} className={className} fill={props.fill} />;
  }

  if (props.fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={props.sizes}
        priority={priority}
        className={className}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={props.width}
      height={props.height}
      sizes={props.sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
