import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Image from "next/image";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllBooks, getBookBySlug } from "../../lib/getBook";
import markdownToHtml from "../../lib/markdownToHtml";
import { Loader } from "rsuite";
import Head from "next/head";
import { BookCard } from "../../components/cards/BookCard";
import { GoodreadsLink } from "../../components/ui/links";

/**
 * A page that displays a book with its title, author, excerpt, publication date,
 * a link to the book's page on goodreads.com, and a review.
 *
 * @param {{ book: Book, randomBooks: Book[] }} - The book data to render in the page.
 * @returns {JSX.Element} - The JSX element representing the page.
 */
export default function BookPage({
  book,
  randomBooks,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const router = useRouter();

  if (!router.isFallback && !book?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <Head>{book.title && <title>{book.title} | My Web Blog</title>}</Head>

      {router.isFallback ? (
        <Loader content="Loading..." />
      ) : (
        <div>
          <article>
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
                <h1 className="text-3xl font-bold ">{book.title}</h1>
                {book.excerpt ? (
                  <p className="mt-2 text-base md:text-lg text-neutral-600 dark:text-neutral-400 ">
                    {book.excerpt}
                  </p>
                ) : null}
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                  {book.author}
                </p>
                <time className="flex mt-2 text-neutral-400 dark:text-neutral-600">
                  {distanceToNow(new Date(book.date))}
                </time>
              </div>
            </header>
            <p className="flex justify-end content-around mr-5">
              <GoodreadsLink url={book.goodreads} />
            </p>

            <div className="mt-5 p-5">
              <h3 className="my-4 text-xl ">My Review:</h3>
              <div
                className="text-base mt-4 mb-4"
                dangerouslySetInnerHTML={{ __html: book.content }}
              />
            </div>
          </article>

          <h3 className="text-2xl font-bold  mt-20 mb-10 ml-5">More Books</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4 rounded-md">
            {randomBooks.map((book) => (
              <BookCard book={book} key={book.slug} />
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

  // get two random books
  const allBooks = getAllBooks([
    "slug",
    "title",
    "excerpt",
    "date",
    "author",
    "img",
    "goodreads",
  ]);
  const randomBooks = allBooks
    .filter((book) => book.slug !== params.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return {
    props: {
      book: {
        ...book,
        content,
      },
      randomBooks,
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
