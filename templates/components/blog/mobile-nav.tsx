"use client"

import { Home, Code2, Coffee } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Section } from "@/components/blog/sidebar"
import { ThemeToggle } from "@/components/blog/theme-toggle"

const items: { id: Section; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "tech", label: "Tech Notes", icon: Code2 },
  { id: "life", label: "Life", icon: Coffee },
]

export function MobileNav({
  active,
  onSelect,
}: {
  active: Section
  onSelect: (section: Section) => void
}) {
  return (
    <div className="flex items-center gap-2 border-b border-border bg-sidebar px-4 py-3 md:hidden">
      <div className="mr-2 flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <span className="font-mono text-sm font-bold">H</span>
      </div>
      <nav aria-label="Sections" className="flex items-center gap-1 overflow-x-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
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
            </button>
          )
        })}
      </nav>
      <ThemeToggle className="ml-auto shrink-0" />
    </div>
  )
}
