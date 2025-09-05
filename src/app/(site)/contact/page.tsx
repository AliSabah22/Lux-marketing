import Image from "next/image";
import { images } from "@/lib/images";

export default function ContactPage() {
  return (
    <main className="px-6 py-20 mx-auto max-w-5xl">
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-3">
          <h1 className="font-serif text-4xl md:text-6xl">Book Your Discovery Call</h1>
          <p className="mt-4 text-slate/80">We partner with category creators and market leaders.</p>
          <form action="/api/lead" method="post" className="mt-10 grid gap-6">
            <div>
              <label className="text-sm">Full name</label>
              <input required name="name" className="mt-2 w-full rounded border border-foreground/10 bg-transparent px-4 py-3" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm">Email</label>
                <input required type="email" name="email" className="mt-2 w-full rounded border border-foreground/10 bg-transparent px-4 py-3" />
              </div>
              <div>
                <label className="text-sm">Company</label>
                <input name="company" className="mt-2 w-full rounded border border-foreground/10 bg-transparent px-4 py-3" />
              </div>
            </div>
            <div>
              <label className="text-sm">What outcome are you after?</label>
              <textarea required name="message" rows={6} className="mt-2 w-full rounded border border-foreground/10 bg-transparent px-4 py-3" />
            </div>
            <button className="justify-self-start rounded-full border border-foreground/20 px-6 py-3 text-sm">Request call</button>
          </form>
        </div>
        <div className="md:col-span-2">
          <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
            <Image src={images.contact.visual} alt="" fill className="object-cover" />
          </div>
          <div className="mt-6 rounded-lg border border-foreground/10 p-6 text-sm">
            <p className="opacity-80">“They reframed our category story and rebuilt our experience. Results were immediate and compounding.”</p>
            <p className="mt-3 text-slate/80">VP Growth, DTC Luxury</p>
          </div>
        </div>
      </div>
    </main>
  );
}


