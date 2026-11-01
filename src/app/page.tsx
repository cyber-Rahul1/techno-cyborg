"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, ShieldCheck, Layers, Sparkles } from "lucide-react";
import AbstractEcosystemVisual from "@/components/AbstractEcosystemVisual";
import ServiceCard from "@/components/ServiceCard";
import { ScrollReveal, StaggerContainer } from "@/components/ScrollAnimations";
import {
  COMPANY_INFO,
  SERVICES_LIST,
  WHY_CHOOSE_US,
  PROCESS_STAGES,
  AUDIENCE_CATEGORIES,
} from "@/lib/data";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background illumination gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-[#6366F1]/18 via-[#8B5CF6]/8 to-transparent pointer-events-none blur-3xl -z-10" />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO (Decluttered, spacious 55/45 layout with coordinated reveal) */}
      {/* ========================================================================= */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (approx 55%) */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            {/* 1. Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#101522] border border-white/10 text-cyan-300 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
              <span className="tracking-wider uppercase font-mono text-[11px]">
                {COMPANY_INFO.credibilityBadge}
              </span>
            </motion.div>

            {/* 2. Main Headline (dominant) */}
            <div className="space-y-5">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-4xl sm:text-6xl lg:text-[4rem] font-extrabold tracking-tight text-white leading-[1.08]"
              >
                Empowering Ideas. <br />
                <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#22D3EE] bg-clip-text text-transparent">
                  Enabling Technology.
                </span> <br />
                Delivering Possibilities.
              </motion.h1>

              {/* 3. Supporting Headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-lg sm:text-xl text-slate-200 font-medium max-w-2xl leading-snug"
              >
                {COMPANY_INFO.supportingHeadline}
              </motion.p>
            </div>

            {/* 4. Short Concise Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal"
            >
              We help businesses transform ideas into structured technology initiatives through strategic guidance, requirement analysis, and professional project planning.
            </motion.p>

            {/* 5. CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] via-[#7C3AED] to-[#8B5CF6] hover:opacity-95 transition-all shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02]"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-slate-200 bg-[#101522]/90 border border-white/10 hover:bg-white/[0.08] hover:text-white transition-all hover:scale-[1.02]"
              >
                Explore Our Services
              </Link>
            </motion.div>

            {/* Subtle Scroll Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-4 flex items-center gap-3 text-xs text-slate-400"
            >
              <span className="inline-block w-4 h-4 rounded-full border border-slate-600 border-t-cyan-400 animate-spin" />
              <span>Scroll to explore strategic capabilities & framework</span>
            </motion.div>
          </div>

          {/* Right Column (approx 45%): Abstract Ecosystem Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <AbstractEcosystemVisual />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 1.5: SUPPORTING STATEMENT & MISSION BRIDGE (Relocated from Hero) */}
      {/* ========================================================================= */}
      <section className="py-12 border-y border-white/[0.06] bg-[#0A0E18]/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal yOffset={20} duration={0.8}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-[#101522]/60 border border-white/[0.08]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#22D3EE] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                  &ldquo;{COMPANY_INFO.additionalHeroDescription}&rdquo;
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 hover:text-cyan-300 transition-colors whitespace-nowrap"
              >
                About Our Approach
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: INTRODUCTION & 3 PHASES */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#0A0E18] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mb-16" yOffset={25}>
            <span className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase">
              Consultancy Foundation
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
              Turning Business Ideas Into Structured Technology Initiatives.
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Every successful software project starts with a clear understanding of its objectives. We help businesses establish that clarity through structured discussions, requirement analysis, technology guidance, and project planning.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.15}>
            {/* Highlight 1: Understand */}
            <div className="stagger-item p-8 rounded-2xl bg-[#101522]/80 border border-white/[0.08] relative group hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/30">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
                Phase 01
              </span>
              <h3 className="font-heading text-xl font-bold text-white mt-1 mb-2 group-hover:text-cyan-300 transition-colors">
                Understand
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Understand business objectives and project expectations through in-depth discovery.
              </p>
            </div>

            {/* Highlight 2: Strategize */}
            <div className="stagger-item p-8 rounded-2xl bg-[#101522]/80 border border-white/[0.08] relative group hover:border-violet-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-violet-950/30">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider">
                Phase 02
              </span>
              <h3 className="font-heading text-xl font-bold text-white mt-1 mb-2 group-hover:text-cyan-300 transition-colors">
                Strategize
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Identify suitable technology approaches, architectural models, and implementation strategies.
              </p>
            </div>

            {/* Highlight 3: Execute with Clarity */}
            <div className="stagger-item p-8 rounded-2xl bg-[#101522]/80 border border-white/[0.08] relative group hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-[#22D3EE] border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-[#22D3EE] uppercase tracking-wider">
                Phase 03
              </span>
              <h3 className="font-heading text-xl font-bold text-white mt-1 mb-2 group-hover:text-cyan-300 transition-colors">
                Execute with Clarity
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Establish structured roadmaps, stakeholder alignment, and coordinated next steps.
              </p>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: SERVICES OVERVIEW */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal yOffset={25}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
                Core Capabilities
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
                Technology Consultancy That Moves Your Ideas Forward.
              </h2>
              <p className="text-base text-slate-400 leading-relaxed">
                From initial project discussions to implementation planning, we provide structured guidance throughout your software project journey.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-cyan-300 transition-colors whitespace-nowrap"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" stagger={0.1}>
          {SERVICES_LIST.map((service) => (
            <div key={service.id} className="stagger-item">
              <ServiceCard
                id={service.id}
                number={service.number}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
              />
            </div>
          ))}
        </StaggerContainer>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: WHY CHOOSE US */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#0A0E18] border-y border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16" yOffset={25}>
            <span className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase">
              Our Principles
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
              Why Businesses Choose Techno Cyborg
            </h2>
            <p className="text-base text-slate-400">
              Clear direction, technical acumen, and dedicated support for your technology roadmap.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.12}>
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.number}
                className="stagger-item p-8 rounded-2xl bg-[#101522]/90 border border-white/[0.08] relative group hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-950/30"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-white/20 group-hover:text-indigo-400 transition-colors block mb-4">
                    {item.number}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    &ldquo;{item.description}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: OUR WORKING PROCESS */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16" yOffset={25}>
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Structured Execution
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
            A Clear Path From Idea to Implementation.
          </h2>
          <p className="text-base text-slate-400">
            Every project deserves a structured beginning.
          </p>
        </ScrollReveal>

        {/* Timeline with responsive staggered reveal */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-6 relative" stagger={0.12}>
          {PROCESS_STAGES.map((step) => (
            <div
              key={step.stage}
              className="stagger-item relative p-6 rounded-2xl bg-[#101522] border border-white/[0.08] flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/20"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    STAGE {step.stage}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                </div>
                <h3 className="font-heading text-base font-bold text-white mb-2">
                  {step.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  &ldquo;{step.description}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </StaggerContainer>

        <ScrollReveal className="mt-12 text-center" yOffset={15}>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 hover:text-cyan-300 transition-colors"
          >
            Review Full Process Breakdown
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: WHO WE WORK WITH */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#0A0E18] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16" yOffset={25}>
            <span className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase">
              Target Audiences
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
              Supporting Businesses at Every Stage of Their Technology Journey.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.12}>
            {AUDIENCE_CATEGORIES.map((aud) => (
              <div
                key={aud.id}
                className="stagger-item p-6 rounded-2xl bg-[#101522] border border-white/[0.08] flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/20"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-white/[0.05] text-cyan-300 mb-4">
                    {aud.badge}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white mb-3">
                    {aud.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    &ldquo;{aud.description}&rdquo;
                  </p>
                </div>
                <Link
                  href="/industries"
                  className="text-xs font-semibold text-indigo-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  Explore Support
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: BRAND STATEMENT */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal yOffset={30}>
            <div className="rounded-3xl bg-gradient-to-r from-[#101522] via-[#141A2E] to-[#101522] border border-white/10 p-8 sm:p-14 lg:p-16 text-center max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
              {/* Ambient lighting inside CTA card */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#6366F1]/20 rounded-full blur-3xl pointer-events-none" />

              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 relative z-10">
                Your Vision Deserves the Right Direction.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 relative z-10">
                Let&apos;s work together to establish the foundation for your next technology initiative.
              </p>
              <div className="relative z-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-95 transition-all shadow-xl shadow-indigo-600/30 hover:scale-[1.02]"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: FINAL CONTACT CTA */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#0A0E18] border-t border-white/[0.06]">
        <ScrollReveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6" yOffset={25}>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white">
            Let&apos;s Build the Future of Technology Together.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have a software project in mind? Looking for guidance to get started? Let&apos;s discuss your requirements and explore the next steps together.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#22D3EE] hover:opacity-95 transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.02]"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
