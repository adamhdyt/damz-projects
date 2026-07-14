"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Code2, Coffee, Mail, Globe, Rss } from "lucide-react"
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

export function Sidebar() {
  const pathname = usePathname()
  const active = getActiveSection(pathname)

  return (
    <aside className="flex h-full flex-col gap-8 border-r border-border bg-sidebar p-6">
      {/* Brand */}
      <Link href="/" className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <span className="font-mono text-sm font-bold">H</span>
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-sidebar-foreground">Hybrid</p>
          <p className="text-xs text-muted-foreground">Tech &amp; Life</p>
        </div>
      </Link>

      {/* Navigation */}
      <nav aria-label="Primary" className="flex flex-col gap-1">
        <p className="px-3 pb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Browse
        </p>
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
              )}
            >
              <span className="flex items-center gap-3">
                <Icon
                  className={cn(
                    "size-4 shrink-0 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-sidebar-foreground",
                  )}
                />
                {item.label}
              </span>
              <span className="text-xs text-muted-foreground">{item.hint}</span>
            </Link>
          )
        })}
      </nav>

      {/* Newsletter card */}
      <div className="rounded-xl border border-border bg-card p-4">
        <p className="text-sm font-semibold text-card-foreground">Stay in the loop</p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          New notes on engineering and life, roughly weekly. No spam.
        </p>
        <button
          type="button"
          className="mt-3 w-full rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Subscribe
        </button>
      </div>

      {/* Footer / socials */}
      <div className="mt-auto flex items-center gap-1 border-t border-border pt-4">
        {[
          { icon: Globe, label: "Website" },
          { icon: Mail, label: "Email" },
          { icon: Rss, label: "RSS feed" },
        ].map(({ icon: Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
          >
            <Icon className="size-4" />
          </a>
        ))}
        <ThemeToggle className="ml-auto" />
      </div>
    </aside>
  )
}
