import { Container } from "./Container";
import { SiteImage } from "./SiteImage";
import { WaveDivider } from "./WaveDivider";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0">
        <SiteImage
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/55 to-primary/25 md:bg-gradient-to-r md:from-primary/80 md:via-primary/45 md:to-primary/20" />
      </div>
      <Container className="relative py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky">
          <span className="mr-3 inline-block h-px w-8 align-middle bg-gold" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">{description}</p>
      </Container>
      <WaveDivider fromClass="bg-transparent" toClass="text-offwhite" />
    </section>
  );
}
