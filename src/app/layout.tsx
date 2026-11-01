import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { COMPANY_INFO } from "@/lib/data";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080B12",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_INFO.productionUrl),
  title: {
    default: `${COMPANY_INFO.name} | Software Project Onboarding & Technology Consultancy`,
    template: `%s | ${COMPANY_INFO.shortName}`,
  },
  description: COMPANY_INFO.heroDescription,
  keywords: [
    "Software Project Onboarding",
    "Technology Consultancy",
    "Software Project Planning",
    "Development Team Coordination",
    "Digital Solutions Consulting",
    "Project Management Support",
    "Techno Cyborg Private Limited",
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY_INFO.productionUrl,
    title: `${COMPANY_INFO.name} | Strategic Technology Consultancy`,
    description: COMPANY_INFO.heroDescription,
    siteName: COMPANY_INFO.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} | Strategic Technology Consultancy`,
    description: COMPANY_INFO.heroDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.businessType,
    url: COMPANY_INFO.productionUrl,
    slogan: COMPANY_INFO.tagline,
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#080B12] text-[#F8FAFC] selection:bg-[#6366F1]/30 selection:text-white"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
