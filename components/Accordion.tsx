"use client";

import { useId, useState } from "react";
import type { Faq } from "@/lib/types";
import { cn } from "@/lib/cn";

export function Accordion({ items }: { items: Faq[] }) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const open = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-sky/70 bg-white shadow-sm"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-primary"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-offwhite text-azure transition duration-300",
                    open && "rotate-45 bg-primary text-gold",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 leading-relaxed text-charcoal/80">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
