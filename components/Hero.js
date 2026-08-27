"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import StackDiagram from "./StackDiagram";
import MagneticButton from "./MagneticButton";

const HEADLINE =
  "I build the layer people click, and the one underneath that makes it work.";

export default function Hero() {
  const headlineRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const words = headlineRef.current.querySelectorAll(".word");

    if (prefersReducedMotion) {
      gsap.set(words, { yPercent: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(words, { yPercent: 120, opacity: 0 });
      gsap.to(words, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.035,
        ease: "power4.out",
        delay: 0.15,
      });
    }, headlineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="mx-auto max-w-content px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-label mb-5"
      >
        Full-stack developer · Taytay, Rizal, PH
      </motion.p>

      <h1
        ref={headlineRef}
        className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.08] max-w-3xl"
      >
        {HEADLINE.split(" ").map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-top pb-1 mr-[0.28em]">
            <span className="word inline-block will-change-transform">{word}</span>
          </span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.85 }}
        className="mt-6 text-lg text-inkSoft max-w-xl leading-relaxed"
      >
        BSIT student and full-stack developer who's shipped a genetic-algorithm
        scheduling engine, a microservices archiving platform, and production
        features at a real dev team. I go from database schema to deployed UI.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 1 }}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <MagneticButton
          href="#projects"
          className="inline-block bg-teal text-white px-5 py-3 rounded-md text-sm font-medium hover:bg-ink transition-colors"
        >
          View my projects
        </MagneticButton>
        <a
          href="/resume-placeholder.pdf"
          className="border border-line px-5 py-3 rounded-md text-sm font-medium text-inkSoft hover:border-teal hover:text-teal transition-colors"
        >
          Download resume
        </a>
      </motion.div>

      <div className="mt-16 md:mt-20">
        <StackDiagram />
      </div>
    </section>
  );
}
