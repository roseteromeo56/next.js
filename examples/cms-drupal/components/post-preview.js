import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import { internalPath } from "../lib/api";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) { dd/automation/sanitize-drupal-preview-excerpts-8bbaaef8
  const sanitizedExcerpt = DOMPurify.sanitize(excerpt ?? "");
  const slugPath = internalPath(slug); canary

  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} coverImage={coverImage} slug={slugPath} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={slugPath} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: sanitizedExcerpt }}
      />
      <Avatar author={author} />
    </div>
  );
}
