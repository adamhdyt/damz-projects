import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code2, Coffee, MapPin } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Tech Notes",
    description:
      "Architecture, debugging stories, and lessons from shipping software in production.",
    href: "/tech",
  },
  {
    icon: Coffee,
    title: "Life",
    description:
      "Slower thoughts on habits, focus, and everything away from the keyboard.",
    href: "/life",
  },
]

const stats = [
  { value: "8+", label: "Years building" },
  { value: "40+", label: "Essays written" },
  { value: "12", label: "Products shipped" },
]

export function AboutIntro() {
  return (
    <main className="flex h-full flex-col overflow-y-auto">
      {/* Hero */}
      <section className="border-b border-border px-6 py-12 sm:px-10 lg:py-16">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center">
          <div className="relative shrink-0">
            <div className="absolute -inset-3 rounded-full bg-primary/10 blur-2xl" aria-hidden />
            <Image
              src="/images/portrait.png"
              alt="Portrait of the author"
              width={200}
              height={200}
              priority
              className="relative size-40 rounded-full object-cover ring-1 ring-border sm:size-48"
            />
          </div>

          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              Available for new projects
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
              Hi, I&apos;m Nico — engineer &amp; writer.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
              I build reliable software and write about the craft behind it. This is my
              corner of the internet: part engineering notebook, part personal journal.
              I care about clear thinking, calm systems, and doing fewer things well.
            </p>
            <div className="mt-5 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              <span>Based in Bandung, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <dl className="mt-10 grid grid-cols-3 gap-4 sm:max-w-md">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-card p-4">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold text-foreground">{stat.value}</dd>
              <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* What you'll find here */}
      <section className="px-6 py-12 sm:px-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          What you&apos;ll find here
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {highlights.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="group flex flex-col items-start rounded-xl border border-border bg-card p-6 text-left transition-colors hover:border-primary/50 hover:bg-accent"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Browse posts
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
