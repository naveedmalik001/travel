"use client";

import React from "react";
import { companyInfo } from "@/data/company";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { 
  ShieldCheck, 
  Car, 
  Hotel, 
  PhoneCall, 
  MapPin, 
  Flame, 
  CheckCircle2, 
  TrendingDown 
} from "lucide-react";

export default function WhyShopATrip() {
  const advantages = [
    {
      icon: TrendingDown,
      tag: "Direct Tangmarg HQ",
      title: "Zero Middleman Markup",
      desc: "Online aggregators resell local services with 20–30% markups. Booking directly with our Tangmarg desk ensures authentic local pricing on cabs, stays, and activities.",
      highlight: "Save 20-30% Direct",
    },
    {
      icon: Car,
      tag: "Mountain Fleet",
      title: "All-Weather Chained 4x4 Fleet",
      desc: "Our vehicles and native drivers are equipped with winter snow chains and mountain-pass permits for Gulmarg, Sonamarg, and Doodhpathri ascents.",
      highlight: "Snow-Ready & Insured",
    },
    {
      icon: Flame,
      tag: "Stay Standards",
      title: "Verified Heated Accommodations",
      desc: "Every partner hotel, houseboat, and alpine cottage is personally inspected for continuous central heating, electric blankets, and 24/7 hot water.",
      highlight: "Inspected Comfort",
    },
    {
      icon: ShieldCheck,
      tag: "Ground Desk",
      title: "24/7 On-Ground Field Assistance",
      desc: "Direct local coordination for Gulmarg Gondola slots, pony union fair rates, winter boot rentals, and immediate roadside or health support.",
      highlight: "Dedicated Local Host",
    },
  ];

  return (
    <section id="why-us" className="py-9 sm:py-12 bg-[#f8faf8] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Operational Credentials */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-7">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#38804b]/10 text-[#38804b] text-[10px] font-bold tracking-widest uppercase mb-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>THE TANGMARG FIELD ADVANTAGE</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Travelers Choose <span className="text-[#38804b]">Shop A Trip</span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
              Operated directly at the gateway of Gulmarg by native Himalayan trip leaders — never outsourced to distant call centers.
            </p>
          </div>

          {/* Key Metric Chips */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs text-center">
              <span className="block text-sm font-bold text-[#38804b]">6+ Yrs</span>
              <span className="block text-[9px] text-slate-500 uppercase">Himalayan Ops</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs text-center">
              <span className="block text-sm font-bold text-[#38804b]">200+</span>
              <span className="block text-[9px] text-slate-500 uppercase">Hosted Guests</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs text-center">
              <span className="block text-sm font-bold text-[#38804b]">100%</span>
              <span className="block text-[9px] text-slate-500 uppercase">Local Drivers</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs text-center">
              <span className="block text-sm font-bold text-[#38804b]">4.9★</span>
              <span className="block text-[9px] text-slate-500 uppercase">TripAdvisor</span>
            </div>
          </div>
        </div>

        {/* 4 Advantage Pillars (2x2 on tablet/desktop, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 border border-slate-200 hover:border-[#38804b]/50 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#38804b]/10 text-[#38804b] flex items-center justify-center group-hover:bg-[#38804b] group-hover:text-white transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#38804b] bg-[#38804b]/10 px-2 py-0.5 rounded">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#38804b] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-[#38804b] font-medium">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>Tangmarg Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Strip */}
        <div className="mt-5 p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm font-bold text-slate-900">
              Need honest advice on current snow conditions or road status?
            </p>
            <p className="text-[11px] text-slate-500">
              Speak directly with our Tangmarg desk before locking any dates.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hi Shop A Trip, I want to talk to your Tangmarg local team about planning my Kashmir trip.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-[#38804b] hover:bg-[#2c693e] text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp Desk</span>
            </a>
            <a
              href={`tel:${companyInfo.phones[0]}`}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-colors border border-slate-200"
            >
              <PhoneCall className="w-3 h-3 text-[#38804b]" />
              <span>{companyInfo.phones[0]}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
