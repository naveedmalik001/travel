import React from "react";
import { companyInfo } from "@/data/company";
import { Mountain, Award, Hotel, PhoneCall, BadgeCheck } from "lucide-react";

export default function TrustBar() {
  const features = [
    {
      icon: BadgeCheck,
      title: "Zero Hidden Fee",
      subtitle: "100% transparent pricing with MAP meal plans and dedicated cabs included.",
    },
    {
      icon: Hotel,
      title: "Verified Stays",
      subtitle: "Inspected hotels, luxury resorts & cozy houseboats checked for comfort and heating.",
    },
    {
      icon: Mountain,
      title: "Gondola & Permit Support",
      subtitle: "Advance Gulmarg Gondola slot assistance and frontier border permit guidance.",
    },
    {
      icon: PhoneCall,
      title: "24x7 Trip Support",
      subtitle: "Direct on-ground local team assistance before and throughout your holiday.",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100/80 px-5 py-6 sm:px-8 sm:py-7">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 sm:divide-x divide-slate-100">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={`flex flex-col gap-2.5 ${idx !== 0 ? "sm:pl-8" : ""}`}>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#38804b]/10 flex items-center justify-center flex-shrink-0 border border-[#38804b]/20">
                    <Icon className="w-4 h-4 text-[#38804b]" strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">{item.title}</h3>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
