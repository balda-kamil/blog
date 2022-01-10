import BlockContent from "@sanity/block-content-to-react";
import HighlightCode from "./HighlightCode";
import Image from "next/image";

import { urlFor } from "lib/api";

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => (
      <HighlightCode language={language} filename={filename}>
        {code}
      </HighlightCode>
    ),
    image: ({ node: { asset, alt } }) => {
      return (
        <div className="blog-image">
          <Image
            src={urlFor(asset.url).fit('max').url()}
            layout="fill"
            alt={alt}
          />
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
  },
};

const BlogContent = ({ content }) => {
  return (
    <BlockContent
      blocks={content}
      serializers={serializers}
    />
  );
};

export default BlogContent;
