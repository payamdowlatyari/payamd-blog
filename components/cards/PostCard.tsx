import Link from "next/link";
import { Post } from "../../interfaces";
import Image from "next/image";
import distanceToNow from "../../lib/dateRelative";
import { MediumLink } from "../ui/links";

/**
 * A component that renders a card for a post with a title, author, excerpt, publication date, a link to the post's page on this website, and a link to the post's page on medium.com.
 *
 * @param {Post} post - The post data to render in the card.
 * @returns {JSX.Element} A JSX element representing the PostCard component.
 */
export const PostCard = ({ post }: Post): JSX.Element => {
  return (
    <Link
      key={post.slug}
      href={`/posts/${post.slug}`}
      className=" flex flex-col rounded-xl hover:no-underline border border-black/10 hover:border-white/30 bg-neutral-100 dark:border-white/10 dark:bg-neutral-950 dark:hover:border-white/30 transition-colors duration-300"
    >
      <span className="absolute -top-px right-5 hidden h-px w-80 bg-gradient-to-l from-transparent via-black/10 via-10% to-transparent dark:block dark:via-white/30" />

      <span className="flex">
        <Image
          src={post.img}
          alt="post"
          className="object-cover w-full rounded h-72"
          width={400}
          height={400}
          loading="lazy"
        />
      </span>
      <span className="m-2">
        <span className="p-2 font-bold block text-lg hover:no-underline text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-50 transition-colors duration-300">
          {post.title}
        </span>
        <span className="p-2 block font-semibold text-neutral-600 dark:text-neutral-400">
          {post.author}
        </span>
        <span className="p-2 block font-normal text-sm leading-[1.5] text-neutral-500 dark:text-neutral-300">
          {post.excerpt}
        </span>
        <span className="p-2 text-neutral-500 dark:text-neutral-400 text-sm">
          <time>{distanceToNow(new Date(post.date))}</time>
        </span>
        <span className="flex justify-end content-around">
          <MediumLink url={post.medium} />
        </span>
      </span>
    </Link>
  );
};
