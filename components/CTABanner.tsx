import { Button } from "./Button";
import { Container } from "./Container";

export function CTABanner({
  eyebrow = "Admissions",
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="bg-primary text-white">
      <Container className="py-16 text-center md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky">
          <span className="mr-3 inline-block h-px w-8 align-middle bg-gold" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={primaryHref} variant="gold">
            {primaryLabel}
          </Button>
          {secondaryHref && secondaryLabel ? (
            <Button href={secondaryHref} variant="ghost">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
