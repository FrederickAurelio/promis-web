import {
  BRAND_SHORT,
  DEFAULT_OG_IMAGE,
  WEBSITE_URL,
} from "@/constant";
import type { Metadata } from "next";

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  type?: "website" | "article";
};

/** Strip trailing slash except for root; keep relative path for Next metadataBase. */
function normalizeCanonicalPath(path: string): string {
  if (path === "/" || path === "") return "/";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.replace(/\/+$/, "");
}

export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image = DEFAULT_OG_IMAGE,
  imageAlt = `${BRAND_SHORT} - conveyor chain supplier Indonesia`,
  keywords,
  type = "website",
}: BuildPageMetadataInput): Metadata {
  const canonicalPath = normalizeCanonicalPath(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type,
      locale: "id_ID",
      url: canonicalPath,
      siteName: BRAND_SHORT,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item:
        item.path === "/"
          ? WEBSITE_URL
          : `${WEBSITE_URL}${normalizeCanonicalPath(item.path)}`,
    })),
  };
}

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(data) }}
    />
  );
}

export function buildProductItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${BRAND_SHORT} Conveyor Chain & Roller Chain Catalog`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          name: "Promis Conveyor Chain 117 & 717",
          description:
            "Heavy duty conveyor chain for palm oil mills — series 117 (4\") and 717 (6\") with connecting links and sprockets.",
          image: `${WEBSITE_URL}/products/conveyor-3.png`,
          brand: { "@type": "Brand", name: BRAND_SHORT },
          sku: "PROMIS-CC-117-717",
          url: `${WEBSITE_URL}/products#conveyor-chain`,
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            url: `${WEBSITE_URL}/contact`,
            priceCurrency: "IDR",
            seller: {
              "@type": "Organization",
              name: BRAND_SHORT,
              url: WEBSITE_URL,
            },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "Promis Roller Chain RS Series",
          description:
            "Industrial transmission roller chain Simplex, Duplex, and Triplex (RS 60–160) with matching connecting links and sprockets.",
          image: `${WEBSITE_URL}/products/roller-1.png`,
          brand: { "@type": "Brand", name: BRAND_SHORT },
          sku: "PROMIS-RC-RS",
          url: `${WEBSITE_URL}/products#roller-chain`,
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            url: `${WEBSITE_URL}/contact`,
            priceCurrency: "IDR",
            seller: {
              "@type": "Organization",
              name: BRAND_SHORT,
              url: WEBSITE_URL,
            },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Product",
          name: "Promis Conveyor Sprocket & Connecting Link",
          description:
            "Cast steel conveyor sprockets and solid extended pin connecting links compatible with Promis 117 and 717 chains.",
          image: `${WEBSITE_URL}/products/conveyor-1.png`,
          brand: { "@type": "Brand", name: BRAND_SHORT },
          sku: "PROMIS-CC-ACCESSORIES",
          url: `${WEBSITE_URL}/products#conveyor-chain`,
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            url: `${WEBSITE_URL}/contact`,
            priceCurrency: "IDR",
            seller: {
              "@type": "Organization",
              name: BRAND_SHORT,
              url: WEBSITE_URL,
            },
          },
        },
      },
    ],
  };
}
