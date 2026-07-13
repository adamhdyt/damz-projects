# 05 — Personalize AboutIntro and Sidebar for Adam Hidayat

**What to build:** Update the Home page hero section and Sidebar to reflect Adam Hidayat's actual identity, professional background, and social links. After this ticket, a recruiter landing on `/` immediately sees Adam's real name, title, location, career stats, and can navigate to his GitHub, LinkedIn, Instagram, or email.

This ticket touches only the Home page (`app/(blog)/page.tsx` → `AboutIntro` component) and the Sidebar/MobileNav components. It does NOT touch the content engine, article rendering, or search — those are handled by parallel tickets.

**Blocked by:** 01 — Refactor navigation to App Router

**Status:** ready-for-agent

- [ ] `AboutIntro` displays name: "Adam Hidayat"
- [ ] `AboutIntro` displays title: "Database Administrator"
- [ ] `AboutIntro` bio text reflects DBA specialization in enterprise systems (Oracle, SQL Server, PostgreSQL, MySQL) — not the generic "engineer & writer" text
- [ ] `AboutIntro` displays location: "Jakarta, Indonesia"
- [ ] Availability badge reads: "Open to opportunities"
- [ ] Stats section shows relevant DBA metrics (e.g., "3+ Years DBA", specialization areas, key project highlights like "Oracle 12c→19c Migration" and "Production Performance Tuning")
- [ ] "What you'll find here" section descriptions are updated to reflect DBA tech notes and personal hobbies (hiking, travel, photography, fitness, kuliner)
- [ ] Section cards link to `/tech` and `/life` via `<Link>` instead of `onSelect` callbacks
- [ ] Sidebar brand area updated: "Hybrid" → "Adam Hidayat" or appropriate brand, subtitle updated
- [ ] Sidebar social links updated: Globe → GitHub, add Instagram icon, keep Email, keep RSS — all with placeholder `href` values
- [ ] MobileNav brand logo/text updated to match Sidebar changes
- [ ] `pnpm run build` completes without errors
