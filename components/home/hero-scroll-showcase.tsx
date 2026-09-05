"use client"

import React, { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { ArrowRight, FileText, Mail, ChevronDown } from "lucide-react"

export const showcaseProjects = [
  {
    id: "upgrade",
    title: "Production Database Upgrade",
    tag: "Oracle 19c",
    metric: "Zero Downtime",
    description: "Critical migration & upgrade of enterprise banking databases from 12c to 19c (RU 19.27) ensuring zero data loss and seamless failover.",
    image: "/images/post-oracle.png",
    href: "/tech/oracle-scripts",
  },
  {
    id: "tuning",
    title: "Performance Optimization",
    tag: "Query Tuning",
    metric: "99% Faster",
    description: "Re-engineered bottlenecked execution plans, table partitioning, and indexing strategy, slashing batch financial query latency by over 99%.",
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

/**
 * Desktop Scroll-Linked Hero to Selected Work Transition
 * Faithfully reproduces the Webild Creative Portfolio signature animation.
 */
function DesktopHeroScrollShowcase() {
  const { scrollY } = useScroll()

  // Phase 1 (0px to 240px): Hero text translates up and fades out cleanly
  const heroOpacity = useTransform(scrollY, [0, 220], [1, 0])
  const heroY = useTransform(scrollY, [0, 220], [0, -120])
  const heroPointerEvents = useTransform(scrollY, (y) => (y > 200 ? "none" : "auto"))

  // Phase 2 (240px to 600px): Selected Work Header enters from below and centers at the top
  const headingOpacity = useTransform(scrollY, [260, 500], [0, 1])
  const headingY = useTransform(scrollY, [260, 500], [50, 0])

  // Center anchor container shift: starts on the right side (Hero), moves to center
  const anchorX = useTransform(scrollY, [120, 680], [280, 0])

  // Cards transformation from Stacked (-6°, 4°, 11°) to 3-column Grid (0°, 0°, 0°)
  // Card 1: Front in Hero -> Left Column in Grid (-370px)
  const card1X = useTransform(scrollY, [140, 680], [-20, -380])
  const card1Y = useTransform(scrollY, [140, 680], [15, 0])
  const card1Rotate = useTransform(scrollY, [140, 640], [-6, 0])

  // Card 2: Middle in Hero -> Center Column in Grid (0px)
  const card2X = useTransform(scrollY, [140, 680], [35, 0])
  const card2Y = useTransform(scrollY, [140, 680], [-15, 0])
  const card2Rotate = useTransform(scrollY, [140, 640], [4, 0])

  // Card 3: Back in Hero -> Right Column in Grid (+380px)
  const card3X = useTransform(scrollY, [140, 680], [85, 380])
  const card3Y = useTransform(scrollY, [140, 680], [5, 0])
  const card3Rotate = useTransform(scrollY, [140, 640], [11, 0])

  // Phase 3 (550px to 780px): Descriptions below each card column and View All button fade in
  const detailsOpacity = useTransform(scrollY, [540, 740], [0, 1])
  const detailsY = useTransform(scrollY, [540, 740], [30, 0])

  return (
    <section className="relative h-[240vh] w-full">
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center items-center overflow-hidden pt-12 pb-6">
        <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-12 flex flex-col justify-center items-center min-h-[600px]">
          
          {/* STAGE 1: HERO COPY (LEFT SIDE) */}
          <motion.div
            style={{
              opacity: heroOpacity,
              y: heroY,
              pointerEvents: heroPointerEvents,
            }}
            className="absolute left-6 sm:left-10 lg:left-12 top-1/2 -translate-y-1/2 w-[480px] space-y-6 z-10"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/60 px-3.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-semibold text-emerald-500 dark:text-emerald-400">Open to opportunities</span>
              <span className="text-muted-foreground">• Jakarta, Indonesia</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
                Databases that command reliability.
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
              Saya berspesialisasi dalam mengelola dan mengoptimalkan database enterprise untuk memastikan performa optimal, keamanan ketat, dan <span className="text-foreground font-semibold">high availability</span>. Berpengalaman 4+ tahun di Oracle 19c RAC, SQL Server, dan PostgreSQL di industri perbankan.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3.5 pt-1">
              <a
                href="/CV/Adam_Hidayat_DBA_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-xs font-semibold text-background transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/10 cursor-pointer"
              >
                <div className="relative size-6 overflow-hidden rounded-full ring-1 ring-background">
                  <Image
                    src="/images/portrait.png"
                    alt="Adam Hidayat"
                    width={24}
                    height={24}
                    className="size-full object-cover"
                  />
                </div>
                <span>Download CV (PDF)</span>
                <FileText className="size-3.5 text-background/80 transition-transform group-hover:translate-x-0.5" />
              </a>

              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full border border-border bg-card/70 px-5 py-3.5 text-xs font-medium text-foreground transition-all hover:bg-accent hover:border-foreground/20 cursor-pointer"
              >
                <Mail className="size-3.5 text-muted-foreground" />
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/70 max-w-md">
              <div>
                <div className="text-2xl font-bold tracking-tight text-foreground">4+ Years</div>
                <div className="text-[11px] text-muted-foreground">Enterprise DBA</div>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-foreground">6 Certs</div>
                <div className="text-[11px] text-muted-foreground">Oracle University</div>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-foreground">Tier-1</div>
                <div className="text-[11px] text-muted-foreground">Banking Industry</div>
              </div>
            </div>
          </motion.div>

          {/* STAGE 2: SELECTED WORK HEADER (CENTERED, FADES IN AFTER HERO DISAPPEARS) */}
          <motion.div
            style={{
              opacity: headingOpacity,
              y: headingY,
            }}
            className="text-center max-w-2xl mx-auto mb-6 z-10 pointer-events-none"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/60 px-3.5 py-1 text-xs font-medium text-muted-foreground mb-2 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-primary" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Projects That Speak for Themselves
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              A curated selection of mission-critical database engineering achievements that drove enterprise stability and performance.
            </p>
          </motion.div>

          {/* STAGE 3: THE 3 CARDS TRANSFORMING FROM RIGHT-STACK TO 3-COLUMN GRID */}
          <div className="relative h-[250px] w-full flex items-center justify-center">
            {/* Center Anchor shifting from right to center */}
            <motion.div
              style={{ x: anchorX }}
              className="relative flex items-center justify-center"
            >
              {/* Card 1: Production Database Upgrade */}
              <motion.div
                style={{
                  x: card1X,
                  y: card1Y,
                  rotate: card1Rotate,
                  zIndex: 3,
                }}
                className="absolute w-[350px] rounded-[28px] border border-border/80 bg-card p-2.5 shadow-2xl overflow-hidden flex flex-col group cursor-pointer"
              >
                <div className="relative h-[220px] w-full overflow-hidden bg-zinc-900 rounded-[20px]">
                  <Image
                    src={showcaseProjects[0].image}
                    alt={showcaseProjects[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white border border-white/20">
                      {showcaseProjects[0].tag}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-emerald-950/80 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/30">
                      {showcaseProjects[0].metric}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Performance Optimization */}
              <motion.div
                style={{
                  x: card2X,
                  y: card2Y,
                  rotate: card2Rotate,
                  zIndex: 2,
                }}
                className="absolute w-[350px] rounded-[28px] border border-border/80 bg-card p-2.5 shadow-2xl overflow-hidden flex flex-col group cursor-pointer"
              >
                <div className="relative h-[220px] w-full overflow-hidden bg-zinc-900 rounded-[20px]">
                  <Image
                    src={showcaseProjects[1].image}
                    alt={showcaseProjects[1].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white border border-white/20">
                      {showcaseProjects[1].tag}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-emerald-950/80 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/30">
                      {showcaseProjects[1].metric}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: International DBA Training */}
              <motion.div
                style={{
                  x: card3X,
                  y: card3Y,
                  rotate: card3Rotate,
                  zIndex: 1,
                }}
                className="absolute w-[350px] rounded-[28px] border border-border/80 bg-card p-2.5 shadow-2xl overflow-hidden flex flex-col group cursor-pointer"
              >
                <div className="relative h-[220px] w-full overflow-hidden bg-zinc-900 rounded-[20px]">
                  <Image
                    src={showcaseProjects[2].image}
                    alt={showcaseProjects[2].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white border border-white/20">
                      {showcaseProjects[2].tag}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-blue-950/80 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-medium text-blue-400 border border-blue-500/30">
                      {showcaseProjects[2].metric}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* STAGE 4: DESCRIPTIONS IN 3 COLUMNS MATCHING CARDS (Webild Style) */}
          <motion.div
            style={{ opacity: detailsOpacity, y: detailsY }}
            className="w-full max-w-5xl mt-6 px-4"
          >
            <div className="grid grid-cols-3 gap-8 text-left">
              {showcaseProjects.map((project) => (
                <div key={project.id} className="space-y-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-foreground">
                    {project.title}.
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="pt-1">
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                    >
                      <span>Read case study</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Button */}
            <div className="pt-8 text-center">
              <Link
                href="/tech"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 hover:bg-secondary px-6 py-2.5 text-xs font-medium text-foreground transition-all cursor-pointer group shadow-sm"
              >
                <span>View all my projects</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/**
 * Mobile & Reduced Motion Fallback
 * Natural stacked vertical layout without sticky scroll pinning.
 */
function MobileHeroShowcase() {
  return (
    <div className="px-6 py-12 sm:px-8 space-y-16">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/50 px-3 py-1 text-xs font-medium text-foreground">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-emerald-500 dark:text-emerald-400">Open to opportunities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
          Databases that command reliability.
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed">
          Saya berspesialisasi dalam mengelola dan mengoptimalkan arsitektur database enterprise untuk memastikan performa maksimal, keamanan ketat, dan high availability. Pengalaman 4+ tahun di Oracle 19c RAC, SQL Server, MySQL, dan PostgreSQL di industri perbankan.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="/CV/Adam_Hidayat_DBA_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full bg-foreground px-5 py-3 text-xs font-semibold text-background hover:opacity-90"
          >
            <FileText className="size-4" />
            <span>Download CV (PDF)</span>
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-xs font-medium text-foreground hover:bg-accent"
          >
            <Mail className="size-4 text-muted-foreground" />
            <span>Get in Touch</span>
          </Link>
        </div>
      </div>

      {/* Selected Work Grid */}
      <div className="space-y-6 pt-6 border-t border-border">
        <div className="text-left space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Selected Work</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Projects That Speak for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm flex flex-col group p-2"
            >
              <div className="relative aspect-[16/11] w-full bg-zinc-900 rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3">
                  <span className="rounded-full bg-black/75 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-semibold text-white border border-white/20">
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-foreground">
                    <span className="font-bold">{project.title}. </span>
                    <span className="text-muted-foreground">{project.description}</span>
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-border/70 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-emerald-500">{project.metric}</span>
                  <Link href={project.href} className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    <span>Read case study</span>
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function HeroScrollShowcase() {
  const [mounted, setMounted] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setMounted(true)
    const check = () => setIsDesktop(window.innerWidth >= 1024)
    check()
    window.addEventListener("resize", check, { passive: true })
    return () => window.removeEventListener("resize", check)
  }, [])

  if (!mounted) {
    return <MobileHeroShowcase />
  }

  if (isDesktop && !shouldReduceMotion) {
    return <DesktopHeroScrollShowcase />
  }

  return <MobileHeroShowcase />
}
