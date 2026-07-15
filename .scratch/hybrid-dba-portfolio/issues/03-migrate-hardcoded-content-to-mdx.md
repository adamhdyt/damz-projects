# 03 — Migrate hardcoded content to MDX files and render on detail pages

**What to build:** Convert the existing hardcoded article content (Oracle Scripts, Mountain Trip) from TSX components into proper `.mdx` files, create stub MDX files for all remaining posts, build a custom MDX component map for rich rendering, and wire the article detail pages (`/tech/[slug]`, `/life/[slug]`) to render compiled MDX content via `next-mdx-remote`.

After this ticket, a user navigating to `/tech/oracle-scripts` sees the full Oracle Script Vault article rendered from an MDX file — with headings, paragraphs, code fences, and images — not from a hardcoded React component.

**Blocked by:** 02 — Setup MDX content engine

**Status:** ✅ DONE

- [x] `/content/tech/oracle-scripts.mdx` contains the full Oracle Scripts content migrated from the TSX component, with code blocks using standard markdown fences (````sql`, ````plsql`, ````bash`)
- [x] `/content/life/gunung.mdx` contains the Mountain Trip journal content migrated from the TSX component, with image references and gallery data
- [x] Stub `.mdx` files exist for remaining posts: `designing-type-safe-data-layer.mdx`, `profiling-postgres.mdx`, `understanding-rsc.mdx`, `the-quiet-discipline.mdx`, `notes-small-town.mdx`, `reading-habit.mdx` — each with valid frontmatter and at least 2-3 paragraphs of placeholder content
- [x] `components/mdx/mdx-components.tsx` exports a custom component map that handles: headings (h1-h4), paragraphs, links, images (via Next.js `Image`), lists, blockquotes, and code blocks (passed through to `CodeBlock` component)
- [x] `/tech/[slug]/page.tsx` uses `getPostBySlug()` + `next-mdx-remote` to compile and render MDX content with the custom component map
- [x] `/life/[slug]/page.tsx` uses the same rendering pipeline
- [x] Article detail pages display: tag badge, title, date, reading time, and the rendered MDX body
- [x] Back navigation from article detail returns to the correct section list (`/tech` or `/life`)
- [x] The hardcoded `oracle-scripts.tsx` and `mountain-trip.tsx` components under `components/blog/posts/` are no longer imported by the detail page (can be deleted or left unused)
- [x] `pnpm run build` completes without errors and all slug routes are statically generated
