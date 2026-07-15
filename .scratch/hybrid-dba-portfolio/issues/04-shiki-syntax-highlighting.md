# 04 — Replace SQL tokenizer with Shiki syntax highlighting

**What to build:** Replace the custom regex-based SQL tokenizer in the `CodeBlock` component with Shiki server-side syntax highlighting. The new component must support multiple languages crucial for a DBA portfolio, render accurate highlighting for both dark and light themes, display a language label badge, retain the "Copy to clipboard" button, and handle long-line overflow gracefully on all viewport sizes.

DBA content frequently includes long DataPump commands, GoldenGate configuration lines, and wide SQL queries. The code block must handle horizontal overflow via smooth scrolling without breaking the page layout on mobile (320px–768px viewports).

**Blocked by:** 03 — Migrate hardcoded content to MDX

**Status:** ✅ DONE

- [x] `shiki` is installed and importable
- [x] `CodeBlock` component uses Shiki to render syntax highlighting server-side (no client-side JS for highlighting)
- [x] Supported languages: `sql`, `plsql`, `bash`/`shell`, `yaml`, `json`, `typescript`, `javascript`, `ini`/`properties` (≥ 6 languages minimum)
- [x] Each code block displays a language label badge in the top-left corner (e.g., "SQL", "Bash", "YAML")
- [x] "Copy to clipboard" button is retained and shows "Copied ✓" confirmation for ~1.8 seconds
- [x] Code highlighting adapts to the current theme (dark/light) — uses Shiki dual-theme or CSS variables approach
- [x] Code blocks with long lines (>120 characters) render with horizontal scroll (`overflow-x: auto`) without breaking the parent layout
- [x] On mobile viewports (320px–768px), code blocks remain contained within the screen width with smooth horizontal scrolling
- [x] The old custom `tokenizeSql()` function and its `KEYWORDS`/`TYPES` sets are removed from the codebase
- [x] MDX code fences (````sql`, ````bash`, etc.) in existing `.mdx` files render through the new Shiki-powered `CodeBlock`
- [x] The custom MDX component map (from Ticket 03) correctly routes `pre`/`code` elements to the new `CodeBlock`
- [x] `pnpm run build` completes without errors
