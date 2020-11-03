import Head from 'next/head'
import { appsConfig } from '../../../config/apps'
import { ScrollComponent } from '../../ui/scroll/Scroll'

import { FooterComponent } from '../footer'
import { HeaderComponent } from '../header'

export const LayoutComponent = ({
  children,
  title = appsConfig.seo.defaultTitle,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={appsConfig.seo.defaultDescription} />
    </Head>

    <HeaderComponent />
    {children}

    {process.browser && <ScrollComponent />}

    <FooterComponent />
  </>
)
