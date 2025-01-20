import Container from "../components/container";
import { Nav } from "rsuite";
import { LinkOverlay } from "./ui/links";

/**
 * Header component
 *
 * This component renders the main navigation header for the application. It includes
 * links to various sections of the website such as Home, About, Posts, Books, and Films.
 * The navigation is displayed in a flexible layout that adjusts for different screen sizes.
 *
 * @returns {JSX.Element} The rendered header component with navigation links.
 */

export default function Header(): JSX.Element {
  return (
    <header className="mb-6">
      <Container>
        <Nav className="flex flex-col sm:flex-row sm:justify-between font-semibold uppercase">
          <div className="flex">
            <LinkOverlay url="/" title="Home" />
            <LinkOverlay url="/about" title="About" />
          </div>
          <div className="flex">
            <LinkOverlay url="/posts" title="Posts" />
            <LinkOverlay url="/books" title="Books" />
            <LinkOverlay url="/films" title="Films" />
          </div>
        </Nav>
      </Container>
    </header>
  );
}
