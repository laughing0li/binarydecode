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
    const href = 'octal-to-text-conversion';
    return Meta({ params: { locale }, namespace: 'octal-to-text', url: href });
};
const OctalToText = () => {
    const t = useTranslations('octal-to-text')
    return (
        <Container className="prose prose-a:text-indigo-800 prose-a:no-underline dark:prose-h1:text-zinc-300 dark:prose-h2:text-zinc-300 dark:prose-p:text-zinc-300 dark:prose-a:text-indigo-300 dark:prose-li:text-zinc-300">
            <p>
                {t('description1')} <a href="/what-is-octal-code">{t('a')}</a>
                {t('description2')}
                <a href="/what-is-binary-code"> {t('a-1')}</a>
                {t('description3')}
                <a href="https://en.wikipedia.org/wiki/ASCII"> {t('a-2')}</a>.
            </p>
            <h2>{t('paragraph1.h2')}</h2>
            <ol>
                <li>
                    {t('paragraph1.item1')}
                    <ul>
                        <li>{t('paragraph1.item1-1')}</li>
                        <li>{t('paragraph1.item1-2')}</li>
                        <li>{t('paragraph1.item1-3')}</li>
                        <li>{t('paragraph1.item1-4')}</li>
                        <li>{t('paragraph1.item1-5')}</li>
                    </ul>
                </li>
                <li>{t('paragraph1.item2')}</li>
            </ol>
            <h2>{t('paragraph2.h2')}</h2>
            <ol>
                <li>{t('paragraph2.item1')}</li>
                <li>
                    {t('paragraph2.item2')}
                    <ul>
                        <li>{t('paragraph2.item2-1')}</li>
                        <li>{t('paragraph2.item2-2')}</li>
                        <li>{t('paragraph2.item2-3')}</li>
                        <li>{t('paragraph2.item2-4')}</li>
                        <li>{t('paragraph2.item2-5')}</li>
                    </ul>
                </li>
                <li>{t('paragraph2.item3')}</li>
            </ol>
            <h2>{t('paragraph3.h2')}</h2>
            <ul>
                <li>{t('paragraph3.item1')}</li>
                <li>{t('paragraph3.item2')}</li>
                <li>{t('paragraph3.item3')}</li>
                <li>{t('paragraph3.item4')}</li>
            </ul>
            <h2>{t('paragraph4.h2')}</h2>
            <p>{t('paragraph4.description')}</p>
            <ol>
                <li>
                    {t('paragraph4.item1')}
                    <ul>
                        <li>{t('paragraph4.item1-1')}</li>
                        <li>{t('paragraph4.item1-2')}</li>
                        <li>{t('paragraph4.item1-3')}</li>
                        <li>{t('paragraph4.item1-4')}</li>
                    </ul>
                </li>
                <li>
                    {t('paragraph4.description1')}
                    <ul>
                        <li>{t('paragraph4.item2')}</li>
                        <li>{t('paragraph4.item2-1')}</li>
                        <li>{t('paragraph4.item2-2')}</li>
                        <li>{t('paragraph4.item2-3')}</li>
                    </ul>
                </li>
                <li>
                    {t('paragraph4.description2')}
                    <ul>
                        <li>{t('paragraph4.item3')}</li>
                        <li>{t('paragraph4.item3-1')}</li>
                        <li>{t('paragraph4.item3-2')}</li>
                        <li>{t('paragraph4.item3-3')}</li>
                    </ul>
                </li>
            </ol>
            <p>{t('paragraph4.summary')}</p>
            <h2>{t('paragraph5.h2')}</h2>
            <p>{t('paragraph5.description')}</p>
        </Container>
    )
}
export default OctalToText
