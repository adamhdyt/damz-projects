import { ScrollShowcase } from "@/components/home/scroll-showcase"
import { AboutQuoteSection } from "@/components/home/about-quote-section"
import { CertificationsGrid } from "@/components/home/certifications-grid"
import { ContentPillars } from "@/components/home/content-pillars"
import { getAllPosts } from "@/lib/mdx"

export function AboutIntro() {
  const techPosts = getAllPosts("tech")
  const lifePosts = getAllPosts("life")

  return (
    <main className="flex h-full flex-col">
      {/* Signature Scroll-Linked Hero & Selected Work Showcase */}
      <ScrollShowcase />

      {/* Editorial About & Philosophy Quote Showcase */}
      <AboutQuoteSection />

      {/* Oracle Certified Expertise with Interactive Lightbox */}
      <CertificationsGrid />

      {/* Dynamic Content Pillars: Tech Notes & Life Showcase */}
      <ContentPillars techPosts={techPosts} lifePosts={lifePosts} />
    </main>
  )
}
