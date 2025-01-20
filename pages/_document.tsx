import { Html, Head, Main, NextScript } from "next/document";

/**
 * The Next.js Document component, used to augment elements in the html
 * document that aren't rerendered on client-side navigations.
 *
 * This component is only rendered on the server, and is not included in the
 * client-side bundle. It is used to add common html elements (like a doctype,
 * `<html>`, `<head>`, `<body>`, etc.) to the rendered document.
 *
 * The `lang` prop sets the language of the rendered HTML document, which is
 * useful for accessibility and SEO.
 *
 * The `className` prop sets the class names on the rendered `<body>` element.
 *
 * The `<Head>` component is used to add elements to the `<head>` of the
 * rendered HTML document. It is used to add a character encoding declaration
 * (`<meta charset="utf-8" />`), a robots meta tag (`<meta name="robots"
 * content="follow, index" />`), and an X-UA-Compatible meta tag (`<meta
 * http-equiv="x-ua-compatible" content="ie=edge" />`).
 *
 * The `<Main />` component is used to render the main content of the page.
 *
 * The `<NextScript />` component is used to render the scripts that Next.js
 * needs to hydrate the page client-side.
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
