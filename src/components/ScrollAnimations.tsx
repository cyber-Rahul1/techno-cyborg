"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  stagger?: number;
  parallaxSpeed?: number; // e.g. -20 to 20 for subtle vertical parallax
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  parallaxSpeed = 0,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // Entrance reveal
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Optional parallax if parallaxSpeed is provided
      if (parallaxSpeed !== 0) {
        gsap.to(el, {
          y: parallaxSpeed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [delay, duration, yOffset, parallaxSpeed]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
  yOffset?: number;
  selector?: string;
}

export function StaggerContainer({
  children,
  className = "",
  stagger = 0.12,
  duration = 0.7,
  yOffset = 25,
  selector = ".stagger-item",
}: StaggerContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const items = el.querySelectorAll(selector);
    if (!items.length) return;

    if (prefersReducedMotion) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [stagger, duration, yOffset, selector]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
