"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FileText, Mail, ArrowRight, Database, Shield, Zap, Award, Sparkles, CheckCircle2 } from "lucide-react"

export const heroCards = [
  {
    id: "upgrade",
    title: "Production Database Upgrade",
    category: "Oracle 19c RAC",
    description: "Critical migration & upgrade of enterprise banking databases from 12c to 19c with patch 19.27.",
    image: "/images/post-oracle.png",
    metric: "Zero Data Loss",
    tag: "Oracle 19c",
  },
  {
    id: "tuning",
    title: "Performance Optimization",
    category: "Query Re-engineering",
    description: "Re-engineered SQL execution plans & indexes, slashing batch processing execution time by > 99%.",
    image: "/images/post-datalayer.png",
    metric: "99% Faster",
    tag: "Performance",
  },
  {
    id: "training",
    title: "International DBA Training",
    category: "IBK Headquarters, Korea",
    description: "Selected for intensive international enterprise DBA training at IBK Headquarters in South Korea.",
    image: "/images/post-rsc.png",
    metric: "Seoul, Korea",
    tag: "Global DBA",
  },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pt-14 lg:pb-32">
      {/* Subtle Background Glows */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px] dark:bg-primary/15"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Headline, Bio, CTAs, Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7"
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
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Hi, I&apos;m Adam Hidayat.
              </h1>
              <p className="text-3xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-400 leading-[1.15]">
                Database Administrator.
              </p>
            </div>

            {/* Sub-headline / Value Proposition */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Saya berspesialisasi dalam mengelola dan mengoptimalkan arsitektur database enterprise untuk memastikan performa maksimal, keamanan ketat, dan <span className="text-foreground font-medium">high availability</span>. Berpengalaman 4+ tahun di Oracle, SQL Server, MySQL, dan PostgreSQL — saat ini aktif di industri perbankan.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="/CV/Adam_Hidayat_DBA_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/10 cursor-pointer"
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
                <span>Download Curriculum Vitae</span>
                <FileText className="size-4 text-background/80 transition-transform group-hover:translate-x-0.5" />
              </a>

              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full border border-border bg-card/70 px-5 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-accent hover:border-foreground/20 cursor-pointer"
              >
                <Mail className="size-4 text-muted-foreground" />
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/70 max-w-lg">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">4+ Years</div>
                <div className="text-xs text-muted-foreground">Enterprise DBA</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">6 Certs</div>
                <div className="text-xs text-muted-foreground">Oracle University</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Tier-1</div>
                <div className="text-xs text-muted-foreground">Banking Industry</div>
              </div>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground/80">Stack:</span>
              {["Oracle 19c RAC", "SQL Server", "PostgreSQL", "MySQL", "Data Guard", "Performance Tuning"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border/80 bg-card/50 px-2.5 py-1 font-mono text-[11px] text-foreground/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Signature Stacked & Tilted Cards Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]"
          >
            {/* Background card glow */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="size-64 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-600/20" />
            </div>

            {/* 3 Stacked Cards (Webild Creative Portfolio Signature Hero Visual) */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[4/5]">
              
              {/* Back Card (Card 3: International Training) */}
              <div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-border/80 bg-card shadow-xl overflow-hidden transition-transform duration-500 origin-bottom-left"
                style={{
                  transform: "rotate(10deg) translate(24px, -12px)",
                  zIndex: 1,
                  opacity: 0.75,
                }}
              >
                <div className="relative size-full">
                  <Image
                    src={heroCards[2].image}
                    alt={heroCards[2].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-white/90 border border-white/15">
                      {heroCards[2].tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Middle Card (Card 2: Performance Tuning) */}
              <div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-border/80 bg-card shadow-2xl overflow-hidden transition-transform duration-500 origin-bottom-left"
                style={{
                  transform: "rotate(4deg) translate(12px, -6px)",
                  zIndex: 2,
                  opacity: 0.9,
                }}
              >
                <div className="relative size-full">
                  <Image
                    src={heroCards[1].image}
                    alt={heroCards[1].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-white/90 border border-white/15">
                      {heroCards[1].tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Front Card (Card 1: Production Upgrade) */}
              <div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-border bg-card shadow-2xl overflow-hidden transition-transform duration-500 origin-bottom-left hover:rotate-0 hover:scale-[1.02]"
                style={{
                  transform: "rotate(-5deg)",
                  zIndex: 3,
                }}
              >
                <div className="relative size-full">
                  <Image
                    src={heroCards[0].image}
                    alt={heroCards[0].title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Card Overlay Info */}
                  <div className="absolute bottom-5 left-5 right-5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/20">
                        {heroCards[0].tag}
                      </span>
                      <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                        {heroCards[0].metric}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug pt-1">
                      {heroCards[0].title}
                    </h3>
                    <p className="text-xs text-zinc-300 line-clamp-2">
                      {heroCards[0].description}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
