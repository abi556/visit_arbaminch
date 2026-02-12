import { BadgeCheck, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Service {
  id: number
  name: string
  category: 'stay' | 'eat' | 'travel'
  description: string
  contact: string
  verified: boolean
}

const services: Service[] = [
  {
    id: 1,
    name: 'Arba Minch Resort',
    category: 'stay',
    description: 'Luxury hotel with views of both lakes. Full amenities including restaurant and spa.',
    contact: '+251-46-886-0066',
    verified: true,
  },
  {
    id: 2,
    name: 'Rift Valley Guesthouse',
    category: 'stay',
    description: 'Budget-friendly accommodation with authentic local experience.',
    contact: '+251-46-886-1234',
    verified: true,
  },
  {
    id: 3,
    name: 'Crocodile Camp Lodge',
    category: 'stay',
    description: 'Eco-lodge on the shores of Lake Chamo. Perfect for wildlife enthusiasts.',
    contact: '+251-46-886-5678',
    verified: true,
  },
  {
    id: 4,
    name: 'Nech Sar Hotel',
    category: 'stay',
    description: 'Mid-range hotel with excellent service and local cuisine.',
    contact: '+251-46-886-2345',
    verified: false,
  },
  {
    id: 5,
    name: 'Injera House Restaurant',
    category: 'eat',
    description: 'Traditional Ethiopian cuisine served in a cozy atmosphere. Try the doro wat.',
    contact: '+251-46-886-3456',
    verified: true,
  },
  {
    id: 6,
    name: 'Lake View Cafe',
    category: 'eat',
    description: 'Modern cafe with both local and international dishes. Great coffee.',
    contact: '+251-46-886-4567',
    verified: true,
  },
  {
    id: 7,
    name: 'Fish Market Restaurant',
    category: 'eat',
    description: 'Fresh fish daily from Lake Chamo. Locally loved and affordable.',
    contact: '+251-46-886-5678',
    verified: false,
  },
  {
    id: 8,
    name: 'Arba Minch Tour Company',
    category: 'travel',
    description: 'Full-service tour operator offering guides, transport, and multi-day trips.',
    contact: '+251-46-886-6789',
    verified: true,
  },
  {
    id: 9,
    name: 'Rift Valley Guides',
    category: 'travel',
    description: 'Expert local guides specializing in cultural and nature tours.',
    contact: '+251-46-886-7890',
    verified: true,
  },
  {
    id: 10,
    name: 'Adventurers Transportation',
    category: 'travel',
    description: 'Vehicle rental and driving services for independent travelers.',
    contact: '+251-46-886-8901',
    verified: false,
  },
]

const categoryLabels = {
  stay: 'Where to Stay',
  eat: 'Where to Eat',
  travel: 'Travel Services',
}

export default function ServicesPage() {
  const groupedServices = {
    stay: services.filter((s) => s.category === 'stay'),
    eat: services.filter((s) => s.category === 'eat'),
    travel: services.filter((s) => s.category === 'travel'),
  }

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
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-paper">
            Services & <span className="italic">Directory</span>
          </h1>
          <p className="text-xs md:text-sm font-mono font-bold text-paper max-w-2xl leading-relaxed uppercase tracking-[0.2em]">
            Recommended accommodations, dining, and travel services in Arba Minch.
          </p>
        </div>
      </section>

      {/* Services Directory */}
      <section className="py-16 md:py-24 px-4 bg-paper">
        <div className="max-w-6xl mx-auto space-y-16">
          {(Object.entries(groupedServices) as Array<[keyof typeof groupedServices, Service[]]>).map(
            ([category, items]) => (
              <div key={category}>
                <h2 className="text-3xl font-serif text-ink mb-8 pb-4 border-b-2 border-forest">
                  {categoryLabels[category]}
                </h2>

                <div className="space-y-4">
                  {items.map((service) => (
                    <div
                      key={service.id}
                      className="p-6 bg-muted/30 hover:bg-muted/50 transition-colors rounded-lg border border-muted"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-ink">{service.name}</h3>
                            {service.verified && (
                              <div className="flex items-center gap-1 text-[#0095f6] text-sm font-medium">
                                <svg
                                  viewBox="0 0 24 24"
                                  className="w-4 h-4 fill-current"
                                  aria-label="Verified"
                                >
                                  <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.97-.81-4.01s-2.62-1.27-4.01-.81C14.67 2.53 13.43 1.65 12 1.65s-2.67.88-3.34 2.19c-1.39-.46-2.97-.2-4.01.81s-1.27 2.62-.81 4.01C2.53 9.33 1.65 10.57 1.65 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.97.81 4.01s2.62 1.27 4.01.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.46 2.97.2 4.01-.81s1.27-2.62.81-4.01c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.35-6.2 6.78z" />
                                </svg>
                                <span>Verified</span>
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                            {service.description}
                          </p>
                          <a
                            href={`tel:${service.contact}`}
                            className="inline-flex items-center text-sm font-medium text-forest hover:text-lakeBlue transition-colors"
                          >
                            {service.contact}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Information Box */}
      <section className="py-16 md:py-24 px-4 bg-muted/10">
        <div className="max-w-4xl mx-auto bg-paper p-8 md:p-12 rounded-lg border border-muted">
          <h2 className="text-2xl font-serif text-ink mb-4">Need Help Planning?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Our recommended services are handpicked for quality and reliability. Whether you're looking for luxury
            accommodation or budget options, authentic dining experiences, or expert guided tours, you'll find trusted
            partners here. All verified businesses are regularly updated to ensure current information.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-ink mb-2">Booking Tips</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Book accommodations in advance during high season (Nov-Feb)</li>
                <li>• Guides can be arranged through your hotel</li>
                <li>• Confirm contact details before visiting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-ink mb-2">Best Practices</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Ask guides about cultural sensitivity</li>
                <li>• Support local businesses and craftspeople</li>
                <li>• Learn a few Amharic phrases before your trip</li>
              </ul>
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
