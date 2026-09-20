"use client";

import React from "react";
import Image from "next/image";
import { TeamMember } from "@/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
  index?: number;
}

export default function TeamMemberCard({ member, index = 0 }: TeamMemberCardProps) {
  // Use harmonious brand-inspired accent rings (Alternating brand green & elegant amber/teal rings)
  const ringColors = [
    "border-[#38804b] ring-4 ring-[#38804b]/20",
    "border-amber-500 ring-4 ring-amber-500/20",
    "border-emerald-600 ring-4 ring-emerald-600/20",
    "border-[#2b693f] ring-4 ring-[#2b693f]/20",
  ];
  const activeRing = ringColors[index % ringColors.length];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group h-full justify-between">
      <div className="w-full flex flex-col items-center">
        {/* ─── Circular Portrait with Premium Colored Ring ───────── */}
        <div className={`relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 border-[3.5px] ${activeRing} bg-slate-50 transition-transform duration-300 group-hover:scale-105 shadow-sm`}>
          <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 130px, 150px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* ─── Member Name ────────────────────────────────────────── */}
        <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide text-slate-900 group-hover:text-[#38804b] transition-colors mt-5 leading-snug">
          {member.name}
        </h3>

        {/* ─── Role / Designation ─────────────────────────────────── */}
        <p className="text-xs sm:text-sm font-bold text-[#38804b] mt-1">
          {member.role}
        </p>

        {/* Optional Specialty / Bio */}
        {member.specialty && (
          <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2 px-1">
            {member.specialty}
          </p>
        )}
      </div>

      {/* ─── Bottom Experience / Category Badge ──────────────────── */}
      <div className="mt-4 pt-3.5 border-t border-slate-100 w-full flex items-center justify-between text-xs text-slate-500">
        <span className="font-semibold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200/70 text-[11px]">
          {member.experience}
        </span>
        <span className="text-[11px] font-bold text-[#38804b] uppercase tracking-wider">
          Local Team
        </span>
      </div>
    </div>
  );
}
