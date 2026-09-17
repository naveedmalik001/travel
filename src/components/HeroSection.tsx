"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/data/company";
import { 
  ShieldCheck, 
  Search, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Compass
} from "lucide-react";

export default function HeroSection({
  onFilterChange,
}: {
  onFilterChange: (category: string) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(selectedCategory);
    const element = document.getElementById("packages");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Destination quick-pick chips for mobile-first UX
  const quickPicks = [
    { label: "Gulmarg Snow", value: "Classic Kashmir" },
    { label: "Honeymoon", value: "Honeymoon & Romantic" },
    { label: "Gurez Offbeat", value: "Offbeat Frontiers" },
    { label: "Ladakh", value: "Ladakh & Kargil" },
    { label: "Hot Deals", value: "Hot Deals" },
  ];

  return (
    <div className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[#071410]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=2000&q=85"
          alt="Kashmir Pahalgam Valley pine forest and snow peaks"
          fill
          priority
          className="object-cover object-center opacity-50"
        />
        {/* Layered gradient: stronger at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071410] via-[#071410]/70 to-[#071410]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071410]/75 via-transparent to-transparent" />
      </div>

      {/* Content — bottom-anchored on mobile, centred on desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 sm:pb-16 lg:pb-20 flex flex-col lg:flex-row lg:items-end lg:gap-12">

        {/* ─── Text Stack ──────────────────────────────────── */}
        <div className="flex-1 text-white">

          {/* Local credibility badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#38804e] flex-shrink-0" />
            <span>Tangmarg &amp; Gulmarg Local Operators · {companyInfo.experienceYears}+ Years Field Experience</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white max-w-3xl">
            Discover Kashmir,{" "}
            <span className="text-[#38804e] font-serif italic font-normal">Travel Your Way</span>
          </h1>

          {/* Subheading */}
          <h2 className="mt-4 text-lg sm:text-2xl font-bold text-white max-w-2xl leading-snug">
            Handcrafted Jammu, Kashmir and Ladakh Holidays by Local Team
          </h2>

          <p className="mt-3 text-sm sm:text-base text-white max-w-xl leading-relaxed font-normal">
            Handpicked itineraries, 4x4 snow-chain cabs, and 24/7 mountain support — managed by our native on-ground team in Tangmarg, not an outsourced call centre.
          </p>

          {/* Concrete trust signals */}
          <div className="mt-6 flex flex-wrap gap-2.5 text-xs sm:text-sm text-white font-medium">
            <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 text-white">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38804e] flex-shrink-0" />
              Direct Local Operator
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 text-white">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38804e] flex-shrink-0" />
              Verified 3★ &amp; 4★ Stays
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 text-white">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38804e] flex-shrink-0" />
              Gondola &amp; Pass Assistance
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 text-white">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38804e] flex-shrink-0" />
              24/7 On-Ground Support
            </span>
          </div>

          {/* CTAs — primary + secondary */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#38804e] hover:bg-[#2b693f] active:bg-[#225433] text-white font-bold text-sm shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 min-h-[44px]"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hi Shop A Trip, I want to plan my Kashmir trip. Please help me with custom itinerary and quotes.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/12 hover:bg-white/20 active:bg-white/25 text-white font-semibold text-sm border border-white/25 backdrop-blur-md transition-all min-h-[44px]"
            >
              <PhoneCall className="w-4 h-4 text-[#38804e]" />
              <span>Plan My Trip</span>
            </a>
          </div>
        </div>

        {/* ─── Search Widget ────────────────────────────────── */}
        <div className="mt-8 lg:mt-0 lg:w-[360px] xl:w-[400px] shrink-0">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">

            {/* Header */}
            <div className="bg-[#081812] px-5 py-4 flex items-center gap-2.5">
              <Compass className="w-4 h-4 text-[#38804e] flex-shrink-0" />
              <div>
                <p className="text-white font-bold text-sm leading-tight">Plan Your Kashmir Journey</p>
                <p className="text-emerald-400/80 text-[11px] mt-0.5">Direct Local Travel Desk</p>
              </div>
              <span className="ml-auto text-[10px] uppercase tracking-wider bg-[#38804e]/20 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full border border-[#38804e]/30">
                Direct Rates
              </span>
            </div>

            <form onSubmit={handleSearch} className="p-5 space-y-4">
              {/* Quick picks */}
              <div>
                <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-2">Featured Trails</p>
                <div className="flex flex-wrap gap-1.5">
                  {quickPicks.map((p) => (
                    <button
                      key={p.value}
                      type="button"
                      onClick={() => setSelectedCategory(p.value)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all min-h-[32px] ${
                        selectedCategory === p.value
                          ? "bg-[#38804e] text-white shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category dropdown */}
              <div>
                <label htmlFor="hero-category" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Travel Category
                </label>
                <select
                  id="hero-category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-[#38804e] focus:border-[#38804e] outline-none"
                >
                  <option value="All">All Curated Packages</option>
                  <option value="Classic Kashmir">Classic Kashmir (Srinagar, Gulmarg, Pahalgam)</option>
                  <option value="Honeymoon & Romantic">Honeymoon & Romantic Getaways</option>
                  <option value="Hot Deals">Hot Deals & Family Specials</option>
                  <option value="Offbeat Frontiers">Gurez Valley & Keran Frontiers</option>
                  <option value="Ladakh & Kargil">Ladakh Overland Expeditions</option>
                  <option value="Pilgrimage & Heritage">Jammu & Katra Vaishno Devi</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#38804e] hover:bg-[#2b693f] active:bg-[#225433] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 min-h-[44px] shadow-md cursor-pointer"
              >
                <Search className="w-4 h-4 text-white" />
                <span>Show Matching Packages</span>
              </button>
            </form>

            {/* Trust footer */}
            <div className="px-5 pb-4 pt-0 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 pt-3">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38804e]" />
                Govt. Registered Agency
              </span>
              <span className="flex items-center gap-1.5 font-bold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38804e]" />
                100% Verified Local Team
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll hint — only visible on desktop */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-1.5 text-slate-400/60 text-[10px] tracking-widest">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-slate-400/50" />
        <span>SCROLL</span>
      </div>
    </div>
  );
}
