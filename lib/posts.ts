export type Category = "tech" | "life"

export type Post = {
  id: string
  title: string
  excerpt: string
  category: Category
  tag: string
  date: string
  readingTime: string
  featured?: boolean
  /** Special content renderer key. Falls back to a generic article when unset. */
  kind?: "mountain" | "oracle"
  cover?: string
}

export const posts: Post[] = [
  {
    id: "oracle-scripts",
    title: "My Oracle Database Script Vault",
    excerpt:
      "A living collection of Oracle SQL and PL/SQL snippets I reach for again and again — tuning, monitoring, backups, and everyday DBA chores. Searchable and copy-ready.",
    category: "tech",
    tag: "Databases",
    date: "Jul 12, 2026",
    readingTime: "Reference",
    featured: true,
    kind: "oracle",
    cover: "/images/post-oracle.png",
  },
  {
    id: "gunung",
    title: "Three Days on the Ridge: A Mountain Trip Journal",
    excerpt:
      "Trail notes, campsite thoughts, and a photo journal from a slow ascent above the clouds. What the mountain gave back for every step up.",
    category: "life",
    tag: "Travel",
    date: "Jul 10, 2026",
    readingTime: "7 min read",
    featured: true,
    kind: "mountain",
    cover: "/images/mountain-summit.png",
  },
  {
    id: "1",
    title: "Designing a Type-Safe Data Layer with the App Router",
    excerpt:
      "How I structure server components, caching boundaries, and validation to keep data flow predictable across a growing Next.js codebase.",
    category: "tech",
    tag: "Architecture",
    date: "Jul 8, 2026",
    readingTime: "9 min read",
    cover: "/images/post-datalayer.png",
  },
  {
    id: "2",
    title: "The Quiet Discipline of Shipping Small",
    excerpt:
      "A reflection on why I stopped chasing big releases and started trusting the compounding momentum of tiny, consistent improvements.",
    category: "life",
    tag: "Reflection",
    date: "Jul 2, 2026",
    readingTime: "6 min read",
    cover: "/images/mountain-camp.png",
  },
  {
    id: "3",
    title: "Understanding React Server Components from First Principles",
    excerpt:
      "A ground-up mental model for the server/client boundary — what serializes, what streams, and where the seams actually live.",
    category: "tech",
    tag: "React",
    date: "Jun 24, 2026",
    readingTime: "12 min read",
    cover: "/images/post-rsc.png",
  },
  {
    id: "4",
    title: "Notes on Working From a Small Town",
    excerpt:
      "Slower mornings, fewer meetings, and a longer attention span. What changed when I left the city behind for good.",
    category: "life",
    tag: "Journal",
    date: "Jun 15, 2026",
    readingTime: "5 min read",
    cover: "/images/mountain-trail.png",
  },
  {
    id: "5",
    title: "Profiling Postgres: Finding the Query That Was Lying to Me",
    excerpt:
      "A debugging story about an index that looked healthy, an EXPLAIN plan that told the truth, and a 40x latency win.",
    category: "tech",
    tag: "Databases",
    date: "Jun 3, 2026",
    readingTime: "8 min read",
    cover: "/images/tech_notes_banner.png",
  },
  {
    id: "6",
    title: "On Keeping a Reading Habit as an Engineer",
    excerpt:
      "Books outside of tech made me a better builder. Here is the system I use to actually finish them.",
    category: "life",
    tag: "Habits",
    date: "May 27, 2026",
    readingTime: "4 min read",
  },
]
