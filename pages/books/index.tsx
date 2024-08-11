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
      <Grid>
        {allBooks.length ? (
          allBooks.map((book) => (
            <Row className="font-sans text-base leading-6 text-slate-600 font-bold m-2">
              <article key={book.slug}>
                <Col lg={4} sm={12} xs={24}>
                  <Image
                    src={book.img}
                    alt="book"
                    className="object-cover w-full rounded h-96 md:h-auto md:w-48"
                    width={120}
                    height={60}
                    loading="lazy"
                  />
                </Col>
                <Col lg={20} sm={12} xs={24} className="pt-1">
                  <Link
                    as={`/books/${book.slug}`}
                    href="/books/[slug]"
                    className="font-sans font-bold text-base hover:no-underline"
                  >
                    {book.title}
                  </Link>
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
