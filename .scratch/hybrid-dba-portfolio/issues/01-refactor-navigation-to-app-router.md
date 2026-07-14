# 01 — Refactor navigation from useState to App Router

**What to build:** Transform the current single-page, state-driven navigation into proper Next.js App Router file-based routing, while preserving the persistent sidebar layout and ensuring the dark/light theme toggle continues to work seamlessly across all routes.

Currently, the entire app lives in a single `page.tsx` that uses `useState<Section>("home")` and `useState<string | null>(null)` to switch between Home, Tech, Life views and post detail. This must be replaced with a `(blog)` route group where the Sidebar and MobileNav render in a shared layout, and each section has its own route. The sidebar's nav items become `<Link>` elements. Active state is derived from `usePathname()` instead of props/callbacks.

The existing `ThemeProvider` (next-themes) and `ThemeToggle` component must be verified to work correctly in the new layout structure — the toggle must be accessible from both desktop sidebar and mobile nav on every route, and theme preference must persist across route navigations.

**Blocked by:** None — can start immediately.

**Status:** ✅ DONE

- [x] `app/(blog)/layout.tsx` exists and renders the Sidebar (desktop) + MobileNav (mobile) + `{children}` in a responsive grid
- [x] `app/(blog)/page.tsx` renders the Home/About view
- [x] `app/(blog)/tech/page.tsx` renders a placeholder Tech Notes list
- [x] `app/(blog)/tech/[slug]/page.tsx` renders a placeholder article detail
- [x] `app/(blog)/life/page.tsx` renders a placeholder Life list
- [x] `app/(blog)/life/[slug]/page.tsx` renders a placeholder article detail
- [x] `Sidebar` component uses `<Link href="/tech">` etc. instead of `onSelect` callback
- [x] `Sidebar` active state is derived from `usePathname()`, not from props
- [x] `MobileNav` component uses `<Link>` + `usePathname()` instead of `onSelect` callback
- [x] Browser back/forward buttons navigate correctly between all routes
- [x] `ThemeToggle` is present and functional in both Sidebar and MobileNav across all routes
- [x] Theme preference (dark/light) persists across route navigations and page reloads
- [x] Old SPA-style `app/page.tsx` with `useState` is removed
- [x] `pnpm run build` completes without errors

