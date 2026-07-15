import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code2, Coffee, MapPin, Database, Shield, Zap, Award, CheckCircle2, ExternalLink, ChevronDown, Briefcase, Building } from "lucide-react"

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

const stats = [
  { value: "4+ Years DBA", icon: Briefcase },
  { value: "5 Oracle Certs", icon: Award },
  { value: "Banking Industry", icon: Building },
]

const competencies = [
  { icon: Database, label: "Oracle · SQL Server · PostgreSQL · MySQL" },
  { icon: Zap, label: "Performance Tuning & Optimization" },
  { icon: Shield, label: "Backup, Recovery & High Availability" },
]

const certifications = [
  {
    title: "Oracle Autonomous Database Cloud 2025 Certified Professional",
    org: "Oracle",
    image: "/images/certs/eCertificate_Oracle_Cloud_Database_Service.jpg",
  },
  {
    title: "Oracle Database 19c: Performance Management and Tuning",
    org: "Oracle",
    image: "/images/certs/Sertifikat_Oracle_Performance_Management_and_Tuning.jpg",
  },
  {
    title: "Oracle Database 19c Administration Workshop",
    org: "Oracle",
    image: "/images/certs/SertifikatOracle_Database19cAdministrationWorkshop.jpg",
  },
  {
    title: "Oracle Database 19c: Backup and Recovery",
    org: "Oracle",
    image: "/images/certs/SertifikatBackup19cRecovery.jpg",
  },
]

const achievements = [
  {
    title: "Production Database Upgrade",
    description: "Executed a critical upgrade of Oracle Database from 12c to 19c with patch 19.27.",
  },
  {
    title: "Performance Optimization",
    description: "Identified and re-engineered bottlenecks, cutting processing time by over 99% for batch queries.",
  },
  {
    title: "International Training",
    description: "Selected to attend intensive DBA training at IBK Headquarters in South Korea.",
  },
]

export function AboutIntro() {
  return (
    <main className="flex h-full flex-col overflow-y-auto">
      {/* Hero */}
      <section className="border-b border-border px-6 py-12 sm:px-10 lg:py-16">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center">
          <div className="relative shrink-0">
            <div className="absolute -inset-3 rounded-full bg-primary/10 blur-2xl" aria-hidden />
            <Image
              src="/images/portrait.png"
              alt="Adam Hidayat — Database Administrator"
              width={200}
              height={200}
              priority
              className="relative size-40 rounded-full object-cover ring-1 ring-border sm:size-48"
            />
          </div>

          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
              Open to opportunities
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
              Hi, I&apos;m Adam Hidayat — Database Administrator.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
              I specialize in managing and optimizing enterprise databases to ensure
              seamless performance, robust security, and high availability. With 4+ years
              of experience across Oracle, SQL Server, MySQL, and PostgreSQL — currently
              working in the banking industry.
            </p>
            <div className="mt-5 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              <span>Based in Bekasi, West Java, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Quick Facts & Competencies */}
        <div className="mt-8 flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {stats.map(({ value, icon: Icon }) => (
              <div
                key={value}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2"
              >
                <Icon className="size-3.5 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {competencies.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2"
              >
                <Icon className="size-3.5 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll find here */}
      <section className="px-6 py-12 sm:px-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          What you&apos;ll find here
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {highlights.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/50 hover:bg-accent"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-4" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                  Browse posts
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Certifications & Achievements (Accordion) */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 items-start">
          <details className="group rounded-xl border border-border bg-card shadow-sm open:pb-4">
            <summary className="flex cursor-pointer items-start gap-4 p-4 marker:content-none hover:bg-accent/50 rounded-xl transition-colors">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award className="size-4" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-foreground">Certifications</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Official credentials from Oracle University.
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                  View credentials
                  <ChevronDown className="size-3 transition-transform duration-200 group-open:rotate-180" />
                </span>
              </div>
            </summary>
            <div className="border-t border-border px-6 pt-6">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <li key={cert.title} className="group flex flex-col gap-1 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-accent">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-foreground">{cert.title}</span>
                        <span className="text-xs text-muted-foreground">{cert.org}</span>
                      </div>
                      <a 
                        href={cert.image} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="shrink-0 rounded-full bg-primary/10 p-2 text-primary opacity-0 transition-all group-hover:opacity-100 focus:opacity-100 hover:bg-primary/20"
                        aria-label={`View ${cert.title} certificate`}
                        title="View Certificate"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </details>

          <details className="group rounded-xl border border-border bg-card shadow-sm open:pb-4">
            <summary className="flex cursor-pointer items-start gap-4 p-4 marker:content-none hover:bg-accent/50 rounded-xl transition-colors">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 className="size-4" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-foreground">Key Achievements</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Notable milestones and optimizations.
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-500">
                  View achievements
                  <ChevronDown className="size-3 transition-transform duration-200 group-open:rotate-180" />
                </span>
              </div>
            </summary>
            <div className="border-t border-border px-6 pt-6">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {achievements.map((item) => (
                  <li key={item.title} className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4">
                    <span className="text-sm font-semibold text-foreground">{item.title}</span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </section>
    </main>
  )
}
