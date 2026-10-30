import React from "react";
import Image from "next/image";

interface MushroomCandyProps {
  className?: string;
  size?: number;
  rotation?: number;
  variant?: "solo" | "duo";
}

export const MushroomCandy: React.FC<MushroomCandyProps> = ({
  className = "",
  size = 50,
  rotation = 0,
  variant = "solo",
}) => {
  const src = variant === "duo" ? "/images/shroom-duo.png" : "/images/shroom-solo.png";
  const width = variant === "duo" ? size * 1.15 : size;
  const height = variant === "duo" ? size * 1.05 : size * 1.4;

  return (
    <div
      className={`inline-block select-none pointer-events-none transition-transform ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        width: width,
        height: height,
      }}
      aria-hidden="true"
    >
      <div className="relative w-full h-full drop-shadow-[0_6px_14px_rgba(42,24,16,0.12)]">
        <Image
          src={src}
          alt="Chocorooms candy sticker"
          fill
          unoptimized
          sizes="150px"
          className="object-contain"
        />
      </div>
    </div>
  );
};
