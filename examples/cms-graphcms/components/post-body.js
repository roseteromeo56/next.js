import sanitizeHtml from "sanitize-html";
import postStyles from "./post-styles.module.css";

export default function PostBody({ content }) {
  const sanitizedContent = sanitizeHtml(content?.html ?? "");

  return (
    <div
      className={`max-w-2xl mx-auto post ${postStyles.post}`}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}
