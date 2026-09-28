"use client";

import { motion, useReducedMotion } from "motion/react";

// A schematic of how Kent actually builds: interface -> service -> data -> infra.
// Each column is a real layer from his stack, not a decorative icon grid.
const layers = [
  {
    label: "INTERFACE",
    nodes: ["React", "Next.js", "React Native"],
  },
  {
    label: "SERVICE",
    nodes: ["Spring Boot", "Flask", "REST API"],
  },
  {
    label: "DATA",
    nodes: ["MySQL", "MongoDB", "Redis"],
  },
  {
    label: "INFRA",
    nodes: ["Docker", "AWS S3", "GitHub"],
  },
];

const nodeVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.06, duration: 0.4, ease: "easeOut" },
  }),
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: { delay: 0.5 + i * 0.15, duration: 0.7, ease: "easeInOut" },
  }),
};

export default function StackDiagram() {
  const reducedMotion = useReducedMotion();
  let flatIndex = 0;

  return (
    <div className="w-full">
      <div className="relative">
        {/* connecting lines between columns, drawn behind the nodes */}
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          viewBox="0 0 900 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {[0, 1, 2].map((colIndex) => {
            const x1 = 75 + colIndex * 225 + 150;
            const x2 = x1 + 75;
            return [0, 1, 2].map((rowIndex) => (
              <motion.line
                key={`${colIndex}-${rowIndex}`}
                x1={x1}
                y1={45 + rowIndex * 65}
                x2={x2}
                y2={45 + rowIndex * 65}
                stroke="currentColor"
                className="text-accent"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                custom={colIndex * 3 + rowIndex}
                variants={lineVariants}
                initial={reducedMotion ? false : "hidden"}
                animate={reducedMotion ? undefined : "visible"}
                opacity="0.35"
              />
            ));
          })}
        </svg>

        <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
          {layers.map((layer) => (
            <div key={layer.label} className="flex flex-col gap-3">
              <span className="tag text-inkFaint">{layer.label}</span>
              <div className="flex flex-col gap-2">
                {layer.nodes.map((node) => {
                  const i = flatIndex++;
                  return (
                    <motion.div
                      key={node}
                      custom={i}
                      variants={nodeVariants}
                      initial={reducedMotion ? false : "hidden"}
                      animate={reducedMotion ? undefined : "visible"}
                      className="rounded-lg border border-line bg-surfaceElevated px-3 py-2 text-sm text-ink"
                    >
                      {node}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={reducedMotion ? undefined : { opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="mt-6 flex items-center gap-3"
      >
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        <span className="tag text-inkFaint">Currently shipping at Make Technology</span>
      </motion.div>
    </div>
  );
}
