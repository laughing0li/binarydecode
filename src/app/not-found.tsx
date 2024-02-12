import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useTranslations } from "next-intl";
export const dynamic = 'force-dynamic'

export default function NotFound() {
  const t = useTranslations("Index");

  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {t("404.title")}
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          {t("404.content")}
        </p>
        <Button href="/" variant="secondary" className="mt-4">
          {t("404.goBack")}
        </Button>
      </div>
    </Container>
  )
}
