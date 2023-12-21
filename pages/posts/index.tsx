import type { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../../components/container'
import distanceToNow from '../../lib/dateRelative'
import { getAllPosts } from '../../lib/getPost'
import { Grid, Row, Col, Tooltip, Whisper } from 'rsuite';

export default function NotePage({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
       <Grid fluid>
      {allPosts.length ? (
        allPosts.map((post) => (
          <Row className='p-3'>
          <article key={post.slug} className="mb-10">
          <Col lg={8} xs={24} className='p-1'>
          <Image
                src={post.img}
                alt="post"
                className='rounded'
                width={300}
                height={200}
                />
          </Col>
          <Col lg={16} xs={24}>
            <Link
              as={`/posts/${post.slug}`}
              href="/posts/[slug]"
              className='font-sans text-lg leading-6 text-slate-600 font-bold hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            >
              {post.title}
            </Link>
            <p className='font-sans uppercase'>{post.author}</p>
           
            <p className='font-sans py-1'>{post.excerpt}</p>
            <div className="text-gray-400">
              <time>{distanceToNow(new Date(post.date))}</time>
            </div>
            <p className='flex justify-end content-around'>
             <Whisper 
                placement="left" 
                controlId="control-id-hover" 
                trigger="hover" 
                speaker={<Tooltip>medium.com</Tooltip>}>    
                <Link 
                href={post.medium} target='_blank'>
                <Image
                src="/Medium_logo.svg.png"
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
        <p>No blog posted yet :/</p>
      )}
      </Grid>
    </Container>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['slug', 'title', 'excerpt', 'date', 'img', 'medium', 'author'])

  return {
    props: { allPosts },
  }
}
