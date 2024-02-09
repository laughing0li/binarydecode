import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  title: {
    template: '%s - Binary Decode',
    default:
      'Binary Decode - Binary code decoder and translator',
  },
  description:
    'Binary Decode is a code decoder and translator. Binary decode a free online tool for decode between any two of Octal, Binary, Text, Decimal and Hexadecimal.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <Analytics />
      <body className="flex h-full bg-zinc-50 dark:bg-[#24283b]">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
