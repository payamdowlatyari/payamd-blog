import Link from "next/link";
import Container from "../components/container";
import { Nav } from "rsuite";

export default function Header() {
  return (
    <header className="mb-6">
      <Container>
        <Nav className="flex flex-col sm:flex-row sm:justify-between font-semibold uppercase">
          <div className="mt-2">
            <Link
              href="/"
              className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-gray-600 hover:text-gray-900 duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-gray-600 hover:text-gray-900 duration-300 ease-in-out"
            >
              About
            </Link>
          </div>
          <div className="mt-2">
            <Link
              href="/posts"
              className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-gray-600 hover:text-gray-900 duration-300 ease-in-out"
            >
              Posts
            </Link>
            <Link
              href="/books"
              className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-gray-600 hover:text-gray-900 duration-300 ease-in-out"
            >
              Books
            </Link>
            <Link
              href="/films"
              className="mr-2 hover:no-underline focus:no-underline md:mr-4 text-sm leading-6 text-gray-600 hover:text-gray-900 duration-300 ease-in-out"
            >
              Films
            </Link>
          </div>
        </Nav>
      </Container>
    </header>
  );
}
