import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BUSINESS } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";

export const viewport: Viewport = {
  themeColor: "#6F397D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pititicosmodainfantil.com.br"),
  title: {
    default: "Pititicos Moda Infantil | São Joaquim da Barra – SP (0 a 16 anos)",
    template: "%s | Pititicos Moda Infantil",
  },
  description:
    "Loja de moda infantil completa em São Joaquim da Barra – SP. Encontre vestidos, conjuntos para meninos e meninas, roupas para bebês, calçados e acessórios de 0 a 16 anos. Atendimento com carinho no WhatsApp e loja física!",
  applicationName: "Pititicos Moda Infantil",
  authors: [{ name: "Pititicos Moda Infantil" }],
  generator: "Next.js",
  keywords: [
    "moda infantil são joaquim da barra",
    "loja infantil são joaquim da barra",
    "roupas infantis são joaquim da barra",
    "pititicos são joaquim da barra",
    "loja de bebê são joaquim da barra",
    "vestidos infantis sjb",
    "conjunto menino são joaquim da barra",
    "calçados infantis são joaquim da barra",
    "enxoval de bebê são joaquim da barra",
    "boutique infantil",
    "roupas infantis 0 a 16 anos",
  ],
  creator: "Pititicos Moda Infantil",
  publisher: "Pititicos Moda Infantil",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pititicos Moda Infantil | São Joaquim da Barra – SP",
    description:
      "Pequenos looks, grandes momentos. Roupas infantis de 0 a 16 anos, calçados e acessórios selecionados a dedo em São Joaquim da Barra – SP.",
    url: "https://pititicosmodainfantil.com.br",
    siteName: "Pititicos Moda Infantil",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/place.png",
        width: 1200,
        height: 630,
        alt: "Fachada da Loja Pititicos Moda Infantil em São Joaquim da Barra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pititicos Moda Infantil | São Joaquim da Barra – SP",
    description:
      "Roupas infantis, vestidos, conjuntos, bebês, calçados e acessórios em São Joaquim da Barra. Venha conhecer a Pititicos!",
    images: ["/place.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "São Joaquim da Barra",
    "geo.position": "-20.5828;-47.8594",
    ICBM: "-20.5828, -47.8594",
  },
};

// Schema.org Structured Data (JSON-LD) for Local Business, WebSite & FAQ Rich Snippets
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ClothingStore", "LocalBusiness", "Store"],
      "@id": "https://pititicosmodainfantil.com.br/#store",
      name: "Pititicos Moda Infantil",
      alternateName: ["Pititicos", "Pititicos Moda Infantil São Joaquim da Barra"],
      image: "https://pititicosmodainfantil.com.br/place.png",
      logo: "https://pititicosmodainfantil.com.br/logo.png",
      description:
        "Loja de moda infantil completa em São Joaquim da Barra – SP. Vestidos, conjuntos para meninos e meninas, roupas para bebês, calçados e acessórios de 0 a 16 anos.",
      telephone: "+5516999984506",
      url: "https://pititicosmodainfantil.com.br",
      hasMap: "https://www.google.com/maps/dir/?api=1&destination=Pititicos+São+Joaquim+da+Barra",
      priceRange: "$$",
      currenciesAccepted: "BRL",
      paymentAccepted: "Dinheiro, Cartão de Crédito, Cartão de Débito, Pix",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Centro",
        addressLocality: "São Joaquim da Barra",
        addressRegion: "SP",
        postalCode: "14600-000",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -20.5828,
        longitude: -47.8594,
      },
      areaServed: [
        { "@type": "City", "name": "São Joaquim da Barra" },
        { "@type": "City", "name": "Guará" },
        { "@type": "City", "name": "Ipuã" },
        { "@type": "City", "name": "Orlândia" },
        { "@type": "City", "name": "Morro Agudo" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:30",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:30",
          closes: "13:00",
        },
      ],
      sameAs: [
        "https://instagram.com/pititicosloja",
        "https://www.google.com/maps/search/?api=1&query=Pititicos+São+Joaquim+da+Barra",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "35",
        bestRating: "5",
        worstRating: "1",
      },
      department: [
        {
          "@type": "Department",
          name: "Moda Meninas",
          description: "Vestidos, conjuntos e moda feminina infantil",
        },
        {
          "@type": "Department",
          name: "Moda Meninos",
          description: "Conjuntos, camisetas, bermudas e calças masculinas",
        },
        {
          "@type": "Department",
          name: "Bebês & Primeiros Passos",
          description: "Bodies, macacões, conjuntos e enxoval bebê",
        },
        {
          "@type": "Department",
          name: "Calçados Infantis",
          description: "Tênis, sandálias e sapatos confortáveis",
        },
        {
          "@type": "Department",
          name: "Acessórios",
          description: "Laços, meias, bolsas e detalhes para completar o look",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://pititicosmodainfantil.com.br/#website",
      name: "Pititicos Moda Infantil",
      url: "https://pititicosmodainfantil.com.br",
      inLanguage: "pt-BR",
      publisher: {
        "@id": "https://pititicosmodainfantil.com.br/#store",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://pititicosmodainfantil.com.br/#faq",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* JSON-LD Rich Snippet for Google Search Knowledge Graph & Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
