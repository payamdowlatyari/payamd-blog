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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
          {allBooks.length ? (
            allBooks.map((book) => (
              <div className="font-sans text-base leading-6 font-bold m-2 max-w-sm border bg-gray-100 rounded-lg hover:shadow hover:shadow-gray-400 transition-shadow duration-300 ease-in-out">
                <article key={book.slug} className="flex flex-row flex-wrap">
                  <div className="w-full">
                    <Image
                      src={book.img}
                      alt="book"
                      className="object-cover w-full rounded md:h-60"
                      width={100}
                      height={60}
                      loading="lazy"
                    />
                  </div>
                  <div className="my-1 px-2 max-w-sm">
                    <Link
                      as={`/books/${book.slug}`}
                      href="/books/[slug]"
                      className="font-sans font-bold text-lg my-2 hover:no-underline hover:text-gray-600 transition-colors duration-300"
                    >
                      {book.title}
                    </Link>
                    <div className="font-sans font-semibold text-gray-600">
                      {book.author}
                    </div>
                    <div className="font-sans py-2 font-normal text-sm">
                      {book.excerpt.length > 200
                        ? book.excerpt.substring(0, 200) + "..."
                        : book.excerpt}{" "}
                      <Link
                        as={`/books/${book.slug}`}
                        href="/books/[slug]"
                        className="font-sans font-semibold text-sm hover:no-underline hover:text-gray-600 transition-colors duration-300"
                      >
                        Read more
                      </Link>
                    </div>
                    <div className="text-gray-500 font-normal text-sm">
                      <time>{distanceToNow(new Date(book.date))}</time>
                    </div>
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
              </div>
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
