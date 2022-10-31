import * as React from 'react'
import theme from '../lib/theme'
import '../lib/global.css'
import { ThemeProvider } from 'theme-ui'
import '@hackclub/theme/fonts/reg-bold.css'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={{...theme,colors: {
      ...theme.colors,
      modes: {}
    }}}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App