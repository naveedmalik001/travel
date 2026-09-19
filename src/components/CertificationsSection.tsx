"use client";

import React, { useRef, useState, useEffect } from "react";
import { 
  BadgeCheck, 
  ChevronLeft, 
  ChevronRight, 
  Lock, 
  CheckCircle2
} from "lucide-react";

interface PartnerItem {
  id: string;
  name: string;
  authority: string;
  badge: string;
  subText: string;
  logoSrc: string;
  logoAlt: string;
  logoClass: string;
}

const partners: PartnerItem[] = [
  {
    id: "ministry-of-tourism",
    name: "Ministry of Tourism",
    authority: "Government of India",
    badge: "National Approved",
    subText: "Govt. of India Official",
    logoSrc: "/images/partners/ministry-of-tourism-india.png",
    logoAlt: "Ministry of Tourism Government of India Official Logo",
    logoClass: "h-10 sm:h-11 w-auto max-w-[150px] object-contain",
  },
  {
    id: "jk-tourism",
    name: "J&K Tourism Dept.",
    authority: "Jammu & Kashmir Govt.",
    badge: "State Recognized",
    subText: "Directorate of Tourism J&K",
    logoSrc: "/images/partners/jk-tourism-official.png",
    logoAlt: "J&K Tourism Official Department Logo",
    logoClass: "h-11 sm:h-12 w-auto max-w-[120px] object-contain",
  },
  {
    id: "iato",
    name: "IATO Recognized",
    authority: "National Tour Operators",
    badge: "Apex Industry Body",
    subText: "Indian Assoc. of Tour Operators",
    logoSrc: "/images/partners/iato-logo.png",
    logoAlt: "IATO Official Logo",
    logoClass: "h-11 sm:h-12 w-auto max-w-[130px] object-contain",
  },
  {
    id: "tripadvisor",
    name: "TripAdvisor",
    authority: "Traveler Reviews",
    badge: "Top Rated 5.0",
    subText: "Verified Mountain Operator",
    logoSrc: "/images/partners/tripadvisor.svg",
    logoAlt: "TripAdvisor Official Logo",
    logoClass: "h-7 sm:h-8 w-auto max-w-[120px] object-contain",
  },
  {
    id: "jk-gov",
    name: "Govt. of Jammu & Kashmir",
    authority: "Baramulla District",
    badge: "State Registered",
    subText: "Tangmarg Tourism Unit",
    logoSrc: "/images/partners/jk-gov.svg",
    logoAlt: "Government of Jammu and Kashmir Official Emblem",
    logoClass: "h-11 sm:h-12 w-auto max-w-[120px] object-contain",
  },
];

export default function CertificationsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Scroll to a specific card index
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = 265;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const scroll = (direction: "prev" | "next") => {
    const nextIdx = direction === "next" 
      ? (activeIndex + 1) % partners.length 
      : (activeIndex - 1 + partners.length) % partners.length;
    scrollToIndex(nextIdx);
  };

  // Automatic slide interval
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % partners.length;
        if (scrollRef.current) {
          const cardWidth = 265;
          scrollRef.current.scrollTo({
            left: next * cardWidth,
            behavior: "smooth",
          });
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleManualScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const idx = Math.round(scrollLeft / 265);
    setActiveIndex(Math.min(Math.max(idx, 0), partners.length - 1));
  };

  return (
    <section 
      className="py-6 sm:py-8 bg-[#fbfdfb] border-t border-b border-slate-200/80 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Bar without 'Verified Himalayan Credentials' */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#38804b]/10 text-[#38804b] text-[10px] font-bold tracking-widest uppercase mb-0.5">
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>OFFICIAL ACCREDITATIONS &amp; PARTNERS</span>
            </div>
            <p className="text-xs text-slate-500">
              Authorized and registered under Jammu &amp; Kashmir Tourism with recognized national partners.
            </p>
          </div>

          {/* Navigation & Auto-Slide Indicator */}
          <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0">
            {/* Step Dots */}
            <div className="flex items-center gap-1.5">
              {partners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex 
                      ? "w-5 bg-[#38804b]" 
                      : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => scroll("prev")}
                className="p-1 rounded-md bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 active:scale-95 transition-all shadow-xs"
                aria-label="Previous partner"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scroll("next")}
                className="p-1 rounded-md bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 active:scale-95 transition-all shadow-xs"
                aria-label="Next partner"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Partners Auto-Sliding Track (Responsive Grid on Desktop, Auto-Scroll on Mobile) */}
        <div
          ref={scrollRef}
          onScroll={handleManualScroll}
          className="flex lg:grid lg:grid-cols-5 gap-3 sm:gap-4 overflow-x-auto pb-2 lg:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {partners.map((p, idx) => (
            <div
              key={p.id}
              className={`w-[245px] sm:w-[260px] lg:w-auto flex-shrink-0 snap-start bg-white rounded-xl p-3.5 sm:p-4 border transition-all duration-300 flex flex-col justify-between group shadow-xs ${
                idx === activeIndex 
                  ? "border-[#38804b] ring-1 ring-[#38804b]/20" 
                  : "border-slate-200 hover:border-[#38804b]/50"
              }`}
            >
              {/* Logo Area */}
              <div>
                <div className="h-16 flex items-center justify-center p-2 rounded-lg bg-slate-50/90 border border-slate-100 group-hover:bg-white group-hover:border-[#38804b]/20 transition-all mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.logoSrc}
                    alt={p.logoAlt}
                    className={`${p.logoClass} transition-transform duration-300 group-hover:scale-105`}
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center justify-between gap-1.5 mb-1">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#38804b] bg-[#38804b]/10 px-1.5 py-0.5 rounded">
                    {p.badge}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38804b] shrink-0" />
                </div>

                <h4 className="font-bold text-xs sm:text-[13px] text-slate-900 group-hover:text-[#38804b] transition-colors leading-snug">
                  {p.name}
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                  {p.subText}
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                <span className="font-medium text-slate-600">{p.authority}</span>
                <span className="text-[#38804b] font-mono font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Official Registration Footer Note */}
        <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <Lock className="w-3.5 h-3.5 text-[#38804b] shrink-0" />
            <span>
              Registered with <strong>Department of Tourism, Government of Jammu &amp; Kashmir</strong> • Operations Hub: <strong>Tangmarg (Gulmarg Road)</strong>
            </span>
          </div>
          <span className="text-[#38804b] font-medium text-[11px]">
            100% Genuine Local Operator
          </span>
        </div>

      </div>
    </section>
  );
}
