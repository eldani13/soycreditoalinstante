import type { Metadata } from "next";
import SeoJsonLd from "@/components/SeoJsonLd";
import { productos } from "@/data/telefonos";
import { getSiteUrl, siteName } from "@/lib/seo";

const title = "Catálogo de celulares a crédito: Samsung, Xiaomi, iPhone y más";
const description =
  "Mira el catálogo de celulares a crédito en Colombia. Samsung, Xiaomi, iPhone, Honor, Motorola, Oppo, Infinix, Tecno y Poco con cuotas quincenales y aprobación rápida.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "catálogo celulares a crédito",
    "Samsung a crédito Colombia",
    "Xiaomi a crédito",
    "iPhone a crédito Colombia",
    "Honor a crédito",
    "Motorola a crédito",
    "comprar celular por cuotas",
  ],
  alternates: { canonical: "/store" },
  openGraph: {
    title: `${title} | ${siteName}`,
    description,
    url: "/store",
    images: [{ url: "/hero.jpg", alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteName}`,
    description,
    images: ["/hero.jpg"],
  },
};

export default function StoreLayout({
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
          "@type": "CollectionPage",
          name: title,
          description,
          url: `${url}/store`,
          isPartOf: { "@type": "WebSite", name: siteName, url },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: productos.length,
            itemListElement: productos.map((producto, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Product",
                name: producto.nombre,
                brand: producto.marca,
                image: `${url}${producto.imagen}`,
                category: "Smartphone",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                  priceCurrency: "COP",
                  description: producto.cuotas,
                  url: `${url}/store`,
                },
              },
            })),
          },
        }}
      />
      {children}
    </>
  );
}
