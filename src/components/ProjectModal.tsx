"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Github, Calendar } from "lucide-react";
import { ProjectItem } from "@/data/projects";
import { MushroomCandy } from "./MushroomCandy";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    setActiveImageIdx(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : 2));
      }
      if (e.key === "ArrowRight") {
        setActiveImageIdx((prev) => (prev < 2 ? prev + 1 : 0));
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentImage = project.images[activeImageIdx];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2A1810]/70 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Click outside backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container: overflow-hidden ensures child scrollbar never spills outside rounded corners */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#FCFAF5] rounded-[32px] border-2 border-[#EADBCE] shadow-2xl z-10 flex flex-col overflow-hidden">
        {/* Fixed Header Bar */}
        <div className="flex items-start justify-between gap-4 p-5 sm:p-7 pb-4 border-b border-[#EFE5D4] bg-[#FCFAF5] shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-[#C47935] uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-[#C47935]">·</span>
              <span className="text-xs text-[#7B4E30] flex items-center gap-1 font-medium">
                <Calendar className="w-3 h-3" />
                {project.timeframe}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1810]">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#F3EADB] hover:bg-[#EADBCE] text-[#3E2114] transition-colors focus:outline-none cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Inner Scrollable Body: Contained strictly inside with padding */}
        <div className="overflow-y-auto px-5 sm:px-8 py-5 space-y-6 flex-1">
          {/* 3-Image Gallery / Carousel Section */}
          <div className="space-y-3">
            <div className="relative w-full h-[320px] sm:h-[440px] md:h-[480px] bg-[#22130A] rounded-2xl overflow-hidden border border-[#523321] shadow-inner group flex items-center justify-center">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                unoptimized
                className="object-contain p-2 sm:p-4 transition-all duration-300"
              />

              {/* Navigation Arrows */}
              <button
                onClick={() => setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : 2))}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#2A1810]/75 text-[#F6EEDD] hover:bg-[#2A1810] transition-all opacity-85 group-hover:opacity-100 cursor-pointer shadow-sm"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveImageIdx((prev) => (prev < 2 ? prev + 1 : 0))}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#2A1810]/75 text-[#F6EEDD] hover:bg-[#2A1810] transition-all opacity-85 group-hover:opacity-100 cursor-pointer shadow-sm"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Photo Counter Pill */}
              <div className="absolute bottom-3 right-3 bg-[#2A1810]/85 text-[#F6EEDD] text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-xs">
                Photo {activeImageIdx + 1} of 3
              </div>
            </div>

            {/* Caption & Thumbnail selectors */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F6EEDB] p-3 rounded-xl border border-[#E5D7C2]">
              <p className="text-xs sm:text-sm font-medium text-[#4A2614] italic">
                &ldquo;{currentImage.caption}&rdquo;
              </p>

              {/* 3 Image Thumbnail buttons */}
              <div className="flex items-center gap-2 shrink-0">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-12 h-8 rounded-lg overflow-hidden border-2 transition-all relative cursor-pointer ${
                      activeImageIdx === idx
                        ? "border-[#2A1810] scale-105 shadow-sm"
                        : "border-[#D6C1A4] opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <Image src={img.src} alt={img.alt} fill unoptimized className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Sections: Overview, Impact, Key Learning */}
          <div className="space-y-5">
            {project.sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-[#FAF4EA]/80 border border-[#E8DCcb] rounded-2xl p-5 sm:p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-serif text-lg font-bold text-[#2A1810]">
                    {section.title}
                  </h4>
                  {idx === 0 && <MushroomCandy size={20} rotation={-10} variant="solo" />}
                </div>
                <p className="text-sm sm:text-base text-[#4A2614] leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Footer: Clean action buttons */}
        <div className="flex items-center justify-end gap-3 p-4 sm:p-6 border-t border-[#EFE5D4] bg-[#FCFAF5] shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2A1810] hover:text-[#C47935] bg-[#F2E7D7] hover:bg-[#EADBCE] px-4 py-2 rounded-full transition-colors cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="bg-[#2A1810] hover:bg-[#432313] text-[#FBF6ED] px-5 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer shadow-sm"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
