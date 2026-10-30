import React from "react";
import { MushroomCandy } from "./MushroomCandy";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E8DCcb] bg-[#F5EEDB] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-[#6B4226]">
        {/* Brand & Note */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#2A1810] text-[#F7EADB] flex items-center justify-center font-bold text-xs">
            ZN
          </div>
          <div>
            <div className="font-serif font-bold text-[#2A1810]">
              Zion Nishikawa
            </div>
            <div className="text-[11px] text-[#8C6245]">
              Mechanical Engineering · Olin College &apos;29
            </div>
          </div>
        </div>

        {/* Candy & Cozy tagline */}
        <div className="flex items-center gap-2">
          <span>Crafted with cozy workshop vibes &amp;</span>
          <MushroomCandy size={22} rotation={8} variant="solo" />
          <span>Chocorooms</span>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <a href="#about" className="hover:text-[#2A1810] transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-[#2A1810] transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-[#2A1810] transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#2A1810] transition-colors">
            Contact
          </a>
          <a
            href="/Zion_Nishikawa_Resume.pdf"
            download
            className="hover:text-[#2A1810] font-bold text-[#C47935] transition-colors"
          >
            Resume ↓
          </a>
        </div>
      </div>
    </footer>
  );
};
