"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS, ProjectItem } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";
import { ArrowUpRight, Github, Images, Layers } from "lucide-react";
import { MushroomCandy } from "./MushroomCandy";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A1810] tracking-tight">
          Projects
        </h2>
      </div>

      {/* Projects Grid: 3 columns desktop, 1 col mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-[#FCFAF5] border-2 border-[#EADBCE] hover:border-[#D48B38] rounded-3xl overflow-hidden p-5 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-cozy-lg hover:-translate-y-1"
          >
            <div>
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#EADBCE] border border-[#E0D2BE] mb-5">
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* 3 Photos Indicator Pill */}
                <div className="absolute bottom-2.5 right-2.5 bg-[#2A1810]/85 text-[#F6EEDD] text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-sm">
                  <Images className="w-3 h-3" />
                  <span>3 Photos</span>
                </div>

                <div className="absolute top-2.5 left-2.5 bg-[#FAF4EA]/90 text-[#3E2114] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#DFCBB0]">
                  {project.category.split("&")[0]}
                </div>
              </div>

              {/* Title & Quick Action Icons */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-serif text-xl font-bold text-[#2A1810] group-hover:text-[#C47935] transition-colors leading-snug">
                  {project.title}
                </h3>

                <div className="flex items-center gap-1.5 shrink-0 text-[#825032]">
                  {project.githubUrl && (
                    <span className="p-1 rounded-full hover:text-[#2A1810]">
                      <Github className="w-4 h-4" />
                    </span>
                  )}
                  <span className="p-1 rounded-full text-[#C47935] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-sm text-[#59331E] leading-relaxed mb-5">
                {project.shortDescription}
              </p>
            </div>

            {/* Bottom Row: Expand Prompt */}
            <div>
              <div className="pt-3 border-t border-[#EFE5D4] flex items-center justify-between text-xs font-semibold text-[#C47935] group-hover:text-[#2A1810] transition-colors">
                <span className="flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Click to expand &amp; read more</span>
                </span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
