'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Globe } from 'lucide-react'
import { usePathname } from 'next/navigation'

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
  const [weather, setWeather] = useState('25°C Partly Cloudy')

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
                <div className="text-base font-mono text-paper/60">{weather}</div>
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
        <div className="fixed inset-0 z-40 lg:hidden bg-ink/10 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-paper border-l border-muted overflow-y-auto lg:hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-muted">
            <Link href="/" className="text-lg font-semibold text-ink" onClick={() => setMobileOpen(false)}>
              Arba Minch
            </Link>
            <button onClick={() => setMobileOpen(false)} className="text-ink hover:text-clay transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="py-4">
            {menuItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => setExpandedMobile(expandedMobile === item.label ? null : item.label)}
                  className="w-full px-4 py-3 text-left font-medium text-ink hover:bg-muted transition-colors flex items-center justify-between"
                >
                  {item.label}
                  <span className={`transition-transform ${expandedMobile === item.label ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {expandedMobile === item.label && (
                  <div className="bg-muted/30 py-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-8 py-2 text-sm text-ink hover:text-clay transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>


        </div>
      )}
    </header>
  )
}
