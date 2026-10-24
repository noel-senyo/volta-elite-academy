import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Suspense, type ReactNode } from "react";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voltaacademy.edu.gh"),
  title: {
    default: "Volta Elite Academy",
    template: "%s | Volta Elite Academy",
  },
  description:
    "Volta Elite Academy is a premium co-educational day and boarding school in Ho, Volta Region, from Crèche to Grade 12.",
  applicationName: "Volta Elite Academy",
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: "Volta Elite Academy",
    title: "Volta Elite Academy",
    description:
      "A premium co-educational day and boarding school in Ho, Volta Region, from Crèche to Grade 12.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full bg-offwhite font-sans text-charcoal antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-primary"
        >
          Skip to content
        </a>
        <Suspense fallback={<div className="h-[5.25rem] bg-white" />}>
          <Navbar />
        </Suspense>
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
