import Link from 'next/link'
import Container from '../components/container'

export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex space-x-4">
          <Link 
            className='font-bold uppercase text-slate-500 hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            href="/"
            >
            Home
            </Link>
            <Link 
            className='font-bold uppercase text-slate-500 hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            href="/about"
            >
            About
            </Link>
          <Link 
            className='font-bold uppercase text-slate-500 hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            href="/posts"
            >
            Posts
            </Link>
            <Link 
            className='font-bold uppercase text-slate-500 hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            href="/books"
            >
            Books
            </Link>
            <Link 
            className='font-bold uppercase text-slate-500 hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            href="/films"
            >
            Films
            </Link>
            <Link 
            className='font-bold uppercase text-slate-500 hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            href="/photos"
            >
            Photos
            </Link>
        </nav>
      </Container>
    </header>
  )
}
