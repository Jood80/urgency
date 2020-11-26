import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import theme from '../Theme/theme'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyle = document.querySelector('#jss-server-side')
    if (jssStyle) {
      jssStyle.parentElement.removeChild(jssStyle)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Urgency</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
