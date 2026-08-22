"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Github, Linkedin, Mail, ArrowUpRight, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function Footer() {
  const [executionTime, setExecutionTime] = useState<number>(312);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  useEffect(() => {
    // Generate realistic low server execution latency
    const latency = Math.floor(Math.random() * (450 - 210 + 1)) + 210;
    setExecutionTime(latency);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      href: profile.links.github,
      icon: Github,
      detail: "Code Repositories",
    },
    {
      name: "LinkedIn",
      href: profile.links.linkedin,
      icon: Linkedin,
      detail: "Professional Profile",
    },
    {
      name: "Email",
      href: profile.links.email,
      icon: Mail,
      detail: "Direct Inquiry",
    },
    {
      name: "Schedule Call",
      href: "/call",
      icon: Globe,
      detail: "Discovery Session",
    },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* 24px Blueprint Grid Pattern */}
      <div className="absolute inset-0 bg-blueprint-sm pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main CTA & Social Grid */}
        <div className="py-20 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 border-b border-white/5">
          {/* Left Column: Heading & Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs text-emerald-500 tracking-wider">SYSTEM_ONLINE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Have a project in mind?
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                Scale Up?
              </span> */}
            </h2>
            <p className="text-white/60 max-w-md leading-relaxed text-sm sm:text-base">
              I'm open to full-time engineering opportunities, freelance projects, and interesting software collaborations. I enjoy building secure, reliable software across the backend, frontend, and database layers.            </p>
          </motion.div>

          {/* Right Column: 4-Card Social Link Grid */}
          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                const isInternal = social.href.startsWith("/");
                return isInternal ? (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <Link
                      href={social.href}
                      className="group flex items-center justify-between p-5 bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.06] transition-all rounded-2xl shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/60 group-hover:text-emerald-400 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-all flex-shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-mono text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                            {social.name}
                          </div>
                          <div className="text-xs text-white/50 font-mono mt-0.5">{social.detail}</div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-emerald-400 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <a
                      href={social.href}
                      onClick={
                        social.href.startsWith("mailto:")
                          ? (e) => {
                            navigator.clipboard.writeText(profile.email);
                            setCopiedEmail(true);
                            setTimeout(() => setCopiedEmail(false), 2500);
                          }
                          : undefined
                      }
                      target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="group flex items-center justify-between p-5 bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.06] transition-all rounded-2xl shadow-md cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/60 group-hover:text-emerald-400 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-all flex-shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-mono text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                            {social.href.startsWith("mailto:") && copiedEmail ? "Email Copied!" : social.name}
                          </div>
                          <div className="text-xs text-white/50 font-mono mt-0.5">
                            {social.href.startsWith("mailto:") && copiedEmail ? "Copied to clipboard" : social.detail}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-emerald-400 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Execution Time */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-white/20" />
            <span className="font-mono text-xs text-white/40">
              © {new Date().getFullYear()} TESTIMONY GBADEGESIN. EXECUTION_TIME: {executionTime}ms
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-bold text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 rounded-full uppercase tracking-wider">
              Junior Software Engineer
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
