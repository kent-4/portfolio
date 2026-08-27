"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// Returns a ref to attach to a card element. On pointer move, tilts the card
// toward the cursor in 3D and eases back to flat on leave. No-ops entirely
// for users who prefer reduced motion or on touch devices (no fine pointer).
export default function useTilt({ max = 8, scale = 1.02 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReducedMotion || !hasFinePointer) return;

    gsap.set(el, { transformPerspective: 700, transformStyle: "preserve-3d" });

    const rotateX = gsap.quickTo(el, "rotationX", { duration: 0.5, ease: "power3.out" });
    const rotateY = gsap.quickTo(el, "rotationY", { duration: 0.5, ease: "power3.out" });
    const scaleTo = gsap.quickTo(el, "scale", { duration: 0.4, ease: "power3.out" });

    function handleMove(e) {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotateY(px * max);
      rotateX(-py * max);
      scaleTo(scale);
    }

    function handleLeave() {
      rotateX(0);
      rotateY(0);
      scaleTo(1);
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [max, scale]);

  return ref;
}
