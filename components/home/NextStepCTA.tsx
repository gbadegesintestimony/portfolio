"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Mail, FileText, ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function NextStepCTA() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    // Copy to clipboard as reliable fallback
    navigator.clipboard.writeText("testimonygbadegesin.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);

    // Also trigger standard mailto
    window.location.href = "mailto:testimonygbadegesin.dev@gmail.com";
  };

  return (
    <section className="relative py-24 sm:py-32 border-b border-white/5 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-10 sm:p-14 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl space-y-6"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-500 font-semibold">
              NEXT_STEP
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Let's build something meaningful.
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/60 font-sans max-w-2xl leading-relaxed">
            If you need an engineer to ship reliably, solve complex backend challenges, and move fast without compromising quality, let's talk.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            {/* 1. Book a Call */}
            <Link
              href="/call"
              className="inline-flex items-center gap-3 h-14 px-7 bg-white text-black font-bold rounded-2xl hover:bg-emerald-400 hover:text-black hover:shadow-[0_0_28px_rgba(52,211,153,0.35)] transition-all font-sans text-base shadow-sm"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Call</span>
            </Link>

            {/* 2. Email Me - Directly opens email client */}
            <a
              href="mailto:testimonygbadegesin.dev@gmail.com"
              className="inline-flex items-center gap-3 h-14 px-7 bg-white/[0.04] border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-emerald-500/40 hover:text-emerald-400 transition-all font-sans text-base group"
            >
              <Mail className="w-5 h-5 text-white/70 group-hover:text-emerald-400 transition-colors" />
              <span>Email Me</span>
            </a>

            {/* 3. Download CV */}
            <a
              href="/Testimony_Gbadegesin_CV.pdf"
              download="Testimony_Gbadegesin_CV.pdf"
              className="inline-flex items-center gap-3 h-14 px-7 bg-white/[0.04] border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all font-sans text-base group"
            >
              <FileText className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              <span>Resume</span>
              <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
