import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { ScrollReveal, StaggerContainer } from "@/components/ScrollAnimations";
import { SERVICES_LIST } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive technology consultancy and software project onboarding services provided by Techno Cyborg Private Limited.",
};

export default function ServicesPage() {
  return (
    <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#6366F1]/10 via-transparent to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <ScrollReveal className="max-w-3xl space-y-4" yOffset={25}>
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Consultancy Offerings
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Technology Consultancy Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From initial project discussions to implementation planning, we provide structured guidance throughout your software project journey.
          </p>
          <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-[#101522] border border-white/[0.08] text-xs text-slate-400">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              All services represent strategic consultancy, requirement gathering, and project coordination support.
            </span>
          </div>
        </ScrollReveal>

        {/* Services Grid (All 6 services with full activities and dedicated CTAs) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.1}>
          {SERVICES_LIST.map((service) => (
            <div key={service.id} className="stagger-item">
              <ServiceCard
                id={service.id}
                number={service.number}
                title={service.title}
                description={service.description}
                activities={service.activities}
                icon={service.icon}
                isDetailed={true}
              />
            </div>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <ScrollReveal yOffset={25}>
          <div className="p-8 sm:p-12 rounded-3xl bg-[#101522] border border-white/[0.08] text-center space-y-4 max-w-4xl mx-auto shadow-xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Need Guidance Tailored to Your Specific Initiative?
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Contact us to discuss your project parameters, technology expectations, and onboarding requirements.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-95 transition-all shadow-lg shadow-indigo-600/30"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
