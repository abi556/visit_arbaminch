import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://visitarbaminch.et'

    const routes = [
        '',
        '/attractions',
        '/history',
        '/services',
        '/events',
        '/travel-requirements',
        '/direct-flights',
        '/stopover',
        '/blog',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }))

    return routes
}
