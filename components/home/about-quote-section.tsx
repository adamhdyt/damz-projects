import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Mail, Sparkles } from "lucide-react"
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/ui/icons"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adam-hidayat/",
    icon: LinkedInIcon,
    label: "LinkedIn",
  },
  {
    name: "GitHub",
    href: "https://github.com/adamhdyt",
    icon: GitHubIcon,
    label: "GitHub",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/adamhdyt/",
    icon: InstagramIcon,
    label: "Instagram",
  },
  {
    name: "Email",
    href: "mailto:adamhdyt11@gmail.com",
    icon: Mail,
    label: "Email",
  },
]

export function AboutQuoteSection() {
  return (
    <section className="relative px-6 py-20 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-border/60">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
            <Sparkles className="size-3 text-primary" />
            Engineering Philosophy & Persona
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Behind the Systems & Databases
          </h2>
        </div>
        <Link
          href="/about"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          Read full bio & journey
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Split Cards Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Editorial Quote Card */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-border/80 bg-card/80 backdrop-blur-sm p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-md hover:border-border transition-all duration-300">
          <div>
            {/* Quote Mark Badge */}
            <div className="size-12 rounded-2xl bg-foreground text-background flex items-center justify-center font-serif text-3xl font-bold select-none shadow-sm mb-8">
              &rdquo;
            </div>

            {/* Editorial Quote */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-foreground leading-snug sm:leading-relaxed">
              &ldquo;In enterprise banking, 99.99% database uptime isn&apos;t an afterthought—it is the foundation. I engineer resilient Oracle infrastructures, zero-downtime migrations, and performance optimizations that scale under mission-critical workloads.&rdquo;
            </blockquote>
          </div>

          <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-base font-semibold text-foreground">Adam Hidayat</div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Database Administrator · Bank IBK Indonesia
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground shadow-sm hover:bg-foreground hover:text-background transition-all duration-200"
            >
              Discover my background
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>

        {/* Right Column: Portrait Card with Floating Pills */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-border/80 bg-card/80 backdrop-blur-sm p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-border transition-all duration-300 group">
          {/* Portrait Image with Location Badge */}
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-muted shadow-inner">
            <Image
              src="/images/portrait-full.jpg"
              alt="Adam Hidayat — Database Administrator"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
              priority={false}
            />

            {/* Location Pill Overlay */}
            <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur-md px-3 py-1 text-xs font-medium text-foreground border border-border/60 shadow-sm">
              <MapPin className="size-3 text-primary" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>

          {/* Floating Social Pills */}
          <div className="mt-5 pt-1 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {socialLinks.map(({ name, href, icon: Icon, label }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/90 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-200"
                aria-label={label}
              >
                <Icon className="size-3.5" />
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
