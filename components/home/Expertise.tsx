import React from "react";
import { Server, Database, ShieldCheck, Layers, ArrowUpRight } from "lucide-react";

export function Expertise() {
  const pillars = [
    {
      number: "01",
      title: "Distributed & Backend Systems",
      tag: "HIGH_THROUGHPUT_APIS",
      icon: Server,
      description:
        "Engineering high-concurrency REST services, worker queues, background job runners, and deterministic data flow using Go, NestJS, and Node.js.",
      skills: ["Go (Gin)", "NestJS", "Node.js", "Redis / BullMQ", "Background Workers", "Microservices"],
    },
    {
      number: "02",
      title: "Relational Persistence & ACID",
      tag: "DATABASE_INTEGRITY",
      icon: Database,
      description:
        "Designing normalized PostgreSQL schemas, strictly scoped multi-tenant data models, indexing strategies, balance check constraints, and Prisma migrations.",
      skills: ["PostgreSQL (Supabase)", "Prisma ORM", "MongoDB", "ACID Transactions", "Query Optimization"],
    },
    {
      number: "03",
      title: "Zero-Trust Application Security",
      tag: "DEFENSE_IN_DEPTH",
      icon: ShieldCheck,
      description:
        "Building defense-in-depth security from Day 1: JWT token rotation, role-based access control (RBAC), CSRF protection, input sanitization, and audit logging.",
      skills: ["JWT Rotation", "RBAC Matrix", "CSRF Protection", "Rate Limiting", "Audit Trails", "Bcrypt / Scrypt"],
    },
    {
      number: "04",
      title: "Full-Stack Delivery & Modern UI",
      tag: "TYPE_SAFE_EXPERIENCES",
      icon: Layers,
      description:
        "Delivering responsive, accessible, and fast web applications with Tailwind CSS, React, and Next.js, backed by type-safe API client contracts.",
      skills: ["Tailwind CSS", "Next.js (App Router)", "React", "TypeScript", "Vite", "Design Systems"],
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 border-b border-white/5 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-500 font-semibold">
                EXPERTISE // CORE_DISCIPLINES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              What I Bring to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">
                Engineering Teams
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/50 max-w-md leading-relaxed font-sans">
            A production-first engineering approach prioritizing maintainability, data integrity, robust security models, and clean system boundaries.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Row: Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-white/40 group-hover:text-emerald-400 transition-colors tracking-wider">
                      [{pillar.number}] {pillar.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-white/60 group-hover:text-white/80 group-hover:border-white/10 transition-colors"
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
