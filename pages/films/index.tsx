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
      <Grid>
        {allFilms.length ? (
          allFilms.map((film) => (
            <Row className="font-sans text-base leading-6 text-slate-600 font-bold m-2">
              <article key={film.slug} className="mb-1">
                <Col lg={4} xs={24}>
                  <Image
                    src={film.img}
                    alt="film"
                    className="object-cover w-full rounded h-96 md:h-auto md:w-48"
                    width={150}
                    height={75}
                  />
                </Col>
                <Col lg={20} xs={24} className="p-2">
                  <Link
                    as={`/films/${film.slug}`}
                    href="/films/[slug]"
                    className="font-sans font-bold text-base hover:no-underline"
                  >
                    {film.title}
                  </Link>
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
