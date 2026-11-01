import React from "react";
import { Mail, Phone, MapPin, ShieldCheck, Check } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export default function ContactInformation() {
  return (
    <div className="space-y-8">
      {/* Intro box */}
      <div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#101522] border border-white/[0.08] text-cyan-300 mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-[#6366F1]" />
          Project Onboarding & Technology Consultancy
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
          Connect With Our Advisory Team
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Techno Cyborg Private Limited is ready to hear about your requirements
          and discuss how our consultancy and project onboarding services may
          support your goals.
        </p>
      </div>

      {/* Official placeholders */}
      <div className="space-y-4">
        <div className="p-5 rounded-2xl bg-[#101522]/80 border border-white/[0.08] flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/30 flex items-center justify-center text-[#6366F1] shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Official Business Email
            </p>
            <p className="text-sm text-white font-medium mt-0.5">
              {COMPANY_INFO.email}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              For initial requests, scoping briefs, and corporate inquiries
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#101522]/80 border border-white/[0.08] flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/10 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Business Contact Number
            </p>
            <p className="text-sm text-white font-medium mt-0.5">
              {COMPANY_INFO.phone}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Direct discussions with onboarding specialists
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#101522]/80 border border-white/[0.08] flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Registered or Office Address
            </p>
            <p className="text-sm text-white font-medium mt-0.5">
              {COMPANY_INFO.address}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Registered corporate entity
            </p>
          </div>
        </div>
      </div>

      {/* Advisory protocol highlights */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#101522] to-[#0A0D17] border border-white/[0.06] space-y-3">
        <h4 className="font-heading text-sm font-semibold text-white">
          What Happens Next?
        </h4>
        <ul className="space-y-2 text-xs text-slate-300">
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>Structured requirement review by senior technology consultants</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>Feasibility and preliminary scope alignment session</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>Recommended roadmap, engagement model, and next steps</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
