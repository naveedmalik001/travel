"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { tourPackages, TourPackage } from "@/data/packages";
import PackageCard from "./PackageCard";
import ItineraryModal from "./ItineraryModal";
import { 
  Filter, 
  Search, 
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Compass
} from "lucide-react";

export default function PackageBrowser({
  initialCategory = "All",
}: {
  initialCategory?: string;
}) {
  const [selectedDivision, setSelectedDivision] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [durationFilter, setDurationFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(false);
  const [activeModalPackage, setActiveModalPackage] = useState<TourPackage | null>(null);
  
  // Mobile/Tablet Slider State & Ref
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  // Counts for divisions
  const counts = useMemo(() => {
    return {
      all: tourPackages.length,
      kashmir: tourPackages.filter((p) => p.division === "Kashmir").length,
      jammu: tourPackages.filter((p) => p.division === "Jammu").length,
      ladakh: tourPackages.filter((p) => p.division === "Ladakh").length,
    };
  }, []);

  const divisions = [
    { id: "All", label: "All Regions", count: counts.all },
    { id: "Kashmir", label: "Kashmir Division", count: counts.kashmir },
    { id: "Jammu", label: "Jammu Division", count: counts.jammu },
    { id: "Ladakh", label: "Ladakh Division", count: counts.ladakh },
  ];

  const categories = [
    { id: "All", label: "All Themes" },
    { id: "Classic Kashmir", label: "Classic Kashmir" },
    { id: "Honeymoon & Romantic", label: "Honeymoon Specials" },
    { id: "Hot Deals", label: "Hot Deals & Family" },
    { id: "Offbeat Frontiers", label: "Offbeat Valleys (Gurez, Keran, Kishtwar)" },
    { id: "Ladakh & Kargil", label: "Ladakh Overland" },
    { id: "Pilgrimage & Heritage", label: "Jammu & Katra Vaishno Devi" },
  ];

  const filteredPackages = useMemo(() => {
    return tourPackages.filter((pkg) => {
      // Division match
      const matchDivision = selectedDivision === "All" || pkg.division === selectedDivision;

      // Category match
      const matchCat =
        selectedCategory === "All" ||
        pkg.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === "Offbeat Frontiers" && pkg.category === "Offbeat Frontiers") ||
        (selectedCategory === "Hot Deals" && pkg.category === "Hot Deals");

      // Duration match
      let matchDuration = true;
      if (durationFilter === "short") matchDuration = pkg.days <= 4;
      else if (durationFilter === "medium") matchDuration = pkg.days >= 5 && pkg.days <= 7;
      else if (durationFilter === "long") matchDuration = pkg.days >= 8;

      // Search query
      const matchSearch =
        !searchQuery ||
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.division.toLowerCase().includes(searchQuery.toLowerCase());

      return matchDivision && matchCat && matchDuration && matchSearch;
    });
  }, [selectedDivision, selectedCategory, durationFilter, searchQuery]);

  // Reset mobile slider position when filters change
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
    setActiveSlideIndex(0);
  }, [selectedDivision, selectedCategory, durationFilter, searchQuery]);

  // Handle scroll in mobile slider to update pagination dot
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, clientWidth } = sliderRef.current;
    if (clientWidth > 0) {
      const newIndex = Math.round(scrollLeft / (clientWidth * 0.85));
      setActiveSlideIndex(Math.min(newIndex, filteredPackages.length - 1));
    }
  };

  const scrollSlider = (direction: "prev" | "next") => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.clientWidth * 0.85;
    sliderRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.clientWidth * 0.85 * index;
    sliderRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
    setActiveSlideIndex(index);
  };

  // Desktop visible packages (3 initial, or all when expanded)
  const visiblePackages = showAll ? filteredPackages : filteredPackages.slice(0, 3);

  return (
    <section id="packages" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38804b]/10 text-[#38804b] text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-[#38804b]" />
            <span>Handcrafted Itineraries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Browse tour packages
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500 leading-relaxed">
            Kashmir, Jammu &amp; Ladakh — filter by region, theme, or length.
          </p>
        </div>

        {/* Primary Division-Wise Selector Bar */}
        <div className="max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {divisions.map((div) => {
              const isSelected = selectedDivision === div.id;
              return (
                <button
                  key={div.id}
                  onClick={() => {
                    setSelectedDivision(div.id);
                    setSelectedCategory("All"); // Reset category on division change
                  }}
                  className={`py-2.5 sm:py-3 px-2 sm:px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center gap-0.5 ${
                    isSelected
                      ? "bg-[#38804b] text-white shadow-md scale-[1.02]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span>{div.label}</span>
                  <span className={`text-[10px] font-normal px-2 py-0.2 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    {div.count} Packages
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Filter Controls (Theme Tags, Duration & Search) */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200 mb-6 sm:mb-8 space-y-4">
          
          {/* Theme Categories Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-500 mr-1 hidden sm:inline">Theme:</span>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-[#38804b] text-white shadow-sm"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Sub-filters: Duration & Search */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <span className="font-semibold text-slate-600 flex items-center flex-shrink-0">
                <Filter className="w-3.5 h-3.5 mr-1" />
                Duration:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: "all", label: "All Days" },
                  { id: "short", label: "3–4 Days" },
                  { id: "medium", label: "5–7 Days" },
                  { id: "long", label: "8–12 Days" },
                ].map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDurationFilter(d.id)}
                    className={`px-2.5 sm:px-3 py-1.5 rounded-lg font-medium transition-colors ${
                      durationFilter === d.id
                        ? "bg-[#38804b] text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Keyword Search */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search destination, valley, pass..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#38804b]"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            </div>
          </div>
        </div>

        {/* Results Counter & Controls */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 text-xs text-slate-500 font-medium px-1">
          <span>
            Showing <strong>{filteredPackages.length}</strong> {selectedDivision !== "All" ? `${selectedDivision} Division` : ""} itineraries
          </span>
          <span className="hidden sm:inline">MAP Stays + Private Dedicated Cab Included</span>
        </div>

        {filteredPackages.length > 0 ? (
          <>
            {/* 1. MOBILE & TABLET VIEW: Touch-Swipe Slider / Carousel (Hidden on Desktop) */}
            <div className="block lg:hidden">
              {/* Slider Header / Navigation Controls for Mobile & Tablet */}
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs text-[#38804b] font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#38804b] animate-pulse" />
                  Swipe left or right ({activeSlideIndex + 1} of {filteredPackages.length})
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => scrollSlider("prev")}
                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-sm active:bg-slate-100 hover:bg-slate-50 transition-colors"
                    aria-label="Previous package slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollSlider("next")}
                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-sm active:bg-slate-100 hover:bg-slate-50 transition-colors"
                    aria-label="Next package slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Horizontal Scrollable Slider Container */}
              <div
                ref={sliderRef}
                onScroll={handleScroll}
                className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar scroll-smooth -mx-4 px-4 sm:-mx-6 sm:px-6"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {filteredPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="w-[85vw] sm:w-[350px] flex-shrink-0 snap-center"
                  >
                    <PackageCard
                      pkg={pkg}
                      onOpenDetails={(p) => setActiveModalPackage(p)}
                    />
                  </div>
                ))}
              </div>

              {/* Slider Pagination Indicator Dots */}
              {filteredPackages.length > 1 && (
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  {filteredPackages.slice(0, Math.min(filteredPackages.length, 10)).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeSlideIndex === idx
                          ? "w-6 bg-[#38804b]"
                          : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                  {filteredPackages.length > 10 && (
                    <span className="text-[10px] text-slate-400 ml-1">+{filteredPackages.length - 10}</span>
                  )}
                </div>
              )}
            </div>

            {/* 2. DESKTOP VIEW: Multi-Column Grid (Hidden on Mobile/Tablet) */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-8">
              {visiblePackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  onOpenDetails={(p) => setActiveModalPackage(p)}
                />
              ))}
            </div>

            {/* Action Buttons: Show More / Fewer & Browse All Tour Packages */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              {/* Show More toggle for Desktop */}
              {filteredPackages.length > 3 && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="hidden lg:inline-flex items-center space-x-2 px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-all"
                >
                  <span>
                    {showAll 
                      ? "Show Fewer" 
                      : `Show More (${filteredPackages.length - 3} More)`}
                  </span>
                  {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              )}

              {/* Browse All Tour Packages CTA */}
              <Link
                href="/packages"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3 rounded-2xl bg-[#38804b] hover:bg-[#2b693f] text-white font-bold text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Browse All Tour Packages</span>
                <span>→</span>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <Compass className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No matching packages found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Try adjusting your division, category, or duration filters, or use our interactive custom trip planner to design your exact dream itinerary.
            </p>
            <button
              onClick={() => {
                setSelectedDivision("All");
                setSelectedCategory("All");
                setDurationFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-[#38804b] text-white text-xs font-semibold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Day-by-Day Itinerary Modal */}
      <ItineraryModal
        pkg={activeModalPackage}
        isOpen={!!activeModalPackage}
        onClose={() => setActiveModalPackage(null)}
      />
    </section>
  );
}

