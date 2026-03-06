'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Clock, Zap } from 'lucide-react'

export default function StopoverPage() {
  const stopovers = [
    {
      city: 'Addis Ababa',
      duration: '1-3 days',
      icon: <MapPin className="w-6 h-6" />,
      description: 'Explore Ethiopia\'s capital, ancient history, and vibrant culture before heading south to Arba Minch.',
      highlights: ['National Museum', 'Holy Trinity Cathedral', 'Entoto Mountain', 'Lucy Museum'],
    },
    {
      city: 'Hawassa',
      duration: 'Half-day or overnight',
      icon: <MapPin className="w-6 h-6" />,
      description: 'Visit the scenic Lake Hawassa en route to Arba Minch. Perfect for a quick cultural stop.',
      highlights: ['Lake Hawassa Market', 'Sidamo Coffee Region', 'Local crafts'],
    },
    {
      city: 'Lalibela',
      duration: '2-3 days',
      icon: <MapPin className="w-6 h-6" />,
      description: 'UNESCO World Heritage rock-hewn churches. A spiritual journey through ancient Ethiopia.',
      highlights: ['Rock Churches', 'St. George Church', 'Jordan River', 'Pilgrim routes'],
    },
  ]

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-paper overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/flight.jpg"
            alt="Stopover Opportunities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-paper">Stopover Opportunities</h1>
          <p className="text-xs md:text-sm font-mono font-bold text-paper max-w-2xl leading-relaxed uppercase tracking-[0.2em]">
            Extend your journey through Ethiopia before reaching Arba Minch.
          </p>
        </div>
      </section>

      {/* Stopovers Grid */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-ink mb-12">Popular Stopover Destinations</h2>

          <div className="grid gap-8">
            {stopovers.map((stopover) => (
              <div
                key={stopover.city}
                className="border-l-4 border-forest bg-white p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-forest">{stopover.icon}</div>
                  <div>
                    <h3 className="text-2xl font-serif text-ink">{stopover.city}</h3>
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Clock size={16} /> {stopover.duration}
                    </p>
                  </div>
                </div>

                <p className="text-ink mb-6">{stopover.description}</p>

                <div className="mb-6">
                  <p className="font-semibold text-ink mb-3">Top Highlights:</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {stopover.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-muted-foreground">
                        <Zap size={14} className="text-forest" /> {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className="inline-block px-4 py-2 border-2 border-forest text-forest hover:bg-forest hover:text-paper transition-colors"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-12 px-4 border-t border-muted">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-forest font-medium hover:text-forest/80 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
