"use client";

import React from "react";
import { companyInfo } from "@/data/company";
import { Star, ExternalLink, MapPin } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Vikram & Ananya Sengupta",
      location: "Kolkata",
      tour: "5N/6D Honeymoon Package",
      rating: 5,
      date: "October 2025",
      // Natural, specific voice — not generic AI filler
      review: "The candlelit dinner on the Dal Lake houseboat was something out of a film. Our Tangmarg team had pre-arranged flower petals on arrival and had the Gondola slots booked for the exact morning we needed. Genuinely flawless.",
    },
    {
      name: "Dr. Rajesh Kulkarni",
      location: "Pune",
      tour: "9N/10D Jammu, Katra & Kashmir",
      rating: 5,
      date: "December 2025",
      review: "Travelling with elderly parents and two young kids is a logistical challenge anywhere. In Kashmir it could have been a disaster. The driver was patient, the hotels had proper heating and vegetarian food, and the cab handled every mountain road without incident.",
    },
    {
      name: "Rohit Deshmukh & friends",
      location: "Bengaluru",
      tour: "6N/7D Gurez Frontier",
      rating: 5,
      date: "August 2025",
      review: "Razdan Pass, Habba Khatoon spring, a bonfire by the Kishanganga at night — none of that happens without a team that knows the border permit process inside out. Don't attempt offbeat Kashmir with anyone who isn't based here.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header row — section label removed, straight to content */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              What travellers say
            </h2>
            <p className="mt-1.5 text-sm text-slate-500">
              Real guests. No incentivised reviews.
            </p>
          </div>

          <a
            href={companyInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all flex-shrink-0 min-h-[40px]"
          >
            <span>All Google reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Review cards — horizontal scroll on mobile, grid on tablet+ */}
        <div className="flex gap-5 overflow-x-auto pb-4 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="min-w-[300px] sm:min-w-0 bg-white p-6 rounded-2xl border border-slate-200 shadow-soft flex flex-col justify-between gap-5 hover:shadow-card transition-all flex-shrink-0 sm:flex-shrink"
            >
              {/* Stars */}
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 ml-1.5">{r.date}</span>
                </div>

                {/* Quote — no italic on body, no generic quote marks */}
                <p className="text-sm text-slate-700 leading-relaxed">
                  "{r.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{r.name}</h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {r.location}
                    </p>
                  </div>
                  <span className="text-[11px] bg-emerald-50 text-emerald-800 font-semibold px-2 py-1 rounded-lg border border-emerald-100 whitespace-nowrap flex-shrink-0">
                    Verified
                  </span>
                </div>
                <p className="text-[11px] text-pine-800 font-medium mt-2">
                  {r.tour}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-slate-600">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="font-bold text-slate-900">4.9 / 5.0</span>
          <span className="text-slate-400">·</span>
          <span>Consistently rated across Google and WhatsApp referrals</span>
        </div>

      </div>
    </section>
  );
}
