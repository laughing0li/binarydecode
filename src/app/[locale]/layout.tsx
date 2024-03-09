import Analytics from '@/components/Analytics';
import React, { ReactNode } from 'react'
import { Providers } from '../providers';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Layout } from '@/components/Layout';
import { unstable_setRequestLocale } from 'next-intl/server';
import 'bootstrap-icons/font/bootstrap-icons.css';

type Props = {
    children: ReactNode;
    params: { locale: string };
};
const IndexLayout = ({
    children,
    params: { locale },
}: Props) => {
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

export default IndexLayout
