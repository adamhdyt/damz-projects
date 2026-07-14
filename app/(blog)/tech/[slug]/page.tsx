import { PostDetail } from "@/components/blog/post-detail"
import { posts } from "@/lib/posts"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return posts
    .filter((p) => p.category === "tech")
    .map((p) => ({ slug: p.id }))
}

export default async function TechArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts.find((p) => p.id === slug && p.category === "tech")
  if (!post) notFound()

  return <PostDetail post={post} backHref="/tech" />
}
