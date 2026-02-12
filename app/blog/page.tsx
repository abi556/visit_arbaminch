import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, Compass } from 'lucide-react'

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: 'The Hidden Springs of Arba Minch',
      excerpt: 'Discover the legendary 40 springs that gave Arba Minch its name and why they\'re essential to the ecosystem.',
      date: 'Feb 2024',
      author: 'Sarah Adventure',
      category: 'Nature',
    },
    {
      id: 2,
      title: 'Dorze Weaving: A Living Tradition',
      excerpt: 'Meet the master weavers of Dorze village and learn how traditional Ethiopian cotton weaving connects generations.',
      date: 'Jan 2024',
      author: 'Elena Culture',
      category: 'Culture',
    },
    {
      id: 3,
      title: 'Lake Chamo\'s Crocodile Market',
      excerpt: 'An insider\'s look at one of Ethiopia\'s most unique markets where crocodile hunting traditions persist.',
      date: 'Dec 2023',
      author: 'Marcus Explorer',
      category: 'Exploration',
    },
  ]

  return (
    <div className="min-h-screen bg-paper flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-paper overflow-hidden shrink-0">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blg.jpg"
            alt="Arba Minch Travel Blog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-paper">Travel Blog</h1>
          <p className="text-xs md:text-sm font-mono font-bold text-paper max-w-2xl leading-relaxed uppercase tracking-[0.2em]">
            Stories, insights, and guides from Arba Minch and the Rift Valley.
          </p>
        </div>
      </section>

      {/* Content Section with Blur Overlay */}
      <section className="relative flex-1 py-24 px-4 overflow-hidden">
        {/* Background Content (Blurred) */}
        <div className="max-w-4xl mx-auto blur-[2px] opacity-60 select-none pointer-events-none">
          <div className="grid gap-12">
            {articles.map((article) => (
              <article key={article.id} className="border-b border-muted pb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono tracking-widest text-forest uppercase font-bold">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-ink mb-4">{article.title}</h2>
                <p className="text-ink/60 text-lg leading-relaxed mb-6">{article.excerpt}</p>
                <div className="inline-block px-8 py-3 bg-forest/20 text-forest border border-forest/30 font-mono text-[10px] uppercase tracking-[0.2em] rounded-sm">
                  Read Article
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Professional "Coming Soon" Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center p-6 bg-paper/20 backdrop-blur-[1px]">
          <div className="max-w-md w-full bg-paper/80 backdrop-blur-xl border border-forest/20 p-12 rounded-2xl shadow-2xl text-center transform transition-all hover:scale-[1.02] duration-500 -translate-y-12 md:-translate-y-20">
            <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-forest/20 text-forest animate-pulse">
              <Compass size={32} strokeWidth={1.5} />
            </div>

            <h2 className="text-sm font-mono font-bold text-forest uppercase tracking-[0.3em] mb-4">
              Exploration in Progress
            </h2>

            <h3 className="text-3xl font-serif text-ink mb-6 leading-tight">
              Our travel stories are being <span className="italic">curated</span>
            </h3>

            <p className="text-ink/60 leading-relaxed mb-8 font-sans">
              We are carefully gathering the most authentic experiences from Arba Minch to provide you with the ultimate guide.
            </p>

            <Link
              href="/"
              className="inline-block px-10 py-4 bg-forest text-paper font-mono text-[10px] uppercase tracking-[0.3em] hover:bg-forest/90 transition-all rounded-sm shadow-lg shadow-forest/20"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Standardized Back to Home Footer */}
      <section className="py-12 px-4 border-t border-muted bg-paper shrink-0">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-forest font-medium hover:text-forest/80 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
