"use client"

import { Hotel, Compass, Bus, Calendar, BadgeCheck } from "lucide-react"
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

function VerifiedBadge() {
  return (
    <div className="text-[#0095f6] flex items-center">
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 fill-current"
        aria-label="Verified account"
      >
        <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.97-.81-4.01s-2.62-1.27-4.01-.81C14.67 2.53 13.43 1.65 12 1.65s-2.67.88-3.34 2.19c-1.39-.46-2.97-.2-4.01.81s-1.27 2.62-.81 4.01C2.53 9.33 1.65 10.57 1.65 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.97.81 4.01s2.62 1.27 4.01.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.46 2.97.2 4.01-.81s1.27-2.62.81-4.01c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.35-6.2 6.78z" />
      </svg>
    </div>
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
      className={`group border-b border-ink/8 py-6 transition-all duration-700 ease-out lg:py-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
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
            <h4 className="font-serif text-xl font-light text-ink transition-colors duration-300 group-hover:text-forest lg:text-2xl">
              {service.name}
            </h4>
            {service.verified && (
              <VerifiedBadge />
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
          <VerifiedBadge />
          <span className="font-mono text-[10px] tracking-wider text-[#0095f6] font-bold uppercase">
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
                  className="text-forest"
                />
                <span className="font-mono text-xs tracking-wider text-forest">
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
