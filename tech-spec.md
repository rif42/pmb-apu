# Technical Specification — Agung Putra University Admissions

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| astro | ^4.0 | Static site framework |
| tailwindcss | ^3.4 | Utility-first CSS |
| gsap | ^3.12 | Animation engine (ScrollTrigger, ScrollSmoother, SplitText — all free) |
| lenis | ^1.1 | Smooth scroll with inertia |
| imagesloaded | ^5.0 | Image preloading before entrance animations |
| astro-seo | ^0.9 | Meta tags and Open Graph |
| @fontsource/instrument-serif | ^5.0 | Display font (self-hosted) |
| @fontsource/space-grotesk | ^5.0 | Primary font (self-hosted) |
| @fontsource/space-mono | ^5.0 | Monospace accent font (self-hosted) |

**Dev dependencies:** @astrojs/tailwind, typescript, @types/imagesloaded

**No shadcn/ui.** This is a bespoke single-page site with no standard UI patterns. Every component is custom-styled. Adding shadcn would introduce unused abstraction.

---

## Component Inventory

### Layout (shared)

| Component | Source | Notes |
|-----------|--------|-------|
| Navigation | Custom | Fixed header with hide/show on scroll direction, mobile hamburger overlay, active link sync to sections |
| Footer | Custom | 4-column link grid, brand column, social icons |
| SmokeCanvas | Custom | Singleton WebGL canvas, shared across all dark sections, section uniform transitions managed externally |
| PaperGrain | Custom | CSS background-image overlay, no JS |

### Sections (page-specific, used once)

| Component | Source | Notes |
|-----------|--------|-------|
| HeroSection | Custom | Cinematic entrance timeline, scroll-linked collapse, mouse parallax, split-text char animation |
| PathwaysSection | Custom | Two-column card layout, standard reveal |
| ProgramsSection | Custom | Pinned scroll section, focus-blur, 7+1 card grid |
| RequirementsSection | Custom | 5-item icon grid, stagger left-to-right |
| ScholarshipSection | Custom | Pinned scroll section, typewriter text, focus cards, longest scroll distance |
| ContactSection | Custom | Two-column layout (55/45), form with success state |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| ShimmerHeading | Custom | All sections — H2 with scroll-driven CSS gradient sweep |
| PathwayCard | Custom | PathwaysSection — icon, title, description, badge list, CTA link |
| ProgramCard | Custom | ProgramsSection — image background, overlay gradient, hover scale |
| ScholarshipCard | Custom | ScholarshipSection — glass card with border, hover lift |
| RequirementItem | Custom | RequirementsSection — circular icon, number, title |
| ContactForm | Custom | ContactSection — 5 fields, validation, submit/success states |
| ScrollReveal | Custom | All content bands — IntersectionObserver wrapper with fade-up |

### Hooks / Utilities

| File | Purpose |
|------|---------|
| useLenis.ts | Initialize Lenis, wire to ScrollTrigger.update, expose start/stop for menu lock |
| useSmokeCanvas.ts | Singleton WebGL renderer, uniform management, rAF loop, IntersectionObserver visibility toggle |
| useNavScroll.ts | Scroll direction detection (hide/show nav), active section sync via ScrollTrigger |
| useScrollReveal.ts | IntersectionObserver factory for fade-up reveals |

---

## Animation Implementation Table

| # | Animation | Library | Implementation Approach | Complexity |
|---|-----------|---------|------------------------|------------|
| 1 | Smoke canvas (WebGL curl-noise) | Raw WebGL + GSAP | Singleton class: init WebGL context, compile vertex/fragment shaders, three smoke texture channels blended via scroll lookup, uniforms tweened per-section via GSAP | **High** |
| 2 | Hero cinematic entrance timeline | GSAP + SplitText | Master timeline: background fade → smoke fade → SplitText char stagger (rotateX + y + opacity per word group) → tagline word stagger → scroll indicator fade → nav fade. Starts after fonts loaded + images preloaded | **High** |
| 3 | Hero scroll-linked collapse | GSAP ScrollTrigger | Scrub timeline on hero container: headline scale/yPercent/opacity, tagline yPercent/opacity, scroll indicator opacity. Single scrubbed tween | Medium |
| 4 | Hero mouse parallax | GSAP + mousemove | Lerp-based mouse tracking (0.08/frame), apply x/y translate to fixed background image container | Low |
| 5 | Programs pinned focus blur | GSAP ScrollTrigger | Pin section, scrub filter: blur(0→8px) + brightness(1→0.4) on wrapper, scale(1→0.95) on inner content | Medium |
| 6 | Scholarship typewriter | GSAP ScrollTrigger + ScrollSmoother | Pin section, create timeline mapping each line's opacity (0.06→1→0.06) to scroll progress. Each `<p data-lines>` gets class-toggled visibility | **High** |
| 7 | Scholarship focus cards | GSAP ScrollTrigger | Within same pinned section, cards fade in at 60% scroll progress while typewriter fades to 0.3 opacity | Medium |
| 8 | H2 shimmer sweep | GSAP ScrollTrigger | Shimmer pseudo-element with `background-position` scrubbed from 100% to -100%, start "top 80%" end "top 40%" | Low |
| 9 | Nav scroll direction hide/show | Lenis scroll event | Track scroll direction, translateY -100% on down, 0 on up. CSS transition 0.3s | Low |
| 10 | Nav active link sync | GSAP ScrollTrigger | One ScrollTrigger per section, onEnter/onLeaveBack toggle active class on corresponding nav link | Low |
| 11 | Section fade-up reveals | IntersectionObserver + GSAP | Reusable wrapper: threshold 0.15, children stagger translateY(30→0) + opacity(0→1), once: true | Low |
| 12 | Card hover effects | CSS transitions | translateY, box-shadow, border-color, background-color — all pure CSS Duration-Quick | Low |
| 13 | Mobile menu overlay | GSAP | Full-screen overlay fade in, links stagger from bottom, hamburger→X morph via CSS transform on two lines | Medium |
| 14 | Scroll indicator bounce | CSS animation | translateY 0→8px loop, 1.5s, ease-in-out | Low |
| 15 | Paper grain overlay | CSS only | background-image with noise texture, mix-blend-mode: soft-light, opacity 0.5 | Low |

---

## State & Logic Plan

### Smoke Canvas — Singleton Pattern

The WebGL smoke renderer must be a singleton because:
- Only one WebGL context can exist efficiently
- The canvas is `position: fixed` and spans the entire viewport
- Uniform values transition between sections as the user scrolls

**Architecture:**
- `SmokeCanvas` class instantiated once at app level
- Exposes `transitionToSection(config)` method that GSAP calls to tween uniform values
- Exposes `setVisible(boolean)` for IntersectionObserver to pause/resume rAF
- Internal rAF loop only runs when at least one dark section is visible
- Mouse position stored as normalized [0,1] coords, lerped at 0.05/frame

### Entrance Timing Coordination

The hero entrance has strict sequencing dependencies:
1. Fonts must be loaded (`document.fonts.ready`)
2. Hero background image must be loaded (`imagesloaded`)
3. Smoke textures must be loaded (custom promise)
4. Only then does the 5.2s GSAP timeline begin

**Approach:** Create a `loadAssets()` promise that resolves when all three are complete. Wrap the entrance timeline creation in a `.then()`. Show a minimal loader (Deep Space background) until resolution.

### Lenis ↔ ScrollTrigger Sync

Lenis handles smooth scrolling but GSAP ScrollTrigger needs to know the actual scroll position:
- `lenis.on('scroll', ScrollTrigger.update)` keeps them in sync
- All ScrollTrigger instances use `scrub: true` for smooth-scroll-aware animation
- When mobile menu opens: `lenis.stop()` + lock body scroll
- When menu closes: `lenis.start()` + unlock

### Form State Machine

ContactForm has 3 states: idle → submitting → success
- **idle:** All fields editable, submit button active
- **submitting:** Button disabled, text changes to "Mengirim...", fields readonly
- **success:** Form replaced with success message (checkmark + text), no revert

Validation: required fields, email regex, WhatsApp numeric. No backend — use Formspree endpoint or simulate 1.5s delay then show success.

---

## Project File Structure

```
├── public/
│   ├── images/
│   │   ├── hero-campus.webp
│   │   ├── smoke-1.webp
│   │   ├── smoke-2.webp
│   │   ├── smoke-3.webp
│   │   ├── noise.webp
│   │   ├── programs/
│   │   │   ├── biomedical.webp
│   │   │   ├── biotech.webp
│   │   │   ├── law.webp
│   │   │   ├── management.webp
│   │   │   ├── communication.webp
│   │   │   ├── midwifery-s1.webp
│   │   │   └── midwifery-d3.webp
│   │   └── apu-logo.webp
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── MainLayout.astro          # HTML shell, font preloads, Lenis init, SmokeCanvas mount
│   ├── pages/
│   │   └── index.astro               # Composes all sections
│   ├── sections/
│   │   ├── HeroSection.astro
│   │   ├── PathwaysSection.astro
│   │   ├── ProgramsSection.astro
│   │   ├── RequirementsSection.astro
│   │   ├── ScholarshipSection.astro
│   │   └── ContactSection.astro
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── SmokeCanvas.astro         # WebGL canvas DOM element
│   │   ├── PaperGrain.astro          # CSS overlay
│   │   ├── ShimmerHeading.astro
│   │   ├── PathwayCard.astro
│   │   ├── ProgramCard.astro
│   │   ├── ScholarshipCard.astro
│   │   ├── RequirementItem.astro
│   │   ├── ContactForm.astro
│   │   └── ScrollReveal.astro
│   ├── scripts/
│   │   ├── smokeCanvas.ts            # Singleton WebGL renderer
│   │   ├── heroEntrance.ts           # GSAP timeline factory
│   │   ├── useLenis.ts               # Lenis init + ScrollTrigger sync
│   │   ├── useNavScroll.ts           # Nav hide/show + active link
│   │   └── useScrollReveal.ts        # IntersectionObserver wrapper
│   ├── styles/
│   │   └── global.css                # Tailwind directives, custom properties, keyframes
│   └── data/
│       ├── programs.ts               # 7 programs array
│       ├── pathways.ts               # 2 pathways array
│       ├── scholarships.ts           # 4 scholarships array
│       └── requirements.ts           # 5 requirements array
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Tailwind Configuration Notes

Custom theme extensions:
- **Colors:** Add all design tokens (deep-space, warm-ivory, soft-sage, burnt-copper, deep-sage, gold, teal, navy) to `extend.colors`
- **Fonts:** Add `display: ['Instrument Serif', 'serif']`, `sans: ['Space Grotesk', 'sans-serif']`, `mono: ['Space Mono', 'monospace']`
- **Animation:** Add custom keyframes for scroll-indicator bounce, shimmer sweep
- **Spacing:** Map design tokens to Tailwind spacing scale where practical

No shadcn plugin needed. No additional Tailwind plugins required.

---

## Performance Considerations

| Concern | Mitigation |
|---------|------------|
| WebGL smoke on mobile | Reduce resolution 50%, disable mouse interaction, pause rAF when not visible |
| Large hero image | Serve as WebP, use `loading: eager` on hero image, lazy load all others |
| Font loading | Self-host via @fontsource (faster than Google CDN), `font-display: swap`, wait for `document.fonts.ready` before entrance |
| GSAP + ScrollTrigger overhead | Use `scrub: true` (not scrub numbers) for smoother performance, limit pinned sections to 2 |
| 7 program images | Lazy load with IntersectionObserver, WebP format, max 600px width |
| Lenis scroll jank | `lerp: 0.08` provides smoothness without excessive CPU; rAF shared with GSAP |

---

## Responsive Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| sm | 640px | Base mobile styles |
| md | 768px | Nav collapses to hamburger, program grid 2-col, contact single column |
| lg | 1024px | Program grid 4-col, contact two-column, pathways side-by-side |
| xl | 1280px | Full layout, max content widths applied |

Hero headline uses `clamp(2.5rem, 6vw, 5.5rem)` — fluid scaling across all breakpoints without explicit media queries.

---

## Asset Pipeline

All images should be:
1. Generated as specified in design.md
2. Converted to WebP format
3. Placed in `public/images/` at appropriate paths
4. Referenced with absolute paths (`/images/hero-campus.webp`)

The smoke textures and noise texture are procedural/photographic assets that can be generated via image generation or sourced from texture libraries.
