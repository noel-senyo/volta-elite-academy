"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

export type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

export function Tabs({
  tabs,
  label,
  syncHash = false,
}: {
  tabs: TabItem[];
  label: string;
  syncHash?: boolean;
}) {
  const baseId = useId();
  const [active, setActive] = useState(tabs[0]?.id ?? "");
  const pendingScroll = useRef<string | null>(null);
  const ids = tabs.map((tab) => tab.id).join("|");

  useEffect(() => {
    if (!syncHash) return;
    const frame = window.requestAnimationFrame(() => {
      const hash = window.location.hash.replace("#", "");
      if (!hash || !ids.split("|").includes(hash)) return;
      pendingScroll.current = hash;
      setActive(hash);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [ids, syncHash]);

  useEffect(() => {
    if (!pendingScroll.current || pendingScroll.current !== active) return;
    pendingScroll.current = null;
    document.getElementById(active)?.scrollIntoView();
  }, [active]);

  function select(id: string) {
    setActive(id);
    if (syncHash) {
      const url = `${window.location.pathname}${window.location.search}#${id}`;
      window.history.replaceState(null, "", url);
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = tabs.length - 1;
    let next = index;
    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;
    event.preventDefault();
    const nextTab = tabs[next];
    if (!nextTab) return;
    select(nextTab.id);
    document.getElementById(`${baseId}-tab-${nextTab.id}`)?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label={label}
        className="flex gap-2 overflow-x-auto pb-2"
      >
        {tabs.map((tab, index) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              id={`${baseId}-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={tab.id}
              tabIndex={selected ? 0 : -1}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition",
                selected
                  ? "bg-primary text-white shadow-sm"
                  : "border border-sky/80 bg-white text-primary hover:border-azure hover:text-azure",
              )}
              onClick={() => select(tab.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => {
        const selected = tab.id === active;
        return (
          <div
            key={tab.id}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${tab.id}`}
            hidden={!selected}
            tabIndex={0}
            className="mt-6 scroll-mt-28 focus:outline-none"
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
}
