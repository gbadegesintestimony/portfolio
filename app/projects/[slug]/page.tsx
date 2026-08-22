import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Globe,
  Terminal,
  ShieldCheck,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  AlertCircle,
  FileCode2,
  Flame,
  ExternalLink,
  Zap,
} from "lucide-react";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Testimony Gbadegesin`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 sm:pt-36 pb-24 overflow-hidden">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-lg pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Breadcrumb Header matching Reference */}
        <div className="mb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase">
            <Link href="/projects" className="hover:text-emerald-300 transition-colors">
              PROJECTS
            </Link>
            <span className="text-white/30">/</span>
            <span>{project.slug.replace(/-/g, "_").toUpperCase()}</span>
          </div>
        </div>

        {/* Page Title & Subtitle */}
        <div className="mb-10 space-y-2">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white">
            {project.title}
          </h1>
          <p className="text-xl sm:text-2xl text-white/60 font-sans font-normal">
            {project.subtitle}
          </p>
        </div>

        {/* Hero Preview Section (Two Columns: Wide Mac Window on Left, Sticky Manifest on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-20 items-start">
          {/* Left Column: Mac Terminal Preview Window */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-[#0A0A0A] border border-white/10 overflow-hidden shadow-2xl">
              {/* Chrome Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-white/[0.02] border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-white/40 text-xs font-mono">
                  sys://projects/{project.slug}/dashboard
                </div>
                <div className="text-emerald-400/70 text-[11px] font-mono">[PREVIEW]</div>
              </div>

              {/* Screenshot Area */}
              <div className="relative aspect-[16/9] w-full bg-[#050505] overflow-hidden group p-2">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    fill
                    sizes="(max-width: 1280px) 100vw, 850px"
                    className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center bg-gradient-to-br from-black via-[#080808] to-[#0A0A0A]">
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                      <Terminal className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-mono mb-2">
                      {project.title} · System Console
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-white/50 max-w-md">
                      High-concurrency architecture, deterministic workflows, and production telemetry verified.
                    </p>
                  </div>
                )}
                {/* Caption on bottom right */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 font-mono text-[10px] text-white/70 tracking-wider">
                  FIG 1.0 // DASHBOARD_VIEW
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Manifest Card matching Reference */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-5">
              <div className="p-7 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6 shadow-2xl">
                {/* Manifest Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs font-mono text-emerald-400 font-bold tracking-wider">
                  <span># MANIFEST</span>
                </div>

                {/* Status */}
                <div className="space-y-1">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/40 block">
                    STATUS
                  </span>
                  <div className="flex items-center gap-2 font-mono text-sm font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{project.status === "PRODUCTION" ? "Active Deployment" : project.status}</span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-1">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/40 block">
                    TIMELINE
                  </span>
                  <div className="font-mono text-sm font-semibold text-white">
                    {project.timeline}
                  </div>
                </div>

                {/* Role */}
                <div className="space-y-1">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/40 block">
                    ROLE
                  </span>
                  <div className="font-mono text-sm font-semibold text-white">
                    {project.role}
                  </div>
                </div>

                {/* Source or Demo Action Button */}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all shadow-md group"
                  >
                    <span>EXECUTE_DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all shadow-md group"
                  >
                    <span>VIEW_SOURCE</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <div className="w-full flex items-center justify-center gap-2 py-3.5 bg-white/5 border border-white/10 text-white/80 font-mono font-bold text-xs uppercase tracking-wider rounded-xl">
                    <span>PRODUCTION_VERIFIED</span>
                  </div>
                )}

                {/* In-Page Jump Navigation matching Reference */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <span className="font-mono text-[10px] font-bold text-white/30 uppercase tracking-wider block">
                    NAVIGATION
                  </span>
                  <div className="space-y-1 font-mono text-xs">
                    <a
                      href="#overview"
                      className="block px-3 py-2 rounded-lg bg-white/10 text-white font-bold border border-white/10"
                    >
                      System Overview
                    </a>
                    <a
                      href="#modules"
                      className="block px-3 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Core Modules
                    </a>
                    <a
                      href="#dependencies"
                      className="block px-3 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Dependencies
                    </a>
                    <a
                      href="#engineering-logs"
                      className="block px-3 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Engineering Logs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="max-w-4xl space-y-20">
          {/* 1. System Overview */}
          <section id="overview" className="space-y-6 scroll-mt-28">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-sans">
              {project.summary}
            </p>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed font-sans">
              {project.problemSpace}
            </p>
          </section>

          {/* 2. Core Modules matching Reference (>_ Core Modules) */}
          <section id="modules" className="space-y-8 scroll-mt-28">
            <div className="flex items-center gap-2 text-xl font-bold text-white font-mono">
              <span className="text-emerald-500">{">_"}</span>
              <span>Core Modules</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {project.coreModules.map((mod, idx) => (
                <div
                  key={mod.name}
                  className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all space-y-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-emerald-400">
                    {idx === 0 && <Cpu className="w-5 h-5" />}
                    {idx === 1 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 2 && <Zap className="w-5 h-5" />}
                    {idx === 3 && <Layers className="w-5 h-5" />}
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {mod.name}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed font-sans">
                    {mod.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Dependencies */}
          <section id="dependencies" className="space-y-6 scroll-mt-28">
            <div className="flex items-center gap-2 text-xl font-bold text-white font-mono">
              <span className="text-emerald-500">{">_"}</span>
              <span>Dependencies</span>
            </div>

            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm font-mono text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Engineering Logs */}
          <section id="engineering-logs" className="space-y-8 scroll-mt-28">
            <div className="flex items-center gap-2 text-xl font-bold text-white font-mono">
              <span className="text-emerald-500">{">_"}</span>
              <span>Engineering Logs</span>
            </div>

            <div className="space-y-6">
              {project.engineeringLogs.map((log) => (
                <div
                  key={log.number}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono text-xs font-bold text-emerald-400">
                      {log.number}
                    </span>
                    <h4 className="text-xl font-bold text-white">
                      {log.title}
                    </h4>
                  </div>

                  <div className="space-y-3 font-mono text-xs sm:text-sm">
                    <div>
                      <span className="text-rose-400 font-bold uppercase text-[11px] block">
                        [Problem]
                      </span>
                      <p className="text-white/70 font-sans pt-1">
                        {log.problem}
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="text-emerald-400 font-bold uppercase text-[11px] block">
                        [Architectural Solution]
                      </span>
                      <p className="text-white/80 font-sans pt-1">
                        {log.solution}
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="text-amber-400 font-bold uppercase text-[11px] block">
                        [Engineering Trade-off]
                      </span>
                      <p className="text-white/60 font-sans pt-1">
                        {log.tradeOff}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Next Project Footer Link */}
          <div className="pt-10 border-t border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-white/40 uppercase block">Next Case Study</span>
                <h4 className="text-2xl font-bold text-white mt-1">
                  {nextProject.title}
                </h4>
                <p className="text-sm font-mono text-emerald-400/80">
                  {nextProject.subtitle}
                </p>
              </div>

              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all shadow-md group"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
