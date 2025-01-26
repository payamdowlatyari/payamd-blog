import Link from "next/link";
import Container from "../../components/container";
import Image from "next/image";
import { AnimatedUnderlinedLink } from "../../components/ui/links";

/**
 * The About page component.
 *
 * This component renders a page with information about the author.
 *
 * @returns {JSX.Element} The JSX element representing the about page.
 */
export default function Page(): JSX.Element {
  return (
    <>
      <h1 className="text-3xl font-bold mb-10 ml-5">About</h1>
      <Container>
        <div className="flex flex-row-reverse flex-wrap-reverse justify-center md:justify-between items-center my-4">
          <div className="space-y-2 max-w-xl lg:max-w-2xl p-2">
            <h4 className="text-2xl font-semibold">
              My name is Payam Dowlatyari.{" "}
            </h4>

            <p className="text-neutral-600 dark:text-neutral-400">
              I am a Software Engineer and UX Designer, graduated from UC Irvine
              and work in the tech industry. I am a hobbyist photographer and
              blogger interested in art, philosophy, and social siences.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              I like to bring my thoughts on paper, once in a while, on the
              issues that matter to me. That will give me the possibility to
              assess my philosophy and outlook in the future. I also introduce
              books and films I've found impressive and write a brief review
              sharing my insights. I provided a comment section for readers who
              would like to share their views with me and others.
            </p>

            <div className="flex flex-col justify-center mt-8">
              <h3 className="text-2xl font-bold my-2">Contact</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                You can find me on{" "}
                <AnimatedUnderlinedLink
                  title="LinkedIn"
                  url="https://www.linkedin.com/in/payamdowlatyari/"
                />
                ,{" "}
                <AnimatedUnderlinedLink
                  title="Medium"
                  url="https://medium.com/@pdowlatyari"
                />
                ,{" "}
                <AnimatedUnderlinedLink
                  title="GitHub"
                  url="https://github.com/payamdowlatyari"
                />
                , and{" "}
                <AnimatedUnderlinedLink
                  title="Twitter"
                  url="https://twitter.com/payamdowlatyari"
                />
              </p>

              <p className="text-neutral-600 dark:text-neutral-400 text-md">
                You can also find me on{" "}
                <AnimatedUnderlinedLink
                  title="payamd.com"
                  url="https://www.payamd.com"
                />
              </p>
            </div>
          </div>

          <div className="max-w-md">
            <Image
              src="/me-ai-hat.jpeg"
              alt="my photo"
              className="rounded opacity-90 hover:opacity-100 transition-opacity duration-300"
              width={400}
              height={400}
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
