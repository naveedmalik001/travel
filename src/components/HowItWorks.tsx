"use client";

import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Tell Us Your Plan",
      desc: "Share your dates, travellers and preferences.",
    },
    {
      step: "02",
      title: "Get Your Itinerary",
      desc: "We create a personalised plan for you.",
    },
    {
      step: "03",
      title: "Confirm Your Trip",
      desc: "Approve the itinerary and booking details.",
    },
    {
      step: "04",
      title: "Travel With Confidence",
      desc: "Our team supports you throughout your journey.",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-[#071710] text-white border-y border-white/[0.08] relative overflow-hidden">
      {/* Subtle ambient light for premium depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#38804e]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-emerald-400/90 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38804e]" />
            HOW IT WORKS
          </p>
          <h2 className="mt-2.5 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Your Journey Starts Here
          </h2>
        </div>

        {/* 4 Steps Grid (Compact 4-col on desktop, 2-col on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl p-5 sm:p-6 bg-white/[0.03] border border-white/[0.08] hover:border-[#38804e]/50 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step indicator bar */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {item.step}
                </span>
                <span className="w-8 h-px bg-white/10 group-hover:bg-[#38804e]/60 group-hover:w-12 transition-all duration-300" />
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300/80 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
