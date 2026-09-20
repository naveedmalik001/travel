"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { 
  X, 
  Calendar, 
  Users, 
  MapPin, 
  Hotel, 
  Wallet, 
  Phone, 
  User,
  ArrowRight,
  ArrowLeft,
  CheckCircle2, 
  Compass,
  Sparkles
} from "lucide-react";

export default function LeadPopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [destination, setDestination] = useState("🏔️ Kashmir Classic (Srinagar • Gulmarg • Pahalgam)");
  const [hotelCategory, setHotelCategory] = useState("3-Star Deluxe");
  const [budget, setBudget] = useState("₹15,000 – ₹25,000 / person");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [phoneError, setPhoneError] = useState(false);

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

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  const handlePrevStep = () => {
    if (currentStep === 3) setCurrentStep(2);
    else if (currentStep === 2) setCurrentStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      setPhoneError(true);
      return;
    }

    const message = `*Custom Trip Request — Shop A Trip Tour & Travels*
👤 *Name:* ${name.trim() || "Traveler"}
📱 *WhatsApp:* ${phone.trim()}
📅 *Travel Date:* ${travelDate.trim() || "Flexible / Planning"}
👥 *Travellers:* ${travelers} Persons
📍 *Destination:* ${destination}
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
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row my-auto max-h-[92vh] md:max-h-[590px] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-slate-900/80 md:bg-slate-100 hover:bg-slate-900 text-white md:text-slate-700 md:hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── Left Visual / Trust Panel ── */}
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38804b]/30 text-white border border-[#38804b]/50 text-[11px] font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Free Custom Itinerary</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold leading-tight tracking-tight text-white">
              Plan Your Perfect Kashmir Trip
            </h3>
            <p className="text-xs text-slate-200 mt-2 leading-relaxed">
              Tell us a few details. Our Team will create a personalised itinerary for you.
            </p>
          </div>

          {/* Key trust bullets */}
          <div className="relative z-10 my-4 space-y-2.5 text-xs text-slate-200 hidden md:block">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38804b] shrink-0" />
              <span>Zero hidden fee • Direct local rates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38804b] shrink-0" />
              <span>Verified 3-Star, 4-Star &amp; Houseboats</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38804b] shrink-0" />
              <span>Gulmarg Gondola &amp; permit assistance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38804b] shrink-0" />
              <span>24x7 on-ground trip support</span>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="relative z-10 pt-3 border-t border-[#38804b]/30 hidden md:flex items-center gap-2 text-[11px] text-slate-300">
            <Compass className="w-3.5 h-3.5 text-[#38804b]" />
            <span>Tangmarg Head Office • Native Guides</span>
          </div>
        </div>

        {/* ── Right 3-Step Form ── */}
        <div className="md:w-7/12 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto bg-white">
          
          {/* Step Navigation Header */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold text-slate-500 pb-2.5 border-b border-slate-100">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className={`flex items-center gap-1 transition-colors ${
                  currentStep === 1 
                    ? "text-[#38804b] font-bold" 
                    : currentStep > 1 
                      ? "text-slate-800 hover:text-[#38804b] cursor-pointer" 
                      : "text-slate-400"
                }`}
              >
                <span className={`w-4.5 h-4.5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  currentStep === 1 
                    ? "bg-[#38804b] text-white" 
                    : currentStep > 1 
                      ? "bg-[#38804b]/15 text-[#38804b]" 
                      : "bg-slate-100 text-slate-500"
                }`}>
                  1
                </span>
                <span>Trip Details</span>
              </button>

              <span className="text-slate-300">—</span>

              <button
                type="button"
                onClick={() => currentStep > 2 && setCurrentStep(2)}
                className={`flex items-center gap-1 transition-colors ${
                  currentStep === 2 
                    ? "text-[#38804b] font-bold" 
                    : currentStep > 2 
                      ? "text-slate-800 hover:text-[#38804b] cursor-pointer" 
                      : "text-slate-400"
                }`}
              >
                <span className={`w-4.5 h-4.5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  currentStep === 2 
                    ? "bg-[#38804b] text-white" 
                    : currentStep > 2 
                      ? "bg-[#38804b]/15 text-[#38804b]" 
                      : "bg-slate-100 text-slate-500"
                }`}>
                  2
                </span>
                <span>Preferences</span>
              </button>

              <span className="text-slate-300">—</span>

              <div className={`flex items-center gap-1 ${
                currentStep === 3 ? "text-[#38804b] font-bold" : "text-slate-400"
              }`}>
                <span className={`w-4.5 h-4.5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  currentStep === 3 
                    ? "bg-[#38804b] text-white" 
                    : "bg-slate-100 text-slate-500"
                }`}>
                  3
                </span>
                <span>Get My Quote</span>
              </div>
            </div>
          </div>

          {/* ═══════════════ STEP 01 — TRIP DETAILS ═══════════════ */}
          {currentStep === 1 && (
            <form onSubmit={handleNextStep} className="space-y-4 flex-1 flex flex-col justify-between animate-in fade-in duration-200">
              <div className="space-y-3.5">
                
                {/* Field 1: Travel Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-0.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#38804b]" />
                    <span>Travel Date</span>
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    When are you planning to travel?
                  </p>
                  <input
                    type="text"
                    placeholder="e.g. 15th October, Next Month, Flexible"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804b] focus:bg-white transition-all"
                    required
                  />
                </div>

                {/* Field 2: Travellers */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-0.5 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#38804b]" />
                    <span>Travellers</span>
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    How many people are travelling?
                  </p>
                  <div className="grid grid-cols-4 gap-1.5">
                    {["1", "2", "3-4", "5+"].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setTravelers(num)}
                        className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                          travelers === num
                            ? "bg-[#38804b] text-white border-[#38804b] shadow-sm"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {num === "1" ? "1 Person" : num === "2" ? "2 (Couple)" : num === "3-4" ? "3-4 (Family)" : "5+ Group"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Field 3: Where would you like to go? */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-0.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#38804b]" />
                    <span>Where would you like to go?</span>
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    Choose your destination
                  </p>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38804b] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="🏔️ Kashmir Classic (Srinagar • Gulmarg • Pahalgam)">
                      🏔️ Kashmir Classic (Srinagar • Gulmarg • Pahalgam)
                    </option>
                    <option value="❄️ Kashmir + Gurez">
                      ❄️ Kashmir + Gurez
                    </option>
                    <option value="🌿 Kashmir Explorer">
                      🌿 Kashmir Explorer
                    </option>
                    <option value="🏔️ Kashmir + Ladakh">
                      🏔️ Kashmir + Ladakh
                    </option>
                    <option value="✨ I'll decide with your expert">
                      ✨ I&apos;ll decide with your expert
                    </option>
                  </select>
                </div>

              </div>

              {/* Step 1 Action Button */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#38804b] hover:bg-[#2b693f] active:bg-[#245434] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
                >
                  <span>Continue to Preferences</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* ═══════════════ STEP 02 — STAY & BUDGET ═══════════════ */}
          {currentStep === 2 && (
            <form onSubmit={handleNextStep} className="space-y-4 flex-1 flex flex-col justify-between animate-in fade-in duration-200">
              <div className="space-y-4">
                
                {/* Field 1: Hotel Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-0.5 flex items-center gap-1">
                    <Hotel className="w-3.5 h-3.5 text-[#38804b]" />
                    <span>Hotel Category</span>
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    Select your preferred accommodation comfort tier
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "3-Star Deluxe", desc: "Heated & Cozy", value: "3-Star Deluxe" },
                      { label: "4-Star Luxury", desc: "Premium Stays", value: "4-Star Luxury" },
                      { label: "5-Star / Chalets", desc: "Heritage & Resort", value: "5-Star / Chalets" }
                    ].map((tier) => (
                      <button
                        key={tier.value}
                        type="button"
                        onClick={() => setHotelCategory(tier.value)}
                        className={`p-2.5 rounded-xl border transition-all text-left cursor-pointer ${
                          hotelCategory === tier.value
                            ? "bg-[#38804b]/10 border-[#38804b] ring-1 ring-[#38804b]"
                            : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <p className={`text-xs font-bold ${hotelCategory === tier.value ? "text-[#38804b]" : "text-slate-800"}`}>
                          {tier.label}
                        </p>
                        <p className="text-[10px] text-slate-500 mt-0.5">
                          {tier.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Field 2: Your Approximate Budget */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-0.5 flex items-center gap-1">
                    <Wallet className="w-3.5 h-3.5 text-[#38804b]" />
                    <span>Your Approximate Budget</span>
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#38804b] focus:bg-white transition-all cursor-pointer mt-1"
                  >
                    <option value="₹10,000 – ₹15,000 / person">₹10,000 – ₹15,000 / person</option>
                    <option value="₹15,000 – ₹25,000 / person">₹15,000 – ₹25,000 / person</option>
                    <option value="₹25,000 – ₹40,000 / person">₹25,000 – ₹40,000 / person</option>
                    <option value="₹40,000+ / person">₹40,000+ / person</option>
                  </select>
                  <p className="text-[11px] text-slate-500 mt-1.5 flex items-center gap-1">
                    <span>💡 We&apos;ll suggest options that match your budget.</span>
                  </p>
                </div>

              </div>

              {/* Step 2 Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#38804b] hover:bg-[#2b693f] active:bg-[#245434] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
                >
                  <span>Get My Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* ═══════════════ STEP 03 — CONTACT DETAILS ═══════════════ */}
          {currentStep === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between animate-in fade-in duration-200">
              <div className="space-y-3.5">
                
                {/* Field 1: Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-0.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#38804b]" />
                    <span>Your Name</span>
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    Who should our holiday planner address the quote to?
                  </p>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38804b] focus:bg-white transition-all"
                  />
                </div>

                {/* Field 2: WhatsApp Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-0.5 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#38804b]" />
                    <span>WhatsApp Number *</span>
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    We&apos;ll send your personalised plan on WhatsApp.
                  </p>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (phoneError) setPhoneError(false);
                    }}
                    required
                    className={`w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                      phoneError 
                        ? "border-red-500 focus:ring-red-500" 
                        : "border-slate-200 focus:ring-[#38804b]"
                    }`}
                  />
                  {phoneError && (
                    <p className="text-[11px] text-red-500 mt-1">
                      Please enter your WhatsApp number to receive the custom itinerary.
                    </p>
                  )}
                </div>

                {/* Summary Pill of selections */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-600 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Selected Destination:</span>
                    <span className="font-semibold text-slate-800 truncate max-w-[190px]">{destination.replace(/^[^\w\s]+/, "").trim()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Stay &amp; Group:</span>
                    <span className="font-semibold text-slate-800">{travelers} Guests • {hotelCategory}</span>
                  </div>
                </div>

              </div>

              {/* Step 3 Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-[#38804b] hover:bg-[#2b693f] active:bg-[#245434] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Get My Custom Itinerary</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}

