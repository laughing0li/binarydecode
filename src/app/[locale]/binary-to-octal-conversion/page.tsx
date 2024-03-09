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
    const href = 'binary-to-octal-conversion';
    return Meta({ params: { locale }, namespace: 'binary-to-octal', url: href });
};
const BinaryToOctal = () => {
    const t = useTranslations('binary-to-octal')
    return (
        <Container className="prose prose-a:text-indigo-800 prose-a:no-underline dark:prose-h1:text-zinc-300 dark:prose-h2:text-zinc-300 dark:prose-p:text-zinc-300 dark:prose-a:text-indigo-300 dark:prose-li:text-zinc-300">
            <p>{t('description')}</p>
            <h2>{t('paragraph1.h2')}</h2>
            <ul>
                <li>
                    <a href="/what-is-binary-code">{t('paragraph1.a')}</a>:{' '}
                    {t('paragraph1.item1')}
                </li>
                <li>
                    <a href="/what-is-octal-code">{t('paragraph1.a-1')}</a>:{' '}
                    {t('paragraph1.item2')}
                </li>
            </ul>
            <h2>{t('paragraph2.h2')}</h2>
            <p>{t('paragraph2.description')}</p>
            <ul>
                <li>
                    <p className="font-semibold">{t('paragraph2.item1-title')}: </p>
                    {t('paragraph2.item1')}
                </li>
                <li>
                    <p className="font-semibold">{t('paragraph2.item2-title')}: </p>
                    {t('paragraph2.item2')}
                </li>
                <li>
                    <p className="font-semibold">{t('paragraph2.item3-title')}: </p>
                    {t('paragraph2.item3')}
                </li>
            </ul>
            <h2>{t('paragraph3.h2')}</h2>
            <p>{t('paragraph3.description')}</p>
            <ol>
                <li>
                    <p className="font-semibold">{t('paragraph2.item1-title')}: </p>
                    {t('paragraph3.item1')}
                </li>
                <li>
                    <p className="font-semibold">{t('paragraph2.item2-title')}: </p>
                    <ul>
                        <li>{t('paragraph3.item2-1')}</li>
                        <li>{t('paragraph3.item2-2')}</li>
                        <li>{t('paragraph3.item2-3')}</li>
                        <li>{t('paragraph3.item2-4')}</li>
                    </ul>
                </li>
                <li>{t('paragraph3.item3')}</li>
            </ol>
            <p>{t('paragraph3.summary')}</p>
            <h2>{t('paragraph4.h2')}</h2>
            <p>{t('paragraph4.description')}</p>
        </Container>
    )
}
export default BinaryToOctal
