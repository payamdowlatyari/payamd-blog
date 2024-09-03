import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllBooks } from "../../lib/getBook";
import { Tooltip, Whisper } from "rsuite";

export default function NotePage({
  allBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1 className="text-3xl font-bold font-sans mb-10 ml-5">Books</h1>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {allBooks.length ? (
            allBooks.map((book) => (
              <article
                key={book.slug}
                className="flex flex-row items-center font-sans leading-6 border bg-gray-100 rounded-lg hover:shadow hover:shadow-gray-400 transition-shadow duration-300 ease-in-out"
              >
                <div className="w-auto min-w-40 max-w-xs">
                  <Image
                    src={book.img}
                    alt="book"
                    className="object-cover w-full rounded h-full"
                    width={100}
                    height={60}
                    loading="lazy"
                  />
                </div>
                <div className="m-1 px-2 max-w-md">
                  <Link
                    as={`/books/${book.slug}`}
                    href="/books/[slug]"
                    className="font-sans font-bold text-lg my-2 hover:no-underline hover:text-gray-600 transition-colors duration-300"
                  >
                    {book.title}
                  </Link>
                  <p className="mb-4 text-base font-semibold text-neutral-600">
                    {book.author}
                  </p>
                  <p className="mb-2 text-sm text-neutral-800">
                    {book.excerpt && book.excerpt.length > 150
                      ? book.excerpt.substring(0, 150) + "..."
                      : book.excerpt}

                    <Link
                      href="/books/[slug]"
                      as={`/books/${book.slug}`}
                      className="font-sans hover:no-underline hover:text-gray-600 transition-colors duration-300"
                    >
                      {" "}
                      Read more...
                    </Link>
                  </p>
                  <p className=" text-neutral-500">
                    <time>{distanceToNow(new Date(book.date))}</time>
                  </p>
                  <div className="flex justify-end content-around">
                    <Whisper
                      placement="left"
                      controlId="control-id-hover"
                      trigger="hover"
                      speaker={<Tooltip>goodreads.com</Tooltip>}
                    >
                      <Link
                        href={book.goodreads}
                        target="_blank"
                        className="p-2"
                      >
                        <Image
                          src="/Goodreads-Logo.webp"
                          alt="book"
                          className="rounded inline-block"
                          width={100}
                          height={20}
                        />
                      </Link>
                    </Whisper>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p>No blog booked yet :/</p>
          )}
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allBooks = getAllBooks([
    "slug",
    "title",
    "excerpt",
    "date",
    "author",
    "img",
    "goodreads",
  ]);

  return {
    props: { allBooks },
  };
}
