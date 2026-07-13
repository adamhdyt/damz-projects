import Image from "next/image"
import { MapPin, Mountain, Clock, Calendar } from "lucide-react"

const gallery = [
  {
    src: "/images/mountain-trail.png",
    caption: "Day 1 — the forest trail before the treeline gave way to rock.",
  },
  {
    src: "/images/mountain-camp.png",
    caption: "Camp at 2,800m. The tent glowed like a lantern once the sun dropped.",
  },
  {
    src: "/images/mountain-ridge.png",
    caption: "Day 2 — endless ridgelines fading into a blue haze.",
  },
]

const stats = [
  { icon: Mountain, label: "Elevation", value: "3,142 m" },
  { icon: Clock, label: "Duration", value: "3 days" },
  { icon: MapPin, label: "Distance", value: "24 km" },
  { icon: Calendar, label: "Season", value: "Dry, July" },
]

export function MountainTrip() {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Hero */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
        <Image
          src="/images/mountain-summit.png"
          alt="A hiker standing on a mountain summit above a sea of clouds at sunrise"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      <div className="mt-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
          <Mountain className="size-3.5" />
          Travel
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
          Three Days on the Ridge: A Mountain Trip Journal
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          July 10, 2026 · 7 min read
        </p>
      </div>

      {/* Trip stats */}
      <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="rounded-xl border border-border bg-card p-4"
          >
            <Icon className="size-4 text-primary" />
            <dt className="mt-2 text-xs text-muted-foreground">{label}</dt>
            <dd className="text-sm font-semibold text-card-foreground">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Body */}
      <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          I left the trailhead before the sun did. The first hours were all pine
          and soft dirt, the kind of walking where your mind finally goes quiet.
          By mid-morning the forest thinned and the real climb began — switchbacks
          carved into loose scree, each one a little steeper than the last.
        </p>
        <h2 className="pt-2 text-xl font-semibold text-foreground">
          Making camp above the clouds
        </h2>
        <p>
          We pitched the tent on a flat shoulder of the mountain just as the light
          turned gold. Dinner was instant noodles that tasted like the best meal
          of my life. When the sun dropped, the temperature followed, and the sky
          filled with more stars than I knew how to hold.
        </p>
        <h2 className="pt-2 text-xl font-semibold text-foreground">
          The summit push
        </h2>
        <p>
          Day two started at 4 a.m. under a headlamp. The final ridge was narrow
          and exposed, wind pulling at every layer. And then — nothing above us but
          sky. Standing on the summit with the clouds rolling beneath my feet, the
          exhaustion of the climb rearranged itself into something like gratitude.
        </p>
      </div>

      {/* Photo documentation */}
      <section className="mt-12" aria-labelledby="photo-journal">
        <h2
          id="photo-journal"
          className="text-xl font-semibold text-foreground"
        >
          Photo journal
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Documentation from the trail, the camp, and the ridge.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {gallery.map((photo, i) => (
            <figure
              key={photo.src}
              className={i === 0 ? "sm:col-span-2" : undefined}
            >
              <div
                className={`relative w-full overflow-hidden rounded-xl border border-border ${
                  i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <figcaption className="mt-2 text-xs text-muted-foreground">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </article>
  )
}
