import { ArrowUpRight, Clock } from "lucide-react"
import type { Post } from "@/lib/posts"
import { cn } from "@/lib/utils"

export function PostCard({
  post,
  onOpen,
}: {
  post: Post
  onOpen?: () => void
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40",
        post.featured && "sm:p-6",
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
            post.category === "tech"
              ? "bg-primary/15 text-primary"
              : "bg-accent text-accent-foreground",
          )}
        >
          {post.tag}
        </span>
        <span className="text-xs text-muted-foreground">{post.date}</span>
      </div>

      <h3
        className={cn(
          "mt-3 text-pretty font-semibold text-card-foreground transition-colors group-hover:text-primary",
          post.featured ? "text-xl sm:text-2xl" : "text-base",
        )}
      >
        <button
          type="button"
          onClick={onOpen}
          className="text-left after:absolute after:inset-0 after:content-[''] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {post.title}
        </button>
      </h3>

      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="size-3.5" />
          {post.readingTime}
        </span>
        <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Read
          <ArrowUpRight className="size-3.5" />
        </span>
      </div>
    </article>
  )
}
