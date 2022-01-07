import PageLayout from "components/PageLayout";
import { useRouter } from "next/router";
import { getBlogBySlug, getAllBlogs } from "lib/api";

const BlogDetail = ({ blog }) => {
  return (
    <PageLayout>
      <h1>Detail page - {blog.slug}</h1>
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