import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
    <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
    <Component {...pageProps} />
    </ChakraProvider>
  ) 
}
