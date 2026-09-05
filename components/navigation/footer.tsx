import Link from "next/link"
import { Mail, FileText, ArrowUpRight } from "lucide-react"
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/ui/icons"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-card/40 backdrop-blur-sm mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-foreground text-background font-bold text-xs">
                AH
              </div>
              <span className="font-semibold text-base tracking-tight text-foreground">Adam Hidayat</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Experienced Database Administrator with 4+ years in the banking industry.
              Specializing in Oracle Database, SQL Server, PostgreSQL, and MySQL performance tuning, backup & recovery, and mission-critical high availability.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-muted-foreground font-medium">Available for technical discussions & opportunities</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Explore</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#projects" className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                  <span>Selected Work</span>
                  <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                  <span>About Me</span>
                  <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link href="/#certifications" className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                  <span>Oracle Certifications</span>
                  <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link href="/tech" className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                  <span>Tech Notes</span>
                  <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link href="/life" className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                  <span>Life & Reflections</span>
                  <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors inline-flex items-center gap-1 group">
                  <span>Get in Touch</span>
                  <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & CV */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Connect</h3>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/adamhdyt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-xl border border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="size-4" />
              </a>
              <a
                href="https://linkedin.com/in/adamhdyt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-xl border border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="size-4" />
              </a>
              <a
                href="https://instagram.com/adamhdytt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-xl border border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="mailto:adamhdyt11@gmail.com"
                className="flex size-9 items-center justify-center rounded-xl border border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label="Send Email"
              >
                <Mail className="size-4" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href="/CV/Adam_Hidayat_DBA_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-2 text-xs font-semibold text-foreground hover:bg-accent transition-colors"
              >
                <FileText className="size-3.5 text-primary" />
                <span>Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {currentYear} Adam Hidayat. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Crafted with Next.js & Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
