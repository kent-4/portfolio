"use client";

import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "kentdaniel.demoreta@gmail.com",
    href: "mailto:kentdaniel.demoreta@gmail.com",
  },
  {
    icon: Phone,
    label: "+63 985 551 0167",
    href: "tel:+639855510167",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kent-demoreta-556208324/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/kent-4",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-white">
      <div className="mx-auto max-w-content px-6 py-20 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-4xl font-semibold max-w-xl mx-auto leading-tight"
        >
          Open to junior and full-stack roles.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-inkSoft mt-4 max-w-md mx-auto"
        >
          Based in Taytay, Rizal. Happy to work remote or on-site in Metro
          Manila.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 border border-line rounded-md px-4 py-3 text-sm text-inkSoft hover:border-teal hover:text-teal transition-colors"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
