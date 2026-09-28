# Portfolio Repository Guide

## Project shape

- This is a Next.js 14 App Router portfolio using React, Tailwind CSS, and Motion.
- `app/` owns routing, metadata, global styles, and page composition.
- `components/` owns reusable sections and interactive behavior.
- `public/` owns static images and the downloadable resume.
- Use the `@/*` import alias for repository-root imports.

## Working agreements

- Preserve unrelated user changes. The working tree may already be dirty.
- Do not invent portfolio facts, links, screenshots, employers, metrics, or credentials.
- Keep components accessible, responsive, keyboard-usable, and understandable without animation.
- Respect `prefers-reduced-motion`; never make motion necessary to access content or actions.
- Prefer the existing Motion patterns and design tokens before adding dependencies or new abstractions.
- Keep secrets, tokens, personal machine settings, and generated skill files out of Git.

## Validation

- Install exact dependencies with `npm ci` on a clean checkout.
- Run `npm run lint` after JavaScript, JSX, configuration, or styling changes.
- Run `npm run build` before declaring implementation work complete.
- Use `npm run check` for the full repository validation contract.
- Fix failures caused by the requested change. Report unrelated pre-existing failures without rewriting unrelated code.

## Specialist delegation

- The main agent owns requirements, integration, overlap resolution, final validation, and the final response.
- Delegate only material design, animation, or verification work. Keep small localized edits in the main thread.
- Use `design_specialist` for visual hierarchy, layout, typography, responsive behavior, and accessibility. It must use the local `design-taste-frontend` skill.
- Use `motion_specialist` for Motion or CSS animation, interaction timing, reduced-motion behavior, cleanup, and animation performance. It must use the local `motion` skill.
- Use `verifier` for read-only diff review and validation. It may create ignored build artifacts but must not edit tracked files.
- Keep no more than three specialist subagents active at once.
- Do not run write-capable specialists concurrently when they may touch the same files. When design and motion overlap, run design first, then motion, then verifier.
- If a required local skill is missing, the specialist must stop and report the missing setup instead of continuing without it.

## Review priorities

- Prioritize broken behavior, inaccessible interactions, content regressions, missing reduced-motion handling, and validation gaps.
- Treat stale documentation that contradicts the implementation as a defect.
- Avoid style-only churn unless it directly supports the requested design change.
