import Container from "../components/container";
import { Nav } from "rsuite";

export interface HeaderProps {
  activeKey: string;
  onSelect: (key: string) => void;
  [key: string]: any;
}
export default function Header({ onSelect, activeKey, ...props }) {
  return (
    <header className="py-6 bg-slate-50">
      <Container>
        <Nav {...props} activeKey={activeKey} onSelect={onSelect}>
          <Nav.Item href="/" eventKey="home">
            Home
          </Nav.Item>
          <Nav.Item href="/posts" eventKey="posts">
            Posts
          </Nav.Item>
          <Nav.Item href="/books" eventKey="books">
            Books
          </Nav.Item>
          <Nav.Item href="/films" eventKey="films">
            Films
          </Nav.Item>
        </Nav>
      </Container>
    </header>
  );
}
