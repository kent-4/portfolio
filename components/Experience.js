"use client";

import { motion } from "motion/react";

const bullets = [
  "Resolved QA-reported issues in a React Native app — UI layouts, state management, form validation — improving stability and UX.",
  "Built Android APKs in Android Studio for QA testing and regression validation, keeping build delivery on schedule.",
  "Developed a Report Extraction page with React.js, Next.js, and TypeScript, letting users export reports to Excel.",
  "Worked in Git Flow with feature branches and pull requests; tracked work in Jira and coordinated with the team in Slack.",
  "Took part in the full SDLC — feature development, code review, debugging, testing, and QA validation — end to end.",
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-20 grid md:grid-cols-[200px_1fr] gap-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label"
        >
          Experience
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
            <h3 className="font-display text-xl font-semibold">
              Software Developer Intern
            </h3>
            <span className="tag text-inkFaint">Feb 2026 – May 2026</span>
          </div>
          <p className="text-teal font-medium mb-5">
            Make Technology · Makati, Philippines
          </p>
          <ul className="space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-inkSoft leading-relaxed">
                <span className="text-teal mt-2 h-1.5 w-1.5 rounded-full bg-teal flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
