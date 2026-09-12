import type { Metadata } from "next";
import { Geist, Geist_Mono, Poetsen_One } from "next/font/google";
import "./globals.css";
import { ProductoProvider } from "@/context/ProductoContext";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  buildGraphJsonLd,
  defaultDescription,
  defaultTitle,
  getSiteUrl,
  seoKeywords,
  siteName,
} from "@/lib/seo";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poetsenOne = Poetsen_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poetsen",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: seoKeywords,
  applicationName: siteName,
  authors: [{ name: siteName }, { name: "The D&D", url: "https://www.thedid.com.co/" }],
  creator: "The D&D",
  publisher: siteName,
  category: "finanzas",
  classification: "Crédito de celulares en Colombia",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-CO": "/",
      es: "/",
    },
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Celular a crédito en Colombia - Crédito al Instante",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${poetsenOne.variable} 
          antialiased
        `}
      >
        <SeoJsonLd data={buildGraphJsonLd(siteUrl)} />
        <ProductoProvider>{children}</ProductoProvider>
      </body>
    </html>
  );
}
