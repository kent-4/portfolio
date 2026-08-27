"use client";

import { motion } from "motion/react";
import useTilt from "./useTilt";

const projects = [
  {
    title: "Automated College Scheduling System",
    role: "Capstone Team Leader",
    description:
      "A web-based academic scheduling system that automates conflict detection, faculty allocation, and timetable generation using a hybrid genetic algorithm. Led the backend architecture and REST API on top of a normalized database with 20+ tables.",
    tags: ["Java", "Spring Boot", "MySQL", "REST API", "Genetic Algorithm"],
    link: "#",
  },
  {
    title: "Archiving Microservice Platform",
    role: "Full-Stack Developer",
    description:
      "A secure, microservice-based document archiving platform with cloud storage, full-text search, JWT authentication, and an analytics dashboard. Used Docker containerization and Redis caching to improve scalability.",
    tags: ["Python", "Flask", "Next.js", "MongoDB", "Elasticsearch", "Redis", "Docker"],
    link: "#",
  },
  {
    title: "Job Portal Web Application",
    role: "Frontend Developer",
    description:
      "Responsive job search and application interfaces built with reusable React components, integrated with a Node.js backend. Delivered in a team-based Git workflow.",
    tags: ["React.js", "Bootstrap", "Node.js", "MySQL"],
    link: "#",
  },
];

function ProjectCard({ project, index }) {
  const tiltRef = useTilt({ max: 7, scale: 1.015 });

  return (
    <motion.a
      href={project.link}
      ref={tiltRef}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex flex-col rounded-lg border border-line p-6 bg-white hover:border-teal hover:shadow-lg transition-[border-color,box-shadow]"
    >
      <span className="tag text-amber mb-3">{project.role}</span>
      <h3 className="font-display text-lg font-semibold mb-3 leading-snug group-hover:text-teal transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-inkSoft leading-relaxed mb-5 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag bg-tealSoft text-teal px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line bg-white">
      <div className="mx-auto max-w-content px-6 py-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-10"
        >
          Projects
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6" style={{ perspective: "1200px" }}>
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
