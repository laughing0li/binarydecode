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
    const href = 'binary-to-text-conversion';
    return Meta({ params: { locale }, namespace: 'binary-to-text', url: href });
};

const BinaryToText = () => {
    const t = useTranslations('binary-to-text')
    return (
        <Container className="prose prose-a:text-indigo-800 prose-a:no-underline dark:prose-h1:text-zinc-300 dark:prose-h2:text-zinc-300 dark:prose-p:text-zinc-300 dark:prose-a:text-indigo-300 dark:prose-li:text-zinc-300">
            <p>
                {t('description')}
                <a href="https://en.wikipedia.org/wiki/ASCII"> {t('a')} </a>
                {t('description1')}
                <a href="https://en.wikipedia.org/wiki/Unicode"> {t('a-1')}. </a>
                {t('description2')}
            </p>
            <h2>{t('paragraph1.h2')}</h2>
            <p>{t('paragraph1.description')}</p>
            <h2>{t('paragraph2.h2')}</h2>
            <p>{t('paragraph2.description1')}</p>
            <p>{t('paragraph2.description2')}</p>

            <h2>{t('paragraph3.h2')}</h2>
            <ol>
                <li>{t('paragraph3.item1')}</li>
                <li>{t('paragraph3.item2')}</li>
                <li>{t('paragraph3.item3')}</li>
            </ol>
            <h2>{t('paragraph4.h2')}</h2>
            <p>{t('paragraph4.description')}</p>
            <ol>
                <li>
                    {t('paragraph4.item1-title')}
                    <ul>
                        <li>{t('paragraph4.item1')}</li>
                        <li>{t('paragraph4.item1-1')}</li>
                        <li>{t('paragraph4.item1-2')}</li>
                        <li>{t('paragraph4.item1-3')}</li>
                        <li>{t('paragraph4.item1-4')}</li>
                    </ul>
                </li>
                <li>
                    {t('paragraph4.item2-title')}
                    <ul>
                        <li>{t('paragraph4.item2')}</li>
                        <li>{t('paragraph4.item2-1')}</li>
                        <li>{t('paragraph4.item2-2')}</li>
                        <li>{t('paragraph4.item2-3')}</li>
                        <li>{t('paragraph4.item2-4')}</li>
                    </ul>
                </li>
                <li>
                    {t('paragraph4.item3-title')}
                    <ul>
                        <li>{t('paragraph4.item3')}</li>
                        <li>{t('paragraph4.item3-1')}</li>
                        <li>{t('paragraph4.item3-2')}</li>
                        <li>{t('paragraph4.item3-3')}</li>
                        <li>{t('paragraph4.item3-4')}</li>
                    </ul>
                </li>
            </ol>
            <p>{t('paragraph4.summary')}</p>
            <h2>{t('paragraph5.h2')}</h2>
            <p>{t('paragraph5.description')}</p>
        </Container>
    )
}
export default BinaryToText
