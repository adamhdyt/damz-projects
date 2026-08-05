"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll")
    if (!scrollContainer) return

    const toggleVisibility = () => {
      if (scrollContainer.scrollTop > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    scrollContainer.addEventListener("scroll", toggleVisibility)
    return () => scrollContainer.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    const scrollContainer = document.getElementById("main-scroll")
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background animate-in fade-in slide-in-from-bottom-4"
      aria-label="Scroll to top"
    >
      <ArrowUp className="size-5" />
    </button>
  )
}
