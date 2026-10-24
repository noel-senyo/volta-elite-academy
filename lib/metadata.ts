import type { Metadata } from "next";

export function createMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Volta Elite Academy`,
      description,
      url: path,
      siteName: "Volta Elite Academy",
      locale: "en_GH",
      type: "website",
    },
  };
}
