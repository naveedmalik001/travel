"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { 
  X, 
  ArrowRight,
  ArrowLeft,
  CheckCircle2, 
  MapPin, 
  Calendar, 
  Users, 
  Hotel, 
  Wallet, 
  Phone, 
  User, 
  Compass 
} from "lucide-react";

export default function LeadPopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState("2 Persons");
  const [destination, setDestination] = useState("Kashmir Classic (Srinagar • Gulmarg • Pahalgam)");
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
Name: ${name.trim() || "Traveler"}
WhatsApp: ${phone.trim()}
Travel Date: ${travelDate.trim() || "Flexible / In Planning"}
Travellers: ${travelers}
Destination: ${destination}
Hotel Category: ${hotelCategory}
Approximate Budget: ${budget}

Hello Shop A Trip Team, please share a customized itinerary and price quote for our trip.`;

    const url = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col md:flex-row my-auto max-h-[92vh] md:max-h-[580px] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 z-30 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── Left Editorial Panel ── */}
        <div className="relative md:w-5/12 bg-[#0A1C14] text-white p-6 sm:p-7 flex flex-col justify-between overflow-hidden shrink-0 border-r border-[#38804b]/20">
          {/* Authentic Kashmir landscape image */}
          <div className="absolute inset-0 opacity-20 mix-blend-luminosity pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80"
              alt="Kashmir Valley landscape"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10">
            {/* Clean text eyebrow without sparkle or neon tags */}
            <div className="flex items-center gap-2 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38804b]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300">
                Direct Local Desk
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
              Plan Your Perfect Kashmir Trip
            </h3>
            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-normal">
              Tell us a few details. Our Team will create a personalised itinerary for you.
            </p>
          </div>

          {/* Key value propositions in clean typography */}
          <div className="relative z-10 my-6 space-y-3 text-xs text-slate-300 hidden md:block border-t border-white/10 pt-5">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#38804b] shrink-0 mt-0.5" />
              <span>Direct native operator &bull; Zero middleman fees</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#38804b] shrink-0 mt-0.5" />
              <span>Verified 3-Star, 4-Star &amp; Luxury Houseboats</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#38804b] shrink-0 mt-0.5" />
              <span>Gulmarg Gondola &amp; pass coordination</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#38804b] shrink-0 mt-0.5" />
              <span>24x7 on-ground assistance from Tangmarg</span>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="relative z-10 pt-3.5 border-t border-white/10 hidden md:flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#38804b]" />
              <span>Tangmarg Office &bull; Gulmarg Base</span>
            </div>
            <span>3+ Yrs Experience</span>
          </div>
        </div>

        {/* ── Right Step Form Panel ── */}
        <div className="md:w-7/12 p-6 sm:p-7 flex flex-col justify-between overflow-y-auto bg-white">
          
          {/* Top Step Indicator: ① Trip Details — ② Preferences — ③ Get My Quote */}
          <div className="mb-5 pb-3.5 border-b border-slate-100">
            <div className="flex items-center justify-between text-[11px] sm:text-xs">
              
              {/* Step 1 Pill */}
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className={`flex items-center gap-1.5 transition-colors ${
                  currentStep === 1 
                    ? "text-[#38804b] font-bold" 
                    : currentStep > 1 
                      ? "text-slate-700 hover:text-[#38804b] cursor-pointer" 
                      : "text-slate-400"
                }`}
              >
                <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  currentStep === 1 
                    ? "bg-[#38804b] text-white" 
                    : currentStep > 1 
                      ? "bg-[#38804b]/15 text-[#38804b]" 
                      : "bg-slate-100 text-slate-400"
                }`}>
                  1
                </span>
                <span>Trip Details</span>
              </button>

              <span className="text-slate-300 font-light">&mdash;</span>

              {/* Step 2 Pill */}
              <button
                type="button"
                onClick={() => currentStep > 2 && setCurrentStep(2)}
                className={`flex items-center gap-1.5 transition-colors ${
                  currentStep === 2 
                    ? "text-[#38804b] font-bold" 
                    : currentStep > 2 
                      ? "text-slate-700 hover:text-[#38804b] cursor-pointer" 
                      : "text-slate-400"
                }`}
              >
                <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  currentStep === 2 
                    ? "bg-[#38804b] text-white" 
                    : currentStep > 2 
                      ? "bg-[#38804b]/15 text-[#38804b]" 
                      : "bg-slate-100 text-slate-400"
                }`}>
                  2
                </span>
                <span>Preferences</span>
              </button>

              <span className="text-slate-300 font-light">&mdash;</span>

              {/* Step 3 Pill */}
              <div className={`flex items-center gap-1.5 ${
                currentStep === 3 ? "text-[#38804b] font-bold" : "text-slate-400"
              }`}>
                <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  currentStep === 3 
                    ? "bg-[#38804b] text-white" 
                    : "bg-slate-100 text-slate-400"
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
              <div className="space-y-4">
                
                {/* Travel Date */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-0.5">
                    Travel Date
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5 font-normal">
                    When are you planning to travel?
                  </p>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. 15th October, Next Month, Flexible"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full bg-slate-50/70 border border-slate-200 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#38804b] focus:ring-1 focus:ring-[#38804b]/20 focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Travellers */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-0.5">
                    Travellers
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5 font-normal">
                    How many people are travelling?
                  </p>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[
                      { id: "1 Person", label: "1 Person" },
                      { id: "2 Persons", label: "2 (Couple)" },
                      { id: "3-4 Persons", label: "3–4 (Family)" },
                      { id: "5+ Persons", label: "5+ Group" }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setTravelers(item.id)}
                        className={`py-2 px-1 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                          travelers === item.id
                            ? "bg-[#38804b] text-white border-[#38804b] shadow-xs"
                            : "bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-0.5">
                    Where would you like to go?
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5 font-normal">
                    Choose your destination
                  </p>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-slate-50/70 border border-slate-200 rounded-xl pl-9 pr-8 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#38804b] focus:ring-1 focus:ring-[#38804b]/20 focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Kashmir Classic (Srinagar • Gulmarg • Pahalgam)">
                        Kashmir Classic (Srinagar • Gulmarg • Pahalgam)
                      </option>
                      <option value="Kashmir & Gurez Valley Expedition">
                        Kashmir &amp; Gurez Valley Expedition
                      </option>
                      <option value="Kashmir Explorer (Comprehensive Circuit)">
                        Kashmir Explorer (Comprehensive Circuit)
                      </option>
                      <option value="Kashmir & Ladakh Overland Expedition">
                        Kashmir &amp; Ladakh Overland Expedition
                      </option>
                      <option value="Custom Circuit (Consult with Local Specialist)">
                        Custom Circuit (Consult with Local Specialist)
                      </option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Step 1 Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#38804b] hover:bg-[#2b693f] active:bg-[#245434] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
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
                
                {/* Hotel Category */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-0.5">
                    Hotel Category
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5 font-normal">
                    Select your preferred accommodation tier
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "3-Star Deluxe", desc: "Heated & Comfortable", value: "3-Star Deluxe" },
                      { label: "4-Star Luxury", desc: "Premium Mountain Stays", value: "4-Star Luxury" },
                      { label: "5-Star & Chalets", desc: "Heritage & Mountain Resorts", value: "5-Star & Chalets" }
                    ].map((tier) => (
                      <button
                        key={tier.value}
                        type="button"
                        onClick={() => setHotelCategory(tier.value)}
                        className={`p-3 rounded-xl border transition-all text-left cursor-pointer ${
                          hotelCategory === tier.value
                            ? "bg-[#38804b]/10 border-[#38804b] ring-1 ring-[#38804b]/40"
                            : "bg-slate-50/70 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <p className={`text-xs font-bold ${hotelCategory === tier.value ? "text-[#38804b]" : "text-slate-800"}`}>
                          {tier.label}
                        </p>
                        <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                          {tier.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Your Approximate Budget */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-0.5">
                    Your Approximate Budget
                  </label>
                  <div className="relative mt-1">
                    <Wallet className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-slate-50/70 border border-slate-200 rounded-xl pl-9 pr-8 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#38804b] focus:ring-1 focus:ring-[#38804b]/20 focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="₹10,000 – ₹15,000 / person">₹10,000 – ₹15,000 / person</option>
                      <option value="₹15,000 – ₹25,000 / person">₹15,000 – ₹25,000 / person</option>
                      <option value="₹25,000 – ₹40,000 / person">₹25,000 – ₹40,000 / person</option>
                      <option value="₹40,000+ / person">₹40,000+ / person</option>
                    </select>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 font-normal">
                    We&apos;ll suggest options that match your budget.
                  </p>
                </div>

              </div>

              {/* Step 2 Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-3.5 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#38804b] hover:bg-[#2b693f] active:bg-[#245434] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
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
              <div className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-0.5">
                    Your Name
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5 font-normal">
                    Who should our holiday planner address the quote to?
                  </p>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50/70 border border-slate-200 rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#38804b] focus:ring-1 focus:ring-[#38804b]/20 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-0.5">
                    WhatsApp Number *
                  </label>
                  <div className="relative mt-1">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (phoneError) setPhoneError(false);
                      }}
                      required
                      className={`w-full bg-slate-50/70 border rounded-xl pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white transition-all ${
                        phoneError 
                          ? "border-red-500 focus:ring-1 focus:ring-red-500" 
                          : "border-slate-200 focus:border-[#38804b] focus:ring-1 focus:ring-[#38804b]/20"
                      }`}
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1.5 font-normal">
                    We&apos;ll send your personalised plan on WhatsApp.
                  </p>
                  {phoneError && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">
                      Please enter your WhatsApp number to receive your custom plan.
                    </p>
                  )}
                </div>

                {/* Recap summary */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-600 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Destination:</span>
                    <span className="font-semibold text-slate-800 truncate max-w-[200px]">{destination}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Group &amp; Stay:</span>
                    <span className="font-semibold text-slate-800">{travelers} &bull; {hotelCategory}</span>
                  </div>
                </div>

              </div>

              {/* Step 3 Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-3.5 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-[#38804b] hover:bg-[#2b693f] active:bg-[#245434] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
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
