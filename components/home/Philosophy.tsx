import React from "react";
import { philosophies } from "@/data/philosophy";

export function Philosophy() {
  return (
    <section className="relative py-24 sm:py-32 border-b border-white/5 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-500 font-semibold">
                PHILOSOPHY // ENGINEERING_VALUES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              How I Think About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">
                Software Systems
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/50 max-w-md leading-relaxed font-sans">
            Principles that guide architectural decisions, security boundaries, database design, and production engineering.
          </p>
        </div>

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophies.map((item, idx) => (
            <div
              key={item.number}
              className={`group p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between ${
                idx === 3 ? "md:col-span-1 lg:col-span-1" : ""
              } ${idx === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-white/20 group-hover:text-emerald-500/60 transition-colors">
                    {item.number}
                  </span>
                  <span className="font-mono text-[10px] text-white/40 px-2.5 py-1 rounded bg-white/[0.03] border border-white/5">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
