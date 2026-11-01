import React from "react";
import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and conditions for consulting engagements and website usage at ${COMPANY_INFO.name}.`,
};

export default function TermsPage() {
  const currentYear = "2026";

  return (
    <div className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-300">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase">
            Legal & Compliance
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-xs text-slate-400">
            Effective Date: January {currentYear} | Applicable to {COMPANY_INFO.name}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you should discontinue use of this site immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-white">
              2. Nature of Services
            </h2>
            <p>
              {COMPANY_INFO.name} specializes in software project onboarding, requirement gathering, development team coordination, and technology consultancy. The materials and information provided on this website are for general informational purposes and do not constitute a formal binding service contract. Formal engagements are governed by separate, mutually executed Master Services Agreements or Statements of Work.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-white">
              3. Intellectual Property
            </h2>
            <p>
              All content on this website, including texts, visual designs, icons, logos, brand elements, and underlying code, is the property of {COMPANY_INFO.name} and protected by applicable copyright and intellectual property laws. Unauthorized reproduction or distribution is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-white">
              4. Disclaimer of Warranties & Limitation of Liability
            </h2>
            <p>
              While we strive to keep all information on this site accurate and up to date, {COMPANY_INFO.name} provides the site &ldquo;as is&rdquo; without warranties of any kind. Under no circumstances shall {COMPANY_INFO.name} be liable for any direct, indirect, or consequential damages resulting from the use or inability to use this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-white">
              5. Governing Law
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the applicable laws of the jurisdiction where {COMPANY_INFO.name} is incorporated.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-white">
              6. Inquiries
            </h2>
            <div className="p-4 rounded-xl bg-[#101522] border border-white/[0.08] text-xs font-mono text-slate-300 space-y-1">
              <p>Corporate: {COMPANY_INFO.name}</p>
              <p>Email: {COMPANY_INFO.email}</p>
              <p>Address: {COMPANY_INFO.address}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
