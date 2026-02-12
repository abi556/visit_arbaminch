"use client"

import Image from "next/image"
import attractionsData from "@/src/data/attractions.json"
import { useEffect, useRef, useState } from "react"

function AttractionBlock({
  attraction,
  index,
}: {
  attraction: (typeof attractionsData)[0]
  index: number
}) {
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
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const isEven = index % 2 === 0
  const isPortrait = attraction.aspect === "portrait"

  return (
    <article
      ref={ref}
      className={`flex flex-col gap-8 transition-all duration-1000 ease-out lg:flex-row lg:gap-16 xl:gap-24 ${isEven ? "" : "lg:flex-row-reverse"
        } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${isPortrait
          ? "aspect-[4/5] w-full lg:w-[45%]"
          : "aspect-[16/10] w-full lg:w-[55%]"
          }`}
      >
        <Image
          src={attraction.image || "/placeholder.svg"}
          alt={`${attraction.title} - ${attraction.subtitle}`}
          fill
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Text Block - offset vertically */}
      <div
        className={`flex flex-col justify-center lg:w-[40%] ${isEven ? "lg:pt-20" : "lg:pt-12"
          }`}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-clay uppercase">
          {attraction.caption}
        </span>
        <h3 className="mt-4 font-serif text-4xl font-light leading-tight text-ink md:text-5xl lg:text-6xl">
          {attraction.title}
        </h3>
        <p className="mt-2 font-mono text-xs tracking-wider text-ink/40">
          {attraction.subtitle}
        </p>
        <p className="mt-6 font-sans text-base font-light leading-relaxed text-ink/70 lg:text-lg">
          {attraction.description}
        </p>
        <div className="mt-8">
          <span className="border-b border-ink/20 pb-1 font-mono text-[10px] tracking-[0.2em] text-ink/50 uppercase transition-colors duration-300 hover:border-clay hover:text-clay">
            Read more
          </span>
        </div>
      </div>
    </article>
  )
}

export function Attractions() {
  return (
    <section id="attractions" className="bg-paper px-6 py-32 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="mb-24 max-w-2xl">
        <span className="font-mono text-[10px] tracking-[0.3em] text-forest uppercase">
          {"01 \u2014 Explore"}
        </span>
        <h2 className="mt-4 font-serif text-4xl font-light text-ink md:text-5xl lg:text-6xl">
          The landscape
          <br />
          <em className="italic">tells the story.</em>
        </h2>
        <p className="mt-6 max-w-lg font-sans text-base font-light leading-relaxed text-ink/60">
          Seven encounters that define Arba Minch. Each carries the weight of geology, tradition, and the patient work of water on stone.
        </p>
      </div>

      {/* Staggered Attraction Blocks */}
      <div className="flex flex-col gap-24 lg:gap-36">
        {attractionsData.map((attraction, index) => (
          <AttractionBlock
            key={attraction.id}
            attraction={attraction}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
