import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Link from "next/link";
import Image from "next/image";
import Comment from "../../components/comment";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllBooks, getBookBySlug } from "../../lib/getBook";
import markdownToHtml from "../../lib/markdownToHtml";
import { Loader, Tooltip, Whisper } from "rsuite";
import Head from "next/head";

export default function BookPage({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!router.isFallback && !book?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <Head>
        <title>{book.title} | My Web Blog</title>
      </Head>

      {router.isFallback ? (
        <Loader content="Loading..." />
      ) : (
        <div>
          <article className="border bg-gray-100 rounded-lg">
            <header className="flex flex-wrap p-5">
              <Image
                src={book.img}
                alt="post"
                className="object-cover h-auto rounded mr-5"
                width={200}
                height={200}
                loading="lazy"
              />
              <div className="flex flex-col mt-5 max-w-xl">
                <h1 className="text-3xl font-bold font-sans">{book.title}</h1>
                {book.excerpt ? (
                  <p className="mt-2 text-lg font-sans">{book.excerpt}</p>
                ) : null}
                <p className="font-sans uppercase"> {book.author}</p>
                <time className="flex mt-2 text-gray-400">
                  {distanceToNow(new Date(book.date))}
                </time>
              </div>
            </header>
            <p className="flex justify-end content-around mr-5">
              <Whisper
                placement="left"
                controlId="control-id-hover"
                trigger="hover"
                speaker={<Tooltip>read more on goodreads.com</Tooltip>}
              >
                <Link href={book.goodreads} target="_blank">
                  <Image
                    src="/Goodreads-Logo.webp"
                    alt="book"
                    className="rounded hover:opacity-90 inline-block"
                    width={100}
                    height={20}
                  />
                </Link>
              </Whisper>
            </p>

            <div className="bg-gray-100 rounded mt-5 p-5">
              <h3 className="my-4 text-xl font-sans">My Review:</h3>
              <div
                className="text-base mt-4 mb-4 font-sans"
                dangerouslySetInnerHTML={{ __html: book.content }}
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
  const book = getBookBySlug(params.slug, [
    "slug",
    "title",
    "excerpt",
    "date",
    "content",
    "author",
    "goodreads",
    "img",
  ]);
  const content = await markdownToHtml(book.content || "");

  return {
    props: {
      book: {
        ...book,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const books = getAllBooks(["slug"]);

  return {
    paths: books.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
