"use client";

import React from "react";
import Image from "next/image";
import { TeamMember } from "@/data/team";
import { Award } from "lucide-react";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      {/* ─── Photo Container with Premium Backdrop ───────── */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-900">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Subtle bottom gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category / Role Badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#081f16]/90 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
          {member.category}
        </div>
      </div>

      {/* ─── Member Information ───────────────────────────── */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          {/* Name */}
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#38804e] transition-colors leading-snug">
            {member.name}
          </h3>

          {/* Role & Specialization */}
          <p className="text-xs font-semibold text-[#38804e] mt-0.5">
            {member.role}
          </p>

          {member.specialty && (
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {member.specialty}
            </p>
          )}
        </div>

        {/* Experience Pill */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1.5 font-bold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/80">
            <Award className="w-3.5 h-3.5 text-[#38804e]" />
            <span>{member.experience}</span>
          </span>
          <span className="text-[11px] font-semibold text-[#38804e]">
            Local Team
          </span>
        </div>
      </div>
    </div>
  );
}
