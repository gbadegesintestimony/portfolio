"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { HomeExperience } from "@/components/home/HomeExperience";
import { HomeExpertise } from "@/components/home/HomeExpertise";
import { NextStepCTA } from "@/components/home/NextStepCTA";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const scrollToExperience = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("experience");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-lg pointer-events-none opacity-20" />

      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center pt-32 sm:pt-36 pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-12 z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Eyebrow: Name · Title */}
            <motion.p
              variants={itemVariants}
              className="font-mono text-xs sm:text-[13px] tracking-[0.2em] text-white/50 mb-7 uppercase flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Testimony Gbadegesin · Junior Backend Engineer</span>
            </motion.p>

            {/* High-Impact Dual-Tone Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl lg:text-[82px] font-extrabold tracking-[-0.03em] leading-[1.05] max-w-4xl"
            >
              <span className="block text-white font-black">
                Building reliable
              </span>
              <span className="block text-white/40 font-black">
                production systems
              </span>
            </motion.h1>

            {/* Subheading Paragraph */}
            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-2xl text-lg sm:text-xl text-white/60 font-normal leading-relaxed font-sans"
            >
              I help teams architect and ship scalable products with clean execution, strong engineering fundamentals, and long-term maintainability.
            </motion.p>

            {/* Action Buttons with Micro-Interactions */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/call"
                className="group inline-flex items-center justify-center h-12 px-7 bg-white text-black font-semibold rounded-xl hover:bg-white/90 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all text-sm shadow-sm"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                onClick={scrollToExperience}
                className="inline-flex items-center justify-center h-12 px-7 bg-white/[0.04] border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-sm cursor-pointer"
              >
                View Experience
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <HomeExperience />

      {/* Core Expertise Section */}
      <HomeExpertise />

      {/* Next Step CTA Section (Before Footer) */}
      <NextStepCTA />
    </div>
  );
}
