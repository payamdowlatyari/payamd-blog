import type { InferGetStaticPropsType } from "next";
import Container from "../../components/container";
import { getAllBooks } from "../../lib/getBook";
import { BookCard } from "../../components/cards/BookCard";

/**
 * The book listing page, which displays all books in a grid.
 *
 * @param {{ allBooks: Book[] }} - The props for the page, which includes an array of all books.
 * @returns {JSX.Element} - The JSX element representing the page.
 */
export default function Page({
  allBooks,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <>
      <h1 className="text-3xl font-bold font-sans mb-10 ml-5">Books</h1>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {allBooks.length ? (
            allBooks.map((book) => <BookCard key={book.slug} book={book} />)
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
