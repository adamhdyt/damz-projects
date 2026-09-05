import { HeroSection } from "@/components/home/hero-section"
import { SelectedWorkSection } from "@/components/home/selected-work-section"
import { AboutQuoteSection } from "@/components/home/about-quote-section"
import { CertificationsGrid } from "@/components/home/certifications-grid"
import { ContentPillars } from "@/components/home/content-pillars"
import { ContactNewsletterSection } from "@/components/home/contact-newsletter-section"
import { getAllPosts } from "@/lib/mdx"

export function AboutIntro() {
  const techPosts = getAllPosts("tech")
  const lifePosts = getAllPosts("life")

  return (
    <main className="flex h-full flex-col">
      {/* 01: Hero Section with Stacked Cards */}
      <HeroSection />

      {/* 02: Selected Work Showcase Grid */}
      <SelectedWorkSection />

      {/* Editorial About & Philosophy Quote Showcase */}
      <AboutQuoteSection />

      {/* Oracle Certified Expertise with Interactive Lightbox */}
      <CertificationsGrid />

      {/* Dynamic Content Pillars: Tech Notes & Life Showcase */}
      <ContentPillars techPosts={techPosts} lifePosts={lifePosts} />

      {/* Direct Contact & Newsletter Subscription Section */}
      <ContactNewsletterSection />
    </main>
  )
}
