import Image from 'next/image'
import Link from 'next/link'

interface TimelineEvent {
  year: string
  title: string
  description: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 'c. 10,000 BCE',
    title: 'Ancient Highland Heritage',
    description:
      'The Gamo Highlands trace their roots back approximately 10,000 years, where early inhabitants developed advanced terracing and agroforestry systems that sustained high-altitude agriculture for millennia.',
  },
  {
    year: 'c. 200 BCE',
    title: 'Lakeside Settlements',
    description:
      'Evidence from archaeological surveys indicates that early communities began settling around the fertile shores of Lake Abaya and Lake Chamo, utilizing the abundance of water and fish.',
  },
  {
    year: 'c. 1300 CE',
    title: 'Rise of the Gamo Kingdoms',
    description:
      "The Gamo people established a sophisticated system of kingdoms and chieftaincies in the highlands surrounding modern-day Arba Minch. Their democratic assemblies ('Dulata') and unique cultural traditions laid the foundation for the region's identity.",
  },
  {
    year: '16th Century',
    title: 'Highland Resilience',
    description:
      'During the period of the Ahmed Gragn invasion and the subsequent Oromo migrations, the Gamo Highlands served as a vital refuge. The rugged terrain and strong social organization allowed communities to preserve their traditions while integrating new cultural influences.',
  },
  {
    year: '1962',
    title: 'Modern City Foundation',
    description:
      "Arba Minch, meaning 'Forty Springs', was officially established as the administrative center of the Gamo-Gofa province, replacing Chencha due to its strategic location and plentiful water sources.",
  },
  {
    year: '1974',
    title: 'Nech Sar National Park',
    description:
      "The park was formally gazetted to protect the 'Bridge of God' isthmus and its unique wildlife, including the white grass plains that give the park its name.",
  },
  {
    year: '1986',
    title: 'Arba Minch University',
    description:
      'Founded as the Arba Minch Water Technology Institute, it established the city as a center for higher education and specialized research in water resources and engineering.',
  },
  {
    year: '2005',
    title: 'Maze National Park',
    description:
      "Established to protect the endangered Swayne's Hartebeest, this park added to the region's status as a critical biodiversity hotspot in the Rift Valley.",
  },
  {
    year: '2010s–Present',
    title: 'Tourism Renaissance',
    description:
      "Arba Minch has emerged as one of Ethiopia's premier ecotourism destinations. Improved infrastructure, new lodges, and growing international awareness have made the city a gateway to the Omo Valley and the lakes of the Rift Valley.",
  },
]

const cultureArticles = [
  {
    title: 'The Dorze People: Masters of Highland Architecture',
    image: '/images/his5.jpg',
    excerpt:
      'Renowned for their exceptional weaving and unique beehive-shaped houses that can stand up to 12 meters tall.',
    content: `The Dorze are master architects and weavers whose culture is deeply rooted in the Gamo Highlands. Their iconic beehive-shaped huts are constructed from bamboo and enset (false banana) leaves, reaching heights of 12 meters. A unique feature of these structures is their portability; as termites eat the base, the entire house can be lifted and moved, progressively becoming shorter over its 80-year lifespan.

Beyond architecture, the Dorze are Ethiopia's most celebrated weavers. Historically, their 'shamma' (cotton cloth) gained such fame that they came to dominate the textile trade in Addis Ababa following the 19th-century imperial expansion. This craft is a 'learning-by-doing' tradition passed down through generations of boys.`,
  },
  {
    title: 'Gamo Indigenous Democracy: The Woga and Dubusha',
    image: '/images/his2.jpg',
    excerpt:
      'A sophisticated system of traditional laws and assemblies that has guided social harmony for centuries.',
    content: `The Gamo people practice a form of indigenous democracy anchored by the 'Woga' (traditional law) and governed through 'Dulata' (assemblies). These assemblies take place in 'Dubusha'—sacred public spaces or meadows that serve as forums for conflict resolution, social dialogue, and spiritual ceremonies.

This social system emphasizes group solidarity and environmental stewardship. Ritual leaders and elders, known for their wisdom in interpreting the Woga, manage the ecosystem through rituals and councils that protect sacred forests and springs. This harmonious balance between human needs and nature is a cornerstone of Gamo identity.`,
  },
  {
    title: 'Yo Maskala: The Gamo New Year',
    image: '/images/his3.jpg',
    excerpt:
      'A vibrant celebration of renewal, reconciliation, and heritage that transforms the landscape every September.',
    content: `Yo Maskala is the most significant yearly festival for the Gamo people, marking their traditional New Year and the celebration of the True Cross. It is a time for reconciliation, where community bonds are renewed and historical grievances are settled through the guidance of elders.

The festival is characterized by rhythmic 'Yo' chanting, traditional dances, and the lighting of the 'Demera' bonfire. Men and women dress in their finest hand-woven Gamo textiles, creating a sea of white and vibrant patterns. The celebration is not just religious but a profound expression of Gamo resilience and cultural continuity.`,
  },
]

// Timeline Section

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-paper overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/histc.jpg"
            alt="History of Arba Minch"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-paper">History & Culture</h1>
          <p className="text-xs md:text-sm font-mono font-bold text-paper max-w-2xl leading-relaxed uppercase tracking-[0.2em]">
            Discover the rich heritage of the Gamo people and the Rift Valley.
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
                  <div className="w-6 h-6 bg-forest border-4 border-paper shadow-sm" />
                </div>

                {/* Content */}
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="bg-muted/50 p-6">
                    <span className="inline-block px-3 py-1 bg-forest text-paper text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
                      {event.year}
                    </span>
                    <h3 className="text-2xl font-serif text-ink mb-3">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
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
              <div className="aspect-video md:aspect-square overflow-hidden shadow-xl">
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
                    <p key={pIdx}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 bg-forest text-paper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">Experience the Culture</h2>
          <p className="text-lg mb-10 opacity-80 font-mono text-sm tracking-wide">
            Join guided cultural tours to meet local communities and learn traditions firsthand.
          </p>
          <Link
            href="/services"
            className="group relative inline-block px-10 py-4 border-2 border-paper text-paper uppercase font-mono text-[10px] tracking-[0.3em] overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-paper origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out" />
            <span className="relative z-10 group-hover:text-forest transition-colors duration-300">Find a Local Guide</span>
          </Link>
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
