# 07 — Build image-focused Life section cards

**What to build:** Create a visually distinct card variant for the `/life` page that prioritizes cover images over text. When a Life post has a `cover` image in its frontmatter, the card renders with a large hero-style image. The overall `/life` layout should feel like a visual portfolio or travel blog, clearly different from the text-heavy Tech Notes grid.

**Blocked by:** 02 — Setup MDX content engine

**Status:** ready-for-agent

- [ ] `PostCard` component supports a visual variant: when the post has a `cover` image AND `category === "life"`, it renders with the image prominently displayed (large aspect ratio, image fills the top of the card)
- [ ] Life cards without a `cover` image fall back to the standard text-only card layout
- [ ] Featured Life posts span full width with a hero-style image (aspect ratio ~16:9)
- [ ] Non-featured Life posts render in a 2-column grid with image cards (aspect ratio ~4:3)
- [ ] Images use Next.js `Image` component with proper `sizes` attribute for responsive loading
- [ ] Images have a subtle hover-to-zoom scale transition (similar to the existing `mountain-trip.tsx` gallery)
- [ ] The `/life` page is visually distinct from `/tech` at a glance — image-dominant vs text-dominant
- [ ] Cards link to `/life/[slug]` via `<Link>` component
- [ ] Layout is responsive: single column on mobile, 2-column grid on desktop
- [ ] `pnpm run build` completes without errors
