import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ViewportProvider from "@/components/layout/viewport-provider";
import WhatsappButton from "@/components/layout/whatsapp-button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { COMPANY_NAME, WEBSITE_URL } from "@/constant";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: COMPANY_NAME,
  description: `${COMPANY_NAME}, Conveyor Chain & Sprockets For Palm Oil Mills`,
  keywords: [COMPANY_NAME, "Conveyor Chain", "Sprockets", "Palm Oil Mills"],
  authors: [{ name: COMPANY_NAME, url: WEBSITE_URL }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  openGraph: {
    title: COMPANY_NAME,
    description: `${COMPANY_NAME}, Conveyor Chain & Sprockets For Palm Oil Mills`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
