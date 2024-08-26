import Link from "next/link";
import Container from "../components/container";
import { Nav } from "rsuite";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { isAuthenticated, loginWithPopup, logout, user } = useAuth0();
  return (
    <header className="py-2 mb-6 bg-slate-50">
      <Container>
        <Nav className="flex justify-between font-semibold uppercase">
          <div>
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
          <div>
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
          <div>
            {isAuthenticated ? (
              <Link
                href="/"
                className="font-sans font-semibold uppercase text-gray-800 no-underline hover:no-underline hover:text-gray-600 focus:no-underline focus:text-gray-600 transition-colors duration-300 mx-2"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            ) : (
              <Link
                href="/"
                className="font-sans font-semibold uppercase text-gray-800 no-underline hover:no-underline hover:text-gray-600 focus:no-underline focus:text-gray-600 transition-colors duration-300 mx-2"
                onClick={() => {
                  loginWithPopup({});
                }}
              >
                Login
              </Link>
            )}
          </div>
        </Nav>
        <div className="flex justify-start m-1">
          {user?.name && (
            <p className="text-base text-gray-600">Welcome, {user.name}!</p>
          )}
        </div>
      </Container>
    </header>
  );
}
