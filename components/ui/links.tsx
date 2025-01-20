import Link from "next/link";
import { Whisper, Tooltip } from "rsuite";
import Image from "next/image";

/**
 * A link component that has a fancy hover animation.
 *
 * When hovered, the link's text will slide up and the same text will slide into
 * its place from the bottom. The animation is performed using CSS transitions.
 *
 * @param {string} title - The text to display in the link.
 * @param {string} url - The URL to navigate to when the link is clicked.
 *
 * @returns {JSX.Element} A link component with a fancy hover animation.
 */
export function LinkOverlay({
  title,
  url,
}: {
  title: string;
  url: string;
}): JSX.Element {
  return (
    <Link
      href={url}
      className="px-2 py-1 m-1 md:px-4 md:py-2 md:m-2 text-neutral-100 hover:text-neutral-100 focus:text-neutral-100"
    >
      <div className="relative overflow-hidden group font-bold">
        <span className="invisible">{title}</span>
        <span className="absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
          {title}
        </span>
        <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
          {title}
        </span>
      </div>
    </Link>
  );
}

/**
 * A link component that has a fancy hover animation.
 *
 * When hovered, the link's underline will slide in from the right and the link
 * will no longer be underlined. The animation is performed using CSS transitions.
 *
 * @param {string} title - The text to display in the link.
 * @param {string} url - The URL to navigate to when the link is clicked.
 *
 * @returns {JSX.Element} A link component with a fancy hover animation.
 */
export function AnimatedUnderlinedLink({
  title,
  url,
}: {
  title: string;
  url: string;
}): JSX.Element {
  return (
    <Link
      href={url}
      className="relative font-bold my-2 hover:no-underline after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-200 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
    >
      <span className="text-neutral-700 dark:text-neutral-200">{title}</span>
    </Link>
  );
}

/**
 * A link component that displays a Medium logo and a hover card with a link
 * to Medium.
 *
 * @param {string} url - The URL to navigate to when the link is clicked.
 *
 * @returns {JSX.Element} A link component with a Medium logo and a hover card.
 */
export function MediumLink({ url }: { url: string }): JSX.Element {
  return (
    <Whisper
      placement="left"
      controlId="control-id-hover"
      trigger="hover"
      speaker={<Tooltip>medium.com</Tooltip>}
    >
      <Link href={url || "#"} target="_blank" className="p-1">
        <Image
          src="/medium.png"
          alt="book"
          className="rounded inline-block"
          width={80}
          height={20}
        />
      </Link>
    </Whisper>
  );
}

/**
 * A link component that displays an IMDB logo, a rating, and a hover card with
 * a link to IMDB.
 *
 * @param {string} rate - The rating of the film.
 * @param {string} url - The URL to navigate to when the link is clicked.
 *
 * @returns {JSX.Element} A link component with an IMDB logo, a rating, and a
 * hover card.
 */
export function IMDBLink({
  rate,
  url,
}: {
  rate: string;
  url: string;
}): JSX.Element {
  return (
    <Whisper
      placement="left"
      controlId="control-id-hover"
      trigger="hover"
      speaker={<Tooltip>imdb.com</Tooltip>}
    >
      <Link
        href={url || "#"}
        target="_blank"
        className="my-2 no-underline hover:no-underline"
      >
        <Image
          src="/IMDB_Logo_2016.svg.png"
          alt="film"
          className="rounded inline-block"
          width={40}
          height={20}
        />
        <span className="ml-2 font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-50">
          {rate}
        </span>
      </Link>
    </Whisper>
  );
}

/**
 * A link component that displays a Goodreads logo and a hover card with a link
 * to Goodreads.
 *
 * @param {string} url - The URL to navigate to when the link is clicked.
 *
 * @returns {JSX.Element} A link component with a Goodreads logo and a hover card.
 */
export function GoodreadsLink({ url }: { url: string }): JSX.Element {
  return (
    <Whisper
      placement="left"
      controlId="control-id-hover"
      trigger="hover"
      speaker={<Tooltip>goodreads.com</Tooltip>}
    >
      <Link href={url || "#"} target="_blank" className="p-2">
        <Image
          src="/goodreads-logo-white.png"
          alt="book"
          className="rounded inline-block"
          width={80}
          height={20}
        />
      </Link>
    </Whisper>
  );
}
