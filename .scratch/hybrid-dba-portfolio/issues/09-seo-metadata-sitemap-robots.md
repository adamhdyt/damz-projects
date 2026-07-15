# 09 — SEO metadata, sitemap, and robots.txt

**What to build:** Add dynamic SEO metadata to every page and article using Next.js `generateMetadata()`, create an auto-generated sitemap from all MDX content paths, and configure a standard robots.txt. After this ticket, sharing a link to `/tech/oracle-scripts` on LinkedIn or Twitter displays a rich preview with the article's title, description, and (optionally) an Open Graph image.

**Blocked by:** 03 — Migrate hardcoded content to MDX, 05 — Personalize AboutIntro and Sidebar

**Status:** ✅ DONE

- [x] Root `layout.tsx` metadata is updated: title template is `"%s | Adam Hidayat"`, default title is `"Adam Hidayat — DBA Portfolio & Blog"`, description reflects the site purpose
- [x] `/` (Home) has a specific meta title: "Adam Hidayat — Database Administrator" and a description summarizing his expertise
- [x] `/tech` has meta title: "Tech Notes | Adam Hidayat" with a relevant description
- [x] `/life` has meta title: "Life | Adam Hidayat" with a relevant description
- [x] `/tech/[slug]` pages use `generateMetadata()` to produce dynamic title (article title), description (article excerpt), and Open Graph tags from the MDX frontmatter
- [x] `/life/[slug]` pages use the same `generateMetadata()` pattern
- [x] Open Graph `og:type` is set to `"article"` on article detail pages and `"website"` on index pages
- [x] `app/sitemap.ts` exists and auto-generates a sitemap including: `/`, `/tech`, `/life`, and all individual post URLs from MDX content
- [x] `app/robots.ts` exists with a standard configuration allowing all crawlers and referencing the sitemap URL
- [x] Each page has a single `<h1>` element (no duplicate h1s)
- [x] `pnpm run build` completes without errors
- [x] All generated pages have correct `<title>` and `<meta name="description">` in the HTML output
