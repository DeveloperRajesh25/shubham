import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tinymora.in"),
  title: "TinyMora — 14,000+ printable worksheets for kids 2–9",
  description:
    "The screen-free way your kid actually wants to learn. Skill-mapped worksheets in 12 categories. Lifetime access for ₹149.",
  openGraph: {
    title: "TinyMora — Printable worksheets kids actually want to do",
    description:
      "14,000+ educator-designed worksheets. Lifetime access. ₹149 one-time.",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#EA580C",
  width: "device-width",
  initialScale: 1,
};

const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "TinyMora — The Complete Worksheet Bundle",
  description:
    "14,000+ printable worksheets for kids aged 2–9 across 12 categories. Lifetime access, instant PDF download.",
  brand: { "@type": "Brand", name: "TinyMora" },
  offers: {
    "@type": "Offer",
    price: "149",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "8400",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </body>
    </html>
  );
}
