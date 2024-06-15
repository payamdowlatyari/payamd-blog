export default function Footer() {
  return (
    <footer className=" bottom-0 left-0 z-20 w-full p-4 md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a
          href="https://www.payamd.com"
          className="font-sans font-normal px-1 text-slate-500 border-b-1 border-b-transparent hover:text-inherit hover:no-underline hover:border-b-black focus:text-inherit focus:border-b-black focus:no-underline hover:duration-500"
        >
          payamd.com
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="/posts"
            className="font-sans font-normal px-1 text-slate-500 border-b-1 border-b-transparent hover:text-inherit hover:no-underline hover:border-b-black focus:text-inherit focus:border-b-black focus:no-underline hover:duration-500"
          >
            Posts
          </a>
        </li>
        <li>
          <a
            href="/books"
            className="font-sans font-normal px-1 text-slate-500 border-b-1 border-b-transparent hover:text-inherit hover:no-underline hover:border-b-black focus:text-inherit focus:border-b-black focus:no-underline hover:duration-500"
          >
            Books
          </a>
        </li>
        <li>
          <a
            href="/films"
            className="font-sans font-normal px-1 text-slate-500 border-b-1 border-b-transparent hover:text-inherit hover:no-underline hover:border-b-black focus:text-inherit focus:border-b-black focus:no-underline hover:duration-500"
          >
            Films
          </a>
        </li>
      </ul>
    </footer>
  );
}
