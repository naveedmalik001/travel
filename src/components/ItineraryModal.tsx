"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TourPackage } from "@/data/packages";
import { companyInfo } from "@/data/company";
import { buildPackageWhatsAppUrl } from "@/data/whatsapp";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { 
  X, 
  Calendar, 
  MapPin, 
  Check, 
  XCircle, 
  PhoneCall, 
  Clock, 
  Hotel, 
  Car, 
  Utensils, 
  ShieldCheck,
  ChevronRight,
  Compass,
  FileText
} from "lucide-react";

interface ItineraryModalProps {
  pkg: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ItineraryModal({ pkg, isOpen, onClose }: ItineraryModalProps) {
  const [activeTab, setActiveTab] = useState<"itinerary" | "inclusions" | "hotels">("itinerary");

  if (!isOpen || !pkg) return null;

  const whatsappUrl = buildPackageWhatsAppUrl(pkg);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Image & Title */}
        <div className="relative h-56 sm:h-64 flex-shrink-0 bg-slate-900">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#38804b] text-white shadow-md">
              {pkg.tag}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-medium mb-1">
              <span className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1" />
                {pkg.duration}
              </span>
              <span>•</span>
              <span className="flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1" />
                {pkg.startingPoint} to {pkg.endingPoint}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{pkg.title}</h2>
            <p className="text-xs sm:text-sm text-slate-300 line-clamp-1">{pkg.subtitle}</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 py-1 flex-shrink-0">
          <button
            onClick={() => setActiveTab("itinerary")}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors flex items-center space-x-1.5 ${
              activeTab === "itinerary"
                ? "border-[#38804b] text-[#38804b] bg-white"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Day-by-Day Plan ({pkg.days} Days)</span>
          </button>
          <button
            onClick={() => setActiveTab("inclusions")}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors flex items-center space-x-1.5 ${
              activeTab === "inclusions"
                ? "border-[#38804b] text-[#38804b] bg-white"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <Check className="w-4 h-4 text-[#38804b]" />
            <span>Inclusions & Exclusions</span>
          </button>
          <button
            onClick={() => setActiveTab("hotels")}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors flex items-center space-x-1.5 ${
              activeTab === "hotels"
                ? "border-[#38804b] text-[#38804b] bg-white"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <Hotel className="w-4 h-4 text-[#38804b]" />
            <span>Hotels & Houseboats</span>
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto p-6 flex-grow space-y-6">
          {/* Overview banner */}
          <div className="bg-[#38804b]/5 border border-[#38804b]/20 rounded-xl p-4 text-slate-700 text-xs sm:text-sm leading-relaxed">
            <p className="font-semibold text-[#38804b] mb-1 flex items-center">
              <Compass className="w-4 h-4 text-[#38804b] mr-1.5" />
              Tour Overview & Highlights
            </p>
            <p>{pkg.overview}</p>
          </div>

          {/* Tab 1: Day-by-day Itinerary */}
          {activeTab === "itinerary" && (
            <div className="space-y-6">
              <h3 className="text-base font-bold text-slate-900 border-b pb-2">Complete Day-by-Day Schedule</h3>
              <div className="space-y-5">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="relative pl-7 border-l-2 border-[#38804b]/30">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#38804b] text-white font-bold text-xs flex items-center justify-center shadow">
                      {day.day}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <h4 className="text-sm font-bold text-slate-900">{day.title}</h4>
                        <span className="text-[11px] bg-slate-100 text-slate-600 font-medium px-2 py-0.5 rounded">
                          {day.meals}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#38804b] mb-2">Route: {day.route}</p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2.5">
                        {day.description}
                      </p>

                      {/* Highlights Pill Tags */}
                      {day.highlights && day.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {day.highlights.map((h, i) => (
                            <span key={i} className="text-[11px] bg-[#38804b]/10 text-[#38804b] px-2 py-0.5 rounded-md font-medium">
                              ✓ {h}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-2 text-xs text-slate-500 font-medium flex items-center">
                        <Hotel className="w-3.5 h-3.5 mr-1 text-slate-400" />
                        <span>Stay: {day.stayLocation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Inclusions & Exclusions */}
          {activeTab === "inclusions" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#38804b]/5 border border-[#38804b]/20 rounded-xl p-4">
                <h4 className="text-sm font-bold text-slate-900 flex items-center mb-3">
                  <Check className="w-4 h-4 mr-1.5 text-[#38804b]" />
                  What is Included in This Package
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {pkg.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#38804b] font-bold mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50/40 border border-red-200/80 rounded-xl p-4">
                <h4 className="text-sm font-bold text-red-950 flex items-center mb-3">
                  <XCircle className="w-4 h-4 mr-1.5 text-red-600" />
                  What is NOT Included (Exclusions)
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {pkg.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-500 font-bold mr-2">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 3: Hotel Details */}
          {activeTab === "hotels" && (
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Accommodation Category: {pkg.hotelCategory}</h4>
                <p className="text-xs text-slate-600">
                  We handpick well-reviewed, centrally-heated 3-Star & 4-Star properties with authentic Kashmiri hospitality, reliable hot water, and gourmet dining.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pkg.hotelDetails.map((h, i) => (
                  <div key={i} className="bg-white border border-slate-200 p-3.5 rounded-xl shadow-sm">
                    <div className="text-xs font-bold text-[#38804b] uppercase tracking-wider mb-1 flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      {h.location}
                    </div>
                    <p className="text-sm font-semibold text-slate-800">{h.hotel}</p>
                    <span className="text-[11px] text-[#38804b] font-medium">✓ Verified Partner Property</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sticky Footer Action Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex-shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="text-xs text-slate-500 block font-medium">Pricing &amp; Availability</span>
            <div className="flex items-center space-x-2">
              <span className="text-lg sm:text-xl font-bold text-slate-900">Custom Quote on Request</span>
            </div>
          </div>

          <div className="flex items-center space-x-2.5 w-full sm:w-auto">
            <a
              href={`tel:${companyInfo.phones[0]}`}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs transition-colors text-center"
            >
              Call {companyInfo.phones[0]}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-[#38804b] hover:bg-[#2b693f] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-1.5"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Get Quote on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
