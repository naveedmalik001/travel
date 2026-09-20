import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import DestinationCatalogClient from "./DestinationCatalogClient";
import { BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Kashmir & Ladakh Destination Guides | Gulmarg, Gurez, Keran, Pahalgam",
  description: "Explore in-depth travel guides for Gulmarg, Srinagar, Pahalgam, Sonmarg, Gurez Valley, Keran Valley, Leh Ladakh & Kishtwar. Altitude, best time to visit, and attractions from local Tangmarg travel experts.",
  keywords: [
    "Kashmir Destinations",
    "Gulmarg Travel Guide",
    "Gurez Valley Guide",
    "Keran Valley Travel",
    "Pahalgam Sightseeing",
    "Sonmarg Glaciers",
    "Leh Ladakh Destinations",
    "Kishtwar Jammu Tourism"
  ],
  openGraph: {
    title: "Kashmir & Ladakh Himalayan Destination Guides | Shop A Trip",
    description: "Discover the best places to visit in Kashmir, offbeat border frontiers, and high-altitude Ladakh circuits.",
    url: "https://shopatrip.in/destinations",
    images: ["/logo.jpg"],
  },
};

export default function DestinationsPage() {
  const destinationListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Shop A Trip Himalayan Destinations Guide",
    description: "Travel guides for Kashmir Valley, Offbeat Frontiers, Ladakh, and Jammu circuits.",
    url: "https://shopatrip.in/destinations",
  };

  return (
    <main className="min-h-screen bg-[#fbfdfb] text-slate-900 selection:bg-[#38804b]/20 selection:text-[#38804b] flex flex-col justify-between">
      <JsonLd data={destinationListSchema} />
      <Navbar />

      <div className="pt-24 md:pt-28">
        <Breadcrumbs items={[{ name: "Destinations", href: "/destinations" }]} />

        {/* Hero Banner */}
        <section className="relative bg-[#38804b] text-white py-14 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#fbfdfb] rounded-tl-[2rem] rounded-tr-[2rem] hidden md:block" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Iconic Valleys &amp; <span className="text-emerald-100">Untouched Frontiers</span>
            </h1>
            <p className="mt-5 text-sm sm:text-base text-emerald-50 max-w-2xl mx-auto leading-relaxed">
              Whether you are chasing alpine snows in Gulmarg, mystical folklore in Gurez Valley, or the high passes of Ladakh, our local experts have mapped out every trail, view, and stay.
            </p>
          </div>
        </section>

        {/* Interactive Destination Grid */}
        <DestinationCatalogClient />
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
