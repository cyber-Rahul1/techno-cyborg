"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function AbstractEcosystemVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse parallax interaction on desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const nodes = [
    { x: "20%", y: "24%", label: "Discover", color: "#6366F1", delay: 0 },
    { x: "78%", y: "22%", label: "Analyze", color: "#8B5CF6", delay: 0.2 },
    { x: "50%", y: "50%", label: "Strategize", color: "#22D3EE", isCore: true, delay: 0.4 },
    { x: "24%", y: "76%", label: "Plan", color: "#6366F1", delay: 0.6 },
    { x: "78%", y: "74%", label: "Support", color: "#8B5CF6", delay: 0.8 },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] flex items-center justify-center [perspective:1000px]"
    >
      {/* Outer ambient glow circles */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#6366F1]/20 blur-3xl -top-6 -left-6 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#22D3EE]/15 blur-3xl -bottom-6 -right-6 pointer-events-none"
      />

      {/* Frame wrapper with 3D tilt & smooth entrance */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full max-w-lg rounded-3xl bg-[#101522]/85 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-8 overflow-hidden shadow-2xl shadow-indigo-950/50 transition-colors duration-500 hover:border-indigo-500/30"
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-tech-grid opacity-50" />

        {/* Concentric orbital rings with slow rotation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-dashed border-white/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-indigo-500/20"
          />
          <motion.div
            animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-28 h-28 rounded-full border border-cyan-400/20"
          />
        </div>

        {/* SVG Interconnected dynamic lines & glowing pulses */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.9" />
            </linearGradient>
            <radialGradient id="pulseGlow">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="1" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Connected lines with strokeDasharray */}
          <line
            x1="20%"
            y1="24%"
            x2="50%"
            y2="50%"
            stroke="url(#lineGrad1)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-80"
          />
          <line
            x1="78%"
            y1="22%"
            x2="50%"
            y2="50%"
            stroke="url(#lineGrad2)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-80"
          />
          <line
            x1="24%"
            y1="76%"
            x2="50%"
            y2="50%"
            stroke="url(#lineGrad1)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-80"
          />
          <line
            x1="78%"
            y1="74%"
            x2="50%"
            y2="50%"
            stroke="url(#lineGrad2)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-80"
          />
          {/* Subtle perimeter links */}
          <line
            x1="20%"
            y1="24%"
            x2="78%"
            y2="22%"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          <line
            x1="24%"
            y1="76%"
            x2="78%"
            y2="74%"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        </svg>

        {/* Floating tech nodes with coordinated staggered entrance & slow float */}
        {nodes.map((node, i) => (
          <motion.div
            key={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: node.x, top: node.y }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, i % 2 === 0 ? -6 : 6, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.4 + node.delay },
              scale: { duration: 0.8, delay: 0.4 + node.delay },
              y: {
                duration: 4.5 + i * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div
              className={`group relative flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                node.isCore
                  ? "bg-[#6366F1]/20 border-cyan-400/60 shadow-xl shadow-cyan-500/20"
                  : "bg-[#080B12]/85 border-white/10 hover:border-indigo-400/40 hover:bg-[#101522]"
              }`}
            >
              {/* Glowing core dot */}
              <div className="relative flex items-center justify-center">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: node.color }}
                />
                <span
                  className="absolute w-4 h-4 rounded-full animate-ping opacity-60"
                  style={{ backgroundColor: node.color }}
                />
              </div>
              <span
                className={`text-xs font-semibold tracking-wide ${
                  node.isCore ? "text-cyan-300" : "text-slate-200"
                }`}
              >
                {node.label}
              </span>
            </div>
          </motion.div>
        ))}

        {/* Bottom card metrics / consultancy blueprint indicators */}
        <div className="absolute bottom-5 left-7 right-7 flex items-center justify-between pt-3 border-t border-white/[0.08] text-[11px] text-slate-400 font-mono">
          <span className="flex items-center gap-2 text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            ONBOARDING PROTOCOL
          </span>
          <span className="text-slate-400">STRUCTURED INITIATIVE v2.4</span>
        </div>
      </motion.div>
    </div>
  );
}
