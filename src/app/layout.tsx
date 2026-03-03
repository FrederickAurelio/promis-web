import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/navbar";
import ViewportProvider from "@/components/layout/viewport-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Promis Conveyor Chain",
  description:
    "Promis Conveyor Chain, Conveyor Chain & Sprockets For Palm Oil Mills",
  keywords: [
    "Promis Conveyor Chain",
    "Conveyor Chain",
    "Sprockets",
    "Palm Oil Mills",
  ],
  authors: [{ name: "Promis Conveyor Chain", url: "https://promischain.com" }],
  creator: "Promis Conveyor Chain",
  publisher: "Promis Conveyor Chain",
  openGraph: {
    title: "Promis Conveyor Chain",
    description:
      "Promis Conveyor Chain, Conveyor Chain & Sprockets For Palm Oil Mills",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-height-screen`}
      >
        <ViewportProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        </ViewportProvider>
      </body>
    </html>
  );
}
