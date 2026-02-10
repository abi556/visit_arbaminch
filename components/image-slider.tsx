"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageSliderProps {
    prefix: string
    count: number
}

export function ImageSlider({ prefix, count }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const images = useMemo(() =>
        Array.from({ length: count }, (_, i) => `/images/${prefix}${i + 1}.jpg`)
        , [prefix, count])

    const nextSlide = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const goToSlide = (e: React.MouseEvent, index: number) => {
        e.preventDefault()
        e.stopPropagation()
        setCurrentIndex(index)
    }

    return (
        <div className="group relative w-full h-full">
            {/* Images */}
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`${prefix} ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-ink/20 text-paper/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-ink/40 hover:text-paper"
                aria-label="Previous slide"
            >
                <ChevronLeft size={20} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-ink/20 text-paper/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-ink/40 hover:text-paper"
                aria-label="Next slide"
            >
                <ChevronRight size={20} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={(e) => goToSlide(e, index)}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${index === currentIndex
                                ? "bg-paper w-4"
                                : "bg-paper/40 hover:bg-paper/60"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Overlay gradient for better button visibility */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
        </div>
    )
}
