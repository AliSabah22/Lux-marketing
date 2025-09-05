import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="px-6 py-20 mx-auto max-w-3xl">
      <h1 className="font-serif text-4xl md:text-6xl">Thank you</h1>
      <p className="mt-4 text-slate/80">
        We received your request. A strategist will reach out shortly to schedule your discovery call.
      </p>
      <div className="mt-8">
        <Link href="/" className="hover-underline text-sm">Return home</Link>
      </div>
    </main>
  );
}


