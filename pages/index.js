import { Row, Col } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import CardListItem from "components/CardListItem";
import CardItem from "components/CardItem";

import { getAllBlogs } from "lib/api";

export default function Home({ blogs }) {
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
      <Row className="mb-5">
        {/* <Col md="10">
          <CardListItem />
        </Col> */}

        {blogs.map((blog) => 
          <Col key={blog.slug} md="4">
            <CardItem title={blog.title} subtitle={blog.subtitle}/>
          </Col>
        )}
        {JSON.stringify(blogs)}
      </Row>
    </PageLayout>
  );
}

//this function is called during build time (build time)
//this is called on the server, never on the client side
//this is not event part of code that is send to the browser!
//Provides props to your page
//It will create static page
export async function getStaticProps() {
  console.log('calling getStaticProps')
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
