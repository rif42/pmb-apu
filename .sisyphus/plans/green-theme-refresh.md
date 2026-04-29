# Green Theme Refresh

## TL;DR
> **Summary**: Re-theme the single-page Astro admissions site from navy-led to light green + cream, using logo-inspired greens as the dominant family and keeping gold/copper as accent only. Preserve layout and behavior, but replace both token-level and hard-coded dark-blue styling with a centralized palette plus selective dark-green exceptions for contrast.
> **Deliverables**:
> - centralized green/cream palette definition
> - updated global theme surfaces and duplicated base style layers
> - recolored navigation, hero, cards, form, footer, and section overlays
> - grep/build/browser verification evidence for all high-risk states
> **Effort**: Medium
> **Parallel**: YES - 2 waves
> **Critical Path**: 1 → 2 → 3/4/5/6/7 → 8

## Context
### Original Request
Change the overall theme and color of the website from navy to green, following the color tone of `assets\ikmb.png`.

### Interview Summary
- User wants the overall site recolored from navy to green based on the IKMB logo.
- Final visual direction: **light green + cream** overall.
- Gold/copper should remain **accent-only**, not dominant.
- A few **dark-green exceptions** are allowed for readability/hierarchy in places like nav/footer/overlays if needed.
- Verification should stay scoped to **`npm run build` + agent-executed manual browser QA**. No test stack setup included.

### Metis Review (gaps addressed)
- Locked scope as **visual refactor only**: no layout redesign, no copy changes, no animation rewrites except tiny readability-safe adjustments.
- Added explicit guardrail to audit and replace both tokenized and hard-coded dark-blue values.
- Added explicit exception policy: dark-green allowed only for contrast-critical surfaces; gold/copper allowed only for CTA/highlight usage.
- Added section-by-section QA for high-risk surfaces: nav, hero, overlays, cards, contact form, footer, and fragile requirements SVG area.

## Work Objectives
### Core Objective
Convert the site’s brand presentation from navy-led to logo-inspired green/cream while preserving existing content structure, page behavior, and section sequencing.

### Deliverables
- Updated palette and semantic theme rules in `tailwind.config.mjs`
- Reconciled global color/style duplication across `src/styles/global.css` and `src/layouts/MainLayout.astro`
- Recolored section/component surfaces in `src/components/*.astro` and `src/sections/*.astro`
- Evidence artifacts for source audit, build success, and browser QA under `.sisyphus/evidence/`

### Locked Palette (use unless a contrast blocker forces tiny adjustment)
- `brand-surface`: `#F4F7EE` - primary cream-green page background
- `brand-surface-alt`: `#E6F0DD` - soft sage section/card alternate
- `brand-surface-soft`: `#D6E7C8` - subtle tint for chips, dividers, soft fills
- `brand-primary`: `#2F6B3B` - core readable green for buttons, strong headings, emphasis
- `brand-primary-deep`: `#1E4D2B` - allowed dark-green exception for nav/footer/overlay contrast surfaces
- `brand-primary-deeper`: `#153720` - strongest exception for image overlays only when readability requires it
- `brand-text`: `#1F3124` - primary dark text on light surfaces
- `brand-text-muted`: `#56705C` - muted body/supporting text
- `brand-border`: `#A8C39D` - default border and input edge tint
- `brand-accent`: `#C58A2E` - gold/copper accent only
- `brand-accent-soft`: `#E4BE73` - soft highlight/accent glow only

### Locked Usage Rules
- Default page/background surfaces must use `brand-surface` or `brand-surface-alt`.
- Large dark areas are limited to nav, footer, and image-overlay contexts; use `brand-primary-deep` first, `brand-primary-deeper` only if contrast demands it.
- Primary text on light surfaces uses `brand-text`; muted copy uses `brand-text-muted`.
- Gold/copper tokens are limited to CTA emphasis, badges, small icon accents, underlines, and highlight details.
- Do not use `brand-accent` or `brand-accent-soft` as full-section backgrounds.

### Definition of Done (verifiable conditions with commands)
- `npm run build` exits with code `0`
- grep/source audit finds no unintended navy/deep-blue dominant surface values remaining in theme-controlled files
- local preview renders full landing page with readable contrast in desktop and mobile states
- nav, mobile menu, hero CTA area, pathways cards, programs grid, scholarship cards, requirements grid, contact form, and footer all reflect green/cream palette consistently
- gold/copper appears only as accent/highlight usage, not as dominant section background

### Must Have
- Mostly light green + cream overall presentation
- Concrete palette tokens defined before section recolor work begins
- Consistent handling of duplicated base styles in `global.css` and `MainLayout.astro`
- Manual QA for hover/focus/open/scrolled states
- Preserve current interactions and section ordering

### Must NOT Have (guardrails, AI slop patterns, scope boundaries)
- No shadcn/ui, no new design system framework, no component architecture rewrite
- No layout restructuring, spacing overhaul, copy rewrite, or asset redesign
- No broad bug-fix sweep outside blockers for this theme work
- No dark-blue dominant surfaces left behind by partial token updates
- No gold/copper spread into major background surfaces

## Verification Strategy
> ZERO HUMAN INTERVENTION - all verification is agent-executed.
- Test decision: none + existing build-only workflow
- QA policy: Every task includes agent-executed source/build/browser checks
- Evidence: `.sisyphus/evidence/task-{N}-{slug}.{ext}`

## Execution Strategy
### Parallel Execution Waves
> Target: 5-8 tasks per wave. <3 per wave (except final) = under-splitting.
> Extract shared dependencies as Wave-1 tasks for max parallelism.

Wave 1: palette + base-surface foundation
- Task 1: lock semantic palette and exception rules
- Task 2: reconcile global base styles and body/text defaults

Wave 2: surface recolor passes (parallel after Wave 1)
- Task 3: navigation + mobile menu recolor
- Task 4: hero background/overlay/CTA recolor
- Task 5: light-surface sections recolor (`Pathways`, `Requirements`, `Contact`)
- Task 6: dark-exception sections recolor (`Programs`, `Scholarship`)
- Task 7: footer + shared component polish
- Task 8: source audit + full build/preview/browser verification sweep

### Dependency Matrix (full, all tasks)
| Task | Depends On | Enables |
|---|---|---|
| 1 | none | 2,3,4,5,6,7,8 |
| 2 | 1 | 3,4,5,6,7,8 |
| 3 | 1,2 | 8 |
| 4 | 1,2 | 8 |
| 5 | 1,2 | 8 |
| 6 | 1,2 | 8 |
| 7 | 1,2 | 8 |
| 8 | 3,4,5,6,7 | Final verification |

### Agent Dispatch Summary (wave → task count → categories)
- Wave 1 → 2 tasks → `visual-engineering`, `quick`
- Wave 2 → 5 tasks → `visual-engineering`
- Verification wave → 1 task + final review wave → `unspecified-high`, `deep`, `oracle`

## TODOs
> Implementation + Test = ONE task. Never separate.
> EVERY task MUST have: Agent Profile + Parallelization + QA Scenarios.

- [x] 1. Define the green/cream semantic palette and exception policy

  **What to do**: Implement the locked palette above inside `tailwind.config.mjs`, mapping current navy-led tokens to the new semantic roles while minimizing churn in class names. Keep semantic intent stable where possible (primary dark surface, primary light surface, muted text, border tint, accent, dark-exception surface). Explicitly document which tokens remain accent-only and which dark-green tokens are allowed for contrast-critical surfaces.
  **Must NOT do**: Do not rename tokens in a way that forces unnecessary project-wide architectural churn. Do not introduce a second competing palette system. Do not make gold/copper a section background.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: token and brand-surface decisions drive the whole refactor
  - Skills: [] - no extra skill required
  - Omitted: [`frontend-design`] - executor should follow already-decided direction, not redesign the site

  **Parallelization**: Can Parallel: NO | Wave 1 | Blocks: 2,3,4,5,6,7,8 | Blocked By: none

  **References**:
  - Pattern: `tailwind.config.mjs` - current color/font/keyframe token source
  - Pattern: `src/styles/global.css` - current typography/body component classes consuming theme values
  - Pattern: `src/layouts/MainLayout.astro` - duplicate base style layer needing later reconciliation
  - External: `assets/ikmb.png` - visual source for green/gold tone inspiration
  - Reference palette: `brand-surface #F4F7EE`, `brand-surface-alt #E6F0DD`, `brand-surface-soft #D6E7C8`, `brand-primary #2F6B3B`, `brand-primary-deep #1E4D2B`, `brand-primary-deeper #153720`, `brand-text #1F3124`, `brand-text-muted #56705C`, `brand-border #A8C39D`, `brand-accent #C58A2E`, `brand-accent-soft #E4BE73`

  **Acceptance Criteria**:
  - [ ] `tailwind.config.mjs` defines concrete light-green/cream dominant token values plus limited dark-green exception values
  - [ ] accent token usage remains clearly separable from background/surface tokens
  - [ ] no new redundant theme object or parallel token namespace is introduced

  **QA Scenarios**:
  ```
  Scenario: Palette definition complete
    Tool: Bash
    Steps: Run `rtk read "tailwind.config.mjs"`
    Expected: Updated color entries show green/cream dominance, dark-green exceptions, and retained accent colors
    Evidence: .sisyphus/evidence/task-1-palette.txt

  Scenario: Accent misuse avoided
    Tool: Grep
    Steps: Search for newly introduced accent background tokens intended for large surfaces in theme config comments/names
    Expected: No token naming suggests gold/copper as primary section surface
    Evidence: .sisyphus/evidence/task-1-palette-audit.txt
  ```

  **Commit**: NO | Message: `refactor(theme): define green cream palette` | Files: `tailwind.config.mjs`

- [x] 2. Reconcile global base styles and shared typography surfaces

  **What to do**: Update `src/styles/global.css` and `src/layouts/MainLayout.astro` so body/background/text/selection/typography utility classes align to the new palette. Choose a single effective source of truth for base colors, then mirror only the necessary duplicated declarations to avoid drift. Preserve typography scale and class names.
  **Must NOT do**: Do not change font families, type scale, spacing system, or overall layout shell. Do not leave conflicting body/text/background definitions between these two files.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: foundational surface/contrast work
  - Skills: [] - no extra skill required
  - Omitted: [`theme-factory`] - plan already constrains aesthetic direction

  **Parallelization**: Can Parallel: NO | Wave 1 | Blocks: 3,4,5,6,7,8 | Blocked By: 1

  **References**:
  - Pattern: `src/styles/global.css` - base/body/selection/utility typography styles
  - Pattern: `src/layouts/MainLayout.astro` - duplicated `@layer base` and `@layer components` styles
  - API/Type: `tailwind.config.mjs` - palette tokens consumed by classes

  **Acceptance Criteria**:
  - [ ] body/background/text defaults use the new green/cream palette consistently
  - [ ] `text-h1`, `text-h2`, `text-body`, `text-body-s`, `text-caption`, and `text-mono` remain present and readable
  - [ ] duplicate base styles no longer disagree on core background/text colors

  **QA Scenarios**:
  ```
  Scenario: Duplicated global layers aligned
    Tool: Grep
    Steps: Search `src/styles/global.css` and `src/layouts/MainLayout.astro` for background/text hard-coded values and theme class definitions
    Expected: No conflicting navy-era body/text defaults remain between the two files
    Evidence: .sisyphus/evidence/task-2-global-audit.txt

  Scenario: Build-safe base styles
    Tool: Bash
    Steps: Run `rtk npm run build`
    Expected: Build succeeds with no Astro/Tailwind syntax errors from updated global layers
    Evidence: .sisyphus/evidence/task-2-build.txt
  ```

  **Commit**: NO | Message: `refactor(theme): align global base surfaces` | Files: `src/styles/global.css`, `src/layouts/MainLayout.astro`

- [x] 3. Recolor navigation and mobile menu chrome

  **What to do**: Update `src/components/Navigation.astro` so desktop nav, scroll-state background, borders, links, CTA, and mobile overlay/menu all reflect the new green/cream palette. Preserve hide/show behavior, active-link highlighting, and mobile open/close interactions. Use a dark-green exception only if light treatment harms readability over hero imagery.
  **Must NOT do**: Do not rewrite nav behavior. Do not weaken active-link clarity. Do not leave the mobile menu in old dark-navy colors.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: interactive chrome + overlay contrast work
  - Skills: [] - no extra skill required
  - Omitted: [`dev-browser`] - execution task can use browser QA separately, not for design decisions

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: 8 | Blocked By: 1,2

  **References**:
  - Pattern: `src/components/Navigation.astro` - nav layout, inline styles, active-link classes, mobile overlay
  - Pattern: `src/sections/HeroSection.astro` - nav sits over this imagery and must remain readable against it

  **Acceptance Criteria**:
  - [ ] default nav, scrolled nav, active links, CTA button, and mobile overlay all use green/cream-consistent surfaces
  - [ ] desktop and mobile text remains readable in all nav states
  - [ ] no navy-era inline RGBA background or border treatment remains unless explicitly mapped to dark-green exception

  **QA Scenarios**:
  ```
  Scenario: Desktop nav readability after scroll
    Tool: Playwright
    Steps: Open local preview home page at desktop width; inspect top nav before scroll, after scrolling past 100px, and while section active-link changes occur
    Expected: Nav background/border/link states stay readable and visually green/cream aligned; hide/show behavior still works
    Evidence: .sisyphus/evidence/task-3-nav-desktop.png

  Scenario: Mobile menu overlay state
    Tool: Playwright
    Steps: Open local preview at mobile width; tap menu toggle; inspect overlay background, links, CTA, and close state
    Expected: Overlay and links are readable; no leftover navy surface; menu still opens/closes correctly
    Evidence: .sisyphus/evidence/task-3-nav-mobile.png
  ```

  **Commit**: NO | Message: `refactor(theme): update navigation surfaces` | Files: `src/components/Navigation.astro`

- [x] 4. Recolor hero imagery overlays, text contrast, and CTA treatment

  **What to do**: Update `src/sections/HeroSection.astro` so hero gradients, overlays, text, particle visibility, and CTA styling match the new palette without losing headline contrast over photography. Keep the cinematic hierarchy, but shift dominant mood from navy to green/cream. Use a dark-green overlay exception if necessary for text legibility.
  **Must NOT do**: Do not alter entrance timing/scroll logic. Do not replace the hero image. Do not make CTA contrast weaker than current state.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: image-overlay color balance is the trickiest visual surface
  - Skills: [] - no extra skill required
  - Omitted: [`frontend-design`] - preserve current composition, only retune palette

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: 8 | Blocked By: 1,2

  **References**:
  - Pattern: `src/sections/HeroSection.astro` - background image layers, overlay gradients, CTA styles, particle visuals, scroll-linked transforms
  - Pattern: `src/layouts/MainLayout.astro` - typography utilities used by hero copy
  - Pattern: `src/data/contact.ts` - CTA link target remains unchanged

  **Acceptance Criteria**:
  - [ ] hero reads as green/cream-branded rather than navy-led
  - [ ] headline, subtitle, CTA primary, CTA secondary, and scroll indicator remain readable against the image
  - [ ] overlay/gradient values no longer depend on navy-heavy tones unless a dark-green exception is explicitly used

  **QA Scenarios**:
  ```
  Scenario: Hero above-the-fold contrast
    Tool: Playwright
    Steps: Open local preview at desktop width; capture initial hero state once fonts/content appear
    Expected: Headline, subtitle, CTA buttons, and overlay all remain readable; palette feels green/cream-led
    Evidence: .sisyphus/evidence/task-4-hero-desktop.png

  Scenario: Hero scroll transition remains legible
    Tool: Playwright
    Steps: Scroll through the hero collapse range and inspect text/overlay visibility during transition
    Expected: Text fades/scales correctly without becoming muddy or unreadable against recolored overlays
    Evidence: .sisyphus/evidence/task-4-hero-scroll.png
  ```

  **Commit**: NO | Message: `refactor(theme): refresh hero overlays and ctas` | Files: `src/sections/HeroSection.astro`

- [x] 5. Recolor light-surface sections: Pathways, Requirements, Contact

  **What to do**: Update `src/sections/PathwaysSection.astro`, `src/sections/RequirementsSection.astro`, and `src/sections/ContactSection.astro` so cream/light-green sections, cards, borders, icons, form controls, muted text, and CTA elements align to the new palette. Preserve current section structure and form success-state behavior.
  **Must NOT do**: Do not modify the malformed SVG structure in `RequirementsSection.astro` unless required to prevent breakage from adjacent theme edits. Do not add backend form integration. Do not reduce input/label contrast.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: multiple form/card/icon surfaces with contrast sensitivity
  - Skills: [] - no extra skill required
  - Omitted: [`pyqt6-ui-development-rules`] - irrelevant tech

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: 8 | Blocked By: 1,2

  **References**:
  - Pattern: `src/sections/PathwaysSection.astro` - badge helper + light cards on ivory background
  - Pattern: `src/sections/RequirementsSection.astro` - icon circles + raw SVG strings + CTA on light surface
  - Pattern: `src/sections/ContactSection.astro` - two-column contact + form card + success state
  - API/Type: `src/data/pathways.ts`, `src/data/requirements.ts`, `src/data/contact.ts`, `src/data/programs.ts` - content contracts only, unchanged

  **Acceptance Criteria**:
  - [ ] section backgrounds and cards use cream/light-green palette consistently
  - [ ] badges, icons, muted text, form labels, inputs, focus rings, and success state remain readable
  - [ ] no navy-era border/overlay colors remain in these three sections

  **QA Scenarios**:
  ```
  Scenario: Light-section card readability
    Tool: Playwright
    Steps: Open local preview; capture Pathways and Requirements sections at desktop width
    Expected: Cards, badges, icons, and text all read clearly on light surfaces with green-led accents
    Evidence: .sisyphus/evidence/task-5-light-sections.png

  Scenario: Contact form input and success states
    Tool: Playwright
    Steps: Open Contact section; inspect default form fields, focus an input, submit sample data, then inspect success state
    Expected: Inputs/focus styles remain visible; submit state and success message match new palette and remain readable
    Evidence: .sisyphus/evidence/task-5-contact-form.png
  ```

  **Commit**: NO | Message: `refactor(theme): update light sections and form surfaces` | Files: `src/sections/PathwaysSection.astro`, `src/sections/RequirementsSection.astro`, `src/sections/ContactSection.astro`

- [x] 6. Recolor dark-exception sections: Programs and Scholarship

  **What to do**: Update `src/sections/ProgramsSection.astro` and `src/sections/ScholarshipSection.astro` so any retained dark sections use dark-green rather than navy, while still harmonizing with the overall lighter site palette. Rework overlays, card borders, muted copy, and accent balance so these sections feel intentionally contrastive, not left-behind.
  **Must NOT do**: Do not keep navy merely because the section was previously dark. Do not overuse gold/copper as compensation. Do not break hover-lift or image-overlay behavior.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: dark-exception calibration requires careful contrast control
  - Skills: [] - no extra skill required
  - Omitted: [`theme-factory`] - already have concrete theme direction

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: 8 | Blocked By: 1,2

  **References**:
  - Pattern: `src/sections/ProgramsSection.astro` - dark image grid section with overlays and CTA card
  - Pattern: `src/sections/ScholarshipSection.astro` - dark surface cards and muted text on dark background
  - Pattern: `tailwind.config.mjs` - dark-green exception tokens decided in Task 1

  **Acceptance Criteria**:
  - [ ] retained dark sections read as dark-green, not navy
  - [ ] cards, overlays, muted text, and CTA surfaces remain readable and consistent with the broader theme
  - [ ] section contrast feels intentional relative to the lighter surrounding sections

  **QA Scenarios**:
  ```
  Scenario: Programs section dark-exception pass
    Tool: Playwright
    Steps: Open Programs section on local preview; inspect heading, grid cards, image overlays, and CTA card
    Expected: Section is dark-green/brand-aligned, not navy; text and overlays remain readable
    Evidence: .sisyphus/evidence/task-6-programs.png

  Scenario: Scholarship cards on dark-green surface
    Tool: Playwright
    Steps: Open Scholarship section; inspect heading, cards, muted requirement preview text, and CTA
    Expected: Card borders/text remain readable; dark surface harmonizes with site-wide green/cream palette
    Evidence: .sisyphus/evidence/task-6-scholarship.png
  ```

  **Commit**: NO | Message: `refactor(theme): retune dark exception sections` | Files: `src/sections/ProgramsSection.astro`, `src/sections/ScholarshipSection.astro`

- [x] 7. Recolor footer and shared component finishing surfaces

  **What to do**: Update `src/components/Footer.astro` and `src/components/ScrollReveal.astro` only as needed for palette consistency. Footer must align with the new brand direction and any dark-green exception policy. `ScrollReveal.astro` should be checked for transition styling assumptions but changed only if theme visibility requires it.
  **Must NOT do**: Do not modify reveal timing or observer behavior unless color visibility forces a minimal change. Do not leave the footer as a navy holdout.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: final cross-cutting component polish
  - Skills: [] - no extra skill required
  - Omitted: [`review-work`] - final review wave handles that later

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: 8 | Blocked By: 1,2

  **References**:
  - Pattern: `src/components/Footer.astro` - current dark footer, link colors, social icon states
  - Pattern: `src/components/ScrollReveal.astro` - opacity/transform transitions that may interact with lighter backgrounds

  **Acceptance Criteria**:
  - [ ] footer surfaces, links, captions, dividers, and social states align with the new palette
  - [ ] any retained dark footer reads as dark-green, not navy
  - [ ] scroll reveal visuals remain unobtrusive on both light and dark-exception sections

  **QA Scenarios**:
  ```
  Scenario: Footer contrast and accent balance
    Tool: Playwright
    Steps: Open bottom of local preview page; inspect footer background, headings, body links, and social icon hover states
    Expected: Footer matches green/cream system; all links/icons readable; no navy dominant surface remains
    Evidence: .sisyphus/evidence/task-7-footer.png

  Scenario: Reveal effect visibility on light backgrounds
    Tool: Playwright
    Steps: Reload page and scroll through multiple sections that use `ScrollReveal`
    Expected: Revealed content appears smoothly and remains readable against recolored backgrounds
    Evidence: .sisyphus/evidence/task-7-reveal.txt
  ```

  **Commit**: NO | Message: `refactor(theme): update footer and shared finishing surfaces` | Files: `src/components/Footer.astro`, `src/components/ScrollReveal.astro`

- [x] 8. Run source audit, build verification, and full-page visual sweep

  **What to do**: Perform a final audit for leftover navy/deep-blue/hard-coded dark values across the touched theme files, run `npm run build`, run `npm run preview`, and verify the full landing page in browser across desktop and mobile. Record explicit pass/fail evidence for every high-risk section and interaction state.
  **Must NOT do**: Do not rely on “looks good” language. Do not skip mobile or interaction checks. Do not ignore residual hard-coded colors in inline styles or SVG-adjacent strings.

  **Recommended Agent Profile**:
  - Category: `unspecified-high` - Reason: mixed source audit + build + QA execution
  - Skills: [`playwright`] - browser verification required
  - Omitted: [`git-master`] - no git operations needed

  **Parallelization**: Can Parallel: NO | Wave 2 | Blocks: Final verification wave | Blocked By: 3,4,5,6,7

  **References**:
  - Pattern: `tailwind.config.mjs`, `src/styles/global.css`, `src/layouts/MainLayout.astro`, `src/components/*.astro`, `src/sections/*.astro` - full audit set
  - Test: `package.json` - available scripts only: `dev`, `build`, `preview`
  - External: none

  **Acceptance Criteria**:
  - [ ] source audit finds no unintended navy/deep-blue dominant surfaces in touched files
  - [ ] `npm run build` succeeds
  - [ ] local preview shows green/cream theme consistently on desktop and mobile
  - [ ] nav/menu/hero/cards/form/footer all pass binary readability checks

  **QA Scenarios**:
  ```
  Scenario: Residual color audit
    Tool: Grep
    Steps: Search touched files for legacy navy tokens and hard-coded values such as `deep-space`, `#0a0e1a`, old rgba dark overlays, and similar dark-blue remnants
    Expected: Only approved dark-green exception values remain; no unintended navy-era dominant surface values found
    Evidence: .sisyphus/evidence/task-8-color-audit.txt

  Scenario: Full preview verification
    Tool: Playwright
    Steps: Run local preview; open home page on desktop and mobile widths; inspect nav, hero, pathways, scholarship, requirements, programs, contact, footer, and interaction states
    Expected: Full page renders without compile/layout breakage; palette consistent; all critical text and controls readable
    Evidence: .sisyphus/evidence/task-8-full-page.png
  ```

  **Commit**: NO | Message: `test(theme): verify green refresh` | Files: evidence only

## Final Verification Wave (MANDATORY — after ALL implementation tasks)
> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.
> **Do NOT auto-proceed after verification. Wait for user's explicit approval before marking work complete.**
> **Never mark F1-F4 as checked before getting user's okay.** Rejection or user feedback -> fix -> re-run -> present again -> wait for okay.
- [ ] F1. Plan Compliance Audit — oracle
- [ ] F2. Code Quality Review — unspecified-high
- [ ] F3. Real Manual QA — unspecified-high (+ playwright if UI)
- [ ] F4. Scope Fidelity Check — deep

## Commit Strategy
- No intermediate commits required by default.
- If user later requests commits, prefer a single commit after successful Task 8 unless verification uncovers fixes requiring follow-up.
- Keep evidence files in `.sisyphus/evidence/` out of product code changes unless user requests otherwise.

## Success Criteria
- The site no longer presents as navy-led.
- The site presents primarily as light green + cream, with only a few intentional dark-green contrast surfaces.
- Gold/copper reads as accent-only.
- No behavior regressions in nav, hero, form, scroll reveal, or section rendering.
- Build passes and browser QA confirms readable contrast across desktop/mobile states.
