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
  Compass,
  Star
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

          {/* Local credibility line — no generic eyebrow badge */}
          <div className="flex items-center space-x-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 pulse-dot flex-shrink-0" />
            <span className="text-emerald-300/90 text-xs sm:text-sm font-medium tracking-wide">
              Tangmarg · Gulmarg  ·  Local team, {companyInfo.experienceYears}+ years
            </span>
          </div>

          {/* Headline — short, specific, no clichés */}
          <h1 className="text-[2.6rem] sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white max-w-2xl">
            Kashmir & Ladakh,<br />
            <span className="text-amber-400 font-serif italic font-bold">exactly as you imagined.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
            Handpicked packages, snow-chain-ready cabs, and 24/7 mountain support — run from our physical office in Tangmarg, not a call centre.
          </p>

          {/* Three concrete trust signals — no generic checkmarks */}
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-emerald-200/80">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />Zero hidden fees</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />Verified 3-Star &amp; 4-Star stays</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />Gondola & permit support</span>
          </div>

          {/* CTAs — primary + secondary, min 44px height */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-[#071410] font-bold text-sm shadow-lg shadow-amber-500/30 transition-all hover:-translate-y-0.5 min-h-[44px]"
            >
              <span>See All Packages</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hi! I'd like to plan a Kashmir trip. Can you share options?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/18 active:bg-white/25 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm transition-all min-h-[44px]"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Talk to a local</span>
            </a>
          </div>
        </div>

        {/* ─── Search Widget ────────────────────────────────── */}
        <div className="mt-8 lg:mt-0 lg:w-[360px] xl:w-[400px] shrink-0">
          <div className="bg-white rounded-2xl shadow-elevated border border-slate-100 overflow-hidden">

            {/* Header */}
            <div className="bg-[#081812] px-5 py-4 flex items-center gap-2.5">
              <Compass className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <div>
                <p className="text-white font-bold text-sm leading-tight">Find your trip</p>
                <p className="text-emerald-400/80 text-[11px] mt-0.5">Tangmarg-managed packages</p>
              </div>
              <span className="ml-auto text-[11px] bg-amber-500/15 text-amber-300 font-semibold px-2 py-0.5 rounded-full border border-amber-500/30">
                Best rates
              </span>
            </div>

            <form onSubmit={handleSearch} className="p-5 space-y-4">
              {/* Quick picks — pill chips instead of hidden label */}
              <div>
                <p className="text-[11px] text-slate-400 font-medium mb-2">Quick select</p>
                <div className="flex flex-wrap gap-1.5">
                  {quickPicks.map((p) => (
                    <button
                      key={p.value}
                      type="button"
                      onClick={() => setSelectedCategory(p.value)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all min-h-[32px] ${
                        selectedCategory === p.value
                          ? "bg-pine-900 text-amber-300 shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category dropdown — full labels */}
              <div>
                <label htmlFor="hero-category" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Experience
                </label>
                <select
                  id="hero-category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-pine-700/40 focus:border-pine-700 outline-none"
                >
                  <option value="All">All Packages</option>
                  <option value="Classic Kashmir">Classic Kashmir (Srinagar, Gulmarg, Pahalgam)</option>
                  <option value="Honeymoon & Romantic">Honeymoon Specials</option>
                  <option value="Hot Deals">Hot Deals & Family</option>
                  <option value="Offbeat Frontiers">Gurez & Keran Offbeat</option>
                  <option value="Ladakh & Kargil">Ladakh Expedition</option>
                  <option value="Pilgrimage & Heritage">Vaishno Devi & Jammu</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-pine-900 hover:bg-pine-800 active:bg-pine-950 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 min-h-[44px] shadow-md"
              >
                <Search className="w-4 h-4 text-amber-400" />
                <span>Show matching packages</span>
              </button>
            </form>

            {/* Trust footer */}
            <div className="px-5 pb-4 pt-0 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Govt. registered operator
              </span>
              <span className="flex items-center gap-1 font-semibold text-amber-600">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.9 / 5.0
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
