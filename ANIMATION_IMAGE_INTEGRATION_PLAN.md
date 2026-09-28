# Animation & Image Integration Plan

This checklist tracks the approved plan for adding images and motion to Kent Daniel De Moreta's portfolio.

## Current status

- **Current phase:** Phase 2 — Replace placeholders and review the visual result
- **Phase 1 status:** Complete
- **Phase 3 progress:** Code-level image loading checks complete; interactive QA is still pending
- **Phase 5 status:** Deferred; the current project gallery uses responsive normal-flow layouts and Motion entrance reveals
- **Last verified:** `npm run build` passed with the Motion-based implementation; the local page and all seven SVG image routes returned HTTP 200
- **Next approved work:** Replace placeholder media and complete visual, responsive, keyboard, and reduced-motion QA

## Design direction

- Keep the portfolio professional, calm, and image-led.
- Use animation to guide attention and explain the work, not to decorate every element.
- Prefer short entrance reveals, subtle image zooms, and restrained hover feedback.
- Avoid continuous floating effects, large parallax sections, and mouse-only interactions for now.

## Phase 5 — Scroll-pinned project showcase (deferred)

This remains a possible future enhancement. It is not present in the current implementation. The Projects section currently uses three responsive normal-flow layouts so every screenshot and description remains available without scroll pinning.

- Each project will contain multiple screenshots, captions, and accurate alternative text.
- A project presentation will remain pinned while the user scrolls through its screenshot sequence.
- The current project's screenshot and description will remain visible while the screenshots change.
- Continued scrolling will advance through the screenshots, then move to the next project.
- The sequence will continue until all projects and their screenshots have been presented.
- The layout must have a usable responsive fallback if the pinned presentation becomes too cramped on smaller screens.
- Existing project links, keyboard focus, reduced-motion behavior, and readable descriptions must remain available.

### Proposed structure

```text
Projects section
└── Project scroll track
    ├── Sticky project frame
    │   ├── Screenshot viewport
    │   ├── Screenshot progress / caption
    │   └── Project title, role, description, and tags
    ├── Screenshot 1 scroll range
    ├── Screenshot 2 scroll range
    └── Next project begins after the current sequence completes
```

### Planned animation behavior

- Use a scroll target for each project sequence and map scroll progress to the active screenshot.
- Crossfade or softly clip between screenshots; avoid fast or distracting transitions.
- Keep the project description stable while the visual preview changes.
- Use one animation system to own any future pinned sequence; do not mix competing scroll timelines.
- Respect reduced motion by showing the screenshots and descriptions without scroll-linked movement.

### Showcase implementation checklist

- [x] Extend the project data model to support an ordered `screenshots` list.
- [x] Add screenshot captions and meaningful alternative text.
- [ ] Build a scroll track for each project sequence.
- [ ] Pin the project frame while animating only its inner screenshot layers.
- [ ] Link screenshot transitions to scroll progress.
- [ ] Decide whether snapping improves or harms usability before adding it.
- [x] Add a clear screenshot counter or progress indicator.
- [ ] Transition from one project to the next only after the current screenshot sequence completes.
- [x] Define a normal-flow mobile fallback for smaller screens.
- [x] Add a no-motion presentation for reduced-motion users.
- [ ] Use lifecycle-safe cleanup and responsive setup for the selected animation system.
- [ ] Test the mobile fallback after visual review at narrow widths.
- [ ] Test keyboard navigation and project links after the new structure is added.

### Screenshot content model

Each project should eventually provide:

- [x] A project-specific screenshot list in display order.
- [x] A short caption or purpose for every screenshot.
- [x] Accurate alternative text for every screenshot.
- [x] Consistent image dimensions or crops across each project sequence.
- [ ] A decision on whether the final screenshot should include a live-demo or repository call to action.

## Animation rules

- Use Motion for declarative entrances, scroll reveals, and hover transitions.
- Use Motion for the current project entrances and restrained image interactions.
- Animate compositor-friendly properties such as `opacity`, `transform`, and limited `clip-path` transitions.
- Keep image hover feedback subtle so it does not compete with project content.
- Respect `prefers-reduced-motion` through `MotionProvider` and the global CSS fallback.
- Make important interactions work with keyboard focus and on touch devices.

## Phase 0 — Planning and decisions

- [x] Review the existing Motion setup and remove stale GSAP assumptions.
- [x] Decide on a restrained, image-led visual direction.
- [x] Choose the initial image roles: one profile image and three project previews.
- [x] Approve the first implementation scope.

## Phase 1 — Placeholder implementation

- [x] Add a responsive hero image area.
- [x] Add a hero image entrance animation.
- [x] Add project preview areas above the project-card content.
- [x] Add project image reveal animations when cards enter the viewport.
- [x] Add subtle project image hover scaling.
- [x] Use restrained image scaling instead of pointer-tracking tilt.
- [x] Use `next/image` with local assets and responsive `sizes` values.
- [x] Add descriptive placeholder `alt` text.
- [x] Add local SVG placeholders under `public/images/`.
- [x] Verify the production build.

## Phase 2 — Replace placeholders and review visuals

- [ ] Replace `profile-placeholder.svg` with a professional profile photo.
- [ ] Replace the three project placeholder SVGs with real multi-screenshot project sequences.
- [ ] Keep the same filenames, or update the image paths in `Hero.js` and `Projects.js`.
- [ ] Update image `alt` text to describe the final images accurately.
- [ ] Confirm each screenshot uses a consistent crop and visual treatment.
- [x] Start the development site and verify the page and all four placeholder image routes load successfully.
- [ ] Run the development site and review the hero at desktop and mobile widths.
- [ ] Review project-card hover behavior with a fine pointer.
- [ ] Review the layout on touch devices where tilt is disabled.

## Phase 3 — Accessibility and performance QA

- [ ] Test keyboard focus on project cards and hero actions.
- [x] Add visible focus border, shadow, and image-overlay treatment to project cards.
- [ ] Test with `prefers-reduced-motion: reduce` enabled.
- [x] Confirm image wrappers reserve space with fixed aspect ratios to avoid layout shifts.
- [x] Confirm the hero image is prioritized and below-fold project images remain lazy-loaded through `next/image` defaults.
- [ ] Compress final images and prefer WebP or AVIF where practical.
- [ ] Check that text remains readable over every image and overlay.
- [ ] Confirm the animation timing feels consistent across sections.

## Phase 4 — Content and project links

- [ ] Replace the `#` project links with live demos or repository URLs.
- [ ] Add project-specific captions or short outcome statements if screenshots need context.
- [ ] Replace the resume placeholder with the final resume PDF.
- [ ] Review all portfolio copy after the visual structure is finalized.

## Files involved

- `components/Hero.js` — hero layout, profile image, and entrance animation
- `components/Projects.js` — project images, reveals, hover zoom, and card layout
- `components/MotionProvider.js` — global reduced-motion configuration
- `app/globals.css` — reduced-motion fallback and design tokens
- `public/images/` — current placeholder assets and future final images

## Next action

Next implementation step: visually test the current Motion-based layouts at desktop and mobile widths, then replace the screenshot placeholders with final project images.
