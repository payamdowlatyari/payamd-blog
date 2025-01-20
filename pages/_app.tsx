import "tailwindcss/tailwind.css";
import "rsuite/dist/rsuite.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/header";
import { Auth0Provider } from "@auth0/auth0-react";
import Footer from "../components/footer";

/**
 * The top-level component for the app.
 *
 * This component is responsible for rendering the main application structure,
 * including the header, main content area, and footer. It also sets up the
 * authentication provider using the `Auth0Provider` component.
 *
 * @param {AppProps} props The props for the app.
 * @param {React.ComponentType} props.Component The component to render for the main content area.
 * @param {object} props.pageProps The props for the page component.
 * @returns {React.ReactElement} The rendered app component.
 */
export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
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
      <main className="py-5 my-5 mx-auto w-full max-w-6xl min-h-[calc(100vh-200px)]">
        <Component {...pageProps} />
      </main>
      <Footer />
    </Auth0Provider>
  );
}
