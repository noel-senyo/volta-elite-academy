import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-azure text-white shadow-sm hover:bg-primary hover:shadow-md",
  secondary:
    "border border-primary/15 bg-white text-primary hover:border-azure hover:text-azure",
  ghost:
    "border border-white/80 bg-transparent text-white hover:bg-white/10",
  gold: "bg-gold text-primary hover:bg-white",
} as const;

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-200",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
