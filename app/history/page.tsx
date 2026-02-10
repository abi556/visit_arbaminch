import Image from 'next/image'

interface TimelineEvent {
  year: string
  title: string
  description: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2000 BCE',
    title: 'Early Settlement',
    description: 'The Rift Valley becomes home to early human communities.',
  },
  {
    year: '1600s',
    title: 'Gamo Kingdom',
    description: 'The Gamo people establish their kingdom in the highlands.',
  },
  {
    year: '1890s',
    title: 'Italian Exploration',
    description: 'European explorers map the Rift Valley and discover its wonders.',
  },
  {
    year: '1960',
    title: 'Independence Era',
    description: 'Modern Arba Minch emerges as a regional center.',
  },
  {
    year: 'Today',
    title: 'Tourism Gateway',
    description: 'Arba Minch becomes Ethiopia\'s premier Rift Valley destination.',
  },
]

const cultureArticles = [
  {
    title: 'The Dorze People: Masters of Weaving',
    image: 'https://images.unsplash.com/photo-1590080876394-cd4628902767?w=800&h=600&fit=crop',
    excerpt:
      'The Dorze people of the highlands are renowned for their intricate cotton weaving techniques, passed down through generations. Their iconic beehive-shaped houses are architectural marvels adapted to the highland climate.',
    content: `The Dorze are one of Ethiopia's most distinctive ethnic groups, known for their exceptional weaving skills and unique architectural heritage. Their traditional beehive-shaped houses, constructed entirely from bamboo and enset (false banana) leaves, represent a perfect adaptation to their mountain environment.

Weaving is central to Dorze culture. The looms, operated primarily by women, create patterns of remarkable complexity. These textiles, featuring geometric designs in white cotton, are both functional and artistic expressions. The process—from spinning raw cotton to the final weave—can take weeks for a single piece.

Visiting a Dorze village offers insight into a way of life that has remained largely unchanged for centuries. The warmth of the people and the preservation of traditional practices make it a cultural jewel worth exploring.`,
  },
  {
    title: 'Gamo Traditions and Music',
    image: 'https://images.unsplash.com/photo-1521730975658-e4c5bfb70c96?w=800&h=600&fit=crop',
    excerpt:
      'Music and dance form the heart of Gamo cultural expression. From ceremonial gatherings to celebrations, rhythmic patterns tell stories of heritage and community bonds.',
    content: `The Gamo people have a rich musical tradition deeply woven into their social fabric. Traditional instruments such as the masinko (a single-stringed fiddle) and various drums create soundscapes that accompany everything from harvests to important rituals.

Gamo music often tells stories of heroic ancestors, love, and the challenges of life in the highlands. The rhythms are complex, layered, and require years of practice to master. Young musicians learn by ear, absorbing patterns and melodies from their elders.

Dance accompanies the music, with specific movements for different occasions. Visitors to Arba Minch may encounter traditional dances at local celebrations and cultural events, offering a glimpse into the joy and expressiveness of Gamo culture.`,
  },
  {
    title: 'Sacred Rituals and Spiritual Life',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop',
    excerpt:
      'Spirituality permeates Gamo life, blending indigenous beliefs with religion. Sacred places and rituals mark important life transitions and seasonal cycles.',
    content: `The Gamo people maintain a spiritual worldview that honors both the sacred landscape and community. Sacred forests, mountains, and water sources hold deep significance in their belief system. Many ceremonies are tied to agricultural cycles, ensuring blessings for crops and livestock.

Important life transitions—birth, adolescence, marriage, and death—are marked by specific rituals that reinforce community bonds and pass cultural knowledge to new generations. These practices, while evolving with modern influences, remain central to Gamo identity.

Understanding these spiritual dimensions provides deeper appreciation for the landscape around Arba Minch and the people who call it home. Many tour guides can offer insights into these practices and the stories behind sacred sites.`,
  },
]

export default function HistoryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-12 md:py-16 px-4 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-ink mb-4">
            History & Culture
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover the rich heritage of the Gamo people and the Rift Valley
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 px-4 bg-paper">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-ink mb-16 text-center">Timeline of Arba Minch</h2>

          <div className="relative space-y-12">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-muted" />

            {timelineEvents.map((event, idx) => (
              <div
                key={idx}
                className={`relative flex gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 -ml-3 mt-2">
                  <div className="w-6 h-6 bg-clay rounded-full border-4 border-paper" />
                </div>

                {/* Content */}
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <p className="text-clay font-semibold mb-2">{event.year}</p>
                    <h3 className="text-2xl font-serif text-ink mb-3">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Articles */}
      <section className="py-16 md:py-24 px-4 bg-muted/5">
        <div className="max-w-5xl mx-auto space-y-20">
          {cultureArticles.map((article, idx) => (
            <article key={idx} className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="aspect-video md:aspect-square overflow-hidden rounded-lg">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-start">
                <h3 className="text-3xl font-serif text-ink mb-4">{article.title}</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-widest mb-6">
                  Culture & Heritage
                </p>
                <div className="prose prose-sm max-w-prose text-ink leading-relaxed space-y-4">
                  {article.content.split('\n\n').map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 bg-clay text-paper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">Experience the Culture</h2>
          <p className="text-lg mb-8 opacity-90">
            Join guided cultural tours to meet local communities and learn traditions firsthand.
          </p>
          <a
            href="/services"
            className="inline-block px-8 py-4 bg-paper text-clay font-medium hover:bg-muted transition-colors"
          >
            Find a Local Guide
          </a>
        </div>
      </section>
    </>
  )
}
