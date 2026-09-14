"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { 
  Mountain,
  ArrowRight, 
  Calendar
} from "lucide-react";

export default function DestinationSection() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

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

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Destinations to explore
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-slate-500 max-w-2xl">
              Gulmarg meadows, Gurez frontier hamlets, Pangong blue, and everything between.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRegion(r)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedRegion === r
                    ? "bg-pine-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.id}`}
              className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 block"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
                <div className="flex items-center text-xs text-amber-300 font-medium">
                  <Mountain className="w-3.5 h-3.5 mr-1 text-amber-400" />
                  <span>{dest.altitude}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {dest.tagline}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-white/15 text-xs text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>View Travel Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all destinations button */}
        <div className="mt-10 text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center px-6 py-3 rounded-full bg-pine-900 hover:bg-pine-800 text-amber-300 font-bold text-xs sm:text-sm shadow-md transition-all space-x-2"
          >
            <span>Browse All Destination Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
