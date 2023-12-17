import Container from '../components/container'
import Image from 'next/image'
import { Grid, Row, Col, Tooltip, Whisper } from 'rsuite';

function HomePage() {
  return (
    <>
      <Container>
        <Grid fluid>
         <Row>
          <Col lg={24} xs={24}>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold font-sans">
            My name is Payam Dowlatyari.
          </h1>
          <p className='font-sans'>
            I'm a Software Engineer, UX Designer, Photographer, and Blogger. 
            I studied at UC Irvine and have been working in Silicon Valley since 2020. 
          </p>
          </div>
          </Col>
        </Row>
        <Row>
        <Col lg={12} xs={24}>
        <div className="space-y-6 my-4 mt-6">
          <p className='font-sans'>
          I'm interested in reading about psychology, sociology, philosophy, history, and the like, 
          and enjoy walking, cycling, and taking photographs. 
          Although I am not a writer, I like to write analytical essays, once in a while, on the topics I read about,
           providing my opinions on the matter, only for the record so that I can assess my philosophy and outlook in the future. 
           There is also a comment section for anyone who would like to present their views on the subject. 
          </p>

        </div>
        </Col>
        <Col lg={12} xs={24}>

        <div className="container max-w-3xl m-auto px-2 mt-4">
        <Image
          src="https://storage.googleapis.com/www.payamd.com/Portfolio/me-camera3-color.jpeg"
          alt="my desk"
          className='rounded'
          width={1920 / 4}
          height={1280 / 4}
        />
      </div>
        </Col>
        </Row> 
        </Grid>
      </Container>

     
    </>
  )
}

export default HomePage
