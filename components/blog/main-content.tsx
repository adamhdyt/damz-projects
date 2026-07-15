import { Search } from "lucide-react"
import { PostCard } from "@/components/blog/post-card"
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
      {/* Top bar */}
      <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md sm:px-8">
        <div>
          <h1 className="text-lg font-semibold text-foreground text-balance sm:text-xl">
            {meta.title}
          </h1>
          <p className="text-sm text-muted-foreground">{meta.description}</p>
        </div>
        <div className="hidden items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground md:flex">
          <Search className="size-4" />
          <span>Search</span>
          <kbd className="ml-2 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs">
            /
          </kbd>
        </div>
      </header>

      {/* Post grid */}
      <div className="px-6 py-8 sm:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {posts.map((post) => (
            <div
              key={post.id}
              className={post.featured ? "lg:col-span-2" : undefined}
            >
              <PostCard post={post} href={`/${section}/${post.id}`} />
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Showing {posts.length} {posts.length === 1 ? "post" : "posts"}
          {" in this section"}.
        </p>
      </div>
    </main>
  )
}
