import { Hero } from "@/components/hero"
import { ImageSlider } from "@/components/image-slider"
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Quick Navigation Highlights */}
      <section className="py-16 md:py-24 px-4 bg-paper">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-ink mb-12 text-center">
            Discover Arba Minch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Attractions Preview */}
            <Link href="/attractions" className="group">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 relative">
                <ImageSlider prefix="attr" count={6} />
              </div>
              <h3 className="text-xl font-serif text-ink group-hover:text-clay transition-colors">
                Attractions
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Explore national parks, lakes, and natural wonders
              </p>
            </Link>

            {/* History Preview */}
            <Link href="/history" className="group">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 relative">
                <ImageSlider prefix="his" count={6} />
              </div>
              <h3 className="text-xl font-serif text-ink group-hover:text-clay transition-colors">
                History & Culture
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Learn about the Gamo people and traditions
              </p>
            </Link>

            {/* Services Preview */}
            <Link href="/services" className="group">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 relative">
                <ImageSlider prefix="serv" count={6} />
              </div>
              <h3 className="text-xl font-serif text-ink group-hover:text-clay transition-colors">
                Services & Stay
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Find hotels, guides, and travel services
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events Preview */}
      <section className="relative pt-16 pb-8 px-6 md:px-12 overflow-hidden" style={{ backgroundColor: '#3D4C3E' }}>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-[280px] max-w-[1800px] mx-auto">

          {/* Left: Text */}
          <div className="w-full md:w-1/5 z-20 text-center md:text-left mb-12 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-serif text-paper mb-4 leading-tight">
              Upcoming <br className="hidden md:block" /> Events
            </h2>
            <p className="text-paper/60 font-mono text-[10px] tracking-[0.3em] uppercase">
              Join us for traditions, <br className="hidden md:block" /> festivals, and culture
            </p>
          </div>

          {/* Center: Overlapping Images - Spread out horizontally */}
          <div className="relative flex-1 h-[280px] w-full mx-8 hidden lg:block">
            {/* Image 1 - Far left */}
            <div className="absolute left-[-5%] top-[10%] w-[22%] aspect-[3/4] z-10 border-[8px] border-paper/10 shadow-2xl rotate-[-4deg]">
              <img src="/images/ev1.jpg" alt="Event 1" className="w-full h-full object-cover" />
            </div>
            {/* Image 2 - High, left-center */}
            <div className="absolute left-[15%] top-[-10%] w-[18%] aspect-[2/3] z-20 border-[6px] border-paper/20 shadow-2xl rotate-[2deg]">
              <img src="/images/ev2.jpg" alt="Event 2" className="w-full h-full object-cover" />
            </div>
            {/* Image 3 - Wide, center */}
            <div className="absolute left-[30%] top-[15%] w-[32%] aspect-[4/3] z-30 border-[8px] border-paper/15 shadow-2xl rotate-[-1deg]">
              <img src="/images/ev3.jpg" alt="Event 3" className="w-full h-full object-cover" />
            </div>
            {/* Image 4 - Small, right-center */}
            <div className="absolute left-[58%] top-[-5%] w-[18%] aspect-[1/1] z-20 border-[6px] border-paper/10 shadow-2xl rotate-[5deg]">
              <img src="/images/ev4.jpg" alt="Event 4" className="w-full h-full object-cover" />
            </div>
            {/* Image 5 - Wide, far right */}
            <div className="absolute left-[72%] top-[20%] w-[30%] aspect-[3/2] z-10 border-[8px] border-paper/20 shadow-2xl rotate-[-2deg]">
              <img src="/images/ev5.jpg" alt="Event 5" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Button */}
          <div className="w-full md:w-1/5 z-20 flex justify-center md:justify-end">
            <Link href="/events" className="group flex items-center gap-4 px-6 py-4 border border-paper/30 text-paper hover:border-paper transition-all font-mono text-[10px] tracking-[0.3em] uppercase whitespace-nowrap">
              <span>View Calendar</span>
              <div className="w-8 h-[1px] bg-paper transform transition-transform group-hover:scale-x-150 origin-right" />
            </Link>
          </div>

        </div>

        {/* Decorative background texture or shape if needed */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-1/2 h-full border border-paper/20 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-5%] w-1/2 h-full border border-paper/20 rounded-full blur-3xl" />
        </div>
      </section>
    </>
  )
}
