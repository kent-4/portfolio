# Kent Daniel De Moreta — Portfolio

A responsive developer portfolio built with Next.js 14 App Router, Tailwind CSS, and Motion. Its engineering dossier layout presents Kent's experience and selected projects as readable, mostly unboxed content, with a full-width architecture diagram and reduced-motion support.

## Local development

Use Node.js 20 or newer.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run build
```

Run both checks with:

```bash
npm run check
```

The same lint and production-build checks run in GitHub Actions for pull requests and pushes to `main`.

## Agentic coding setup

The repository includes:

- `AGENTS.md` for project architecture, working agreements, validation, and delegation rules.
- `.codex/config.toml` for project-scoped Motion MCP connections.
- `.codex/agents/` for the `design_specialist`, `motion_specialist`, and `verifier` roles and their scoped skill settings.

The main agent coordinates changes and owns final integration. Specialist agents are intended for substantial matching work, not every small edit:

| Agent | Responsibility | Required local skill |
| --- | --- | --- |
| `design_specialist` | Layout, visual hierarchy, typography, responsive behavior, and accessibility | `design-taste-frontend` |
| `motion_specialist` | Motion/CSS animation, interaction timing, reduced motion, and animation performance | `motion` |
| `verifier` | Diff review, lint, and production-build validation without tracked-file edits | None |

Do not run the design and motion specialists concurrently when they may edit the same files. Sequence design first, motion second, and verification last.

### Install the local skills

Skill contents are intentionally machine-local and excluded from Git. From the repository root, install the design skill with:

```bash
npx skills add Leonxlnx/taste-skill --skill design-taste-frontend
```

Install the official Motion AI Kit with:

```bash
npx motion-ai
```

Choose project scope and install the skill into `.agents/skills`. After setup, these files should exist:

```text
.agents/skills/design-taste-frontend/SKILL.md
.agents/skills/motion/SKILL.md
```

The Motion and Motion+ MCP endpoints are already declared in the tracked project configuration. Motion+ features may require signing in through the Codex MCP settings.

## Project structure

```text
app/
  layout.js       fonts, metadata, and the global Motion provider
  page.js         page composition
  globals.css     design tokens, focus states, and reduced-motion fallback
components/
  Nav.js          responsive in-page navigation
  Hero.js         introduction, optional assets, and architecture diagram
  StackDiagram.js animated architecture diagram
  About.js        biography
  Experience.js   professional experience
  Projects.js     project evidence and optional authentic screenshots
  Skills.js       grouped technical skills
  Contact.js      contact methods and social links
  Footer.js       site footer
public/
  images/         profile and project image assets
  resume-placeholder.pdf
```

## Motion behavior

- Motion handles entrance reveals, the stack diagram, and restrained image interaction.
- `MotionProvider` supplies the global reduced-motion policy.
- Components also check `useReducedMotion` when an interaction needs a static fallback.
- Projects use normal document flow with role, title, description, and stack preceding any configured media. There is no GSAP or pinned scroll sequence.
- The dark green palette, existing typography, section order, and diagram content are retained. Desktop sections use a narrow label rail; mobile sections stack naturally.

## Optional assets and destinations

- Portrait and resume configuration are deliberately `null` until authentic assets are available. No placeholder frame or resume action is shown.
- Each project starts with an empty `screenshots` array and a `null` destination. These states render the complete text entry without blank media space or a project action.
- To enable authentic media, add the files under `public/` and explicitly configure their paths in `components/Hero.js` or `components/Projects.js`. Project screenshots retain the `{ src, alt, caption }` format. Use accurate alternative text and captions, and verify the real resume is a readable PDF before enabling its action.
- Configure project destinations only when their repository or demo URLs are known. Existing contact, LinkedIn, and GitHub destinations are retained; verify their accuracy before publishing.
- Existing placeholder files are retained as inactive files. Replacing or renaming them alone does not enable media or actions.

Do not invent portfolio facts, screenshots, metrics, or links. Missing assets do not block the text-and-diagram presentation. `ANIMATION_IMAGE_INTEGRATION_PLAN.md` records the superseded image-led direction, not pending implementation work.

## Deployment

Push the repository to GitHub and import it into Vercel. The project uses standard Next.js defaults, so no custom build configuration is required.
