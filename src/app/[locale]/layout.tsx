import { Layout } from '@/components/Layout'
import { NextIntlClientProvider, useMessages } from 'next-intl';
import '@/styles/tailwind.css'
import Analytics from '@/components/Analytics'
import { Providers } from './providers';

export default function RootLayout({
    children,
    locale,
}: {
    children: React.ReactNode
    locale: string
}) {
    const messages = useMessages();
    return (
        <html lang={locale} className="h-full antialiased" suppressHydrationWarning>
            <Analytics />
            <body className="flex h-full bg-white dark:bg-[#24283b]">
                <Providers>
                    <div className="flex w-full">
                        <Layout>
                            <NextIntlClientProvider locale={locale} messages={messages}>
                                {children}
                            </NextIntlClientProvider>
                        </Layout>
                    </div>
                </Providers>
            </body>
        </html>
    )
}