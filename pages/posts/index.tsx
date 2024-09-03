import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts } from "../../lib/getPost";
import { Tooltip, Whisper } from "rsuite";

export default function NotePage({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1 className="text-3xl font-bold font-sans ml-5 mb-10">Posts</h1>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allPosts.length ? (
            allPosts.map((post) => (
              <div className="font-sans text-base leading-6 font-bold m-2 border bg-gray-100 rounded-lg hover:shadow hover:shadow-gray-400 transition-shadow duration-300 ease-in-out">
                <article key={post.slug}>
                  <div className="flex">
                    <Image
                      src={post.img}
                      alt="post"
                      className="object-cover w-full rounded h-72"
                      width={400}
                      height={400}
                      loading="lazy"
                    />
                  </div>
                  <div className="my-2 px-4">
                    <Link
                      as={`/posts/${post.slug}`}
                      href="/posts/[slug]"
                      className="font-sans font-bold text-lg my-2 hover:no-underline hover:text-gray-600 transition-colors duration-300"
                    >
                      {post.title}
                    </Link>
                    <div className="font-sans font-semibold text-gray-600">
                      {post.author}
                    </div>
                    <div className="font-sans py-2 font-normal text-sm">
                      {post.excerpt}
                    </div>
                    <div className="text-gray-500 font-normal text-sm">
                      <time>{distanceToNow(new Date(post.date))}</time>
                    </div>
                    <div className="flex justify-end content-around">
                      <Whisper
                        placement="left"
                        controlId="control-id-hover"
                        trigger="hover"
                        speaker={<Tooltip>medium.com</Tooltip>}
                      >
                        <Link
                          href={post.medium}
                          target="_blank"
                          className="p-1"
                        >
                          <Image
                            src="/Medium_logo.svg.png"
                            alt="book"
                            className="rounded inline-block"
                            width={100}
                            height={20}
                          />
                        </Link>
                      </Whisper>
                    </div>
                  </div>
                </article>
              </div>
            ))
          ) : (
            <p>No blog posted yet :/</p>
          )}
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "slug",
    "title",
    "excerpt",
    "date",
    "img",
    "medium",
    "author",
  ]);

  return {
    props: { allPosts },
  };
}
