"use client"

import { useState } from "react"
import { subscribe } from "@/app/actions/subscribe"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export function NewsletterForm({ isCollapsed }: { isCollapsed: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  if (isCollapsed) return null

  async function handleSubscribe(formData: FormData) {
    setStatus("loading")
    setMessage("")
    
    const res = await subscribe(formData)
    
    if (res.error) {
      setStatus("error")
      setMessage(res.error)
    } else {
      setStatus("success")
      setMessage("Thanks for subscribing!")
    }
  }

  return (
    <div className="px-3 w-full">
      <div className="rounded-xl border border-border bg-sidebar-accent/50 p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-sidebar-foreground mb-1">Stay updated</h3>
        <p className="text-xs text-muted-foreground mb-3">
          Get new tech notes and life stories in your inbox.
        </p>
        
        {status === "success" ? (
          <div className="flex items-center gap-2 text-xs font-medium text-green-600 dark:text-green-400">
            <CheckCircle className="size-4" />
            {message}
          </div>
        ) : (
          <form action={handleSubscribe} className="flex flex-col gap-2">
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="adam@example.com"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pr-10"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="absolute right-1 top-1 flex size-7 items-center justify-center rounded bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
                aria-label="Subscribe"
              >
                {status === "loading" ? (
                  <div className="size-3 animate-spin rounded-full border-2 border-primary-foreground border-r-transparent" />
                ) : (
                  <Send className="size-3" />
                )}
              </button>
            </div>
            {status === "error" && (
              <div className="flex items-center gap-1.5 text-[10px] text-red-500 mt-1">
                <AlertCircle className="size-3 shrink-0" />
                <span className="truncate">{message}</span>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
