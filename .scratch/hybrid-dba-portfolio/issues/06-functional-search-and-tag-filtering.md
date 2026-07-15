# 06 — Implement functional search and tag filtering on Tech Notes

**What to build:** Transform the static, decorative search bar on the `/tech` page into a fully functional client-side search with real-time filtering by title, tags, and excerpt. Add tag filter pills that can be combined with text search. Add a keyboard shortcut (`/`) to focus the search bar.

A DBA visiting `/tech` should be able to type "tablespace" and immediately see only the posts whose title, tags, or excerpt contain that keyword — no page reload, no server round-trip.

**Blocked by:** 02 — Setup MDX content engine

**Status:** ✅ DONE

- [x] The search bar on `/tech` is a real `<input type="search">` element with controlled state
- [x] Typing in the search bar filters the post list in real-time by matching against post `title`, `tags`, and `excerpt`
- [x] Filtering is case-insensitive
- [x] Results update within 100ms of typing (no debounce delay perceptible to the user)
- [x] Tag filter pills are displayed below the search bar, dynamically generated from all unique tags across tech posts
- [x] Clicking a tag pill filters posts to only those with that tag; clicking again deselects it
- [x] Tag filtering and text search can be combined (AND logic: post must match both the selected tag AND the search text)
- [x] Pressing the `/` key anywhere on the page focuses the search bar (unless the user is already typing in an input)
- [x] When no posts match, a clear "No posts match" empty state is displayed
- [x] The post count text at the bottom updates to reflect the filtered count
- [x] `pnpm run build` completes without errors
