import type { Metadata } from 'next'
import { useTheme } from 'next-themes'
import '../styles/globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Rei Kong',
  description: 'Rei Kong | Developer, Designer, & Student',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/bfo0ccc.css"/>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
