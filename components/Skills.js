"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const groups = [
  {
    label: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["Spring Boot", "Spring Security", "React", "React Native", "Next.js", "Bootstrap"],
  },
  {
    label: "Databases",
    items: ["MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "Docker", "Android Studio", "Maven", "Postman", "Jira", "AWS S3"],
  },
  {
    label: "AI-Assisted Dev",
    items: ["GitHub Copilot", "Codex", "Claude"],
  },
];

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const tags = containerRef.current.querySelectorAll(".skill-tag");

    if (prefersReducedMotion) {
      gsap.set(tags, { opacity: 1, scale: 1 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(tags, { opacity: 0, scale: 0.92, y: 4 });

      ScrollTrigger.batch(tags, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.025,
            ease: "power2.out",
          }),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="border-t border-line" ref={containerRef}>
      <div className="mx-auto max-w-content px-6 py-20 grid md:grid-cols-[200px_1fr] gap-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label"
        >
          Skills
        </motion.p>

        <div className="space-y-6 max-w-2xl">
          {groups.map((group) => (
            <div
              key={group.label}
              className="grid grid-cols-[140px_1fr] gap-4 items-baseline"
            >
              <span className="text-sm text-inkFaint">{group.label}</span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="skill-tag tag border border-line px-2.5 py-1 rounded text-inkSoft inline-block"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
