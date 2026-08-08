import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { internalPath } from "../lib/api";

export default function CoverImage({ title, coverImage, slug }) {
  const slugPath = slug ? internalPath(slug) : null;
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={coverImage?.sourceUrl}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slugPath,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {slugPath ? (
        <Link href={slugPath} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
