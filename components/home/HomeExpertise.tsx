"use client";

import React from "react";
import { Server, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

export function HomeExpertise() {
  const pillars = [
    {
      title: "Backend Systems",
      icon: Server,
      description:
        "Designing maintainable backend systems with clear architecture, reliable data flows, and practical performance considerations.",
    },
    {
      title: "Secure Architecture & Data",
      icon: ShieldCheck,
      description:
        "Building zero-trust authentication models, rate limiting, and robust PostgreSQL transactional data layers.",
    },
    {
      title: "Full-Stack Delivery",
      icon: Users,
      description:
        "Building complete applications across the frontend, backend, and database layers, with backend engineering at the core.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 border-b border-white/5 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-500 font-semibold">
              CORE_EXPERTISE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Focused on what matters most.
          </h2>
        </motion.div>

        {/* 3-Column Grid with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-emerald-400 mb-6 bg-white/[0.02] border border-white/10 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 group-hover:scale-110 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
