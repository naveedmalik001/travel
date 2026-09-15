"use client";

import React from "react";
import { companyInfo } from "@/data/company";
import { Star, ExternalLink, MapPin, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Vikram & Ananya Sengupta",
      location: "Kolkata",
      tour: "5N/6D Honeymoon Package",
      rating: 5,
      date: "October 2025",
      review: "The candlelit dinner on the Dal Lake houseboat was something out of a film. Our Tangmarg team had pre-arranged flower petals on arrival and had the Gondola slots booked for the exact morning we needed. Genuinely flawless.",
      initials: "VS",
    },
    {
      name: "Dr. Rajesh Kulkarni",
      location: "Pune",
      tour: "9N/10D Jammu, Katra & Kashmir",
      rating: 5,
      date: "December 2025",
      review: "Travelling with elderly parents and two young kids is a logistical challenge anywhere. In Kashmir it could have been a disaster. The driver was patient, the hotels had proper heating and vegetarian food, and the cab handled every mountain road without incident.",
      initials: "RK",
    },
    {
      name: "Rohit Deshmukh & friends",
      location: "Bengaluru",
      tour: "6N/7D Gurez Frontier",
      rating: 5,
      date: "August 2025",
      review: "Razdan Pass, Habba Khatoon spring, a bonfire by the Kishanganga at night — none of that happens without a team that knows the border permit process inside out. Don't attempt offbeat Kashmir with anyone who isn't based here.",
      initials: "RD",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Traveler Reviews</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
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
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all flex-shrink-0 min-h-[44px]"
          >
            <span>All Google reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Review cards */}
        <div className="flex gap-5 overflow-x-auto pb-4 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="min-w-[300px] sm:min-w-0 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between gap-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 sm:flex-shrink"
            >
              {/* Quote icon + Stars */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{r.date}</span>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-emerald-100 absolute -top-1 -left-1 fill-emerald-100" />
                  <p className="text-sm text-slate-700 leading-relaxed pl-3">
                    {r.review}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    {/* Avatar initials */}
                    <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center flex-shrink-0">
                      {r.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{r.name}</h4>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {r.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] bg-emerald-50 text-emerald-800 font-semibold px-2 py-1 rounded-lg border border-emerald-100 whitespace-nowrap flex-shrink-0">
                    Verified
                  </span>
                </div>
                <p className="text-[11px] text-emerald-800 font-medium mt-2 ml-12">
                  {r.tour}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating strip */}
        <div className="mt-8 bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-600">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="font-bold text-slate-900">4.9 / 5.0</span>
          <span className="text-slate-400 hidden sm:inline">·</span>
          <span>Consistently rated across Google and WhatsApp referrals</span>
        </div>

      </div>
    </section>
  );
}
