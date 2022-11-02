import '@hackclub/theme/fonts/reg-bold.css'
import * as React from 'react'
import { ThemeProvider } from 'theme-ui'
import '../lib/global.css'
import theme from '../lib/theme'

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
    </ThemeProvider>
  )
}

export default App
