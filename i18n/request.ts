import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/navigation';

export default getRequestConfig(async ({ requestLocale }) => {
    // Await the locale because it might be a promise in Next.js 15+
    const locale = await requestLocale;

    // If for some reason locale is undefined, fall back to 'en'
    const currentLocale = locale || 'en';

    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(currentLocale as any)) notFound();

    return {
        locale: currentLocale,
        messages: (await import(`../messages/${currentLocale}.json`)).default
    };
});
