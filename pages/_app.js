import * as React from 'react'
import theme from '../lib/theme'
import '../lib/global.css'
import { ThemeProvider } from 'theme-ui'
import { withModalTheme } from '@mattjennings/react-modal'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={withModalTheme(theme)}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App