"use client"

import { useState } from "react"
import { Sidebar, type Section } from "@/components/blog/sidebar"
import { MobileNav } from "@/components/blog/mobile-nav"
import { MainContent } from "@/components/blog/main-content"
import { AboutIntro } from "@/components/blog/about-intro"
import { PostDetail } from "@/components/blog/post-detail"
import { posts } from "@/lib/posts"

export default function Page() {
  const [active, setActive] = useState<Section>("home")
  const [openId, setOpenId] = useState<string | null>(null)

  const openPost = posts.find((p) => p.id === openId) ?? null

  function selectSection(section: Section) {
    setOpenId(null)
    setActive(section)
  }

  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-[260px_1fr]">
      <div className="hidden md:block">
        <Sidebar active={active} onSelect={selectSection} />
      </div>
      <div className="flex h-screen min-h-0 flex-col">
        <MobileNav active={active} onSelect={selectSection} />
        <div className="min-h-0 flex-1">
          {openPost ? (
            <PostDetail post={openPost} onBack={() => setOpenId(null)} />
          ) : active === "home" ? (
            <AboutIntro onSelect={selectSection} />
          ) : (
            <MainContent active={active} onOpenPost={setOpenId} />
          )}
        </div>
      </div>
    </div>
  )
}
