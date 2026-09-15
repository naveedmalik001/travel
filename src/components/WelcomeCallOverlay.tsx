"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Phone, PhoneCall, Volume2, VolumeX, MapPin, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

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
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [dragProgress, setDragProgress] = useState(0); // 0 to 1
  const [isDragging, setIsDragging] = useState(false);
  
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef<number>(0);
  const currentDragRef = useRef<number>(0);

  // Master play audio function: ONLY plays the user's kashmir_calling.mp3 with gentle volume & smooth fade-in
  const startAudioPlayback = useCallback(() => {
    if (isMuted) return;

    if (audioElementRef.current) {
      const audio = audioElementRef.current;
      audio.volume = 0.05; // Start softly
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlayingAudio(true);
            // Smooth gradual volume fade-in to pleasant 0.30 level
            let vol = 0.05;
            const fadeInterval = setInterval(() => {
              vol = Math.min(0.30, vol + 0.04);
              if (audio) audio.volume = vol;
              if (vol >= 0.30) clearInterval(fadeInterval);
            }, 100);
          })
          .catch(() => {
            // Browser autoplay blocked until user gesture
            setIsPlayingAudio(false);
          });
      }
    }
  }, [isMuted]);

  // Answer call action -> seamlessly enters the website and scrolls to absolute TOP
  const handleAnswerCall = useCallback(() => {
    if (isAnswered) return;
    setIsAnswered(true);
    setDragProgress(1);

    if (audioElementRef.current) {
      audioElementRef.current.pause();
      audioElementRef.current.currentTime = 0;
    }

    // Trigger haptic feedback if available on mobile
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try {
        navigator.vibrate([80, 40, 100]);
      } catch {
        // ignore
      }
    }

    // Ensure the viewport is at the top immediately
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    // Show "Welcome to Paradise on Earth" greeting, then smoothly fade out to reveal top of website
    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          sessionStorage.setItem("sat_intro_answered", "true");
        }
      }, 700);
    }, 1400);
  }, [isAnswered]);

  useEffect(() => {
    // Show on page load (session based check so in-app page browsing doesn't re-trigger)
    const hasSeen = typeof window !== "undefined" ? sessionStorage.getItem("sat_intro_answered") : null;
    if (hasSeen) return;

    setIsVisible(true);

    // Ensure view starts at the very top of the page
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    // Initial audio playback attempt
    startAudioPlayback();

    // Dynamic destination slide rotation
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % DESTINATION_SLIDES.length);
    }, 4500);

    // Unblock & start audio on ANY user interaction anywhere on screen
    const unlockAudio = () => {
      startAudioPlayback();
    };
    window.addEventListener("pointerdown", unlockAudio, { passive: true });
    window.addEventListener("touchstart", unlockAudio, { passive: true });
    window.addEventListener("click", unlockAudio, { passive: true });
    window.addEventListener("keydown", unlockAudio, { passive: true });

    return () => {
      clearInterval(slideTimer);
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      if (audioElementRef.current) {
        audioElementRef.current.pause();
      }
    };
  }, [startAudioPlayback]);

  // Touch & Mouse Swipe Handlers for Slide-to-Answer
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnswered) return;
    startAudioPlayback();
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    currentDragRef.current = 0;
  };


  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || isAnswered || !trackRef.current) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startXRef.current;
    const maxTrack = trackRef.current.clientWidth - 64; // button width
    const progress = Math.max(0, Math.min(1, deltaX / Math.max(1, maxTrack)));
    currentDragRef.current = progress;
    setDragProgress(progress);

    if (progress >= 0.85) {
      setIsDragging(false);
      handleAnswerCall();
    }
  };

  const handleTouchEnd = () => {
    if (isAnswered) return;
    setIsDragging(false);
    if (currentDragRef.current < 0.85) {
      setDragProgress(0);
      currentDragRef.current = 0;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isAnswered) return;
    startAudioPlayback();
    setIsDragging(true);
    startXRef.current = e.clientX;
    currentDragRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isAnswered || !trackRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    const maxTrack = trackRef.current.clientWidth - 64;
    const progress = Math.max(0, Math.min(1, deltaX / Math.max(1, maxTrack)));
    currentDragRef.current = progress;
    setDragProgress(progress);

    if (progress >= 0.85) {
      setIsDragging(false);
      handleAnswerCall();
    }
  };

  const handleMouseUp = () => {
    if (isAnswered) return;
    setIsDragging(false);
    if (currentDragRef.current < 0.85) {
      setDragProgress(0);
      currentDragRef.current = 0;
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  if (!isVisible) return null;

  const currentDestination = DESTINATION_SLIDES[currentSlide];

  return (
    <div
      onMouseMove={isDragging ? handleMouseMove : undefined}
      onMouseUp={isDragging ? handleMouseUp : undefined}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between p-4 sm:p-8 overflow-hidden transition-all duration-700 select-none ${
        isFadingOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Background Kashmir Acoustic Audio Track */}
      <audio
        ref={audioElementRef}
        loop
        preload="auto"
        className="hidden"
      >
        <source src="/audio/kashmir_calling.mp3" type="audio/mpeg" />
        <source src="/audio/kashmir_calling.wav" type="audio/wav" />
      </audio>

      {/* Fullscreen HD Destination Background Slideshow */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        {DESTINATION_SLIDES.map((slide, idx) => (
          <div
            key={slide.name}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-75 scale-105" : "opacity-0 scale-100"
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
          <span>{isAnswered ? "Connecting to Paradise..." : "Incoming Travel Call"}</span>
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
              <span className="text-[11px] text-red-300 font-medium">Muted</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="text-[11px] text-emerald-300 font-medium">Ringing</span>
            </>
          )}
        </button>
      </header>

      {/* CENTER CALLER IDENTITY & DESTINATION SHOWCASE */}
      <main className="relative z-10 w-full max-w-md my-auto flex flex-col items-center text-center animate-in zoom-in-95 duration-500 py-3">
        
        {/* Pulsing Destination Avatar with Click-to-Listen Trigger */}
        <div 
          onClick={() => {
            if (!isPlayingAudio) startAudioPlayback();
          }}
          className="relative mb-4 cursor-pointer group"
          title="Tap to play Kashmir music"
        >
          {!isAnswered && (
            <>
              <span className="absolute -inset-4 rounded-full border-2 border-emerald-400/30 animate-ping opacity-60 pointer-events-none" />
              <span className="absolute -inset-8 rounded-full border border-emerald-400/25 animate-pulse pointer-events-none" />
              <span className="absolute -inset-14 rounded-full border border-emerald-400/10 pointer-events-none" />
            </>
          )}

          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-amber-400 shadow-[0_0_40px_rgba(251,191,36,0.35)] group-hover:scale-105 transition-transform duration-300">
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
        
        {/* Clean Company Subtitle WITHOUT AI / Star Icon */}
        <p className="text-emerald-400 font-bold text-base sm:text-lg mt-1 tracking-wide drop-shadow">
          Shop A Trip Tour &amp; Travels
        </p>

        {/* Current Destination Feature Tag */}
        <div className="mt-3 px-4 py-2 rounded-2xl bg-white/10 border border-white/15 max-w-xs backdrop-blur-md shadow-lg">
          <p className="text-xs font-bold text-white flex items-center justify-center gap-1.5">
            <span>📍 {currentDestination.name}</span>
          </p>
          <p className="text-[11px] text-slate-300 mt-0.5 font-medium">
            {currentDestination.tag}
          </p>
        </div>

        {/* Interactive Tap-To-Listen Callout / Dynamic Equalizer */}
        <div 
          onClick={() => {
            if (!isPlayingAudio) startAudioPlayback();
          }}
          className={`flex items-center gap-2 mt-4 px-4 py-2 rounded-full border transition-all cursor-pointer ${
            isPlayingAudio 
              ? "bg-slate-900/70 border-emerald-400/40 text-emerald-300 shadow-md"
              : "bg-emerald-600/90 hover:bg-emerald-500 border-white/50 text-white shadow-[0_0_25px_rgba(16,185,129,0.7)] animate-bounce"
          }`}
        >
          {isPlayingAudio ? (
            <>
              <span className="w-1.5 h-3.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-6 bg-emerald-400 rounded-full animate-bounce" />
              <span className="w-1.5 h-5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-3.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="text-xs text-slate-200 ml-1 font-semibold">
                {isAnswered ? "Call Connected • Entering..." : "🎵 Playing Kashmir Calling"}
              </span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-amber-300 animate-pulse" />
              <span className="text-xs font-extrabold text-white tracking-wide">
                🔊 Tap to Hear Kashmir Ringtone
              </span>
            </>
          )}
        </div>
      </main>

      {/* BOTTOM FOOTER: Interactive Swipe / Slide to Answer */}
      <footer className="relative z-10 w-full max-w-md flex flex-col items-center pb-4 sm:pb-8 animate-in fade-in slide-in-from-bottom-6 duration-500">
        {!isAnswered ? (
          <div className="flex flex-col items-center gap-3 w-full px-2">
            
            {/* Interactive Swipe Track */}
            <div
              ref={trackRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              className="relative w-full h-16 rounded-full bg-slate-900/80 border-2 border-emerald-500/40 backdrop-blur-xl p-1.5 flex items-center shadow-[0_0_35px_rgba(16,185,129,0.3)] overflow-hidden cursor-pointer select-none"
            >
              {/* Dynamic Fill Gradient following drag progress */}
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-600/60 via-emerald-500/70 to-green-400/80 rounded-full transition-all"
                style={{
                  width: `${Math.max(16, dragProgress * 100)}%`,
                  transition: isDragging ? "none" : "width 0.3s ease"
                }}
              />

              {/* Glowing Ambient Chevrons & Slide Instruction */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none pl-12 pr-4">
                <span className="text-xs sm:text-sm font-extrabold text-white/90 tracking-wider uppercase flex items-center gap-1 drop-shadow">
                  <span>Swipe to Answer</span>
                  <ChevronRight className="w-4 h-4 text-emerald-300 animate-pulse [animation-delay:-0.3s]" />
                  <ChevronRight className="w-4 h-4 text-emerald-300 animate-pulse [animation-delay:-0.15s]" />
                  <ChevronRight className="w-4 h-4 text-emerald-300 animate-pulse" />
                </span>
              </div>

              {/* Draggable & Tappable Answer Button Handle */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleAnswerCall();
                }}
                className="relative z-10 w-13 h-13 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 border-2 border-white/80 flex items-center justify-center text-white shadow-[0_0_25px_rgba(34,197,94,0.9)] hover:scale-105 active:scale-95 transition-transform cursor-grab active:cursor-grabbing"
                style={{
                  transform: trackRef.current
                    ? `translateX(${dragProgress * Math.max(0, trackRef.current.clientWidth - 64)}px)`
                    : "none",
                  transition: isDragging ? "none" : "transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)"
                }}
              >
                <Phone className="w-6 h-6 fill-current animate-bounce" />
              </div>
            </div>

            {/* Direct Tap Alternative Hint */}
            <div className="flex items-center justify-center gap-2 mt-0.5">
              <button
                type="button"
                onClick={handleAnswerCall}
                className="text-xs font-semibold text-emerald-300/90 hover:text-emerald-200 underline underline-offset-4 decoration-emerald-500/50 cursor-pointer transition-colors"
              >
                or tap here to answer directly
              </button>
            </div>
          </div>
        ) : (
          /* Welcome to Paradise on Earth Greeting Card upon Answering */
          <div className="w-full max-w-sm py-4 px-6 rounded-2xl bg-emerald-950/95 border-2 border-emerald-400/80 text-center shadow-[0_0_50px_rgba(16,185,129,0.5)] backdrop-blur-xl animate-in zoom-in-90 duration-500 flex flex-col items-center gap-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 text-amber-300 text-xs font-extrabold border border-amber-400/40">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Call Connected</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1 drop-shadow-md">
              Welcome to Paradise on Earth
            </h2>
            
            <p className="text-xs text-emerald-200/90 font-medium">
              Shop A Trip Tour &amp; Travels • Entering website...
            </p>
          </div>
        )}

        <p className="text-[11px] text-slate-400/90 mt-4 text-center">
          Shop A Trip Tour &amp; Travels • Tangmarg &amp; Gulmarg, Kashmir
        </p>
      </footer>
    </div>
  );
}


