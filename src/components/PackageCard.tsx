"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TourPackage } from "@/data/packages";
import { companyInfo } from "@/data/company";
import { buildPackageWhatsAppUrl } from "@/data/whatsapp";
import { 
  Clock, 
  MapPin, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  FileText,
  BadgeCheck
} from "lucide-react";

interface PackageCardProps {
  pkg: TourPackage;
  onOpenDetails?: (pkg: TourPackage) => void;
}

export default function PackageCard({ pkg, onOpenDetails }: PackageCardProps) {
  const whatsappUrl = buildPackageWhatsAppUrl(pkg);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Image & Header Tags */}
      <Link href={`/packages/${pkg.id}`} className="relative h-56 w-full overflow-hidden bg-slate-900 block cursor-pointer">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Tag */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500 text-pine-950 shadow-md">
            {pkg.tag}
          </span>
          {pkg.featured && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-sm flex items-center gap-1">
              <BadgeCheck className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>

        {/* Duration Badge Bottom Right */}
        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center z-10">
          <Clock className="w-3.5 h-3.5 mr-1 text-amber-400" />
          <span>{pkg.duration}</span>
        </div>

        {/* Start / End Route Bottom Left */}
        <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center drop-shadow z-10">
          <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-400" />
          <span>{pkg.startingPoint} → {pkg.endingPoint}</span>
        </div>
      </Link>

      {/* Body Content */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center space-x-2 text-xs text-pine-700 font-semibold uppercase tracking-wider mb-1">
            <span>{pkg.category}</span>
          </div>

          <Link href={`/packages/${pkg.id}`} className="block">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-pine-800 transition-colors line-clamp-1">
              {pkg.title}
            </h3>
          </Link>
          <p className="text-xs text-slate-500 line-clamp-2 mt-1">
            {pkg.subtitle}
          </p>

          {/* Quick Route Points */}
          <div className="mt-3 py-2 px-3 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-100 flex items-center justify-between">
            <span className="font-medium text-slate-600">Stay Type:</span>
            <span className="font-semibold text-pine-900 text-right line-clamp-1 max-w-[170px]">{pkg.hotelCategory}</span>
          </div>

          {/* Highlights checklist */}
          <div className="mt-3 space-y-1.5">
            {pkg.inclusions.slice(0, 3).map((inc, i) => (
              <div key={i} className="flex items-center text-xs text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-600 flex-shrink-0" />
                <span className="line-clamp-1">{inc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing and Action Buttons */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-end justify-between mb-3.5">
            <div>
              <span className="text-[11px] text-slate-400 block uppercase font-medium">Starting from</span>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-xl font-bold text-pine-950">{pkg.priceFrom}</span>
                {pkg.originalPrice && (
                  <span className="text-xs text-slate-400 line-through">{pkg.originalPrice}</span>
                )}
                <span className="text-[11px] text-slate-500">/ person</span>
              </div>
            </div>
            <span className="text-[11px] text-emerald-800 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              MAP Plan + Cab
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/packages/${pkg.id}`}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors text-center flex items-center justify-center space-x-1"
            >
              <span>Full Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs transition-all text-center flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Book Trip</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
