import Link from 'next/link';
import Container from '../components/container';


export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex flex-wrap space-x-2">
          <Link
            className='font-sans font-bold uppercase text-slate-500 border-b-2 border-b-transparent hover:text-inherit hover:no-underline hover:border-b-black focus:text-inherit focus:border-b-black focus:no-underline hover:duration-500'
            href="/"
          >
            About
          </Link>
          <Link
            className='font-sans font-bold uppercase text-slate-500 border-b-2 border-b-transparent hover:text-inherit hover:no-underline hover:border-b-black focus:text-inherit focus:border-b-black focus:no-underline hover:duration-500'
            href="/posts"
          >
            Posts
          </Link>
          <Link
            className='font-sans font-bold uppercase text-slate-500 border-b-2 border-b-transparent hover:text-inherit hover:no-underline hover:border-b-black focus:text-inherit focus:border-b-black focus:no-underline hover:duration-500'
            href="/books"
          >
            Books
          </Link>
          <Link
            className='font-sans font-bold uppercase text-slate-500 border-b-2 border-b-transparent hover:text-inherit hover:no-underline hover:border-b-black focus:text-inherit focus:border-b-black focus:no-underline hover:duration-500'
            href="/films"
          >
            Films
          </Link>
        </nav>
      </Container>
    </header>
  );
}


