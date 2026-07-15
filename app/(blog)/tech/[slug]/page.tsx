import { PostDetail } from "@/components/blog/post-detail"
import { getAllPosts, getPostBySlug } from "@/lib/mdx"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { mdxComponents } from "@/components/mdx/mdx-components"

import { Metadata } from "next"

export function generateStaticParams() {
  const posts = getAllPosts("tech")
  return posts.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug("tech", slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://adamhdyt.com/tech/${slug}`,
      ...(post.cover && {
        images: [
          {
            url: post.cover,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      }),
    },
  }
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
