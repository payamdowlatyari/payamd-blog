import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts, getPostBySlug } from "../../lib/getPost";
import markdownToHtml from "../../lib/markdownToHtml";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Whisper, Tooltip, Loader } from "rsuite";

export default function PostPage({
  post,
  randomPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <Head>
        <title>{post.title} | My Web Blog</title>
      </Head>

      {router.isFallback ? (
        <Loader content="Loading..." />
      ) : (
        <div>
          <article className="border bg-gray-100 rounded-lg">
            <header className="flex flex-wrap p-5">
              <Image
                src={post.img}
                alt="post"
                className="object-cover h-auto rounded mr-5"
                width={400}
                height={400}
                loading="lazy"
              />

              <div className="flex flex-col mt-5 max-w-3xl">
                <h1 className="text-3xl font-bold font-sans">{post.title}</h1>
                {post.excerpt ? (
                  <p className="mt-2 text-lg font-sans">{post.excerpt}</p>
                ) : null}
                <p className="font-sans uppercase"> {post.author}</p>
                <time className="flex mt-2 text-gray-400">
                  {distanceToNow(new Date(post.date))}
                </time>
              </div>
            </header>
            <p className="flex justify-end content-around pr-4">
              <Whisper
                placement="left"
                controlId="control-id-hover"
                trigger="hover"
                speaker={<Tooltip>read this article on medium.com</Tooltip>}
              >
                <Link href={post.medium} target="_blank">
                  <Image
                    src="/Medium_logo.svg.png"
                    alt="book"
                    className="rounded inline-block"
                    width={100}
                    height={20}
                  />
                </Link>
              </Whisper>
            </p>
            <div
              className="text-base mt-10 font-sans bg-gray-100 p-5 rounded"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <h3 className="text-2xl font-bold font-sans mt-20 mb-10 ml-5">
            You may also like
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {randomPosts.map((post) => (
              <div
                key={post.slug}
                className="space-y-2 max-w-xl lg:max-w-2xl p-1 m-1 flex flex-wrap bg-gray-100 rounded-lg hover:shadow hover:shadow-gray-400 transition-shadow duration-300 ease-in-out"
              >
                <Image
                  src={post.img}
                  alt="post"
                  className="object-cover h-auto rounded"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <div className="m-2 p-2 w-auto min-w-40 max-w-xs">
                  <Link
                    as={`/posts/${post.slug}`}
                    href="/posts/[slug]"
                    className="font-sans font-bold text-lg hover:no-underline hover:text-slate-800 transition-colors duration-300"
                  >
                    {post.title}
                  </Link>

                  <p className="font-sans text-md text-gray-600 font-semibold my-1">
                    {post.author}
                  </p>
                  <p className="font-sans text-md">{post.excerpt}</p>

                  <time className="flex mt-2 text-gray-400">
                    {distanceToNow(new Date(post.date))}
                  </time>
                </div>
              </div>
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
