"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 max-w-6xl mx-auto transition-all duration-300">
      <nav
        className={`w-full mx-auto px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 flex items-center justify-between border ${
          scrolled
            ? "bg-[#FCF9F3]/95 backdrop-blur-md border-[#E3D4BD] shadow-cozy"
            : "bg-[#FCFAF5]/90 backdrop-blur-sm border-[#EADBCE]/80 shadow-sm"
        }`}
      >
        {/* Left: Avatar Initials + Name */}
        <a
          href="#"
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-[#2A1810] text-[#F7EADB] flex items-center justify-center font-bold text-xs tracking-wider shadow-sm transition-transform group-hover:scale-105">
            ZN
          </div>
          <span className="font-serif font-semibold text-base sm:text-lg text-[#2A1810] tracking-tight group-hover:text-[#59331E] transition-colors">
            Zion Nishikawa
          </span>
        </a>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-[#59331E]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#2A1810] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C47935] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Resume Download Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="/Zion_Nishikawa_Resume.pdf"
            download="Zion_Nishikawa_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#2A1810] hover:bg-[#432313] active:scale-95 text-[#FBF6ED] px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow-md cursor-pointer"
            aria-label="Download Zion Nishikawa Resume"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#2A1810] hover:bg-[#EFE5D4] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#FCFAF5] border border-[#E3D4BD] shadow-cozy flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#59331E] hover:text-[#2A1810] font-medium py-2 px-3 rounded-lg hover:bg-[#F3E8D7] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
