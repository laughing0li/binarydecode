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
    const href = 'decimal-to-text-conversion';
    return Meta({ params: { locale }, namespace: 'decimal-to-text', url: href });
};
const DecimalToText = () => {
    const t = useTranslations('decimal-to-text')
    return (
        <Container className="prose prose-a:text-indigo-800 prose-a:no-underline dark:prose-h1:text-zinc-300 dark:prose-h2:text-zinc-300 dark:prose-p:text-zinc-300 dark:prose-a:text-indigo-300 dark:prose-li:text-zinc-300">
            <p>{t('description')}</p>
            <h2>{t('paragraph1.h2')}</h2>
            <ul>
                <li>
                    {t('paragraph1.description')}
                    <a href="https://en.wikipedia.org/wiki/ASCII"> {t('paragraph1.a')}</a>
                    ,{' '}
                    <a href="https://en.wikipedia.org/wiki/Unicode">
                        {t('paragraph1.a-1')}
                    </a>{' '}
                    {t('paragraph1.description1')}
                </li>
                <li>{t('paragraph1.item')}</li>
            </ul>
            <h2>{t('paragraph3.h2')}</h2>
            <ul>
                <li>{t('paragraph3.item1')}</li>
                <li>{t('paragraph3.item2')}</li>
            </ul>

            <h2>{t('paragraph4.h2')}</h2>
            <p>{t('paragraph4.description')}</p>
            <ol>
                <li>{t('paragraph4.item1')}</li>
                <li>{t('paragraph4.item2')}</li>
                <li>{t('paragraph4.item3')}</li>
                <li>{t('paragraph4.item4')}</li>
                <li>{t('paragraph4.item5')}</li>
                <li>{t('paragraph4.summary')}</li>
            </ol>
            <h2>{t('paragraph5.h2')}</h2>
            <p>{t('paragraph5.description')}</p>
            <ul>
                <li>{t('paragraph5.item1')}</li>
                <li>{t('paragraph5.item2')}</li>
            </ul>

            <h2>{t('paragraph6.h2')}</h2>
            <p>{t('paragraph6.description')}</p>
        </Container>
    )
}
export default DecimalToText
