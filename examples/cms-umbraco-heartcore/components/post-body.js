import postStyles from "./post-styles.module.css";
import DOMPurify from "isomorphic-dompurify";

export default function PostBody({ content }) {
  const sanitizedContent = DOMPurify.sanitize(content ?? "");

  return (
    <div
      className={`max-w-2xl mx-auto post ${postStyles.post}`}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}
