"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import PackageBrowser from "@/components/PackageBrowser";
import CustomTripPlanner from "@/components/CustomTripPlanner";
import DestinationSection from "@/components/DestinationSection";
import WhyShopATrip from "@/components/WhyShopATrip";
import TestimonialsSection from "@/components/TestimonialsSection";
import CertificationsSection from "@/components/CertificationsSection";
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
    <main className="min-h-screen bg-[#fbfdfb] text-slate-900 selection:bg-[#38804b]/20 selection:text-[#38804b] overflow-x-hidden w-full max-w-full">
      {/* Navigation */}
      <Navbar onOpenCustomPlanner={scrollToCustomPlanner} />

      {/* Hero with quick search */}
      <HeroSection onFilterChange={handleFilterFromHero} />

      {/* Trust & Local credentials bar */}
      <TrustBar />

      {/* How It Works - 4-Step Booking Process */}
      <HowItWorks />

      {/* Interactive Package Browser with Day-Wise Itineraries */}
      <PackageBrowser initialCategory={selectedCategory} />

      {/* Interactive Custom Itinerary & Cost Estimator */}
      <CustomTripPlanner />

      {/* Destination Guides & Visual Spotlights */}
      <DestinationSection />

      {/* Why Travel with ShopATrip */}
      <WhyShopATrip />

      {/* Real Traveler Reviews */}
      <TestimonialsSection />

      {/* Our Certifications & Partners */}
      <CertificationsSection />

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
