import { founder } from "@/data/school";
import { Button } from "./Button";
import { SiteImage } from "./SiteImage";

export function FounderMessage({ variant = "full" }: { variant?: "preview" | "full" }) {
  const text = variant === "preview" ? founder.excerpt : founder.message;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-card">
        <SiteImage
          src={founder.portrait}
          alt={founder.portraitAlt}
          fill
          sizes="(max-width: 1024px) 80vw, 320px"
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">
          <span className="mr-3 inline-block h-px w-8 align-middle bg-gold" aria-hidden="true" />
          Leadership
        </p>
        <h2 className="mt-3 font-serif text-3xl leading-tight text-primary md:text-4xl">
          {founder.heading}
        </h2>
        <p className="mt-4 font-semibold text-primary">{founder.name}</p>
        <p className="text-sm text-charcoal/75">{founder.role}</p>
        <p className="mt-5 text-lg leading-relaxed text-charcoal/85">{text}</p>
        {variant === "preview" ? (
          <div className="mt-6">
            <Button href="/about#founder" variant="secondary">
              Read the full message
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
