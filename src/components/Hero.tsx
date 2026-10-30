"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Mail, Download, Sparkles, MapPin } from "lucide-react";
import { MushroomCandy } from "./MushroomCandy";

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-visible">
      {/* Subtle Warm Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#EEDEC7]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
        {/* Left Column: Greeting, Name, Workshop Tagline, About Me */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Handwritten greeting */}
          <span className="font-handwriting text-2xl sm:text-3xl text-[#7E4A28] mb-1 sm:mb-2 transform -rotate-1">
            hello, I&apos;m
          </span>

          {/* Large Serif Name */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-[#2A1810] tracking-tight leading-[1.08] mb-4">
            Zion <br />
            <span className="italic font-normal font-serif text-[#3E2114]">Nishikawa</span>
          </h1>

          {/* Education & Role Subtitle */}
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold text-[#59331E] mb-6">
            <span>Mechanical Engineer</span>
            <span className="text-[#C47935] font-black">·</span>
            <span>Olin College of Engineering &apos;29</span>
          </div>

          {/* Welcome Tagline */}
          <div className="bg-[#FAF4EA]/80 border border-[#E8DCcb] rounded-2xl px-5 py-3.5 mb-7 shadow-sm">
            <p className="font-serif italic text-lg sm:text-xl text-[#3E2114]">
              &ldquo;Welcome to my workshop!&rdquo;
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#2A1810] hover:bg-[#432313] active:scale-95 text-[#FBF6ED] px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md group cursor-pointer"
            >
              <span>See my work</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#FAF5ED] hover:bg-[#F0E5D4] text-[#2A1810] border border-[#DFCBB0] px-5 py-3 rounded-full text-sm font-semibold transition-all active:scale-95 cursor-pointer shadow-sm"
            >
              <Mail className="w-4 h-4 text-[#7E4A28]" />
              <span>Say hello</span>
            </a>

            <a
              href="/Zion_Nishikawa_Resume.pdf"
              download="Zion_Nishikawa_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#59331E] hover:text-[#2A1810] hover:bg-[#EFE5D4]/70 px-4 py-3 rounded-full text-sm font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Footer location */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#784A2A] border-t border-[#E8DCCB] pt-4 w-full">
            <MapPin className="w-3.5 h-3.5 text-[#C47935]" />
            <span className="font-medium text-[#59331E]">Seattle → Boston</span>
          </div>
        </div>

        {/* Right Column: Polaroid Headshot Framed with Cute Chocorooms Candies */}
        <div className="lg:col-span-5 flex justify-center relative select-none">
          {/* Top-Right: Duo Mushrooms Sticker */}
          <div className="absolute -top-10 -right-7 z-20 animate-bounce duration-1000" style={{ animationDuration: "3.2s" }}>
            <MushroomCandy size={72} rotation={14} variant="duo" />
          </div>

          {/* Top-Left: Solo Mushroom Sticker */}
          <div className="absolute -top-7 -left-6 z-20 animate-bounce duration-1000" style={{ animationDuration: "2.8s", animationDelay: "0.5s" }}>
            <MushroomCandy size={54} rotation={-18} variant="solo" />
          </div>

          {/* Bottom-Right: Solo Mushroom Sticker */}
          <div className="absolute -bottom-7 right-4 z-20 animate-bounce duration-1000" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>
            <MushroomCandy size={56} rotation={24} variant="solo" />
          </div>

          {/* Left Middle: Solo Mushroom Sticker */}
          <div className="absolute top-1/2 -left-8 z-20 animate-bounce duration-1000" style={{ animationDuration: "4s", animationDelay: "1.5s" }}>
            <MushroomCandy size={48} rotation={-12} variant="solo" />
          </div>

          {/* Cute Sparkle Stars */}
          <Sparkles className="w-5 h-5 text-[#C47935] absolute top-12 -right-8 animate-pulse" />
          <Sparkles className="w-4 h-4 text-[#D3A06B] absolute bottom-14 -left-6 animate-pulse delay-300" />

          {/* Polaroid Frame */}
          <div className="polaroid-frame relative bg-[#FFFFFF] p-3.5 sm:p-4 pb-6 sm:pb-7 rounded-[28px] border border-[#EAE0D1] shadow-polaroid transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-[340px] sm:max-w-[370px] w-full">
            {/* Image Container with Soft Rounded Corners */}
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#EADBCE] border border-[#E0D1BF]">
              <Image
                src="/images/zion-headshot.jpg"
                alt="Zion Nishikawa - Mechanical Engineer"
                fill
                priority
                sizes="(max-width: 768px) 320px, 370px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Polaroid Bottom Caption area */}
            <div className="mt-3 px-1 flex items-center justify-end text-xs">
              <span className="text-[10px] font-bold tracking-widest text-[#7B4E30] uppercase">
                MECHANICAL ENGINEER
              </span>
            </div>

            {/* Pinned Status Pill Badge */}
            <div className="absolute -bottom-3.5 left-6 bg-[#FCFAF5] border border-[#DFD1BE] text-[#2A1810] px-3.5 py-1 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5 z-10">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#10B981] -ml-3.5" />
              <span className="text-[11px] tracking-wide text-[#3E2114]">OPEN TO INTERNSHIPS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
