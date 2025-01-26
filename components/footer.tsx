import Link from "next/link";
import { Social } from "./social";

/**
 * The site footer.
 *
 * @returns The site footer.
 */
export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex space-x-6">
              <Social />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold leading-6 text-gray-600 dark:text-gray-500">
                  Pages
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/"
                      className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50 duration-300 ease-in-out"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50 duration-300 ease-in-out"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg font-semibold leading-6 text-gray-600 dark:text-gray-500">
                  Topics
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/posts"
                      className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50 duration-300 ease-in-out"
                    >
                      Posts
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50 duration-300 ease-in-out"
                      href="/books"
                    >
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50 duration-300 ease-in-out"
                      href="/films"
                    >
                      Films
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold leading-6 text-gray-600 dark:text-gray-500">
                  Links
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50 duration-300 ease-in-out"
                      href="https://payamd.com"
                    >
                      Website
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50 duration-300 ease-in-out"
                      href="https://photo.payamd.com"
                    >
                      Photography
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-100/20 pt-4 sm:mt-10 lg:mt-12">
          <p className="text-xs leading-5 text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href="https://www.payamd.com"
              className="font-sans font-semibold px-1 text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-gray-100 hover:no-underline focus:no-underline hover:duration-500"
            >
              payamd.com
            </Link>
            - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
