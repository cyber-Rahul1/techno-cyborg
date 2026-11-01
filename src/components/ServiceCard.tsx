import React from "react";
import Link from "next/link";
import {
  Compass,
  Cpu,
  GitBranch,
  Network,
  Layers,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  id: string;
  number: string;
  title: string;
  description: string;
  activities?: string[];
  icon: string;
  isDetailed?: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Cpu,
  GitBranch,
  Network,
  Layers,
  CheckCircle2,
};

export default function ServiceCard({
  id,
  number,
  title,
  description,
  activities,
  icon,
  isDetailed = false,
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Compass;

  return (
    <div
      id={id}
      className={cn(
        "group relative rounded-2xl bg-[#101522]/90 border border-white/[0.08] p-6 sm:p-8 transition-all duration-300 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-950/30 flex flex-col justify-between overflow-hidden",
        isDetailed ? "scroll-mt-28" : ""
      )}
    >
      {/* Subtle top edge gradient line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6366F1]/0 to-transparent group-hover:via-[#6366F1] transition-all duration-500" />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#080B12] border border-white/10 flex items-center justify-center text-[#22D3EE] group-hover:text-white group-hover:border-indigo-500/40 group-hover:bg-[#6366F1]/20 transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="font-mono text-xs font-semibold tracking-wider text-slate-400 group-hover:text-indigo-400 transition-colors">
            {number}
          </span>
        </div>

        <h3 className="font-heading text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {description}
        </p>

        {activities && activities.length > 0 && (
          <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Key Activities:
            </p>
            <ul className="space-y-1.5">
              {activities.map((act, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-1.5 shrink-0" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
        {isDetailed ? (
          <Link
            href={`/contact?service=${encodeURIComponent(title)}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-cyan-300 transition-colors"
          >
            Discuss This Service
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <Link
            href={`/services#${id}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 group-hover:text-cyan-300 transition-colors"
          >
            Learn More
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
}
