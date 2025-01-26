import { Html, Head, Main, NextScript } from "next/document";

/**
 * The document component for the app.
 *
 * @returns The augmented html document.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="follow, index" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </Head>
      <body className="text-neutral-900 dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-950 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
