"use client";

import React, { useState, useRef, useEffect } from "react";
import { companyInfo } from "@/data/company";
import { WhatsAppIcon } from "@/components/SocialIcons";
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Strict attributes for mobile iOS/Android inline autoplay
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");

    const playVideo = () => {
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Handled: Will play on user interaction below
          });
        }
      }
    };

    playVideo();

    // Mobile fallback: Start playback on first user touch/scroll if restricted by device battery saver
    const handleFirstInteraction = () => {
      playVideo();
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("touchend", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("click", handleFirstInteraction);
    };

    window.addEventListener("touchstart", handleFirstInteraction, { passive: true, once: true });
    window.addEventListener("touchend", handleFirstInteraction, { passive: true, once: true });
    window.addEventListener("scroll", handleFirstInteraction, { passive: true, once: true });
    window.addEventListener("click", handleFirstInteraction, { passive: true, once: true });

    // Resume video when user switches back to this tab on mobile
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("touchend", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

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
    <div className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/video/kashmir-hero.mp4"
          poster="/images/destinations/Gulmarg/Gulmarg.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/video/kashmir-hero.mp4" type="video/mp4" />
          <source src="/video/sat-hero.mp4" type="video/mp4" />
          <source src="/video/SAT website video.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content — bottom-anchored on mobile, centred on desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 sm:pb-16 lg:pb-20 flex flex-col lg:flex-row lg:items-end lg:gap-12">

        {/* ─── Text Stack ──────────────────────────────────── */}
        <div className="flex-1 text-white">

          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#38804b]/90 text-white border border-white/20 mb-4 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-white flex-shrink-0 animate-pulse" />
            <span className="font-bold tracking-wider uppercase text-[11px] sm:text-xs text-white">KASHMIR • LADAKH • BEYOND</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight max-w-3xl">
            <span className="text-[#38804b]">Kashmir</span><br />
            <span className="text-[#38804b] font-semibold">Experience the Unforgettable</span>
          </h1>

          {/* Tagline */}
          <p className="mt-3 text-base sm:text-xl font-serif italic text-[#38804b]">
            peace &amp; you
          </p>

          {/* Supporting Text */}
          <p className="mt-2.5 text-sm sm:text-base text-slate-200 max-w-xl leading-relaxed font-normal">
            Curated journeys, beautiful stays and seamless travel experiences across Kashmir and beyond.
          </p>

          {/* CTAs — primary + secondary */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#38804b] hover:bg-[#2b693f] active:bg-[#225433] text-white font-bold text-sm shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 min-h-[44px]"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#custom-planner"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/12 hover:bg-white/20 active:bg-white/25 text-white font-semibold text-sm border border-white/25 backdrop-blur-md transition-all min-h-[44px]"
            >
              <Compass className="w-4 h-4 text-[#38804b]" />
              <span>Customize Your Trip</span>
            </a>
          </div>
        </div>

        {/* ─── Search Widget ────────────────────────────────── */}
        <div className="mt-8 lg:mt-0 lg:w-[360px] xl:w-[400px] shrink-0">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">

            {/* Header */}
            <div className="bg-[#38804b] px-5 py-4 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-white flex-shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm leading-tight">Plan Your Kashmir Journey</p>
                  <p className="text-emerald-100 text-[11px] mt-0.5">Local Travel Desk</p>
                </div>
              </div>
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
                          ? "bg-[#38804b] text-white shadow-sm"
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-[#38804b] focus:border-[#38804b] outline-none"
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
                className="w-full py-3.5 rounded-xl bg-[#38804b] hover:bg-[#2b693f] active:bg-[#225433] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 min-h-[44px] shadow-md cursor-pointer"
              >
                <Search className="w-4 h-4 text-white" />
                <span>Show Matching Packages</span>
              </button>
            </form>

            {/* Trust footer */}
            <div className="px-5 pb-4 pt-0 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 pt-3">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38804b]" />
                Govt. Registered Agency
              </span>
              <span className="flex items-center gap-1.5 font-bold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38804b]" />
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
