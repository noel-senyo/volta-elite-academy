import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
  light = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
  light?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.22em]",
            light ? "text-sky" : "text-azure",
          )}
        >
          <span
            className="mr-3 inline-block h-px w-8 align-middle bg-gold"
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className={cn(
          "mt-3 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl",
          light ? "text-white" : "text-primary",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/90" : "text-charcoal/80",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
