"use client"

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ContactPage() {
  const [state, setState] = useState({
    submitting: false,
    succeeded: false,
    error: ""
  })

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState({ ...state, submitting: true, error: "" })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setState({ submitting: false, succeeded: true, error: "" })
        setFormData({ firstName: "", lastName: "", email: "", message: "" })
      } else {
        setState({ submitting: false, succeeded: false, error: "Something went wrong. Please try again." })
      }
    } catch (err) {
      setState({ submitting: false, succeeded: false, error: "Network error. Please try again." })
    }
  }

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
                        href="mailto:hello@visitarbaminch.et"
                        className="text-lg text-ink hover:text-forest transition-colors transition-all"
                      >
                        hello@visitarbaminch.et
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
                        href="tel:+251929501645"
                        className="text-lg text-ink hover:text-forest transition-colors transition-all"
                      >
                        +251 929 501 645
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
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-in zoom-in-95 duration-500">
                  <CheckCircle2 size={64} className="text-forest mb-6" />
                  <h2 className="text-3xl font-serif text-ink mb-4">Message Sent!</h2>
                  <p className="text-ink/60 font-sans max-w-xs">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setState({ ...state, succeeded: false })}
                    className="mt-8 font-mono text-[10px] uppercase tracking-widest text-forest border-b border-forest/30 pb-1 hover:border-forest"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-serif text-ink mb-8">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] uppercase tracking-widest opacity-90 text-forest">First Name</label>
                        <input
                          required
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full bg-transparent border-b border-forest/20 focus:border-forest outline-none py-2 text-ink transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] uppercase tracking-widest opacity-90 text-forest">Last Name</label>
                        <input
                          required
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full bg-transparent border-b border-forest/20 focus:border-forest outline-none py-2 text-ink transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest opacity-90 text-forest">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-forest/20 focus:border-forest outline-none py-2 text-ink transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest opacity-90 text-forest">Message</label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full bg-transparent border-b border-forest/20 focus:border-forest outline-none py-2 text-ink transition-colors resize-none"
                        placeholder="Tell us about your trip..."
                      />
                    </div>

                    {state.error && (
                      <p className="text-red-500 text-xs font-mono">{state.error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full flex items-center justify-center gap-3 bg-forest text-paper py-4 rounded-sm hover:bg-forest/90 transition-all font-mono text-[10px] uppercase tracking-[0.3em] mt-8 shadow-md disabled:opacity-50"
                    >
                      {state.submitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
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
