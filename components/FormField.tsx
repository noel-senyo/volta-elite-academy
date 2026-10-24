"use client";

import { useId, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-primary">
        {label}
      </label>
      <div
        className={cn(
          "[&_input]:w-full [&_input]:rounded-xl [&_input]:border [&_input]:bg-white [&_input]:px-4 [&_input]:py-3 [&_input]:text-charcoal [&_input]:outline-none",
          "[&_select]:w-full [&_select]:rounded-xl [&_select]:border [&_select]:bg-white [&_select]:px-4 [&_select]:py-3 [&_select]:text-charcoal",
          "[&_textarea]:w-full [&_textarea]:rounded-xl [&_textarea]:border [&_textarea]:bg-white [&_textarea]:px-4 [&_textarea]:py-3 [&_textarea]:text-charcoal",
          error
            ? "[&_input]:border-red-700 [&_select]:border-red-700 [&_textarea]:border-red-700"
            : "[&_input]:border-sky [&_select]:border-sky [&_textarea]:border-sky",
        )}
      >
        {children}
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 text-sm font-medium text-red-800">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function useFieldIds(prefix: string, names: string[]) {
  const base = useId();
  return Object.fromEntries(names.map((name) => [name, `${prefix}-${base}-${name}`])) as Record<
    string,
    string
  >;
}
