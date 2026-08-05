"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Sidebar } from "@/components/blog/sidebar"
import { MobileNav } from "@/components/blog/mobile-nav"
import { ScrollToTop } from "@/components/blog/scroll-to-top"
import { cn } from "@/lib/utils"

export function BlogLayoutClient({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div 
      className={cn(
        "grid h-screen transition-[grid-template-columns] duration-300 ease-in-out",
        isCollapsed ? "grid-cols-1 md:grid-cols-[80px_1fr]" : "grid-cols-1 md:grid-cols-[260px_1fr]"
      )}
    >
      <div className="hidden md:block h-full z-10">
        <Sidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
      </div>
      <div className="flex h-screen min-h-0 flex-col relative">
        <MobileNav />
        <div id="main-scroll" className="min-h-0 flex-1 h-full overflow-y-auto relative bg-background">
          {children}
        </div>
        <ScrollToTop />
      </div>
    </div>
  )
}
