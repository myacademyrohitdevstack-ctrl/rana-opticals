import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";
import { site } from "@/data/site";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Optical Eyewear & Prescription Lenses`,
    template: `%s | ${site.name}`,
  },
  description: `${site.tagline} Discover handcrafted acetate frames, lightweight titanium, sunglasses, and custom precision lenses.`,
  keywords: [
    "optical shop",
    "eyewear catalogue",
    "eyeglasses",
    "sunglasses",
    "prescription lenses",
    site.name,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Optical Eyewear Showcase`,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Optician",
    name: site.name,
    description: site.tagline,
    telephone: site.phone,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressCountry: "IN",
    },
    openingHours: site.hours,
  };

  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ivory text-charcoal font-sans min-h-screen flex flex-col antialiased selection:bg-bronze selection:text-white">
        <Header />
        {/* pb-20 on mobile ensures fixed bottom bar never covers page content */}
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
