import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ViewportProvider from "@/components/layout/viewport-provider";
import WhatsappButton from "@/components/layout/whatsapp-button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ADDRESS, COMPANY_NAME, EMAIL, WEBSITE_URL } from "@/constant";
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
      address: { "@type": "PostalAddress", addressLocality: "Medan", addressCountry: "ID", streetAddress: ADDRESS },
    },
    {
      "@type": "WebSite",
      "@id": `${WEBSITE_URL}/#website`,
      url: WEBSITE_URL,
      name: COMPANY_NAME,
      publisher: { "@id": `${WEBSITE_URL}/#organization` },
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
    "Promis Conveyor Chain – conveyor chain dan sprocket untuk pabrik kelapa sawit. Solusi rantai presisi untuk efisiensi industri di Indonesia.",
  keywords: [
    COMPANY_NAME,
    "conveyor chain",
    "sprocket",
    "pabrik kelapa sawit",
    "rantai conveyor",
    "sprocket Indonesia",
    "industrial chain",
  ],
  authors: [{ name: COMPANY_NAME, url: WEBSITE_URL }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: WEBSITE_URL,
    siteName: COMPANY_NAME,
    title: COMPANY_NAME,
    description:
      "Conveyor chain dan sprocket untuk pabrik kelapa sawit. Solusi rantai presisi untuk efisiensi industri.",
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY_NAME,
    description:
      "Conveyor chain dan sprocket untuk pabrik kelapa sawit. Solusi rantai presisi untuk efisiensi industri.",
  },
  robots: {
    index: true,
    follow: true,
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
