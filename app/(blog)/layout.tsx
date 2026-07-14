import { Sidebar } from "@/components/blog/sidebar"
import { MobileNav } from "@/components/blog/mobile-nav"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-[260px_1fr]">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex h-screen min-h-0 flex-col">
        <MobileNav />
        <div className="min-h-0 flex-1">
          {children}
        </div>
      </div>
    </div>
  )
}
