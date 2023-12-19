import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../../components/container'
import distanceToNow from '../../lib/dateRelative'
import { getAllFilms } from '../../lib/getFilm'
import { Grid, Row, Col, Tooltip, Whisper } from 'rsuite';

export default function NotePage({
  allFilms,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Grid fluid>
      {allFilms.length ? (
        allFilms.map((film) => (
        <Row className='p-3'>
          <article key={film.slug} className="mb-10">
            <Col lg={4} xs={24} className='p-1'>
                <Image
                src={film.img}
                alt="film"
                className='rounded'
                width={150}
                height={75}
                />
            </Col>
            <Col lg={20} xs={24}>
            <Link
              as={`/films/${film.slug}`}
              href="/films/[slug]"
              className='text-lg leading-6 text-inherit font-bold hover:text-inherit 
              hover:no-underline focus:text-inherit focus:no-underline font-sans' 
            >
              {film.title}
            </Link>
            <p className='font-sans uppercase'>{film.director}</p>
            <p className='font-sans py-1'>{film.excerpt}</p>
            <div className="text-gray-400">
              <time>{distanceToNow(new Date(film.date))}</time>
            </div>
            <p className='flex justify-end content-around'>
             <Whisper 
                placement="left" 
                controlId="control-id-hover" 
                trigger="hover" 
                speaker={<Tooltip>imdb.com</Tooltip>}>    
                <Link 
                href={film.imdb} target='_blank'>
                <Image
                src="/IMDB_Logo_2016.svg.png"
                alt="film"
                className='rounded inline-block'
                width={40}
                height={20}
                /> 
                <span className='p-1 font-semibold text-slate-800'>{film.rate}</span>    
                </Link>
                </Whisper>
                </p>   
   
            </Col>
          </article>
          </Row>  
        ))
      ) : (
        <p>No blog film yet :/</p>
      )}
      </Grid>   
    </Container>
  )
}

export async function getStaticProps() {
  const allFilms = getAllFilms(['slug', 'title', 'excerpt', 'date', 'director', 'img', 'imdb', 'rate'])

  return {
    props: { allFilms },
  }
}
