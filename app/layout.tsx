import type { Metadata } from 'next'
import { useTheme } from 'next-themes'
import '../styles/globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Rei Kong',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
