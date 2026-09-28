"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const projects = [
  {
    slug: "scheduling",
    layout: "featured",
    title: "Automated College Scheduling System",
    role: "Capstone Team Leader",
    description:
      "A web-based academic scheduling system that automates conflict detection, faculty allocation, and timetable generation using a hybrid genetic algorithm. Led the backend architecture and REST API on top of a normalized database with 20+ tables.",
    tags: ["Java", "Spring Boot", "MySQL", "REST API", "Genetic Algorithm"],
    screenshots: [
      {
        src: "/images/scheduling-project-placeholder.svg",
        alt: "Placeholder overview of the automated college scheduling system",
        caption: "Dashboard overview placeholder",
      },
      {
        src: "/images/scheduling-project-detail-placeholder.svg",
        alt: "Placeholder timetable view for the automated college scheduling system",
        caption: "Generated timetable placeholder",
      },
    ],
    link: "#",
  },
  {
    slug: "archiving",
    layout: "gallery",
    title: "Archiving Microservice Platform",
    role: "Full-Stack Developer",
    description:
      "A secure, microservice-based document archiving platform with cloud storage, full-text search, JWT authentication, and an analytics dashboard. Used Docker containerization and Redis caching to improve scalability.",
    tags: ["Python", "Flask", "Next.js", "MongoDB", "Elasticsearch", "Redis", "Docker"],
    screenshots: [
      {
        src: "/images/archiving-project-placeholder.svg",
        alt: "Placeholder overview of the archiving microservice platform",
        caption: "Archive dashboard placeholder",
      },
      {
        src: "/images/archiving-project-detail-placeholder.svg",
        alt: "Placeholder document search view for the archiving microservice platform",
        caption: "Document search placeholder",
      },
    ],
    link: "#",
  },
  {
    slug: "job-portal",
    layout: "compact",
    title: "Job Portal Web Application",
    role: "Frontend Developer",
    description:
      "Responsive job search and application interfaces built with reusable React components, integrated with a Node.js backend. Delivered in a team-based Git workflow.",
    tags: ["React.js", "Bootstrap", "Node.js", "MySQL"],
    screenshots: [
      {
        src: "/images/job-portal-project-placeholder.svg",
        alt: "Placeholder job listings overview for the job portal web application",
        caption: "Job listings placeholder",
      },
      {
        src: "/images/job-portal-project-detail-placeholder.svg",
        alt: "Placeholder application form for the job portal web application",
        caption: "Application flow placeholder",
      },
    ],
    link: "#",
  },
];

function ProjectDetails({ project, compact = false }) {
  return (
    <div className="flex flex-col justify-center">
      <p className="tag mb-4 text-accent">{project.role}</p>
      <h3
        id={`project-title-${project.slug}`}
        className={`font-display font-semibold leading-tight text-ink ${
          compact ? "text-2xl" : "text-2xl md:text-3xl"
        }`}
      >
        {project.title}
      </h3>
      <p className="mt-5 max-w-2xl leading-relaxed text-inkSoft">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-2">
        <span className="tag text-inkFaint">Stack</span>
        <span className="tag text-inkSoft">{project.tags.join(", ")}</span>
      </div>

      {project.link && project.link !== "#" && (
        <a
          href={project.link}
          className="mt-7 inline-flex w-fit rounded-lg border-b border-accent pb-1 text-sm font-medium text-accent transition-colors hover:border-ink hover:text-ink focus-visible:border-ink focus-visible:text-ink"
        >
          View project
        </a>
      )}
    </div>
  );
}

function ProjectImage({ screenshot, priority = false, sizes }) {
  const reducedMotion = useReducedMotion();
  const isPlaceholder = screenshot.src.includes("placeholder");

  return (
    <figure>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-canvas">
        {isPlaceholder ? (
          <div
            role="img"
            aria-label={screenshot.alt}
            className="flex h-full flex-col items-center justify-center px-6 text-center"
          >
            <span className="eyebrow">Screenshot placeholder</span>
            <span className="mt-4 max-w-xs text-sm leading-relaxed text-inkSoft">
              {screenshot.caption}
            </span>
            <span className="tag mt-5 text-inkFaint">Add a real project capture</span>
          </div>
        ) : (
          <motion.div
            className="absolute inset-0"
            whileHover={reducedMotion ? undefined : { scale: 1.015 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              priority={priority}
              sizes={sizes}
              className="object-cover"
            />
          </motion.div>
        )}
      </div>
      <figcaption className="tag mt-3 text-inkFaint">{screenshot.caption}</figcaption>
    </figure>
  );
}

function ProjectArticle({ project, children, className = "" }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      aria-labelledby={`project-title-${project.slug}`}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.article>
  );
}

function FeaturedProject({ project }) {
  return (
    <ProjectArticle project={project} className="border-t border-line py-12 md:py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(230px,0.72fr)_minmax(0,1.28fr)] lg:items-center lg:gap-16">
        <ProjectDetails project={project} />

        <div className="space-y-8">
          <ProjectImage
            screenshot={project.screenshots[0]}
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
          <div className="w-full lg:ml-auto lg:w-[70%]">
            <ProjectImage
              screenshot={project.screenshots[1]}
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </div>
    </ProjectArticle>
  );
}

function GalleryProject({ project }) {
  return (
    <ProjectArticle project={project} className="border-t border-line py-12 md:py-16">
      <div className="grid gap-5 md:grid-cols-2">
        {project.screenshots.map((screenshot) => (
          <ProjectImage
            key={screenshot.src}
            screenshot={screenshot}
            sizes="(min-width: 768px) 45vw, 100vw"
          />
        ))}
      </div>

      <div className="mt-10 max-w-3xl lg:ml-[16.666%]">
        <ProjectDetails project={project} />
      </div>
    </ProjectArticle>
  );
}

function CompactProject({ project }) {
  return (
    <ProjectArticle project={project} className="border-t border-line py-12 md:py-16 lg:pb-24">
      <div className="grid gap-10 lg:grid-cols-[minmax(230px,0.78fr)_minmax(0,1.22fr)] lg:items-center lg:gap-16">
        <ProjectDetails project={project} compact />

        <div className="grid gap-5 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-end">
          {project.screenshots.map((screenshot) => (
            <ProjectImage
              key={screenshot.src}
              screenshot={screenshot}
              sizes="(min-width: 768px) 34vw, 100vw"
            />
          ))}
        </div>
      </div>
    </ProjectArticle>
  );
}

export default function Projects() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="projects" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-content px-6 pb-8 pt-24 md:pb-12 md:pt-32">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Projects</p>
          <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Selected projects
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-inkSoft">
            Three systems across scheduling, archiving, and job search.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-content px-6">
        {projects.map((project) => {
          if (project.layout === "featured") {
            return <FeaturedProject key={project.slug} project={project} />;
          }

          if (project.layout === "gallery") {
            return <GalleryProject key={project.slug} project={project} />;
          }

          return <CompactProject key={project.slug} project={project} />;
        })}
      </div>
    </section>
  );
}
