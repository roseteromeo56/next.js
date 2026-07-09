import markdownStyles from "./markdown-styles.module.css";
import DOMPurify from "isomorphic-dompurify";

export default function PostBody({ content }) {
  const sanitizedContent = DOMPurify.sanitize(content || "");

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    </div>
  );
}
