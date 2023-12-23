import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../../components/container'
import distanceToNow from '../../lib/dateRelative'
import { getAllPhotos } from '../../lib/getPhoto'
import { Grid, Row, Col } from 'rsuite';

export default function NotePage({
  allPhotos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
       <Grid fluid>
      {allPhotos.length ? (
        allPhotos.map((photo) => (
          <article key={photo.slug}>
          <Col lg={6} md={8} sm={12} xs={24} className='p-1 justify-center'>
          <Link
              as={`/photos/${photo.slug}`}
              href="/photos/[slug]"
              className='font-sans leading-6 text-slate-600 font-bold hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            >
            <Image
                src={photo.src}
                alt="photo"
                className='rounded'
                width={300}
                height={200}
                />
           
              {photo.title}
            </Link>          
            <div className="text-gray-400">
              <time>{distanceToNow(new Date(photo.date))}</time>
            </div>
            </Col>
          </article>
        ))
      ) : (
        <p>No blog photoed yet :/</p>
      )}
      </Grid>
    </Container>
  )
}

export async function getStaticProps() {
  const allPhotos = getAllPhotos(['slug', 'title', 'excerpt', 'date', 'src'])

  return {
    props: { allPhotos },
  }
}
