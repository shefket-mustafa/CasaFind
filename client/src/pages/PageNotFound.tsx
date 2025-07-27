import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      <h1 className="text-5xl font-bold text-black mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Page not found</p>
      <Link
        to="/"
        className="text-white bg-black px-6 py-3 rounded hover:bg-gray-800 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
