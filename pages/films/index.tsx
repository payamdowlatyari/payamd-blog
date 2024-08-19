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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
          {allFilms.length ? (
            allFilms.map((film) => (
              <div className="font-sans text-base leading-6 font-bold m-2 max-w-sm border bg-gray-100 rounded-lg hover:shadow hover:shadow-gray-400 transition-shadow duration-300 ease-in-out">
                <article key={film.slug} className="mb-1">
                  <div className="flex">
                    <Image
                      src={film.img}
                      alt="film"
                      className="object-cover w-full rounded md:h-72"
                      width={100}
                      height={75}
                      loading="lazy"
                    />
                  </div>
                  <div className="my-1 px-2 max-w-sm group">
                    <Link
                      as={`/films/${film.slug}`}
                      href="/films/[slug]"
                      className="font-sans font-bold text-lg my-2 hover:no-underline hover:text-gray-600 transition-colors duration-300"
                    >
                      {film.title}
                    </Link>
                    <div className="font-sans font-semibold text-gray-600">
                      {film.director}
                    </div>
                    <div className="font-sans py-2 font-normal text-sm">
                      {film.excerpt.length > 200
                        ? film.excerpt.substring(0, 200) + "..."
                        : film.excerpt}{" "}
                    </div>
                    <div className="text-gray-500 font-normal text-sm">
                      <time>{distanceToNow(new Date(film.date))}</time>
                    </div>
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
              </div>
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
