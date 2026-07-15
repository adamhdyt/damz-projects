import { PostDetail } from "@/components/blog/post-detail"
import { getAllPosts, getPostBySlug } from "@/lib/mdx"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { mdxComponents } from "@/components/mdx/mdx-components"

export function generateStaticParams() {
  const posts = getAllPosts("tech")
  return posts.map((p) => ({ slug: p.id }))
}

export default async function TechArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug("tech", slug)
  if (!post) notFound()

  return (
    <PostDetail post={post} backHref="/tech">
      <MDXRemote source={post.content || ""} components={mdxComponents} />
    </PostDetail>
  )
}
