"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TourPackage } from "@/data/packages";
import { buildPackageWhatsAppUrl } from "@/data/whatsapp";
import { 
  Clock, 
  MapPin, 
  Hotel, 
  Utensils, 
  Car, 
  MessageSquare, 
  ArrowRight, 
  BadgeCheck
} from "lucide-react";

interface PackageCardProps {
  pkg: TourPackage;
  onOpenDetails?: (pkg: TourPackage) => void;
}

export default function PackageCard({ pkg, onOpenDetails }: PackageCardProps) {
  const whatsappUrl = buildPackageWhatsAppUrl(pkg);

  // Derive clean vehicle label
  const vehicleText = pkg.division === "Ladakh" || pkg.category === "Offbeat Frontiers"
    ? "Private 4x4 / SUV"
    : "Dedicated Private Cab";

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* ─── Image & Badges ──────────────────────────────── */}
      <Link href={`/packages/${pkg.id}`} className="relative h-56 w-full overflow-hidden bg-slate-950 block cursor-pointer">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#38804e] text-white shadow-md">
            {pkg.tag}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 text-white border border-white/20 backdrop-blur-md flex items-center gap-1">
            <Clock className="w-3 h-3 text-emerald-300" />
            <span>{pkg.duration}</span>
          </span>
        </div>

        {/* Main Destination Tag on Image Bottom */}
        <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold flex items-center gap-1.5 drop-shadow z-10 line-clamp-1">
          <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span className="line-clamp-1">{pkg.subtitle || `${pkg.startingPoint} → ${pkg.endingPoint}`}</span>
        </div>
      </Link>

      {/* ─── Card Body ───────────────────────────────────── */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div>
          {/* Category Eyebrow */}
          <div className="flex items-center justify-between text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-1.5">
            <span>{pkg.category}</span>
            <span className="text-slate-400 font-normal lowercase">curated by local team</span>
          </div>

          {/* Package Name */}
          <Link href={`/packages/${pkg.id}`} className="block">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#38804e] transition-colors line-clamp-1 leading-snug">
              {pkg.title}
            </h3>
          </Link>

          {/* 4 Clean Spec Badges (Destination, Hotel, Meal, Vehicle) */}
          <div className="mt-3.5 grid grid-cols-2 gap-2 text-xs">
            {/* Hotel Category */}
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
              <Hotel className="w-3.5 h-3.5 text-[#38804e] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 block font-medium">Hotel Stay</span>
                <span className="font-semibold text-slate-800 text-[11px] line-clamp-1">{pkg.hotelCategory}</span>
              </div>
            </div>

            {/* Meal Plan */}
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
              <Utensils className="w-3.5 h-3.5 text-[#38804e] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 block font-medium">Meal Plan</span>
                <span className="font-semibold text-slate-800 text-[11px] line-clamp-1">MAP (Breakfast &amp; Dinner)</span>
              </div>
            </div>

            {/* Vehicle */}
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
              <Car className="w-3.5 h-3.5 text-[#38804e] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 block font-medium">Vehicle</span>
                <span className="font-semibold text-slate-800 text-[11px] line-clamp-1">{vehicleText}</span>
              </div>
            </div>

            {/* Support / Region */}
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
              <BadgeCheck className="w-3.5 h-3.5 text-[#38804e] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 block font-medium">Trip Support</span>
                <span className="font-semibold text-slate-800 text-[11px] line-clamp-1">24x7 Local Team</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Pricing & Actions ────────────────────────────── */}
        <div className="pt-3.5 border-t border-slate-100">
          <div className="flex items-center justify-between mb-3.5 px-3 py-2 rounded-xl bg-slate-50/90 border border-slate-100">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block tracking-wider">Pricing</span>
              <span className="text-xs font-bold text-slate-900">Custom Quote on Request</span>
            </div>
            <span className="text-[10px] text-[#38804e] font-bold bg-[#38804e]/10 px-2.5 py-1 rounded-full border border-[#38804e]/20">
              Direct Local Rates
            </span>
          </div>

          {/* Action Buttons: View Plan & WhatsApp Quote */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/packages/${pkg.id}`}
              className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 font-bold text-xs transition-all text-center flex items-center justify-center gap-1.5"
            >
              <span>View Plan</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-[#38804e] hover:bg-[#2b693f] active:bg-[#225433] text-white font-bold text-xs transition-all text-center flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Get Trip Quote</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
