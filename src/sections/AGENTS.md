# SECTIONS KNOWLEDGE BASE

## OVERVIEW
`src/sections` holds page-specific bands used once each by `src/pages/index.astro`.

## WHERE TO LOOK
| Task | Location | Notes |
|---|---|---|
| Hero entrance / parallax / scroll collapse | `HeroSection.astro` | Largest inline behavior block. |
| Registration pathway cards | `PathwaysSection.astro` | Badge logic via local helper. |
| Program image grid | `ProgramsSection.astro` | Data-driven card gallery + CTA card. |
| Requirements grid | `RequirementsSection.astro` | Inline SVG icon strings via `set:html`. |
| Scholarship cards | `ScholarshipSection.astro` | Uses contact links + requirement preview. |
| Contact form | `ContactSection.astro` | Simulated submit/success state, no backend. |

## CONVENTIONS
- Each section imports only the data/components it needs.
- Repeated reveal animation goes through `../components/ScrollReveal.astro`.
- Section ids (`beranda`, `jalur-masuk`, `program`, `beasiswa`, `kontak`) drive nav anchors and active-link sync.
- Sections often embed local scripts instead of shared utilities.

## ANTI-PATTERNS
- Do not extract shared abstractions unless repetition is real across multiple sections; this repo currently favors local clarity.
- Do not wire the contact form to assumed backend behavior. Current logic is client-only success simulation.
- Do not trust `tech-spec.md` section architecture literally; some referenced micro-components do not exist.

## NOTES
- `HeroSection.astro` and `ContactSection.astro` are behavior hotspots. Read full file before modifying small pieces.
- `RequirementsSection.astro` uses raw SVG strings; malformed markup can hide in string literals.
