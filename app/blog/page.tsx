'use client'

import Link from 'next/link'
import { Calendar, User } from 'lucide-react'

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
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-lakeBlue text-paper">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Travel Blog</h1>
          <p className="text-lg md:text-xl text-paper/80">
            Stories, insights, and guides from Arba Minch and the Rift Valley.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="border-b border-muted pb-8 hover:translate-x-1 transition-transform"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-mono tracking-wider text-forest uppercase">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} /> {article.author}
                    </span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif text-ink mb-3">
                  {article.title}
                </h2>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-forest font-medium hover:text-forest/80 transition-colors"
                >
                  Read Article →
                </a>
              </article>
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
