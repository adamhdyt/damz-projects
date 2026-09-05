"use client"

import React, { useState, useTransition } from "react"
import Image from "next/image"
import { Send, CheckCircle2, AlertCircle, Loader2, Video, Mail } from "lucide-react"
import { subscribe } from "@/app/actions/subscribe"

export function LetsBuildSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || isPending) return

    setStatus("idle")
    const formData = new FormData()
    formData.append("email", email)

    startTransition(async () => {
      try {
        const res = await subscribe(formData)
        if (res.error) {
          setStatus("error")
        } else {
          setStatus("success")
          setName("")
          setEmail("")
          setMessage("")
        }
      } catch {
        setStatus("error")
      }
    })
  }

  return (
    <section id="contact" className="relative px-6 py-20 sm:px-10 lg:px-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Form Card */}
        <div className="lg:col-span-6 flex flex-col justify-between rounded-[36px] border border-border/80 bg-card/80 backdrop-blur-sm p-8 sm:p-12 shadow-sm">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/60 px-3.5 py-1 text-xs font-medium text-muted-foreground mb-4">
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Let&apos;s Build
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Have an enterprise database challenge, migration plan, or query tuning project in mind? Drop me a message and I&apos;ll get back to you within 24 hours.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  disabled={isPending || status === "success"}
                  className="w-full rounded-2xl border border-border/80 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  disabled={isPending || status === "success"}
                  className="w-full rounded-2xl border border-border/80 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your database or project..."
                  required
                  disabled={isPending || status === "success"}
                  className="w-full rounded-2xl border border-border/80 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isPending || status === "success"}
                className="w-full rounded-2xl bg-foreground text-background py-3.5 px-6 text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
              >
                {isPending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
                  <CheckCircle2 className="size-4 shrink-0" />
                  <span>Message sent! Thank you, I will get back to you shortly.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Right Column: Photo Card with Action Pill */}
        <div className="lg:col-span-6 relative rounded-[36px] overflow-hidden border border-border/80 bg-card shadow-sm min-h-[460px] flex flex-col justify-end p-8">
          <Image
            src="/images/portrait-full.jpg"
            alt="Adam Hidayat"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Floating Pill Overlay */}
          <div className="relative z-10 flex items-center justify-between gap-4">
            <a
              href="mailto:adamhdyt11@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-black/80 backdrop-blur-md px-5 py-2.5 text-xs font-semibold text-white border border-white/20 hover:bg-black transition-colors"
            >
              <Mail className="size-3.5" />
              <span>adamhdyt11@gmail.com</span>
            </a>

            <div className="text-right text-xs text-white/80 hidden sm:block">
              Jakarta, Indonesia (GMT+7)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
