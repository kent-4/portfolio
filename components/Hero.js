"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import StackDiagram from "./StackDiagram";

const HEADLINE = "I build reliable products from the data layer up.";
const SUPPORTING_COPY =
  "Full-stack developer focused on Java, React, Python, and practical systems that ship.";
// Configure only verified assets. A profile uses { src, alt }; resume is a URL.
const heroAssets = { profile: null, resume: null };

function HeroPortrait({ profile }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-xl border border-line bg-surface"
    >
      <Image
        src={profile.src}
        alt={profile.alt}
        fill
        priority
        sizes="(min-width: 1024px) 240px, 288px"
        className="object-cover"
      />
    </motion.div>
  );
}

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="top">
      <div className="mx-auto max-w-content px-4 pb-12 pt-10 sm:px-6 lg:pb-16 lg:pt-12">
        <div className={`grid items-start gap-8 ${heroAssets.profile ? "lg:grid-cols-[minmax(0,1fr)_240px]" : ""}`}>
          <div className="min-w-0">
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow mb-5"
            >
              Full-stack developer
            </motion.p>

            <motion.h1
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[26ch] font-display text-[36px] font-semibold leading-[1.08] tracking-[-0.04em] text-ink sm:text-[48px] lg:text-[56px]"
            >
              {HEADLINE}
            </motion.h1>

            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-[65ch] text-base leading-[1.65] text-inkSoft"
            >
              {SUPPORTING_COPY}
            </motion.p>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="whitespace-nowrap rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-ink hover:text-canvas"
              >
                See selected work
              </a>
              {heroAssets.resume && (
                <a
                  href={heroAssets.resume}
                  className="whitespace-nowrap rounded-lg border border-line px-5 py-3 text-sm font-medium text-inkSoft transition-colors hover:border-accent hover:text-accent"
                >
                  Download resume
                </a>
              )}
            </motion.div>
          </div>

          {heroAssets.profile && <HeroPortrait profile={heroAssets.profile} />}
        </div>

        <div className="mt-8 rounded-xl border border-line bg-surface p-4 md:p-5">
          <StackDiagram />
        </div>
      </div>
    </section>
  );
}
