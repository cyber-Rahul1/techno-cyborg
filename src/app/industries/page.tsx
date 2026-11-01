import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal, StaggerContainer } from "@/components/ScrollAnimations";
import { AUDIENCE_CATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Who We Work With",
  description:
    "Discover how Techno Cyborg Private Limited supports startups, small & medium businesses, corporate organizations, and product teams.",
};

export default function IndustriesPage() {
  return (
    <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#6366F1]/10 via-transparent to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Header */}
        <ScrollReveal className="max-w-3xl space-y-4" yOffset={25}>
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Client Segments
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Supporting Businesses at Every Stage of Their Technology Journey.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether organizing an initial software product vision or structuring planning support for enterprise software initiatives, we provide targeted consultancy tailored to your organizational maturity.
          </p>
        </ScrollReveal>

        {/* 4 Audience Distinctive Sections */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" stagger={0.15}>
          {AUDIENCE_CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              className="stagger-item p-8 sm:p-10 rounded-3xl bg-[#101522] border border-white/[0.08] hover:border-indigo-500/40 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.05] border border-white/10 text-cyan-300">
                    {cat.badge}
                  </span>
                  <span className="font-mono text-sm text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="font-heading text-2xl font-bold text-white mb-3">
                  {cat.title}
                </h2>

                <p className="text-sm text-slate-300 italic mb-6 leading-relaxed">
                  &ldquo;{cat.description}&rdquo;
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Consultancy Focus Areas:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {cat.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/[0.06]">
                <Link
                  href={`/contact?segment=${encodeURIComponent(cat.title)}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-400 hover:text-cyan-300 transition-colors"
                >
                  Discuss Support for {cat.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <ScrollReveal yOffset={25}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#101522] via-[#141A2E] to-[#101522] border border-white/10 text-center max-w-4xl mx-auto space-y-4 shadow-xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Find Clarity for Your Software Initiative
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Connect with our consultants to examine feasibility, roadmap requirements, and team coordination models.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-95 transition-all shadow-lg shadow-indigo-600/30"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
