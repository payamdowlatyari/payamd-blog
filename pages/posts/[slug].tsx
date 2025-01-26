import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts, getPostBySlug } from "../../lib/getPost";
import markdownToHtml from "../../lib/markdownToHtml";
import Head from "next/head";
import Image from "next/image";
import { Loader } from "rsuite";
import { PostCard } from "../../components/cards/PostCard";
import { MediumLink } from "../../components/ui/links";

/**
 * A page that displays a single post with its title, author, excerpt, publication date, a link to the post's page on medium.com, and a link to the post's page on this website.
 *
 * @param {{ post: Post, randomPosts: Post[] }} - The post data to render in the page.
 * @returns {JSX.Element} - The JSX element representing the PostPage component.
 */
export default function PostPage({
  post,
  randomPosts,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <Head>{post.title && <title>{post.title} | My Web Blog</title>}</Head>

      {router.isFallback ? (
        <Loader content="Loading..." />
      ) : (
        <div>
          <article>
            <header className="flex flex-wrap md:flex-nowrap p-5">
              <Image
                src={post.img}
                alt="post"
                className="object-cover h-auto rounded mr-5"
                width={400}
                height={400}
                loading="lazy"
              />

              <div className="flex flex-col mt-5 max-w-3xl">
                <h1 className="text-2xl sm:text-3xl font-bold ">
                  {post.title}
                </h1>
                {post.excerpt ? (
                  <p className="mt-2 text-base md:text-lg text-neutral-600 dark:text-neutral-400 ">
                    {post.excerpt}
                  </p>
                ) : null}
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                  {post.author}
                </p>
                <time className="flex mt-2 text-neutral-600 dark:text-neutral-400">
                  {distanceToNow(new Date(post.date))}
                </time>
              </div>
            </header>
            <p className="flex justify-end content-around pr-4">
              <MediumLink url={post.medium} />
            </p>
            <div
              className="text-base mt-10 p-5"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <h3 className="text-2xl font-bold  mt-20 mb-10 ml-5">
            You may also like
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {randomPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "slug",
    "title",
    "excerpt",
    "date",
    "content",
    "author",
    "medium",
    "img",
  ]);
  const content = await markdownToHtml(post.content || "");

  // get two random posts
  const allPosts = getAllPosts([
    "slug",
    "title",
    "excerpt",
    "date",
    "author",
    "img",
    "medium",
  ]);
  const randomPosts = allPosts
    .filter((post) => post.slug !== params.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      randomPosts,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
