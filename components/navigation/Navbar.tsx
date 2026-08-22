"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Experience", href: "/#experience", isAnchor: true },
    { label: "Work", href: "/projects" },
    { label: "About", href: "/about" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isAnchor?: boolean) => {
    if (isAnchor) {
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById("experience");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // If clicking the link for the exact page we are already on, scroll smoothly to the very top!
      if (pathname === href) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/projects") {
      return pathname.startsWith("/projects");
    }
    if (href === "/about") {
      return pathname === "/about";
    }
    return false;
  };

  return (
    <header
      className={`fixed z-50 transition-all duration-500 w-full ${
        scrolled ? "top-2 sm:top-4" : "top-3 sm:top-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div
          className={`relative flex items-center justify-between px-2 sm:px-3 py-2 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-[#050505]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo Box on Far Left (Scrolls to top if on Home) */}
          <div className="flex items-center">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center group cursor-pointer"
              aria-label="Home"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 rounded-2xl border border-white/15 bg-white/[0.03] p-1 shadow-sm group-hover:border-white/30 group-hover:bg-white/[0.06] transition-all overflow-hidden">
                <Logo className="w-full h-full" />
              </div>
            </Link>
          </div>

          {/* Nav Capsule & Green CTA Button on Far Right */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop Capsule Nav */}
            <nav className="hidden md:flex items-center bg-white/[0.03] rounded-2xl p-1 border border-white/5 backdrop-blur-md">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.isAnchor)}
                    className={`px-5 py-2 rounded-xl text-xs sm:text-[13px] font-mono uppercase tracking-wider transition-all duration-300 ${
                      active
                        ? "text-white bg-white/15 shadow-sm font-semibold"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Emerald BOOK_CALL CTA */}
            <Link
              href="/call"
              onClick={(e) => {
                if (pathname === "/call") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 sm:py-3 bg-emerald-500 text-black rounded-xl text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider hover:bg-emerald-400 hover:shadow-[0_0_24px_rgba(16,185,129,0.5)] transition-all group"
            >
              <span>Book_Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2">
          <div className="max-w-6xl mx-auto bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-white/5 text-[10px] font-mono text-emerald-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                SYSTEM_NAVIGATOR
              </span>
              <span className="text-white/30">V1.0</span>
            </div>
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.isAnchor)}
                    className={`px-4 py-3 rounded-xl text-sm font-mono uppercase tracking-wider flex items-center justify-between transition-colors ${
                      active
                        ? "text-white bg-white/10 font-bold border border-white/10"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] text-white/30 font-mono">
                      {active ? "[ACTIVE]" : "→"}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="pt-2 border-t border-white/5">
              <Link
                href="/call"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (pathname === "/call") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-500 text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                <span>Book_Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
