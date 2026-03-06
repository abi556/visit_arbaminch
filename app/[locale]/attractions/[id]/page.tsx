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
  '7': {
    title: 'Mount Gughe',
    description: 'The highest point in the Gamo Highlands and 4th highest place in Ethiopia.',
    image: '/images/guge.jpg',
    details: 'Rising to over 4,200 metres, Mount Gughe stands as the fourth highest point in Ethiopia and one of the most prominent summits in Africa. The mountain dominates the landscape, offering breathtaking panoramic views of the Rift Valley lakes.',
    fullContent: `Mount Gughe is the crown jewel of the Gamo Highlands, rising to an elevation of approximately 4,200 metres above sea level. It is recognized as the fourth highest peak in Ethiopia and offers some of the most spectacular alpine scenery in East Africa.

The mountain is characterized by its mist-covered peaks, ancient terraced slopes, and unique afro-alpine vegetation. The surrounding Gamo people have developed a sophisticated agricultural system that has sustained them for centuries in these high altitudes.

Highlights:
- Breathtaking panoramic views of Lakes Abaya and Chamo
- Ancient terraced farming landscapes
- Unique afro-alpine flora and fauna
- Cool highland climate
- Cultural encounters with the Gamo people

Best time to visit: November to February (clear views)
Trekking difficulty: Moderate to challenging
What to bring: Warm clothing, sturdy hiking boots, water, and sun protection`,
  },
  '8': {
    title: 'Yo Maskala',
    description: 'The vibrant yearly festival of the Gamo people.',
    image: '/images/yom.jpg',
    details: 'Yo Maskala is the most vibrant and culturally significant festival of the Gamo people, marking their traditional New Year. The celebration involves rhythmic songs, traditional dances, and the lighting of the Demera bonfire.',
    fullContent: `Yo Maskala is the most important cultural and religious festival for the Gamo people of Arba Minch and the surrounding highlands. It marks the Gamo New Year and coincides with the Ethiopian celebration of Meskel, commemorating the discovery of the True Cross.

The festival is a magnificent display of Gamo heritage, featuring the iconic 'Yo' songs and dances. Families gather to celebrate reconciliation, community, and the promise of a new year. The centerpiece of the event is the lighting of the Demera, a massive bonfire that symbolizes the light of faith and community.

Festival Highlights:
- Traditional 'Yo' chanting and dancing
- Lighting of the ceremonial Demera bonfire
- Vibrant traditional costumes and jewelry
- Community feasts and traditional foods
- Reconciliation and blessing ceremonies

Date: Late September (typically September 27th or 28th)
Location: Arba Minch and Gamo highland villages
Duration: Several days of celebration`,
  },
  '9': {
    title: 'Maze National Park',
    description: 'A vital sanctuary for the endemic Swayne\'s Hartebeest.',
    image: '/images/maze.jpg',
    details: 'Maze National Park is a 210-square-kilometer wildlife haven named after the Maze River. It is famous for hosting one of the last remaining populations of the endangered Swayne\'s Hartebeest and the mysterious Wonja Stone Caves.',
    fullContent: `Established in 2005, Maze National Park is a hidden gem in the Southern Nations, Nationalities, and Peoples' Region. The park is named after the Maze River that flows through it, creating a diverse ecosystem that supports a wide range of wildlife.

The park's primary significance lies in its role as a sanctuary for the endangered Swayne's Hartebeest, a subspecies of antelope found nowhere else on earth but Ethiopia. Beyond wildlife, the park features fascinatng historical sites like the Wonja Stone Caves and natural wonders like the Bilbo hot springs.

Highlights:
- Swayne's Hartebeest observation
- Exploring the Wonja Stone Caves
- Birdwatching (over 130 species recorded)
- Scenic views of the Maze River
- Cultural insights into local legends of the Wonja Caves

Best time to visit: December to February (dry season)
Entry fee: Standard national park fees apply
Activities: Wildlife viewing, cave exploration, birdwatching`,
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
