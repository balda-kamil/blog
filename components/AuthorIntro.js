import { Row, Col, Media, Image } from "react-bootstrap";

const AuthorIntro = () => 
  <Row>
    <Col md="8">
      <Media className="mb-4 admin-intro">
        <Image
          roundedCircle
          width={64}
          height={64}
          className="mr-3"
          src="https://cdn.sanity.io/images/wn3aa1zp/production/7842bd4f7e96e80b70b7f4d435abc0434e1dfe33-380x380.jpg"
          alt="my avatar"
        />
        <Media.Body>
          <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
          <p className="welcome-text">
            My name is Kamil Balda and I am an Front-end Developer, and this is
            my blog page.
          </p>
        </Media.Body>
      </Media>
    </Col>
  </Row>;


export default AuthorIntro