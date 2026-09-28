import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: {
    template: "%s | Forge Fitness",
    default: "Forge Fitness | Built to Perform. Designed to Last.",
  },
  description: "A premium strength and performance facility in Midtown District, New York City. Training programs, expert coaches, and top-tier equipment.",
  openGraph: {
    title: "Forge Fitness | Built to Perform.",
    description: "A premium strength and performance facility in Midtown District, New York City.",
    url: "https://forgefitness.com",
    siteName: "Forge Fitness",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge Fitness",
    description: "Built to Perform. Designed to Last.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${oswald.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
