import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import PackageCatalogClient from "./PackageCatalogClient";
import { BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Kashmir Tour Packages 2026 | Gulmarg, Gurez, Ladakh & Honeymoon Trips",
  description: "Browse curated Kashmir tour packages, Honeymoon specials, Gurez Valley, Keran Valley, and Ladakh expeditions. Handcrafted by local Tangmarg & Gulmarg travel specialists with verified 3-star/4-star hotels and dedicated cabs.",
  keywords: [
    "Kashmir Tour Packages",
    "Kashmir Honeymoon Packages",
    "Gurez Valley Tour",
    "Keran Valley Tour Package",
    "Ladakh Tour Package",
    "Gulmarg Tour Operator",
    "Tangmarg Travel Agency",
    "Srinagar Tour Packages",
    "Kashmir Family Tours"
  ],
  openGraph: {
    title: "Curated Kashmir & Ladakh Tour Packages | Shop A Trip",
    description: "Explore 3N/4D, 5N/6D, 6N/7D, Gurez, Keran, and Leh Ladakh custom tour packages with verified stays and 24/7 mountain support.",
    url: "https://shopatrip.in/packages",
    images: ["/logo.jpg"],
  },
};

export default function PackagesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Shop A Trip Kashmir & Ladakh Tour Packages",
    description: "Handcrafted Kashmir, Gurez Valley, Keran Valley, and Ladakh tour itineraries.",
    url: "https://shopatrip.in/packages",
  };

  return (
    <main className="min-h-screen bg-[#fbfdfb] text-slate-900 selection:bg-[#38804b]/20 selection:text-[#38804b] flex flex-col justify-between">
      <JsonLd data={itemListSchema} />
      <Navbar />

      <div className="pt-24 md:pt-28">
        <Breadcrumbs items={[{ name: "Tour Packages", href: "/packages" }]} />

        {/* Hero Banner */}
        <section className="relative bg-[#38804b] text-white py-14 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#fbfdfb] rounded-tl-[2rem] rounded-tr-[2rem] hidden md:block" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30 mb-5">
              <BadgeCheck className="w-3.5 h-3.5 text-white" />
              Handcrafted Himalayan Itineraries
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Explore Our Curated <span className="text-emerald-100">Kashmir &amp; Ladakh</span> Tour Packages
            </h1>
            <p className="mt-5 text-sm sm:text-base text-emerald-50 max-w-2xl mx-auto leading-relaxed">
              From romantic honeymoon escapes on Dal Lake to rugged offbeat frontiers in Gurez and high-pass Ladakh expeditions, all managed by our local Tangmarg/Gulmarg operations team.
            </p>
          </div>
        </section>

        {/* Interactive Catalog with Filter & Search */}
        <PackageCatalogClient />
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
