import type { InferGetStaticPropsType } from "next";
import Container from "../../components/container";
import { getAllPosts } from "../../lib/getPost";
import { PostCard } from "../../components/cards/PostCard";

/**
 * Renders a page displaying a list of blog posts.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.allPosts - An array of all post objects to be displayed.
 * @returns {JSX.Element} The JSX element representing the posts page.
 */

export default function Page({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <>
      <h1 className="text-3xl font-bold font-sans ml-5 mb-10">Posts</h1>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allPosts.length ? (
            allPosts.map((post) => <PostCard key={post.slug} post={post} />)
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
