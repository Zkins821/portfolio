"use client";

import React from "react";
import { EXPERIENCES } from "@/data/experiences";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { MushroomCandy } from "./MushroomCandy";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12 sm:mb-16">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A1810] tracking-tight">
            Experience
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-[#FAF4EA] border border-[#E8DCCB] text-[#59331E] px-4 py-1.5 rounded-full text-xs font-semibold">
          <Briefcase className="w-3.5 h-3.5 text-[#C47935]" />
          <span>5 Positions</span>
        </div>
      </div>

      {/* Experience Cards Stack */}
      <div className="flex flex-col gap-6 sm:gap-7">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="group relative bg-[#FCFAF5] border-2 border-[#EADBCE] hover:border-[#D48B38] rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-cozy"
          >
            {/* Top Row: Role, Company, Date & Location */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4 border-b border-[#EFE5D4] pb-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A1810]">
                  {exp.role}
                </h3>
                <div className="text-base sm:text-lg font-semibold text-[#C47935] mt-1">
                  {exp.company}
                </div>
              </div>

              {/* Date & Location Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B4226] font-medium self-start md:self-auto">
                <span className="flex items-center gap-1.5 bg-[#F6EEDD] px-3 py-1 rounded-full border border-[#E2D4BF]">
                  <Calendar className="w-3.5 h-3.5 text-[#7E4A28]" />
                  <span>{exp.period}</span>
                </span>
                <span className="flex items-center gap-1.5 bg-[#F6EEDD] px-3 py-1 rounded-full border border-[#E2D4BF]">
                  <MapPin className="w-3.5 h-3.5 text-[#7E4A28]" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            {/* Bullet points */}
            <ul className="space-y-2.5 text-sm sm:text-base text-[#4A2614] leading-relaxed">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5">
                  <span className="text-[#C47935] font-bold text-lg leading-tight select-none">
                    •
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
