import { ChakraProvider, Flex } from '@chakra-ui/react'

import theme from '../theme'
import Fonts from '../theme/fonts'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Flex
        height="100vh"
        backgroundColor="black"
        justifyContent="center"
        alignItems="center"
      >
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
