import Link from "next/link";
import { Social } from "./social";

export default function Footer() {
  return (
    <footer className="md:flex flex-col md:items-center md:justify-between p-1 md:p-2 xl:p-4 px-2 bottom-0">
      <div className="mb-1 md:mb-0 border-gray-300">
        <ul className="flex flex-wrap justify-center">
          <li>
            <Link
              href="/"
              className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-gray-600 hover:text-gray-900 duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-gray-600 hover:text-gray-900 duration-300 ease-in-out"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-gray-600 hover:text-gray-900 duration-300 ease-in-out"
              href="/books"
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-gray-600 hover:text-gray-900 duration-300 ease-in-out"
              href="/films"
            >
              Films
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-between w-full px-4 border-t border-gray-300">
        <div className="sm:flex sm:items-center sm:justify-center pt-2">
          <span className="text-sm text-gray-500 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link
              href="https://www.payamd.com"
              className="font-sans font-semibold px-1 text-slate-500 hover:text-slate-700 hover:no-underline focus:no-underline hover:duration-500"
            >
              payamd.com
            </Link>
          </span>
        </div>
        <div className="mb-2 md:mb-0">
          <Social />
        </div>
      </div>
    </footer>
  );
}
