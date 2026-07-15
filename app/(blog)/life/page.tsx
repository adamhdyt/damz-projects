import { MainContent } from "@/components/blog/main-content"
import { getAllPosts } from "@/lib/mdx"

export default function LifePage() {
  const posts = getAllPosts("life")
  return <MainContent section="life" posts={posts} />
}
