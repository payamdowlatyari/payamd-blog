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
         <h3 className='font-sans'>Welcome to my Blog!</h3>
         <p className='font-sans text-base py-2'>
         My name is Payam, and here,
         I write about different issues of the day, 
         introduce books, and films I've read and watched recently.
         </p>
          </Panel>
          </Col>
        </Row>
        <Row>
        <Col md={12} sm={24}>
        <Panel>
       
        <Image
          src="https://storage.googleapis.com/www.payamd.com/Portfolio/women-life-liberty.webp"
          alt="wall"
          className='rounded py-2'
          width={250}
          height={150}
        />
        <h4 className='font-sans'>Women, Life, Liberty</h4>  
        <p className='font-sans text-base text-slate-700 uppercase font-semibold'>Payam Dowlatyari</p>
          <p className='font-sans pb-2'>
            About a year a go, Iranian people marched into the streets to oppose the systematic violation of human rights by the government.

          </p>
          <Link 
            className='font-bold text-slate-500 hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            href="/posts"
            >
            Read my latest articles  
            </Link>
        
        </Panel>
        </Col>

        <Col md={12} sm={24}>
        <Panel>
        <h4 className='font-sans'>The Drama of the Gifted Child</h4>  
        <p className='font-sans text-base text-slate-700 uppercase font-semibold'>Alice Miller</p>
        <p className='font-sans pb-2'>
          A book about psychology of childhood
          </p>
        <Link 
            className='font-bold text-slate-500 hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            href="/books"
            >
            Check out the list of books  
            </Link>
        </Panel>
        </Col>
        <Col md={12} sm={24}>
        <Panel>
        <h4 className='font-sans'>Fanny and Alexander (1982)</h4>  
        <p className='font-sans text-base text-slate-700 uppercase font-semibold'>Ingmar Bergman</p>
        <p className='font-sans pb-2'>
          A classic European film 
          </p>
        <Link 
            className='font-bold text-slate-500 hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline' 
            href="/films"
            > See more films  
            </Link>
        </Panel>
        </Col>
        </Row> 
        </Grid>
      </Container>

    </>
  )
}

export default HomePage
