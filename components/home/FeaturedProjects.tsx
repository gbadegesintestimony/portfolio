import React from "react";
import Link from "next/link";
import { ArrowUpRight, Folder, Terminal, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="relative py-24 sm:py-32 border-b border-white/5 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-500 font-semibold">
                FEATURED // SELECTED_WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Production Systems &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">
                Case Studies
              </span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-mono text-xs text-white/60 hover:text-white uppercase tracking-wider transition-colors"
          >
            <span>View All Works [{projects.length}]</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((project) => (
            <div
              key={project.slug}
              className="group relative rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-[11px] text-white/40 ml-2">
                    sys://projects/{project.slug}
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {project.status}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-emerald-400 mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-white/40 mb-5">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-white/60 leading-relaxed mb-8">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Chips & Deep Dive Link */}
                <div className="space-y-6 pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-white/40">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Link
                      href={`/projects`}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white group-hover:text-emerald-400 transition-colors"
                    >
                      <span>Read Technical Case Study</span>
                      <ArrowUpRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
