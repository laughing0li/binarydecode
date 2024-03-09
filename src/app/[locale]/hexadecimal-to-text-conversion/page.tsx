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
    const href = 'hexadecimal-to-text-conversion';
    return Meta({ params: { locale }, namespace: 'hex-to-text', url: href });
};
const HexToText = () => {
    const t = useTranslations('hex-to-text')
    return (
        <Container className="prose prose-a:text-indigo-800 prose-a:no-underline dark:prose-h1:text-zinc-300 dark:prose-h2:text-zinc-300 dark:prose-p:text-zinc-300 dark:prose-a:text-indigo-300 dark:prose-li:text-zinc-300">
            <p>
                {t('description')}
                <a href="https://en.wikipedia.org/wiki/ASCII"> {t('a')}</a> or{' '}
                <a href="https://en.wikipedia.org/wiki/Unicode">{t('a-1')}</a>.{' '}
                {t('description1')}
            </p>
            <h2>{t('paragraph1.h2')}</h2>
            <ul>
                <li>
                    <a href="/what-is-hexadecimal-code">{t('paragraph1.a')}</a>:
                    {t('paragraph1.description')}
                </li>
                <li>{t('paragraph1.item')}:</li>
            </ul>
            <h2>{t('paragraph2.h2')}</h2>
            <ol>
                <li>{t('paragraph2.item1-title')}</li>
                <p>{t('paragraph2.item1')}</p>
                <li>{t('paragraph2.item2-title')}</li>
                <p>{t('paragraph2.item2')}</p>
                <li>{t('paragraph2.item3')}</li>
                <li>{t('paragraph2.item4-title')}</li>
                <li>{t('paragraph2.item4')}</li>
            </ol>
            <h2>{t('paragraph3.h2')}</h2>
            <p>{t('paragraph3.description')}</p>
            <ol>
                <li>{t('paragraph3.item1')}</li>
                <li>
                    <ul>
                        <li>{t('paragraph3.item1-1')}</li>
                        <li>{t('paragraph3.item1-2')}</li>
                        <li>{t('paragraph3.item1-3')}</li>
                        <li>{t('paragraph3.item1-4')}</li>
                        <li>{t('paragraph3.item1-5')}</li>
                    </ul>
                </li>
                <li>{t('paragraph3.item2')}</li>
                <li>{t('paragraph3.summary')}</li>
            </ol>
            <h2>{t('paragraph4.h2')}</h2>
            <p>{t('paragraph4.description')}</p>
        </Container>
    )
}
export default HexToText
