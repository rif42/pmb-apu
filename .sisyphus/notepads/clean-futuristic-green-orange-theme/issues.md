-- Prior attempt scope-crept into `src/data/programs.ts`, `src/sections/ProgramsSection.astro`, and `src/sections/ContactSection.astro`; those edits were reverted so only `src/styles/global.css` remains as the code change for this task.
-- No blockers in this nav-only update; `rtk bun run build` completed successfully after the styling pass.

## 2026-05-05 Task 3

-- `lsp_diagnostics` could not run on the Astro section files because the configured `oxlint` server is not installed in this environment. Build verification was used instead and passed.
-- `lsp_diagnostics` could not run for `src/components/Footer.astro` because the configured `oxlint` server is not installed in this environment; build verification still passed.
-- Task 4 diagnostics hit the same environment limit: `biome` is missing for `src/styles/global.css` and `oxlint` is missing for the Astro sections, so build output served as the primary verification.
-- Task 7 hit the same environment limit: `lsp_diagnostics` for `src/sections/ProgramsSection.astro` could not run because `oxlint` is not installed here, so the successful `bun run build` output served as the verification gate.

-- Task 8 verification used `rtk bun run build`; the readable evidence file is `.sisyphus/evidence/task-8-integrated-build.txt`.
-- This nav fix exposed a Bun-on-Windows post-build assertion (`src\win\async.c`, line 76): Astro still completes successfully, but `bun run build` exits non-zero after the build output; `npm run build` is clean.
