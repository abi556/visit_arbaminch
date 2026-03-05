'use client'

import { BadgeCheck, ArrowLeft, Hotel, Compass, Utensils, Bed, Activity, Calendar, Car, Plane, Filter } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import tourismDataRaw from "@/src/data/arbaminch_tourism_cleaned.json"

const tourismData = tourismDataRaw as any[]

const categoryConfig: Record<string, { label: string; icon: any }> = {
  'hotel-resorts': { label: "Hotels & Resorts", icon: Hotel },
  'guest-houses': { label: "Guesthouses", icon: Bed },
  'restaurants': { label: "Dining", icon: Utensils },
  'experiences': { label: "Tours", icon: Compass },
  'transport': { label: "Transport", icon: Car },
  'health': { label: "Services", icon: Activity },
}

function VerifiedBadge() {
  return (
    <div className="flex items-center gap-1 text-[#0095f6] text-sm font-medium">
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 fill-current"
        aria-label="Verified"
      >
        <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.97-.81-4.01s-2.62-1.27-4.01-.81C14.67 2.53 13.43 1.65 12 1.65s-2.67.88-3.34 2.19c-1.39-.46-2.97-.2-4.01.81s-1.27 2.62-.81 4.01C2.53 9.33 1.65 10.57 1.65 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.97.81 4.01s2.62 1.27 4.01.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.46 2.97.2 4.01-.81s1.27-2.62.81-4.01c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.35-6.2 6.78z" />
      </svg>
      <span>Highly Rated</span>
    </div>
  )
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const groupedData = {
    'hotel-resorts': tourismData.filter(item =>
      item.types.some((t: string) => ['hotels', 'lodges', 'resorts'].includes(t))
    ),
    'guest-houses': tourismData.filter(item =>
      item.types.some((t: string) => ['motels', 'guest house', 'accommodation', 'pension'].includes(t)) &&
      !item.types.some((t: string) => ['hotels', 'lodges', 'resorts'].includes(t))
    ),
    'restaurants': tourismData.filter(item =>
      item.types.some((t: string) => ['restaurants'].includes(t))
    ),
    'experiences': tourismData.filter(item =>
      item.types.some((t: string) => ['tour agency', 'tour guide', 'helicopter ride'].includes(t))
    ),
    'transport': tourismData.filter(item =>
      item.types.some((t: string) => ['car rental', 'boat rental'].includes(t))
    ),
    'health': tourismData.filter(item =>
      item.types.some((t: string) => ['health'].includes(t))
    )
  }

  const activeCategories = Object.keys(groupedData).filter(
    cat => (activeCategory === 'all' || activeCategory === cat) && (groupedData as any)[cat].length > 0
  )

  const filterOptions = [
    { id: 'all', label: 'All Services' },
    ...Object.entries(categoryConfig)
      .filter(([id]) => (groupedData as any)[id].length > 0)
      .map(([id, config]) => ({
        id,
        label: config.label
      }))
  ]

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-paper overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/serviceC.jpg"
            alt="Services in Arba Minch"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-paper">Services & Directory</h1>
          <p className="text-xs md:text-sm font-mono font-bold text-paper max-w-2xl leading-relaxed uppercase tracking-[0.2em]">
            A comprehensive directory of verified partners and local experiences.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 px-4 border-b border-ink/5 bg-paper sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 md:gap-8 overflow-x-auto pb-2 no-scrollbar">
            <div className="flex items-center gap-2 text-forest/40">
              <Filter size={16} />
              <span className="font-mono text-[10px] uppercase tracking-widest whitespace-nowrap">Filter By</span>
            </div>
            <div className="flex gap-3">
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveCategory(opt.id)}
                  className={`px-6 py-2 text-[10px] font-mono tracking-[0.15em] uppercase transition-all duration-300 border-2 ${activeCategory === opt.id
                    ? 'bg-forest border-forest text-paper shadow-lg shadow-forest/20'
                    : 'border-ink/10 text-ink/40 hover:border-forest/30 hover:text-forest'
                    }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Directory */}
      <section className="py-24 px-4 bg-paper min-h-[60vh]">
        <div className="max-w-6xl mx-auto space-y-24">
          {activeCategories.length > 0 ? (
            activeCategories.map((category) => {
              const config = categoryConfig[category]
              const items = (groupedData as any)[category]
              const Icon = config.icon

              return (
                <div key={category} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="flex items-center gap-4 mb-10 pb-4 border-b border-ink/10">
                    <div className="p-3 bg-forest/5 text-forest rounded-full">
                      <Icon size={24} strokeWidth={1} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-ink italic">
                      {config.label}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item: any, i: number) => {
                      const rating = item.sources?.["Google Maps"]?.rating || ""
                      const link = item.sources?.["Google Maps"]?.link || "#"
                      const description = item.categories?.[0] || item.types?.[0] || "Service Provider"

                      return (
                        <a
                          key={`${item.name}-${i}`}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group p-8 bg-paper border border-ink/5 hover:border-forest/30 transition-all duration-500 hover:shadow-2xl hover:shadow-forest/5"
                        >
                          <div className="flex justify-between items-start gap-4 mb-4">
                            <h3 className="text-xl font-serif text-ink group-hover:text-forest transition-colors">
                              {item.name}
                            </h3>
                            {rating.includes("4.") && <VerifiedBadge />}
                          </div>

                          <p className="text-sm text-ink/50 leading-relaxed mb-6 line-clamp-2">
                            {description}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-ink/5">
                            <span className="text-[10px] font-mono tracking-[0.2em] text-ink/30 uppercase italic">
                              {rating ? `Rating: ${rating}` : "Featured Listing"}
                            </span>
                            <span className="text-[10px] font-mono tracking-[0.2em] text-forest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                              View on Map →
                            </span>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </div>
              )
            })
          ) : (
            <div className="py-20 text-center">
              <Compass size={48} className="mx-auto text-ink/10 mb-6" />
              <p className="text-ink/30 font-serif text-2xl italic">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Booking Assistant */}
      <section className="py-24 px-4 bg-muted/20 border-t border-ink/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-[10px] tracking-[0.3em] text-forest uppercase mb-6 block">
            Plan your stay
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-ink mb-8">
            The local <span className="italic">expertise</span> you need.
          </h2>
          <p className="text-lg text-ink/60 mb-12 leading-relaxed">
            All businesses listed here are verified manually. For seasonal bookings or custom transport rotations, we recommend contacting providers directly 2-4 weeks in advance.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left border-t border-ink/10 pt-12">
            <div>
              <h4 className="font-serif text-xl mb-4">Quality First</h4>
              <p className="text-sm text-ink/50">Only top-rated services with consistent high feedback are featured in our priority lists.</p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-4">Fair Pricing</h4>
              <p className="text-sm text-ink/50">By linking directly to original sources, we ensure you get the most transparent local rates.</p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-4">Ethical Travel</h4>
              <p className="text-sm text-ink/50">Supporting local guides and family-run lodges directly preserves the culture of Arba Minch.</p>
            </div>
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
