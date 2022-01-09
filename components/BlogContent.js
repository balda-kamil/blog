import BlockContent from '@sanity/block-content-to-react'
import HighlightCode from './HighlightCode';

const serializers = {
  types: {
    code: ({node: {language, code, filename}}) => (
      <HighlightCode language={language} filename={filename}>
        {code}
      </HighlightCode>
    )
  }
}

const BlogContent = ({content}) => {
  return (
    <BlockContent
      blocks={content}
      serializers={serializers}
      imageOptions={{ w: 320, h: 240, fix: "max" }}
    />
  );
};

export default BlogContent;
