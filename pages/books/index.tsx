import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllBooks } from "../../lib/getBook";
import { Grid, Row, Col, Tooltip, Whisper } from "rsuite";

export default function NotePage({
  allBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Grid fluid>
        {allBooks.length ? (
          allBooks.map((book) => (
            <Row className="m-2 bg-gray-100 hover:bg-gray-200 duration-500 rounded">
              <Link
                as={`/books/${book.slug}`}
                href="/books/[slug]"
                className="text-base leading-6 text-slate-600 font-bold hover:text-inherit 
              hover:no-underline focus:text-inherit focus:no-underline font-sans"
              >
                <article key={book.slug} className="mb-1">
                  <Col lg={4} xs={24}>
                    <Image
                      src={book.img}
                      alt="book"
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      width={120}
                      height={60}
                    />
                  </Col>
                  <Col lg={20} xs={24} className="p-2">
                    <div className="font-sans font-bold text-base">
                      {book.title}
                    </div>
                    <div className="font-sans font-normal text-sm">
                      {book.author}
                    </div>
                    <div className="font-sans py-2 font-normal text-sm">
                      {book.excerpt}
                    </div>
                    <div className="text-gray-400 font-normal text-sm">
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
                  </Col>
                </article>
              </Link>
            </Row>
          ))
        ) : (
          <p>No blog booked yet :/</p>
        )}
      </Grid>
    </Container>
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
