"use client";

import React, { useState, useEffect } from "react";
import { 
  MessageSquare, 
  MapPin, 
  CreditCard, 
  Mountain, 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobilePaused, setIsMobilePaused] = useState(false);

  const steps = [
    {
      num: "01",
      stepTag: "Step 01",
      stage: "PLAN",
      title: "Tell Us Your Plan",
      desc: "Share your travel dates, group size, and preferred comfort tier with our local team.",
      icon: MessageSquare,
    },
    {
      num: "02",
      stepTag: "Step 02",
      stage: "DRAFT",
      title: "Get Custom Itinerary",
      desc: "Receive a day-wise mountain route and direct local quote within 2 hours.",
      icon: MapPin,
    },
    {
      num: "03",
      stepTag: "Step 03",
      stage: "BOOK",
      title: "Confirm Your Trip",
      desc: "Lock dates with 20% advance and get your verified cab & stay vouchers.",
      icon: CreditCard,
    },
    {
      num: "04",
      stepTag: "Step 04",
      stage: "TRAVEL",
      title: "Travel With Confidence",
      desc: "Native driver, heated rooms, and 24/7 on-ground assistance.",
      icon: Mountain,
    },
  ];

  // Auto slide on mobile every 3.2 seconds
  useEffect(() => {
    if (isMobilePaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [isMobilePaused, steps.length]);

  const scrollToPlanner = () => {
    const el = document.getElementById("custom-planner");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const currentMobileStep = steps[activeStep];
  const CurrentIcon = currentMobileStep.icon;

  return (
    <section id="how-it-works" className="py-5 sm:py-8 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#38804b]/10 text-[#38804b] text-[10px] font-bold tracking-widest uppercase mb-0.5">
              <span>HOW IT WORKS</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Your Journey <span className="text-[#38804b]">Starts Here</span>
            </h2>
          </div>

          <button
            onClick={scrollToPlanner}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#38804b] hover:text-[#2a6339] group transition-colors"
          >
            <span>Plan custom trip</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Desktop View: Connected Horizontal Ribbon Track */}
        <div className="hidden md:block relative">
          {/* Continuous Connected Ribbon Spine */}
          <div className="absolute top-1/2 -translate-y-1/2 left-8 right-8 h-1 bg-gradient-to-r from-[#38804b]/20 via-[#38804b] to-[#38804b]/20 rounded-full z-0" />

          <div className="grid grid-cols-4 gap-3 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white hover:bg-slate-50/90 rounded-xl p-3.5 border border-slate-200 hover:border-[#38804b]/60 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Ribbon Node Header */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#38804b] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-xs">
                        <span>{item.stepTag}</span>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-[#38804b]/10 text-[#38804b] flex items-center justify-center border border-[#38804b]/20 group-hover:bg-[#38804b] group-hover:text-white transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#38804b] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                    <span className="font-semibold text-slate-600">Local Desk</span>
                    <span className="font-mono text-[#38804b] font-bold">0{idx + 1}/04</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Automatic Slide with Pause on Touch & Smooth Navigation */}
        <div 
          className="md:hidden"
          onTouchStart={() => setIsMobilePaused(true)}
          onTouchEnd={() => setIsMobilePaused(false)}
          onMouseEnter={() => setIsMobilePaused(true)}
          onMouseLeave={() => setIsMobilePaused(false)}
        >
          <div className="relative bg-slate-50/90 rounded-xl p-3.5 border border-[#38804b]/40 shadow-xs transition-all duration-300">
            
            {/* Top Slide Header: Stage Badge + Icon + Arrows */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#38804b] text-white text-[10px] font-mono font-bold tracking-wide uppercase shadow-2xs">
                  {currentMobileStep.stepTag} • {currentMobileStep.stage}
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-semibold">
                  0{activeStep + 1} of 04
                </span>
              </div>

              {/* Mobile Prev / Next Buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={prevStep}
                  className="p-1 rounded bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 active:scale-95 transition-all shadow-2xs"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextStep}
                  className="p-1 rounded bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 active:scale-95 transition-all shadow-2xs"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Slide Body */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#38804b]/10 text-[#38804b] border border-[#38804b]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CurrentIcon className="w-4 h-4" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-slate-900 leading-tight">
                  {currentMobileStep.title}
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {currentMobileStep.desc}
                </p>
              </div>
            </div>

            {/* Bottom Progress Indicator Bar */}
            <div className="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeStep 
                        ? "w-6 bg-[#38804b]" 
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to step ${idx + 1}`}
                  />
                ))}
              </div>

              <span className="text-[10px] text-slate-400 font-medium">
                Auto-sliding • Tap to pause
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
