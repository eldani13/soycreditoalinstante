import type { Metadata } from "next";
import { siteName } from "@/lib/seo";

const title = "Solicitar crédito de celular en minutos";
const description =
  "Pide tu crédito de celular en línea. Completa el formulario y te ayudamos a estrenar smartphone con cuotas quincenales, sin tanto papeleo.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "solicitar crédito celular",
    "pedir celular a crédito",
    "formulario crédito celular",
    "aprobación crédito celular Colombia",
  ],
  alternates: { canonical: "/solicitudCredito" },
  openGraph: {
    title: `${title} | ${siteName}`,
    description,
    url: "/solicitudCredito",
    images: [{ url: "/credito.jpg", alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteName}`,
    description,
    images: ["/credito.jpg"],
  },
};

export default function SolicitudLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
