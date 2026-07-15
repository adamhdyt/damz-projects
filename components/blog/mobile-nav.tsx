"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Code2, Coffee } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Section } from "@/components/blog/sidebar"
import { ThemeToggle } from "@/components/blog/theme-toggle"

const items: { id: Section; label: string; icon: typeof Home; href: string }[] = [
  { id: "home", label: "Home", icon: Home, href: "/" },
  { id: "tech", label: "Tech Notes", icon: Code2, href: "/tech" },
  { id: "life", label: "Life", icon: Coffee, href: "/life" },
]

function getActiveSection(pathname: string): Section {
  if (pathname.startsWith("/tech")) return "tech"
  if (pathname.startsWith("/life")) return "life"
  return "home"
}

export function MobileNav() {
  const pathname = usePathname()
  const active = getActiveSection(pathname)

  return (
    <div className="flex items-center gap-2 border-b border-border bg-sidebar px-4 py-3 md:hidden">
      <Link href="/" className="mr-2 flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <span className="font-mono text-xs font-bold">AH</span>
      </Link>
      <nav aria-label="Sections" className="flex items-center gap-1 overflow-x-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-muted-foreground hover:text-sidebar-foreground",
              )}
            >
              <Icon className={cn("size-4", isActive && "text-primary")} />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <ThemeToggle className="ml-auto shrink-0" />
    </div>
  )
}
