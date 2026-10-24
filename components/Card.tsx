import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  hover = true,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "rounded-3xl shadow-sm",
        tone === "dark"
          ? "border border-white/15 bg-primary text-white"
          : "border border-sky/70 bg-white",
        hover &&
          "transition duration-300 hover:-translate-y-1 hover:border-azure/40 hover:shadow-card",
        className,
      )}
    >
      {children}
    </div>
  );
}
