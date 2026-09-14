import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "green" | "white" | "auto";
  showTagline?: boolean;
  className?: string;
}

export default function BrandLogo({
  variant = "auto",
  showTagline = true,
  className = "h-11 w-44 sm:w-48",
}: BrandLogoProps) {
  return (
    <div className="flex flex-col items-start group">
      <div className={`relative ${className} flex-shrink-0`}>
        {/* Green / Original Logo */}
        <Image
          src="/logo-transparent.png"
          alt="Shop A Trip Tour & Travels"
          fill
          className={`object-contain object-left transition-opacity duration-200 ${
            variant === "white" ? "hidden" : "block"
          }`}
          priority
        />
        {/* White Logo for dark themes */}
        {variant === "white" && (
          <Image
            src="/logo-white.png"
            alt="Shop A Trip Tour & Travels"
            fill
            className="object-contain object-left"
            priority
          />
        )}
      </div>
      {showTagline && (
        <span className="text-[10px] sm:text-xs font-serif italic text-amber-400 tracking-wider pl-1">
          Peace & You
        </span>
      )}
    </div>
  );
}
