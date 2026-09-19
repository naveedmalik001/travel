"use client";

import React, { useState } from "react";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { 
  Calendar, 
  Users, 
  MapPin, 
  Hotel, 
  Wallet, 
  Phone, 
  Send, 
  Compass, 
  ShieldCheck, 
  CheckCircle2,
  Clock,
  User,
  Sparkles
} from "lucide-react";

export default function CustomTripPlanner() {
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState("2 Travelers");
  const [destination, setDestination] = useState("Kashmir Classic (Srinagar, Gulmarg, Pahalgam)");
  const [hotelCategory, setHotelCategory] = useState("3-Star Deluxe Stays");
  const [budget, setBudget] = useState("₹15,000 - ₹25,000 / person");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const handleCreateTrip = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Custom Trip Request - Shop A Trip Tour & Travels*
Name: ${userName.trim() || "Traveler"}
WhatsApp: ${userPhone.trim() || "Not provided"}
Travel Date / Month: ${travelDate || "Flexible"}
Number of Travelers: ${travelers}
Preferred Destination: ${destination}
Hotel Category: ${hotelCategory}
Approximate Budget: ${budget}

Please share a customized day-by-day itinerary and quotation for my trip.`;

    const url = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="custom-planner" className="py-12 sm:py-16 bg-slate-50/80 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38804b]/10 text-[#38804b] text-xs font-semibold mb-2 border border-[#38804b]/20">
            <Compass className="w-3.5 h-3.5 text-[#38804b]" />
            <span>Tailor Your Package</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Customize Your Dream Holiday
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Tell us your travel preferences and our local team will curate a personalized itinerary with instant direct pricing.
          </p>
        </div>

        {/* Mobile Mascot Welcome Banner (< lg) */}
        <div className="lg:hidden mb-5 bg-white rounded-2xl p-3.5 border border-slate-200/90 shadow-xs flex items-center gap-3.5">
          <div className="w-16 h-20 relative flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mascot.png"
              alt="Shop A Trip Local Host"
              className="w-full h-full object-contain object-bottom drop-shadow-sm"
              loading="lazy"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#38804b]/10 text-[#38804b] text-[10px] font-bold uppercase tracking-wider mb-1">
              <span>Your Tangmarg Host</span>
            </div>
            <p className="text-xs font-bold text-slate-900 leading-tight">
              &ldquo;Plan with us directly &mdash; zero middleman commissions!&rdquo;
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
              Fill below for a custom WhatsApp quote in under 2 hours.
            </p>
          </div>
        </div>

        {/* Desktop 2-Column Grid: Form + Mascot Side Pillar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Form Card (8 Cols on Desktop) */}
          <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
            <div className="bg-[#38804b] px-5 py-4 sm:px-7 sm:py-4.5 text-white flex items-center justify-between shadow-xs">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-white">Fast 1-Minute Trip Planner</h3>
                <p className="text-[11px] text-emerald-100">Curated by local team • 100% Free Custom Quote</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] bg-[#071710] text-white border border-white/20 px-2.5 py-1 rounded-full font-medium shadow-xs">
                <Clock className="w-3 h-3 text-[#38804b]" />
                Quick Quote
              </span>
            </div>

            <form onSubmit={handleCreateTrip} className="p-5 sm:p-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                
                {/* 1. Travel Date */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#38804b]" />
                    <span>1. Travel Date / Month</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 20th Oct, next month, or winter"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804b] focus:bg-white transition-all"
                    required
                  />
                </div>

                {/* 2. Number of Travelers */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#38804b]" />
                    <span>2. Number of Travelers</span>
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38804b] focus:bg-white transition-all"
                  >
                    <option value="Solo Traveler">Solo Traveler</option>
                    <option value="2 Travelers (Couple)">2 Travelers (Couple)</option>
                    <option value="Family (3-5 Members)">Family (3-5 Members)</option>
                    <option value="Group (6-10 Members)">Group (6-10 Members)</option>
                    <option value="Large Group (10+ Members)">Large Group (10+ Members)</option>
                  </select>
                </div>

                {/* 3. Destination Route */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#38804b]" />
                    <span>3. Preferred Destination Route</span>
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38804b] focus:bg-white transition-all"
                  >
                    <option value="Kashmir Classic (Srinagar, Gulmarg, Pahalgam)">Kashmir Classic (Srinagar, Gulmarg, Pahalgam)</option>
                    <option value="Gulmarg Ski & Snow Adventure (Tangmarg Base)">Gulmarg Ski & Snow Adventure (Tangmarg Base)</option>
                    <option value="Grand Valley Circuit (Srinagar, Gulmarg, Pahalgam, Sonamarg)">Grand Valley Circuit (Srinagar, Gulmarg, Pahalgam, Sonamarg)</option>
                    <option value="Offbeat Kashmir (Doodhpathri, Yusmarg, Gurez, Keran)">Offbeat Kashmir (Doodhpathri, Yusmarg, Gurez, Keran)</option>
                    <option value="Kashmir & Ladakh Overland Expedition">Kashmir & Ladakh Overland Expedition</option>
                  </select>
                </div>

                {/* 4. Hotel Category */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Hotel className="w-3.5 h-3.5 text-[#38804b]" />
                    <span>4. Hotel Category Preference</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "Standard / Budget Stays", label: "Standard (Comfort)" },
                      { id: "3-Star Deluxe Stays", label: "3★ Deluxe (Heated)" },
                      { id: "4-Star & Luxury Resorts", label: "4★ Luxury / Cottages" },
                    ].map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setHotelCategory(tier.id)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all text-center leading-tight ${
                          hotelCategory === tier.id
                            ? "bg-[#38804b] text-white border-[#38804b] shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {tier.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Budget Range */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Wallet className="w-3.5 h-3.5 text-[#38804b]" />
                    <span>5. Estimated Budget Per Person</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "₹10,000 - ₹15,000 / person", label: "₹10k - ₹15k" },
                      { id: "₹15,000 - ₹25,000 / person", label: "₹15k - ₹25k" },
                      { id: "₹25,000+ / person (Luxury)", label: "₹25k+ Luxury" },
                    ].map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setBudget(tier.id)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all text-center leading-tight ${
                          budget === tier.id
                            ? "bg-[#38804b] text-white border-[#38804b] shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {tier.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 6. Your Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#38804b]" />
                    <span>6. Your Name *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name (e.g. Rahul Sharma)"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804b] focus:bg-white transition-all"
                  />
                </div>

                {/* 7. WhatsApp Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#38804b]" />
                    <span>7. WhatsApp Number *</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="WhatsApp Number (e.g. 9876543210)"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804b] focus:bg-white transition-all"
                  />
                </div>

              </div>

              {/* Submit CTA */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-500 text-center sm:text-left">
                  <ShieldCheck className="w-4 h-4 text-[#38804b] flex-shrink-0" />
                  <span>Zero hidden fee • Verified heated stays • 24x7 local support</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#38804b] hover:bg-[#2b693f] active:bg-[#245434] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Get WhatsApp Itinerary</span>
                </button>
              </div>
            </form>
          </div>

          {/* Desktop Mascot Companion Pillar (4 Cols on Desktop, hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-between h-full space-y-4">
            
            {/* Mascot Visual Card */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-lg flex flex-col items-center text-center relative overflow-hidden">
              {/* Background ambient badge */}
              <div className="w-full flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#38804b] bg-[#38804b]/10 px-2 py-0.5 rounded">
                  Tangmarg Ambassador
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">Shop A Trip</span>
              </div>

              {/* Mascot Image pointing at form */}
              <div className="w-56 h-72 relative my-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/mascot.png"
                  alt="Shop A Trip Brand Ambassador"
                  className="w-full h-full object-contain object-bottom drop-shadow-md transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Speech Note */}
              <div className="mt-2 w-full p-3 rounded-2xl bg-slate-50 border border-slate-100 text-left">
                <p className="text-xs font-bold text-slate-900 leading-snug">
                  &ldquo;I&apos;m your on-ground Tangmarg specialist.&rdquo;
                </p>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Book directly with us to save 20&ndash;30% vs online middlemen. We allocate your dedicated private cab &amp; heated stays in 2 hours.
                </p>
              </div>
            </div>

            {/* Direct Tangmarg Local Promises */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#38804b] shrink-0" />
                <span className="font-semibold">Tangmarg Base HQ Operations</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#38804b] shrink-0" />
                <span className="font-semibold">All-Weather Snow-Chain Fleet</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#38804b] shrink-0" />
                <span className="font-semibold">Guaranteed Heated Rooms</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
