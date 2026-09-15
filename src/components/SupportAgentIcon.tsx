import React from "react";

interface SupportAgentIconProps {
  className?: string;
  size?: number;
}

export default function SupportAgentIcon({ className = "w-7 h-7 text-amber-300", size }: SupportAgentIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
    >
      {/* Headband */}
      <path
        d="M13 22C13 14.8203 17.9249 10 24 10C30.0751 10 35 14.8203 35 22"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Head & Face */}
      <circle cx="24" cy="22" r="8" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.5" />

      {/* Eyes & Smile */}
      <circle cx="21" cy="21" r="1" fill="currentColor" />
      <circle cx="27" cy="21" r="1" fill="currentColor" />
      <path
        d="M21.5 25C22.2 26 23 26.5 24 26.5C25 26.5 25.8 26 26.5 25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />

      {/* Left Headphone Earcup */}
      <rect
        x="10.5"
        y="18"
        width="4.5"
        height="9"
        rx="2.25"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Right Headphone Earcup */}
      <rect
        x="33"
        y="18"
        width="4.5"
        height="9"
        rx="2.25"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Boom Microphone */}
      <path
        d="M34 25.5C34 29.5 31 32 26.5 32H25"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="23.5" cy="32" r="2" fill="#10B981" stroke="currentColor" strokeWidth="1.5" />

      {/* Shoulders & Collar (Customer Support Uniform) */}
      <path
        d="M12 40C12 34.5 16.5 33 24 33C31.5 33 36 34.5 36 40"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Tie / ID Badge */}
      <path d="M24 33V37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
