"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronDown, 
  HelpCircle, 
  Phone, 
  Calendar, 
  Hotel, 
  Car, 
  ShieldCheck,
  FileText
} from "lucide-react";
import { companyInfo } from "@/data/company";
import { WhatsAppIcon } from "@/components/SocialIcons";

interface FAQItem {
  id: string;
  category: "all" | "itinerary" | "stays" | "transfers";
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "itinerary",
    q: "Which is the best time to visit Kashmir?",
    a: "Kashmir is a mesmerizing all-season destination:\n\n• Spring & Summer (April to August): Ideal for the famous Tulip Festival in Srinagar, lush green meadows across Pahalgam, Gulmarg & Sonamarg, and pleasant daytime temperatures (15°C–28°C).\n• Autumn (September to November): Renowned for crimson-golden Chinar trees, saffron harvesting in Pampore, clear mountain skies, and crisp breeze.\n• Winter (December to March): The peak season for snow enthusiasts, skiing and snowboarding in Gulmarg, frozen streams, and warm central-heated hotel and houseboat stays.",
  },
  {
    id: "faq-2",
    category: "itinerary",
    q: "Can you customise the itinerary?",
    a: "Yes, 100%! Every itinerary on Shop A Trip can be tailored to match your travel dates, pace, group size, and preferences. Whether you want to include offbeat frontier valleys (Gurez, Keran, Tulail), upgrade to premium 4-star boutique resorts, arrange romantic honeymoon surprises, or design senior-citizen friendly schedules, our local travel specialists will curate a personalized plan for you.",
  },
  {
    id: "faq-3",
    category: "transfers",
    q: "Do you provide airport transfers?",
    a: "Yes, dedicated airport pickup and drop transfers at Sheikh ul-Alam International Airport, Srinagar (SXR) are included in all tour packages. Your assigned vehicle and professional local mountain driver will receive you at the arrival terminal with a guest name board and manage all your travel comfortably throughout the trip.",
  },
  {
    id: "faq-4",
    category: "stays",
    q: "Do you arrange houseboats?",
    a: "Yes, we partner with verified premium and luxury handcrafted cedarwood houseboats across Dal Lake and Nigeen Lake. Stays include traditional Kashmiri walnut wood interiors, private Shikara transfers, attached modern washrooms with 24/7 hot water, central heating, and freshly prepared breakfast and dinner (MAP meal plan).",
  },
  {
    id: "faq-5",
    category: "transfers",
    q: "Is Gulmarg Gondola included?",
    a: "Gulmarg Gondola cable car tickets are issued directly through the official J&K Cable Car Corporation online portal with government-regulated fixed rates. While tickets are subject to official portal slot availability, our local team provides timely slot booking assistance, boarding time advisory for Phase 1 (Kongdoori) & Phase 2 (Apharwat Peak), and on-ground coordination.",
  },
  {
    id: "faq-6",
    category: "itinerary",
    q: "Do you provide Ladakh packages?",
    a: "Yes! We run complete Leh-Ladakh expeditions covering Leh town, Nubra Valley, Pangong Tso Lake, Khardung La Pass (17,982 ft), Chang La, and Kargil. Our Ladakh trips include oxygen-cylinder equipped 4x4 vehicles, Inner Line Permits (ILP), high-altitude seasoned drivers, and handpicked boutique hotels and deluxe Swiss camp stays.",
  },
  {
    id: "faq-7",
    category: "stays",
    q: "What is included in the package?",
    a: "Our standard holiday packages are comprehensive and transparent:\n\n• Verified 3-Star or 4-Star hotel accommodation and luxury cedarwood houseboat stay\n• MAP Meal Plan (Daily fresh breakfast and dinner included)\n• Dedicated private vehicle (Sedan/SUV/Innova) with mountain-experienced driver for all days\n• Srinagar Airport pickup and drop transfers\n• Sightseeing as per chosen itinerary with toll taxes, fuel, parking, and driver allowances\n• 24/7 on-ground assistance throughout your trip",
  },
  {
    id: "faq-8",
    category: "transfers",
    q: "What is your cancellation and refund policy?",
    a: "All trip bookings and private cab reservations are governed by our standard cancellation window:\n\n• Within 24 to 48 Hours: A trip reservation is eligible for cancellation consideration strictly within 24 to 48 hours of initial booking confirmation.\n• After 48 Hours: After the initial 48-hour window, there will be NO REFUND of any advance payment or deposit, as hotel, houseboat, and vehicle rosters are immediately locked.\n• Disputes & Inquiries: For written cancellation requests or billing queries, contact our desk at business@shopatrip.in.",
  },
];

const categories = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "itinerary", label: "Itineraries & Season", icon: Calendar },
  { id: "stays", label: "Stays & Houseboats", icon: Hotel },
  { id: "transfers", label: "Cabs & Logistics", icon: Car },
];

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState<"all" | "itinerary" | "stays" | "transfers">("all");
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const filteredFaqs = activeTab === "all" 
    ? faqs 
    : faqs.filter((item) => item.category === activeTab);

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#38804b]/10 text-[#38804b] border border-[#38804b]/20 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers &amp; Guidelines</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 font-serif">
            Frequently Asked Questions
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about seasons, permits, houseboats, cabs, and policies before your journey.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id as typeof activeTab);
                  // Open the first item of filtered list
                  const first = faqs.find((f) => cat.id === "all" || f.category === cat.id);
                  if (first) setOpenId(first.id);
                }}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#38804b] text-white shadow-xs"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#38804b]/50 shadow-sm ring-1 ring-[#38804b]/10"
                    : "bg-white border-slate-200/90 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                    isOpen ? "text-[#38804b]" : "text-slate-800"
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "bg-[#38804b] text-white rotate-180" : "bg-slate-100 text-slate-500"
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5 whitespace-pre-line animate-in fade-in-50 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Banner & Links */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">Have a custom question about your dates?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Our local team desk is available every day for assistance.</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hi Shop A Trip, I have a few questions regarding my upcoming Kashmir tour.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#38804b] hover:bg-[#2b693f] active:bg-[#225433] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
            <Link
              href="/terms"
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all border border-slate-200"
            >
              <FileText className="w-3.5 h-3.5 text-[#38804b]" />
              <span>Full Policy</span>
            </Link>
          </div>
        </div>

        {/* Verification footer badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium text-center">
          <ShieldCheck className="w-4 h-4 text-[#38804b] flex-shrink-0" />
          <span>Shop A Trip Tour &amp; Travels · Registered Tour Operator · Tangmarg, Baramulla (J&amp;K)</span>
        </div>

      </div>
    </section>
  );
}
