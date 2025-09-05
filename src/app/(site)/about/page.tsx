import { images } from "@/lib/images";
import { ImageWithFallback } from "@/components/ImageWithFallback";
export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="px-6 pt-28 md:pt-36 pb-10">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <h1 className="font-serif text-4xl md:text-6xl">Vision. Impact. Difference.</h1>
            <p className="mt-6 text-slate/80 max-w-3xl">
              We build market leaders. Our work blends strategy, aesthetics, and performance to create brands that command attention and deliver measurable outcomes.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="relative rounded-lg overflow-hidden aspect-[16/10]">
              <ImageWithFallback
                src={images.about.hero}
                alt="Studio"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl">Leadership</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="rounded-lg border border-foreground/10 overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <ImageWithFallback
                      src={images.about.leadership[i - 1]}
                      alt={`Leader ${i}`}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-serif">Partner {i}</p>
                    <p className="text-sm text-slate/80">Strategy & Creative</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl">Impact</h2>
            <ul className="mt-6 grid grid-cols-2 gap-6 text-sm">
              <li className="p-6 rounded bg-foreground/5">$50M+ revenue influenced</li>
              <li className="p-6 rounded bg-foreground/5">120+ brands launched</li>
              <li className="p-6 rounded bg-foreground/5">4.8x avg ROAS</li>
              <li className="p-6 rounded bg-foreground/5">Global clientele</li>
            </ul>
            <div className="mt-10 rounded-lg border border-foreground/10 p-6">
              <p className="font-serif text-xl">Our POV</p>
              <p className="mt-3 text-slate/80">Value is signaled before it’s proven. We design signals that set price, shape demand, and compound results.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


