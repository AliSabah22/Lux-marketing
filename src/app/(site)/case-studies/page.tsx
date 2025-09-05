import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { images } from "@/lib/images";

const CASES = [
  { slug: "aurum", title: "Aurum", result: "+212% DTC revenue", summary: "Rebrand + conversion design" },
  { slug: "noir", title: "Noir Maison", result: "4.8x ROAS", summary: "Full-funnel content + CRO" },
  { slug: "verdi", title: "Verdi", result: "+68% lead quality", summary: "Website + thought leadership" },
];

export default function CaseStudiesIndex() {
  return (
    <main className="px-6 py-20 mx-auto max-w-6xl">
      <h1 className="font-serif text-4xl md:text-6xl">Case Studies</h1>
      <p className="mt-6 text-slate/80 max-w-3xl">
        Challenge → Process → Transformation → Results. Explore select engagements and their measurable impact.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {CASES.map((c, i) => (
          <Link key={c.slug} href={`/case-studies/${c.slug}`} className="block group">
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <ImageWithFallback
                src={(i === 0 && images.caseStudies.aurum) || (i === 1 && images.caseStudies.noir) || images.caseStudies.verdi}
                alt={c.title}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl">{c.title}</h3>
                <p className="text-sm text-slate/80">{c.summary}</p>
              </div>
              <span className="text-sm text-gold">{c.result}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}


