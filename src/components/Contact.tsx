"use client";

import React, { useState } from "react";
import { Mail, Linkedin, Copy, Check, Download, ArrowUpRight } from "lucide-react";
import { MushroomCandy } from "./MushroomCandy";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "zion.nishikawa@gmail.com";
  const linkedin = "https://www.linkedin.com/in/zion-nishikawa/";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="relative bg-[#FCFAF5] border-2 border-[#EADBCE] rounded-[36px] p-8 sm:p-14 shadow-cozy-lg overflow-hidden">
        {/* Decorative corner candies: Duo on top right, Solo on bottom left */}
        <div className="absolute top-5 right-6 select-none pointer-events-none hidden sm:block">
          <MushroomCandy size={54} rotation={16} variant="duo" />
        </div>
        <div className="absolute bottom-6 left-6 select-none pointer-events-none hidden sm:block">
          <MushroomCandy size={42} rotation={-18} variant="solo" />
        </div>

        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          {/* Header Script */}
          <span className="font-handwriting text-2xl sm:text-3xl text-[#C47935] mb-2">
            let&apos;s build together
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2A1810] tracking-tight mb-8">
            Get In Touch
          </h2>

          {/* Email Quick Action Card */}
          <div className="w-full bg-[#F6EEDD] border border-[#E3D4BD] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2A1810] text-[#F6EEDD] flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#7E4A28] uppercase tracking-wider">
                  Direct Email
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-base sm:text-lg font-serif font-bold text-[#2A1810] hover:text-[#C47935] transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 bg-[#FAF5ED] hover:bg-[#FFFFFF] text-[#2A1810] border border-[#D8C4AA] px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#7E4A28]" />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2A1810] hover:bg-[#432313] text-[#FBF6ED] px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer group"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E6D4BE] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="/Zion_Nishikawa_Resume.pdf"
              download="Zion_Nishikawa_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FAF5ED] hover:bg-[#EFE3D3] text-[#2A1810] border border-[#DFCBB0] px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#7E4A28]" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
