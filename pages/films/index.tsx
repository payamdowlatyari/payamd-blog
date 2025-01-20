import type { InferGetStaticPropsType } from "next";
import Container from "../../components/container";
import { getAllFilms } from "../../lib/getFilm";
import { FilmCard } from "../../components/cards/FilmCard";

/**
 * The film listing page, which displays all films in a grid.
 *
 * @param {{ allFilms: Film[] }} - The props for the page, which includes an array of all films.
 * @returns {JSX.Element} - The JSX element representing the page.
 */
export default function Page({
  allFilms,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <>
      <h1 className="text-3xl font-bold font-sans mb-10 ml-5">Films</h1>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {allFilms.length ? (
            allFilms.map((film) => <FilmCard key={film.slug} film={film} />)
          ) : (
            <p>No blog film yet :/</p>
          )}
        </div>
      </Container>
    </>
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
