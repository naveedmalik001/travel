"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PackageBrowser from "@/components/PackageBrowser";
import CustomTripPlanner from "@/components/CustomTripPlanner";
import DestinationSection from "@/components/DestinationSection";
import LocalAdvantage from "@/components/LocalAdvantage";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleFilterFromHero = (category: string) => {
    setSelectedCategory(category);
  };

  const scrollToCustomPlanner = () => {
    const el = document.getElementById("custom-planner");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#fbfdfb] text-slate-900 selection:bg-emerald-100 selection:text-emerald-950">
      {/* Navigation */}
      <Navbar onOpenCustomPlanner={scrollToCustomPlanner} />

      {/* Hero with quick search */}
      <HeroSection onFilterChange={handleFilterFromHero} />

      {/* Trust & Local credentials bar */}
      <TrustBar />

      {/* Interactive Package Browser with Day-Wise Itineraries */}
      <PackageBrowser initialCategory={selectedCategory} />

      {/* Interactive Custom Itinerary & Cost Estimator */}
      <CustomTripPlanner />

      {/* Destination Guides & Visual Spotlights */}
      <DestinationSection />

      {/* Why Choose Local Tangmarg/Gulmarg Base */}
      <LocalAdvantage />

      {/* Real Traveler Reviews */}
      <TestimonialsSection />

      {/* FAQs */}
      <FAQSection />

      {/* Direct Contact Hub & Quick Inquiry */}
      <ContactSection />

      {/* Full Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <WhatsAppFloat />
    </main>
  );
}
