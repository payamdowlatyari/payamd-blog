import Link from "next/link";
import Container from "../../components/container";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <h1 className="text-3xl font-bold font-sans mb-10 ml-5">About</h1>
      <Container>
        <div className="flex flex-row-reverse flex-wrap-reverse justify-center md:justify-between items-center my-4 bg-gray-100 rounded-md">
          <div className="space-y-2 max-w-xl lg:max-w-2xl p-2">
            <h4 className="font-sans text-2xl font-semibold">
              My name is Payam Dowlatyari.{" "}
            </h4>

            <p className="font-sans text-md">
              I am a Software Engineer and UX Designer, graduated from UC Irvine
              and work in the tech industry. I am a hobbyist photographer and
              blogger interested in art, philosophy, and social siences.
            </p>
            <p className="font-sans text-md">
              I like to bring my thoughts on paper, once in a while, on the
              issues that matter to me. That will give me the possibility to
              assess my philosophy and outlook in the future. I also introduce
              books and films I've found impressive and write a brief review
              sharing my insights. I provided a comment section for readers who
              would like to share their views with me and others.
            </p>

            <div className="flex flex-col justify-center mt-8">
              <h3 className="font-sans text-2xl font-bold my-2">Contact</h3>
              <p className="font-sans text-md">
                You can find me on{" "}
                <Link
                  href="https://www.linkedin.com/in/payamdowlatyari/"
                  className="font-sans font-semibold hover:no-underline hover:text-gray-600 transition-colors duration-300"
                  target="_blank"
                >
                  LinkedIn
                </Link>
                ,{" "}
                <Link
                  href="https://github.com/payamdowlatyari"
                  className="font-sans font-semibold hover:no-underline hover:text-gray-600 transition-colors duration-300"
                  target="_blank"
                >
                  GitHub
                </Link>
                , and{" "}
                <Link
                  href="https://twitter.com/payamdowlatyari"
                  className="font-sans font-semibold hover:no-underline hover:text-gray-600 transition-colors duration-300"
                  target="_blank"
                >
                  Twitter
                </Link>
              </p>

              <p className="font-sans text-md">
                You can also find me on{" "}
                <Link
                  href="https://www.payamd.com"
                  className="font-sans font-semibold hover:no-underline hover:text-gray-600 transition-colors duration-300"
                  target="_blank"
                >
                  payamd.com
                </Link>
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
