"use client";

import React, { useState, useEffect } from "react";
import { 
  Globe, 
  Mail, 
  Phone, 
  MessageSquare, 
  Clock,
  Copy,
  Check
} from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function CallPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState<string>("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setLocalTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 sm:pt-36 pb-28 overflow-hidden">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-lg pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Page Header - One Single Line on Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto mb-16 sm:mb-20 space-y-4"
        >
          {/* Green Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR WORK</span>
          </div>

          {/* Heading - Strictly 1 Line */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white whitespace-normal sm:whitespace-nowrap">
            Let's Work Together
          </h1>

          {/* Timezone & Live Timer Beside It */}
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-sm sm:text-base text-white/60 pt-2">
            <div className="flex items-center gap-2 text-white/80">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>DETECTED TIMEZONE:</span>
              <span className="text-white font-semibold">Africa/Lagos</span>
            </div>
            <span className="text-white/30 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>{localTime || "03:16:15 PM"}</span>
            </div>
          </div>
        </motion.div>

        {/* Clean 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Card 1: Instant Connect (Direct Voice & WhatsApp) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)] transition-all duration-300 group"
          >
            <div>
              {/* Card Top Row */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/80 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/80 group-hover:text-[#25D366] group-hover:border-[#25D366]/40 transition-all">
                    <MessageSquare className="w-6 h-6 text-[#25D366]" />
                  </div>
                </div>
                <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 font-mono text-xs uppercase tracking-wider text-white/50">
                  VOICE // CHAT
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                Instant Connect
              </h2>
              <p className="text-white/60 text-sm sm:text-base font-sans leading-relaxed mb-8">
                Need an immediate response or quick consultation? Reach out directly via direct voice call or WhatsApp chat.
              </p>
            </div>

            {/* Actions Area */}
            <div className="space-y-4 pt-6 border-t border-white/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Direct Call Button */}
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center justify-center gap-2 py-4 px-5 rounded-2xl bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 hover:text-black hover:shadow-[0_0_24px_rgba(52,211,153,0.4)] transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>DIRECT CALL ↗</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 px-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#25D366]/20 hover:border-[#25D366]/60 hover:shadow-[0_0_24px_rgba(37,211,102,0.3)] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP ↗</span>
                </a>
              </div>

              {/* Card Footer Status */}
              <div className="flex items-center justify-between pt-2 font-mono text-xs text-white/40">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ACTIVE // LAGOS WAT</span>
                </div>
                <span className="text-white/60 font-semibold">{profile.phone}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Send a Message (Email) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)] transition-all duration-300 group"
          >
            <div>
              {/* Card Top Row */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/80 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 font-mono text-xs uppercase tracking-wider text-white/50">
                  EMAIL
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                Send a Message
              </h2>
              <p className="text-white/60 text-sm sm:text-base font-sans leading-relaxed mb-8">
                Prefer to write it down? Send me a brief overview of your project, technical challenges, or engineering role. I typically respond within 24 hours.
              </p>
            </div>

            {/* Actions Area */}
            <div className="space-y-4 pt-6 border-t border-white/5">
              {/* Direct Email Action Button */}
              <a
                href={`mailto:${profile.email}?subject=Engineering%20Opportunity%20%2F%20Inquiry`}
                onClick={() => {
                  navigator.clipboard.writeText(profile.email);
                  setCopiedEmail(true);
                  setTimeout(() => setCopiedEmail(false), 3000);
                }}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 hover:text-black hover:shadow-[0_0_24px_rgba(52,211,153,0.4)] transition-all shadow-md cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{copiedEmail ? "EMAIL COPIED & OPENING..." : "EMAIL ME ↗"}</span>
              </a>

              {/* Copy Email Pill below Email Button */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] border border-white/5 font-mono text-xs text-white/70">
                <span className="font-semibold text-white truncate">{profile.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all cursor-pointer flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Card Footer Status */}
              <div className="flex items-center justify-between pt-2 font-mono text-xs text-white/40">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>RESPONDS IN &lt; 24 HRS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
