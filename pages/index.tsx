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
          I am a professional Software Engineer and UX Designer, graduated from UC Irvine and have been working in the tech industry since 2020. 
          I am a hobbyist Photographer and Blogger interested in reading about psychology, sociology, philosophy, history, politics, and the like.           
          </p>
          </div>
          </Col>
        </Row>
        <Row>
        <Col lg={12} xs={24}>
        <div className="space-y-6 my-4 mt-6">
          <p className='font-sans'>
          I like to bring my thoughts on paper and write analytical essays, once in a while, on the topics I read about and matter to me as a member of society. 
          </p>
          <p className='font-sans'>
          In this blog, I provide my opinions on different issues, only for the record so that I can assess my philosophy and outlook in the future. 
          I also introduce books and films I've read and watched recently and found impressive and write a brief review sharing my insights.
          </p>
          <p className='font-sans'>
          There is also a comment section for anyone who would like to share their views about the topic with me and others. 
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
