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
    <main className="flex h-full flex-col">
      {/* Top bar (Title and Description only) */}
      <div className="flex items-center justify-between gap-4 border-b border-border/80 bg-background px-6 py-6 sm:px-8">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {meta.title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{meta.description}</p>
        </div>
      </div>

      {/* Interactive Search and Post Grid */}
      <PostListWithSearch section={section} posts={posts} />
    </main>
  )
}
