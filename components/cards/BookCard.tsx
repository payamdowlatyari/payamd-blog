import Link from "next/link";
import distanceToNow from "../../lib/dateRelative";
import { Book } from "../../interfaces";
import Image from "next/image";
import { GoodreadsLink } from "../ui/links";

/**
 * A component that renders a card for a book with a title, author, excerpt, publication date, and a link to the book's page on goodreads.com.
 *
 * @param {Book} book - The book data to render in the card.
 * @returns {JSX.Element} A JSX element representing the BookCard component.
 */
export const BookCard = ({ book }: Book): JSX.Element => {
  return (
    <Link
      key={book.slug}
      href={`/books/${book.slug}`}
      className="flex flex-row flex-wrap md:flex-nowrap rounded hover:no-underline border border-black/10 hover:border-black/20 bg-neutral-100 dark:border-white/10 dark:bg-neutral-950 dark:hover:border-white/30 transition-colors duration-300"
    >
      <span className="absolute -top-px right-5 hidden h-px w-80 bg-gradient-to-l from-transparent via-black/10 via-10% to-transparent dark:block dark:via-white/30" />

      <span className="w-auto min-w-40 max-w-xs">
        <Image
          src={book.img}
          alt="book"
          className="object-cover w-full rounded h-full"
          width={100}
          height={60}
          loading="lazy"
        />
      </span>
      <span className="px-2 max-w-md flex flex-col justify-between">
        <span className="block p-2 font-bold text-lg text-neutral-800 dark:text-neutral-200">
          {book.title}
        </span>
        <span className="block p-2 font-semibold text-neutral-600 dark:text-neutral-400">
          {book.author}
        </span>
        <span className="block p-2 font-normal text-sm leading-[1.5] text-neutral-500 dark:text-neutral-300">
          {book.excerpt && book.excerpt.length > 150
            ? book.excerpt.substring(0, 150) + "..."
            : book.excerpt}
        </span>
        <span className="block p-2 text-neutral-500 dark:text-neutral-400 text-sm">
          <time>{distanceToNow(new Date(book.date))}</time>
        </span>
        <span className="flex justify-end content-around">
          <GoodreadsLink url={book.goodreads} />
        </span>
      </span>
    </Link>
  );
};
