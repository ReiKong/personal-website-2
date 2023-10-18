import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import {NextUIProvider} from '@nextui-org/react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppProps) {
  // Uses the layout defined at a page level when available
  const getLayout = Component.getLayout ?? ((page) => page)
  
  return (
    <NextUIProvider> 
      <Component {...pageProps} />
    </NextUIProvider>
  )
}