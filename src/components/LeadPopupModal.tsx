"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { 
  X, 
  Send, 
  Calendar, 
  Users, 
  MapPin, 
  Hotel, 
  Wallet, 
  Phone, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Compass 
} from "lucide-react";

export default function LeadPopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [destination, setDestination] = useState("Kashmir Classic (Srinagar, Gulmarg, Pahalgam)");
  const [hotelCategory, setHotelCategory] = useState("3-Star Deluxe");
  const [budget, setBudget] = useState("₹15k - ₹25k / person");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    // Show popup after 1.5s if not dismissed in this session
    const hasDismissed = sessionStorage.getItem("lead_popup_dismissed");
    if (!hasDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("lead_popup_dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Custom Trip Request — Shop A Trip Tour & Travels*
👤 *Name:* ${name.trim() || "Traveler"}
📱 *WhatsApp:* ${phone.trim() || "Not provided"}
📅 *Travel Date / Month:* ${travelDate || "Flexible"}
👥 *Travelers:* ${travelers} Persons
📍 *Preferred Destination:* ${destination}
🏨 *Hotel Category:* ${hotelCategory}
💰 *Approximate Budget:* ${budget}

Hello Shop A Trip! Please share a customized itinerary and quotation for my trip.`;

    const url = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row my-auto max-h-[92vh] md:max-h-[580px] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-slate-900/80 md:bg-slate-100 hover:bg-slate-900 text-white md:text-slate-700 md:hover:text-white flex items-center justify-center transition-all shadow-md"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── Left Visual / Trust Panel (Desktop only or banner on mobile) ── */}
        <div className="relative md:w-5/12 bg-gradient-to-br from-[#061811] via-[#0b2b1e] to-[#04110c] text-white p-6 flex flex-col justify-between overflow-hidden shrink-0">
          {/* Background image overlay */}
          <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80"
              alt="Kashmir Valley"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38804e]/30 text-emerald-300 border border-[#38804e]/50 text-[11px] font-bold mb-3">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>Free Custom Itinerary</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold leading-tight tracking-tight text-white">
              Plan Your Kashmir &amp; Ladakh Trip
            </h3>
            <p className="text-xs text-emerald-200/90 mt-1.5 leading-relaxed">
              Curated by local team • 100% transparent pricing with MAP meals &amp; private cab.
            </p>
          </div>

          {/* Key trust bullets */}
          <div className="relative z-10 my-4 space-y-2 text-xs text-slate-200 hidden md:block">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38804e] shrink-0" />
              <span>Zero hidden fee • Direct local rates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38804e] shrink-0" />
              <span>Verified 3-Star, 4-Star &amp; Houseboats</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38804e] shrink-0" />
              <span>Gulmarg Gondola &amp; permit assistance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38804e] shrink-0" />
              <span>24x7 on-ground trip support</span>
            </div>
          </div>

          {/* Rating Badge */}
          <div className="relative z-10 pt-3 border-t border-emerald-800/60 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38804e]" />
              <span className="font-bold text-white">4.9 / 5.0 Rating</span>
            </div>
            <span className="text-emerald-300/80">10,000+ Happy Guests</span>
          </div>
        </div>

        {/* ── Right Compact Form ── */}
        <div className="md:w-7/12 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto bg-white">
          <form onSubmit={handleSubmit} className="space-y-3.5">
            
            {/* Header for mobile view */}
            <div className="md:hidden pr-8 mb-1">
              <h4 className="font-bold text-slate-900 text-sm">Tell Us Your Preferences</h4>
              <p className="text-[11px] text-slate-500">Get an instant quote on WhatsApp</p>
            </div>

            {/* Row 1: Travel Date & Number of Travelers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#38804e]" />
                  <span>Travel Date / Month *</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 15th Oct, Next month"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804e] focus:bg-white transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Users className="w-3 h-3 text-[#38804e]" />
                  <span>Travelers</span>
                </label>
                <div className="grid grid-cols-4 gap-1">
                  {["1", "2", "3-4", "5+"].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setTravelers(num)}
                      className={`py-1.5 text-xs font-bold rounded-lg border transition-all ${
                        travelers === num
                          ? "bg-[#38804e] text-white border-[#38804e] shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: Preferred Destination */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#38804e]" />
                <span>Preferred Destination</span>
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38804e] focus:bg-white transition-all"
              >
                <option value="Kashmir Classic (Srinagar, Gulmarg, Pahalgam)">Kashmir Classic (Srinagar, Gulmarg, Pahalgam)</option>
                <option value="Honeymoon Special (Houseboat + Candlelight)">Honeymoon Special (Houseboat + Candlelight)</option>
                <option value="Offbeat Kashmir (Gurez, Keran, Bangus)">Offbeat Kashmir (Gurez, Keran, Bangus)</option>
                <option value="Leh-Ladakh Overland Expedition">Leh-Ladakh Overland Expedition</option>
                <option value="Vaishno Devi Pilgrimage & Patnitop">Vaishno Devi Pilgrimage & Patnitop</option>
              </select>
            </div>

            {/* Row 3: Hotel Category */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Hotel className="w-3 h-3 text-[#38804e]" />
                <span>Hotel Category</span>
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { label: "3-Star Deluxe", value: "3-Star Deluxe" },
                  { label: "4-Star Luxury", value: "4-Star Luxury" },
                  { label: "5-Star / Chalets", value: "5-Star / Chalets" }
                ].map((tier) => (
                  <button
                    key={tier.value}
                    type="button"
                    onClick={() => setHotelCategory(tier.value)}
                    className={`py-1.5 px-1 text-[11px] font-bold rounded-lg border transition-all text-center ${
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

            {/* Row 4: Budget */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Wallet className="w-3 h-3 text-[#38804e]" />
                <span>Approximate Budget (Per Person)</span>
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38804e] focus:bg-white transition-all"
              >
                <option value="₹10k - ₹15k / person (Budget)">₹10,000 - ₹15,000 / person (Budget)</option>
                <option value="₹15k - ₹25k / person (Standard / Popular)">₹15,000 - ₹25,000 / person (Standard / Popular)</option>
                <option value="₹25k - ₹40k / person (Premium / 4-Star)">₹25,000 - ₹40,000 / person (Premium / 4-Star)</option>
                <option value="₹40k+ / person (Luxury Experience)">₹40,000+ / person (Luxury Experience)</option>
              </select>
            </div>

            {/* Row 5: Name & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804e] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#38804e]" />
                  <span>WhatsApp Number *</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804e] focus:bg-white"
                />
              </div>
            </div>

            {/* CTA Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#38804e] hover:bg-[#2b693f] active:bg-[#245434] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 fill-current" />
                <span>Create My Trip (Get WhatsApp Itinerary)</span>
              </button>
              
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 mt-1.5">
                <Clock className="w-3 h-3 text-[#38804e]" />
                <span>⚡ Fast 5-minute response from local travel desk</span>
              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
