import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from "lucide-react";
import { experiences, earlierExperience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-b border-white/5 bg-[#050505] overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-500 font-semibold">
                EXPERIENCE // CAREER_CHANGELOG
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Engineering Roles &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">
                Responsibilities
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/50 max-w-md leading-relaxed font-sans">
            Proven track record designing scalable backend services, transactional data layers, and multi-tenant cloud platforms.
          </p>
        </div>

        {/* Connected Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-16">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[7px] sm:left-[11px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-500 via-white/10 to-transparent" />

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[30px] sm:-left-[46px] top-1.5 w-4 h-4 rounded-full border-2 border-emerald-500 bg-[#050505] group-hover:scale-125 group-hover:bg-emerald-500 transition-all shadow-[0_0_12px_rgba(16,185,129,0.4)]" />

              {/* Role Card */}
              <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-white/60">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-lg font-mono text-white/80 font-semibold flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-white/20">·</span>
                      <span className="text-sm font-normal text-white/50">{exp.location}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-xs text-white/60">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-3 mb-8">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white/60 leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Earlier Practical Engineering Experience Block */}
          <div className="relative group pt-4">
            <div className="absolute -left-[30px] sm:-left-[46px] top-7 w-4 h-4 rounded-full border-2 border-white/30 bg-[#050505] group-hover:border-white transition-all" />

            <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all">
              <div className="flex items-center gap-2 mb-6">
                <span className="font-mono text-xs text-white/40 uppercase tracking-wider">
                  FOUNDATIONAL_BACKGROUND // MECHANICAL_&_EMBEDDED
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {earlierExperience.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="font-mono text-xs text-emerald-400/80 mb-3">{item.context}</p>
                    <p className="text-xs text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
