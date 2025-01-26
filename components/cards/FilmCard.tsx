import Link from "next/link";
import { Film } from "../../interfaces";
import Image from "next/image";
import distanceToNow from "../../lib/dateRelative";
import { IMDBLink } from "../ui/links";

/**
 * A component that renders a card for a film with a title, author, excerpt, publication date, a link to the film's page on imdb.com, and a rate.
 *
 * @param {Film} film - The film data to render in the card.
 * @returns {JSX.Element} A JSX element representing the FilmCard component.
 */
export const FilmCard = ({ film }: Film): JSX.Element => {
  return (
    <Link
      key={film.slug}
      href={`/films/${film.slug}`}
      className="flex flex-row flex-wrap md:flex-nowrap rounded-xl hover:no-underline border border-black/10 hover:border-white/30 bg-neutral-100 dark:border-white/10 dark:bg-neutral-950 transition-colors duration-300"
    >
      <span className="absolute -top-px right-5 hidden h-px w-80 bg-gradient-to-l from-transparent via-black/10 via-10% to-transparent dark:block dark:via-white/30" />

      <span className="w-auto min-w-40 max-w-xs">
        <Image
          src={film.img}
          alt="film"
          className="object-cover w-full h-full rounded"
          width={100}
          height={60}
          loading="lazy"
        />
      </span>
      <span className="px-2 max-w-sm">
        <span className="block p-2 font-bold text-lg my-2 hover:no-underline text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-50 transition-colors duration-300">
          {film.title}
        </span>
        <span className="block p-2 font-semibold text-neutral-600 dark:text-neutral-400">
          {film.author}
        </span>
        <span className="block p-2 font-normal text-sm leading-[1.5] text-neutral-500 dark:text-neutral-300">
          {film.excerpt && film.excerpt.length > 150
            ? film.excerpt.substring(0, 150) + "..."
            : film.excerpt}
        </span>
        <span className="block p-2 text-neutral-500 dark:text-neutral-400 text-sm">
          <time>{distanceToNow(new Date(film.date))}</time>
        </span>
        <span className="flex justify-end">
          <IMDBLink rate={film.rate} url={film.imdb} />
        </span>
      </span>
    </Link>
  );
};
