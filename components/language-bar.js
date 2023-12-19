import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageBar() {
  const currentPath = useRouter().asPath;

  return (
    <section className="flex-row flex items-center justify-end mr-0 mt-0 mb-0">
      <Link href={currentPath} locale="en">
        <span className="underline hover:text-success duration-200 transition-colors p-1 cursor-pointer">
          English
        </span>
      </Link>
      <Link href={currentPath} locale="es">
        <span className="underline hover:text-success duration-200 transition-colors p-1 cursor-pointer">
          Espanol
        </span>
      </Link>
      <Link href={currentPath} locale="it">
        <span className="underline hover:text-success duration-200 transition-colors p-1 cursor-pointer">
          Italian
        </span>
      </Link>
      <Link href={currentPath} locale="tr">
        <span className="underline hover:text-success duration-200 transition-colors p-1 cursor-pointer">
          Turkish
        </span>
      </Link>
      <Link href={currentPath} locale="fr">
        <span className="underline hover:text-success duration-200 transition-colors p-1 cursor-pointer">
          French
        </span>
      </Link>
      <Link href={currentPath} locale="fa">
        <span className="underline hover:text-success duration-200 transition-colors p-1 cursor-pointer">
          Persian
        </span>
      </Link>
    </section>
  );
}
