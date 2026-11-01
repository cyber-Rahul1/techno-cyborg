"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Threshold for activating navbar background
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Run on initial mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#080B12]/85 backdrop-blur-md shadow-lg shadow-black/50 py-3.5 border-b border-white/[0.08]"
          : "bg-transparent py-5 border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded-lg"
            aria-label={`${COMPANY_INFO.name} Homepage`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#22D3EE] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-indigo-500/20">
              <div className="w-full h-full bg-[#080B12] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-bold text-lg bg-gradient-to-r from-[#6366F1] to-[#22D3EE] bg-clip-text text-transparent">
                  TC
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-sm sm:text-base tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                TECHNO CYBORG
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 uppercase -mt-0.5">
                Private Limited
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#101522]/70 px-4 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-md shadow-sm">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200",
                    isActive
                      ? "text-white bg-white/10 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-white/[0.08] -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs lg:text-sm font-medium text-white overflow-hidden transition-all duration-300 shadow-sm hover:shadow-indigo-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6366F1]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] transition-opacity group-hover:opacity-90" />
              <span className="relative flex items-center gap-1.5">
                Discuss Your Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#080B12]/98 border-b border-white/[0.08] backdrop-blur-xl px-4 pt-3 pb-6 overflow-hidden"
          >
            <nav className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "text-cyan-300 bg-white/[0.08]"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] shadow-md shadow-indigo-600/30"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
