import { PostListWithSearch } from "@/components/blog/post-list-with-search"
import type { Category, Post } from "@/lib/mdx"

const sectionMeta: Record<Category, { title: string; description: string }> = {
  tech: {
    title: "Tech Notes",
    description: "Architecture, debugging stories, and lessons from building software.",
  },
  life: {
    title: "Life",
    description: "Slower thoughts on habits, focus, and the world away from the keyboard.",
  },
}

export function MainContent({
  section,
  posts,
}: {
  section: Category
  posts: Post[]
}) {
  const meta = sectionMeta[section]

  return (
    <main className="flex h-full flex-col overflow-y-auto">
      {/* Top bar (Title and Description only) */}
      <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md sm:px-8">
        <div>
          <h1 className="text-lg font-semibold text-foreground text-balance sm:text-xl">
            {meta.title}
          </h1>
          <p className="text-sm text-muted-foreground">{meta.description}</p>
        </div>
      </header>

      {/* Interactive Search and Post Grid */}
      <PostListWithSearch section={section} posts={posts} />
    </main>
  )
}
