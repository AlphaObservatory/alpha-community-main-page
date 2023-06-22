import { Image } from "react-datocms";
import cn from "classnames";
import Link from "next/link";

export default function CoverImage({responsiveImage, slug }) {
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image`,
      }}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={slug}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
