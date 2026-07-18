import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ViewportProvider from "@/components/layout/viewport-provider";
import WhatsappButton from "@/components/layout/whatsapp-button";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ADDRESS,
  BRAND_ALTERNATE_NAMES,
  BRAND_SHORT,
  COMPANY_NAME,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  EMAIL,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  PHONE_DISPLAY,
  SOCIAL_LINKS,
  WEBSITE_URL,
} from "@/constant";
import { jsonLdScript } from "@/lib/seo";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/** ~155 chars */
const DEFAULT_DESCRIPTION =
  "Promis Chain supplies high-quality conveyor chains for palm oil mills in Indonesia. Durable industrial chain solutions for demanding mill applications.";

/** ~55 chars */
const DEFAULT_TITLE = `${BRAND_SHORT} | Palm Oil Conveyor Chain Supplier Indonesia`;

const postalAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: ADDRESS,
  addressLocality: "Medan",
  addressRegion: "Sumatera Utara",
  postalCode: "20371",
  addressCountry: "ID",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${WEBSITE_URL}/#organization`,
      name: BRAND_SHORT,
      legalName: COMPANY_NAME,
      alternateName: [...BRAND_ALTERNATE_NAMES],
      url: WEBSITE_URL,
      logo: `${WEBSITE_URL}/logo.png`,
      image: `${WEBSITE_URL}${DEFAULT_OG_IMAGE}`,
      email: EMAIL,
      telephone: PHONE_DISPLAY,
      sameAs: Object.values(SOCIAL_LINKS),
      address: postalAddress,
    },
    {
      "@type": "WebSite",
      "@id": `${WEBSITE_URL}/#website`,
      url: WEBSITE_URL,
      name: BRAND_SHORT,
      alternateName: COMPANY_NAME,
      inLanguage: "id-ID",
      publisher: { "@id": `${WEBSITE_URL}/#organization` },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${WEBSITE_URL}/#localbusiness`,
      name: BRAND_SHORT,
      image: `${WEBSITE_URL}${DEFAULT_OG_IMAGE}`,
      url: WEBSITE_URL,
      telephone: PHONE_DISPLAY,
      email: EMAIL,
      priceRange: "$$",
      address: postalAddress,
      geo: {
        "@type": "GeoCoordinates",
        latitude: GEO_LATITUDE,
        longitude: GEO_LONGITUDE,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:30",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:30",
          closes: "12:30",
        },
      ],
      sameAs: Object.values(SOCIAL_LINKS),
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Palm Oil Conveyor Chain",
          description:
            "Conveyor chain, roller chain, sprocket, and connecting link supplied for palm oil mills.",
          brand: { "@type": "Brand", name: BRAND_SHORT },
        },
      },
    },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${BRAND_SHORT}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [...DEFAULT_KEYWORDS],
  authors: [{ name: COMPANY_NAME, url: WEBSITE_URL }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  category: "industrial",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: WEBSITE_URL,
    siteName: BRAND_SHORT,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BRAND_SHORT} - palm oil conveyor chain supplier Indonesia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(jsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-height-screen relative antialiased`}
      >
        <ViewportProvider>
          <TooltipProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <Navbar />
              {children}
              <Footer />
              <WhatsappButton />
            </ThemeProvider>
          </TooltipProvider>
        </ViewportProvider>
      </body>
    </html>
  );
}
