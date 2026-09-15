"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { destinations, Destination } from "@/data/destinations";
import { 
  MapPin, 
  Mountain, 
  Calendar, 
  Compass, 
  ArrowRight, 
  Search,
  CheckCircle2
} from "lucide-react";

export default function DestinationCatalogClient() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const regions = [
    "All",
    "Kashmir Valley",
    "Offbeat Frontiers",
    "Ladakh & Kargil",
    "Jammu & Kishtwar",
  ];

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchesRegion = selectedRegion === "All" || dest.region === selectedRegion;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        dest.name.toLowerCase().includes(q) ||
        dest.tagline.toLowerCase().includes(q) ||
        dest.description.toLowerCase().includes(q) ||
        dest.highlights.some((h) => h.toLowerCase().includes(q));

      return matchesRegion && matchesSearch;
    });
  }, [selectedRegion, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Controls & Search */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-soft mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search destinations (e.g. Gulmarg, Gurez, Pangong)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 no-scrollbar">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedRegion === reg
                    ? "bg-pine-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredDestinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col group hover:-translate-y-1"
          >
            {/* Image banner */}
            <Link href={`/destinations/${dest.id}`} className="relative h-56 w-full overflow-hidden block">
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-sm">
                {dest.region}
              </div>

              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="text-xl font-extrabold drop-shadow">{dest.name}</h3>
              </div>
            </Link>

            {/* Content */}
            <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
              <div>
                <p className="text-xs font-semibold text-pine-800 mb-2">
                  {dest.tagline}
                </p>
                <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                  {dest.description}
                </p>

                {/* Altitude & Best time */}
                <div className="space-y-1.5 py-2.5 px-3 bg-slate-50 rounded-xl text-xs border border-slate-100 mb-3">
                  <div className="flex items-center text-slate-700">
                    <Mountain className="w-3.5 h-3.5 mr-1.5 text-pine-700 flex-shrink-0" />
                    <span className="truncate"><strong>Altitude:</strong> {dest.altitude}</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-amber-600 flex-shrink-0" />
                    <span className="truncate"><strong>Best Time:</strong> {dest.bestTimeToVisit}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Key Highlights
                  </span>
                  {dest.highlights.slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-center text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-600 flex-shrink-0" />
                      <span className="line-clamp-1">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/destinations/${dest.id}`}
                  className="w-full py-2.5 px-3 rounded-xl bg-pine-900 hover:bg-pine-800 text-amber-300 font-semibold text-xs transition-colors text-center flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <span>Explore {dest.name} Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
