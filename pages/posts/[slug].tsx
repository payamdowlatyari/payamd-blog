import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Comment from "../../components/comment";
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
          <article>
            <header>
              <Image
                src={post.img}
                alt="post"
                className="object-cover w-full h-auto rounded"
                width={1000}
                height={1000}
                loading="lazy"
              />
              <h1 className="text-3xl mt-5 font-bold font-sans">
                {post.title}
              </h1>
              {post.excerpt ? (
                <p className="mt-2 text-lg font-sans">{post.excerpt}</p>
              ) : null}
              <p className="font-sans uppercase"> {post.author}</p>
              <time className="flex mt-2 text-gray-400">
                {distanceToNow(new Date(post.date))}
              </time>
            </header>
            <p className="flex justify-end content-around">
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
              className="text-base mt-10 font-sans"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <Comment />
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

  return {
    props: {
      post: {
        ...post,
        content,
      },
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
