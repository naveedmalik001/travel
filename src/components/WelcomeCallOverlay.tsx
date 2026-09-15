"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, PhoneCall, Volume2, VolumeX, Sparkles, MapPin, CheckCircle2, Waves, ArrowRight } from "lucide-react";

// Authentic curated destinations across Kashmir & Ladakh
const DESTINATION_SLIDES = [
  {
    name: "Gulmarg Snow Valley",
    region: "Kashmir",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1400&q=85",
    tag: "Apharwat Peak & Alpine Slopes"
  },
  {
    name: "Dal Lake, Srinagar",
    region: "Kashmir",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1400&q=85",
    tag: "Golden Sunset Shikara & Houseboats"
  },
  {
    name: "Betaab Valley, Pahalgam",
    region: "Kashmir",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1400&q=85",
    tag: "Glacial Lidder River & Pine Meadows"
  },
  {
    name: "Pangong Tso & Nubra Valley",
    region: "Ladakh",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1400&q=85",
    tag: "High-Altitude Turquoise Waters & Passes"
  },
  {
    name: "Sonmarg Glacier",
    region: "Kashmir",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
    tag: "Thajiwas Glacier & Meadow of Gold"
  }
];

export default function WelcomeCallOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const ringIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Synthesize realistic harmonious incoming phone ringtone
  const playRingBurst = () => {
    if (isMuted) return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioCtxRef.current || audioCtxRef.current.state === "closed") {
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }

      const now = ctx.currentTime;

      // Realistic marimba-like bell ringtone chord
      const playTone = (freq1: number, freq2: number, start: number, dur: number) => {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = "sine";
        osc2.type = "triangle";
        osc1.frequency.setValueAtTime(freq1, start);
        osc2.frequency.setValueAtTime(freq2, start);

        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.15, start + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, start + dur);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(start);
        osc2.start(start);
        osc1.stop(start + dur);
        osc2.stop(start + dur);
      };

      // 1st Double Ring
      playTone(523.25, 659.25, now + 0.05, 0.38); // C5 + E5
      playTone(659.25, 783.99, now + 0.48, 0.42); // E5 + G5

      // 2nd Double Ring
      playTone(523.25, 659.25, now + 1.20, 0.38);
      playTone(783.99, 1046.50, now + 1.62, 0.48); // G5 + C6
    } catch {
      // Audio autoplay policy fallback
    }
  };

  // Play pleasant "call connected / entrance" chime on Answer
  const playAnswerChime = () => {
    try {
      if (ringIntervalRef.current) {
        clearInterval(ringIntervalRef.current);
      }
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = audioCtxRef.current || new AudioContextClass();
      if (ctx.state === "suspended") ctx.resume();

      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C - E - G - High C
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0, now + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.20, now + idx * 0.1 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.4);
      });
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    // Show on page load (session based check so in-app page browsing doesn't re-trigger)
    const hasSeen = typeof window !== "undefined" ? sessionStorage.getItem("sat_intro_answered") : null;
    if (hasSeen) return;

    setIsVisible(true);

    // Initial ringtone attempt
    playRingBurst();

    // Repeat ringtone every 3.2 seconds until answered
    ringIntervalRef.current = setInterval(() => {
      playRingBurst();
    }, 3200);

    // Dynamic destination slide rotation
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % DESTINATION_SLIDES.length);
    }, 4500);

    // Resume audio context on any user touch/gesture
    const unlockAudio = () => {
      if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
        playRingBurst();
      }
    };
    window.addEventListener("pointerdown", unlockAudio, { once: true });

    return () => {
      if (ringIntervalRef.current) clearInterval(ringIntervalRef.current);
      clearInterval(slideTimer);
      window.removeEventListener("pointerdown", unlockAudio);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Answer call action -> seamlessly enters the website
  const handleAnswerCall = () => {
    if (isAnswered) return;
    setIsAnswered(true);
    playAnswerChime();

    // Trigger haptic feedback if available
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate([80, 50, 80]);
    }

    // Show "Call Connected" animation, then smoothly fade out to reveal website
    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("sat_intro_answered", "true");
        }
      }, 600);
    }, 950);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  if (!isVisible) return null;

  const currentDestination = DESTINATION_SLIDES[currentSlide];

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between p-4 sm:p-8 overflow-hidden transition-all duration-700 select-none ${
        isFadingOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Fullscreen HD Destination Background Slideshow */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        {DESTINATION_SLIDES.map((slide, idx) => (
          <div
            key={slide.name}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-70 scale-105" : "opacity-0 scale-100"
            }`}
            style={{ transition: "opacity 1.5s ease, transform 8s ease" }}
          >
            <Image
              src={slide.image}
              alt={slide.name}
              fill
              priority={idx === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Ambient Dark Gradient Mesh Overlay for Phone Call Aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/95 backdrop-blur-[6px]" />
      </div>

      {/* TOP HEADER: Call Type & Audio Toggle */}
      <header className="relative z-10 w-full max-w-md flex items-center justify-between pt-2 sm:pt-4 animate-in fade-in slide-in-from-top-4 duration-500">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-400/40 text-emerald-300 text-xs font-semibold backdrop-blur-md shadow-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span>{isAnswered ? "Call Connected" : "Incoming Travel Call"}</span>
        </div>

        <button
          onClick={toggleMute}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-white/15 text-slate-300 hover:text-white transition-all text-xs backdrop-blur-md shadow-lg cursor-pointer"
          title={isMuted ? "Unmute Ringtone" : "Mute Ringtone"}
          aria-label="Toggle Sound"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-red-400" />
              <span className="text-[11px] text-red-300">Muted</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="text-[11px] text-emerald-300">Ringing</span>
            </>
          )}
        </button>
      </header>

      {/* CENTER CALLER IDENTITY & DESTINATION SHOWCASE */}
      <main className="relative z-10 w-full max-w-md my-auto flex flex-col items-center text-center animate-in zoom-in-95 duration-500 py-4">
        
        {/* Pulsing Destination Avatar */}
        <div className="relative mb-6">
          {!isAnswered && (
            <>
              <span className="absolute -inset-4 rounded-full border-2 border-emerald-400/30 animate-ping opacity-60 pointer-events-none" />
              <span className="absolute -inset-8 rounded-full border border-emerald-400/25 animate-pulse pointer-events-none" />
              <span className="absolute -inset-14 rounded-full border border-emerald-400/10 pointer-events-none" />
            </>
          )}

          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-amber-400 shadow-[0_0_40px_rgba(251,191,36,0.35)]">
            <Image
              src={currentDestination.image}
              alt={currentDestination.name}
              fill
              className="object-cover scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
            
            {/* Center Phone Call Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-emerald-600/90 border border-white/40 backdrop-blur-md flex items-center justify-center shadow-2xl">
                {isAnswered ? (
                  <CheckCircle2 className="w-7 h-7 text-white animate-bounce" />
                ) : (
                  <PhoneCall className="w-7 h-7 text-white animate-pulse" />
                )}
              </div>
            </div>
          </div>

          {/* Region Badge */}
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1 rounded-full bg-slate-950/90 border border-amber-400/70 text-amber-300 text-xs font-extrabold flex items-center gap-1.5 shadow-2xl">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentDestination.region}</span>
          </div>
        </div>

        {/* Primary Caller Header */}
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-xl">
          Kashmir Calling...
        </h1>
        
        <p className="text-emerald-400 font-bold text-base sm:text-lg mt-1.5 flex items-center gap-2 justify-center drop-shadow">
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
          <span>Shop A Trip Tour &amp; Travels</span>
        </p>

        {/* Current Destination Feature Tag */}
        <div className="mt-4 px-4 py-2.5 rounded-2xl bg-white/10 border border-white/15 max-w-xs backdrop-blur-md shadow-lg">
          <p className="text-xs font-bold text-white flex items-center justify-center gap-1.5">
            <span>📍 {currentDestination.name}</span>
          </p>
          <p className="text-[11px] text-slate-300 mt-0.5 font-medium">
            {currentDestination.tag}
          </p>
        </div>

        {/* Dynamic Animated Call Equalizer */}
        <div className="flex items-center gap-1.5 mt-5 px-4 py-1.5 rounded-full bg-slate-900/60 border border-white/10">
          <span className="w-1 h-3.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="w-1 h-6 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-1 h-8 bg-emerald-400 rounded-full animate-bounce" />
          <span className="w-1 h-6 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-1 h-3.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="text-xs text-slate-200 ml-2 font-medium">
            {isAnswered ? "Call Connected • Entering Site..." : "Audio Call • Kashmir Concierge"}
          </span>
        </div>
      </main>

      {/* BOTTOM FOOTER: Prominent Glowing Answer Button */}
      <footer className="relative z-10 w-full max-w-md flex flex-col items-center pb-4 sm:pb-8 animate-in fade-in slide-in-from-bottom-6 duration-500">
        {!isAnswered ? (
          <div className="flex flex-col items-center gap-3 w-full">
            {/* Glowing Answer Button */}
            <button
              onClick={handleAnswerCall}
              className="group relative w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 hover:from-emerald-500 hover:to-green-300 active:scale-95 border-3 border-white/70 text-white flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.8)] transition-all cursor-pointer transform hover:scale-110"
              aria-label="Answer Call to Enter Website"
            >
              {/* Outer Pulsing Wave Rings */}
              <span className="absolute -inset-3 rounded-full border-2 border-emerald-400/60 animate-ping pointer-events-none" />
              <span className="absolute -inset-6 rounded-full border border-emerald-400/30 animate-pulse pointer-events-none" />
              
              <Phone className="w-9 h-9 sm:w-10 sm:h-10 fill-current animate-bounce group-hover:scale-110 transition-transform" />
            </button>

            {/* Tap to Answer Guidance */}
            <div className="flex flex-col items-center gap-1 mt-1">
              <span className="text-sm font-extrabold text-white tracking-wide flex items-center gap-1.5 drop-shadow">
                <span>Tap to Answer &amp; Enter</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 animate-pulse" />
              </span>
              <span className="text-[11px] text-slate-300 font-medium">
                Answer the call to explore Kashmir tour packages
              </span>
            </div>
          </div>
        ) : (
          <div className="py-3.5 px-8 rounded-2xl bg-emerald-950/90 border border-emerald-400/60 text-emerald-200 text-sm font-bold flex items-center justify-center gap-2.5 shadow-2xl backdrop-blur-md animate-pulse">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Welcome to Shop A Trip! Loading paradise...</span>
          </div>
        )}

        <p className="text-[11px] text-slate-400/90 mt-5 text-center">
          Shop A Trip Tour &amp; Travels • Kashmir, Gulmarg, Gurez &amp; Ladakh
        </p>
      </footer>
    </div>
  );
}


