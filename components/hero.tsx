"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

const partners = [
  "UNESCO",
  "NATIONAL GEOGRAPHIC",
  "ETHIOPIAN AIRLINES",
  "AFRICAN PARKS",
  "WORLD WILDLIFE FUND",
  "LONELY PLANET",
  "USAID",
  "GIZ",
]

const heroImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 10000) // Change background every 10 seconds

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Loop */}
      <div className="absolute inset-0">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-all duration-[5000ms] ease-in-out ${index === currentImageIndex
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
              }`}
          >
            <Image
              src={src}
              alt="Arba Minch Landscape"
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        {/* Non-linear gradient mask - darker at bottom-left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,26,26,0.55) 0%, rgba(26,26,26,0.25) 40%, rgba(26,26,26,0.05) 70%, rgba(26,26,26,0.15) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,26,26,0.7) 0%, rgba(26,26,26,0.1) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Hero Typography - Bottom Left Aligned */}
      <div className="absolute bottom-40 left-6 z-10 md:bottom-44 md:left-12 lg:bottom-48 lg:left-20">
        <h1 className="font-serif leading-none text-paper transition-all duration-1000 ease-out">
          <span
            className={`block text-5xl font-light md:text-7xl lg:text-8xl xl:text-9xl ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
              }`}
          >
            Arba Minch:
          </span>
          <span
            className={`block text-4xl font-mono font-light italic md:text-6xl lg:text-7xl xl:text-8xl mt-1 ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
              }`}
            style={{ transitionDelay: "100ms" }}
          >
            Forty Springs,
          </span>
          <span
            className={`block text-4xl font-mono font-light italic md:text-6xl lg:text-7xl xl:text-8xl ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            Infinite Wonder.
          </span>
        </h1>
        <p
          className={`mt-8 ml-1 md:ml-2 font-mono text-xs tracking-[0.3em] text-paper/80 uppercase transition-all delay-300 duration-1000 ease-out md:text-sm ${isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
            }`}
        >
          The Heaven of Rift Valley
        </p>
        <Link
          href="/attractions"
          className={`group mt-8 ml-1 md:ml-2 relative inline-block border-2 border-paper px-8 py-3 font-mono text-xs tracking-[0.15em] text-paper uppercase overflow-hidden transition-all delay-500 duration-1000 ease-out hover:border-forest ${isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
            }`}
        >
          {/* Fill layer -- slides in from left on hover */}
          <span
            className="absolute inset-0 bg-forest origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] ease-out"
            aria-hidden="true"
          />
          <span className="relative z-10">Start Exploring</span>
        </Link>
      </div>

      {/* Logo Marquee Bar - Positioned at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-paper/10 bg-ink/30 backdrop-blur-sm">
        <div className="flex items-center">
          {/* Static Label */}
          <div className="flex-shrink-0 border-r border-paper/10 px-6 py-4 md:px-10">
            <span className="whitespace-nowrap font-mono text-[10px] tracking-[0.25em] text-paper/50 uppercase">
              {"Partners \u2014"}
            </span>
          </div>
          {/* Scrolling Logos */}
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-marquee items-center">
              {[...partners, ...partners].map((partner, i) => (
                <span
                  key={`${partner}-${i}`}
                  className="mx-8 whitespace-nowrap font-mono text-[10px] tracking-[0.2em] text-paper/30 uppercase md:mx-12 md:text-xs"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
