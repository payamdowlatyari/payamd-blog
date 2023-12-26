import Container from '../components/container'
import Image from 'next/image'
import Link from 'next/link'
import { Grid, Row, Col, Panel } from 'rsuite';

function HomePage() {
  return (
    <>
      <Container>
        <Grid fluid>
         <Row>
         <Col md={24} sm={24}>
         <Panel>
         <h4 className='font-sans'>Welcome to my Blog!</h4>
         <p className='font-sans py-2'>
         In this blog,
         I write about different issues, share my recent photos, 
         introduce books, and suggest films.
         </p>
          </Panel>
          </Col>
        </Row>
        <Row>
        <Col md={12} sm={24}>
        <Panel>
          <Link 
            className='text-inherit hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            href="/posts"
            >
              <Image
                src="https://storage.googleapis.com/www.payamd.com/Portfolio/women-life-liberty.webp"
                alt="wall"
                className='rounded'
                width={300}
                height={200}
              />
            <h5 className='font-sans pt-2'>Women, Life, Liberty</h5>  
            </Link>
            <p className='font-sans pb-2'>
            Story of a Social Movement
            </p>
        </Panel>
        </Col>
        <Col md={12} sm={24}>
        <Panel>   
          <Link 
            className='text-inherit hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            href="/photos"
            >
            <Image
              src="https://storage.googleapis.com/www.payamd.com/images/dark-green.jpeg"
              alt="dark green"
              className='rounded'
              width={300}
              height={200}
            />   
           <h5 className='font-sans pt-2'>Photo Gallery</h5>  
            </Link>
        </Panel>
        </Col>
        </Row> 
        <Row> 
        <Col md={12} sm={24}>
        <Panel>
        <Link 
            className='text-inherit hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            href="/books"
            >
            <h5 className='font-sans'>The Drama of the Gifted Child</h5>  
            </Link>  
        <p className='font-sans text-base text-slate-700 font-semibold'>Alice Miller</p>
        <p className='font-sans'>
          A book about psychology of childhood
          </p>
        </Panel>
        </Col>
        <Col md={12} sm={24}>
        <Panel>
        <Link 
            className='text-inherit hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            href="/films"
            ><h5 className='font-sans'>Fanny and Alexander</h5>  
            </Link>  
          <p className='font-sans text-base text-slate-700 font-semibold'>Ingmar Bergman</p>
          <p className='font-sans'>
          A classic European film 
          </p>
        </Panel>
        </Col>
        </Row> 
        </Grid>
      </Container>

    </>
  )
}

export default HomePage
