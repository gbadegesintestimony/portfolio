import React from "react";
import Image from "next/image";

export function Logo({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Testimony Gbadegesin (DevTee) Logo"
        width={200}
        height={200}
        className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] scale-110"
        priority
        unoptimized
      />
    </div>
  );
}
