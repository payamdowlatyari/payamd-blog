import Container from "../components/container";
import Image from "next/image";
import Link from "next/link";
import { Grid, Row, Col, Panel } from "rsuite";
import { getAllBooks } from "../lib/getBook";
import { InferGetStaticPropsType } from "next";
import { getAllFilms } from "../lib/getFilm";
import { getAllPosts } from "../lib/getPost";

function HomePage({
  latestBook,
  latestFilm,
  latestPost,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Container>
        <Grid fluid>
          <Row className="my-2 p-6 rounded bg-white shadow-lg">
            <Col md={12} sm={24}>
              <div className="space-y-2 p-4">
                <h4 className="font-sans text-lg font-semibold">
                  My name is Payam Dowlatyari.{" "}
                </h4>

                <p className="font-sans text-md">
                  I am a Software Engineer and UX Designer, graduated from UC
                  Irvine and work in the tech industry. I am a hobbyist
                  photographer and blogger interested in art, philosophy, and
                  social siences.
                </p>
                <p className="font-sans text-md">
                  I like to bring my thoughts on paper, once in a while, on the
                  issues that matter to me. That will give me the possibility to
                  assess my philosophy and outlook in the future. I also
                  introduce books and films I've found impressive and write a
                  brief review sharing my insights. I provided a comment section
                  for readers who would like to share their views with me and
                  others.
                </p>
              </div>
            </Col>
            <Col lg={12} xs={24}>
              <div className="container max-w-3xl m-auto my-1">
                <Image
                  src="https://storage.googleapis.com/www.payamd.com/Portfolio/me-camera.jpeg"
                  alt="my photo"
                  className="rounded"
                  width={500}
                  height={350}
                />
              </div>
            </Col>
          </Row>
          <Row className="px-2 my-2 bg-white shadow-lg">
            <Panel className="my-1 py-4 h-full">
              <Col md={12} sm={24}>
                <Image
                  src={latestPost.img}
                  alt={latestPost.title}
                  className="rounded"
                  width={360}
                  height={240}
                />
              </Col>
              <Col md={12} sm={24}>
                <Link
                  href="/posts"
                  className="font-sans pt-2 text-lg font-semibold"
                >
                  {latestPost.title}
                </Link>
                <p className="font-sans font-semibold text-base text-slate-500">
                  {latestPost.author}
                </p>
                <p className="font-sans pb-2">{latestPost.excerpt}</p>
              </Col>
            </Panel>
          </Row>
          <Row className="px-2 my-2 bg-white shadow-lg">
            <Col md={12} sm={24} className="h-full">
              <Panel className="my-1 py-1">
                <div className="container max-w-3xl m-auto px-2 my-4">
                  <Image
                    src={latestBook.img}
                    alt={latestBook.title}
                    className="rounded"
                    width={180}
                    height={200}
                  />
                </div>
                <div className="min-h-52">
                  <Link
                    href="/books"
                    className="font-sans font-semibold text-lg"
                  >
                    {latestBook.title}
                  </Link>
                  <p className="font-sans font-semibold text-base text-slate-500">
                    {latestBook.author}
                  </p>
                  <p className="font-sans">{latestBook.excerpt}</p>
                </div>
              </Panel>
            </Col>
            <Col md={12} sm={24} className="h-full">
              <Panel className="my-1 py-1">
                <div className="container max-w-3xl m-auto px-2 my-4">
                  <Image
                    src={latestFilm.img}
                    alt={latestFilm.title}
                    className="rounded"
                    width={180}
                    height={200}
                  />
                </div>
                <div className="min-h-52">
                  <Link
                    href="/films"
                    className="font-sans font-semibold text-lg"
                  >
                    {latestFilm.title}
                  </Link>
                  <p className="font-sans font-semibold text-base text-slate-500">
                    {latestFilm.director}
                  </p>
                  <p className="font-sans">{latestFilm.excerpt}</p>
                </div>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const books = getAllBooks([
    "slug",
    "title",
    "excerpt",
    "date",
    "author",
    "img",
    "goodreads",
  ]);
  const latestBook = books[0];
  const films = getAllFilms([
    "slug",
    "title",
    "excerpt",
    "date",
    "director",
    "img",
  ]);
  const latestFilm = films[0];
  const posts = getAllPosts([
    "slug",
    "title",
    "excerpt",
    "date",
    "img",
    "medium",
    "author",
  ]);

  const latestPost = posts[0];
  return {
    props: {
      latestBook,
      latestFilm,
      latestPost,
    },
  };
}

export default HomePage;
