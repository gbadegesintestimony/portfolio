"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export function HomeExperience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-b border-white/5 bg-[#050505] overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-4 h-4 text-emerald-500" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-500 font-semibold">
              EXPERIENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Experience that ships <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">
              reliable systems
            </span>
          </h2>
        </motion.div>

        {/* Experience Cards Stack with Staggered Entrance */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {exp.role}
                </h3>
                <span className="font-mono text-xs text-white/40 tracking-wider">
                  {exp.period}
                </span>
              </div>

              <div className="font-mono text-sm text-emerald-400/90 font-semibold mb-4 flex items-center gap-2">
                <span>{exp.company}</span>
                <span className="text-white/20">·</span>
                <span className="text-white/40 font-normal text-xs">{exp.type}</span>
              </div>

              <p className="text-sm sm:text-base text-white/60 leading-relaxed font-sans max-w-4xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Link to Full Profile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-white/70 hover:text-white uppercase tracking-wider transition-colors group"
          >
            <span>View full profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
