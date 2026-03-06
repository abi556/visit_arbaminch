'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, AlertCircle } from 'lucide-react'

export default function TravelRequirementsPage() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-paper overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/req.jpg"
            alt="Travel Requirements for Arba Minch"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-paper">Travel Requirements</h1>
          <p className="text-xs md:text-sm font-mono font-bold text-paper max-w-2xl leading-relaxed uppercase tracking-[0.2em]">
            Everything you need to know before visiting Arba Minch.
          </p>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Visas */}
          <div>
            <h2 className="text-3xl font-serif text-ink mb-6 flex items-center gap-3">
              <AlertCircle className="text-forest" /> Visa Requirements
            </h2>
            <div className="bg-white border-l-4 border-forest p-6 rounded space-y-4">
              <p>Most visitors to Ethiopia require a visa. Here are the main options:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-forest flex-shrink-0 mt-1" />
                  <div>
                    <strong>Tourist Visa (30 days):</strong> Available on arrival at Addis Ababa Bole International Airport
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-forest flex-shrink-0 mt-1" />
                  <div>
                    <strong>E-Visa:</strong> Apply online before travel at <a href="#" className="text-forest hover:text-forest/80">ethiopiavisaportal.gov.et</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-forest flex-shrink-0 mt-1" />
                  <div>
                    <strong>Extended Visa:</strong> Multi-entry visas available for longer stays
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Vaccinations */}
          <div>
            <h2 className="text-3xl font-serif text-ink mb-6 flex items-center gap-3">
              <AlertCircle className="text-forest" /> Health & Vaccinations
            </h2>
            <div className="bg-white border-l-4 border-forest p-6 rounded space-y-4">
              <p>Consult with a healthcare provider 4-6 weeks before travel. Recommended vaccinations include:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Yellow Fever (often required)</li>
                <li>✓ Hepatitis A</li>
                <li>✓ Typhoid</li>
                <li>✓ Routine immunizations</li>
                <li>✓ Malaria prophylaxis (especially for lower altitudes)</li>
              </ul>
            </div>
          </div>

          {/* Currency & Money */}
          <div>
            <h2 className="text-3xl font-serif text-ink mb-6 flex items-center gap-3">
              <CheckCircle className="text-forest" /> Currency & Money
            </h2>
            <div className="bg-white border-l-4 border-forest p-6 rounded space-y-4">
              <p><strong>Currency:</strong> Ethiopian Birr (ETB)</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• USD and EUR accepted in major hotels and tourist areas</li>
                <li>• ATMs available in Addis Ababa and larger towns</li>
                <li>• Cash is preferred in rural areas and small establishments</li>
                <li>• No credit card cash advances except at major banks</li>
              </ul>
            </div>
          </div>

          {/* Documents */}
          <div>
            <h2 className="text-3xl font-serif text-ink mb-6 flex items-center gap-3">
              <CheckCircle className="text-forest" /> Required Documents
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-l-4 border-forest p-6 rounded">
                <h3 className="font-semibold text-ink mb-3">Must Have</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Valid passport (6+ months validity)</li>
                  <li>✓ Visa (or approval for on-arrival)</li>
                  <li>✓ Travel insurance</li>
                  <li>✓ Flight tickets</li>
                </ul>
              </div>
              <div className="bg-white border-l-4 border-lakeBlue p-6 rounded">
                <h3 className="font-semibold text-ink mb-3">Recommended</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Vaccination certificates</li>
                  <li>✓ Copies of documents</li>
                  <li>✓ Travel itinerary</li>
                  <li>✓ Emergency contact info</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Climate & Packing */}
          <div>
            <h2 className="text-3xl font-serif text-ink mb-6 flex items-center gap-3">
              <CheckCircle className="text-forest" /> Climate & What to Pack
            </h2>
            <div className="bg-white border-l-4 border-forest p-6 rounded space-y-4">
              <p><strong>Best time to visit:</strong> October to March (dry season, pleasant weather)</p>
              <p className="font-semibold">Pack these essentials:</p>
              <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                <li>• Lightweight, breathable clothing</li>
                <li>• Sun protection (hat, sunscreen)</li>
                <li>• Sturdy hiking boots</li>
                <li>• Insect repellent</li>
                <li>• Camera equipment</li>
                <li>• Medications (personal + general)</li>
              </ul>
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
