"use client";

import React, { useState } from "react";
import { companyInfo } from "@/data/company";
import { MessageSquare, X } from "lucide-react";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
      {/* Tooltip Badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center space-x-2 bg-white text-slate-800 px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200 text-xs font-semibold animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Need help? Chat with Tangmarg Expert!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello Shop A Trip Team! I'd like to ask a quick question regarding Kashmir & Ladakh travel.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 relative group"
        aria-label="WhatsApp Us"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white" />
      </a>
    </div>
  );
}
