import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { companyInfo } from "@/data/company";
import JsonLd from "@/components/JsonLd";
import WelcomeCallOverlay from "@/components/WelcomeCallOverlay";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#064E3B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shopatrip.in"),
  title: {
    default: "Shop A Trip Tour & Travels | Kashmir, Gulmarg, Gurez & Ladakh Packages",
    template: "%s | Shop A Trip Tour & Travels",
  },
  description: "Shop A Trip Tour & Travels (Peace & You) - Tangmarg/Gulmarg based premier Kashmir travel specialist with 6+ years experience. Verified Kashmir tour packages, Honeymoon specials, Gurez Valley, Keran Valley, Leh-Ladakh expeditions, and Vaishno Devi tours.",
  keywords: [
    "Shop A Trip",
    "Shop A Trip Tour and Travels",
    "Kashmir Tour Packages",
    "Gulmarg Tour Operator",
    "Tangmarg Travel Agency",
    "Gurez Valley Packages",
    "Keran Valley Escape",
    "Ladakh Tour Packages",
    "Kashmir Honeymoon Packages",
    "Vaishno Devi Tour",
    "Srinagar Taxi Services",
    "Peace and You Kashmir"
  ],
  authors: [{ name: "Shop A Trip Tour & Travels", url: "https://shopatrip.in" }],
  creator: "Shop A Trip Tour & Travels",
  publisher: "Shop A Trip Tour & Travels",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo.jpg", type: "image/jpeg" }
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" }
    ],
  },
  openGraph: {
    title: "Shop A Trip Tour & Travels | Peace & You Kashmir",
    description: "Explore the paradise of Kashmir & Ladakh with 6+ years experienced local operators based in Tangmarg/Gulmarg. Handcrafted itineraries, verified stays, and 24/7 on-ground mountain support.",
    url: "https://shopatrip.in",
    siteName: "Shop A Trip Tour & Travels",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Shop A Trip Tour & Travels Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop A Trip Tour & Travels | Kashmir Tour Packages",
    description: "Verified Kashmir, Gurez, Keran & Ladakh tour packages crafted by local Tangmarg/Gulmarg specialists.",
    images: ["/logo.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: companyInfo.name,
    alternateName: "Peace & You",
    image: "https://shopatrip.in/logo.jpg",
    logo: "https://shopatrip.in/logo.png",
    "@id": "https://shopatrip.in",
    url: "https://shopatrip.in",
    telephone: companyInfo.phones[0],
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gokhama Kunzer, Tangmarg",
      addressLocality: "Baramulla",
      addressRegion: "Jammu and Kashmir",
      postalCode: "193404",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0583,
      longitude: 74.4286,
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
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    sameAs: [
      companyInfo.instagramUrl,
      companyInfo.facebookUrl,
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
    areaServed: [
      "Jammu and Kashmir",
      "Ladakh",
      "Gulmarg",
      "Pahalgam",
      "Sonmarg",
      "Srinagar",
      "Gurez Valley",
      "Keran Valley",
      "Kishtwar",
    ],
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#fbfdfb] text-slate-900 selection:bg-pine-200 selection:text-pine-950">
        <JsonLd data={travelAgencySchema} />
        <WelcomeCallOverlay />
        {children}
      </body>
    </html>
  );
}
