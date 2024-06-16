import Container from "../components/container";
import Image from "next/image";
import Link from "next/link";
import { Grid, Row, Col, Panel, Tag } from "rsuite";

const getTag = (text: string) => {
  return <Tag size="lg">{text}</Tag>;
};

function HomePage() {
  return (
    <>
      <Container>
        <Grid>
          <Row className="m-1 p-4">
            <Col md={12} sm={24}>
              <div className="space-y-2">
                <h4 className="font-sans text-lg font-semibold">
                  My name is Payam Dowlatyari.{" "}
                </h4>

                <p className="font-sans text-sm">
                  I am a Software Engineer and UX Designer, graduated from UC
                  Irvine and work in the tech industry. I am a hobbyist
                  photographer and blogger interested in art, philosophy, and
                  social siences.
                </p>
                <p className="font-sans text-sm">
                  I like to bring my thoughts on paper, once in a while, on the
                  issues that matter to me. That will give me the possibility to
                  assess my philosophy and outlook in the future. I also
                  introduce books and films I've found impressive and write a
                  brief review sharing my insights. I provided a comment section
                  for readers who would like to share their views with me and
                  others.
                </p>
              </div>
            </Col>
            <Col lg={12} xs={24}>
              <div className="container max-w-3xl m-auto px-2 my-4">
                <Image
                  src="https://storage.googleapis.com/www.payamd.com/Portfolio/me-camera3-color.jpeg"
                  alt="my photo"
                  className="rounded"
                  width={400}
                  height={300}
                />
              </div>
            </Col>
          </Row>
          <Row className="px-1">
            <Link
              className="text-inherit hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline"
              href="/posts"
            >
              <Panel
                header="Posts"
                className="bg-gray-50 hover:bg-gray-100 duration-500 my-1 py-4"
              >
                <Col md={12} sm={24}>
                  <Image
                    src="https://storage.googleapis.com/www.payamd.com/Portfolio/women-life-liberty.webp"
                    alt="wall"
                    className="rounded"
                    width={240}
                    height={240}
                  />
                </Col>
                <Col md={12} sm={24}>
                  <h5 className="font-sans pt-2 text-base font-semibold">
                    Women, Life, Liberty
                  </h5>
                  <p className="font-sans pb-2">
                    In this article, I discussed an ongoing movement in Iran
                    along with a breif history of social movements since 1906.
                  </p>
                </Col>
              </Panel>
            </Link>
          </Row>
          <Row>
            <Col md={12} sm={24}>
              <Link
                className="text-inherit hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline"
                href="/books"
              >
                <Panel
                  header="Books"
                  className="bg-gray-50 hover:bg-gray-100 duration-500 my-1 py-2"
                >
                  <h5 className="font-sans font-semibold text-base">
                    The Drama of the Gifted Child
                  </h5>
                  <p className="font-sans text-base text-slate-700">
                    Alice Miller
                  </p>
                  <p className="font-sans">
                    A book about psychology of childhood
                  </p>
                </Panel>
              </Link>
            </Col>
            <Col md={12} sm={24}>
              <Link
                className="text-inherit hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline"
                href="/films"
              >
                <Panel
                  header="Films"
                  className="bg-gray-50 hover:bg-gray-100 duration-500 my-1 py-2"
                >
                  <h5 className="font-sans font-semibold text-base">
                    Fanny and Alexander
                  </h5>
                  <p className="font-sans text-base text-slate-700">
                    Ingmar Bergman
                  </p>
                  <p className="font-sans">A classic European film</p>
                </Panel>
              </Link>
            </Col>
          </Row>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
