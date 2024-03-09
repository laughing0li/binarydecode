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
    const href = 'what-is-hexadecimal-code';
    return Meta({ params: { locale }, namespace: 'hex-code', url: href });
};
const HexCode = () => {
    const t = useTranslations('hex-code')
    return (
        <Container className="prose prose-a:text-zinc-800 prose-a:no-underline dark:prose-h1:text-zinc-300 dark:prose-h2:text-zinc-300 dark:prose-p:text-zinc-300 dark:prose-a:text-zinc-300 dark:prose-strong:text-indigo-300 dark:prose-li:text-zinc-300">
            <h2>{t('paragraph1.h2')}</h2>
            <p>{t('paragraph1.description')}</p>
            <h2>{t('paragraph2.h2')}</h2>
            <p>{t('paragraph2.description')}</p>
            <h2>{t('paragraph3.h2')}</h2>
            <p>{t('paragraph3.description')}</p>
            <ul>
                <li>{t('paragraph3.item1')}</li>
            </ul>
            <p>{t('paragraph3.summary')}</p>

            <h2>{t('paragraph4.h2')}</h2>
            <p>{t('paragraph4.description')}</p>
            <h2>{t('paragraph5.h2')}</h2>
            <p>{t('paragraph5.description')}</p>
        </Container>
    )
}
export default HexCode
