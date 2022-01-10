import BlogContent from "components/BlogContent";
import BlogHeader from "components/BlogHeader";
import PageLayout from "components/PageLayout";
import { getBlogBySlug, getAllBlogs } from "lib/api";
import { Row, Col } from "react-bootstrap";

import { urlFor } from "lib/api";


const BlogDetail = ({ blog }) => {
  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            image={urlFor(blog.coverImage).fit('max').url()}
            author={blog.author}
            date={blog.date}
          />
          <hr />
          <BlogContent content={blog.content}/>
        </Col>
      </Row>
    </PageLayout>
  );
};

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  return {
    paths: blogs?.map((blog) => ({
      params: { slug: blog.slug },
    })),
    fallback: false,
  };
}

export default BlogDetail;
