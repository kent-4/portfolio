"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-white">
      <div className="mx-auto max-w-content px-6 py-20 grid md:grid-cols-[200px_1fr] gap-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label"
        >
          About
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl space-y-5 text-inkSoft leading-relaxed"
        >
          <p>
            I'm a fresh graduate with a BS in Information Technology from Emilio
            Aguinaldo College (2022–2026). I recently worked as a Software
            Developer Intern at{" "}
            <span className="text-ink font-medium">Make Technology</span> in
            Makati, where I maintain a React Native mobile app, build Android
            APKs for QA, and ship features across the full SDLC — from feature
            branches to production.
          </p>
          <p>
            During my studies, I led my capstone team in building an{" "}
            <span className="text-ink font-medium">
              automated college scheduling system
            </span>{" "}
            powered by a hybrid genetic algorithm, and designed a normalized
            database with 20+ tables to support it. I've also built a
            microservices document-archiving platform and a job portal web app —
            projects that took me across Java, Python, and the JavaScript
            ecosystem.
          </p>
          <p>
            I've picked up AI-assisted development tools like Copilot, Codex,
            and Claude along the way — I use them the way I use any other tool
            in the stack: to move faster without cutting corners on what I ship.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
