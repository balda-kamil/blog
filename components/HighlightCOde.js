import highlight from "highlight.js";

import { createRef, useEffect } from "react";
import { findDOMNode } from "react-dom";

const HighlightCode = ({ children, language, filename }) => {
  const code = createRef();

  useEffect(() => {
    // eslint-disable-next-line react/no-find-dom-node
    highlight.highlightBlock(findDOMNode(code.current))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <pre className="mb-20">
      <div className="code-filename">## {filename}</div>
      <code className={language} ref={code}>
        {children}
      </code>
    </pre>
  );
};

export default HighlightCode;
