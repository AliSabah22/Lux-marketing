import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-foreground/10 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl">Lux Marketing</p>
          <p className="mt-3 text-sm text-slate/80 max-w-sm">
            Luxury brand experiences that convert, connect, and compound results.
          </p>
        </div>
        <nav className="text-sm grid grid-cols-2 gap-4 md:gap-2 md:grid-cols-1">
          <Link className="hover-underline" href="/about">About</Link>
          <Link className="hover-underline" href="/services">Services</Link>
          <Link className="hover-underline" href="/case-studies">Case Studies</Link>
          <Link className="hover-underline" href="/insights">Insights</Link>
          <Link className="hover-underline" href="/contact">Contact</Link>
        </nav>
        <div className="text-sm self-end md:self-auto">
          <p className="opacity-70">© {year} Lux Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


