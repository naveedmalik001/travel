"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/data/company";
import { 
  Compass, 
  Hotel, 
  Car, 
  ShieldCheck, 
  PhoneCall, 
  MapPin,
  Check,
  ArrowUpRight
} from "lucide-react";

export default function WhyShopATrip() {
  return (
    <section id="why-us" className="py-14 sm:py-20 bg-[#071710] text-white relative overflow-hidden border-b border-white/[0.08]">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#38804e]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>THE TANGMARG ADVANTAGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Why Travel with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200">Shop A Trip</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-300/85 leading-relaxed max-w-xl font-normal">
              Experience Jammu, Kashmir, and Ladakh with total peace of mind. Headquartered directly at the gateway of Gulmarg with dedicated local ground coordination.
            </p>
          </div>

          {/* Trust Metric Badges */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <div className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <span className="block text-lg sm:text-xl font-extrabold font-mono text-emerald-400">6+</span>
              <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Years On Ground</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <span className="block text-lg sm:text-xl font-extrabold font-mono text-emerald-400">200+</span>
              <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Guests Hosted</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <span className="block text-lg sm:text-xl font-extrabold font-mono text-emerald-400">100%</span>
              <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Local Fleet</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Card 1: Featured Base Operations Bento (Spans 2 cols on Large) */}
          <div className="lg:col-span-2 relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0c2419] to-[#081811] border border-emerald-500/30 overflow-hidden flex flex-col justify-between group shadow-xl">
            {/* Background subtle mountain image */}
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
              <Image
                src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80"
                alt="Tangmarg Gulmarg Gateway"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#071911] via-[#071911]/90 to-transparent z-0" />

            {/* Top metadata */}
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38804e]/30 border border-[#38804e]/50 text-emerald-300 text-[11px] font-semibold">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  Tangmarg Operations Base (Kunzer)
                </span>
                <span className="text-[11px] font-mono text-emerald-400/80 font-bold uppercase tracking-wider">
                  Direct Coordination
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white max-w-lg leading-snug">
                Direct Ground Operations Right at the Gateway of Gulmarg
              </h3>
              
              <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed font-normal">
                Unlike distant online booking portals, our team is physically on the ground in Tangmarg. We manage your private mountain vehicles, Gondola slot bookings, and hotel check-ins firsthand.
              </p>
            </div>

            {/* Bottom 3 Verified Checklist Items */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-emerald-200">
                <span className="w-4 h-4 rounded-full bg-[#38804e]/40 border border-[#38804e] flex items-center justify-center text-emerald-300 flex-shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span>Zero Middlemen</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-200">
                <span className="w-4 h-4 rounded-full bg-[#38804e]/40 border border-[#38804e] flex items-center justify-center text-emerald-300 flex-shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span>Snow Chain Ready Cabs</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-200">
                <span className="w-4 h-4 rounded-full bg-[#38804e]/40 border border-[#38804e] flex items-center justify-center text-emerald-300 flex-shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span>Real-Time Weather Updates</span>
              </div>
            </div>
          </div>

          {/* Card 2: 100% Personalized Itineraries */}
          <div className="rounded-3xl p-6 sm:p-7 bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-[#38804e] group-hover:text-white transition-all duration-300">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
                  100% Tailored
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                Personalized Itineraries
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300/80 leading-relaxed font-normal">
                Every holiday is tailored around your travel dates, pace, and interests — from romantic honeymoon retreats to adventurous high-pass explorations.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
              <span>Custom Route Planning</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 3: Verified Accommodations */}
          <div className="rounded-3xl p-6 sm:p-7 bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-[#38804e] group-hover:text-white transition-all duration-300">
                  <Hotel className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
                  Inspected Stays
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                Verified Stays &amp; Houseboats
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300/80 leading-relaxed font-normal">
                Handpicked boutique hotels, wooden chalets, and heritage Dal Lake houseboats personally inspected for central heating, cleanliness, and views.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
              <span>Heated Rooms Guaranteed</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 4: Dedicated Mountain Fleet & Drivers */}
          <div className="rounded-3xl p-6 sm:p-7 bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-[#38804e] group-hover:text-white transition-all duration-300">
                  <Car className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
                  Private Fleet
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                Dedicated Mountain Drivers
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300/80 leading-relaxed font-normal">
                Private sanitized vehicles and courteous native drivers experienced with winter snow chains, mountain passes, and hidden scenic viewpoints.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
              <span>Experienced Chauffeurs</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 5: 24/7 Guest Concierge Support */}
          <div className="rounded-3xl p-6 sm:p-7 bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-[#38804e] group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
                  24/7 Active
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                24/7 Direct Guest Concierge
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300/80 leading-relaxed font-normal">
                Continuous on-ground support before and during your trip for live snow updates, pass permissions, Gondola timing, and urgent assistance.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
              <span>Peace &amp; You Guarantee</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

        </div>

        {/* Compact Direct Action Strip */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">
              Ready to plan your Kashmir holiday with local specialists?
            </h4>
            <p className="text-xs text-slate-300/80 mt-0.5 font-normal">
              Direct consultation from our Tangmarg office with upfront transparent quotes.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hi Shop A Trip, I would like to plan my Kashmir trip with your local team.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#38804e] hover:bg-[#2b693f] active:bg-[#225433] text-white font-bold text-xs transition-all shadow-md"
            >
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${companyInfo.phones[0]}`}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/10 transition-all flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>{companyInfo.phones[0]}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
