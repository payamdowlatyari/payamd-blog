import "tailwindcss/tailwind.css";
import "rsuite/dist/rsuite.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

/**
 * The top-level component for the app.
 *
 * @param {{ Component: React.ReactNode, pageProps: React.ReactNode }} props - The props object containing the component and page props.
 * @returns {React.ReactElement} The rendered app component.
 */
export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <>
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
    </>
  );
}
