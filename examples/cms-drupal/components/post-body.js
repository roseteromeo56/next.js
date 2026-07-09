import styles from "./post-body.module.css";
import DOMPurify from "isomorphic-dompurify";

export default function PostBody({ content }) {
  const sanitizedContent = DOMPurify.sanitize(content ?? "");

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    </div>
  );
}
