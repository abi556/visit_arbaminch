'use client'

import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-4 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif text-ink mb-6">
            Get in <span className="italic">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Have questions about your upcoming trip to Arba Minch? Our team is here to help you plan an unforgettable experience.
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
                <h2 className="text-2xl font-serif text-ink mb-8 uppercase tracking-widest text-sm opacity-60">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-muted/20 rounded-full text-forest">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-1">Email</h3>
                      <p className="text-lg text-ink">hello@visitarbaminch.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-muted/20 rounded-full text-forest">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-1">Phone</h3>
                      <p className="text-lg text-ink">+251 911 234 567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-muted/20 rounded-full text-forest">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-1">Office</h3>
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
            <div className="bg-muted/5 p-8 md:p-12 rounded-2xl border border-muted/20 shadow-sm">
              <h2 className="text-3xl font-serif text-ink mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest opacity-40">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-muted focus:border-forest outline-none py-2 text-ink transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest opacity-40">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-muted focus:border-forest outline-none py-2 text-ink transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest opacity-40">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-muted focus:border-forest outline-none py-2 text-ink transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest opacity-40">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-muted focus:border-forest outline-none py-2 text-ink transition-colors resize-none"
                    placeholder="Tell us about your trip..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-forest text-paper py-4 rounded-sm hover:bg-forest/90 transition-all font-mono text-[10px] uppercase tracking-[0.3em] mt-8"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
