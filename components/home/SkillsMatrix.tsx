import React from "react";
import { skillCategories } from "@/data/skills";
import { Code, Database, Shield, Cpu, Activity, Cloud, Palette } from "lucide-react";

export function SkillsMatrix() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return Code;
      case 1:
        return Palette;
      case 2:
        return Cpu;
      case 3:
        return Database;
      case 4:
        return Shield;
      case 5:
        return Activity;
      default:
        return Cloud;
    }
  };

  return (
    <section className="relative py-24 sm:py-32 border-b border-white/5 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-500 font-semibold">
                TOOLING // TECHNICAL_STACK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Technologies &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">
                Production Stack
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/50 max-w-md leading-relaxed font-sans">
            Languages, frameworks, databases, security tools, and observability infrastructure used in active development.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = getCategoryIcon(idx);
            return (
              <div
                key={category.title}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-emerald-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs font-mono text-white/70 hover:text-white hover:border-white/20 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
