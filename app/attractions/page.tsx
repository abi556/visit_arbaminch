'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Filter } from 'lucide-react'

interface Attraction {
  id: number
  title: string
  category: 'nature' | 'culture' | 'parks'
  description: string
  image: string
  details: string
}

const attractions: Attraction[] = [
  {
    id: 1,
    title: 'Nech Sar National Park',
    category: 'parks',
    description: 'A pristine sanctuary bridging two lakes with diverse wildlife.',
    image: '/images/attr1.jpg',
    details: 'Home to zebras, antelopes, and over 350 bird species, Nech Sar is one of Ethiopia\'s most scenic national parks. The park sits on a narrow isthmus between Lake Abaya and Lake Chamo.',
  },
  {
    id: 2,
    title: 'Crocodile Market of Lake Chamo',
    category: 'nature',
    description: 'Witness massive Nile crocodiles basking on the sandy shores.',
    image: '/images/attr5.jpg',
    details: 'One of the largest crocodile populations in Africa, Lake Chamo\'s crocodile market offers an unforgettable experience. Boat tours reveal the prehistoric reptiles in their natural habitat.',
  },
  {
    id: 3,
    title: 'Dorze Village & Weaving',
    category: 'culture',
    description: 'Discover the traditional beehive houses and ancient weaving crafts.',
    image: '/images/drz.jpg',
    details: 'The Dorze people are master weavers, known for their intricate cotton textiles. Visit their iconic beehive-shaped huts made from bamboo and enset (false banana) leaves.',
  },
  {
    id: 4,
    title: 'Forty Springs (Arba Minch)',
    category: 'nature',
    description: 'Natural springs flowing from volcanic rock through lush forest.',
    image: '/images/fty.jpg',
    details: 'The 40 Springs feed into the Omo River, creating a verdant oasis. The cool, clear waters provide relief and create beautiful natural pools.',
  },
  {
    id: 5,
    title: 'Lake Abaya',
    category: 'nature',
    description: 'Ethiopia\'s largest lake with stunning sunset views.',
    image: '/images/abay.jpg',
    details: 'The reddish-brown waters of Lake Abaya are home to hippopotamuses and numerous fish species. Sunset boat rides offer unforgettable vistas.',
  },
  {
    id: 6,
    title: 'Arba Minch Crocodile Farm',
    category: 'culture',
    description: 'Educational facility showcasing crocodile breeding and conservation.',
    image: '/images/ranch.jpg',
    details: 'Learn about crocodile biology and conservation efforts at this working farm. Support local education and wildlife protection initiatives.',
  },
  {
    id: 7,
    title: 'Mount Gughe',
    category: 'nature',
    description: 'The highest point in the Gamo Highlands and 4th highest place in Ethiopia.',
    image: '/images/guge.jpg',
    details: 'Rising to over 4,200 metres, Mount Gughe stands as the fourth highest point in Ethiopia and one of the most prominent summits in Africa. The mountain dominates the landscape, offering breathtaking panoramic views of the Rift Valley lakes.',
  },
  {
    id: 8,
    title: 'Yo Maskala',
    category: 'culture',
    description: 'The vibrant yearly festival of the Gamo people.',
    image: '/images/yom.jpg',
    details: 'Yo Maskala is the most vibrant and culturally significant festival of the Gamo people, marking their traditional New Year. The celebration involves rhythmic songs, traditional dances, and the lighting of the Demera bonfire.',
  },
  {
    id: 9,
    title: 'Maze National Park',
    category: 'parks',
    description: 'A vital sanctuary for the endemic Swayne\'s Hartebeest.',
    image: '/images/maze.jpg',
    details: 'Maze National Park is a 210-square-kilometer wildlife haven named after the Maze River. It is famous for hosting one of the last remaining populations of the endangered Swayne\'s Hartebeest and the mysterious Wonja Stone Caves.',
  },
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'nature', label: 'Nature' },
  { id: 'culture', label: 'Culture' },
  { id: 'parks', label: 'Parks' },
]

export default function AttractionsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'nature' | 'culture' | 'parks'>('all')

  const filteredAttractions = attractions.filter(
    (attr) => activeCategory === 'all' || attr.category === activeCategory
  )

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-paper overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/attrC.jpg"
            alt="Attractions in Arba Minch"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-paper">Attractions</h1>
          <p className="text-xs md:text-sm font-mono font-bold text-paper max-w-2xl leading-relaxed uppercase tracking-[0.2em]">
            Explore the natural wonders and cultural treasures of Arba Minch.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 px-4 border-b border-muted bg-paper sticky top-16 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-2">
            <Filter size={20} className="text-forest flex-shrink-0" />
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as 'all' | 'nature' | 'culture' | 'parks')}
                  className={`px-4 py-2 text-sm font-medium transition-all whitespace-nowrap ${activeCategory === cat.id
                    ? 'bg-forest text-paper'
                    : 'bg-muted text-ink hover:bg-muted/80'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Attractions List */}
      <section className="py-16 md:py-24 px-4 bg-paper">
        <div className="max-w-6xl mx-auto space-y-20">
          {filteredAttractions.map((attr, idx) => (
            <article key={attr.id} className="grid md:grid-cols-2 gap-12 items-center">
              {/* Alternate layout for visual interest */}
              {idx % 2 === 0 ? (
                <>
                  {/* Image on Left */}
                  <div className="w-full">
                    <img
                      src={attr.image || "/placeholder.svg"}
                      alt={attr.title}
                      className="w-full h-auto shadow-2xl"
                    />
                  </div>
                  {/* Text on Right */}
                  <div>
                    <h2 className="text-4xl font-serif text-ink mb-4">{attr.title}</h2>
                    <p className="text-muted-foreground text-sm uppercase tracking-wide mb-4">
                      {attr.category}
                    </p>
                    <p className="text-lg text-ink leading-relaxed mb-6">{attr.details}</p>
                    <a
                      href={`/attractions/${attr.id}`}
                      className="group relative inline-block px-6 py-3 border-2 border-forest text-forest uppercase font-mono text-[10px] tracking-[0.2em] overflow-hidden transition-all duration-300"
                    >
                      <span className="absolute inset-0 bg-forest origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out" />
                      <span className="relative z-10 group-hover:text-paper transition-colors duration-300">Learn More</span>
                    </a>
                  </div>
                </>
              ) : (
                <>
                  {/* Text on Left */}
                  <div>
                    <h2 className="text-4xl font-serif text-ink mb-4">{attr.title}</h2>
                    <p className="text-muted-foreground text-sm uppercase tracking-wide mb-4">
                      {attr.category}
                    </p>
                    <p className="text-lg text-ink leading-relaxed mb-6">{attr.details}</p>
                    <a
                      href={`/attractions/${attr.id}`}
                      className="group relative inline-block px-6 py-3 border-2 border-forest text-forest uppercase font-mono text-[10px] tracking-[0.2em] overflow-hidden transition-all duration-300"
                    >
                      <span className="absolute inset-0 bg-forest origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out" />
                      <span className="relative z-10 group-hover:text-paper transition-colors duration-300">Learn More</span>
                    </a>
                  </div>
                  {/* Image on Right */}
                  <div className="w-full">
                    <img
                      src={attr.image || "/placeholder.svg"}
                      alt={attr.title}
                      className="w-full h-auto shadow-2xl"
                    />
                  </div>
                </>
              )}
            </article>
          ))}
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
