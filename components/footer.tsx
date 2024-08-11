import Link from "next/link";

export default function Footer() {
  return (
    <footer className="md:flex flex-col md:items-center md:justify-between p-1 md:p-2 xl:p-4 px-4 bottom-0">
      <div className="mb-1 md:mb-0">
        <ul className="flex flex-wrap justify-center">
          <li>
            <Link
              href="/"
              className="mr-2 hover:no-underline md:mr-4 text-sm leading-6 text-gray-600 hover:text-gray-900 duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className="mr-2 hover:no-underline md:mr-4 text-sm leading-6 text-gray-600 hover:text-gray-900 duration-300 ease-in-out"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              className="mr-2 hover:no-underline md:mr-4 text-sm leading-6 text-gray-600 hover:text-gray-900 duration-300 ease-in-out"
              href="/books"
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              className="mr-2 hover:no-underline md:mr-4 text-sm leading-6 text-gray-600 hover:text-gray-900 duration-300 ease-in-out"
              href="/films"
            >
              Films
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-between w-full px-8 border-t border-t-slate-300">
        <div className="sm:flex sm:items-center sm:justify-center pt-2">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <Link
              href="https://www.payamd.com"
              className="font-sans font-normal px-1 text-slate-500 hover:text-slate-700 hover:no-underline focus:no-underline hover:duration-500"
            >
              payamd.com
            </Link>
            . All Rights Reserved.
          </span>
        </div>
        <div className="mb-2 md:mb-0">
          <ul className="flex justify-center my-3 space-x-5">
            <li>
              <Link
                href="https://twitter.com/payamdowlatyari"
                className="text-gray-500 hover:text-gray-900 duration-300 ease-in-out"
                target="_blank"
              >
                <svg
                  viewBox="0 0 128 128"
                  fill="currentColor"
                  className="h-5 w-5 scale-90"
                  aria-hidden="true"
                >
                  <path
                    d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z"
                    fillRule="nonzero"
                    className="fill-current"
                    clipRule="nonzero"
                  ></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/payamdowlatyari"
                className="text-gray-500 hover:text-gray-900 duration-300 ease-in-out"
                target="_blank"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                    className="fill-current"
                  ></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/payamdowlatyari/"
                className="text-gray-500 hover:text-gray-900 duration-300 ease-in-out"
                target="_blank"
              >
                <svg
                  viewBox="0 0 128 128"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path>
                  <path
                    fill="#fff"
                    d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                  ></path>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
