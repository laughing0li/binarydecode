import { Container } from '@/components/Container'
import Faqs from '@/components/Faqs'
import TransferLayout from '@/components/TransferLayout'
import { getTranslations } from 'next-intl/server'
import { ReactNode } from 'react'
import AdSense from '@/components/AdSense'
type Props = {
    children: ReactNode
    params: { locale: string }
}

export async function generateMetadata({
    params: { locale }
}: Omit<Props, 'children'>) {
    const t = await getTranslations({ locale, namespace: 'Metadata' })
    const baseUrl = 'https://binarydecode.com'
    const locales = ['ar', 'ch', 'es', 'fr', 'pt', 'ru', 'ko', 'jp', 'de', 'it', 'hi']
    if (locale === 'en') locale = ''
    const languages = locales.reduce((acc, locale) => {
        acc[locale as keyof typeof acc] = `${baseUrl}/${locale}`
        return acc
    }, {} as Record<string, string>)
    languages['x-default'] = `${baseUrl}`

    return {
        title: t('metadata.title'),
        description: t('metadata.description'),
        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: languages
        },
        twitter: {
            card: '',
            site: `${baseUrl}/${locale}`,
            image: `${baseUrl}/images/binarydecode-logos.png`,
        },
        openGraph: {
            title: t('metadata.title'),
            description: t('metadata.description'),
            url: `${baseUrl}/${locale}`,
            type: 'website',
            locale: locale,
            images: [
                {
                    url: `${baseUrl}/images/binarydecode-logos.png`,
                    alt: 'BinaryDecode Logo',
                },
            ],
        },
    }
};
export default function IndexPage() {
    return (
        <>
            <Container>
                <TransferLayout />
                <AdSense slot="3719858701" />
                <Faqs />
            </Container>
        </>
    )
}
