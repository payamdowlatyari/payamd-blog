import Link from "next/link";
import Container from "../components/container";
import { Nav, Dropdown, Avatar } from "rsuite";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, logout } = useAuth0();
  return (
    <Dropdown
      trigger="click"
      placement="bottomEnd"
      renderToggle={(props) => (
        <Avatar
          {...props}
          circle
          src={user?.picture}
          alt={user?.name}
          style={{ width: 35, height: 35, cursor: "pointer" }}
        />
      )}
    >
      <Dropdown.Item style={{ padding: 10, width: 150 }}>
        <p className="font-thin normal-case">Signed in as</p>
        <p className="font-thin normal-case">{user?.email}</p>
      </Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item style={{ fontWeight: "bold" }} onClick={() => logout()}>
        Logout
      </Dropdown.Item>
    </Dropdown>
  );
}

export default function Header() {
  const { isAuthenticated, loginWithPopup } = useAuth0();

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
          <div className="flex justify-end mt-2">
            {isAuthenticated ? (
              <Profile />
            ) : (
              <Link
                href="/"
                className="font-sans font-semibold uppercase text-gray-800 no-underline hover:no-underline hover:text-gray-600 focus:no-underline focus:text-gray-600 transition-colors duration-300"
                onClick={() => {
                  loginWithPopup({});
                }}
              >
                Login
              </Link>
            )}
          </div>
        </Nav>
      </Container>
    </header>
  );
}
