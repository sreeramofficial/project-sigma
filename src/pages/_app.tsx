import React, { FC, memo } from 'react'

import { UserProvider } from '@auth0/nextjs-auth0'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps as NextAppProps } from 'next/app'

import Layout, { LayoutProps } from '@/components/Layout/Layout'
import config from '@/config'
import theme from '@/theme'
import '@/styles/styles.css'

const MyApp: FC<NextAppProps> = ({ Component: Page, pageProps }) => {
  // console.log('app beginning')

  const layoutProps: LayoutProps = {
    seoProps: config.seo,
    navbarProps: config.navbar,
    navlinksProps: config.navlinks,
    sidebarProps: config.sidebar,
    socialProps: config.socialLinks,
  }

  // console.log('app rendering')
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout {...layoutProps}>
          <Page {...pageProps} />
        </Layout>
      </ThemeProvider>
    </UserProvider>
  )
}

export default MyApp
