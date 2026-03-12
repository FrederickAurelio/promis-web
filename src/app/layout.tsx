import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ViewportProvider from "@/components/layout/viewport-provider";
import WhatsappButton from "@/components/layout/whatsapp-button";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ADDRESS,
  COMPANY_NAME,
  DEFAULT_OG_IMAGE,
  EMAIL,
  PHONE_DISPLAY,
  SOCIAL_LINKS,
  WEBSITE_URL,
} from "@/constant";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${WEBSITE_URL}/#organization`,
      name: COMPANY_NAME,
      url: WEBSITE_URL,
      email: EMAIL,
      telephone: PHONE_DISPLAY,
      sameAs: Object.values(SOCIAL_LINKS),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Medan",
        addressRegion: "Sumatera Utara",
        postalCode: "20371",
        addressCountry: "ID",
        streetAddress: ADDRESS,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${WEBSITE_URL}/#website`,
      url: WEBSITE_URL,
      name: COMPANY_NAME,
      inLanguage: "id-ID",
      publisher: { "@id": `${WEBSITE_URL}/#organization` },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${WEBSITE_URL}/#localbusiness`,
      name: COMPANY_NAME,
      image: `${WEBSITE_URL}${DEFAULT_OG_IMAGE}`,
      url: WEBSITE_URL,
      telephone: PHONE_DISPLAY,
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Medan",
        addressRegion: "Sumatera Utara",
        postalCode: "20371",
        addressCountry: "ID",
        streetAddress: ADDRESS,
      },
      sameAs: Object.values(SOCIAL_LINKS),
      areaServed: "Indonesia",
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
    default: COMPANY_NAME,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Promis Conveyor Chain menyediakan conveyor chain, sprocket, dan komponen transmisi untuk pabrik kelapa sawit dan kebutuhan industri di Indonesia.",
  keywords: [
    COMPANY_NAME,
    "conveyor chain",
    "sprocket",
    "pabrik kelapa sawit",
    "rantai conveyor",
    "sprocket Indonesia",
    "industrial chain",
    "rantai industri",
    "conveyor chain medan",
  ],
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
    siteName: COMPANY_NAME,
    title: COMPANY_NAME,
    description:
      "Conveyor chain dan sprocket untuk pabrik kelapa sawit dan berbagai kebutuhan industri di Indonesia.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} - Conveyor Chain & Sprocket`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY_NAME,
    description:
      "Conveyor chain dan sprocket untuk pabrik kelapa sawit dan berbagai kebutuhan industri di Indonesia.",
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
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
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
