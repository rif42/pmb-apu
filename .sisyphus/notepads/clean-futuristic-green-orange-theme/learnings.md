-- `src/styles/global.css` is the single source of truth for theme tokens, and it already feeds Tailwind color aliases through CSS variables.
-- A compatibility-first palette update can add `--color-semantic-*` tokens while keeping existing `brand-*`, `base-*`, and utility names resolving through the new layer.
-- `tailwind.config.mjs` now exposes semantic-first utilities (`surface`, `primary`, `accent`, plus depth/muted variants) while still keeping `brand-*` and legacy aliases alive for existing section markup.
-- Mismatch risk for later tasks: the repo currently models the new palette as `primary`/`accent` semantics, not literal `green-primary`/`light-orange` utility names, so future section updates should follow the existing semantic chain instead of inventing another color family.
-- `src/components/Navigation.astro` should stay light-surface first: use muted sage text on the default/scrolled bar, reserve burnt-copper/orange for the CTA and active underline, and keep the green-led hover/selection states subtle.
-- Footer re-theming stayed stable when built from the same semantic chain: light surface gradient, green default text/icons, orange only for section labels and hover emphasis.
-- Decorative motion works best as a shared shell class on below-hero section wrappers: one pair of pseudo-elements can carry aurora glow plus faint grid/grain, while `prefers-reduced-motion` flattens the animation without changing layout.
-- Programs, pathways, requirements, scholarship, and contact sections can all share the same motion shell as long as the content stack stays on a higher z-index and only wrapper classes are touched.
-- `ProgramsSection.astro` now works cleanly with token-derived per-program CSS variables: keep the image/card behavior, but feed overlays, label text, arrow strokes, and card surfaces from `rgb(var(--color-brand-* ) / alpha)` values instead of hex literals.
-- `rgb(var(--color-brand-surface))` is the safest replacement for white text/button surfaces in this theme, and SVG chevrons can inherit their stroke from a CSS variable without changing carousel behavior.
-- Shared nav link arrays should only contain rendered section anchors; when a section stays commented out, remove it from `navLinks` so desktop/mobile menus and active-link sync stay coherent.

## 2026-05-05 Task 3

-- Below-hero rhythm stayed simplest when section wrappers alternated between `bg-gradient-to-b` chains built from `brand-surface`, `brand-surface-alt`, `brand-surface-soft`, and a faint `brand-aurora` tint.
-- Lightening the scholarship and contact cards worked best by keeping the existing structure and only swapping dark fills for `brand-surface`-based cards with muted text tokens.
-- The programs section needed only outer shell adjustment; leaving `programColors` untouched preserved the image-card behavior and avoided scope creep.

Task 4 QA: aurora motion is decorative-only in below-hero sections; reduced-motion fallback flattens the shell, and ScholarshipSection remains intentionally unrendered in index.astro.

## 2026-05-05 Task 8

-- Final polish stayed safest when scope stayed token-clean: ProgramsSection shadows/overlays moved off raw black values and the malformed RequirementsSection SVG was fixed in place.
-- The integrated pass kept the page in one light, green-led system after hero, and build evidence stayed the real gate while `oxlint` remained unavailable.
