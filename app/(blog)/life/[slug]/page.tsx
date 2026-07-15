import { PostDetail } from "@/components/blog/post-detail"
import { getAllPosts, getPostBySlug } from "@/lib/mdx"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { mdxComponents } from "@/components/mdx/mdx-components"

export function generateStaticParams() {
  const posts = getAllPosts("life")
  return posts.map((p) => ({ slug: p.id }))
}

export default async function LifeArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug("life", slug)
  if (!post) notFound()

  return (
    <PostDetail post={post} backHref="/life">
      <MDXRemote source={post.content || ""} components={mdxComponents} />
    </PostDetail>
  )
}
