"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Phone, PhoneCall, Volume2, VolumeX, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

// Authentic curated destinations across Kashmir & Ladakh
const DESTINATION_SLIDES = [
  {
    name: "Gulmarg Snow Valley",
    region: "Kashmir",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1400&q=85",
    tag: "Apharwat Peak & Alpine Slopes",
    color: "#34d399"
  },
  {
    name: "Dal Lake, Srinagar",
    region: "Kashmir",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1400&q=85",
    tag: "Golden Sunset Shikara & Houseboats",
    color: "#f59e0b"
  },
  {
    name: "Betaab Valley, Pahalgam",
    region: "Kashmir",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1400&q=85",
    tag: "Glacial Lidder River & Pine Meadows",
    color: "#6ee7b7"
  },
  {
    name: "Pangong Tso & Nubra Valley",
    region: "Ladakh",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1400&q=85",
    tag: "High-Altitude Turquoise Waters & Passes",
    color: "#38bdf8"
  },
  {
    name: "Sonmarg Glacier",
    region: "Kashmir",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
    tag: "Thajiwas Glacier & Meadow of Gold",
    color: "#fbbf24"
  }
];

/* ── Animated Equalizer Bars ──────────────────────────────────────────── */
function EqualizerBars() {
  return (
    <span className="inline-flex items-end gap-[3px] h-5" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className="block w-[3px] rounded-full bg-[#38804b]"
          style={{
            height: `${[10, 18, 14, 20, 12][i]}px`,
            animation: `equalizerPulse 0.9s ease-in-out ${i * 0.12}s infinite alternate`,
          }}
        />
      ))}
    </span>
  );
}

/* ── Ripple Rings ──────────────────────────────────────────────────────── */
function RippleRings() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className="absolute rounded-full border border-[#38804b]/25 pointer-events-none"
          style={{
            inset: `-${i * 20}px`,
            animation: `ripple 2.4s ease-out ${i * 0.6}s infinite`,
          }}
        />
      ))}
    </>
  );
}

export default function WelcomeCallOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef<number>(0);
  const currentDragRef = useRef<number>(0);

  const startAudioPlayback = useCallback(() => {
    if (isMuted) return;
    if (audioElementRef.current) {
      const audio = audioElementRef.current;
      audio.volume = 0.05;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlayingAudio(true);
            let vol = 0.05;
            const fadeInterval = setInterval(() => {
              vol = Math.min(0.30, vol + 0.04);
              if (audio) audio.volume = vol;
              if (vol >= 0.30) clearInterval(fadeInterval);
            }, 100);
          })
          .catch(() => setIsPlayingAudio(false));
      }
    }
  }, [isMuted]);

  const handleAnswerCall = useCallback(() => {
    if (isAnswered) return;
    setIsAnswered(true);
    setDragProgress(1);

    if (audioElementRef.current) {
      audioElementRef.current.pause();
      audioElementRef.current.currentTime = 0;
    }

    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try { navigator.vibrate([80, 40, 100]); } catch { /* ignore */ }
    }

    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          sessionStorage.setItem("sat_intro_answered", "true");
        }
      }, 800);
    }, 1600);
  }, [isAnswered]);

  useEffect(() => {
    const hasSeen = typeof window !== "undefined" ? sessionStorage.getItem("sat_intro_answered") : null;
    if (hasSeen) return;

    setIsVisible(true);

    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    startAudioPlayback();

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % DESTINATION_SLIDES.length);
    }, 4500);

    const unlockAudio = () => startAudioPlayback();
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
      if (audioElementRef.current) audioElementRef.current.pause();
    };
  }, [startAudioPlayback]);

  /* ── Drag/Swipe Handlers ── */
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnswered) return;
    startAudioPlayback();
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    currentDragRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || isAnswered || !trackRef.current) return;
    const deltaX = e.touches[0].clientX - startXRef.current;
    const maxTrack = trackRef.current.clientWidth - 68;
    const progress = Math.max(0, Math.min(1, deltaX / Math.max(1, maxTrack)));
    currentDragRef.current = progress;
    setDragProgress(progress);
    if (progress >= 0.85) { setIsDragging(false); handleAnswerCall(); }
  };

  const handleTouchEnd = () => {
    if (isAnswered) return;
    setIsDragging(false);
    if (currentDragRef.current < 0.85) { setDragProgress(0); currentDragRef.current = 0; }
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
    const maxTrack = trackRef.current.clientWidth - 68;
    const progress = Math.max(0, Math.min(1, deltaX / Math.max(1, maxTrack)));
    currentDragRef.current = progress;
    setDragProgress(progress);
    if (progress >= 0.85) { setIsDragging(false); handleAnswerCall(); }
  };

  const handleMouseUp = () => {
    if (isAnswered) return;
    setIsDragging(false);
    if (currentDragRef.current < 0.85) { setDragProgress(0); currentDragRef.current = 0; }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  if (!isVisible) return null;

  const dest = DESTINATION_SLIDES[currentSlide];

  return (
    <>
      {/* ── Keyframe Styles ──────────────────────────────────────────── */}
      <style>{`
        @keyframes ripple {
          0%   { transform: scale(1);    opacity: 0.5; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        @keyframes equalizerPulse {
          from { transform: scaleY(0.4); }
          to   { transform: scaleY(1);   }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-6px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 50%;   }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%;   }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1);    }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0);     }
        }
        .wco-slide-up   { animation: slideUp 0.55s cubic-bezier(0.16,1,0.3,1) both; }
        .wco-scale-in   { animation: scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .wco-slide-down { animation: slideDown 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .wco-float      { animation: floatUp 3s ease-in-out infinite; }
        .wco-shimmer-text {
          background: linear-gradient(90deg, #fff 20%, #fbbf24 50%, #fff 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .wco-btn-glow {
          box-shadow: 0 0 24px 4px rgba(52,211,153,0.45), 0 4px 16px rgba(0,0,0,0.4);
          transition: box-shadow 0.2s ease, transform 0.15s ease;
        }
        .wco-btn-glow:hover {
          box-shadow: 0 0 36px 8px rgba(52,211,153,0.6), 0 4px 24px rgba(0,0,0,0.5);
          transform: scale(1.05);
        }
        .wco-btn-glow:active {
          transform: scale(0.95);
        }
        .wco-track {
          box-shadow: 0 0 30px 4px rgba(52,211,153,0.18), inset 0 1px 0 rgba(255,255,255,0.07);
        }
        .wco-connected-card {
          animation: scaleIn 0.4s cubic-bezier(0.16,1,0.3,1) both;
        }
      `}</style>

      {/* ── Root Container ───────────────────────────────────────────── */}
      <div
        onMouseMove={isDragging ? handleMouseMove : undefined}
        onMouseUp={isDragging ? handleMouseUp : undefined}
        className="fixed inset-0 z-[9999] flex flex-col items-center select-none overflow-hidden"
        style={{
          transition: "opacity 0.8s ease, transform 0.8s ease",
          opacity: isFadingOut ? 0 : 1,
          transform: isFadingOut ? "scale(1.04)" : "scale(1)",
          pointerEvents: isFadingOut ? "none" : "auto",
        }}
      >
        {/* ── Audio ─────────────────────────────────────────────────── */}
        <audio ref={audioElementRef} loop preload="auto" className="hidden">
          <source src="/audio/kashmir_calling.mp3" type="audio/mpeg" />
          <source src="/audio/kashmir_calling.wav" type="audio/wav" />
        </audio>

        {/* ── Background Slideshow ──────────────────────────────────── */}
        <div className="absolute inset-0 z-0" style={{ background: "#050d18" }}>
          {DESTINATION_SLIDES.map((slide, idx) => (
            <div
              key={slide.name}
              className="absolute inset-0"
              style={{
                opacity: idx === currentSlide ? 1 : 0,
                transition: "opacity 1.6s ease",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.name}
                fill
                priority={idx === 0}
                className="object-cover"
                sizes="100vw"
                style={{
                  transform: idx === currentSlide ? "scale(1.06)" : "scale(1)",
                  transition: "transform 8s ease",
                  opacity: 0.55,
                }}
              />
            </div>
          ))}

          {/* Deep vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,13,24,0.85) 0%, rgba(5,13,24,0.42) 35%, rgba(5,13,24,0.55) 65%, rgba(5,13,24,0.97) 100%)",
              backdropFilter: "blur(4px)",
            }}
          />
          {/* Ambient blobs */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-10%", left: "15%",
              width: "50vw", height: "50vw",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(52,211,153,0.09) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "8%", right: "-8%",
              width: "42vw", height: "42vw",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
        </div>

        {/* ── Content Stack ─────────────────────────────────────────── */}
        <div
          className="relative z-10 w-full h-full flex flex-col items-center justify-between max-w-md mx-auto px-5"
          style={{
            paddingTop: "max(env(safe-area-inset-top, 0px), 16px)",
            paddingBottom: "max(env(safe-area-inset-bottom, 0px), 20px)",
          }}
        >
          {/* ── TOP BAR ─────────────────────────────────────────────── */}
          <header className="wco-slide-down w-full flex items-center justify-between pt-2">
            <div
              className="flex items-center gap-2 pl-3 pr-4 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(5,13,24,0.72)",
                border: "1px solid rgba(52,211,153,0.35)",
                backdropFilter: "blur(14px)",
                color: "#6ee7b7",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38804b] opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38804b]" />
              </span>
              <span>{isAnswered ? "Connecting…" : "Incoming Call"}</span>
            </div>

            <button
              onClick={toggleMute}
              aria-label="Toggle Sound"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer"
              style={{
                background: "rgba(5,13,24,0.72)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(14px)",
                color: isMuted ? "#f87171" : "#6ee7b7",
                transition: "color 0.2s ease",
              }}
            >
              {isMuted ? (
                <><VolumeX className="w-3.5 h-3.5" /><span>Muted</span></>
              ) : (
                <><Volume2 className="w-3.5 h-3.5 animate-pulse" /><span>Ringing</span></>
              )}
            </button>
          </header>

          {/* ── CENTER IDENTITY ──────────────────────────────────────── */}
          <main className="wco-scale-in flex flex-col items-center text-center w-full gap-0 my-auto py-2">

            {/* Avatar with ripple rings */}
            <div
              className="wco-float relative mb-6 cursor-pointer"
              onClick={() => { if (!isPlayingAudio) startAudioPlayback(); }}
              title="Tap to play Kashmir music"
            >
              {!isAnswered && <RippleRings />}

              {/* Gradient ring */}
              <div
                className="relative rounded-full p-[3px]"
                style={{
                  background: "linear-gradient(135deg, #34d399, #fbbf24, #34d399)",
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 4s ease infinite",
                  boxShadow: "0 0 50px rgba(52,211,153,0.3), 0 0 100px rgba(52,211,153,0.1)",
                }}
              >
                <div
                  className="relative rounded-full overflow-hidden"
                  style={{ width: 148, height: 148, background: "#0a1628" }}
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover"
                    style={{ transform: "scale(1.1)", opacity: 1, transition: "opacity 0.8s ease" }}
                  />
                  {/* Inner vignette */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(5,13,24,0.65) 0%, transparent 60%)" }}
                  />
                  {/* Phone icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: 52,
                        height: 52,
                        background: isAnswered
                          ? "linear-gradient(135deg, #059669, #10b981)"
                          : "linear-gradient(135deg, #10b981, #34d399)",
                        boxShadow: "0 4px 20px rgba(16,185,129,0.65)",
                        border: "2px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      {isAnswered
                        ? <CheckCircle2 className="w-6 h-6 text-white" />
                        : <PhoneCall className="w-6 h-6 text-white animate-pulse" />
                      }
                    </div>
                  </div>
                </div>
              </div>

              {/* Region badge */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  background: "rgba(5,13,24,0.92)",
                  border: "1px solid rgba(251,191,36,0.5)",
                  color: "#fbbf24",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 2px 14px rgba(251,191,36,0.2)",
                }}
              >
                <MapPin className="w-3 h-3" />
                <span>{dest.region}</span>
              </div>
            </div>

            {/* Title */}
            <h1
              className="font-black text-white mt-2"
              style={{ fontSize: "clamp(2rem,7vw,2.75rem)", lineHeight: 1.08, letterSpacing: "-0.03em" }}
            >
              <span className="wco-shimmer-text">Kashmir Calling</span>
              <span>…</span>
            </h1>

            <p
              className="text-sm sm:text-base font-semibold mt-2 tracking-wide"
              style={{ color: "#6ee7b7" }}
            >
              Shop A Trip Tour &amp; Travels
            </p>

            {/* Destination info card */}
            <div
              className="mt-5 w-full max-w-xs rounded-2xl px-4 py-3 text-left"
              style={{
                background: "rgba(255,255,255,0.055)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(18px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.28)",
              }}
            >
              <div className="flex items-start gap-2.5 mb-2">
                <div
                  className="mt-0.5 w-1.5 rounded-full flex-shrink-0"
                  style={{
                    height: 40,
                    background: `linear-gradient(to bottom, ${dest.color}, transparent)`,
                  }}
                />
                <div>
                  <p className="text-xs font-bold text-white leading-tight">📍 {dest.name}</p>
                  <p className="text-[11px] mt-0.5 leading-snug" style={{ color: "#94a3b8" }}>
                    {dest.tag}
                  </p>
                </div>
              </div>

              {/* Slide dots */}
              <div className="flex items-center gap-1.5 pl-4">
                {DESTINATION_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className="rounded-full cursor-pointer"
                    style={{
                      width: i === currentSlide ? 20 : 6,
                      height: 6,
                      background: i === currentSlide ? dest.color : "rgba(255,255,255,0.22)",
                      transition: "width 0.3s ease, background 0.3s ease",
                      border: "none",
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Audio status */}
            <div
              className="mt-4 flex items-center gap-2.5 px-4 py-2 rounded-full cursor-pointer"
              onClick={() => { if (!isPlayingAudio) startAudioPlayback(); }}
              style={{
                background: isPlayingAudio ? "rgba(5,13,24,0.6)" : "rgba(16,185,129,0.85)",
                border: `1px solid ${isPlayingAudio ? "rgba(52,211,153,0.28)" : "rgba(255,255,255,0.28)"}`,
                backdropFilter: "blur(12px)",
                boxShadow: isPlayingAudio ? "none" : "0 0 24px rgba(16,185,129,0.45)",
                color: "#fff",
                transition: "all 0.3s ease",
              }}
            >
              {isPlayingAudio ? (
                <>
                  <EqualizerBars />
                  <span className="text-xs font-semibold" style={{ color: "#cbd5e1" }}>
                    {isAnswered ? "Call Connected · Entering…" : "🎵 Playing Kashmir Calling"}
                  </span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-[#38804b]" />
                  <span className="text-xs font-extrabold tracking-wide">Tap to hear Kashmir ringtone</span>
                </>
              )}
            </div>
          </main>

          {/* ── BOTTOM ACTIONS ───────────────────────────────────────── */}
          <footer
            className="wco-slide-up w-full flex flex-col items-center gap-3 pb-2"
            style={{ animationDelay: "0.1s" }}
          >
            {!isAnswered ? (
              <>
                {/* Swipe track */}
                <div
                  ref={trackRef}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  onMouseDown={handleMouseDown}
                  className="wco-track relative w-full rounded-full p-2 flex items-center overflow-hidden cursor-pointer"
                  style={{
                    height: 68,
                    background: "rgba(5,13,24,0.78)",
                    border: "1.5px solid rgba(52,211,153,0.28)",
                    backdropFilter: "blur(20px)",
                    userSelect: "none",
                  }}
                >
                  {/* Drag fill */}
                  <div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      width: `${Math.max(8, dragProgress * 100)}%`,
                      background: "linear-gradient(90deg, rgba(16,185,129,0.3) 0%, rgba(52,211,153,0.55) 100%)",
                      transition: isDragging ? "none" : "width 0.35s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  />

                  {/* Label */}
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{ paddingLeft: 80, paddingRight: 16 }}
                  >
                    <span className="text-xs sm:text-sm font-extrabold tracking-[0.08em] uppercase flex items-center gap-0.5" style={{ color: "rgba(255,255,255,0.75)" }}>
                      Swipe to Answer
                      <ChevronRight className="w-4 h-4 text-[#38804b]" style={{ opacity: 0.6, animation: "pulse 1.5s 0.0s infinite" }} />
                      <ChevronRight className="w-4 h-4 text-[#38804b]" style={{ opacity: 0.8, animation: "pulse 1.5s 0.15s infinite" }} />
                      <ChevronRight className="w-4 h-4 text-[#38804b]" style={{ animation: "pulse 1.5s 0.3s infinite" }} />
                    </span>
                  </div>

                  {/* Draggable thumb */}
                  <div
                    onClick={(e) => { e.stopPropagation(); handleAnswerCall(); }}
                    className="wco-btn-glow relative z-10 flex items-center justify-center rounded-full text-white cursor-grab active:cursor-grabbing"
                    style={{
                      width: 52,
                      height: 52,
                      minWidth: 52,
                      background: "linear-gradient(135deg, #059669, #34d399)",
                      border: "2px solid rgba(255,255,255,0.35)",
                      transform: trackRef.current
                        ? `translateX(${dragProgress * Math.max(0, trackRef.current.clientWidth - 68)}px)`
                        : "none",
                      transition: isDragging
                        ? "none"
                        : "transform 0.35s cubic-bezier(0.18,0.89,0.32,1.28), box-shadow 0.2s ease",
                    }}
                  >
                    <Phone className="w-6 h-6 fill-current" />
                  </div>
                </div>

                {/* Tap hint */}
                <button
                  type="button"
                  onClick={handleAnswerCall}
                  className="cursor-pointer"
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: "rgba(148,163,184,0.75)",
                    background: "none",
                    border: "none",
                  }}
                >
                  or{" "}
                  <span style={{ color: "#6ee7b7", textDecoration: "underline", textUnderlineOffset: 3 }}>
                    tap here
                  </span>{" "}
                  to answer directly
                </button>
              </>
            ) : (
              /* Connected card */
              <div
                className="wco-connected-card w-full max-w-sm py-5 px-6 rounded-3xl text-center flex flex-col items-center gap-2"
                style={{
                  background: "linear-gradient(135deg, rgba(5,40,30,0.96), rgba(5,25,20,0.98))",
                  border: "1.5px solid rgba(52,211,153,0.5)",
                  backdropFilter: "blur(24px)",
                  boxShadow: "0 0 60px rgba(16,185,129,0.28), 0 20px 60px rgba(0,0,0,0.5)",
                }}
              >
                <div
                  className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: "rgba(16,185,129,0.12)",
                    border: "1px solid rgba(52,211,153,0.4)",
                    color: "#6ee7b7",
                  }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38804b]" />
                  <span>Call Connected</span>
                </div>

                <h2
                  className="font-black text-white tracking-tight"
                  style={{ fontSize: "clamp(1.2rem,5vw,1.5rem)", letterSpacing: "-0.02em" }}
                >
                  Welcome to Paradise on Earth
                </h2>

                <p className="text-xs font-medium" style={{ color: "#6ee7b7" }}>
                  Shop A Trip Tour &amp; Travels · Entering website…
                </p>
              </div>
            )}

            <p style={{ fontSize: 10, color: "rgba(148,163,184,0.45)", textAlign: "center" }}>
              Shop A Trip Tour &amp; Travels &nbsp;·&nbsp; Jammu, Kashmir &amp; Ladakh
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}