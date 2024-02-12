import { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'ch', 'jp', 'ko', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ar', 'hi'] as const

export const pathnames = {
    '/': '/',
    '/pathnames': {
        en: '/en',
        ch: '/ch',
        jp: '/jp',
        ko: '/ko',
        es: '/es',
        fr: '/fr',
        de: '/de',
        it: '/it',
        pt: '/pt',
        ru: '/ru',
        ar: '/ar',
        hi: '/hi',
    },
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = "as-needed"

export type AppPathnames = keyof typeof pathnames
