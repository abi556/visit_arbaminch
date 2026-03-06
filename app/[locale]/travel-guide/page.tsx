'use client'

import { Compass, Camera, ShieldCheck, Map, Sun, Info } from 'lucide-react'

const guideSections = [
    {
        title: "Planning Your Journey",
        icon: Compass,
        content: "Arba Minch, meaning 'Forty Springs', is the largest town in southern Ethiopia. Located at an elevation of 1,285m, it serves as the gateway to the lower Omo Valley. Most visitors arrive via a short flight from Addis Ababa, though the drive through the Rift Valley offers spectacular views of the chain of lakes."
    },
    {
        title: "Cultural Etiquette",
        icon: ShieldCheck,
        content: "When visiting local communities like the Dorze people in the Guge Mountains, always ask for permission before taking photos. Dress modestly and be prepared for warm hospitality—accepting coffee or locally made bread (Enset) is a sign of respect."
    },
    {
        title: "Essential Tips",
        icon: Info,
        content: "Malaria prophylaxis is recommended for the lake regions. Drink only bottled water and try the fresh Nile Perch, a local specialty from the lakes. The town is divided into two parts: Secha (on the hill) and Sikela (at the base), connected by a scenic 4km road."
    }
]

export default function TravelGuidePage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-4 bg-muted/10">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif text-ink mb-6">
                        Travel <span className="italic">Guide</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                        A comprehensive manual for navigating the landscapes, culture, and rhythms of Arba Minch.
                    </p>
                </div>
            </section>

            {/* Hero Image Section */}
            <section className="px-4 -mt-8 md:-mt-12">
                <div className="max-w-7xl mx-auto">
                    <div className="aspect-[21/9] w-full relative overflow-hidden rounded-sm shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=2000&h=800&fit=crop"
                            alt="Arba Minch Landscape"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Guide Content */}
            <section className="py-24 md:py-32 px-4 bg-paper">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                        {guideSections.map((section, index) => (
                            <div key={index} className="space-y-6 group">
                                <div className="w-16 h-16 flex items-center justify-center bg-muted/20 text-forest rounded-full group-hover:bg-forest group-hover:text-paper transition-all duration-500">
                                    <section.icon size={28} />
                                </div>
                                <h2 className="text-3xl font-serif text-ink">{section.title}</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">
                        <div className="aspect-[4/5] rounded-sm overflow-hidden border-[10px] border-muted/20">
                            <img
                                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=1000&fit=crop"
                                alt="Exploration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-serif text-ink leading-tight">
                                Embrace the <br /><span className="italic text-forest">Spirit of Adventure</span>
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Best Gear", desc: "Binoculars for birdwatching in Nech Sar Park, a good hat, and breathable cotton clothing." },
                                    { title: "Local Transport", desc: "Bajajs (tuk-tuks) are the primary way to move between Secha and Sikela." },
                                    { title: "Market Days", desc: "Saturday and Thursday are the most vibrant market days in the region." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-1.5 h-1.5 bg-forest mt-2 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-mono text-[10px] uppercase tracking-widest text-forest mb-1">{item.title}</h4>
                                            <p className="text-ink text-lg leading-snug">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
