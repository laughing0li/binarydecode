import { Layout } from '@/components/Layout'
import { NextIntlClientProvider, useMessages } from 'next-intl';
import '@/styles/tailwind.css'
import Analytics from '@/components/Analytics'
import { Providers } from './providers';
import { ReactNode } from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
    children: ReactNode;
    locale: string;
};

function RootLayout({
    children,
    locale,
}: Props) {
    const messages = useMessages();
    unstable_setRequestLocale(locale);
    return (
        <html lang={locale} className="h-full antialiased" suppressHydrationWarning>
            <Analytics />
            <body className="flex h-full bg-white dark:bg-[#24283b]">
                <Providers>
                    <div className="flex w-full">
                        <NextIntlClientProvider messages={messages}>
                            <Layout>
                                {children}
                            </Layout>
                        </NextIntlClientProvider>
                    </div>
                </Providers>
            </body>
        </html>
    )
}
export default RootLayout;