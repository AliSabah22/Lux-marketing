import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-6 py-32 mx-auto max-w-3xl text-center">
      <h1 className="font-serif text-4xl md:text-6xl">Page not found</h1>
      <p className="mt-6 text-slate/80">The page you’re looking for doesn’t exist or was moved.</p>
      <div className="mt-10">
        <Link href="/" className="hover-underline text-sm">Go back home</Link>
      </div>
    </main>
  );
}


