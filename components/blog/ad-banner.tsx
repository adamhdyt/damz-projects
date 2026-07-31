"use client"

import { useEffect } from "react"
import { cn } from "@/lib/utils"

interface AdBannerProps {
  dataAdSlot: string
  dataAdFormat?: string
  dataFullWidthResponsive?: boolean
  className?: string
}

export function AdBanner({
  dataAdSlot,
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,
  className,
}: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error("AdSense Error", err)
    }
  }, [])

  return (
    <div className={cn("my-6 w-full min-h-[90px] bg-sidebar/30 rounded-lg flex items-center justify-center overflow-hidden border border-border/50", className)}>
      {/* Placeholder for development or before approval */}
      <div className="absolute text-xs text-muted-foreground/50 select-none pointer-events-none">Advertisement Placeholder</div>
      
      <ins
        className="adsbygoogle relative z-10"
        style={{ display: "block", width: "100%" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // TODO: Replace with real publisher ID
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      />
    </div>
  )
}
