# PROJECT KNOWLEDGE BASE

**Generated:** 2026-04-28
**Commit:** 6d4331d
**Branch:** main

## OVERVIEW
Single-page Astro admissions site for Agung Putra University. Static output, Tailwind styling, section-heavy `.astro` components, typed content in `src/data`.

## STRUCTURE
```text
./
├── src/pages/index.astro        # Single route. Composes full landing page.
├── src/layouts/MainLayout.astro # HTML shell, meta tags, global typography layer.
├── src/sections/                # Page-specific feature bands. Most UI complexity lives here.
├── src/components/              # Shared nav/footer/reveal primitives.
├── src/data/                    # Typed content source for sections.
├── src/styles/global.css        # Tailwind directives, theme tokens, utility classes.
├── public/images/               # Runtime image assets referenced with absolute paths.
├── assets/images/               # Duplicate image tree; verify necessity before adding more.
└── tech-spec.md                 # Planned architecture; partly ahead of current implementation.
```

## WHERE TO LOOK
| Task | Location | Notes |
|---|---|---|
| Main page composition | `src/pages/index.astro` | Imports layout, nav, footer, all sections. |
| Document shell / SEO | `src/layouts/MainLayout.astro` | Meta tags, favicon, global style block. |
| Navigation behavior | `src/components/Navigation.astro` | Inline script handles hide/show, mobile menu, active links. |
| Shared reveal animation | `src/components/ScrollReveal.astro` | IntersectionObserver wrapper. |
| Section content changes | `src/sections/*.astro` | Each section owns markup + local inline behavior. |
| Admissions data edits | `src/data/*.ts` | Typed arrays/objects feed sections. |
| Theme tokens | `tailwind.config.mjs` | Project palette, fonts, keyframes. |
| Build/runtime config | `package.json`, `astro.config.mjs`, `tsconfig.json` | Dev/build commands, static output, TS strict mode. |
| Planned future architecture | `tech-spec.md` | Contains aspirational components/scripts not all present. |

## CODE MAP
| Symbol | Type | Location | Role |
|---|---|---|---|
| `programs` | constant | `src/data/programs.ts` | Program cards source of truth. |
| `Program` | interface | `src/data/programs.ts` | Program item shape. |
| `pathways` | constant | `src/data/pathways.ts` | Registration pathway data. |
| `Pathway` | interface | `src/data/pathways.ts` | Pathway card shape. |
| `contact` | constant | `src/data/contact.ts` | Shared outbound links and contact metadata. |

## CONVENTIONS
- Use Astro + TypeScript only. Data lives in `.ts` files with exported interfaces/constants.
- Site is static: `astro.config.mjs` sets `output: 'static'`.
- Tailwind theme is custom. Reuse tokens like `deep-space`, `soft-sage`, `burnt-copper`; do not invent near-duplicates casually.
- Current implementation favors inline `<script>` blocks inside `.astro` files over separate utility modules.
- Images are referenced with absolute `/images/...` paths from `public/images`.

## ANTI-PATTERNS (THIS PROJECT)
- No `shadcn/ui`. `tech-spec.md` forbids it; site is bespoke and custom-styled.
- Do not treat `tech-spec.md` as exact current structure. It documents planned `src/scripts/*` and extra components that do not exist yet.
- Avoid adding duplicate asset copies unless intentional. Repo already has overlap between `assets/images` and `public/images`.
- Do not assume backend or test harness exists. Current repo is frontend-only and has no test suite.

## UNIQUE STYLES
- Large visual sections own their own behavior, often with local DOM queries and observers.
- Typography classes (`text-h1`, `text-h2`, `text-body`, etc.) are a project-level design language.
- `MainLayout.astro` duplicates some base/global styles found in `src/styles/global.css`; check both before changing typography or body defaults.

## COMMANDS
```bash
npm run dev
npm run build
npm run preview
```

## NOTES
- `src/sections/RequirementsSection.astro` contains malformed SVG markup (`ry"2"`), so inspect carefully before assuming all inline SVG is valid.
- LSP for `.astro` is partially unavailable in this environment because `oxlint` is not installed.
- No existing `AGENTS.md` or `CLAUDE.md` existed before this file.
