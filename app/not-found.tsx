import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page is not on the Volta Elite Academy website. Return home or contact the admissions office in Ho.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-offwhite py-24">
      <Container className="max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-azure">404</p>
        <h1 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">This page has moved on</h1>
        <p className="mt-4 text-lg leading-relaxed text-charcoal/80">
          The address does not match a page on the Volta Elite Academy site. You can return home, or go straight to admissions.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Back to home</Button>
          <Button href="/admissions" variant="secondary">
            Admissions
          </Button>
        </div>
      </Container>
    </section>
  );
}
