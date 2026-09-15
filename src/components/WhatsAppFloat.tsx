"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { companyInfo } from "@/data/company";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import { 
  MessageSquare, 
  X, 
  Phone, 
  FileText, 
  Headphones,
  CheckCircle2
} from "lucide-react";

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Automatically show bubble on initial mount after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isDismissed) {
    return (
      <button
        onClick={() => {
          setIsDismissed(false);
          setIsOpen(true);
        }}
        className="fixed bottom-4 right-4 z-40 p-2.5 rounded-full bg-emerald-800/90 text-amber-300 shadow-lg hover:bg-emerald-700 transition-all border border-emerald-600/50 text-xs flex items-center gap-1.5"
        title="Open Travel Desk"
      >
        <Headphones className="w-4 h-4" />
        <span className="font-semibold hidden sm:inline">Travel Desk</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Expanded Multi-Channel Contact Card */}
      {isOpen && (
        <div className="mb-3 w-[300px] sm:w-[330px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0B1E15] via-[#133527] to-[#0B1E15] text-white p-4 flex items-center justify-between border-b border-emerald-900/60">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold shadow-inner">
                  <Headphones className="w-5 h-5 text-amber-300" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0B1E15]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white leading-tight">Shop A Trip Travel Desk</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Talk with our travel experts</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body actions */}
          <div className="p-3.5 space-y-2.5 bg-slate-50/50">
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hello Shop A Trip! I want to talk with a travel expert regarding Kashmir & Ladakh tour packages.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md transition-all hover:scale-[1.02] group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-xs leading-tight">Chat on WhatsApp</p>
                  <p className="text-[11px] text-white/90">Instant quotes &amp; itineraries</p>
                </div>
              </div>
              <span className="text-[10px] bg-white/25 text-white font-bold px-2 py-0.5 rounded-full">
                Fastest
              </span>
            </a>

            {/* Fill Form CTA */}
            <Link
              href="/custom-planner"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-emerald-50 text-slate-800 border border-slate-200 shadow-sm transition-all hover:border-emerald-300 hover:scale-[1.02] group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-xs text-slate-900 group-hover:text-emerald-800">Fill Trip Form</p>
                  <p className="text-[11px] text-slate-500">Plan custom dates &amp; hotels</p>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                Custom
              </span>
            </Link>

            {/* Direct Call CTA */}
            <a
              href={`tel:${companyInfo.phones[0]}`}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 transition-colors"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-lg bg-pine-900 text-amber-300 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-xs text-slate-900">Direct Phone Call</p>
                  <p className="text-[10px] text-slate-500">{companyInfo.phones[0]}</p>
                </div>
              </div>
              <span className="text-[10px] text-emerald-700 font-semibold">Call Now</span>
            </a>

            {/* Social Media Links Row */}
            <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between px-1">
              <span className="text-[11px] font-medium text-slate-500">Social Channels:</span>
              <div className="flex items-center space-x-2">
                <a
                  href={companyInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-amber-500 text-white text-[11px] font-semibold hover:opacity-90 transition-opacity shadow-sm"
                  title="Instagram"
                >
                  <InstagramIcon className="w-3 h-3" />
                  <span>Instagram</span>
                </a>
                <a
                  href={companyInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1877F2] text-white text-[11px] font-semibold hover:opacity-90 transition-opacity shadow-sm"
                  title="Facebook"
                >
                  <FacebookIcon className="w-3 h-3" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer minimize option */}
          <div className="px-3.5 py-2 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              Direct local assistance
            </span>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-slate-400 hover:text-slate-600 underline"
            >
              Hide widget
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Bar (Bubble + Circle Icon) */}
      <div className="flex items-center space-x-2.5">
        {/* Live Bubble "Talk with our travel experts" */}
        {showBubble && !isOpen && (
          <div className="flex items-center space-x-2 bg-white text-slate-900 px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200 text-xs font-semibold animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <button
              onClick={() => {
                setIsOpen(true);
                setShowBubble(false);
              }}
              className="text-slate-800 hover:text-emerald-700 text-left transition-colors"
            >
              Talk with our travel experts
            </button>
            <button
              onClick={() => setShowBubble(false)}
              className="text-slate-400 hover:text-slate-700 ml-1 p-0.5 rounded-full hover:bg-slate-100"
              aria-label="Dismiss message bubble"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Floating Toggle Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowBubble(false);
          }}
          className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-105 active:scale-95 transition-all duration-300 relative group ${
            isOpen
              ? "bg-slate-800 text-white"
              : "bg-[#25D366] hover:bg-[#20ba5a] text-white"
          }`}
          aria-label={isOpen ? "Close contact options" : "Open contact options"}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white animate-ping" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

