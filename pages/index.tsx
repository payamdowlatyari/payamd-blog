import Container from "../components/container";
import Image from "next/image";
import Link from "next/link";
import { getAllBooks } from "../lib/getBook";
import { InferGetStaticPropsType } from "next";
import { getAllFilms } from "../lib/getFilm";
import { getAllPosts } from "../lib/getPost";
import distanceToNow from "../lib/dateRelative";

function HomePage({
  latestBook,
  latestFilm,
  latestPost,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className="flex flex-wrap-reverse justify-center items-center my-4">
        <div className="space-y-2 max-w-xl p-4">
          <h1 className="font-sans text-3xl font-bold">Welcome to My Blog!</h1>
          <h4 className="font-sans text-lg font-semibold">
            My name is Payam Dowlatyari.{" "}
          </h4>

          <p className="font-sans text-md">
            I am a Software Engineer and UX Designer, graduated from UC Irvine
            and work in the tech industry. I am a hobbyist photographer and
            blogger interested in art, philosophy, and social siences.
          </p>
          <p className="font-sans text-md">
            I like to bring my thoughts on paper, once in a while, on the issues
            that matter to me. That will give me the possibility to assess my
            philosophy and outlook in the future. I also introduce books and
            films I've found impressive and write a brief review sharing my
            insights. I provided a comment section for readers who would like to
            share their views with me and others.
          </p>
        </div>

        <div className="max-w-md">
          <Image
            src="/me-hat.jpeg"
            alt="my photo"
            className="rounded"
            width={300}
            height={300}
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center my-8">
        <div className="group flex flex-wrap max-w-md overflow-hidden rounded-lg border bg-gray-100 select-none hover:shadow hover:shadow-gray-400 transition-shadow duration-300 ease-in-out">
          <div className="w-full">
            <Image
              src={latestPost.img}
              alt={latestPost.title}
              className="rounded"
              width={450}
              height={300}
              loading="lazy"
            />
          </div>
          <div className="max-w-md p-4">
            <Link
              href="/posts"
              className="font-sans font-bold text-lg hover:no-underline hover:text-slate-800 transition-colors duration-300"
            >
              {latestPost.title}
            </Link>
            <p className="font-sans font-semibold text-gray-600">
              {latestPost.author}
            </p>
            <p className="font-sans leading-4 py-2">{latestPost.excerpt}</p>
            <p className="font-sans text-gray-400">
              {distanceToNow(new Date(latestPost.date))}
            </p>
            <div className="opacity-0 -translate-x-2 flex-shrink-0 group-hover:translate-x-0 py-1 px-2.5 text-[0.6rem] group-hover:opacity-100 transition-all ease-out duration-200 rounded-full flex items-center justify-end">
              <Link
                href={`/posts/${latestPost.slug}`}
                className="font-sans text-sm hover:no-underline hover:text-slate-800 transition-colors duration-300"
              >
                Read more
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 translate-x-0.5 h-3"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-center my-4">
          <div className="flex flex-wrap md:flex-nowrap max-w-lg m-2 group leading-6 border bg-gray-100 rounded-lg hover:shadow hover:shadow-gray-400 transition-shadow duration-300 ease-in-out">
            <div className="mr-2 min-w-44 w-full">
              <Image
                src={latestBook.img}
                alt={latestBook.title}
                className="rounded"
                width={250}
                height={150}
                loading="lazy"
              />
            </div>
            <div className="p-2">
              <Link
                href="/books"
                className="font-sans font-bold text-lg hover:no-underline hover:text-slate-800 transition-colors duration-300"
              >
                {latestBook.title}
              </Link>
              <p className="font-sans font-semibold text-gray-600">
                {latestBook.author}
              </p>
              <p className="font-sans leading-4 py-2">
                {latestBook.excerpt.length > 150
                  ? latestBook.excerpt.slice(0, 150) + "..."
                  : latestBook.excerpt}
              </p>
              <p className="font-sans font-light text-gray-500">
                {distanceToNow(new Date(latestBook.date))}
              </p>
              <div className="opacity-0 -translate-x-2 flex-shrink-0 group-hover:translate-x-0 py-1 px-2.5 text-[0.6rem] group-hover:opacity-100 transition-all ease-out duration-200 rounded-full flex items-center justify-end">
                <Link
                  as={`/books/${latestBook.slug}`}
                  href={"/books/[slug]"}
                  className="font-sans text-sm hover:no-underline hover:text-gray-600 transition-colors duration-300"
                >
                  Read more
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 translate-x-0.5 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap max-w-lg m-2 group leading-6 border bg-gray-100 rounded-lg hover:shadow hover:shadow-gray-400 transition-shadow duration-300 ease-in-out">
            <div className="mr-2 min-w-44 w-full">
              <Image
                src={latestFilm.img}
                alt={latestFilm.title}
                className="rounded"
                width={250}
                height={150}
                loading="lazy"
              />
            </div>
            <div className="p-2">
              <Link
                href="/films"
                className="font-sans font-bold text-lg hover:no-underline hover:text-slate-800 transition-colors duration-300"
              >
                {latestFilm.title}
              </Link>
              <p className="font-sans font-semibold text-gray-600">
                {latestFilm.director}
              </p>
              <p className="font-sans leading-4 py-2">
                {latestFilm.excerpt.length > 200
                  ? latestFilm.excerpt.slice(0, 200) + "..."
                  : latestFilm.excerpt}
              </p>
              <p className="font-sans font-light text-gray-500">
                {distanceToNow(new Date(latestFilm.date))}
              </p>
              <div className="opacity-0 -translate-x-2 flex-shrink-0 group-hover:translate-x-0 py-1 px-2.5 text-[0.6rem] group-hover:opacity-100 transition-all ease-out duration-200 rounded-full flex items-center justify-end">
                <Link
                  as={`/films/${latestFilm.slug}`}
                  href="/films/[slug]"
                  className="font-sans text-sm hover:no-underline hover:text-gray-600 transition-colors duration-300"
                >
                  Read more
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 translate-x-0.5 h-3"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
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
