import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            My name is Payam Dowlatyari.
          </h1>
          <p className='font-sans'>
            Hey, I'm a Software Engineer, UX Designer, Photographer, and Blogger. 
          </p>
          <p>
          I studied at UC Irvine and have worked as an engineer in Silicon Valley since 2020. 
          I'm interested in reading about psychology, sociology, philosophy, history, and the like, 
          and enjoy walking, cycling, and taking photographs. 
          </p>
          <p>
          Although I am not a writer, I like to write analytical essays, once in a while, on the topics I read about,
           providing my opinions on the matter, only for the record so that I can assess my philosophy and outlook in the future. 
           There is also a comment section for anyone who would like to present their views on the subject. 
          </p>

        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/desk2.jpeg"
          alt="my desk"
          className='rounded'
          width={1920 / 2}
          height={1280 / 2}
        />
      </div>
    </>
  )
}

export default HomePage
