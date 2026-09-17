import React from "react";
import { 
  ShieldCheck, 
  Award, 
  Landmark, 
  CheckCircle2, 
  BadgeCheck,
  Building2,
  Lock
} from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Ministry of Tourism",
      subtitle: "Government Approved Agency",
      desc: "Officially recognized and registered under Ministry of Tourism, Government of India for regional tourism operations.",
      icon: Landmark,
      badge: "Govt. Approved",
      verificationNote: "National Portal Verified",
    },
    {
      title: "JK Tourism Department",
      subtitle: "Directorate Certified Operator",
      desc: "Accredited Himalayan tour & travel provider under Jammu & Kashmir Tourism Department with active state permit status.",
      icon: ShieldCheck,
      badge: "State Certified",
      verificationNote: "Tangmarg Field Division",
    },
    {
      title: "Tourism Association",
      subtitle: "Member Since 2022",
      desc: "Active member adhering to strict ethical mountain guiding, guest security protocols, and fair local pricing guidelines.",
      icon: Building2,
      badge: "Member Since 2022",
      verificationNote: "Ethical Standards Certified",
    },
    {
      title: "TripAdvisor",
      subtitle: "Excellence Recognition",
      desc: "Recognized for consistent 5-star traveler satisfaction, verified guest testimonials, and authentic local itinerary delivery.",
      icon: Award,
      badge: "Excellence Award",
      verificationNote: "Top Rated Mountain Agency",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-[#38804e] border border-emerald-200/80 mb-3.5">
            <BadgeCheck className="w-4 h-4 text-[#38804e]" />
            <span>Trusted by Thousands</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Certifications &amp; Partners
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Accredited by leading tourism bodies and trusted by travelers worldwide for verified, safe, and authentic Kashmir journeys.
          </p>
        </div>

        {/* 4 Certification Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#38804e]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#38804e] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 text-[#38804e] border border-slate-200/80 flex items-center justify-center group-hover:bg-[#38804e] group-hover:text-white group-hover:border-[#38804e] transition-all duration-200">
                      <IconComponent className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 group-hover:bg-emerald-50 group-hover:text-emerald-900 group-hover:border-emerald-200 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#38804e] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5 text-[#38804e] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38804e]" />
                    Verified
                  </span>
                  <span className="text-slate-500">{item.verificationNote}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Verification Notice */}
        <div className="mt-10 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <Lock className="w-4 h-4 text-[#38804e] flex-shrink-0" />
            <span>Direct operations registered at <strong>Tangmarg Base (Gulmarg Road), Baramulla, Jammu &amp; Kashmir</strong>.</span>
          </div>
          <span className="text-[11px] font-semibold text-[#38804e] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 whitespace-nowrap">
            100% Genuine Local Operator
          </span>
        </div>

      </div>
    </section>
  );
}
