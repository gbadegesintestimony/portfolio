"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Globe,
  Github,
  Linkedin,
  Mail,
  Check,
  Twitter,
  Download,
  Folder,
  Cpu,
  GraduationCap,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";

export default function AboutPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };
  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 sm:pt-36 pb-24 overflow-hidden">
      {/* Subtle blueprint grid background */}
      <div className="absolute inset-0 bg-blueprint-lg pointer-events-none opacity-20" />

      {/* Expanded wide container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 pb-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs sm:text-sm text-emerald-500 font-semibold tracking-wider">
              {">_"} SYS_INFO: PROFILE_DETAILS
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white">
            About The Developer
          </h1>
        </motion.div>

        {/* Wide Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Sticky Profile Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-4 xl:col-span-4 space-y-5"
          >
            <div className="sticky top-28 space-y-4 max-w-sm lg:max-w-none mx-auto">
              {/* Photo Card with Hover Zoom */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl group">
                <Image
                  src="/profile.jpg"
                  alt="Testimony Gbadegesin"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                {/* Online Status Pill */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-white shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold tracking-wider">ONLINE</span>
                </div>
              </div>

              {/* Stat Cards: Uptime & Region */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-white/40 uppercase mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-500/70" />
                    <span>UPTIME</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white font-mono">
                    26 YEARS
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-white/40 uppercase mb-1.5">
                    <Globe className="w-3.5 h-3.5 text-emerald-500/70" />
                    <span>REGION</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white font-mono">
                    Remote
                  </div>
                </div>
              </div>

              {/* Social Links Row */}
              <div className="grid grid-cols-4 gap-2.5">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="h-14 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 text-white/70 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:scale-105 transition-all shadow-md"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="h-14 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 text-white/70 hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10 hover:scale-105 transition-all shadow-md"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  className="h-14 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 text-white/70 hover:text-[#1d9bf0] hover:border-[#1d9bf0]/50 hover:bg-[#1d9bf0]/10 hover:scale-105 transition-all shadow-md"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href={profile.links.email}
                  onClick={handleCopyEmail}
                  aria-label="Email"
                  title="Click to copy email address"
                  className="h-14 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 text-white/70 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:scale-105 transition-all shadow-md relative group cursor-pointer"
                >
                  {copiedEmail ? (
                    <Check className="w-6 h-6 text-emerald-400" />
                  ) : (
                    <Mail className="w-6 h-6" />
                  )}
                  {copiedEmail && (
                    <span className="absolute -top-9 px-2.5 py-1 bg-emerald-500 text-black text-[10px] font-mono font-bold rounded-lg shadow-lg whitespace-nowrap">
                      Email Copied!
                    </span>
                  )}
                </a>
              </div>

              {/* Download CV Button */}
              <a
                href={profile.links.cv}
                download="Testimony_Gbadegesin_CV.pdf"
                className="w-full flex items-center justify-center gap-3 py-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-sm uppercase tracking-wider rounded-2xl hover:bg-emerald-500/20 hover:border-emerald-500/60 hover:shadow-[0_0_28px_rgba(16,185,129,0.35)] transition-all"
              >
                <Download className="w-5 h-5" />
                <span>DOWNLOAD_CV</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Narrative, Change Log, Dependencies, Education */}
          <div className="lg:col-span-8 xl:col-span-8 space-y-16">
            {/* 1. README.md Narrative Section matching Reference */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 font-mono text-base font-bold text-white mb-2">
                <span className="text-emerald-500">{">_"}</span>
                <span>README.md</span>
              </div>
              <div className="space-y-6 font-mono text-[15px] sm:text-base text-[#94a3b8] leading-relaxed">
                <p>
                  I’m a <span className="text-white font-semibold">Full-Stack Engineer</span> who builds secure, scalable systems from the backend out.
                </p>
                <p>
                  I started my Full-Stack Engineering journey primarily with <span className="text-white font-semibold">Go</span> and backend development, and have since expanded into <span className="text-white font-semibold">Node.js</span>, <span className="text-white font-semibold">NestJS</span>, <span className="text-white font-semibold">TypeScript</span>, <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Next.js</span>, and <span className="text-white font-semibold">relational databases</span>. This has allowed me to work across the full stack while keeping backend engineering at the core of what I do.
                </p>
                <p>
                  I enjoy solving problems around <span className="text-white font-semibold">backend architecture</span>, <span className="text-white font-semibold">APIs</span>, <span className="text-white font-semibold">databases</span>, <span className="text-white font-semibold">application security</span>, and <span className="text-white font-semibold">production reliability</span>, with a focus on building software that is maintainable, secure, and practical.
                </p>
              </div>
            </motion.section>

            {/* 2. Change_Log (Experience) Section */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-white font-mono">
                <Folder className="w-5 h-5 text-emerald-400" />
                <span>Change_Log (Experience)</span>
              </div>

              {/* Connected Timeline Stream */}
              <div className="relative pl-6 sm:pl-10 space-y-12">
                <div className="absolute left-[7px] sm:left-[11px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-emerald-500 via-white/10 to-transparent" />

                {experiences.map((exp, idx) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-emerald-500 bg-[#050505] group-hover:scale-125 group-hover:bg-emerald-500 transition-all shadow-[0_0_12px_rgba(16,185,129,0.5)]" />

                    <div className="space-y-2.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-xs sm:text-sm text-white/40">
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-sm text-emerald-400 font-semibold">
                        <span>{exp.company}</span>
                        <span className="text-white/20">·</span>
                        <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/60 text-xs font-normal">
                          {exp.type}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-white/65 leading-relaxed pt-2">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* 3. Dependencies (Skills) Section */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-white font-mono">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <span>Dependencies</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Frontend */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all space-y-4"
                >
                  <div className="font-mono text-xs font-bold text-white/40 uppercase tracking-wider">
                    FRONTEND
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "TypeScript", "Tailwind", "Vite", "Framer Motion"].map((s) => (
                      <span
                        key={s}
                        className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm font-mono text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Backend */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all space-y-4"
                >
                  <div className="font-mono text-xs font-bold text-white/40 uppercase tracking-wider">
                    BACKEND
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express.js", "NestJS", "Go", "Gin", "REST APIs"].map((s) => (
                      <span
                        key={s}
                        className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm font-mono text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Database */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all space-y-4"
                >
                  <div className="font-mono text-xs font-bold text-white/40 uppercase tracking-wider">
                    DATABASE
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "Supabase", "Redis", "MongoDB", "Prisma ORM"].map((s) => (
                      <span
                        key={s}
                        className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm font-mono text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* DevOps & Cloud */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all space-y-4"
                >
                  <div className="font-mono text-xs font-bold text-white/40 uppercase tracking-wider">
                    DEVOPS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Docker", "Git", "GitHub", "pnpm", "Turborepo", "BullMQ", "AWS EC2"].map((s) => (
                      <span
                        key={s}
                        className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm font-mono text-white/80 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* 4. Education Section */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-white font-mono">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <span>Education</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Degree */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between space-y-4"
                >
                  <div>
                    <h4 className="text-lg font-bold text-white leading-snug">
                      B.Eng. Agricultural & Bio-Resources Engineering
                    </h4>
                    <p className="text-sm text-white/50 mt-1 font-sans">
                      Federal University of Agriculture, Abeokuta (FUNAAB)
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono pt-4 border-t border-white/5">
                    <span className="text-emerald-400 font-semibold">COMPLETED · 2:1</span>
                    <span className="text-white/40">2025</span>
                  </div>
                </motion.div>

                {/* Certification */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between space-y-4"
                >
                  <div>
                    <h4 className="text-lg font-bold text-white leading-snug">
                      Google Cybersecurity Professional Certificate
                    </h4>
                    <p className="text-sm text-white/50 mt-1 font-sans">
                      Coursera · Scholarship Supported
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono pt-4 border-t border-white/5">
                    <span className="text-emerald-400 font-semibold">COMPLETED</span>
                    <span className="text-white/40">2026</span>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
