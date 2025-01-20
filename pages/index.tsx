import Container from "../components/container";
import { getAllBooks } from "../lib/getBook";
import { InferGetStaticPropsType } from "next";
import { getAllFilms } from "../lib/getFilm";
import { getAllPosts } from "../lib/getPost";
import { PostCard } from "../components/cards/PostCard";
import { BookCard } from "../components/cards/BookCard";
import { FilmCard } from "../components/cards/FilmCard";
import { Book, Film, Post } from "../interfaces";

/**
 * The homepage of the website, which displays the latest post, book, and film in a grid.
 *
 * @param {{ latestBook: Book, latestFilm: Film, latestPost: Post }} - The latest book, film, and post.
 * @returns {JSX.Element} - The JSX element representing the homepage.
 */
export default function Page({
  latestBook,
  latestFilm,
  latestPost,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <Container>
      <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
        <div className="flex flex-col w-full sm:w-3/5 md:w-2/5 gap-2">
          <PostCard post={latestPost} />
        </div>
        <div className="flex flex-col w-full sm:w-3/5 md:w-2/5 gap-2">
          <BookCard book={latestBook} />
          <FilmCard film={latestFilm} />
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const books: Book[] = getAllBooks([
    "slug",
    "title",
    "excerpt",
    "date",
    "author",
    "img",
    "goodreads",
  ]);
  const latestBook: Book = books[0];
  const films: Film[] = getAllFilms([
    "slug",
    "title",
    "excerpt",
    "date",
    "director",
    "img",
    "imdb",
  ]);
  const latestFilm: Film = films[0];
  const posts: Post[] = getAllPosts([
    "slug",
    "title",
    "excerpt",
    "date",
    "img",
    "medium",
    "author",
  ]);

  const latestPost: Post = posts[0];
  return {
    props: {
      latestBook,
      latestFilm,
      latestPost,
    },
  };
}
