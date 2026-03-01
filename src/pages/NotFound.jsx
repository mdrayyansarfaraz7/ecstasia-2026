import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: "url('/notfound.webp')" }}
    >

      <div className="relative z-10">
        <h1 className="text-9xl font-heading mb-4 text-black">404</h1>

        <p className="font-heading mb-6 text-black text-2xl">
          Page not found
        </p>

        <Link
          to="/"
          className="px-8 py-1 border border-black text-black rounded font-body"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
