import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllFilms } from "../../lib/getFilm";
import { Grid, Row, Col, Tooltip, Whisper } from "rsuite";

export default function NotePage({
  allFilms,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Grid fluid>
        {allFilms.length ? (
          allFilms.map((film) => (
            <Row className="m-2 bg-gray-100 hover:bg-gray-200 duration-500 rounded">
              <Link
                as={`/films/${film.slug}`}
                href="/films/[slug]"
                className="text-base leading-6 text-slate-600 font-bold hover:text-inherit 
              hover:no-underline focus:text-inherit focus:no-underline font-sans"
              >
                <article key={film.slug} className="mb-1">
                  <Col lg={4} xs={24}>
                    <Image
                      src={film.img}
                      alt="film"
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      width={150}
                      height={75}
                    />
                  </Col>
                  <Col lg={20} xs={24} className="p-2">
                    <div className="font-sans font-bold text-base">
                      {film.title}
                    </div>
                    <div className="font-sans font-normal text-sm">
                      {film.director}
                    </div>
                    <div className="font-sans py-2 font-normal text-sm">
                      {film.excerpt}
                    </div>
                    <div className="text-gray-400 font-normal text-sm">
                      <time>{distanceToNow(new Date(film.date))}</time>
                    </div>
                    <div className="flex justify-end content-around">
                      <Whisper
                        placement="left"
                        controlId="control-id-hover"
                        trigger="hover"
                        speaker={<Tooltip>imdb.com</Tooltip>}
                      >
                        <Link href={film.imdb} target="_blank" className="p-2">
                          <Image
                            src="/IMDB_Logo_2016.svg.png"
                            alt="film"
                            className="rounded inline-block"
                            width={40}
                            height={20}
                          />
                          <span className="p-1 font-semibold text-slate-800">
                            {film.rate}
                          </span>
                        </Link>
                      </Whisper>
                    </div>
                  </Col>
                </article>
              </Link>
            </Row>
          ))
        ) : (
          <p>No blog film yet :/</p>
        )}
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const allFilms = getAllFilms([
    "slug",
    "title",
    "excerpt",
    "date",
    "director",
    "img",
    "imdb",
    "rate",
  ]);

  return {
    props: { allFilms },
  };
}
