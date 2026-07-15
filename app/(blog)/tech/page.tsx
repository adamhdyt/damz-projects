import { MainContent } from "@/components/blog/main-content"
import { getAllPosts } from "@/lib/mdx"

export default function TechPage() {
  const posts = getAllPosts("tech")
  return <MainContent section="tech" posts={posts} />
}
