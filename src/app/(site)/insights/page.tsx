import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { images } from "@/lib/images";

const POSTS = [
  { slug: "luxury-positioning", title: "Luxury Positioning: Price Follows Perception" },
  { slug: "creative-systems", title: "Creative Systems that Compound Performance" },
  { slug: "site-that-sells", title: "Design a Site that Sells on Sight" },
];

export default function InsightsPage() {
  return (
    <main className="px-6 py-20 mx-auto max-w-5xl">
      <h1 className="font-serif text-4xl md:text-6xl">Insights</h1>
      <p className="mt-6 text-slate/80 max-w-2xl">Strategy, luxury branding, and market leadership.</p>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {POSTS.map((p, i) => (
          <Link key={p.slug} href={`/insights/${p.slug}`} className="group block rounded-lg border border-foreground/10 overflow-hidden bg-background/60">
            <div className="relative aspect-[4/3]">
              <ImageWithFallback
                src={images.insights[p.slug as keyof typeof images.insights]}
                alt={p.title}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="hover-underline">{p.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}


