'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Globe } from 'lucide-react'
import { usePathname } from 'next/navigation'

function Weather() {
  const [weatherData, setWeatherData] = useState<any>(null)

  useEffect(() => {
    fetch('/api/weather')
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch((err) => console.error('Client weather fetch failed:', err))
  }, [])

  if (!weatherData) return <div className="text-base font-mono text-paper/60 tracking-wider">Loading...</div>

  return (
    <div className="flex items-center gap-3 bg-paper/5 px-4 py-1.5 rounded-full border border-paper/10">
      <div className="relative w-8 h-8 flex-shrink-0">
        <Image
          src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt={weatherData.description}
          fill
          className="object-contain"
          priority={false}
        />
      </div>
      <div className="text-sm font-mono text-paper font-bold tracking-[0.1em] flex items-center gap-2">
        <span>{weatherData.temp}°C</span>
        <span className="hidden md:inline opacity-60 font-medium border-l border-paper/20 pl-2">
          {weatherData.description}
        </span>
      </div>
    </div>
  )
}

const menuItems = [
  {
    label: 'Explore',
    href: '#',
    submenu: [
      { label: 'Home', href: '/' },
      { label: 'Attractions', href: '/attractions' },
      { label: 'History & Culture', href: '/history' },
    ],
  },
  {
    label: 'Plan Your Visit',
    href: '#',
    submenu: [
      { label: 'Services', href: '/services' },
      { label: 'Events', href: '/events' },
      { label: 'Travel Requirements', href: '/travel-requirements' },
      { label: 'Direct Flights', href: '/direct-flights' },
      { label: 'Stopover', href: '/stopover' },
    ],
  },
]


export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [mobileOpen])

  return (
    <header className={`${isHomePage ? 'absolute' : 'sticky top-0'} left-0 right-0 z-50`}>
      <div className={`border-b border-paper/10 ${isHomePage ? 'bg-lakeBlue/20 backdrop-blur-md' : 'bg-forest'}`}>
        <div className="mx-auto max-w-full px-6 md:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Left side: Logo + Primary Menu */}
            <div className="flex items-center gap-10">
              <Link
                href="/"
                className="flex items-center transition-all hover:opacity-80"
              >
                <Image
                  src="/images/logo.png"
                  alt="Arba Minch Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </Link>

              {/* Primary Menu (Desktop) */}
              <div className="hidden lg:flex items-center gap-8">
                {menuItems.map((item) => (
                  <div key={item.label} className="relative group">
                    <button className="font-mono text-sm tracking-[0.15em] text-paper uppercase">
                      {item.label}
                    </button>
                    {/* Desktop Dropdown */}
                    <div className="absolute left-0 mt-0 w-48 bg-ink/90 backdrop-blur-xl border border-paper/10 rounded-sm shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3 z-50">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-6 py-2 text-xs uppercase tracking-wider text-paper/70 hover:bg-paper/10 hover:text-paper transition-colors"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Secondary Links + Weather/Lang */}
            <div className="hidden lg:flex items-center gap-10">
              <div className="flex items-center gap-6 border-r border-paper/10 pr-10">
                <Link href="/blog" className="font-mono text-sm tracking-[0.15em] text-paper hover:text-paper/80 transition-colors uppercase">
                  Blog
                </Link>
                <Link href="/contact" className="font-mono text-sm tracking-[0.15em] text-paper hover:text-paper/80 transition-colors uppercase">
                  Contact
                </Link>
              </div>

              <div className="flex items-center gap-8">
                <Weather />
                <button className="flex items-center gap-2 font-mono text-sm tracking-[0.15em] text-paper hover:text-paper/80 transition-colors">
                  <Globe size={16} />
                  EN
                </button>
              </div>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-paper hover:text-paper/80 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-ink/60 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm bg-ink border-l border-paper/10 overflow-y-auto lg:hidden shadow-2xl animate-in slide-in-from-right duration-500">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-paper/10">
            <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
              <div className="relative w-10 h-10">
                <Image
                  src="/images/fav.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-serif italic text-paper tracking-wider">Arba Minch</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-paper/5 text-paper hover:bg-paper/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="px-6 py-10 space-y-10">
            {menuItems.map((item) => (
              <div key={item.label} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-4 bg-forest/40" />
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40">
                    {item.label}
                  </h3>
                </div>
                <div className="grid gap-4 pl-8">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.label}
                      href={subitem.href}
                      className="group flex items-center justify-between font-serif text-xl text-paper/80 hover:text-paper transition-all"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="italic tracking-wide">{subitem.label}</span>
                      <span className="text-[10px] font-mono text-paper/20 group-hover:text-forest transition-colors translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 duration-300">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Extra Links & Utility */}
            <div className="pt-10 border-t border-paper/10 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/blog"
                  className="px-4 py-4 bg-paper/5 border border-paper/5 rounded-sm text-center font-mono text-[10px] uppercase tracking-widest text-paper/70 hover:bg-paper/10 hover:border-paper/20 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-4 bg-paper/5 border border-paper/5 rounded-sm text-center font-mono text-[10px] uppercase tracking-widest text-paper/70 hover:bg-paper/10 hover:border-paper/20 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>
              </div>

              <div className="pt-4 flex flex-col items-center gap-6">
                <Weather />
                <button className="flex items-center gap-3 px-8 py-3 bg-forest text-paper rounded-full font-mono text-[10px] uppercase tracking-widest hover:bg-forest/90 transition-all">
                  <Globe size={14} className="animate-pulse" />
                  <span>Language: EN</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Quote */}
          <div className="p-10 mt-auto opacity-20 group">
            <p className="italic font-serif text-paper text-sm text-center tracking-widest group-hover:opacity-100 transition-opacity">
              Forty Springs, Infinite Wonder.
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
