import React, { Suspense } from "react";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactInformation from "@/components/ContactInformation";
import { ScrollReveal } from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Contact Us | Discuss Your Project",
  description:
    "Connect with Techno Cyborg Private Limited for software project onboarding and technology consultancy inquiries.",
};

export default function ContactPage() {
  return (
    <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#6366F1]/15 via-transparent to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Top Heading */}
        <ScrollReveal className="max-w-3xl mb-12 sm:mb-16 space-y-4" yOffset={25}>
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Inquiry & Onboarding
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Discuss Your Next Project
          </h1>
          <div className="text-sm sm:text-base text-slate-300 space-y-3 leading-relaxed">
            <p>
              Have a software project in mind? Looking for guidance to get started?
            </p>
            <p>
              Techno Cyborg Private Limited is ready to hear about your requirements and discuss how our consultancy and project onboarding services may support your goals.
            </p>
            <p className="text-indigo-300 font-medium">
              Share your project details with us, and let&apos;s explore the next steps together.
            </p>
          </div>
        </ScrollReveal>

        {/* Dual Grid: Contact Form (Left) & Official Information (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <ScrollReveal yOffset={30}>
              <Suspense fallback={<div className="text-slate-400 text-sm">Loading inquiry form...</div>}>
                <ContactForm />
              </Suspense>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5">
            <ScrollReveal yOffset={30} delay={0.15}>
              <ContactInformation />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
