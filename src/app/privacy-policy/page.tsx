import React from "react";
import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy and data handling guidelines for ${COMPANY_INFO.name}.`,
};

export default function PrivacyPolicyPage() {
  const currentYear = "2026";

  return (
    <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-300">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            Legal & Compliance
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: January {currentYear} | Applicable to {COMPANY_INFO.name}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-white">
              1. Introduction
            </h2>
            <p>
              {COMPANY_INFO.name} (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy and ensuring your personal information is handled with care and confidentiality. This Privacy Policy describes how we collect, use, and protect information when you visit our website or submit an inquiry for software project onboarding and technology consultancy services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-white">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide when submitting a project inquiry, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Full Name and Company / Organization Name</li>
              <li>Official Business Email Address and Phone Number</li>
              <li>Project Type, Scope, Requirements, and Expected Timelines</li>
              <li>Any supplementary documents, architectural descriptions, or technical context shared with us</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-white">
              3. Purpose of Processing
            </h2>
            <p>
              The information you submit is used strictly for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Evaluating and analyzing your software project onboarding requirements</li>
              <li>Communicating with you regarding technical feasibility, consultancy scope, and project proposals</li>
              <li>Internal record-keeping and business administration</li>
              <li>Complying with applicable legal and regulatory obligations</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-white">
              4. Data Protection & Confidentiality
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards to secure the data submitted through our forms. We treat your project specifications and requirements with strict professional confidence. We do not sell, rent, or lease your personal information to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-white">
              5. Contact Information
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request data updates, please contact:
            </p>
            <div className="p-4 rounded-xl bg-[#101522] border border-white/[0.08] text-xs font-mono text-slate-300 space-y-1">
              <p>Entity: {COMPANY_INFO.name}</p>
              <p>Email: {COMPANY_INFO.email}</p>
              <p>Address: {COMPANY_INFO.address}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
