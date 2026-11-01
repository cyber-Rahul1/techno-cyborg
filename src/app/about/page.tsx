import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lightbulb, ShieldCheck, HeartHandshake, Users, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer } from "@/components/ScrollAnimations";
import { CORE_VALUES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Techno Cyborg Private Limited, our mission, vision, and core values in software project onboarding and technology consultancy.",
};

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  ShieldCheck,
  HeartHandshake,
  Users,
  Sparkles,
};

export default function AboutPage() {
  return (
    <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#6366F1]/12 via-transparent to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* Header Introduction */}
        <ScrollReveal className="max-w-3xl space-y-6" yOffset={25}>
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Corporate Profile
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Techno Cyborg Private Limited
          </h1>
          <p className="text-base sm:text-lg text-indigo-300 font-medium leading-relaxed">
            &ldquo;Techno Cyborg Private Limited is a technology-focused consultancy firm committed to simplifying software project onboarding and helping clients navigate the evolving digital landscape.&rdquo;
          </p>
          <div className="text-sm sm:text-base text-slate-300 space-y-4 leading-relaxed pt-2">
            <p>
              We work to understand our clients&apos; business objectives, technical requirements, and project expectations to establish a clear foundation for software initiatives. Our approach emphasizes structured planning, effective communication, requirement analysis, and suitable technology strategies.
            </p>
            <p>
              We believe that successful software projects begin with a strong understanding of business needs and a well-defined execution plan.
            </p>
            <p>
              By bringing together strategic thinking, technology insights, and a commitment to client satisfaction, we aim to help businesses make informed decisions and pursue their digital goals with confidence.
            </p>
          </div>
        </ScrollReveal>

        {/* Mission and Vision Dual Editorial Layout */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" stagger={0.15}>
          {/* Mission */}
          <div className="stagger-item p-8 sm:p-10 rounded-3xl bg-[#101522] border border-white/[0.08] relative overflow-hidden group hover:border-indigo-500/40 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 font-heading font-bold text-lg">
              01
            </div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              &ldquo;To simplify software project initiation and provide practical technology consultancy that helps businesses turn their ideas into actionable project plans.&rdquo;
            </p>
          </div>

          {/* Vision */}
          <div className="stagger-item p-8 sm:p-10 rounded-3xl bg-[#101522] border border-white/[0.08] relative overflow-hidden group hover:border-cyan-500/40 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-[#22D3EE] flex items-center justify-center mb-6 font-heading font-bold text-lg">
              02
            </div>
            <h2 className="font-heading text-2xl font-bold text-white mb-4">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              &ldquo;To become a trusted technology consultancy partner, recognized for helping businesses navigate software projects and embrace digital opportunities.&rdquo;
            </p>
          </div>
        </StaggerContainer>

        {/* Core Values Section */}
        <div className="space-y-12">
          <ScrollReveal className="text-center max-w-2xl mx-auto" yOffset={20}>
            <span className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase">
              Ethos & Standards
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white mt-2">
              Our Core Values
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              The foundational principles that guide every client interaction and consultancy recommendation.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {CORE_VALUES.map((val) => {
              const IconComp = iconMap[val.icon] || Sparkles;
              return (
                <div
                  key={val.title}
                  className="stagger-item p-6 sm:p-8 rounded-2xl bg-[#101522]/90 border border-white/[0.08] hover:border-indigo-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#080B12] border border-white/10 flex items-center justify-center text-cyan-300 mb-5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </StaggerContainer>
        </div>

        {/* CTA Banner */}
        <ScrollReveal yOffset={25}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#101522] via-[#151C30] to-[#101522] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Ready to Discuss Your Project Architecture?
              </h3>
              <p className="text-sm text-slate-400">
                Schedule an introductory consultation with our technology advisory team.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-95 transition-all shadow-lg shadow-indigo-600/30 whitespace-nowrap"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
