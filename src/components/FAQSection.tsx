"use client";

import React, { useState } from "react";
import { ChevronDown, ShieldCheck, HelpCircle, MessageSquare, Phone } from "lucide-react";
import { companyInfo } from "@/data/company";

const faqs = [
  {
    q: "Which is the best time to visit Kashmir?",
    a: "Kashmir is a year-round paradise offering distinct experiences in each season: \n\n• Spring & Summer (April to August): Ideal for blooming Tulip gardens, lush green meadows across Pahalgam, Gulmarg & Sonamarg, and pleasant weather (15°C–28°C).\n• Autumn (September to November): World-famous for golden Chinar leaves, saffron harvest in Pampore, and crisp mountain breeze.\n• Winter (December to March): Perfect for snow lovers, skiing and snowboarding in Gulmarg, snow-covered valleys, and cozy houseboat stays.",
  },
  {
    q: "Can you customise the itinerary?",
    a: "Yes, absolutely! Every package can be 100% customised to match your travel dates, preferred pace, group size, and budget. Whether you wish to add offbeat gems like Gurez Valley or Keran, upgrade to luxury 4-Star/5-Star boutique hotels, arrange special honeymoon surprises, or tailor relaxed senior-citizen-friendly routes, our Tangmarg travel team will craft the ideal plan for you.",
  },
  {
    q: "Do you provide airport transfers?",
    a: "Yes, dedicated airport pickup and drop at Sheikh ul-Alam International Airport, Srinagar (SXR) are included in our tour packages. Your private dedicated cab and experienced mountain driver will greet you at the arrival terminal and ensure comfortable, hassle-free transfers throughout your journey.",
  },
  {
    q: "Do you arrange houseboats?",
    a: "Yes, we arrange verified premium and luxury handcrafted cedarwood houseboats on Dal Lake and Nigeen Lake. All our partner houseboats feature traditional Kashmiri walnut wood carvings, attached modern washrooms, heating/hot water, authentic MAP meals (Breakfast & Dinner), and private Shikara boat transfers.",
  },
  {
    q: "Is Gulmarg Gondola included?",
    a: "Gulmarg Gondola tickets are issued exclusively by the J&K Cable Car Corporation online portal with official government fixed rates. While tickets are booked as per official slot availability, our local Tangmarg team provides complete guidance on booking windows, slot timings for Phase 1 (Kongdoori) and Phase 2 (Apharwat Peak), and on-ground boarding coordination.",
  },
  {
    q: "Do you provide Ladakh packages?",
    a: "Yes! We operate complete Ladakh overland expeditions and fly-in packages covering Leh, Nubra Valley, Pangong Tso, Khardung La Pass (18,380 ft), Chang La, and Kargil. Our Ladakh tours include oxygen-equipped 4x4 SUVs, Inner Line Permits (ILP), experienced high-altitude drivers, and handpicked boutique stays and luxury Swiss glamping tents.",
  },
  {
    q: "What is included in the package?",
    a: "Our standard holiday packages are comprehensive and include:\n\n• Verified 3-Star/4-Star hotel accommodation and luxury cedarwood houseboat stay\n• MAP Meal Plan (Daily fresh breakfast and dinner included)\n• Dedicated private vehicle (Sedan/SUV/Innova) with mountain-experienced driver for all days\n• Srinagar Airport pickup and drop transfers\n• Sightseeing as per chosen itinerary with toll taxes, fuel, parking, and driver allowances\n• 24/7 on-ground assistance from our Tangmarg base operations desk",
  },
  {
    q: "What is your cancellation policy?",
    a: "We provide flexible and guest-friendly booking terms:\n\n• Free Rescheduling: Unlimited date modifications in case of flight disruptions or weather alerts.\n• 15+ Days Before Arrival: Full refund minus nominal administrative and banking fees.\n• 7 to 14 Days Before Arrival: 50% refund or 100% credit voucher valid for 1 full year.\n• Emergency Highway / Flight Cancellations: In rare cases of sudden mountain road closures, our local team coordinates directly with partner hotels for zero-penalty date shifts.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-[#38804e] border border-emerald-200/80 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#38804e]" />
            <span>Got Questions? We Have Answers</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about planning, customising, and experiencing your trip with our local team.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#38804e]/40 shadow-md ring-1 ring-[#38804e]/10"
                    : "bg-white border-slate-200/90 shadow-2xs hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer min-h-[60px]"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold leading-snug transition-colors ${isOpen ? "text-slate-950" : "text-slate-800"}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen ? "bg-[#38804e] text-white rotate-180" : "bg-slate-100 text-slate-500"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5 whitespace-pre-line animate-in fade-in-50 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">Have more questions about your trip?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Speak directly with our Tangmarg on-ground team anytime.</p>
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hi Shop A Trip, I have a few questions regarding planning my Kashmir tour.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#38804e] hover:bg-[#2b693f] active:bg-[#225433] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${companyInfo.phones[0]}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all border border-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#38804e]" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

        {/* Trust footer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#38804e]" />
          <span>Government Registered Tour Operator · Tangmarg, Baramulla, Jammu &amp; Kashmir</span>
        </div>

      </div>
    </section>
  );
}
