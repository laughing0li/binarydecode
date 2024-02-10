import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'ch', 'jp'],

    // Used when no locale matches
    defaultLocale: 'en',
    pathnames: {
        '/': {
            en: '/',
            ch: '/',
            jp: '/',
        },
        
    }
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(jp|ch|en)/:path*']
};