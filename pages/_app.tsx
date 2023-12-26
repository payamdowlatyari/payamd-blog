import 'tailwindcss/tailwind.css';
import 'rsuite/dist/rsuite.min.css';
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import { Auth0Provider } from '@auth0/auth0-react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A blog for my posts, books, films, and photos."
        />
        <title>My Web Blog</title>
      </Head>
      <Header />
        <main className="py-14">
          <Component {...pageProps} />
      </main>
    </Auth0Provider>
  )
}
