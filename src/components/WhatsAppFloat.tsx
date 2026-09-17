"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { companyInfo } from "@/data/company";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import SupportAgentIcon from "@/components/SupportAgentIcon";
import { 
  MessageSquare, 
  X, 
  Phone, 
  FileText, 
  CheckCircle2,
  Radio
} from "lucide-react";

// Web Audio API beep / chime generator on click
const playSupportBeep = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    
    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    
    const now = ctx.currentTime;
    
    // Tone 1: 587.33 Hz (D5)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(587.33, now);
    gain1.gain.setValueAtTime(0.18, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.28);

    // Tone 2: 880 Hz (A5) - bright, friendly chime
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(880, now + 0.08);
    gain2.gain.setValueAtTime(0.22, now + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.08);
    osc2.stop(now + 0.45);
  } catch (e) {
    // AudioContext blocked or not supported on device
  }
};

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Automatically ensure bubble is visible on initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenWidget = useCallback(() => {
    playSupportBeep();
    setIsOpen(true);
    setShowBubble(false);
  }, []);

  const handleToggleWidget = useCallback(() => {
    playSupportBeep();
    setIsOpen((prev) => !prev);
    setShowBubble(false);
  }, []);

  if (isDismissed) {
    return (
      <button
        onClick={() => {
          setIsDismissed(false);
          handleOpenWidget();
        }}
        className="fixed bottom-4 right-4 z-40 p-2.5 rounded-full bg-[#38804e] text-white shadow-xl hover:bg-[#2b693f] transition-all border border-emerald-400/50 text-xs flex items-center gap-2 hover:scale-105"
        title="Open Support & Travel Desk"
      >
        <SupportAgentIcon className="w-5 h-5 text-white animate-pulse" />
        <span className="font-bold hidden sm:inline">Our Team is Live</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Expanded Multi-Channel Support & Contact Card */}
      {isOpen && (
        <div className="mb-3 w-[305px] sm:w-[340px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0B1E15] via-[#133527] to-[#0B1E15] text-white p-4 flex items-center justify-between border-b border-emerald-900/60">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#38804e] border-2 border-white/60 flex items-center justify-center text-white shadow-inner">
                  <SupportAgentIcon className="w-6 h-6 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0B1E15] animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm text-white leading-tight">Live Travel Support</h4>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-[#38804e]/40 text-emerald-300 uppercase tracking-wide border border-emerald-400/30">
                    ONLINE
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-200 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Support agents on duty now</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close support card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body actions */}
          <div className="p-3.5 space-y-2.5 bg-slate-50/50">
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent("Hi ShopATrip, I am planning a trip to Kashmir. Please help me with itinerary.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-[#38804e] hover:bg-[#2b693f] text-white shadow-md transition-all hover:scale-[1.02] group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-xs leading-tight">Chat on WhatsApp</p>
                  <p className="text-[11px] text-white/90">Instant custom quotes &amp; itineraries</p>
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
              className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-emerald-50 text-slate-800 border border-slate-200 shadow-sm transition-all hover:border-[#38804e]/50 hover:scale-[1.02] group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-[#38804e]/10 text-[#38804e] flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-xs text-slate-900 group-hover:text-[#38804e]">Fill Trip Planner Form</p>
                  <p className="text-[11px] text-slate-500">Pick custom dates, car &amp; stays</p>
                </div>
              </div>
              <span className="text-[10px] bg-[#38804e]/10 text-[#38804e] font-bold px-2 py-0.5 rounded-full">
                Custom
              </span>
            </Link>

            {/* Direct Call CTA */}
            <a
              href={`tel:${companyInfo.phones[0]}`}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 transition-colors"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#38804e] text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-xs text-slate-900">Direct Support Call</p>
                  <p className="text-[10px] text-slate-500">{companyInfo.phones[0]}</p>
                </div>
              </div>
              <span className="text-[10px] text-[#38804e] font-bold bg-[#38804e]/10 px-2 py-0.5 rounded border border-[#38804e]/20">Call Now</span>
            </a>

            {/* Social Media Links Row */}
            <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between px-1">
              <span className="text-[11px] font-medium text-slate-500">Social Channels:</span>
              <div className="flex items-center space-x-2">
                <a
                  href={companyInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#E1306C] text-white text-[11px] font-semibold hover:opacity-90 transition-opacity shadow-sm"
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
            <span className="flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3 h-3 text-[#38804e]" />
              Curated by local team
            </span>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-slate-400 hover:text-slate-600 underline"
            >
              Hide
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Bar (Caption Pill + Customer Support Agent Icon) */}
      <div className="flex items-center space-x-2.5">
        {/* Animated Live Status Pill: 'Our Team is Live' */}
        {showBubble && !isOpen && (
          <div 
            onClick={handleOpenWidget}
            className="cursor-pointer group flex items-center space-x-2 bg-white/95 backdrop-blur-md text-slate-900 px-3.5 py-2 rounded-2xl shadow-xl border border-[#38804e]/40 text-xs font-semibold hover:border-[#38804e] transition-all transform hover:scale-[1.02] active:scale-95"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleOpenWidget();
            }}
          >
            {/* Pulsing Live Green Indicator */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38804e] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38804e]" />
            </span>
            
            <div className="flex flex-col text-left">
              <span className="text-[12px] font-bold text-slate-900 group-hover:text-[#38804e] transition-colors">
                Our Team is Live
              </span>
              <span className="text-[10px] text-slate-500 font-normal leading-none">
                Click for instant assistance
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowBubble(false);
              }}
              className="text-slate-400 hover:text-slate-700 ml-1 p-0.5 rounded-full hover:bg-slate-100"
              aria-label="Dismiss caption"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Floating Support Button with Professional Agent Headset Icon */}
        <button
          onClick={handleToggleWidget}
          className={`w-14 h-14 sm:w-15 sm:h-15 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-105 active:scale-95 transition-all duration-300 relative group ${
            isOpen
              ? "bg-slate-900 text-white ring-4 ring-slate-300"
              : "bg-gradient-to-tr from-[#0c2418] via-[#1a4f32] to-[#38804e] text-white ring-4 ring-[#38804e]/40 hover:ring-[#38804e]"
          }`}
          aria-label={isOpen ? "Close customer support" : "Open live customer support"}
          title="Live Travel Support Agents"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              {/* Professional Customer Support Agent with Headset */}
              <div className="relative flex items-center justify-center">
                <SupportAgentIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white transition-transform group-hover:scale-110" />
                {/* Micro Live Wave Indicator */}
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-90" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-slate-950" />
                </span>
              </div>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
