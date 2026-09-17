"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { 
  Mountain,
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  Compass
} from "lucide-react";

export default function DestinationSection() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  
  // Mobile slider ref & state
  const mobileSliderRef = useRef<HTMLDivElement>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);

  // Desktop slider ref & state (4 cards per view)
  const desktopSliderRef = useRef<HTMLDivElement>(null);
  const [desktopPageIndex, setDesktopPageIndex] = useState<number>(0);

  const regions = [
    "All",
    "Kashmir Valley",
    "Offbeat Frontiers",
    "Ladakh & Kargil",
    "Jammu & Kishtwar"
  ];

  const filteredDestinations = destinations.filter(
    (d) => selectedRegion === "All" || d.region === selectedRegion
  );

  const totalDesktopPages = Math.ceil(filteredDestinations.length / 4);

  // Reset sliders when region filter changes
  useEffect(() => {
    if (mobileSliderRef.current) {
      mobileSliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
    if (desktopSliderRef.current) {
      desktopSliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
    setActiveMobileIndex(0);
    setDesktopPageIndex(0);
  }, [selectedRegion]);

  // Mobile scroll tracking
  const handleMobileScroll = () => {
    if (!mobileSliderRef.current) return;
    const { scrollLeft, clientWidth } = mobileSliderRef.current;
    if (clientWidth > 0) {
      const newIndex = Math.round(scrollLeft / (clientWidth * 0.8));
      setActiveMobileIndex(Math.min(newIndex, filteredDestinations.length - 1));
    }
  };

  const scrollMobileSlider = (direction: "prev" | "next") => {
    if (!mobileSliderRef.current) return;
    const scrollAmount = mobileSliderRef.current.clientWidth * 0.8;
    mobileSliderRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollMobileToIndex = (index: number) => {
    if (!mobileSliderRef.current) return;
    const scrollAmount = mobileSliderRef.current.clientWidth * 0.8 * index;
    mobileSliderRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
    setActiveMobileIndex(index);
  };

  // Desktop slider controls (slides by 1 page = 4 cards)
  const scrollDesktop = (direction: "prev" | "next") => {
    if (!desktopSliderRef.current) return;
    const containerWidth = desktopSliderRef.current.clientWidth;
    const newPage = direction === "next" 
      ? Math.min(desktopPageIndex + 1, totalDesktopPages - 1)
      : Math.max(desktopPageIndex - 1, 0);

    desktopSliderRef.current.scrollTo({
      left: newPage * containerWidth,
      behavior: "smooth",
    });
    setDesktopPageIndex(newPage);
  };

  const scrollDesktopToPage = (pageIdx: number) => {
    if (!desktopSliderRef.current) return;
    const containerWidth = desktopSliderRef.current.clientWidth;
    desktopSliderRef.current.scrollTo({
      left: pageIdx * containerWidth,
      behavior: "smooth",
    });
    setDesktopPageIndex(pageIdx);
  };

  const handleDesktopScroll = () => {
    if (!desktopSliderRef.current) return;
    const { scrollLeft, clientWidth } = desktopSliderRef.current;
    if (clientWidth > 0) {
      const page = Math.round(scrollLeft / clientWidth);
      setDesktopPageIndex(Math.min(page, totalDesktopPages - 1));
    }
  };

  return (
    <section id="destinations" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38804e]/10 text-[#38804e] text-xs font-semibold mb-2 border border-[#38804e]/20">
              <Compass className="w-3.5 h-3.5 text-[#38804e]" />
              <span>Explore The Himalayas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Destinations to explore
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-500 max-w-2xl">
              Gulmarg meadows, Gurez frontier hamlets, Pangong blue, and everything between.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRegion(r)}
                className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedRegion === r
                    ? "bg-[#38804e] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* 1. MOBILE & TABLET VIEW: Horizontal Touch Slider (Hidden on Desktop lg:) */}
        <div className="block lg:hidden mb-6">
          {/* Mobile Slider Controls Bar */}
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs text-pine-800 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#38804e] animate-pulse" />
              Swipe destinations ({activeMobileIndex + 1} of {filteredDestinations.length})
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollMobileSlider("prev")}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-sm active:bg-slate-100 hover:bg-slate-50 transition-colors"
                aria-label="Previous destination"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollMobileSlider("next")}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-sm active:bg-slate-100 hover:bg-slate-50 transition-colors"
                aria-label="Next destination"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Container for Mobile */}
          <div
            ref={mobileSliderRef}
            onScroll={handleMobileScroll}
            className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar scroll-smooth -mx-4 px-4 sm:-mx-6 sm:px-6"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {filteredDestinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/${dest.id}`}
                className="group relative h-96 w-[80vw] sm:w-[300px] flex-shrink-0 snap-center rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-2xl transition-all duration-300 block"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 80vw, 300px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 group-hover:via-black/50 transition-colors" />

                {/* Region Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                    {dest.region}
                  </span>
                </div>

                {/* Bottom Card Content */}
                <div className="absolute bottom-5 left-5 right-5 space-y-2">
                  <div className="flex items-center text-xs text-emerald-300 font-medium">
                    <Mountain className="w-3.5 h-3.5 mr-1 text-[#38804e]" />
                    <span>{dest.altitude}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {dest.tagline}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-white/15 text-xs text-[#38804e] font-semibold group-hover:translate-x-1 transition-transform">
                    <span>View Travel Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Pagination Dots */}
          {filteredDestinations.length > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-2">
              {filteredDestinations.slice(0, Math.min(filteredDestinations.length, 12)).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollMobileToIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeMobileIndex === idx
                      ? "w-6 bg-pine-900"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to destination ${idx + 1}`}
                />
              ))}
              {filteredDestinations.length > 12 && (
                <span className="text-[10px] text-slate-400 ml-1">+{filteredDestinations.length - 12}</span>
              )}
            </div>
          )}
        </div>

        {/* 2. DESKTOP VIEW: 4-Card Slider / Carousel (Hidden on Mobile/Tablet) */}
        <div className="hidden lg:block mb-8">
          {/* Desktop Slider Header Controls & Counter */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Showing 4 of {filteredDestinations.length} destinations ({desktopPageIndex * 4 + 1}–{Math.min((desktopPageIndex + 1) * 4, filteredDestinations.length)})
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollDesktop("prev")}
                disabled={desktopPageIndex === 0}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 shadow-sm hover:bg-[#38804e] hover:text-white disabled:opacity-40 disabled:hover:bg-slate-100 disabled:hover:text-slate-800 transition-all"
                aria-label="Previous 4 destinations"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-1 px-2">
                {Array.from({ length: totalDesktopPages }).map((_, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => scrollDesktopToPage(pIdx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      desktopPageIndex === pIdx
                        ? "w-6 bg-[#38804e]"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to page ${pIdx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => scrollDesktop("next")}
                disabled={desktopPageIndex >= totalDesktopPages - 1}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 shadow-sm hover:bg-[#38804e] hover:text-white disabled:opacity-40 disabled:hover:bg-slate-100 disabled:hover:text-slate-800 transition-all"
                aria-label="Next 4 destinations"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Desktop 4-Card Slide Track */}
          <div
            ref={desktopSliderRef}
            onScroll={handleDesktopScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth pb-2"
          >
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="w-[calc(25%-18px)] flex-shrink-0 snap-start"
              >
                <Link
                  href={`/destinations/${dest.id}`}
                  className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 block"
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="25vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 group-hover:via-black/50 transition-colors" />

                  {/* Region Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                      {dest.region}
                    </span>
                  </div>

                  {/* Bottom Card Content */}
                  <div className="absolute bottom-5 left-5 right-5 space-y-2">
                    <div className="flex items-center text-xs text-emerald-300 font-medium">
                      <Mountain className="w-3.5 h-3.5 mr-1 text-[#38804e]" />
                      <span>{dest.altitude}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {dest.tagline}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-white/15 text-xs text-[#38804e] font-semibold group-hover:translate-x-1 transition-transform">
                      <span>View Travel Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* View all destinations button */}
        <div className="mt-4 sm:mt-8 text-center">
          <Link
            href="/destinations"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-[#38804e] hover:bg-[#2b693f] text-white font-bold text-xs sm:text-sm shadow-md transition-all space-x-2 transform hover:-translate-y-0.5"
          >
            <span>Browse All {destinations.length} Destination Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}


