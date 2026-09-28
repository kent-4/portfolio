"use client";

import { motion, useReducedMotion } from "motion/react";

const groups = [
  {
    label: "Core build",
    items: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "React Native",
      "Next.js",
      "Python",
    ],
  },
  {
    label: "Data layer",
    items: ["SQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    label: "Delivery",
    items: [
      "JavaScript",
      "TypeScript",
      "Bootstrap",
      "Git",
      "GitHub",
      "Docker",
      "Android Studio",
      "Maven",
      "Postman",
      "Jira",
      "AWS S3",
    ],
  },
  {
    label: "AI-assisted",
    items: ["GitHub Copilot", "Codex", "Claude"],
  },
];

export default function Skills() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="skills" className="border-t border-line bg-canvas">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-24 md:py-32 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Skills</p>
          <h2 className="mt-5 max-w-md font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            The stack I work across.
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-inkSoft">
            Tools I use to move from interface to service, data, and delivery.
          </p>
        </motion.div>

        <div className="space-y-8">
          {groups.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: reducedMotion ? 0 : groupIndex * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-t border-line pt-5"
            >
              <div className="grid gap-4 md:grid-cols-[140px_minmax(0,1fr)] md:items-start md:gap-6">
                <span className="tag text-accent">{group.label}</span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-line bg-surface px-3 py-2 text-sm text-inkSoft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
