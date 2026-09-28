"use client";

import { motion, useReducedMotion } from "motion/react";

const links = [
  {
    label: "kentdaniel.demoreta@gmail.com",
    href: "mailto:kentdaniel.demoreta@gmail.com",
  },
  {
    label: "+63 985 551 0167",
    href: "tel:+639855510167",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kent-demoreta-556208324/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/kent-4",
    external: true,
  },
];

export default function Contact() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="contact" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32">
        <motion.p
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          className="eyebrow"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl"
        >
          Open to junior and full-stack roles.
        </motion.h2>
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.6,
            delay: reducedMotion ? 0 : 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-5 max-w-lg leading-relaxed text-inkSoft"
        >
          Based in Taytay, Rizal. Happy to work remotely or on-site in Metro
          Manila.
        </motion.p>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.6,
            delay: reducedMotion ? 0 : 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          <a
            href="mailto:kentdaniel.demoreta@gmail.com"
            aria-label="Email Kent Daniel De Moreta"
            className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-canvas transition-transform hover:-translate-y-0.5 focus-visible:outline-offset-4"
          >
            Email me
          </a>
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="rounded-lg border-b border-line py-1 text-sm text-inkSoft transition-colors hover:border-accent hover:text-accent"
            >
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
