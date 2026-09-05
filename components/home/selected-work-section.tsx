import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export const selectedProjects = [
  {
    id: "upgrade",
    title: "Production Database Upgrade",
    tag: "Oracle 19c",
    metric: "Zero Data Loss",
    description: "Critical migration and upgrade of core banking databases from 12c to 19c (RU 19.27) with zero downtime and seamless standby failover.",
    image: "/images/post-oracle.png",
    href: "/tech/oracle-scripts",
  },
  {
    id: "tuning",
    title: "Performance Optimization",
    tag: "Query Tuning",
    metric: "99% Faster",
    description: "Re-engineered bottlenecked SQL execution plans, partitioning, and indexing strategy, slashing batch financial query latency by over 99%.",
    image: "/images/post-datalayer.png",
    href: "/tech/type-safe-data-layer",
  },
  {
    id: "training",
    title: "International DBA Training",
    tag: "Global DBA",
    metric: "Seoul, Korea",
    description: "Selected for intensive enterprise DBA training at Industrial Bank of Korea (IBK) Headquarters in Seoul, mastering advanced HA, RAC, and DR operations.",
    image: "/images/post-rsc.png",
    href: "/about",
  },
]

export function SelectedWorkSection() {
  return (
    <section id="projects" className="relative px-6 py-20 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-border/60">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/60 px-3.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          <Sparkles className="size-3 text-primary" />
          <span>Selected Work</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          Projects That Speak for Themselves
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          A curated selection of mission-critical database engineering achievements that drove enterprise stability and performance.
        </p>
      </div>

      {/* 3-Column Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {selectedProjects.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className="group flex flex-col space-y-4 rounded-3xl transition-all duration-300"
          >
            {/* Project Image Card */}
            <div className="relative aspect-[16/11] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-card border border-border/80 shadow-md group-hover:shadow-xl group-hover:border-primary/50 transition-all duration-300">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Tag Badge */}
              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/20">
                  {project.tag}
                </span>
              </div>

              {/* Metric Badge */}
              <div className="absolute top-4 right-4">
                <span className="rounded-full bg-emerald-950/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-emerald-400 border border-emerald-500/30">
                  {project.metric}
                </span>
              </div>
            </div>

            {/* Editorial Caption (Webild Creative Portfolio style: Bold title with period + description) */}
            <div className="px-1 space-y-2">
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}.{" "}
                </span>
                <span className="text-muted-foreground text-sm">
                  {project.description}
                </span>
              </p>

              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline">
                  <span>Read case study</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Centered CTA Button */}
      <div className="mt-14 text-center">
        <Link
          href="/tech"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-xs sm:text-sm font-medium text-foreground shadow-sm hover:bg-accent hover:border-foreground/20 transition-all duration-200 group"
        >
          <span>View all technical notes & case studies</span>
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
