"use client";

import React from "react";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { 
  Compass, 
  SlidersHorizontal, 
  Hotel, 
  Car, 
  Headphones, 
  Users, 
  ShieldCheck, 
  PhoneCall, 
  CheckCircle2,
  MapPin
} from "lucide-react";

export default function WhyShopATrip() {
  const pillars = [
    {
      icon: Compass,
      title: "Local Expertise",
      desc: "Kashmir-based team with on-ground destination knowledge and firsthand experience across every valley and high-altitude pass.",
      badge: "Kashmir Based"
    },
    {
      icon: SlidersHorizontal,
      title: "Personalized Itineraries",
      desc: "Trip designed around your dates, interest and budget — whether you want romantic serenity, family leisure, or thrilling adventure.",
      badge: "100% Tailored"
    },
    {
      icon: Hotel,
      title: "Verified Accommodation",
      desc: "Carefully selected hotels, houseboats and stays personally inspected for central heating, hot water, hygiene, and prime scenic views.",
      badge: "Inspected Stays"
    },
    {
      icon: Car,
      title: "Reliable Transport",
      desc: "Private vehicles and experienced local drivers who know mountain roads, winter snow chains, and secret scenic photo viewpoints.",
      badge: "Dedicated Cab"
    },
    {
      icon: Headphones,
      title: "24/7 Guest Support",
      desc: "Assistance before and during your trip for live weather advisories, Gondola slot timings, and smooth on-ground coordination.",
      badge: "24x7 Active"
    },
    {
      icon: Users,
      title: "Direct Local Support",
      desc: "A local team instead of a generic call center. Talk directly to the specialists managing your actual hotel and driver arrangements.",
      badge: "Zero Middlemen"
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#071410] text-white relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#38804e]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#38804e]/20 text-emerald-300 border border-[#38804e]/40 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#38804e]" />
            <span>Why Travel With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Why Travel with <span className="text-[#38804e]">Shop A Trip</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Experience the Himalayas with peace of mind. Our local team is physically present to guarantee authentic hospitality, verified stays, and complete safety.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#38804e]/60 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0e2c1c] border border-[#38804e]/40 flex items-center justify-center text-[#38804e] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-emerald-300" />
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-300/80 bg-[#38804e]/20 px-2.5 py-1 rounded-full border border-[#38804e]/30">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mt-2.5">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38804e] flex-shrink-0" />
                  <span>Curated by local team</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0a2316] via-[#0E291F] to-[#0a2316] border border-[#38804e]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Ready to plan your bespoke Kashmir or Ladakh holiday?
            </h4>
            <p className="text-xs sm:text-sm text-emerald-200/80 mt-1">
              Connect directly with our local trip coordinator for custom itineraries and pricing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hi ShopATrip, I am planning a trip to Kashmir. Please help me with itinerary.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#38804e] hover:bg-[#2b693f] text-white font-bold text-xs sm:text-sm shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${companyInfo.phones[0]}`}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-300" />
              <span>Call: {companyInfo.phones[0]}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
