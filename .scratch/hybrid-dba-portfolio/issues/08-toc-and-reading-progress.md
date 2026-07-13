# 08 — Add Table of Contents and Reading Progress bar to article detail

**What to build:** Enhance the article detail pages (`/tech/[slug]` and `/life/[slug]`) with two reading-experience features: an auto-generated Table of Contents from the article's heading structure, and a thin reading progress bar that tracks the user's scroll position through the article.

These features are especially valuable for long DBA articles like the Oracle Script Vault, which can have many sections. A reader should be able to jump directly to "Data Pump Export" without scrolling through all the monitoring scripts above it.

**Blocked by:** 03 — Migrate hardcoded content to MDX

**Status:** ready-for-agent

- [ ] A `TableOfContents` component auto-generates a navigation list from the article's `<h2>` and `<h3>` headings
- [ ] Each heading in the rendered MDX content has a unique `id` attribute (slugified from the heading text)
- [ ] Clicking a ToC entry smooth-scrolls to the corresponding heading in the article
- [ ] The ToC visually highlights the currently visible section as the user scrolls (scroll-spy behavior)
- [ ] On wide viewports (≥1280px), the ToC is displayed as a sticky element alongside the article content
- [ ] On narrow viewports (<1280px), the ToC is collapsible — rendered above the article content with an expand/collapse toggle
- [ ] A `ReadingProgress` component renders a thin progress bar (2-3px height) at the top of the article detail view
- [ ] The progress bar fills from 0% to 100% based on the user's scroll position relative to the article's total scrollable height
- [ ] The progress bar uses the primary theme color and is visually subtle but noticeable
- [ ] Both components work correctly in both dark and light themes
- [ ] `pnpm run build` completes without errors
