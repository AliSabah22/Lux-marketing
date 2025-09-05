"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls = (href: string) =>
    `hover-underline ${pathname === href ? "opacity-100" : "opacity-70"}`;

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-colors ${scrolled ? "backdrop-blur border-b border-foreground/10" : ""}`}>
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-lg">Lux</Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/about" className={linkCls("/about")}>
            About
          </Link>
          <Link href="/services" className={linkCls("/services")}>
            Services
          </Link>
          <Link href="/case-studies" className={linkCls("/case-studies")}>
            Case Studies
          </Link>
          <Link href="/insights" className={linkCls("/insights")}>
            Insights
          </Link>
        </nav>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 rounded-full bg-gold text-background px-8 py-4 text-md font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gold/90 backdrop-blur-sm border border-gold/20"
        >
          Book Call
        </Link>
      </div>
    </header>
  );
}


