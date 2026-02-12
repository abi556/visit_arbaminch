import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-paper overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact.jpg"
            alt="Contact Arba Minch Tourism"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-paper">Contact Us</h1>
          <p className="text-xs md:text-sm font-mono font-bold text-paper max-w-2xl leading-relaxed uppercase tracking-[0.2em]">
            Have questions about your upcoming trip to Arba Minch? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 px-4 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="font-mono font-bold text-sm text-forest mb-8 uppercase tracking-[0.2em]">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-muted/20 rounded-full text-forest">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-90 mb-1">Email</h3>
                      <a
                        href="mailto:hello@visitarbaminch.com"
                        className="text-lg text-ink hover:text-forest transition-colors transition-all"
                      >
                        hello@visitarbaminch.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-muted/20 rounded-full text-forest">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-90 mb-1">Phone</h3>
                      <a
                        href="tel:+251911234567"
                        className="text-lg text-ink hover:text-forest transition-colors transition-all"
                      >
                        +251 911 234 567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-muted/20 rounded-full text-forest">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-90 mb-1">Office</h3>
                      <p className="text-lg text-ink">Main Street, Arba Minch,<br />Gamo Zone, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-muted">
                <h2 className="text-2xl font-serif text-ink mb-6">Social</h2>
                <div className="flex gap-6">
                  {['Instagram', 'Twitter', 'Facebook'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-sm font-mono uppercase tracking-widest text-forest hover:opacity-70 transition-opacity"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#3D4C3E]/15 p-8 md:p-12 rounded-2xl border border-forest shadow-sm">
              <h2 className="text-3xl font-serif text-ink mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest opacity-90 text-forest">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-forest/20 focus:border-forest outline-none py-2 text-ink transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest opacity-90 text-forest">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-forest/20 focus:border-forest outline-none py-2 text-ink transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest opacity-90 text-forest">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-forest/20 focus:border-forest outline-none py-2 text-ink transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest opacity-90 text-forest">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-forest/20 focus:border-forest outline-none py-2 text-ink transition-colors resize-none"
                    placeholder="Tell us about your trip..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-forest text-paper py-4 rounded-sm hover:bg-forest/90 transition-all font-mono text-[10px] uppercase tracking-[0.3em] mt-8 shadow-md"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
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
