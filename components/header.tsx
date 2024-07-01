import Container from "../components/container";
import { Nav } from "rsuite";

export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <Nav appearance="subtle">
          <Nav.Item
            className="font-sans font-semibold text-slate-600 uppercase hover:no-underline hover:text-slate-900 focus:no-underline focus:text-slate-900 hover:duration-500"
            href="/"
          >
            Home
          </Nav.Item>
          <Nav.Item
            className="font-sans font-semibold text-slate-600 uppercase hover:no-underline hover:text-slate-900 focus:no-underline focus:text-slate-900 hover:duration-500"
            href="/posts"
          >
            Posts
          </Nav.Item>
          <Nav.Item
            className="font-sans font-semibold text-slate-600 uppercase hover:no-underline hover:text-slate-900 focus:no-underline focus:text-slate-900 hover:duration-500"
            href="/books"
          >
            Books
          </Nav.Item>
          <Nav.Item
            className="font-sans font-semibold text-slate-600 uppercase hover:no-underline hover:text-slate-900 focus:no-underline focus:text-slate-900 hover:duration-500"
            href="/films"
          >
            Films
          </Nav.Item>
        </Nav>
      </Container>
    </header>
  );
}
