import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Post } from "@/lib/mdx"
import { ReadingProgress } from "@/components/blog/reading-progress"
import { TableOfContents } from "@/components/blog/table-of-contents"

export function PostDetail({
  post,
  backHref,
  children,
}: {
  post: Post
  backHref: string
  children: React.ReactNode
}) {
  return (
    <main className="flex h-full flex-col overflow-y-auto">
      <ReadingProgress />
      <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md sm:px-8">
        <Link
          href={backHref}
          className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>
        <span className="truncate text-sm text-muted-foreground">
          {post.category === "tech" ? "Tech Notes" : "Life"} / {post.tag}
        </span>
      </header>

      <div className="px-6 py-8 sm:px-8">
        <div className="mx-auto max-w-6xl xl:grid xl:grid-cols-[1fr_250px] xl:gap-16">
          <article className="mx-auto w-full max-w-3xl xl:max-w-none">
            <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
              {post.tag}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              {post.date} · {post.readingTime}
            </p>
            <div className="mt-8">
              <div className="xl:hidden">
                <TableOfContents />
              </div>
              <div className="text-[15px] leading-relaxed text-muted-foreground">
                <p className="text-lg text-foreground mb-8">{post.excerpt}</p>
                {children}
              </div>
            </div>
          </article>
          
          <aside className="hidden xl:block">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </main>
  )
}
