"use client";

import React, { useState } from "react";
import { companyInfo } from "@/data/company";
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
  Clock
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
    <section id="custom-planner" className="py-16 sm:py-20 bg-slate-50/80 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#38804e]/10 text-[#38804e] text-xs font-semibold mb-3 border border-[#38804e]/20">
            <Compass className="w-3.5 h-3.5 text-[#38804e]" />
            <span>Tailor Your Package</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Customize Your Dream Holiday
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            Tell us your travel preferences and our local team will curate a personalized itinerary with instant direct pricing.
          </p>
        </div>

        {/* Streamlined Card Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
          <div className="bg-gradient-to-r from-[#071410] via-[#0E291F] to-[#071410] px-6 py-4 sm:px-8 sm:py-5 text-white flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base sm:text-lg">Fast 1-Minute Trip Planner</h3>
              <p className="text-xs text-emerald-200/90">Curated by local team • 100% Free Custom Quote</p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs bg-[#38804e]/30 text-emerald-300 border border-[#38804e]/50 px-3 py-1 rounded-full font-medium">
              <Clock className="w-3.5 h-3.5" />
              Quick WhatsApp Quote
            </span>
          </div>

          <form onSubmit={handleCreateTrip} className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              
              {/* 1. Travel Date */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#38804e]" />
                  <span>1. Travel Date / Month</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 20th Oct, next month, or winter season"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804e] focus:bg-white transition-all"
                  required
                />
              </div>

              {/* 2. Number of Travelers */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#38804e]" />
                  <span>2. Number of Travelers</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["1 Solo", "2 (Couple)", "3-4 Family", "5+ Group"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setTravelers(opt)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all text-center ${
                        travelers === opt
                          ? "bg-[#38804e] text-white border-[#38804e] shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Preferred Destination */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#38804e]" />
                  <span>3. Preferred Destination</span>
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38804e] focus:bg-white transition-all"
                >
                  <option value="Kashmir Classic (Srinagar, Gulmarg, Pahalgam)">Kashmir Classic (Srinagar, Gulmarg, Pahalgam)</option>
                  <option value="Gulmarg Snow & Gondola Special">Gulmarg Snow & Gondola Special</option>
                  <option value="Pahalgam & Betaab Valley Retreat">Pahalgam & Betaab Valley Retreat</option>
                  <option value="Offbeat Kashmir (Gurez, Keran & Bangus)">Offbeat Kashmir (Gurez, Keran & Bangus)</option>
                  <option value="Leh-Ladakh Overland Expedition">Leh-Ladakh Overland Expedition</option>
                  <option value="Vaishno Devi Pilgrimage & Patnitop">Vaishno Devi Pilgrimage & Patnitop</option>
                  <option value="Grand J&K and Ladakh Explorer">Grand J&K and Ladakh Explorer</option>
                </select>
              </div>

              {/* 4. Hotel Category */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Hotel className="w-3.5 h-3.5 text-[#38804e]" />
                  <span>4. Hotel Category</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "3-Star Deluxe", value: "3-Star Deluxe Stays" },
                    { label: "4-Star Luxury", value: "4-Star Luxury Resorts" },
                    { label: "5-Star Chalet", value: "5-Star & Premium Chalets" }
                  ].map((tier) => (
                    <button
                      key={tier.value}
                      type="button"
                      onClick={() => setHotelCategory(tier.value)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all text-center ${
                        hotelCategory === tier.value
                          ? "bg-[#38804e] text-white border-[#38804e] shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Approximate Budget */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Wallet className="w-3.5 h-3.5 text-[#38804e]" />
                  <span>5. Approximate Budget (Per Person)</span>
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38804e] focus:bg-white transition-all"
                >
                  <option value="₹10,000 - ₹15,000 / person (Budget)">₹10,000 - ₹15,000 / person (Budget)</option>
                  <option value="₹15,000 - ₹25,000 / person (Standard / Popular)">₹15,000 - ₹25,000 / person (Standard / Popular)</option>
                  <option value="₹25,000 - ₹40,000 / person (Premium / 4-Star)">₹25,000 - ₹40,000 / person (Premium / 4-Star)</option>
                  <option value="₹40,000+ / person (Luxury Experience)">₹40,000+ / person (Luxury Experience)</option>
                </select>
              </div>

              {/* 6. Contact Details (WhatsApp Number) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#38804e]" />
                  <span>6. WhatsApp Number *</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Your Name (e.g. Rahul)"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804e] focus:bg-white"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp (e.g. 9876543210)"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804e] focus:bg-white"
                  />
                </div>
              </div>

            </div>

            {/* Submit CTA */}
            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500 text-center sm:text-left">
                <ShieldCheck className="w-4 h-4 text-[#38804e] flex-shrink-0" />
                <span>Zero hidden fee • Verified stays • 24x7 trip support</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#38804e] hover:bg-[#2b693f] active:bg-[#245434] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 fill-current" />
                <span>Create My Trip</span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
