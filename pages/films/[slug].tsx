import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Image from "next/image";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllFilms, getFilmBySlug } from "../../lib/getFilm";
import markdownToHtml from "../../lib/markdownToHtml";
import { Loader } from "rsuite";
import Head from "next/head";
import { FilmCard } from "../../components/cards/FilmCard";
import { IMDBLink } from "../../components/ui/links";

/**
 * A page that displays a film with its title, author, excerpt, publication date,
 * a link to the film's page on imdb.com, and a rate.
 *
 * @param {{ film: Film, randomFilms: Film[] }} - The film data to render in the page.
 * @returns {JSX.Element} - The JSX element representing the page.
 */
export default function FilmPage({
  film,
  randomFilms,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const router = useRouter();

  if (!router.isFallback && !film?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <Head>{film.title && <title>{film.title} | My Web Blog</title>}</Head>

      {router.isFallback ? (
        <Loader content="Loading..." />
      ) : (
        <div>
          <article>
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
                <h1 className="text-2xl md:text-3xl font-bold">{film.title}</h1>
                {film.excerpt ? (
                  <p className="mt-2 text-base md:text-lg text-neutral-600 dark:text-neutral-400 ">
                    {film.excerpt}
                  </p>
                ) : null}
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                  {film.director}
                </p>
                <time className="flex mt-2 text-neutral-400 dark:text-neutral-600">
                  {distanceToNow(new Date(film.date))}
                </time>
              </div>
            </header>
            <p className="flex justify-end content-around mr-5">
              <IMDBLink rate={film.rate} url={film.imdb} />
            </p>
            <div className="mt-5 p-5">
              <h3 className="my-4 text-xl">My Review:</h3>

              <div
                className="text-base mt-10 mb-4"
                dangerouslySetInnerHTML={{ __html: film.content }}
              />
            </div>
          </article>
          <h3 className="text-2xl font-bold mt-20 mb-10 ml-5">
            You might also like
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4 rounded-md">
            {randomFilms.map((film) => (
              <FilmCard key={film.slug} film={film} />
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
