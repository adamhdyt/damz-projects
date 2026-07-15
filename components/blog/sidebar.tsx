"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Code2, Coffee, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/blog/theme-toggle"

export type Section = "home" | "tech" | "life"

const navItems: { id: Section; label: string; icon: typeof Home; hint: string; href: string }[] = [
  { id: "home", label: "Home", icon: Home, hint: "Everything", href: "/" },
  { id: "tech", label: "Tech Notes", icon: Code2, hint: "Engineering", href: "/tech" },
  { id: "life", label: "Life", icon: Coffee, hint: "Personal", href: "/life" },
]

function getActiveSection(pathname: string): Section {
  if (pathname.startsWith("/tech")) return "tech"
  if (pathname.startsWith("/life")) return "life"
  return "home"
}

// GitHub SVG icon (Lucide doesn't include brand icons)
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

// Instagram SVG icon
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

// LinkedIn SVG icon
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

export function Sidebar({ isCollapsed = false, onToggle }: { isCollapsed?: boolean; onToggle?: () => void }) {
  const pathname = usePathname()
  const active = getActiveSection(pathname)

  return (
    <aside className={cn(
      "flex h-full flex-col gap-8 border-r border-border bg-sidebar py-6 transition-[padding] duration-300",
      isCollapsed ? "px-3 items-center" : "px-6"
    )}>
      {/* Brand */}
      <Link href="/" className={cn("flex items-center gap-3", isCollapsed && "justify-center")}>
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <span className="font-mono text-xs font-bold">AH</span>
        </div>
        {!isCollapsed && (
          <div className="leading-tight overflow-hidden whitespace-nowrap">
            <p className="text-sm font-semibold text-sidebar-foreground">Adam Hidayat</p>
            <p className="text-xs text-muted-foreground">DBA &amp; Life</p>
          </div>
        )}
      </Link>

      {/* Navigation */}
      <nav aria-label="Primary" className="flex flex-col gap-1 w-full">
        {!isCollapsed && (
          <p className="px-3 pb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Browse
          </p>
        )}
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              title={isCollapsed ? item.label : undefined}
              className={cn(
                "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors overflow-hidden whitespace-nowrap",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
                isCollapsed ? "justify-center" : "justify-between"
              )}
            >
              <span className="flex items-center gap-3">
                <Icon
                  className={cn(
                    "size-4 shrink-0 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-sidebar-foreground",
                  )}
                />
                {!isCollapsed && item.label}
              </span>
              {!isCollapsed && <span className="text-xs text-muted-foreground">{item.hint}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Footer / socials */}
      <div className={cn("mt-auto flex border-t border-border pt-4 w-full", isCollapsed ? "flex-col items-center gap-4" : "items-center gap-1")}>
        {!isCollapsed && [
          { icon: GitHubIcon, label: "GitHub", href: "https://github.com/adamhdyt" },
          { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/adamhdyt" },
          { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/adamhdytt" },
          { icon: Mail, label: "Email", href: "mailto:adamhdyt11@gmail.com" },
        ].map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
          >
            <Icon className="size-4" />
          </a>
        ))}
        <ThemeToggle className={cn(!isCollapsed && "ml-auto", isCollapsed && "mb-2")} />
        
        {onToggle && (
          <button
            onClick={onToggle}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
          >
            {isCollapsed ? <PanelLeftOpen className="size-4" /> : <PanelLeftClose className="size-4" />}
          </button>
        )}
      </div>
    </aside>
  )
}
