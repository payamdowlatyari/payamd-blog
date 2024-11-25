import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllFilms } from "../../lib/getFilm";
import { Tooltip, Whisper } from "rsuite";

export default function NotePage({
  allFilms,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1 className="text-3xl font-bold font-sans mb-10 ml-5">Films</h1>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {allFilms.length ? (
            allFilms.map((film) => (
              <article
                key={film.slug}
                className="flex flex-row items-center font-sans leading-6  border bg-gray-100 rounded-lg hover:shadow hover:shadow-gray-400 transition-shadow duration-300 ease-in-out"
              >
                <div className="w-auto min-w-40 max-w-xs">
                  <Image
                    src={film.img}
                    alt="film"
                    className="object-cover w-full rounded md:h-60"
                    width={100}
                    height={60}
                    loading="lazy"
                  />
                </div>
                <div className="m-1 px-2 max-w-sm">
                  <Link
                    as={`/films/${film.slug}`}
                    href="/films/[slug]"
                    className="font-sans font-bold text-lg my-2 hover:no-underline hover:text-gray-600 transition-colors duration-300"
                  >
                    {film.title}
                  </Link>
                  <p className="mb-4 text-base font-semibold text-neutral-600">
                    {film.author}
                  </p>
                  <p className="mb-2 text-sm text-neutral-800">
                    {film.excerpt && film.excerpt.length > 150
                      ? film.excerpt.substring(0, 150) + "..."
                      : film.excerpt}
                    <Link
                      href="/films/[slug]"
                      as={`/films/${film.slug}`}
                      className="font-sans hover:no-underline hover:text-gray-600 transition-colors duration-300"
                    >
                      {" "}
                      Read more..
                    </Link>
                  </p>
                  <p className=" text-neutral-500">
                    <time>{distanceToNow(new Date(film.date))}</time>
                  </p>
                  <div className="flex justify-end content-around">
                    <Whisper
                      placement="left"
                      controlId="control-id-hover"
                      trigger="hover"
                      speaker={<Tooltip>imdb.com</Tooltip>}
                    >
                      <Link href={film.imdb} target="_blank" className="p-2">
                        <Image
                          src="/IMDB_Logo_2016.svg.png"
                          alt="film"
                          className="rounded inline-block"
                          width={40}
                          height={20}
                        />
                        <span className="p-1 font-semibold text-slate-800">
                          {film.rate}
                        </span>
                      </Link>
                    </Whisper>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p>No blog film yet :/</p>
          )}
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allFilms = getAllFilms([
    "slug",
    "title",
    "excerpt",
    "date",
    "director",
    "img",
    "imdb",
    "rate",
  ]);

  return {
    props: { allFilms },
  };
}
