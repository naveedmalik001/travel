import React from "react";
import { Users, Compass, Star, Award } from "lucide-react";

export default function TrustBar() {
  const stats = [
    {
      icon: Users,
      value: "200+",
      title: "Happy Travellers",
      subtitle: "Verified guests hosted across Kashmir & Ladakh.",
    },
    {
      icon: Compass,
      value: "20+",
      title: "Destinations",
      subtitle: "Iconic valleys, frontier circuits & high passes.",
    },
    {
      icon: Star,
      value: "4.9/5",
      title: "Guest Rating",
      subtitle: "Consistently top-rated for hospitality & comfort.",
      isStar: true,
    },
    {
      icon: Award,
      value: "3+",
      title: "Years of Experience",
      subtitle: "Native on-ground operations & verified fleet.",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100/80 px-5 py-6 sm:px-8 sm:py-7">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 sm:divide-x divide-slate-100">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={`flex flex-col gap-1.5 ${idx !== 0 ? "sm:pl-8" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#38804b]/10 flex items-center justify-center flex-shrink-0 border border-[#38804b]/20">
                    <Icon className={`w-5 h-5 ${item.isStar ? "text-amber-500 fill-amber-500" : "text-[#38804b]"}`} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="font-extrabold text-slate-900 text-lg sm:text-2xl tracking-tight leading-none block">
                      {item.value}
                    </span>
                    <h3 className="font-bold text-slate-800 text-xs sm:text-sm leading-tight mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mt-0.5">
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
