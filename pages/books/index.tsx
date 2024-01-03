import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../../components/container'
import distanceToNow from '../../lib/dateRelative'
import { getAllBooks } from '../../lib/getBook'
import { Grid, Row, Col, Tooltip, Whisper } from 'rsuite';

export default function NotePage({
  allBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Grid fluid>
      {allBooks.length ? (
        allBooks.map((book) => (
        <Row className='p-3'>
          <article key={book.slug} className="mb-10">
            <Col lg={4} xs={24} className='p-1'>
                <Image
                src={book.img}
                alt="book"
                className='rounded'
                width={120}
                height={60}
                />
            </Col>
            <Col lg={20} xs={24}>
            <Link
              as={`/books/${book.slug}`}
              href="/books/[slug]"
              className='text-lg leading-6 text-slate-600 font-bold hover:text-inherit 
              hover:no-underline focus:text-inherit focus:no-underline font-sans' 
            >
              {book.title}
            </Link>
            <p className='font-sans uppercase'>{book.author}</p>
            <p className='font-sans py-1'>{book.excerpt}</p>
            <div className="text-gray-400">
              <time>{distanceToNow(new Date(book.date))}</time>
            </div>
            <p className='flex justify-end content-around'>
             <Whisper 
                placement="left" 
                controlId="control-id-hover" 
                trigger="hover" 
                speaker={<Tooltip>goodreads.com</Tooltip>}>    
                <Link 
                href={book.goodreads} target='_blank'>
                <Image
                src="/Goodreads-Logo.webp"
                alt="book"
                className='rounded inline-block'
                width={100}
                height={20}
                />            
                </Link>
                </Whisper>
                </p>   
            </Col>
          </article>
          </Row>  
        ))
      ) : (
        <p>No blog booked yet :/</p>
      )}
      </Grid>   
    </Container>
  )
}

export async function getStaticProps() {
  const allBooks = getAllBooks(['slug', 'title', 'excerpt', 'date', 'author', 'img', 'goodreads'])

  return {
    props: { allBooks },
  }
}
