"use client";

import { motion, useReducedMotion } from "motion/react";

export default function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">About</p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Systems thinking, practical execution.
          </h2>

          <div className="mt-12 grid gap-8 text-base leading-relaxed text-inkSoft lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <p className="max-w-2xl">
              I&apos;m a recent graduate with a BS in Information Technology from
              Emilio Aguinaldo College (2022-2026). I worked as a Software
              Developer Intern at <span className="text-ink">Make Technology</span> in
              Makati, maintaining a React Native app, building Android APKs for
              QA, and shipping features across the SDLC.
            </p>

            <div className="space-y-6">
              <p>
                At school, I led a capstone team building an automated college
                scheduling system powered by a hybrid genetic algorithm. I also
                designed its normalized database with more than 20 tables.
              </p>
              <p className="text-ink">
                I use AI-assisted tools such as Copilot, Codex, and Claude to
                move faster while keeping ownership of the decisions and the
                quality of what I ship.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
