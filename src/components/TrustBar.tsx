import React from "react";
import { companyInfo } from "@/data/company";
import { Mountain, Award, Hotel, PhoneCall } from "lucide-react";

export default function TrustBar() {
  const features = [
    {
      icon: Mountain,
      title: "Tangmarg base",
      subtitle: "Office on the Gulmarg highway. When snow falls, our crew is physically there.",
    },
    {
      icon: Award,
      title: `${companyInfo.experienceYears}+ years, Kashmir only`,
      subtitle: "Dedicated entirely to J&K and Ladakh — no multi-city generic packages.",
    },
    {
      icon: Hotel,
      title: "Inspected stays",
      subtitle: "Every room checked for heating, hot water, and hygiene before we recommend it.",
    },
    {
      icon: PhoneCall,
      title: "24/7 on the ground",
      subtitle: "Gondola slots, snow chains, weather updates — one call to your trip manager.",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-elevated border border-slate-100/80 px-5 py-6 sm:px-8 sm:py-7">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 sm:divide-x divide-slate-100">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={`flex flex-col gap-2 ${idx !== 0 ? "sm:pl-8" : ""}`}>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 border border-emerald-100/60">
                    <Icon className="w-4.5 h-4.5 text-pine-700" strokeWidth={2} />
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
