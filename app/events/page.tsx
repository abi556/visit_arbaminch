import { Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Event {
  id: number
  title: string
  date: string
  month: string
  day: string
  description: string
  location: string
  featured?: boolean
}

const events: Event[] = [
  {
    id: 1,
    title: 'Meskel Festival',
    date: '28 September - 29 September',
    month: 'Sep',
    day: '28-29',
    description:
      'One of Ethiopia\'s most important religious celebrations. Massive bonfires light the sky as communities gather to commemorate the discovery of the True Cross.',
    location: 'Arba Minch town center',
    featured: true,
  },
  {
    id: 2,
    title: 'Arba Minch Cultural Festival',
    date: '15 October - 20 October',
    month: 'Oct',
    day: '15-20',
    description: 'A week-long celebration of Gamo culture featuring traditional music, dance, crafts, and food. Meet local artisans and experience authentic traditions.',
    location: 'Various venues around town',
  },
  {
    id: 3,
    title: 'Timkat (Epiphany)',
    date: '19 January - 20 January',
    month: 'Jan',
    day: '19-20',
    description: 'A vibrant celebration of the baptism of Jesus Christ with colorful processions, traditional costumes, and festive gatherings.',
    location: 'Churches and lakeside areas',
  },
  {
    id: 4,
    title: 'Gamo Highlands Festival',
    date: '10 March - 15 March',
    month: 'Mar',
    day: '10-15',
    description: 'Celebrate the culture of the Dorze and Gamo people with traditional crafts exhibitions, weaving demonstrations, and cultural performances.',
    location: 'Dorze Village and surrounding areas',
  },
  {
    id: 5,
    title: 'Lake Harvest Festival',
    date: '22 June - 25 June',
    month: 'Jun',
    day: '22-25',
    description: 'Celebrate the fish harvest season with traditional ceremonies, boat races, and fresh fish feasts along Lake Chamo.',
    location: 'Lake Chamo shores',
  },
  {
    id: 6,
    title: 'Nech Sar National Park Wildlife Day',
    date: '8 August',
    month: 'Aug',
    day: '08',
    description: 'Educational and celebratory day focused on wildlife conservation. Guided nature walks, ranger talks, and awareness activities.',
    location: 'Nech Sar National Park',
  },
]

export default function EventsPage() {
  const featuredEvent = events.find((e) => e.featured)
  const upcomingEvents = events.filter((e) => !e.featured)

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-paper overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/evn.jpg"
            alt="Events in Arba Minch"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-paper">Events & Celebrations</h1>
          <p className="text-xs md:text-sm font-mono font-bold text-paper max-w-2xl leading-relaxed uppercase tracking-[0.2em]">
            Experience the vibrant festivals and cultural celebrations of Arba Minch.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="px-4 py-16 md:py-24 bg-forest text-paper">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              {/* Date Block */}
              <div className="bg-paper/20 backdrop-blur-sm p-8 rounded-lg text-center">
                <p className="text-4xl font-serif font-bold mb-2">{featuredEvent.day}</p>
                <p className="text-sm uppercase tracking-wider opacity-90">{featuredEvent.month}</p>
                <p className="text-xs mt-4 opacity-75 leading-relaxed">{featuredEvent.date}</p>
              </div>

              {/* Event Details */}
              <div className="md:col-span-2">
                <p className="text-xs uppercase tracking-widest opacity-90 mb-3">Featured Event</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{featuredEvent.title}</h2>
                <p className="text-lg leading-relaxed mb-8 opacity-95">{featuredEvent.description}</p>
                <div className="flex items-center gap-3 mb-8">
                  <Calendar size={20} />
                  <span className="text-sm">{featuredEvent.location}</span>
                </div>
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-paper text-forest font-medium hover:bg-muted transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Events Calendar List */}
      <section className="py-16 md:py-24 px-4 bg-paper">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-ink mb-12">Upcoming Events</h2>

          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <article key={event.id} className="grid md:grid-cols-4 gap-6 md:gap-8 p-8 bg-muted/30 hover:bg-muted/50 transition-colors rounded-lg border border-muted items-start">
                {/* Date Block */}
                <div className="bg-paper border border-muted p-6 rounded-lg text-center md:col-span-1">
                  <p className="text-3xl font-serif font-bold text-forest mb-1">{event.day.split('-')[0]}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{event.month}</p>
                </div>

                {/* Event Info */}
                <div className="md:col-span-3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-serif text-ink mb-3">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{event.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Events Info Section */}
      <section className="py-16 md:py-24 px-4 bg-muted/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif text-ink mb-6">Festival Season Guide</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Arba Minch comes alive during festival season. From the sacred Timkat celebrations to the cultural
                Gamo highlands festival, there's always something happening.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Plan your visit around these events to experience the true heartbeat of the community. Check with local
                guides for exact dates, as some celebrations follow traditional calendars.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-ink mb-6">Event Tips</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-forest font-bold">•</span>
                  <span>Arrive early for large events to secure good viewing spots</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-forest font-bold">•</span>
                  <span>Respect cultural practices and dress appropriately</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-forest font-bold">•</span>
                  <span>Book accommodations well in advance during festival season</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-forest font-bold">•</span>
                  <span>Hire a local guide to understand the cultural significance</span>
                </li>
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
