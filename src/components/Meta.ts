import { getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';
type Props = {
    children: ReactNode;
    params: { locale: string };
    namespace: string;
    url: string;
};
export async function Meta ({
    params: { locale },
    namespace,
    url
}: Omit<Props, 'children'>) {
    const t = await getTranslations({ locale, namespace: namespace, url: url });
    const baseUrl = 'https://binarydecode.com';
    const locales = ['ar', 'ch', 'es', 'fr', 'pt', 'ru', 'ko', 'jp', 'de', 'it', 'hi'];
    const href = url;
    
    // Simplify handling of 'en' locale
    const path = locale === 'en' ? '' : `${locale}/`;
    
    // Refactor language URLs creation to avoid duplication
    const languages = locales.reduce((acc, loc) => ({
        ...acc,
        [loc]: `${baseUrl}/${loc}/${href}`
    }), { 'x-default': `${baseUrl}/${href}` } as Record<string, string>);

    const fullUrl = `${baseUrl}/${path}${href}`;
    const imageUrl = `${baseUrl}/images/binarydecode-logos.png`;

    return {
        title: t('h1'),
        description: t('metadata'),
        alternates: {
            canonical: fullUrl,
            languages
        },
        twitter: {
            card: '',
            site: fullUrl,
            image: imageUrl,
        },
        openGraph: {
            title: t('h1'),
            description: t('metadata'),
            url: fullUrl,
            type: 'website',
            locale: locale || 'x-default',
            images: [
                {
                    url: imageUrl,
                    alt: 'BinaryDecode Logo',
                },
            ],
        },
    }
};