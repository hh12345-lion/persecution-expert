import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider } from "@/components/cookies";
import { ConsentDefaultsScript } from "@/components/cookies/ConsentDefaultsScript";
import { SITE_URL } from "@/lib/constants";
import { isProductionSite } from "@/lib/seo/is-production";
import { normalizeSeoDescription, normalizeSeoTitle } from "@/lib/seo/meta-limits";
import "./globals.css";

// Self-hosted latin subsets of the brand typefaces: Archivo for headings, Spectral for body text.
const archivo = localFont({
  src: [
    { path: "./fonts/archivo.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/archivo-italic.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-archivo",
  display: "swap",
});

const spectral = localFont({
  src: [
    { path: "./fonts/spectral.woff2", weight: "400", style: "normal" },
    { path: "./fonts/spectral-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/spectral-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-spectral",
  display: "swap",
});

// Every page is rendered on the server for each request.
export const dynamic = "force-dynamic";

export const viewport = {
  themeColor: "#5F1B27",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: normalizeSeoTitle("Persecution Expert Witness UK | Asylum Tribunal Reports"),
    template: "%s",
  },
  description: normalizeSeoDescription(
    "Qualified persecution expert witnesses for UK asylum and immigration tribunals. Independent reports on Convention grounds, state protection, and internal relocation.",
  ),
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  alternates: {
    languages: {
      "en-GB": SITE_URL,
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  robots: isProductionSite() ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Persecution Expert",
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: "Persecution Expert" }],
  },
  twitter: { card: "summary_large_image", images: ["/brand/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${archivo.variable} ${spectral.variable} h-full`}>
      <body className="flex min-h-full min-w-0 flex-col overflow-x-hidden font-sans antialiased">
        <ConsentDefaultsScript />
        <CookieConsentProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
