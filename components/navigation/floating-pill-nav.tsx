"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, X, ArrowUpRight, Mail, FileText, Moon, Sun } from "lucide-react"
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/ui/icons"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/", isAnchor: false },
  { label: "Work & Projects", href: "/#projects", isAnchor: true },
  { label: "About Me", href: "/about", isAnchor: false },
  { label: "Certifications", href: "/#certifications", isAnchor: true },
  { label: "Tech Notes", href: "/tech", isAnchor: false },
  { label: "Life & Personal", href: "/life", isAnchor: false },
  { label: "Contact", href: "/contact", isAnchor: false },
]

export function FloatingPillNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Prevent background scroll when menu is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const isDark = resolvedTheme === "dark"

  return (
    <>
      {/* Floating Pill Bar (Top Center) */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 max-w-[92vw]"
      >
        <div className="flex items-center gap-2 sm:gap-3 rounded-full border border-border/80 bg-background/85 px-3 py-1.5 shadow-lg shadow-black/5 backdrop-blur-md transition-all hover:border-border">
          {/* Avatar Link */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative size-7 shrink-0 overflow-hidden rounded-full ring-1 ring-border/80">
              <Image
                src="/images/portrait.png"
                alt="Adam Hidayat"
                width={28}
                height={28}
                className="size-full object-cover"
                priority
              />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
              Adam Hidayat
            </span>
          </Link>

          <span className="hidden h-3.5 w-px bg-border/80 sm:inline-block" aria-hidden />

          {/* Tagline / Indicator */}
          <div className="hidden items-center gap-1.5 text-[11px] font-medium text-muted-foreground sm:flex">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>DBA & Life</span>
          </div>

          {/* Theme toggle button */}
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground cursor-pointer"
            aria-label="Toggle theme"
          >
            {mounted ? (
              isDark ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />
            ) : (
              <span className="size-3.5" />
            )}
          </button>

          {/* Plus Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className={cn(
              "flex size-7.5 items-center justify-center rounded-full transition-all cursor-pointer",
              isOpen
                ? "bg-foreground text-background rotate-45"
                : "bg-foreground text-background hover:scale-105 active:scale-95"
            )}
          >
            <Plus className="size-4 transition-transform duration-300" />
          </button>
        </div>
      </motion.header>

      {/* Expanded Modal Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Card */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Main Navigation"
              initial={{ opacity: 0, scale: 0.94, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-[380px] origin-top rounded-3xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur-xl"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="relative size-9 overflow-hidden rounded-full ring-1 ring-border">
                    <Image
                      src="/images/portrait.png"
                      alt="Adam Hidayat"
                      width={36}
                      height={36}
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-foreground leading-tight">Adam Hidayat</h2>
                    <p className="text-[11px] text-muted-foreground">Database Administrator</p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="flex size-8 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-accent transition-colors cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="divide-y divide-border/60 py-1">
                {navLinks.map((item) => {
                  const isActive = !item.isAnchor && pathname === item.href

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "group flex items-center justify-between py-3 px-1 text-sm font-medium transition-colors hover:text-primary",
                        isActive ? "text-primary font-semibold" : "text-foreground/90"
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </Link>
                  )
                })}
              </nav>

              {/* Bottom Actions */}
              <div className="mt-3 space-y-3 pt-3 border-t border-border">
                {/* Download CV CTA Button */}
                <a
                  href="/CV/Adam_Hidayat_DBA_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-2.5 px-4 text-xs font-semibold text-background transition-opacity hover:opacity-90 active:scale-[0.99] cursor-pointer"
                >
                  <FileText className="size-4" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>

                {/* Social Links Bar */}
                <div className="flex items-center justify-center gap-2 pt-1">
                  <a
                    href="https://github.com/adamhdyt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GitHubIcon className="size-3.5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/adamhdyt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedInIcon className="size-3.5" />
                  </a>
                  <a
                    href="https://instagram.com/adamhdytt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    aria-label="Instagram Profile"
                  >
                    <InstagramIcon className="size-3.5" />
                  </a>
                  <a
                    href="mailto:adamhdyt11@gmail.com"
                    className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    aria-label="Send Email"
                  >
                    <Mail className="size-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
