"use client";

import React, { useState } from "react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      num: "01",
      title: "Tell Us Your Plan",
      desc: "Share your dates, travellers and preferences.",
      tag: "Step 01",
    },
    {
      num: "02",
      title: "Get Your Itinerary",
      desc: "We create a personalised plan for you.",
      tag: "Step 02",
    },
    {
      num: "03",
      title: "Confirm Your Trip",
      desc: "Approve the itinerary and booking details.",
      tag: "Step 03",
    },
    {
      num: "04",
      title: "Travel With Confidence",
      desc: "Our team supports you throughout your journey.",
      tag: "Step 04",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-[#06140e] text-white relative overflow-hidden border-b border-emerald-950/80">
      {/* Subtle Luxury Ambient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,128,78,0.18),transparent)] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-72 h-72 bg-[#38804e]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Your Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200">Starts Here</span>
          </h2>
        </div>

        {/* 4 Steps Interactive Architectural Rail */}
        <div className="relative">
          
          {/* Connecting Track Line on Desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
            {steps.map((item, idx) => {
              const isHovered = activeStep === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between ${
                    isHovered
                      ? "bg-white/[0.07] border-emerald-500/50 shadow-[0_10px_30px_-10px_rgba(56,128,78,0.3)] -translate-y-1"
                      : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.05] hover:border-white/20"
                  } border`}
                >
                  {/* Top Step Number Badge & Indicator */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 ${
                          isHovered 
                            ? "bg-[#38804e] text-white shadow-lg shadow-emerald-900/50 scale-105" 
                            : "bg-white/10 text-emerald-300 border border-white/10"
                        }`}>
                          {item.num}
                        </div>
                        <span className="text-[10px] font-mono tracking-wider uppercase text-emerald-400/70">
                          {item.tag}
                        </span>
                      </div>

                      {/* Directional Accent Line */}
                      <span className={`h-px transition-all duration-300 ${
                        isHovered ? "w-10 bg-emerald-400" : "w-5 bg-white/15"
                      }`} />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                      <span className="font-mono text-emerald-400 font-semibold mr-1.5">{item.num} —</span>
                      {item.title}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-2 text-xs sm:text-[13px] text-slate-300/80 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom hairline progress anchor */}
                  <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                      Shop A Trip
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      isHovered ? "bg-emerald-400 scale-125" : "bg-white/20"
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
