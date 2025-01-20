import Link from "next/link";
import Container from "../../components/container";
import Image from "next/image";
import { AnimatedUnderlinedLink } from "../../components/ui/links";

/**
 * The About page component.
 *
 * This component renders a page with information about the author.
 *
 * The page includes a heading with the author's name, a paragraph with a brief
 * description of the author, a paragraph with a message about the website, and
 * a section with links to the author's social media profiles.
 *
 * The component also renders a photo of the author.
 *
 * The component uses the following styles:
 *
 * - The page has a white background.
 * - The text is gray.
 * - The headings are bold and have a larger font size.
 * - The links are blue and have a underline.
 * - The photo is rounded and has a shadow.
 *
 * The component uses the following components:
 *
 * - The `Container` component to render the page content.
 * - The `Image` component to render the author's photo.
 *
 * The component receives no props.
 */
export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold font-sans mb-10 ml-5">About</h1>
      <Container>
        <div className="flex flex-row-reverse flex-wrap-reverse justify-center md:justify-between items-center bg-gray-100 dark:bg-gray-950 rounded-lg my-4">
          <span className="absolute -top-px right-5 hidden h-px w-80 bg-gradient-to-l from-transparent via-black/10 via-10% to-transparent dark:block dark:via-white/30" />

          <div className="space-y-2 max-w-xl lg:max-w-2xl p-2">
            <h4 className="font-sans text-2xl font-semibold">
              My name is Payam Dowlatyari.{" "}
            </h4>

            <p className="font-sans text-gray-400">
              I am a Software Engineer and UX Designer, graduated from UC Irvine
              and work in the tech industry. I am a hobbyist photographer and
              blogger interested in art, philosophy, and social siences.
            </p>
            <p className="font-sans text-gray-400">
              I like to bring my thoughts on paper, once in a while, on the
              issues that matter to me. That will give me the possibility to
              assess my philosophy and outlook in the future. I also introduce
              books and films I've found impressive and write a brief review
              sharing my insights. I provided a comment section for readers who
              would like to share their views with me and others.
            </p>

            <div className="flex flex-col justify-center mt-8">
              <h3 className="font-sans text-2xl font-bold my-2">Contact</h3>
              <p className="font-sans text-gray-400 dark:text-gray-400">
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

              <p className="font-sans text-gray-400 text-md">
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
