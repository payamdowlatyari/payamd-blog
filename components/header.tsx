import Link from "next/link";
import Container from "../components/container";
import { Nav, Navbar } from "rsuite";

export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <Nav>
          <Nav.Item>
            <Link
              className="font-sans font-semibold text-slate-600 uppercase hover:no-underline hover:text-slate-900 focus:no-underline focus:text-slate-900 hover:duration-500"
              href="/"
            >
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className="font-sans font-semibold text-slate-600 uppercase hover:no-underline hover:text-slate-900 focus:no-underline focus:text-slate-900 hover:duration-500"
              href="/posts"
            >
              Posts
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className="font-sans font-semibold text-slate-600 uppercase hover:no-underline hover:text-slate-900 focus:no-underline focus:text-slate-900 hover:duration-500"
              href="/books"
            >
              Books
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className="font-sans font-semibold text-slate-600 uppercase hover:no-underline hover:text-slate-900 focus:no-underline focus:text-slate-900 hover:duration-500"
              href="/films"
            >
              Films
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </header>
  );
}
