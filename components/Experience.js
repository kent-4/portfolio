"use client";

import { motion, useReducedMotion } from "motion/react";

const bullets = [
  "Resolved QA-reported issues in a React Native app across UI layouts, state management, and form validation.",
  "Built Android APKs in Android Studio for QA testing and regression validation.",
  "Developed a Report Extraction page with React.js, Next.js, and TypeScript that exports reports to Excel.",
  "Worked in Git Flow with feature branches and pull requests while tracking work in Jira and coordinating in Slack.",
  "Contributed across the full SDLC, including feature development, code review, debugging, testing, and QA validation.",
];

export default function Experience() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="experience" className="border-t border-line bg-canvas">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Experience</p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Building with a team.
          </h2>

          <div className="mt-12 grid gap-8 border-b border-line pb-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink">
                Software Developer Intern
              </h3>
              <p className="mt-2 text-accent">
                Make Technology, Makati, Philippines
              </p>
            </div>
            <span className="tag text-inkFaint">Feb 2026 - May 2026</span>
          </div>

          <ul className="divide-y divide-line">
            {bullets.map((bullet, index) => (
              <li
                key={bullet}
                className="grid gap-3 py-5 text-inkSoft md:grid-cols-[48px_minmax(0,1fr)] md:gap-6"
              >
                <span className="tag text-accent">0{index + 1}</span>
                <span className="max-w-3xl leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
