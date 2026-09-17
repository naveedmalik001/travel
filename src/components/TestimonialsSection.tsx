"use client";

import React, { useState, useRef } from "react";
import { companyInfo } from "@/data/company";
import { 
  Star, 
  ExternalLink, 
  MapPin, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck
} from "lucide-react";

export default function TestimonialsSection() {
  const [activeMobileIdx, setActiveMobileIdx] = useState<number>(0);
  const [desktopPage, setDesktopPage] = useState<number>(0);
  const mobileRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: "Vikram & Ananya Sengupta",
      location: "Kolkata, West Bengal",
      tour: "5N/6D Romantic Honeymoon Special",
      rating: 5,
      date: "October 2025",
      review: "The candlelit dinner on the Dal Lake houseboat was something out of a film. Our Tangmarg team had pre-arranged flower petals on arrival and had the Gondola slots booked for the exact morning we needed. Genuinely flawless hospitality.",
      initials: "VS",
    },
    {
      name: "Dr. Rajesh Kulkarni",
      location: "Pune, Maharashtra",
      tour: "9N/10D Jammu, Katra & Kashmir Circuit",
      rating: 5,
      date: "December 2025",
      review: "Travelling with elderly parents and two young kids is a logistical challenge in high altitude. The driver was exceptionally patient, the hotels had proper central heating and pure vegetarian food, and the Innova handled snowy roads with snow chains effortlessly.",
      initials: "RK",
    },
    {
      name: "Rohit Deshmukh & Friends",
      location: "Bengaluru, Karnataka",
      tour: "6N/7D Gurez Frontier Valley",
      rating: 5,
      date: "August 2025",
      review: "Razdan Pass, Habba Khatoon spring, a bonfire by the Kishanganga river at night — none of that happens without a team that knows the border permit process inside out. Don't attempt offbeat Kashmir with anyone who isn't based here locally.",
      initials: "RD",
    },
    {
      name: "Meenakshi Sundaram & Family",
      location: "Chennai, Tamil Nadu",
      tour: "7N/8D Kashmir & Katra Yatra",
      rating: 5,
      date: "September 2025",
      review: "From Katra VIP coordination to Srinagar Mughal gardens and Gulmarg meadows, everything was handled punctually. Clean cabs, dedicated courteous local drivers, and zero hidden charges in pricing.",
      initials: "MS",
    },
    {
      name: "Amit & Pooja Sharma",
      location: "Delhi NCR",
      tour: "8N/9D Leh Ladakh & Kargil Circuit",
      rating: 5,
      date: "July 2025",
      review: "Crossing Zoji La Pass and Khardung La with Shop A Trip's backup oxygen cylinder and high-clearance 4x4 gave us 100% peace of mind. The boutique luxury camps in Nubra and Pangong Lake were breathtaking.",
      initials: "AS",
    },
    {
      name: "Tariq & Sarah Williams",
      location: "London, United Kingdom",
      tour: "6N/7D Winter Snow & Gulmarg Ski",
      rating: 5,
      date: "January 2026",
      review: "Phenomenal ski guidance in Gulmarg! Having local specialists situated right on the ground in Tangmarg meant zero delays with snow chain vehicles, equipment rentals, and Phase 2 Apharwat ski passes.",
      initials: "TW",
    },
  ];

  const totalDesktopPages = Math.ceil(reviews.length / 3);

  // Mobile scroll handler
  const handleMobileScroll = () => {
    if (!mobileRef.current) return;
    const { scrollLeft, clientWidth } = mobileRef.current;
    if (clientWidth > 0) {
      const idx = Math.round(scrollLeft / (clientWidth * 0.85));
      setActiveMobileIdx(Math.min(idx, reviews.length - 1));
    }
  };

  const scrollMobile = (direction: "prev" | "next") => {
    if (!mobileRef.current) return;
    const amount = mobileRef.current.clientWidth * 0.85;
    mobileRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const scrollMobileToIndex = (idx: number) => {
    if (!mobileRef.current) return;
    const amount = mobileRef.current.clientWidth * 0.85 * idx;
    mobileRef.current.scrollTo({ left: amount, behavior: "smooth" });
    setActiveMobileIdx(idx);
  };

  // Desktop scroll handler (3 reviews per view)
  const scrollDesktop = (direction: "prev" | "next") => {
    if (!desktopRef.current) return;
    const width = desktopRef.current.clientWidth;
    const newPage = direction === "next"
      ? Math.min(desktopPage + 1, totalDesktopPages - 1)
      : Math.max(desktopPage - 1, 0);

    desktopRef.current.scrollTo({
      left: newPage * width,
      behavior: "smooth",
    });
    setDesktopPage(newPage);
  };

  const scrollDesktopToPage = (pageIdx: number) => {
    if (!desktopRef.current) return;
    const width = desktopRef.current.clientWidth;
    desktopRef.current.scrollTo({
      left: pageIdx * width,
      behavior: "smooth",
    });
    setDesktopPage(pageIdx);
  };

  const handleDesktopScroll = () => {
    if (!desktopRef.current) return;
    const { scrollLeft, clientWidth } = desktopRef.current;
    if (clientWidth > 0) {
      const page = Math.round(scrollLeft / clientWidth);
      setDesktopPage(Math.min(page, totalDesktopPages - 1));
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header row with navigation arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#38804e] text-xs font-semibold border border-emerald-200/80 mb-2.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38804e]" />
              <span>Verified Guest Experiences</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 font-serif">
              What Our Travelers Say
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-xl">
              Authentic stories from families, couples, and adventurers who experienced Kashmir &amp; Ladakh with our local team.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={companyInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200/90 shadow-2xs transition-all flex-shrink-0"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* 1. MOBILE & TABLET SLIDER VIEW */}
        <div className="block lg:hidden mb-6">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs text-slate-600 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#38804e] animate-pulse" />
              Review {activeMobileIdx + 1} of {reviews.length}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollMobile("prev")}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-2xs active:bg-slate-100 hover:bg-slate-50 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollMobile("next")}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-2xs active:bg-slate-100 hover:bg-slate-50 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Track */}
          <div
            ref={mobileRef}
            onScroll={handleMobileScroll}
            className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar scroll-smooth -mx-4 px-4 sm:-mx-6 sm:px-6"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="w-[86vw] sm:w-[360px] bg-slate-50/70 p-6 rounded-3xl border border-slate-200/90 shadow-2xs flex flex-col justify-between gap-4 flex-shrink-0 snap-center"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">{r.date}</span>
                  </div>

                  <div className="relative">
                    <Quote className="w-6 h-6 text-emerald-100 absolute -top-1 -left-1 fill-emerald-100" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-3">
                      &ldquo;{r.review}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-100 text-[#38804e] font-bold text-xs flex items-center justify-center flex-shrink-0 border border-emerald-200">
                        {r.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 leading-tight">{r.name}</h4>
                        <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                          <span>{r.location}</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-[#38804e] font-semibold px-2 py-0.5 rounded-md border border-emerald-100 whitespace-nowrap flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#38804e]" />
                      Verified
                    </span>
                  </div>
                  <p className="text-[11px] text-[#38804e] font-semibold mt-2.5 ml-12">
                    {r.tour}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollMobileToIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeMobileIdx === idx
                    ? "w-6 bg-[#38804e]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 2. DESKTOP SLIDER VIEW */}
        <div className="hidden lg:block mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-slate-600">
              Showing reviews {desktopPage * 3 + 1}–{Math.min((desktopPage + 1) * 3, reviews.length)} of {reviews.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollDesktop("prev")}
                disabled={desktopPage === 0}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs hover:bg-[#38804e] hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-800 transition-all cursor-pointer"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1 px-2">
                {Array.from({ length: totalDesktopPages }).map((_, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => scrollDesktopToPage(pIdx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      desktopPage === pIdx
                        ? "w-6 bg-[#38804e]"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to page ${pIdx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => scrollDesktop("next")}
                disabled={desktopPage >= totalDesktopPages - 1}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs hover:bg-[#38804e] hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-800 transition-all cursor-pointer"
                aria-label="Next reviews"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Desktop Slide Track */}
          <div
            ref={desktopRef}
            onScroll={handleDesktopScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth pb-2"
          >
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="w-[calc(33.333%-16px)] bg-slate-50/60 p-6 rounded-3xl border border-slate-200/90 shadow-2xs flex flex-col justify-between gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex-shrink-0 snap-start"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{r.date}</span>
                  </div>

                  <div className="relative">
                    <Quote className="w-6 h-6 text-emerald-100 absolute -top-1 -left-1 fill-emerald-100" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-3 min-h-[76px]">
                      &ldquo;{r.review}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-100 text-[#38804e] font-bold text-xs flex items-center justify-center flex-shrink-0 border border-emerald-200">
                        {r.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 leading-tight">{r.name}</h4>
                        <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                          <span>{r.location}</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-[#38804e] font-semibold px-2 py-0.5 rounded-md border border-emerald-100 whitespace-nowrap flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#38804e]" />
                      Verified
                    </span>
                  </div>
                  <p className="text-[11px] text-[#38804e] font-semibold mt-2.5 ml-12">
                    {r.tour}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
