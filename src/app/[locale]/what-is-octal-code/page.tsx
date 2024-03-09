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
    const href = 'what-is-octal-code';
    return Meta({ params: { locale }, namespace: 'octal-code', url: href });
};
const OctalCode = () => {
    const t = useTranslations('octal-code')
    return (
        <Container className="prose prose-a:text-zinc-800 prose-a:no-underline dark:prose-h1:text-zinc-300 dark:prose-h2:text-zinc-300 dark:prose-p:text-zinc-300 dark:prose-a:text-zinc-300 dark:prose-strong:text-indigo-300 dark:prose-li:text-zinc-300">
            <h2>{t('paragraph1.h2')}</h2>
            <p>
                {t('paragraph1.description')}
                <strong>{t('paragraph1.a')}</strong>
                {t('paragraph1.description1')}
            </p>
            <h2>{t('paragraph2.h2')}</h2>
            <p>{t('paragraph2.description')}</p>
            <h2>{t('paragraph3.h2')}</h2>
            <p>{t('paragraph3.description')}</p>

            <h2>{t('paragraph4.h2')}</h2>
            <p>{t('paragraph4.description')}</p>
            <ol>
                <li>{t('paragraph4.item1')}</li>
                <li>{t('paragraph4.item2')}</li>
                <li>{t('paragraph4.item3')}</li>
            </ol>
            <h2>{t('paragraph5.h2')}</h2>
            <p>{t('paragraph5.description')}</p>
            <h2>{t('paragraph6.h2')}</h2>
            <p>{t('paragraph6.description')}</p>
        </Container>
    )
}
export default OctalCode
