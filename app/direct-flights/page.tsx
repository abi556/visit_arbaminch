'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function DirectFlightsPage() {
  const airlines = [
    {
      name: 'Ethiopian Airlines',
      logo: '✈️',
      routes: ['Addis Ababa to Arba Minch (2.5 hours)', 'Multiple daily departures'],
      features: ['Direct service', 'Competitive pricing', 'Flexible booking'],
    },
    {
      name: 'Kenya Airways',
      logo: '✈️',
      routes: ['Nairobi to Arba Minch (3 hours)', 'Daily flights with connection'],
      features: ['Quality service', 'Regional hub', 'Alliance benefits'],
    },
  ]

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-lakeBlue text-paper">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Direct Flights to Arba Minch</h1>
          <p className="text-lg md:text-xl text-paper/80">
            Convenient connections from around the world. Start your Rift Valley adventure.
          </p>
        </div>
      </section>

      {/* Airlines Grid */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-ink mb-12">Recommended Airlines</h2>
          
          <div className="grid gap-8">
            {airlines.map((airline) => (
              <div
                key={airline.name}
                className="border-2 border-forest rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-serif text-ink mb-4">{airline.name}</h3>
                    <div className="space-y-2">
                      {airline.routes.map((route) => (
                        <p key={route} className="text-muted-foreground">
                          {route}
                        </p>
                      ))}
                    </div>
                  </div>
                  <span className="text-4xl">{airline.logo}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {airline.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-block bg-forest/10 text-forest px-3 py-1 rounded text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-forest font-medium hover:text-forest/80 transition-colors"
                >
                  Book Now <ArrowRight size={16} />
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
