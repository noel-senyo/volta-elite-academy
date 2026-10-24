import { cn } from "@/lib/cn";

export function WaveDivider({
  fromClass = "bg-white",
  toClass = "text-offwhite",
  flip = false,
  className,
}: {
  fromClass?: string;
  toClass?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("leading-none", fromClass, className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={cn(
          "block h-10 w-full md:h-14",
          toClass,
          flip && "rotate-180",
        )}
      >
        <path
          fill="currentColor"
          d="M0 32C160 70 320 0 520 28C740 58 900 78 1100 36C1260 4 1360 18 1440 36V80H0V32Z"
        />
      </svg>
    </div>
  );
}
