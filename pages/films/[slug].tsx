import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Link from "next/link";
import Image from "next/image";
import Comment from "../../components/comment";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllFilms, getFilmBySlug } from "../../lib/getFilm";
import markdownToHtml from "../../lib/markdownToHtml";
import { Loader, Tooltip, Whisper } from "rsuite";
import Head from "next/head";

export default function FilmPage({
  film,
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
          <article>
            <header className="flex flex-wrap">
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
            <p className="flex justify-end content-around">
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

          <Comment />
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

  return {
    props: {
      film: {
        ...film,
        content,
      },
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
