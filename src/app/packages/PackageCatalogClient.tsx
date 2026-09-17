"use client";

import React, { useState, useMemo, useEffect } from "react";
import { tourPackages, TourPackage } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import ItineraryModal from "@/components/ItineraryModal";
import Link from "next/link";
import { 
  Search, 
  SlidersHorizontal, 
  CheckCircle2,
  Calendar, 
  ShieldCheck, 
  Compass, 
  Calculator,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function PackageCatalogClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDuration, setSelectedDuration] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popular");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [activeModalPackage, setActiveModalPackage] = useState<TourPackage | null>(null);

  const categories = [
    "All",
    "Classic Kashmir",
    "Honeymoon & Romantic",
    "Offbeat Frontiers",
    "Hot Deals",
    "Ladakh & Kargil",
    "Pilgrimage & Heritage",
  ];

  const durationFilters = [
    { label: "All Durations", value: "All" },
    { label: "3–4 Days", value: "short" },
    { label: "5–6 Days", value: "medium" },
    { label: "7+ Days", value: "long" },
  ];

  const filteredPackages = useMemo(() => {
    return tourPackages
      .filter((pkg) => {
        // Category Filter
        const matchesCategory =
          selectedCategory === "All" || pkg.category === selectedCategory;

        // Duration Filter
        let matchesDuration = true;
        if (selectedDuration === "short") matchesDuration = pkg.days <= 4;
        else if (selectedDuration === "medium") matchesDuration = pkg.days >= 5 && pkg.days <= 6;
        else if (selectedDuration === "long") matchesDuration = pkg.days >= 7;

        // Search Query
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          q === "" ||
          pkg.title.toLowerCase().includes(q) ||
          pkg.subtitle.toLowerCase().includes(q) ||
          pkg.category.toLowerCase().includes(q) ||
          pkg.itinerary.some(
            (day) =>
              day.title.toLowerCase().includes(q) ||
              day.route.toLowerCase().includes(q) ||
              day.description.toLowerCase().includes(q)
          );

        return matchesCategory && matchesDuration && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") {
          const priceA = parseInt(a.priceFrom.replace(/[^0-9]/g, ""), 10) || 0;
          const priceB = parseInt(b.priceFrom.replace(/[^0-9]/g, ""), 10) || 0;
          return priceA - priceB;
        }
        if (sortBy === "price-desc") {
          const priceA = parseInt(a.priceFrom.replace(/[^0-9]/g, ""), 10) || 0;
          const priceB = parseInt(b.priceFrom.replace(/[^0-9]/g, ""), 10) || 0;
          return priceB - priceA;
        }
        if (sortBy === "duration-asc") {
          return a.days - b.days;
        }
        if (sortBy === "duration-desc") {
          return b.days - a.days;
        }
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [selectedCategory, selectedDuration, searchQuery, sortBy]);

  // Reset pagination count when any filter changes
  useEffect(() => {
    setVisibleCount(6);
  }, [selectedCategory, selectedDuration, searchQuery, sortBy]);

  const visiblePackages = filteredPackages.slice(0, visibleCount);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Trust strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-soft mb-8">
        <div className="flex items-center space-x-3 p-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Tangmarg Local Base</div>
            <div className="text-[11px] text-slate-500">Direct Gulmarg gate roots</div>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Verified 3-Star &amp; 4-Star Stays</div>
            <div className="text-[11px] text-slate-500">Inspected room standards</div>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Direct Operator Rates</div>
            <div className="text-[11px] text-slate-500">Custom tailored quotes for your group</div>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">100% Tailored Plans</div>
            <div className="text-[11px] text-slate-500">Custom dates & routes</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-soft mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by destination (e.g., Gurez, Gulmarg, Ladakh)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
            />
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center space-x-2 w-full md:w-auto justify-end">
            <SlidersHorizontal className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span className="text-xs text-slate-500 whitespace-nowrap">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="py-2 px-3 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 cursor-pointer"
            >
              <option value="popular">Recommended / Featured</option>
              <option value="duration-asc">Duration: Short to Long</option>
              <option value="duration-desc">Duration: Long to Short</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-pine-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Duration Pills */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 flex-wrap">
          <span className="text-xs text-slate-400 font-medium mr-1">Duration:</span>
          {durationFilters.map((dur) => (
            <button
              key={dur.value}
              onClick={() => setSelectedDuration(dur.value)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedDuration === dur.value
                  ? "bg-emerald-100 text-emerald-800 font-semibold border border-emerald-300"
                  : "bg-white text-slate-500 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {dur.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-slate-500 font-medium">
            Showing <strong className="text-pine-900">{visiblePackages.length}</strong> of <strong className="text-pine-900">{filteredPackages.length}</strong> packages
          </span>
        </div>
      </div>

      {/* Package Grid */}
      {filteredPackages.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
          <p className="text-slate-500 text-sm mb-4">No packages matched your search criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSelectedDuration("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-xl bg-pine-900 text-white text-xs font-semibold hover:bg-pine-800 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visiblePackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onOpenDetails={(p) => setActiveModalPackage(p)}
              />
            ))}
          </div>

          {/* Progressive Pagination Controls */}
          {filteredPackages.length > 6 && (
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              {visibleCount < filteredPackages.length && (
                <button
                  onClick={() => setVisibleCount((prev) => Math.min(prev + 3, filteredPackages.length))}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-2xl bg-pine-900 hover:bg-pine-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <span>View More Packages (+{Math.min(3, filteredPackages.length - visibleCount)} More)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              )}

              {visibleCount > 6 && (
                <button
                  onClick={() => setVisibleCount(6)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-all"
                >
                  <span>Show Fewer</span>
                  <ChevronUp className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </>
      )}

      {/* Custom Quote Banner */}
      <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#08281d] to-[#041a12] text-white p-8 md:p-12 relative overflow-hidden shadow-xl border border-emerald-900">
        <div className="relative z-10 max-w-2xl">
          <span className="text-emerald-300 text-xs uppercase font-bold tracking-wider mb-2 block">
            Don't see your ideal itinerary?
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
            Build Your Own Custom Kashmir or Ladakh Trip
          </h3>
          <p className="text-emerald-100/80 text-xs sm:text-sm mb-6 leading-relaxed">
            Choose your preferred destinations, number of days, hotel category (3-Star Deluxe, 4-Star Luxury, Houseboat), vehicle type, and calculate real-time estimated rates.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/custom-planner"
              className="inline-flex items-center px-5 py-3 rounded-xl bg-[#38804e] hover:bg-[#2b693f] text-white text-xs sm:text-sm font-bold shadow-lg transition-all"
            >
              <Calculator className="w-4 h-4 mr-2" />
              <span>Launch Trip Planner & Estimator</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Itinerary Quick Modal if triggered */}
      <ItineraryModal
        pkg={activeModalPackage}
        isOpen={!!activeModalPackage}
        onClose={() => setActiveModalPackage(null)}
      />
    </div>
  );
}

