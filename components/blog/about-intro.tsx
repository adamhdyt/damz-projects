import Link from "next/link"
import { ArrowRight, Code2, Coffee } from "lucide-react"
import { ScrollShowcase } from "@/components/home/scroll-showcase"
import { AboutQuoteSection } from "@/components/home/about-quote-section"
import { CertificationsGrid } from "@/components/home/certifications-grid"

const highlights = [
  {
    icon: Code2,
    title: "Tech Notes",
    description:
      "DBA tech notes, Oracle scripts, database tuning stories, and infrastructure deep-dives.",
    href: "/tech",
  },
  {
    icon: Coffee,
    title: "Life",
    description:
      "Hiking, travel, photography, fitness, kuliner, dan refleksi di luar keyboard.",
    href: "/life",
  },
]

export function AboutIntro() {
  return (
    <main className="flex h-full flex-col">
      {/* Signature Scroll-Linked Hero & Selected Work Showcase */}
      <ScrollShowcase />

      {/* Editorial About & Philosophy Quote Showcase */}
      <AboutQuoteSection />

      {/* Oracle Certified Expertise with Interactive Lightbox */}
      <CertificationsGrid />

      {/* What you'll find here preview */}
      <section className="px-6 py-16 sm:px-10 max-w-7xl mx-auto w-full border-t border-border/80">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Content Pillars
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {highlights.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="group flex items-start gap-4 rounded-2xl border border-border/80 bg-card/70 backdrop-blur-sm p-6 text-left transition-all duration-200 hover:border-primary/50 hover:bg-accent hover:shadow-md"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                  Browse posts
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
