import CoverImage from "./cover-image";

export default function PostHeader({coverImage }) {
  return (
    <>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
    </>
  );
}
