# 02 — Setup MDX content engine with gray-matter and Zod validation

**What to build:** A content engine that reads `.mdx` files from the local filesystem, parses their YAML frontmatter, validates the shape with Zod, and provides typed helper functions that the rest of the app can consume. The Tech and Life index pages should display posts sourced from these MDX files instead of a hardcoded array.

The engine must produce a reliable, strongly-typed `Post` shape that downstream tickets (search/filter, Life cards, SEO) can depend on without defensive checks. Zod validation at parse time ensures that a malformed frontmatter (missing `title`, wrong `date` format, missing `tags` array) fails loudly during build rather than silently breaking the UI at runtime.

**Blocked by:** 01 — Refactor navigation to App Router

**Status:** ✅ DONE

- [x] `next-mdx-remote` and `gray-matter` are installed and importable
- [x] `zod` is installed for frontmatter schema validation
- [x] `lib/mdx.ts` exports `getAllPosts(category?: "tech" | "life")` that reads all `.mdx` files from `/content/tech/` and `/content/life/`, parses frontmatter, validates with Zod, and returns sorted `Post[]`
- [x] `lib/mdx.ts` exports `getPostBySlug(category: "tech" | "life", slug: string)` that returns a single post's metadata + raw MDX content
- [x] The Zod schema validates required fields: `title` (string), `excerpt` (string), `date` (string, parseable as date), `tags` (string array, min 1), `readingTime` (string). Optional fields: `featured` (boolean), `cover` (string URL), `gallery` (array of objects with `src` and `caption`)
- [x] If a `.mdx` file has invalid frontmatter, the build fails with a clear error message identifying the file and missing/invalid field
- [x] At least one stub `.mdx` file exists in `/content/tech/` and one in `/content/life/` with valid frontmatter (content body can be minimal placeholder text)
- [x] `/tech` page lists posts from `getAllPosts("tech")` using existing `PostCard` components
- [x] `/life` page lists posts from `getAllPosts("life")` using existing `PostCard` components
- [x] The hardcoded `posts` array in `lib/posts.ts` is removed; `Post` type is re-exported from the Zod schema or `lib/mdx.ts`
- [x] `pnpm run build` completes without errors
