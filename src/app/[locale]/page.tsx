import { Container } from '@/components/Container'
import Faqs from '@/components/Faqs'
import TransferLayout from '@/components/TransferLayout'
import { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';

type Props = {
  children: ReactNode;
  params: { locale: string };
};
export async function generateMetadata({
  params: { locale }
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
      title: t('metadata.title'),
      description: t('metadata.description'),
  };
}

export default function IndexPage() {
  return (
    <>
      <Container>
        <TransferLayout />
        <Faqs />
      </Container>
    </>
  )
}
