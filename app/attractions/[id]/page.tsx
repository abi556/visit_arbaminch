'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

const attractionsData = {
  '1': {
    title: 'Nech Sar National Park',
    description: 'A pristine sanctuary bridging two lakes with diverse wildlife.',
    image: '/images/attr1.jpg',
    details: 'Home to zebras, antelopes, and over 350 bird species, Nech Sar is one of Ethiopia\'s most scenic national parks. The park sits on a narrow isthmus between Lake Abaya and Lake Chamo.',
    fullContent: `Nech Sar National Park is a premier wildlife destination in southern Ethiopia. The name means "White Lake" in Amharic, referring to the stunning landscape. The park encompasses the narrow strip of land between two major lakes, creating a unique ecosystem.

Wildlife enthusiasts will find abundant species including Hamadryas baboons, antelopes, and numerous bird species. The park is particularly known for its birdwatching opportunities, with over 350 species recorded.

Best time to visit: October to March (dry season)
Entry fee: Included in national park permits
Activities: Game drives, bird watching, boat tours`,
  },
  '2': {
    title: 'Crocodile Market of Lake Chamo',
    description: 'Witness massive Nile crocodiles basking on the sandy shores.',
    image: '/images/attr5.jpg',
    details: 'One of the largest crocodile populations in Africa, Lake Chamo\'s crocodile market offers an unforgettable experience. Boat tours reveal the prehistoric reptiles in their natural habitat.',
    fullContent: `Lake Chamo hosts one of Africa's largest concentrations of Nile crocodiles. These ancient reptiles can grow up to 6 meters long and weigh over 1,000 kg. The crocodile market refers to the traditional hunting and trading grounds along the lakeshore.

Visitors can safely observe crocodiles from specially arranged boat tours. Local guides provide fascinating insights into crocodile behavior and the traditional relationship between the Gamo people and these magnificent creatures.

Best time to visit: November to February
Tour duration: 2-3 hours
What to bring: Sun protection, camera, binoculars`,
  },
  '3': {
    title: 'Dorze Village & Weaving',
    description: 'Discover the traditional beehive houses and ancient weaving crafts.',
    image: '/images/drz.jpg',
    details: 'The Dorze people are master weavers, known for their intricate cotton textiles. Visit their iconic beehive-shaped huts made from bamboo and enset (false banana) leaves.',
    fullContent: `The Dorze people live in the highlands surrounding Arba Minch and are renowned for their textile weaving traditions. Their distinctive beehive-shaped houses are architectural marvels, constructed entirely from natural materials.

Visitors can meet weaving families, observe the traditional loom-work process, and purchase authentic handwoven textiles. The Dorze maintain their cultural practices while welcoming respectful visitors to their villages.

Highlights:
- Meet local weaving families
- Observe traditional loom techniques
- Purchase authentic textiles
- Learn about daily village life
- Photography opportunities

Cultural sensitivity: Please ask permission before photographing people.`,
  },
  '4': {
    title: 'Forty Springs (Arba Minch)',
    description: 'Natural springs flowing from volcanic rock through lush forest.',
    image: '/images/fty.jpg',
    details: 'The 40 Springs feed into the Omo River, creating a verdant oasis. The cool, clear waters provide relief and create beautiful natural pools.',
    fullContent: `The Arba Minch springs (arba means 40, minch means springs in the local Ari language) are natural water sources that emerge from underground volcanic springs. These springs create a microclimate of lush greenery in the otherwise arid landscape.

The springs flow through a groundwater forest, supporting unique vegetation and wildlife. The cool, mineral-rich waters eventually feed into the Omo River system. Visitors can swim in designated areas and enjoy the natural pools formed by the springs.

Activities:
- Nature walks through the forest
- Swimming in natural pools
- Photography
- Picnicking
- Bird watching

Facilities: Basic facilities available; bring your own supplies`,
  },
  '5': {
    title: 'Lake Abaya',
    description: 'Ethiopia\'s largest lake with stunning sunset views.',
    image: '/images/abay.jpg',
    details: 'The reddish-brown waters of Lake Abaya are home to hippopotamuses and numerous fish species. Sunset boat rides offer unforgettable vistas.',
    fullContent: `Lake Abaya is Ethiopia's largest lake, known for its distinctive reddish-brown coloration caused by volcanic sediment. The lake is home to a significant hippopotamus population and is an important freshwater fishery.

The landscape surrounding the lake is dramatic, with volcanic formations creating stunning views. The sunsets over Lake Abaya are particularly magnificent, with the sun reflecting off the colored waters.

Activities:
- Boat tours and fishing trips
- Sunset viewing
- Wildlife observation (hippos, birds)
- Photography
- Camping on the shores

Best time: October to March
Tour operators: Available in Arba Minch town`,
  },
  '6': {
    title: 'Arba Minch Crocodile Farm',
    description: 'Educational facility showcasing crocodile breeding and conservation.',
    image: '/images/ranch.jpg',
    details: 'Learn about crocodile biology and conservation efforts at this working farm. Support local education and wildlife protection initiatives.',
    fullContent: `The Arba Minch Crocodile Farm is an educational and conservation facility dedicated to breeding Nile crocodiles and promoting sustainable practices. The farm provides employment for local residents and educates visitors about crocodile biology and behavior.

Visitors can observe crocodiles at various life stages, from hatchlings to adult breeding stock. Staff provide guided tours explaining the breeding process, egg incubation, and conservation efforts.

Exhibits:
- Hatchery facility
- Breeding pools
- Educational displays
- Gift shop with crocodile products
- Guided tours available

Entry fee: Modest fee supports conservation efforts
Tour duration: 1-2 hours
Best time: Year-round`,
  },
}

export default function AttractionDetailPage() {
  const params = useParams()
  const id = params.id as string
  const attraction = attractionsData[id as keyof typeof attractionsData]

  if (!attraction) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-ink mb-4">Attraction Not Found</h1>
          <Link href="/attractions" className="text-forest hover:text-forest/80">
            Back to Attractions
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Image */}
      <div className="relative h-80 md:h-[400px] w-full overflow-hidden">
        <img
          src={attraction.image || "/placeholder.svg"}
          alt={attraction.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/attractions"
            className="inline-flex items-center gap-2 text-forest hover:text-forest/80 transition-colors mb-8"
          >
            <ArrowLeft size={20} /> Back to Attractions
          </Link>

          <h1 className="text-5xl md:text-6xl font-serif text-ink mb-6">
            {attraction.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-8 whitespace-pre-line">
            {attraction.fullContent}
          </p>

          {/* Booking CTA */}
          <div className="mt-12 pt-8 border-t border-muted">
            <h2 className="text-2xl font-serif text-ink mb-4">Ready to Visit?</h2>
            <p className="text-muted-foreground mb-6">
              Check our travel services and booking options to plan your visit to {attraction.title}.
            </p>
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-forest text-paper font-medium hover:bg-forest/90 transition-colors"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
