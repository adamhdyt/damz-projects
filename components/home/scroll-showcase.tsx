"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Database, Zap, Globe, FileText, Mail } from "lucide-react"

export const showcaseProjects = [
  {
    id: "upgrade",
    title: "Production Database Upgrade",
    subtitle: "Oracle 19c RAC Enterprise",
    tag: "Oracle 19c",
    description: "Executed a critical migration & upgrade of enterprise banking databases from 12c to 19c with patch 19.27, ensuring zero data loss and seamless failover.",
    image: "/images/post-oracle.png",
    metric: "Zero Data Loss",
    linkText: "Read migration notes",
    href: "/tech/oracle-scripts",
    icon: Database,
  },
  {
    id: "tuning",
    title: "Performance Optimization",
    subtitle: "Query & Execution Plan Tuning",
    tag: "Optimization",
    description: "Re-engineered bottlenecked execution plans, table partitioning, and indexing strategy, slashing batch MIS query execution time by over 99%.",
    image: "/images/post-datalayer.png",
    metric: "99% Faster",
    linkText: "Explore tuning deep-dive",
    href: "/tech/type-safe-data-layer",
    icon: Zap,
  },
  {
    id: "training",
    title: "International DBA Training",
    subtitle: "IBK Headquarters, Seoul, Korea",
    tag: "Global DBA",
    description: "Selected for intensive enterprise DBA training at Industrial Bank of Korea (IBK) Headquarters in Seoul, mastering advanced HA, RAC & DR operations.",
    image: "/images/post-rsc.png",
    metric: "Seoul, Korea",
    linkText: "View credentials & background",
    href: "/about",
    icon: Globe,
  },
]

export function ScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    checkWidth()
    window.addEventListener("resize", checkWidth, { passive: true })
    return () => window.removeEventListener("resize", checkWidth)
  }, [])

  // Window scroll tracking for the sticky container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Desktop Animation Transforms:
  // Phase 1 (0 to 0.45): Hero copy fades out
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -50])
  const heroPointerEvents = useTransform(scrollYProgress, (val) => (val > 0.35 ? "none" : "auto"))

  // Phase 2 (0.25 to 0.65): Selected Work heading fades in
  const headingOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1])
  const headingY = useTransform(scrollYProgress, [0.35, 0.6], [40, 0])

  // Card Transforms from Hero Stack (right column) to 3-column Grid (centered)
  // Card 1 (Front in Hero -> Left Column in Grid)
  const card1X = useTransform(scrollYProgress, [0.2, 0.7], ["0%", "-104%"])
  const card1Y = useTransform(scrollYProgress, [0.2, 0.7], ["0px", "60px"])
  const card1Rotate = useTransform(scrollYProgress, [0.2, 0.65], [-5, 0])
  const card1Scale = useTransform(scrollYProgress, [0.2, 0.7], [1, 0.95])

  // Card 2 (Middle in Hero -> Center Column in Grid)
  const card2X = useTransform(scrollYProgress, [0.2, 0.7], ["12px", "0%"])
  const card2Y = useTransform(scrollYProgress, [0.2, 0.7], ["-6px", "60px"])
  const card2Rotate = useTransform(scrollYProgress, [0.2, 0.65], [4, 0])
  const card2Scale = useTransform(scrollYProgress, [0.2, 0.7], [0.96, 0.95])

  // Card 3 (Back in Hero -> Right Column in Grid)
  const card3X = useTransform(scrollYProgress, [0.2, 0.7], ["24px", "104%"])
  const card3Y = useTransform(scrollYProgress, [0.2, 0.7], ["-12px", "60px"])
  const card3Rotate = useTransform(scrollYProgress, [0.2, 0.65], [10, 0])
  const card3Scale = useTransform(scrollYProgress, [0.2, 0.7], [0.92, 0.95])

  // Card Details (description, links below image) fade in as grid settles
  const detailsOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 1])
  const detailsY = useTransform(scrollYProgress, [0.55, 0.8], [20, 0])

  return (
    <div id="projects" className="relative w-full">
      {/* DESKTOP VIEW WITH SMOOTH SCROLL-LINKED ANIMATION */}
      {isDesktop && !shouldReduceMotion ? (
        <div ref={containerRef} className="relative h-[220vh] w-full">
          {/* Sticky Viewport Stage */}
          <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden">
            
            {/* Ambient Background Glows */}
            <div
              className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px] dark:bg-primary/15"
              aria-hidden="true"
            />

            <div className="mx-auto w-full max-w-6xl px-8 lg:px-12 relative">
              
              {/* STAGE 1: HERO COPY (LEFT SIDE) */}
              <motion.div
                style={{ opacity: heroOpacity, y: heroY, pointerEvents: heroPointerEvents }}
                className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 w-[520px] space-y-6 z-10"
              >
                {/* Status Pill Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/50 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-semibold text-emerald-500 dark:text-emerald-400">Open to opportunities</span>
                  <span className="text-muted-foreground">• Bekasi, Indonesia</span>
                </div>

                {/* Main Headline */}
                <div className="space-y-2">
                  <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
                    Hi, I&apos;m Adam Hidayat.
                  </h1>
                  <p className="text-4xl lg:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-400 leading-[1.12]">
                    Database Administrator.
                  </p>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Saya berspesialisasi dalam mengelola dan mengoptimalkan database enterprise untuk memastikan performa optimal, keamanan yang kuat, dan <span className="text-foreground font-semibold">high availability</span>. Pengalaman 4+ tahun di Oracle, SQL Server, MySQL, dan PostgreSQL di industri perbankan.
                </p>

                {/* Action CTAs */}
                <div className="flex items-center gap-3.5 pt-1">
                  <a
                    href="/CV/Adam_Hidayat_DBA_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-full bg-foreground px-5 py-3 text-xs font-semibold text-background transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/10 cursor-pointer"
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
                    className="flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-3 text-xs font-medium text-foreground transition-all hover:bg-accent hover:border-foreground/20 cursor-pointer"
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

                {/* Scroll Hint */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                  <span className="size-1.5 rounded-full bg-primary animate-ping" />
                  <span className="italic">Scroll down to explore selected achievements ↓</span>
                </div>
              </motion.div>

              {/* STAGE 2: "PROJECTS THAT SPEAK FOR THEMSELVES" HEADER (CENTERED, FADES IN DURING SCROLL) */}
              <motion.div
                style={{ opacity: headingOpacity, y: headingY }}
                className="absolute inset-x-0 top-6 mx-auto text-center max-w-2xl px-4 z-10 pointer-events-none"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground mb-3 backdrop-blur-sm">
                  <Sparkles className="size-3 text-primary" />
                  <span>Selected Work</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                  Projects That Speak for Themselves
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Pencapaian rekayasa database enterprise yang memberikan stabilitas, kehandalan, dan performa tinggi pada sistem perbankan.
                </p>
              </motion.div>

              {/* STAGE 3: THE 3 CARDS TRANSFORMING FROM RIGHT-STACK TO 3-COLUMN GRID */}
              <div className="relative h-[500px] w-full flex items-center justify-center">
                
                {/* Center anchor container where cards originate (at Hero right) and transition to full grid */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] aspect-[4/5]">
                  
                  {/* Card 1: Production Database Upgrade */}
                  <motion.div
                    style={{
                      x: card1X,
                      y: card1Y,
                      rotate: card1Rotate,
                      scale: card1Scale,
                      zIndex: 3,
                    }}
                    className="absolute inset-0 rounded-3xl border border-border bg-card shadow-2xl overflow-hidden flex flex-col group cursor-pointer"
                  >
                    <div className="relative h-[280px] w-full overflow-hidden bg-zinc-900">
                      <Image
                        src={showcaseProjects[0].image}
                        alt={showcaseProjects[0].title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/20">
                          {showcaseProjects[0].tag}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="rounded-full bg-emerald-950/80 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 border border-emerald-500/30">
                          {showcaseProjects[0].metric}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between bg-card">
                      <div>
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                          {showcaseProjects[0].title}
                        </h3>
                        <motion.p
                          style={{ opacity: detailsOpacity, y: detailsY }}
                          className="mt-1.5 text-xs text-muted-foreground line-clamp-3 leading-relaxed"
                        >
                          {showcaseProjects[0].description}
                        </motion.p>
                      </div>

                      <motion.div style={{ opacity: detailsOpacity }} className="pt-3 border-t border-border/70 flex items-center justify-between">
                        <Link
                          href={showcaseProjects[0].href}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                        >
                          <span>{showcaseProjects[0].linkText}</span>
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Card 2: Performance Optimization */}
                  <motion.div
                    style={{
                      x: card2X,
                      y: card2Y,
                      rotate: card2Rotate,
                      scale: card2Scale,
                      zIndex: 2,
                    }}
                    className="absolute inset-0 rounded-3xl border border-border bg-card shadow-2xl overflow-hidden flex flex-col group cursor-pointer"
                  >
                    <div className="relative h-[280px] w-full overflow-hidden bg-zinc-900">
                      <Image
                        src={showcaseProjects[1].image}
                        alt={showcaseProjects[1].title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/20">
                          {showcaseProjects[1].tag}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="rounded-full bg-emerald-950/80 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 border border-emerald-500/30">
                          {showcaseProjects[1].metric}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between bg-card">
                      <div>
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                          {showcaseProjects[1].title}
                        </h3>
                        <motion.p
                          style={{ opacity: detailsOpacity, y: detailsY }}
                          className="mt-1.5 text-xs text-muted-foreground line-clamp-3 leading-relaxed"
                        >
                          {showcaseProjects[1].description}
                        </motion.p>
                      </div>

                      <motion.div style={{ opacity: detailsOpacity }} className="pt-3 border-t border-border/70 flex items-center justify-between">
                        <Link
                          href={showcaseProjects[1].href}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                        >
                          <span>{showcaseProjects[1].linkText}</span>
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Card 3: International DBA Training */}
                  <motion.div
                    style={{
                      x: card3X,
                      y: card3Y,
                      rotate: card3Rotate,
                      scale: card3Scale,
                      zIndex: 1,
                    }}
                    className="absolute inset-0 rounded-3xl border border-border bg-card shadow-2xl overflow-hidden flex flex-col group cursor-pointer"
                  >
                    <div className="relative h-[280px] w-full overflow-hidden bg-zinc-900">
                      <Image
                        src={showcaseProjects[2].image}
                        alt={showcaseProjects[2].title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/20">
                          {showcaseProjects[2].tag}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="rounded-full bg-blue-950/80 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-medium text-blue-400 border border-blue-500/30">
                          {showcaseProjects[2].metric}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between bg-card">
                      <div>
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                          {showcaseProjects[2].title}
                        </h3>
                        <motion.p
                          style={{ opacity: detailsOpacity, y: detailsY }}
                          className="mt-1.5 text-xs text-muted-foreground line-clamp-3 leading-relaxed"
                        >
                          {showcaseProjects[2].description}
                        </motion.p>
                      </div>

                      <motion.div style={{ opacity: detailsOpacity }} className="pt-3 border-t border-border/70 flex items-center justify-between">
                        <Link
                          href={showcaseProjects[2].href}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                        >
                          <span>{showcaseProjects[2].linkText}</span>
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* Bottom CTA to view all projects */}
              <motion.div
                style={{ opacity: detailsOpacity }}
                className="pt-6 text-center"
              >
                <Link
                  href="/tech"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-6 py-2.5 text-xs font-medium text-foreground hover:bg-accent hover:border-foreground/20 transition-all cursor-pointer group"
                >
                  <span>View all technical notes & case studies</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

            </div>
          </div>
        </div>
      ) : (
        /* MOBILE & REDUCED MOTION VIEW (STANDARD CLEAN RESPONSIVE STACK) */
        <div className="px-6 py-12 sm:px-8 space-y-16">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/50 px-3 py-1 text-xs font-medium text-foreground">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-emerald-500 dark:text-emerald-400">Open to opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Hi, I&apos;m Adam Hidayat. <br />
              <span className="text-primary">Database Administrator.</span>
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed">
              Saya berspesialisasi dalam mengelola dan mengoptimalkan arsitektur database enterprise untuk memastikan performa maksimal, keamanan ketat, dan high availability. Pengalaman 4+ tahun di Oracle, SQL Server, MySQL, dan PostgreSQL di industri perbankan.
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
                  className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col group"
                >
                  <div className="relative aspect-[16/10] w-full bg-zinc-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span className="rounded-full bg-black/70 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-semibold text-white border border-white/20">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-foreground">{project.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-border/70 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-emerald-500">{project.metric}</span>
                      <Link href={project.href} className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                        <span>Read more</span>
                        <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
