import type { Metadata } from "next";
import SeoJsonLd from "@/components/SeoJsonLd";
import { getSiteUrl, siteName } from "@/lib/seo";

const title = "Puntos de pago: Efecty, Nequi, Bancolombia y más";
const description =
  "Paga tu crédito de celular en Efecty, Bancolombia, Nequi, Daviplata, PSE, Wompi y otros puntos autorizados. Convenio KREDIYA INTEGRACIÓN 113153. No envíes dinero por WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "pagar crédito celular",
    "puntos Efecty crédito",
    "convenio Efecty KrediYa",
    "pago Nequi crédito celular",
    "pago Bancolombia celular a crédito",
    "puntos de pago crédito al instante",
  ],
  alternates: { canonical: "/puntoVenta" },
  openGraph: {
    title: `${title} | ${siteName}`,
    description,
    url: "/puntoVenta",
    images: [{ url: "/efecty.png", alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteName}`,
    description,
    images: ["/efecty.png"],
  },
};

export default function PuntoVentaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const url = getSiteUrl();

  return (
    <>
      <SeoJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          name: title,
          url: `${url}/puntoVenta`,
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Dónde pago mi crédito de celular?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "En Efecty con el convenio KREDIYA INTEGRACIÓN 113153, Bancolombia convenio 89058, Nequi, Daviplata, PSE, Wompi, SuRed, Servientrega, Western Union y Transfiya.",
              },
            },
            {
              "@type": "Question",
              name: "¿Puedo pagar el crédito por WhatsApp?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Los pagos quincenales solo valen en los comercios autorizados de Crédito al Instante.",
              },
            },
          ],
        }}
      />
      {children}
    </>
  );
}
