import { Html, Head, Main, NextScript } from 'next/document'

export const siteTitle = 'AlephZero EVM Bridge'
const siteDomain = 'canbridge.alephzero.org'
const siteDescription = 'AlephZero EVM Bridge'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/azero/AzeroLogo.svg" />

        <meta name="theme-color" content="#000000" />
        <meta name="description" content={siteDescription} />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={siteDomain} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="canbridge.alephzero.org" />
        <meta property="twitter:url" content={siteDomain} />
        <meta name="twitter:title" content={siteTitle} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
