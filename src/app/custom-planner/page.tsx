import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CustomTripPlanner from "@/components/CustomTripPlanner";
import HowItWorks from "@/components/HowItWorks";
import { BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Kashmir Trip Planner & Cost Estimator 2026 | Shop A Trip",
  description: "Plan your personalized Kashmir or Ladakh trip with our interactive itinerary & cost calculator. Select destinations, duration, 3-star/4-star hotels, vehicle type, and get instant price estimates.",
  keywords: [
    "Kashmir Trip Planner",
    "Kashmir Tour Cost Calculator",
    "Custom Kashmir Itinerary",
    "Kashmir Cab Rates Calculator",
    "Shop A Trip Planner"
  ],
  openGraph: {
    title: "Custom Kashmir Trip Planner & Cost Calculator | Shop A Trip",
    description: "Design your custom trip to Kashmir & Ladakh and calculate transparent package rates instantly.",
    url: "https://shopatrip.in/custom-planner",
    images: ["/logo.jpg"],
  },
};

export default function CustomPlannerPage() {
  const plannerSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Shop A Trip Kashmir Tour Cost Estimator",
    applicationCategory: "TravelApplication",
    description: "Interactive trip planner and real-time package cost calculator for Jammu, Kashmir, and Ladakh.",
    url: "https://shopatrip.in/custom-planner",
  };

  return (
    <main className="min-h-screen bg-[#fbfdfb] text-slate-900 selection:bg-[#38804b]/20 selection:text-[#38804b] flex flex-col justify-between">
      <JsonLd data={plannerSchema} />
      <Navbar />

      <div className="pt-24 md:pt-28">
        <Breadcrumbs items={[{ name: "Custom Trip Planner", href: "/custom-planner" }]} />

        {/* Hero Banner */}
        <section className="relative bg-[#081f16] text-white py-14 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#38804b]/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#fbfdfb] rounded-tl-[2rem] rounded-tr-[2rem] hidden md:block" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#0B1E15]/90 text-[#38804b] border border-[#38804b]/30 mb-5">
              <BadgeCheck className="w-3.5 h-3.5 text-[#38804b]" />
              Interactive Cost &amp; Route Estimator
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Design Your <span className="text-[#38804b]">Dream Himalayan</span> Journey
            </h1>
            <p className="mt-5 text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Pick your favourite destinations, select hotel categories (3-Star Deluxe, 4-Star Luxury, Houseboat), choose your vehicle, and get transparent, live price estimates instantly.
            </p>
          </div>
        </section>

        {/* Custom Planner Component */}
        <CustomTripPlanner />

        {/* How It Works - 4 Step Booking Process */}
        <HowItWorks />
      </div>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
