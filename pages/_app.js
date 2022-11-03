import '@hackclub/theme/fonts/reg-bold.css'
import * as React from 'react'
import { ThemeProvider } from 'theme-ui'
import '../lib/global.css'
import theme from '../lib/theme'
import Script from 'next/script'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      theme={{
        ...theme,
        colors: {
          ...theme.colors,
          modes: {},
        },
      }}
    >
      <Component {...pageProps} />
      <Script defer data-domain="epoch.hackclub.com" src="https://plausible.io/js/script.js" />
    </ThemeProvider>
  )
}

export default App
