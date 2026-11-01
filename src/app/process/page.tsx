import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { ScrollReveal, StaggerContainer } from "@/components/ScrollAnimations";
import { PROCESS_STAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Explore the five-stage structured methodology used by Techno Cyborg Private Limited: Discover, Analyze, Strategize, Plan, and Support.",
};

export default function ProcessPage() {
  return (
    <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#6366F1]/10 via-transparent to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Header */}
        <ScrollReveal className="max-w-3xl space-y-4" yOffset={25}>
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Structured Execution
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            A Clear Path From Idea to Implementation.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every project deserves a structured beginning. We guide organizations through a disciplined five-stage onboarding framework.
          </p>
        </ScrollReveal>

        {/* Five Stage Detailed Timeline */}
        <StaggerContainer className="space-y-10" stagger={0.15}>
          {PROCESS_STAGES.map((step) => (
            <div
              key={step.stage}
              className="stagger-item p-6 sm:p-10 rounded-3xl bg-[#101522] border border-white/[0.08] hover:border-indigo-500/40 transition-all shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden"
            >
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-cyan-300 border border-indigo-500/30">
                    STAGE {step.stage}
                  </span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  {step.name}
                </h2>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  &ldquo;{step.description}&rdquo;
                </p>
              </div>

              <div className="lg:col-span-4 space-y-3 border-t lg:border-t-0 lg:border-l border-white/[0.06] pt-6 lg:pt-0 lg:pl-8">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  Key Stage Activities
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {step.activities.map((act, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4 space-y-3 border-t lg:border-t-0 lg:border-l border-white/[0.06] pt-6 lg:pt-0 lg:pl-8">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Expected Stage Outcome
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#080B12]/80 p-4 rounded-xl border border-white/[0.06]">
                  {step.expectedOutcome}
                </p>
              </div>
            </div>
          ))}
        </StaggerContainer>

        {/* Final CTA */}
        <ScrollReveal className="text-center max-w-2xl mx-auto space-y-6 pt-8" yOffset={20}>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Ready to Begin Phase 01: Discover?
          </h2>
          <p className="text-sm text-slate-400">
            Let us structure your software project journey with clarity, rigor, and technical foresight.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-95 transition-all shadow-lg shadow-indigo-600/30"
            >
              Initiate Project Discussions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
