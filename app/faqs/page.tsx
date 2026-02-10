'use client'

import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
    {
        question: "When is the best time to visit Arba Minch?",
        answer: "The best time to visit is during the dry seasons from October to March and June to August. During these times, the weather is pleasant for exploring Nech Sar National Park and boat trips on Lake Chamo are more comfortable."
    },
    {
        question: "How do I get to Arba Minch?",
        answer: "Arba Minch is most easily reached by a 1-hour flight from Addis Ababa via Ethiopian Airlines. Alternatively, you can take a scenic 7-8 hour drive from Addis Ababa through the Great Rift Valley."
    },
    {
        question: "What should I pack for my trip?",
        answer: "Pack light, breathable clothing for the daytime and a light jacket for cooler evenings. Don't forget comfortable walking shoes, sun protection (hat, sunscreen), mosquito repellent, and a camera for the stunning landscapes."
    },
    {
        question: "Do I need a permit for Nech Sar National Park?",
        answer: "Yes, visitors need a permit which can be obtained at the park entrance gate. We recommend hiring a local guide and using a 4x4 vehicle for the best experience inside the park."
    },
    {
        question: "Is it safe to visit the Crocodile Market?",
        answer: "Yes, visiting the Crocodile Market is safe when you are on a boat with experienced local guides. The boats maintain a safe distance from the crocodiles while still allowing for incredible viewing opportunities."
    },
    {
        question: "What currency is used in Arba Minch?",
        answer: "The official currency is the Ethiopian Birr (ETB). While some hotels accept cards, it's essential to carry cash for local markets, guides, and smaller establishments."
    }
]

export default function FAQsPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-4 bg-muted/10">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif text-ink mb-6">
                        Common <span className="italic">Questions</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                        Everything you need to know before you embark on your journey to the heart of the Rift Valley.
                    </p>
                </div>
            </section>

            {/* FAQs Content */}
            <section className="py-16 md:py-32 px-4 bg-paper">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-muted transition-all duration-300"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full py-8 flex items-center justify-between text-left group"
                                >
                                    <span className="text-xl md:text-2xl font-serif text-ink group-hover:text-forest transition-colors pr-8">
                                        {faq.question}
                                    </span>
                                    <div className="w-8 h-8 flex items-center justify-center border border-muted group-hover:border-forest transition-colors rounded-full flex-shrink-0 text-ink group-hover:text-forest">
                                        {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[300px] pb-8 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-12 bg-muted/20 text-center rounded-sm">
                        <h3 className="text-2xl font-serif text-ink mb-4">Still have questions?</h3>
                        <p className="text-muted-foreground mb-8">We're here to help you plan your perfect trip.</p>
                        <a
                            href="/contact"
                            className="inline-block px-10 py-4 bg-forest text-paper font-mono text-[10px] uppercase tracking-[0.3em] hover:bg-forest/90 transition-all"
                        >
                            Contact Our Team
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
