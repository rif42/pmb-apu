# Clean Futuristic Green/Orange Theme Rollout

## TL;DR
> **Summary**: Shift below-hero experience + nav/footer to clean-futuristic light system using green as primary brand and light orange as accent, with medium-intensity decorative motion.
> **Deliverables**:
> - Updated CSS variable palette and semantic aliases
> - Tailwind token alignment
> - Section/component background + accent adoption (below hero, nav, footer)
> - Hardcoded color removal in ProgramsSection
> - Build + manual QA evidence for each task
> **Effort**: Medium
> **Parallel**: YES - 3 waves
> **Critical Path**: 1 → 2 → 3/4/5/6 → 7 → 8

## Context
### Original Request
Implement brand/accent colors (green + light orange), use clean futuristic direction, check CSS variables, keep theme lighter, dynamic, futuristic for highschool audience.

### Interview Summary
- Theme direction fixed: clean futuristic.
- Color role fixed: green primary, light orange accent.
- Scope fixed: sections below hero + navigation + footer.
- Motion fixed: medium intensity (decorative background motion only).
- Test strategy fixed: no infra setup; use build + agent-executed manual QA evidence.

### Metis Review (gaps addressed)
- Gap pass attempted, agent unavailable in this runtime. Guardrails applied directly:
  - Keep text contrast AA minimum.
  - Motion only on decorative layers, never content text blocks.
  - Limit orange to action/highlight semantics to prevent visual noise.
  - Remove hardcoded color bypasses so tokens remain single source of truth.

## Work Objectives
### Core Objective
Deliver cohesive clean-futuristic light visual system after hero section, anchored to green brand and light orange accent, without degrading readability/performance.

### Deliverables
1. Color token updates in `src/styles/global.css`.
2. Tailwind color map alignment in `tailwind.config.mjs`.
3. Background/accent updates in below-hero section files under `src/sections/`.
4. Navigation/footer alignment in `src/components/Navigation.astro` and `src/components/Footer.astro`.
5. Removal/replacement of hardcoded program colors in `src/sections/ProgramsSection.astro`.
6. Verification evidence files under `.sisyphus/evidence/` per task.

### Definition of Done (verifiable conditions with commands)
- `npm run build` passes with zero build errors.
- Below-hero sections show light clean-futuristic rhythm (alternating clean vs aurora-tinted surfaces).
- Primary actions/brand surfaces render green-led; orange appears as accent/highlight only.
- Nav/footer visually match new tokenized theme.
- No hardcoded legacy hexes remain in theme-critical section logic (especially ProgramsSection).

### Must Have
- Token-first theming (variables + Tailwind aliases) before section styling edits.
- Medium-intensity animated decorative layer with reduced-motion fallback.
- AA contrast for body text and key controls.
- QA evidence per task (happy + edge scenario).

### Must NOT Have (guardrails, AI slop patterns, scope boundaries)
- No redesign of hero structure/content.
- No backend/content/copy changes.
- No neon-heavy full-screen saturation.
- No animation on text/content containers.
- No new test framework setup in this rollout.

## Verification Strategy
> ZERO HUMAN INTERVENTION - all verification is agent-executed.
- Test decision: none (no framework setup in scope); use build + browser QA workflow.
- QA policy: every task includes agent-executed happy + failure/edge scenarios.
- Evidence: `.sisyphus/evidence/task-{N}-{slug}.{ext}`

## Execution Strategy
### Parallel Execution Waves
Wave 1 (foundation): tasks 1-2
Wave 2 (surface adoption in parallel): tasks 3-6
Wave 3 (integration hardening): tasks 7-8

### Dependency Matrix (full)
- 1 blocks: 2,3,4,5,6,7,8
- 2 blocks: 3,4,5,6,7,8
- 3,4,5,6 block: 7
- 7 blocks: 8
- 8 blocks: F1-F4

### Agent Dispatch Summary
- Wave 1: 2 tasks (`visual-engineering`)
- Wave 2: 4 tasks (`visual-engineering`)
- Wave 3: 2 tasks (`unspecified-high` + `visual-engineering`)

## TODOs

- [x] 1. Define light clean-futuristic token palette

  **What to do**: Update `src/styles/global.css` root variables for green-primary + light-orange accent system. Introduce/adjust semantic vars for surfaces, text, borders, glow, aurora tint, and CTA emphasis. Keep compatibility aliases for existing token names used by sections.
  **Must NOT do**: Do not remove token names still consumed by components before migration.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: token architecture + UI theme semantics.
  - Skills: `[]` - no extra skill needed.
  - Omitted: `frontend-design` - reason: implementation follows existing design language, not net-new art direction.

  **Parallelization**: Can Parallel: NO | Wave 1 | Blocks: 2,3,4,5,6,7,8 | Blocked By: none

  **References**:
  - Pattern: `src/styles/global.css` - existing variable model and semantic aliases.
  - API/Type: `src/layouts/MainLayout.astro` - `theme-color` references CSS variable.

  **Acceptance Criteria**:
  - [ ] `src/styles/global.css` contains explicit green-primary and light-orange accent semantic variables.
  - [ ] Existing semantic color names still resolve to valid values.

  **QA Scenarios**:
  ```
  Scenario: Token compile sanity
    Tool: Bash
    Steps: run `npm run build`
    Expected: Build succeeds with no CSS processing errors
    Evidence: .sisyphus/evidence/task-1-token-palette-build.txt

  Scenario: Missing-token edge
    Tool: Bash
    Steps: inspect build output for undefined CSS var warnings/errors
    Expected: No undefined variable error tied to updated tokens
    Evidence: .sisyphus/evidence/task-1-token-palette-edge.txt
  ```

  **Commit**: YES | Message: `style(theme): define green-primary and orange-accent token system` | Files: `src/styles/global.css`

- [x] 2. Align Tailwind palette aliases with new semantics

  **What to do**: Update `tailwind.config.mjs` color aliases to match token intent used by sections/components (brand, deep-space variants, soft-sage-like greens, accent oranges). Ensure utility class usage maps to new palette semantics.
  **Must NOT do**: Do not introduce redundant near-duplicate color names.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: theme utility mapping.
  - Skills: `[]`
  - Omitted: `test-driven-development` - reason: no test framework in scope.

  **Parallelization**: Can Parallel: NO | Wave 1 | Blocks: 3,4,5,6,7,8 | Blocked By: 1

  **References**:
  - Pattern: `tailwind.config.mjs` - current color map.
  - Pattern: `src/sections/*.astro` - utility color class consumers.

  **Acceptance Criteria**:
  - [ ] Tailwind colors used by sections/components resolve to updated green/orange-led semantics.
  - [ ] Build completes without invalid config errors.

  **QA Scenarios**:
  ```
  Scenario: Config integrity
    Tool: Bash
    Steps: run `npm run build`
    Expected: Build succeeds; no Tailwind config errors
    Evidence: .sisyphus/evidence/task-2-tailwind-alias-build.txt

  Scenario: Class resolution edge
    Tool: Playwright
    Steps: run site; inspect one element each using brand/surface/accent utility classes
    Expected: Computed styles present (not transparent/default fallback)
    Evidence: .sisyphus/evidence/task-2-tailwind-alias-edge.png
  ```

  **Commit**: YES | Message: `style(tailwind): align palette aliases to new brand semantics` | Files: `tailwind.config.mjs`

- [x] 3. Implement below-hero section background rhythm

  **What to do**: Update below-hero sections (`RequirementsSection.astro`, `PathwaysSection.astro`, `ScholarshipSection.astro`, `ContactSection.astro`, plus any other non-hero content sections) to alternating clean light surfaces and aurora-tinted surfaces.
  **Must NOT do**: Do not alter section content hierarchy or copy.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: sectional visual composition.
  - Skills: `[]`
  - Omitted: `frontend-design` - reason: style system already chosen.

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: 7 | Blocked By: 2

  **References**:
  - Pattern: `src/sections/RequirementsSection.astro`
  - Pattern: `src/sections/PathwaysSection.astro`
  - Pattern: `src/sections/ScholarshipSection.astro`
  - Pattern: `src/sections/ContactSection.astro`

  **Acceptance Criteria**:
  - [ ] Each below-hero section uses tokenized light surface classes.
  - [ ] Adjacent sections have visible but subtle alternation.

  **QA Scenarios**:
  ```
  Scenario: Rhythm verification
    Tool: Playwright
    Steps: open page; capture full-page screenshot; check consecutive section backgrounds
    Expected: Alternating clean/tinted rhythm visible without harsh contrast jumps
    Evidence: .sisyphus/evidence/task-3-section-rhythm.png

  Scenario: Over-saturation edge
    Tool: Playwright
    Steps: inspect section with highest tint
    Expected: Text remains clearly legible; no neon washout behind paragraphs
    Evidence: .sisyphus/evidence/task-3-section-rhythm-edge.png
  ```

  **Commit**: YES | Message: `style(sections): apply clean-futuristic light background rhythm` | Files: `src/sections/*.astro`

- [x] 4. Add medium-intensity decorative aurora motion layer

  **What to do**: Add decorative animated aurora/grain/grid layer for below-hero sections only. Use medium intensity, slow movement, and reduced-motion fallback.
  **Must NOT do**: No animation tied to text or interactive control transforms.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: motion styling and accessibility.
  - Skills: `[]`
  - Omitted: `revealjs` - unrelated skill.

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: 7 | Blocked By: 2

  **References**:
  - Pattern: `src/styles/global.css` - keyframes/utilities.
  - Pattern: `src/sections/*.astro` - section wrapper classes.

  **Acceptance Criteria**:
  - [ ] Aurora motion visible but non-distracting in below-hero sections.
  - [ ] `prefers-reduced-motion` path disables/reduces animation.

  **QA Scenarios**:
  ```
  Scenario: Motion baseline
    Tool: Playwright
    Steps: open page; record short screenshot sequence over 5-8 seconds
    Expected: Decorative layer motion visible; content blocks static
    Evidence: .sisyphus/evidence/task-4-aurora-motion.gif

  Scenario: Reduced-motion edge
    Tool: Playwright
    Steps: emulate prefers-reduced-motion=reduce; reload page
    Expected: Motion disabled/reduced while layout and contrast remain intact
    Evidence: .sisyphus/evidence/task-4-aurora-motion-reduced.png
  ```

  **Commit**: YES | Message: `style(motion): add medium decorative aurora with reduced-motion fallback` | Files: `src/styles/global.css`, `src/sections/*.astro`

- [x] 5. Align navigation with green-primary system

  **What to do**: Update `src/components/Navigation.astro` colors (including scoped CSS using `rgb(var(--color-brand-* ))`) to green-led brand styling with orange accent for active/CTA indicators.
  **Must NOT do**: Do not change nav behavior scripts.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: component theming.
  - Skills: `[]`
  - Omitted: `playwright` skill loading - tool directly usable in QA scenarios.

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: 7 | Blocked By: 2

  **References**:
  - Pattern: `src/components/Navigation.astro`
  - Pattern: `src/styles/global.css`

  **Acceptance Criteria**:
  - [ ] Nav background/border/text states align to new token semantics.
  - [ ] Accent usage remains limited to highlights/active states.

  **QA Scenarios**:
  ```
  Scenario: Desktop nav states
    Tool: Playwright
    Steps: open page desktop; hover/focus nav links and CTA
    Expected: Green-led base styling; orange appears only in emphasis states
    Evidence: .sisyphus/evidence/task-5-nav-states.png

  Scenario: Mobile menu edge
    Tool: Playwright
    Steps: switch to mobile viewport; open/close menu; inspect contrast
    Expected: Menu remains readable; no low-contrast text on tinted surface
    Evidence: .sisyphus/evidence/task-5-nav-mobile-edge.png
  ```

  **Commit**: YES | Message: `style(nav): apply green-primary tokenized navigation theme` | Files: `src/components/Navigation.astro`

- [x] 6. Align footer with light futuristic brand finish

  **What to do**: Update `src/components/Footer.astro` surfaces, borders, text emphasis, and links to match post-hero visual system.
  **Must NOT do**: Do not alter footer information architecture.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: terminal section visual consistency.
  - Skills: `[]`
  - Omitted: `frontend-design` - no layout redesign requested.

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: 7 | Blocked By: 2

  **References**:
  - Pattern: `src/components/Footer.astro`
  - Pattern: `src/styles/global.css`

  **Acceptance Criteria**:
  - [ ] Footer visually consistent with below-hero palette and accent rules.
  - [ ] Link/readability contrast meets AA baseline.

  **QA Scenarios**:
  ```
  Scenario: Footer consistency
    Tool: Playwright
    Steps: scroll to footer; capture screenshot with previous section boundary
    Expected: Smooth transition; no abrupt legacy dark block
    Evidence: .sisyphus/evidence/task-6-footer-consistency.png

  Scenario: Link contrast edge
    Tool: Playwright
    Steps: inspect footer links normal/hover/focus
    Expected: Links remain distinguishable in all states
    Evidence: .sisyphus/evidence/task-6-footer-contrast-edge.png
  ```

  **Commit**: YES | Message: `style(footer): harmonize footer with clean futuristic palette` | Files: `src/components/Footer.astro`

- [x] 7. Remove hardcoded color bypasses in ProgramsSection

  **What to do**: Refactor `src/sections/ProgramsSection.astro` hardcoded hex map (`programColors`) and direct color values (`#0e1a3a` etc.) to token/utility driven values aligned with new brand system.
  **Must NOT do**: Do not remove program differentiation entirely; preserve card identity through tokenized variants.

  **Recommended Agent Profile**:
  - Category: `unspecified-high` - Reason: mixed local styles + section logic refactor.
  - Skills: `[]`
  - Omitted: `ai-slop-remover` - targeted manual refactor clearer for theme semantics.

  **Parallelization**: Can Parallel: NO | Wave 3 | Blocks: 8 | Blocked By: 3,4,5,6

  **References**:
  - Pattern: `src/sections/ProgramsSection.astro`
  - Pattern: `src/styles/global.css`

  **Acceptance Criteria**:
  - [ ] No hardcoded legacy hex in theme-critical visual mapping for program cards.
  - [ ] Program cards still show intentional visual differentiation.

  **QA Scenarios**:
  ```
  Scenario: Program card differentiation
    Tool: Playwright
    Steps: open programs section; capture all cards
    Expected: Distinct cards preserved while matching global tokenized palette
    Evidence: .sisyphus/evidence/task-7-program-cards.png

  Scenario: Regression edge on card readability
    Tool: Playwright
    Steps: inspect card title/body text over each variant
    Expected: Readability preserved across all variants
    Evidence: .sisyphus/evidence/task-7-program-cards-edge.png
  ```

  **Commit**: YES | Message: `style(programs): replace hardcoded colors with tokenized variants` | Files: `src/sections/ProgramsSection.astro`

- [x] 8. Perform integrated pass for scope fidelity + final polish

  **What to do**: Validate entire scoped area (below-hero + nav/footer), fix any leftover inconsistency, confirm hero untouched except necessary adjacency smoothing.
  **Must NOT do**: No expansion into unrelated redesign work.

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: full-system visual coherence pass.
  - Skills: `[]`
  - Omitted: `review-work` - final verification handled in dedicated wave F1-F4.

  **Parallelization**: Can Parallel: NO | Wave 3 | Blocks: F1-F4 | Blocked By: 7

  **References**:
  - Pattern: `src/pages/index.astro` - section composition order.
  - Pattern: `src/sections/*.astro`, `src/components/Navigation.astro`, `src/components/Footer.astro`

  **Acceptance Criteria**:
  - [ ] Scope boundaries respected: no unauthorized hero/content redesign.
  - [ ] Theme transitions coherent across scoped components.

  **QA Scenarios**:
  ```
  Scenario: Full-page walkthrough
    Tool: Playwright
    Steps: open page; capture top/mid/bottom screenshots and one full-page shot
    Expected: Consistent clean-futuristic style with green-led brand and orange accents
    Evidence: .sisyphus/evidence/task-8-integration-fullpage.png

  Scenario: Build gate edge
    Tool: Bash
    Steps: run `npm run build` after all styling changes
    Expected: Build succeeds; no new warnings/errors blocking deploy
    Evidence: .sisyphus/evidence/task-8-build-final.txt
  ```

  **Commit**: YES | Message: `style(theme): integrate clean futuristic green/orange rollout` | Files: scoped style files only

## Final Verification Wave (MANDATORY — after ALL implementation tasks)
> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.
> **Do NOT auto-proceed after verification. Wait for user's explicit approval before marking work complete.**
> **Never mark F1-F4 as checked before getting user's okay.** Rejection or user feedback -> fix -> re-run -> present again -> wait for okay.
- [x] F1. Plan Compliance Audit — oracle
- [x] F2. Code Quality Review — unspecified-high
- [x] F3. Real Manual QA — unspecified-high (+ playwright)
- [x] F4. Scope Fidelity Check — deep

## Commit Strategy
- Commit per task cluster:
  1) token foundation (tasks 1-2)
  2) surface adoption (tasks 3-6)
  3) hardcoded cleanup + integration (tasks 7-8)
- Conventional commit format required.

## Success Criteria
- Scoped pages/components visibly match clean-futuristic light direction.
- Green reads as dominant brand identity; orange reads as controlled accent.
- Motion feels modern but not distracting; reduced-motion path works.
- Build passes and QA evidence exists for every task.
