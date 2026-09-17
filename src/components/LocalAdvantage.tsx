"use client";

import React from "react";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { 
  ShieldCheck, 
  MapPin, 
  Award, 
  Car, 
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

export default function LocalAdvantage() {
  const advantages = [
    {
      title: "Office at Gulmarg's doorstep",
      desc: "Gokhama Kunzer, Tangmarg. When road conditions change at midnight, our drivers get the call before the tourists do.",
      stat: null
    },
    {
      title: "Six years, only Kashmir & Ladakh",
      desc: "We don't split attention across Rajasthan or Kerala. Every pass, every houseboat owner, every hotel manager — we know them personally.",
      stat: "6+"
    },
    {
      title: "Snow-chain fleet, always ready",
      desc: "Gulmarg ascents need 4x4s with steel snow chains. For Gurez and Keran, we use vehicles cleared for frontier roads. No surprises.",
      stat: null
    },
    {
      title: "Direct price, no middlemen",
      desc: "City aggregators add 20–30% commission on top. With us, you're paying the operation team directly.",
      stat: null
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative h-[320px] sm:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80"
                alt="Gulmarg Gondola cable car ascending Apharwat Peak in winter"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E15]/90 via-transparent to-transparent" />

              {/* Stat card pinned inside photo */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#0B1E15] text-emerald-400 font-extrabold flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-base leading-none">6+</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">yrs</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Shop A Trip</h4>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                      Gokhama Kunzer, Tangmarg, Baramulla
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-3 sm:-right-5 bg-[#0B1E15] text-emerald-300 px-4 py-2 rounded-2xl shadow-xl border border-emerald-600/30 text-xs font-bold flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Peace &amp; You · est. {companyInfo.foundedYear}</span>
            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-7">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">Why local matters in the Himalayas</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                The difference between a<br className="hidden sm:block" />
                stressful trip and a perfect one
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Mountain travel doesn't forgive bad coordination. Having people who live here — who know the roads, the weather, the seasons — is what keeps your holiday seamless.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((adv, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <h3 className="font-bold text-slate-900 text-sm leading-snug">
                      {adv.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-7">
                    {adv.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs — big, clear, mobile-safe */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={`tel:${companyInfo.phones[0]}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0B1E15] hover:bg-emerald-900 text-emerald-300 font-bold text-sm shadow-md transition-all min-h-[48px]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{companyInfo.phones[0]}</span>
              </a>
              <a
                href={companyInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all min-h-[48px]"
              >
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Find our office</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
