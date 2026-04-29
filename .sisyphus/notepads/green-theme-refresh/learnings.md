## 2026-04-28
- Added a locked semantic palette in `tailwind.config.mjs` with cream surfaces, green primary/deep roles, muted text, border tint, and accent tokens.
- Legacy Tailwind color names stay in place as aliases, so existing classes keep working while the theme shifts green/cream.
- Reworked gray/blue family fallbacks into green-tinted equivalents to keep old utility classes visually aligned with the new direction.

## 2026-04-28T00:00:00Z
- `src/styles/global.css` is the single base-shell source now; `MainLayout.astro` imports it instead of maintaining a second copy of the same body/selection/typography rules.
- Base surfaces now read from the green/cream palette (`#F4F7EE` / `#1F3124`) so default text and selections stay aligned with the new theme.
- Typography utilities kept the live scale from the layout shell, but removed hardcoded white text so the classes inherit the new base color cleanly.

## 2026-04-28T15:07:00Z
- Verified `global.css` and `MainLayout.astro` are in sync—no conflicting body/text/background definitions.
- Build passes with zero navy-era base defaults; `navy` token in tailwind.config is a semantic alias mapped to green values.
- Typography utilities (text-h1, text-h2, text-body, text-body-s, text-caption, text-mono) confirmed intact across 9 files.
- Selection styling uses `rgba(47, 107, 59, 0.22)`—aligned to deep-sage.

## 2026-04-28T00:00:00Z - navigation theme pass
- `src/components/Navigation.astro` now flips between a dark-green hero state and a cream scrolled state instead of the old navy glass treatment.
- Active links are now driven by a `data-active` flag so the same observer logic can keep the highlight readable in both themes.
- Mobile menu chrome moved fully to cream/green surfaces so the overlay no longer carries any navy-era styling.

## 2026-04-28T15:19:09Z - footer theme pass
- `src/components/Footer.astro` now uses semantic green palette tokens (`bg-brand-primary-deeper`, `text-warm-ivory`, `text-soft-sage`, `border-brand-border`) so the dark exception reads as intentional dark green instead of navy.
- Link and social hover states were softened to the brand palette; the divider and copyright line now match the same green/cream system.
- `src/components/ScrollReveal.astro` stayed untouched because its opacity/transform reveal flow is palette-neutral and did not need a visibility fix.

## 2026-04-28T15:16:39.3663076+07:00 - light surface section pass
- Recolored `PathwaysSection.astro`, `RequirementsSection.astro`, and `ContactSection.astro` so light-surface cards, badges, icons, inputs, and CTAs stay in the cream/soft-sage/deep-sage family.
- Swapped old blue/teal/dark border and focus utilities out of the light sections; the remaining accent color is copper only for label emphasis.
- Preserved the contact form success-state behavior and left the fragile Requirements SVG structure untouched.

## 2026-04-28T15:13:34+07:00 - dark exception recolor pass
- `ProgramsSection.astro` and `ScholarshipSection.astro` now read as deliberate dark-green exceptions, using `brand-primary-deeper`/`brand-primary` surfaces instead of the older deep-space/navy feel.
- Green-tinted borders, overlays, and lifted muted copy improved contrast on dark cards without leaning harder on copper.
- Copper stayed restrained to badge/icon accents while CTA surfaces remained green, matching the nav’s approved exception logic.

## 2026-04-28T15:45:00Z - hero recolor pass
- `src/sections/HeroSection.astro` now uses deep-green overlays instead of navy layers, keeping the same cinematic stack while shifting the hero mood to green/cream.
- Headline, subtitle, scroll indicator, and both CTAs now lean on warm-ivory and green tokens for contrast; copper/gold no longer leads the composition.
- Particles were retinted to warm-ivory so they stay visible without reintroducing a dark-blue atmosphere.

## 2026-04-28T15:35:00Z - task 8 verification sweep
- Residual source audit across `tailwind.config.mjs`, `src/styles/global.css`, `src/layouts/MainLayout.astro`, `src/components/*.astro`, and `src/sections/*.astro` found no unintended navy/deep-blue dominant surfaces; remaining dark values resolve to approved dark-green exception tokens or matching rgba values.
- `rtk npm run build` passed and local preview responded on `http://127.0.0.1:4173` before browser QA.
- Playwright QA passed on desktop and iPhone 12 mobile. Verified: dark-green hero nav before scroll, cream nav after scroll, mobile menu open/close, visible hero CTA, Pathways cards, Requirements cards, Programs/Scholarship dark sections, contact form focus + simulated success state, footer visibility, and zero hidden `ScrollReveal` elements after full-page scroll.
- Evidence captured under `.sisyphus/evidence/`: `task-8-desktop-top.png`, `task-8-footer-desktop.png`, `task-8-full-page-desktop.png`, `task-8-full-page-mobile.png`, `task-8-mobile-menu.png`, `task-8-smoke.png`, and the QA spec `task-8-qa.spec.cjs`.

## 2026-04-28T15:41:00Z - task 8 mobile menu follow-up fix
- Tightened `src/components/Navigation.astro` only: replaced the centered full-screen mobile menu layout with a top-aligned contained panel, compact row links, and a stronger cream panel/scrim separation under the existing dark-green mobile header.
- Preserved mobile toggle behavior and anchor-close behavior by keeping the same menu visibility logic and extending the close-on-click handler to all anchors inside the mobile menu, including the CTA.
- Rebuilt successfully and re-ran focused iPhone 12 Playwright QA. Refreshed `.sisyphus/evidence/task-8-mobile-menu.png` now shows a clean branded menu sheet; open state, close state, `#program` anchor navigation, and runtime health all passed.

## 2026-04-28T15:59:00Z - final-wave rejection fix pass
- Replaced the three remaining off-token `bg-[#fbf9f0]` card fills with approved `bg-brand-surface` classes in `src/sections/PathwaysSection.astro`, `src/sections/RequirementsSection.astro`, and `src/sections/ContactSection.astro`.
- Corrected desktop nav active-state behavior in `src/components/Navigation.astro` by explicitly setting `data-active="true"` for the intersecting link and removing the attribute from inactive links, preserving the current observer and mobile-menu behavior.
- Scoped validation passed: grep found no remaining `bg-[#fbf9f0]`, `toggleAttribute(`, `data-active="true"` mismatch markers, or TODO/FIXME/HACK markers in the four reviewed files; `rtk npm run build` passed; desktop Playwright nav check confirmed `#jalur-masuk` became active with `data-active="true"` and rendered `rgb(47, 107, 59)` after navigation.
