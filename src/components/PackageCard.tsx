"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TourPackage } from "@/data/packages";
import { buildPackageWhatsAppUrl } from "@/data/whatsapp";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { 
  Clock, 
  MapPin, 
  Hotel, 
  Utensils, 
  Car, 
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
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 h-full">
      {/* ─── Image & Badges ──────────────────────────────── */}
      <Link href={`/packages/${pkg.id}`} className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 block cursor-pointer flex-shrink-0">
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
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#38804b] text-white shadow-md">
            {pkg.tag}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 text-white border border-white/20 backdrop-blur-md flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#38804b]" />
            <span>{pkg.duration}</span>
          </span>
        </div>

        {/* Main Destination Tag on Image Bottom */}
        <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold flex items-center gap-1.5 drop-shadow z-10">
          <MapPin className="w-3.5 h-3.5 text-[#38804b] flex-shrink-0" />
          <span className="truncate">{pkg.subtitle || `${pkg.startingPoint} → ${pkg.endingPoint}`}</span>
        </div>
      </Link>

      {/* ─── Card Body ───────────────────────────────────── */}
      <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-3.5">
        <div>
          {/* Category Eyebrow */}
          <div className="flex items-center justify-between text-[11px] font-bold text-[#38804b] uppercase tracking-wider mb-1">
            <span className="truncate">{pkg.category}</span>
            <span className="text-slate-400 font-normal lowercase flex-shrink-0">local team</span>
          </div>

          {/* Package Name - Fixed 2-Line Height (h-11) for Perfect Alignment */}
          <Link href={`/packages/${pkg.id}`} className="block">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#38804b] transition-colors line-clamp-2 h-11 leading-snug flex items-center" title={pkg.title}>
              {pkg.title}
            </h3>
          </Link>

          {/* 4 Clean Spec Badges (Destination, Hotel, Meal, Vehicle) */}
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            {/* Hotel Category */}
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2 h-[52px]">
              <Hotel className="w-3.5 h-3.5 text-[#38804b] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 block font-medium leading-none mb-0.5">Hotel Stay</span>
                <span className="font-semibold text-slate-800 text-[11px] line-clamp-1">{pkg.hotelCategory}</span>
              </div>
            </div>

            {/* Meal Plan */}
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2 h-[52px]">
              <Utensils className="w-3.5 h-3.5 text-[#38804b] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 block font-medium leading-none mb-0.5">Meal Plan</span>
                <span className="font-semibold text-slate-800 text-[11px] line-clamp-1">MAP (Breakfast &amp; Dinner)</span>
              </div>
            </div>

            {/* Vehicle */}
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2 h-[52px]">
              <Car className="w-3.5 h-3.5 text-[#38804b] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 block font-medium leading-none mb-0.5">Vehicle</span>
                <span className="font-semibold text-slate-800 text-[11px] line-clamp-1">{vehicleText}</span>
              </div>
            </div>

            {/* Support / Region */}
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2 h-[52px]">
              <BadgeCheck className="w-3.5 h-3.5 text-[#38804b] flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 block font-medium leading-none mb-0.5">Trip Support</span>
                <span className="font-semibold text-slate-800 text-[11px] line-clamp-1">24/7 Assistance</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Pricing & Actions ────────────────────────────── */}
        <div className="pt-3 border-t border-slate-100">
          <div className="mb-3 px-3.5 py-2 rounded-xl bg-slate-50/90 border border-slate-100">
            <span className="text-[10px] text-slate-400 uppercase font-bold block tracking-wider">Pricing</span>
            <span className="text-xs font-bold text-slate-900">Custom Quote on Request</span>
          </div>

          {/* Action Buttons: View Plan & WhatsApp Quote */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/packages/${pkg.id}`}
              className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 font-bold text-xs transition-all text-center flex items-center justify-center gap-1.5 min-h-[40px]"
            >
              <span>View Plan</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-[#38804b] hover:bg-[#2b693f] active:bg-[#225433] text-white font-bold text-xs transition-all text-center flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md cursor-pointer min-h-[40px]"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Get Trip Quote</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
