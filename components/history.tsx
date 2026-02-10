"use client"

import Image from "next/image"
import historyData from "@/src/data/history.json"
import { useEffect, useRef, useState } from "react"

function useInView(threshold = 0.15) {
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

function TimelineItem({
  item,
  index,
}: {
  item: (typeof historyData.timeline)[0]
  index: number
}) {
  const { ref, isVisible } = useInView()

  return (
    <div
      ref={ref}
      className={`relative flex gap-8 transition-all duration-700 ease-out lg:gap-12 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center">
        <div className="h-2 w-2 rounded-full bg-clay" />
        <div className="w-px flex-1 bg-ink/10" />
      </div>

      {/* Content */}
      <div className="pb-16">
        <span className="font-mono text-xs tracking-[0.2em] text-clay">
          {item.year}
        </span>
        <h4 className="mt-2 font-serif text-2xl font-light text-ink md:text-3xl">
          {item.title}
        </h4>
        <p className="mt-3 max-w-md font-sans text-sm font-light leading-relaxed text-ink/60">
          {item.description}
        </p>
      </div>
    </div>
  )
}

function CultureArticle({
  item,
  index,
}: {
  item: (typeof historyData.culture)[0]
  index: number
}) {
  const { ref, isVisible } = useInView()
  const isEven = index % 2 === 0

  return (
    <article
      ref={ref}
      className={`flex flex-col gap-8 transition-all duration-1000 ease-out lg:flex-row lg:gap-16 ${
        isEven ? "" : "lg:flex-row-reverse"
      } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden lg:w-1/2">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center lg:w-1/2">
        {"subtitle" in item && (
          <span className="font-mono text-[10px] tracking-[0.3em] text-lakeBlue uppercase">
            {(item as { subtitle: string }).subtitle}
          </span>
        )}
        <h4 className="mt-3 font-serif text-3xl font-light text-ink md:text-4xl lg:text-5xl">
          {item.title}
        </h4>
        <p className="mt-5 font-sans text-base font-light leading-relaxed text-ink/65">
          {item.description}
        </p>
      </div>
    </article>
  )
}

export function History() {
  return (
    <section id="history" className="bg-paper">
      {/* Timeline Section */}
      <div className="border-t border-ink/10 px-6 py-32 md:px-12 lg:px-20">
        <div className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-forest uppercase">
              {"02 \u2014 History"}
            </span>
            <h2 className="mt-4 font-serif text-4xl font-light text-ink md:text-5xl lg:text-6xl">
              A place shaped
              <br />
              <em className="italic">by water and time.</em>
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm font-light leading-relaxed text-ink/50">
            From the ancient Gamo kingdoms to the modern university city, Arba Minch has always been defined by its position between highlands and rift floor.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto max-w-2xl">
          {historyData.timeline.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Culture Section */}
      <div className="border-t border-ink/10 px-6 py-32 md:px-12 lg:px-20">
        <div className="mb-24">
          <span className="font-mono text-[10px] tracking-[0.3em] text-forest uppercase">
            {"03 \u2014 Culture"}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light text-ink md:text-5xl lg:text-6xl">
            Living traditions.
          </h2>
        </div>

        <div className="flex flex-col gap-24 lg:gap-36">
          {historyData.culture.map((item, index) => (
            <CultureArticle key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
