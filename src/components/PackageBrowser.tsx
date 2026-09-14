"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { tourPackages, TourPackage } from "@/data/packages";
import PackageCard from "./PackageCard";
import ItineraryModal from "./ItineraryModal";
import { 
  Filter, 
  Search, 
  Layers, 
  Calendar,
  Flame,
  Heart,
  Mountain,
  Sun,
  MapPin,
  ChevronDown,
  ChevronUp,
  Landmark,
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

  // Initial display: 3 packages (1 row on desktop) or 6 if expanded or mobile
  const visiblePackages = showAll ? filteredPackages : filteredPackages.slice(0, 3);

  return (
    <section id="packages" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Browse tour packages
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500 leading-relaxed">
            Kashmir, Jammu &amp; Ladakh — filter by region, theme, or length.
          </p>
        </div>

        {/* Primary Division-Wise Selector Bar */}
        <div className="max-w-3xl mx-auto mb-8">
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
                  className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center gap-0.5 ${
                    isSelected
                      ? "bg-pine-900 text-amber-300 shadow-md scale-[1.02]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span>{div.label}</span>
                  <span className={`text-[10px] font-normal px-2 py-0.2 rounded-full ${
                    isSelected ? "bg-amber-400/20 text-amber-200" : "bg-slate-100 text-slate-500"
                  }`}>
                    {div.count} Packages
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Filter Controls (Theme Tags, Duration & Search) */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200 mb-8 space-y-4">
          
          {/* Theme Categories Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-500 mr-1">Theme</span>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-emerald-800 text-white shadow-sm"
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
                    className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                      durationFilter === d.id
                        ? "bg-pine-900 text-amber-300"
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
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-pine-800"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-500 font-medium">
          <span>
            Showing <strong>{visiblePackages.length}</strong> of <strong>{filteredPackages.length}</strong> {selectedDivision !== "All" ? `${selectedDivision} Division` : ""} itineraries
          </span>
          <span>MAP Stays + Private Dedicated Cab Included</span>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visiblePackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  onOpenDetails={(p) => setActiveModalPackage(p)}
                />
              ))}
            </div>

            {/* View More / Show Less Button & Full Catalog Link */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              {filteredPackages.length > 3 && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-all"
                >
                  <span>
                    {showAll 
                      ? "Show Fewer" 
                      : `Show More (${filteredPackages.length - 3} More)`}
                  </span>
                  {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              )}

              <Link
                href="/packages"
                className="inline-flex items-center space-x-2 px-7 py-3 rounded-2xl bg-pine-900 hover:bg-pine-800 text-amber-300 font-bold text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5"
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
              className="mt-4 px-4 py-2 bg-pine-900 text-amber-300 text-xs font-semibold rounded-xl"
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
