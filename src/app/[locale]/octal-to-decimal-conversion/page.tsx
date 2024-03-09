import { Container } from '@/components/Container'
import { useTranslations } from 'next-intl'
import { Meta } from '@/components/Meta';
import React, { ReactNode } from 'react'
type Props = {
    children: ReactNode;
    params: { locale: string };
};

export async function generateMetadata({
    params: { locale }
}: Omit<Props, 'children'>) {
    const href = 'octal-to-decimal-conversion';
    return Meta({ params: { locale }, namespace: 'octal-to-decimal', url: href });
};
const OctalToDecimal = () => {
    const t = useTranslations('octal-to-decimal')
    return (
        <Container className="prose prose-a:text-indigo-800 prose-a:no-underline dark:prose-h1:text-zinc-300 dark:prose-h2:text-zinc-300 dark:prose-p:text-zinc-300 dark:prose-a:text-indigo-300 dark:prose-li:text-zinc-300">
            <p>
                <a href="/what-is-octal-code">{t('a')} </a>
                {t('description')}
            </p>
            <h2>
                {t('paragraph1.h2')}
            </h2>
            <ol>
                <li>
                    {t('paragraph1.item1')}
                </li>
                <li>
                    {t('paragraph1.item2')}
                </li>
                <li>
                    {t('paragraph1.item3')}
                </li>
            </ol>
            <h2>
                {t('paragraph2.h2')}
            </h2>
            <p>
                {t('paragraph2.description')}
            </p>
            <ol>
                <li>
                    {t('paragraph2.item1')}
                </li>
                <li>
                    {t('paragraph2.item2')}
                </li>
                <li>
                    {t('paragraph2.item3')}
                </li>
                <li>
                    {t('paragraph2.item4')}
                </li>
                <p>
                    {t('paragraph2.summary')}
                </p>
            </ol>
            <h2>
                {t('paragraph3.h2')}
            </h2>
            <p>
                {t('paragraph3.description')}
            </p>
        </Container>
    )
}
export default OctalToDecimal
