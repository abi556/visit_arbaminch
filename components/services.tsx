"use client"

import { Hotel, Compass, Bus, Calendar } from "lucide-react"
import servicesData from "@/src/data/services.json"
import { useEffect, useRef, useState } from "react"

const categoryIcons: Record<string, typeof Hotel> = {
  hotel: Hotel,
  guide: Compass,
  transport: Bus,
}

const categoryLabels: Record<string, string> = {
  hotel: "Accommodation",
  guide: "Guides & Tours",
  transport: "Transport",
}

function VerifiedGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="inline-block"
      aria-label="Verified listing"
    >
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="7" cy="7" r="1.5" fill="currentColor" />
    </svg>
  )
}

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

function ServiceItem({
  service,
  index,
}: {
  service: (typeof servicesData.services)[0]
  index: number
}) {
  const { ref, isVisible } = useInView()
  const Icon = categoryIcons[service.category] || Compass

  return (
    <div
      ref={ref}
      className={`group border-b border-ink/8 py-6 transition-all duration-700 ease-out lg:py-8 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-12">
        {/* Icon & Name */}
        <div className="flex items-center gap-4 lg:w-1/3">
          <Icon
            size={18}
            strokeWidth={1}
            className="flex-shrink-0 text-ink/30"
          />
          <div className="flex items-center gap-3">
            <h4 className="font-serif text-xl font-light text-ink transition-colors duration-300 group-hover:text-clay lg:text-2xl">
              {service.name}
            </h4>
            {service.verified && (
              <span className="text-forest">
                <VerifiedGlyph />
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="font-sans text-sm font-light leading-relaxed text-ink/55 lg:w-2/5">
          {service.description}
        </p>

        {/* Location */}
        <div className="lg:w-1/5 lg:text-right">
          <span className="font-mono text-[10px] tracking-[0.2em] text-ink/35 uppercase">
            {service.location}
          </span>
        </div>
      </div>
    </div>
  )
}

export function Services() {
  const categories = ["hotel", "guide", "transport"] as const

  return (
    <section id="services" className="border-t border-ink/10 bg-paper px-6 py-32 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-forest uppercase">
            {"04 \u2014 Directory"}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light text-ink md:text-5xl lg:text-6xl">
            Plan your journey.
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-forest">
            <VerifiedGlyph />
          </span>
          <span className="font-mono text-[10px] tracking-wider text-ink/40 uppercase">
            Verified listing
          </span>
        </div>
      </div>

      {/* Services by Category */}
      {categories.map((category) => {
        const items = servicesData.services.filter(
          (s) => s.category === category
        )
        return (
          <div key={category} className="mb-16">
            <h3 className="mb-6 font-mono text-[10px] tracking-[0.3em] text-lakeBlue uppercase">
              {categoryLabels[category]}
            </h3>
            {items.map((service, index) => (
              <ServiceItem
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
        )
      })}

      {/* Events */}
      <div className="mt-20 border-t border-ink/10 pt-20">
        <span className="font-mono text-[10px] tracking-[0.3em] text-forest uppercase">
          {"05 \u2014 Calendar"}
        </span>
        <h2 className="mt-4 font-serif text-4xl font-light text-ink md:text-5xl">
          Seasonal rhythms.
        </h2>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {servicesData.events.map((event) => (
            <div key={event.id} className="group">
              <div className="mb-4 flex items-center gap-3">
                <Calendar
                  size={16}
                  strokeWidth={1}
                  className="text-clay"
                />
                <span className="font-mono text-xs tracking-wider text-clay">
                  {event.date}
                </span>
              </div>
              <h4 className="font-serif text-2xl font-light text-ink">
                {event.name}
              </h4>
              <p className="mt-3 font-sans text-sm font-light leading-relaxed text-ink/55">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
