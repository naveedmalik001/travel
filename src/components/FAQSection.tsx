"use client";

import React, { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";

const faqs = [
  {
    q: "How do we book Gulmarg Gondola tickets?",
    a: "Gondola tickets are issued by the J&K Cable Car Corporation online portal in monthly batches. We guide you on the exact window your slot opens, align your itinerary accordingly, and set reminders — so you don't lose out on availability.",
  },
  {
    q: "Do Gurez, Keran, or Ladakh require special permits?",
    a: "Yes. Gurez and Keran are Line of Control frontier areas requiring police check-post clearance. Ladakh needs Inner Line Permits for Pangong, Nubra, and Khardung La. We handle all paperwork when you book an offbeat or Ladakh package.",
  },
  {
    q: "What does MAP meal plan mean in your packages?",
    a: "MAP (Modified American Plan) covers breakfast and dinner daily at your hotel or houseboat. Both vegetarian and non-vegetarian Kashmiri options — including Wazwan selections — are available.",
  },
  {
    q: "Can you customize for senior travellers or families with children?",
    a: "Yes, every package is fully adjustable. For seniors or young kids we shorten daily drives, pick accessible lake-view properties, arrange wheelchairs where possible, and ensure all vehicles have working heaters.",
  },
  {
    q: "Where exactly is Shop A Trip located?",
    a: "Gokhama Kunzer, Tangmarg, Baramulla, J&K 193404 — right on the Gulmarg highway. You can call us at +91 8082495885 or +91 7780871705, or walk in.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section header — direct, no badge */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Common questions
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">
            About planning, permits, and packages.
          </p>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border overflow-hidden transition-all ${
                  isOpen
                    ? "bg-white border-slate-300 shadow-card"
                    : "bg-white border-slate-200/80 shadow-soft"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-700 min-h-[52px]"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-semibold leading-snug transition-colors ${isOpen ? "text-pine-900" : "text-slate-800"}`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    isOpen ? "bg-pine-900 text-amber-300 rotate-180" : "bg-slate-100 text-slate-500"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fade-up">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust footer */}
        <div className="mt-8 flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>
            Government Registered Tour Operator · Tangmarg, Baramulla, J&K
          </span>
        </div>

      </div>
    </section>
  );
}
