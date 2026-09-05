"use client"

import { FloatingPillNav } from "@/components/navigation/floating-pill-nav"
import { Footer } from "@/components/navigation/footer"
import { ScrollToTop } from "@/components/blog/scroll-to-top"

export function BlogLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <FloatingPillNav />
      <main className="flex-1 w-full pt-20 sm:pt-24">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
