import React, { Fragment } from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import type {
  AppProps as NextAppProps,
  AppContext as NextAppContext,
} from 'next/app'
import Head from 'next/head'

import Layout from '@/components/Layout/Layout'
import type { LayoutProps } from '@/components/Layout/Layout'

import theme from '../theme'
import '@/styles/styles.css'

interface MyAppProps extends NextAppProps {
  layoutProps: LayoutProps
}

const MyApp = ({ Component: Page, layoutProps, pageProps }: MyAppProps) => (
  <Fragment>
    <Head>
      <title>My page</title>
      <meta
        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
        name='viewport'
      />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout {...layoutProps}>
        <Page {...pageProps} />
      </Layout>
    </ThemeProvider>
  </Fragment>
)

MyApp.getInitialProps = async ({ Component, ctx }: NextAppContext) => ({
  pageProps: Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {},
  layoutProps: {
    navbarProps: {
      title: 'Sreeram Padmanabhan',
    },
    sidebarProps: {
      title: 'Sections',
    },
  },
})

export default MyApp
