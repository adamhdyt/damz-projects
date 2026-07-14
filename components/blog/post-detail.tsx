import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Post } from "@/lib/posts"
import { MountainTrip } from "@/components/blog/posts/mountain-trip"
import { OracleScripts } from "@/components/blog/posts/oracle-scripts"

export function PostDetail({
  post,
  backHref,
}: {
  post: Post
  backHref: string
}) {
  return (
    <main className="flex h-full flex-col overflow-y-auto">
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
        {post.kind === "mountain" ? (
          <MountainTrip />
        ) : post.kind === "oracle" ? (
          <OracleScripts />
        ) : (
          <GenericArticle post={post} />
        )}
      </div>
    </main>
  )
}

function GenericArticle({ post }: { post: Post }) {
  return (
    <article className="mx-auto max-w-3xl">
      <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
        {post.tag}
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {post.date} · {post.readingTime}
      </p>
      <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
        <p className="text-lg text-foreground">{post.excerpt}</p>
        <p>
          This is a preview of the article. The full write-up lives here in the
          detail view — headings, code samples, and images would follow in a real
          post. For now, use the back button to return to the list.
        </p>
      </div>
    </article>
  )
}
