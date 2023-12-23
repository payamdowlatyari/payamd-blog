import type { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Image from 'next/image'
import Comment from '../../components/comment'
import Container from '../../components/container'
import distanceToNow from '../../lib/dateRelative'
import { getAllPhotos, getPhotoBySlug } from '../../lib/getPhoto'
import markdownToHtml from '../../lib/markdownToHtml'
import Head from 'next/head'
import { Grid, Row, Col, Panel } from 'rsuite';


export default function PhotoPage({
  photo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()

  if (!router.isFallback && !photo?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Container>
      <Head>
        <title>{photo.title} | My Web Blog</title>
      </Head>

      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <div>
          <article>
            <header>
              <Grid fluid>
                <Row>
                  <Col md={18} sm={24}>                 
                  <div className='flex justify-center'>
                  <Image
                    src={photo.src}
                    alt="photo"
                    className='rounded'
                    width={600}
                    height={400}
                  />
                  </div>
                </Col>
                <Col md={6} sm={24}>
                <h1 
                className="text-2xl font-bold font-sans"
                >{photo.title}</h1>
                {photo.excerpt ? (
                  <p className="mt-2 font-sans">{photo.excerpt}</p>
                ) : null}
              <time className="flex mt-2 text-gray-400">
                {distanceToNow(new Date(photo.date))}
              </time>
              </Col>
                </Row>
              </Grid>
            </header>
          </article>
          <Comment />
        </div>
      )}
    </Container>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const photo = getPhotoBySlug(params.slug, [
    'slug',
    'title',
    'excerpt',
    'date',
    'content',
    'src'
  ])
  const content = await markdownToHtml(photo.content || '')

  return {
    props: {
      photo: {
        ...photo,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const photos = getAllPhotos(['slug'])

  return {
    paths: photos.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: false,
  }
}
