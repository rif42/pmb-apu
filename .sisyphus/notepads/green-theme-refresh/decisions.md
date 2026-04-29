## 2026-04-28T00:00:00Z - palette foundation decision
- Locked the semantic green/cream palette in `tailwind.config.mjs` so the refresh can rely on stable surface, text, border, and accent roles.
- Kept legacy Tailwind aliases in place during the transition so older classes can continue working while visually mapping to the new palette.

## 2026-04-28T00:00:00Z - base shell decision
- Consolidated base body/selection/typography styling into `src/styles/global.css` so `MainLayout.astro` no longer carries a duplicate shell layer.
- Set the page defaults to cream surfaces and charcoal text to align the global shell with the refreshed theme.

## 2026-04-28T00:00:00Z - navigation theme decision
- Kept the nav dark green over the hero as the readability exception, then switched it to cream once the page scrolls.
- Preserved the existing hide/show and mobile toggle behavior; only the chrome/theme layer changed.
- Used cream/green for the mobile overlay too, since a dark navy overlay no longer fit the palette or readability target.

## 2026-04-28T15:07:00Z - global styles reconciliation
- Confirmed `global.css` as single source of truth; `MainLayout.astro` imports only, no style drift.
- `theme-color` meta tag kept at `#F4F7EE` (warm-ivory); no dark-mode variant needed for this static admissions site.
- Verified no conflicting definitions remain—build output shows green/cream tokens only.

## 2026-04-28T15:19:09Z - footer exception decision
- Kept the footer as the intentional dark-green exception, but moved its chrome onto semantic palette tokens so it no longer leans on white/gray defaults.
- Left `ScrollReveal.astro` unchanged: the component already uses a generic opacity/transform reveal and has no theme-specific surface styling to correct.

## 2026-04-28T15:16:39.3663076+07:00 - light section palette decision
- Kept the three light sections on warm-ivory / soft-sage surfaces and used deep-sage for interactive emphasis so the cream chrome stays readable without drifting back to navy-era contrast.
- Left the Requirements SVG markup unchanged except for surrounding palette classes to avoid destabilizing the known-fragile inline icon strings.
- Kept burnt-copper as a label accent only; CTAs and controls now read from the green/cream palette.

## 2026-04-28T15:13:34+07:00 - dark exception sections decision
- Kept Programs and Scholarship as intentional contrast bands, but rebased them on the green semantic palette so they no longer feel like leftover navy sections.
- Reworked overlays, card borders, and muted copy to preserve readability on dark surfaces while keeping copper as a small accent, not a fallback surface color.
- Matched CTA treatments to the green exception pattern already used in navigation for consistency across the page.

## 2026-04-28T15:45:00Z - hero palette decision
- Swapped the hero’s overlay stack from navy/deep-space to deep-sage with a dark-green readability exception, preserving the existing image-driven composition.
- Moved CTA primacy to deep-sage and kept the secondary CTA as a warm-ivory outline to strengthen the green/cream hierarchy.
- Kept the accent line on the headline in soft-sage rather than copper so the hero reads as branded green first, accent second.

## 2026-04-28T15:36:00Z - final verification decision
- Treated `deep-space` and `navy` references found in theme scope as acceptable only because they are semantic aliases already mapped to the locked dark-green exception values in `tailwind.config.mjs`, not blue-era colors.
- Left the repeated `#fbf9f0` card fills in `PathwaysSection.astro`, `RequirementsSection.astro`, and `ContactSection.astro` unchanged for Task 8 because the final audit target was navy/deep-blue/hard-coded dark remnants, and browser QA showed those light-card fills remain readable and non-dominant.
- Kept the verification artifact spec in `.sisyphus/evidence/task-8-qa.spec.cjs` as evidence of the exact browser checks used for the final desktop/mobile sweep.

## 2026-04-28T15:42:00Z - mobile menu panel decision
- Kept the mobile-menu fix inside `src/components/Navigation.astro` by treating the open state as a contained menu sheet beneath the existing 72px header instead of a centered full-screen text overlay.
- Chose an opaque cream panel with soft-sage rows over heavier blur/transparency so the hero image stays visibly subordinate while the menu remains clearly branded and readable on small screens.
- Reduced mobile link hierarchy from `text-h3` to `text-body` row buttons because the failure was caused by oversized centered typography, not by the underlying nav behavior.

## 2026-04-28T16:00:00Z - final-wave compliance decision
- Used `bg-brand-surface` for the three flagged light cards because the rejection was specifically about off-token hard-coded cream values; this keeps the surfaces inside the locked palette without redesigning section structure or spacing.
- Kept the desktop nav CSS selectors compatible with the existing active-link styling while changing the observer callback to write `data-active="true"` explicitly, which resolves the review finding without altering the observer thresholds or the mobile-menu fix.
