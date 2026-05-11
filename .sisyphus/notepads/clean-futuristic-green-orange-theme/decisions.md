-- Kept the palette light, sage-green, and low-saturation so below-hero sections, navigation, and footer remain readable without redesign.
-- Introduced explicit semantic glow and aurora variables, but left them as decorative tints only; all existing consuming token names continue to resolve through compatibility aliases.
-- Registered semantic utilities directly in Tailwind and layered the old `brand-*`/legacy names on top so the token migration stays additive instead of forcing section-level rewrites.
-- Implemented the medium-intensity motion layer as a reusable `.motion-aurora-shell` wrapper in global CSS, with section-specific modifier classes only for tuning intensity and duration.

-- Kept task 8 narrow: only ProgramsSection token shadow cleanup and the RequirementsSection SVG typo fix were needed for integrated polish; no route, data, or hero changes.
