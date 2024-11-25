import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllFilms, getFilmBySlug } from "../../lib/getFilm";
import markdownToHtml from "../../lib/markdownToHtml";
import { Loader, Tooltip, Whisper } from "rsuite";
import Head from "next/head";

export default function FilmPage({
  film,
  randomFilms,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!router.isFallback && !film?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <Head>
        <title>{film.title} | My Web Blog</title>
      </Head>

      {router.isFallback ? (
        <Loader content="Loading..." />
      ) : (
        <div>
          <article className="border bg-gray-100 rounded-lg">
            <header className="flex flex-wrap p-5">
              <Image
                src={film.img}
                alt="post"
                className="object-cover h-auto rounded mr-5"
                width={200}
                height={200}
                loading="lazy"
              />
              <div className="flex flex-col mt-5 max-w-xl">
                <h1 className="text-3xl font-bold font-sans">{film.title}</h1>
                {film.excerpt ? (
                  <p className="mt-2 text-lg font-sans">{film.excerpt}</p>
                ) : null}
                <p className="font-sans uppercase"> {film.director}</p>
                <time className="flex mt-2 text-gray-400">
                  {distanceToNow(new Date(film.date))}
                </time>
              </div>
            </header>
            <p className="flex justify-end content-around mr-5">
              <Whisper
                placement="left"
                controlId="control-id-hover"
                trigger="hover"
                speaker={<Tooltip>check out imdb.com</Tooltip>}
              >
                <Link href={film.imdb} target="_blank">
                  <Image
                    src="/IMDB_Logo_2016.svg.png"
                    alt="film"
                    className="rounded inline-block"
                    width={50}
                    height={25}
                  />
                  <span className="p-1 font-semibold text-slate-800">
                    {film.rate}
                  </span>
                </Link>
              </Whisper>
            </p>
            <div className="bg-gray-100 rounded mt-5 p-5">
              <h3 className="my-4 text-xl font-sans">My Review:</h3>

              <div
                className="text-base mt-10 mb-4 font-sans"
                dangerouslySetInnerHTML={{ __html: film.content }}
              />
            </div>
          </article>
          <h3 className="text-2xl font-bold font-sans mt-20 mb-10 ml-5">
            You might also like
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4 rounded-md">
            {randomFilms.map((film) => (
              <div
                key={film.slug}
                className="space-y-2 max-w-xl lg:max-w-2xl p-1 m-1 flex flex-wrap bg-gray-100 rounded-lg hover:shadow hover:shadow-gray-400 transition-shadow duration-300 ease-in-out"
              >
                <Image
                  src={film.img}
                  alt="book"
                  className="object-cover w-40 rounded h-auto"
                  width={100}
                  height={60}
                  loading="lazy"
                />

                <div className="m-2 p-2 w-auto min-w-40 max-w-xs">
                  <Link
                    as={`/films/${film.slug}`}
                    href="/films/[slug]"
                    className="font-sans font-bold text-lg my-2 hover:no-underline hover:text-gray-600 transition-colors duration-300"
                  >
                    {film.title}
                  </Link>
                  <p className="font-sans text-md text-gray-600 font-semibold my-1">
                    {film.director}
                  </p>
                  <p className="font-sans text-md">{film.excerpt}</p>

                  <time className="flex mt-2 text-gray-400">
                    {distanceToNow(new Date(film.date))}
                  </time>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const film = getFilmBySlug(params.slug, [
    "slug",
    "title",
    "excerpt",
    "date",
    "content",
    "director",
    "imdb",
    "rate",
    "img",
  ]);
  const content = await markdownToHtml(film.content || "");

  // get two random films
  const allFilms = getAllFilms([
    "slug",
    "title",
    "excerpt",
    "date",
    "img",
    "imdb",
    "rate",
    "director",
  ]);
  const randomFilms = allFilms
    .filter((film) => film.slug !== params.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return {
    props: {
      film: {
        ...film,
        content,
      },
      randomFilms,
    },
  };
}

export async function getStaticPaths() {
  const films = getAllFilms(["slug"]);

  return {
    paths: films.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
