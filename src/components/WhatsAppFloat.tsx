"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { companyInfo } from "@/data/company";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";
import SupportAgentIcon from "@/components/SupportAgentIcon";
import { 
  X, 
  Phone, 
  FileText, 
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Headphones
} from "lucide-react";

// Friendly soft chime for support interactions
const playSupportBeep = () => {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(659.25, now); // E5 note
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.3);
  } catch (e) {
    // AudioContext blocked or unsupported on device
  }
};

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFolded, setIsFolded] = useState(false);
  const [showPill, setShowPill] = useState(false);

  // Show a subtle introductory pill only after initial load, then auto-collapse
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPill(true);
    }, 1500);

    const autoHideTimer = setTimeout(() => {
      setShowPill(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoHideTimer);
    };
  }, []);

  const handleOpenWidget = useCallback(() => {
    playSupportBeep();
    setIsOpen(true);
    setShowPill(false);
  }, []);

  const handleToggleWidget = useCallback(() => {
    playSupportBeep();
    setIsOpen((prev) => !prev);
    setShowPill(false);
  }, []);

  // When completely folded/minimized to prevent blocking text on mobile or small screens
  if (isFolded) {
    return (
      <aside 
        aria-label="Live Travel Support"
        className="fixed bottom-3 right-3 z-40"
      >
        <button
          onClick={() => {
            setIsFolded(false);
            handleOpenWidget();
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#38804b] text-white border border-[#38804b] shadow-xl backdrop-blur-md text-[11px] font-bold hover:bg-[#2b693f] transition-all hover:scale-105 active:scale-95 group cursor-pointer"
          title="Unhide Live Support Desk"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <Headphones className="w-3.5 h-3.5 text-white" />
          <span>Support</span>
          <ChevronUp className="w-3 h-3 text-white" />
        </button>
      </aside>
    );
  }

  return (
    <aside 
      aria-label="Live Travel Support Desk"
      className="fixed bottom-3.5 right-3 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end pointer-events-none"
    >
      {/* ─── Backdrop Dismiss Overlay (when open) ─────────── */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-[1px] z-30 pointer-events-auto"
          aria-hidden="true"
        />
      )}

      {/* ─── Expanded Multi-Channel Support & Contact Card ─── */}
      {isOpen && (
        <div className="relative z-40 mb-2.5 w-[295px] sm:w-[330px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden animate-in slide-in-from-bottom-4 duration-200 pointer-events-auto">
          {/* Card Header */}
          <div className="bg-[#38804b] text-white p-4 flex items-center justify-between border-b border-[#2e6d3f]">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white shadow-inner">
                  <SupportAgentIcon className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-white border border-[#38804b] animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-xs text-white leading-tight">Shop A Trip Desk</h4>
                  <span className="px-1.5 py-0.2 rounded text-[8px] font-extrabold bg-white/20 text-white uppercase tracking-wide border border-white/30">
                    LIVE
                  </span>
                </div>
                <p className="text-[10px] text-emerald-100 mt-0.5">
                  Instant quotes &amp; mountain help
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* Fold / Minimize Button */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsFolded(true);
                }}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                title="Fold & hide support bubble"
                aria-label="Fold support bubble"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close support dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body Options */}
          <div className="p-3 space-y-2 bg-slate-50/70">
            {/* Primary WhatsApp CTA */}
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hi Shop A Trip, I am planning a holiday in Kashmir & Ladakh. Please help me with itinerary and pricing.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-[#38804b] hover:bg-[#2b693f] active:bg-[#225433] text-white shadow-sm transition-all group"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-xs leading-tight">Chat on WhatsApp</p>
                  <p className="text-[10px] text-slate-200">Direct response from local team</p>
                </div>
              </div>
              <span className="text-[9px] bg-white/20 text-white font-bold px-2 py-0.5 rounded-full">
                Instant
              </span>
            </a>

            {/* Custom Trip Form CTA */}
            <Link
              href="/custom-planner"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-2xl bg-white hover:bg-[#38804b]/5 text-slate-800 border border-slate-200 shadow-2xs transition-all hover:border-[#38804b]/50 group"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#38804b]/10 text-[#38804b] flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-xs text-slate-900 group-hover:text-[#38804b]">Custom Itinerary Planner</p>
                  <p className="text-[10px] text-slate-500">Pick dates, hotel tier &amp; cabs</p>
                </div>
              </div>
              <span className="text-[9px] bg-[#38804b]/10 text-[#38804b] font-bold px-1.5 py-0.5 rounded">
                Plan
              </span>
            </Link>

            {/* Direct Phone Call */}
            <a
              href={`tel:${companyInfo.phones[0]}`}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-lg bg-[#38804b] text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3 h-3" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-xs text-slate-900">Direct Call Helpline</p>
                  <p className="text-[10px] text-slate-500">{companyInfo.phones[0]}</p>
                </div>
              </div>
              <span className="text-[9px] text-[#38804b] font-bold bg-[#38804b]/10 px-2 py-0.5 rounded">Call</span>
            </a>

            {/* Social channels */}
            <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between px-1">
              <span className="text-[10px] font-medium text-slate-500">Follow Updates:</span>
              <div className="flex items-center space-x-1.5">
                <a
                  href={companyInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#E1306C] text-white text-[10px] font-semibold hover:opacity-90 transition-opacity"
                  title="Instagram"
                >
                  <InstagramIcon className="w-2.5 h-2.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href={companyInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#1877F2] text-white text-[10px] font-semibold hover:opacity-90 transition-opacity"
                  title="Facebook"
                >
                  <FacebookIcon className="w-2.5 h-2.5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bar with Fold Option */}
          <div className="px-3.5 py-1.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
            <span className="flex items-center gap-1 font-medium text-[#38804b]">
              <CheckCircle2 className="w-3 h-3" />
              Tangmarg Head Office
            </span>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsFolded(true);
              }}
              className="text-slate-500 hover:text-slate-800 font-semibold underline decoration-slate-300"
            >
              Hide / Fold Widget
            </button>
          </div>
        </div>
      )}

      {/* ─── Floating Button Bar ────────────────────────────── */}
      <div className="flex items-center space-x-2 pointer-events-auto">
        
        {/* Optional temporary status pill */}
        {showPill && !isOpen && (
          <div 
            onClick={handleOpenWidget}
            className="cursor-pointer flex items-center space-x-2 bg-white/95 backdrop-blur-md text-slate-900 px-3 py-1.5 rounded-full shadow-lg border border-slate-200 text-xs font-semibold hover:border-[#38804b] transition-all hover:scale-102 active:scale-95"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleOpenWidget();
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38804b] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38804b]" />
            </span>
            
            <span className="text-[11px] font-bold text-slate-800 hover:text-[#38804b]">
              Need any help contact our Team.
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPill(false);
              }}
              className="text-slate-400 hover:text-slate-700 p-0.5 rounded-full"
              aria-label="Dismiss message"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Floating Support Button */}
        <div className="relative flex items-center">
          <button
            onClick={handleToggleWidget}
            className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full shadow-xl flex items-center justify-center transform hover:scale-105 active:scale-95 transition-all duration-300 relative group cursor-pointer ${
              isOpen
                ? "bg-slate-900 text-white ring-2 ring-slate-300"
                : "bg-[#38804b] text-white ring-2 ring-white/60 hover:ring-white"
            }`}
            aria-label={isOpen ? "Close customer support" : "Open live travel desk"}
            title="Live Travel Support"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <div className="relative flex items-center justify-center">
                <SupportAgentIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white border border-[#38804b]" />
                </span>
              </div>
            )}
          </button>

          {/* Quick Mini Fold Button (Tiny tab right next to bubble on mobile) */}
          {!isOpen && (
            <button
              onClick={() => setIsFolded(true)}
              className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center text-[9px] shadow-xs cursor-pointer"
              title="Minimize & fold support button"
              aria-label="Minimize support button"
            >
              <ChevronDown className="w-2.5 h-2.5" />
            </button>
          )}
        </div>

      </div>
    </aside>
  );
}
