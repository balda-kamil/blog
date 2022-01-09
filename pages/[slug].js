import BlogHeader from "components/BlogHeader";
import PageLayout from "components/PageLayout";
import { getBlogBySlug, getAllBlogs } from "lib/api";
import { Row, Col } from "react-bootstrap";

const BlogDetail = ({ blog }) => {
  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            image={blog.coverImage}
            author={blog.author}
            date={blog.date}
          />
          <hr />
          {/* Blog Content Here */}
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsul in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).
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
