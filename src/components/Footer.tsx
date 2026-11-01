import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Shield } from "lucide-react";
import { COMPANY_INFO, SERVICES_LIST } from "@/lib/data";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#05070B] border-t border-white/[0.08] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gradient-to-b from-[#6366F1]/10 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.08]">
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#22D3EE] p-[1.5px]">
                <div className="w-full h-full bg-[#080B12] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-bold text-sm bg-gradient-to-r from-[#6366F1] to-[#22D3EE] bg-clip-text text-transparent">
                    TC
                  </span>
                </div>
              </div>
              <span className="font-heading font-bold tracking-wide text-white text-base">
                {COMPANY_INFO.name}
              </span>
            </Link>
            <p className="text-sm text-slate-300 font-medium">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your trusted partner for software project onboarding and technology consultancy.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#101522] border border-white/[0.08] text-cyan-300">
                <Shield className="w-3.5 h-3.5 text-[#6366F1]" />
                Professional Technology Consultancy
              </span>
            </div>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
              Company
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-slate-400 hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-white transition-colors">
                  Who We Work With
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services list */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
              Services
            </p>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-slate-400 hover:text-white transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact placeholders */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
              Official Contact
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#6366F1] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {COMPANY_INFO.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors focus:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors focus:underline"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
