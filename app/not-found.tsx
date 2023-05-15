
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main>
      <div>
        <p >404</p>
        <h1>
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
			We are sorry, but the page you requested was not found.
        </p>
          <Link
            href="/articles/1"
          >
            View the first article (does not work)
          </Link>
      </div>
    </main>
  );
}
