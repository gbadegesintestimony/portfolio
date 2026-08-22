"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Terminal, Folder } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Full-Stack", "Backend & APIs", "AI & Diagnostics"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 sm:pt-36 pb-24 overflow-hidden">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-lg pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Page Header matching Reference */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/5"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Folder className="w-5 h-5 text-emerald-400" />
              <span className="font-mono text-xs sm:text-sm text-emerald-400 font-bold tracking-widest uppercase">
                DIRECTORY: /PROJECTS
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white">
              Selected Works
            </h1>
          </div>

          <div className="font-mono text-xs sm:text-sm text-white/50 leading-relaxed sm:text-right">
            <div>TOTAL_DEPLOYMENTS: <span className="text-white font-bold">{projects.length}</span></div>
            <div>LAST_UPDATE: <span className="text-white font-bold">2026</span></div>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-14"
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-mono text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-white text-black font-bold shadow-[0_0_24px_rgba(255,255,255,0.25)] scale-105"
                    : "bg-white/[0.03] border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid matching Reference */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block h-full rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-6 py-3.5 bg-black/60 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      <span className="font-mono text-xs sm:text-sm text-white/80 font-semibold uppercase tracking-wider">
                        {`>_ ROOTPROJECTS/${project.slug.toUpperCase()}`}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Screenshot Banner / Preview Frame */}
                  <div className="relative aspect-[16/9] w-full bg-[#050505] overflow-hidden border-b border-white/10 p-3">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} Preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 650px"
                        className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-black via-[#080808] to-[#0A0A0A]">
                        <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-3 group-hover:border-emerald-500/40 group-hover:scale-110 transition-all">
                          <Terminal className="w-7 h-7 text-white/40 group-hover:text-emerald-400 transition-colors" />
                        </div>
                        <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
                          {project.category} ARCHITECTURE
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="font-mono text-xs sm:text-sm text-emerald-400/90 mt-1 font-semibold">
                            {project.subtitle}
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all flex-shrink-0">
                          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-xl bg-white/[0.03] border border-white/10 text-white/70 font-mono text-xs sm:text-[13px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-3 py-1 rounded-xl bg-white/[0.03] border border-white/5 text-white/40 font-mono text-xs sm:text-[13px]">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
