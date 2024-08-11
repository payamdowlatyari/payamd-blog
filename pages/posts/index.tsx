import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts } from "../../lib/getPost";
import { Grid, Row, Col, Tooltip, Whisper } from "rsuite";

export default function NotePage({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Grid>
        {allPosts.length ? (
          allPosts.map((post) => (
            <Row className="font-sans text-base leading-6 text-slate-600 font-bold m-2">
              <article key={post.slug}>
                <Col lg={8} xs={24}>
                  <Image
                    src={post.img}
                    alt="post"
                    className="object-cover w-full rounded h-96 md:h-auto md:w-80"
                    width={400}
                    height={400}
                  />
                </Col>
                <Col lg={16} xs={24} className="pt-1">
                  <Link
                    as={`/posts/${post.slug}`}
                    href="/posts/[slug]"
                    className="font-sans font-bold text-base hover:no-underline"
                  >
                    {post.title}
                  </Link>
                  <div className="font-sans font-normal text-sm">
                    {post.author}
                  </div>
                  <div className="font-sans py-2 font-normal text-sm">
                    {post.excerpt}
                  </div>
                  <div className="text-gray-400 font-normal text-sm">
                    <time>{distanceToNow(new Date(post.date))}</time>
                  </div>
                  <div className="flex justify-end content-around">
                    <Whisper
                      placement="left"
                      controlId="control-id-hover"
                      trigger="hover"
                      speaker={<Tooltip>medium.com</Tooltip>}
                    >
                      <Link href={post.medium} target="_blank" className="p-1">
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
                </Col>
              </article>
            </Row>
          ))
        ) : (
          <p>No blog posted yet :/</p>
        )}
      </Grid>
    </Container>
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
