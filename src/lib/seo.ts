export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://soycreditoalinstante.com";
}

export const siteName = "Crédito al Instante";

export const defaultTitle =
  "Celular a crédito en Colombia | Cuotas quincenales | Crédito al Instante";

export const defaultDescription =
  "Saca tu celular a crédito en Colombia con aprobación rápida y cuotas quincenales. Catálogo Samsung, Xiaomi, iPhone, Honor, Motorola, Oppo, Infinix y Tecno. Paga en Efecty, Nequi, Daviplata o Bancolombia.";

export const seoKeywords = [
  "celular a crédito",
  "celular a crédito Colombia",
  "celular por cuotas",
  "crédito para celular",
  "financiar celular",
  "celular crédito fácil",
  "crédito al instante",
  "soy crédito al instante",
  "celular con cuotas quincenales",
  "comprar celular a crédito",
  "Samsung a crédito",
  "Xiaomi a crédito",
  "iPhone a crédito",
  "Honor a crédito",
  "Motorola a crédito",
  "Oppo a crédito",
  "Infinix a crédito",
  "Tecno a crédito",
  "catálogo de celulares a crédito",
  "crédito de celular sin tanto papeleo",
  "puntos de pago Efecty",
  "pagar crédito celular",
  "KrediYa",
  "convenio Efecty crédito celular",
  "celular nuevo a crédito",
  "crédito celular Madrid Cundinamarca",
  "celular a crédito Madrid Cundinamarca",
];

export function buildGraphJsonLd(url: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organizacion`,
        name: siteName,
        alternateName: ["Soy Crédito al Instante", "Crédito al Instante Colombia"],
        url,
        logo: `${url}/logo.png`,
        image: `${url}/hero.jpg`,
        email: "administrador@soycreditoalinstante.com",
        telephone: "+573021093652",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Calle 7N #5-19, Centro Comercial La Casona, Local 4",
          addressLocality: "Madrid",
          addressRegion: "Cundinamarca",
          addressCountry: "CO",
        },
        areaServed: {
          "@type": "Country",
          name: "Colombia",
        },
        sameAs: [
          "https://www.thedid.com.co/",
          "https://wa.me/573021093652",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#sitio`,
        url,
        name: siteName,
        inLanguage: "es-CO",
        publisher: { "@id": `${url}/#organizacion` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${url}/store?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "FinancialService",
        "@id": `${url}/#servicio`,
        name: "Crédito de celulares",
        description: defaultDescription,
        url,
        image: `${url}/hero.jpg`,
        telephone: "+573021093652",
        areaServed: "CO",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Calle 7N #5-19, Centro Comercial La Casona, Local 4",
          addressLocality: "Madrid",
          addressRegion: "Cundinamarca",
          addressCountry: "CO",
        },
        serviceType: [
          "Crédito para celular",
          "Financiación de smartphones",
          "Celular por cuotas",
        ],
        provider: { "@id": `${url}/#organizacion` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Puedo sacar un celular a crédito en Colombia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. En Crédito al Instante puedes financiar Samsung, Xiaomi, iPhone y otras marcas con cuotas quincenales y aprobación rápida.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo pago las cuotas de mi crédito de celular?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Puedes pagar en Efecty, Bancolombia, Nequi, Daviplata, PSE, Wompi, SuRed, Servientrega, Western Union y Transfiya. No envíes dinero por WhatsApp.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué marcas de celular financian?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Financiamos Samsung, Xiaomi, Apple iPhone, Honor, Motorola, Oppo, Infinix, Tecno y Poco.",
            },
          },
        ],
      },
    ],
  };
}
